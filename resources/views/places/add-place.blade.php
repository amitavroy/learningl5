@extends('master')

@section('content')
<div class="row">
    <div class="col-md-12"><h1>My Places</h1></div>
</div>

<div class="row">
    <div class="col-md-12">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg">Add New Place</button>

        <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" id="myModal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Get Location</h4>
                    </div>
                    <div class="modal-body">
                        <iframe src="{{url('places/map')}}" height="500" width="100%" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-12">
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Added on</th>
                </tr>
            </thead>
            <tbody>
                @foreach($places as $place)
                <tr>
                    <td>{{$place->name}}</td>
                    <td>{{$place->type}}</td>
                    <td>{{$place->latitude}}</td>
                    <td>{{$place->longitude}}</td>
                    <td>{{$place->created_at}}</td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>
@endsection
