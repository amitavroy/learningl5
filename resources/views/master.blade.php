<!DOCTYPE html>
<html ng-app="myApp">
<head>
    <title>Gallery application in Angular JS</title>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.0.1/dropzone.css">
    <link rel="stylesheet" type="text/css" href="{{ asset('bower_components/bootstrap/dist/css/bootstrap.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('bower_components/font-awesome/css/font-awesome.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{url('css/bootstrap-lumen.css')}}">
    <link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
    <script>
        var baseUrl = "{{ url('/') }}/";
        var csrfToken = "{{csrf_token()}}";
    </script>
    {{csrf_field()}}
</head>
<body>

    <div class="container" ng-controller="globalController">
        <div ng-view></div>
    </div>

    <script type="text/javascript" src="{{asset('bower_components/jquery/dist/jquery.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('bower_components/bootstrap/dist/js/bootstrap.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('bower_components/angular/angular.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('bower_components/angular-route/angular-route.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('bower_components/angular-cookies/angular-cookies.min.js')}}"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.0.1/min/dropzone.min.js"></script>
    <script type="text/javascript" src="{{url(elixir('js/app.js'))}}"></script>
    <script type="text/javascript" src="{{url(elixir('js/models.js'))}}"></script>
    <script type="text/javascript" src="{{url(elixir('js/controllers.js'))}}"></script>
    <script type="text/javascript" src="{{url(elixir('js/directives.js'))}}"></script>
</body>
</html>
