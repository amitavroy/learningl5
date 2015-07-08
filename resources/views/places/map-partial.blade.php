<!DOCTYPE html>
<html>
<head>
    <title>Map</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <style>
        html, body, #map-canvas {
            height: 100%;
            margin: 0px;
            padding: 0px
        }
        .controls {
            margin: 6px 14px 14px 6px;
            border: 1px solid transparent;
            border-radius: 2px 0 0 2px;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            height: 32px;
            outline: none;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
            float: left;
        }

        #address_for_google {
            text-overflow: ellipsis;
        }

        #address_for_google:focus {
            border-color: #4d90fe;
        }

        .pac-container {
            font-family: Roboto;
            z-index: 20;
        }

        #type-selector {
            color: #fff;
            background-color: #4d90fe;
            padding: 5px 11px 0px 11px;
        }

        #type-selector label {
            font-family: Roboto;
            font-size: 13px;
            font-weight: 300;
        }

        #map-canvas{
            height: 400px;
            width: 720px;
        }

        .clearfix {
            clear: both;
        }

        .button {
            padding: 4px;
            margin-top: 6px;
            min-width: 100px;
        }

        .modal{
            z-index: 20;
        }

        .modal-backdrop{
            z-index: 10;
        }​

    </style>
    <link rel="stylesheet" href="{{url(elixir('css/all.css'))}}"/>
    <link rel="stylesheet" href="{{url(elixir('css/app.css'))}}"/>
    <script src="{{url(asset('js/vendor/vendor.js'))}}"></script>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true&libraries=places"></script>
    <script>var baseUrl = "{{ url('/') }}";</script>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-sm-8">
                <div class="form-group">
                    <input type="text" name="place_name"
                    id="place_name" placeholder="Enter the name of the place"
                    class="form-control"/>
                </div>

                <div class="form-group">
                    <input type="text" name="address_for_google"
                    id="address_for_google" placeholder="Enter the places to search"
                    class="form-control"/>
                </div>

                <input type="hidden" name="_token" id="_token" value="{{ csrf_token() }}" />
            </div>

            <div class="col-sm-4">
                <button class="btn btn-primary" id="btnSavelocation">Add</button>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <div class="alert alert-success fade in">
                    <strong>Success!</strong> Location saved successfully.
                </div>

                <div class="alert alert-danger fade in"></div>

                <div id="map-canvas"></div>
            </div>
        </div>
    </div>

    <script type="text/javascript">
    $('.alert').hide(); // hide the alerts at first
    var newLat;
    var newLong;
    var draggedLat;
    var draggedLong;
    var dragged = false;

    function initialize() {
        var mapOptions = {
            center: new google.maps.LatLng(19.0671276, 73.0135067),
            zoom: 15,
            zIndex:9999
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        var input = /** @type {HTMLInputElement} */(
            document.getElementById('address_for_google'));

        var types = document.getElementById('type-selector');
        // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        // map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);

        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);

        var infowindow = new google.maps.InfoWindow();
        var marker = new google.maps.Marker({
            map: map,
            anchorPoint: new google.maps.Point(0, -29),
            zIndex:9999,
            draggable:true
        });

        google.maps.event.addListener(autocomplete, 'place_changed', function() {
            infowindow.close();
            marker.setVisible(false);
            var place = autocomplete.getPlace();
            if (!place.geometry) {
                window.alert("Autocomplete's returned place contains no geometry");
                return;
            }

            // If the place has a geometry, then present it on a map.
            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            } else {
                map.setCenter(place.geometry.location);
                map.setZoom(17);  // Why 17? Because it looks good.
            }

            marker.setPosition(place.geometry.location);
            marker.setVisible(true);

            var address = '';
            if (place.address_components) {
                address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
                ].join(' ');
            }

            infowindow.setContent(place.formatted_address);//('<div><strong>' + place.name + '</strong><br>' + address);
            infowindow.open(map, marker);

            newLat = place.geometry.location.lat();
            newLong = place.geometry.location.lng();
        });

        //drag event of marker
        //change input text and marker's infowindow(tooltip) content
        google.maps.event.addListener(marker, 'dragend', function(event) {
            pos = marker.getPosition();
            geocoder = new google.maps.Geocoder();
            geocoder.geocode({
                latLng: pos
            },
            function(place, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    infowindow.setContent(place[0].formatted_address);
                    $("#address_for_google").val(place[0].formatted_address);
                    draggedLat = event.latLng.lat();
                    draggedLong = event.latLng.lng();
                    dragged = true;
                }
                else {
                 alert('Cannot determine address at this location.');
             }

         });
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);

    $("#btnSavelocation").click(function() {
        if (dragged == true) {
            newLat = draggedLat;
            newLong = draggedLong;
        }

        $.post(baseUrl + '/geo_location', {
            address: $('#address_for_google').val(),
            latitude: newLat,
            longitude: newLong,
            location_type:$('#place_name').val(),
            _token:$('#_token').val()
        }, function (data, status) {
            if(status == 'success') {
                $('.alert-success').slideDown().delay(1000).slideUp(3000, function() {
                    $('#place_name').val('');
                    $('#address_for_google').val('');
                    initialize();
                })
            } else {
                $('.alert-danger').html('Error, Please try again.')
                .slideDown()
                .delay(1000)
                .slideUp();
            }
        })
    });
</script>
</body>
</html>
