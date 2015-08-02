@extends('master')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <h1>Gallery {{$gallery->name}}</h1>
        </div>
    </div>

    {{--Uploading the image to this gallery--}}
    <div class="row">
        <div class="col-md-12">
            @include('gallery.img-upload')
        </div>
    </div>
@endsection