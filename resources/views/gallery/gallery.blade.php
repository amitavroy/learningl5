@extends('master')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <h1>Your Galleries</h1>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            @if($galleries->count() == 0)
                <p>Add a new Gallery</p>
            @else
                <ul>
                    @foreach($galleries as $gallery)
                        <li><a href="{{url('gallery/view/' . $gallery->id)}}">{{$gallery->name}}</a></li>
                    @endforeach
                </ul>
            @endif
        </div>

        <div class="col-md-6">
            <p>Fill this form to add a new Gallery</p>

            <form action="{{url('gallery/save')}}" method="post" class="form">
                <div class="form-group">
                    <label for="galleryName">Gallery name:</label>
                    <input type="text"
                           name="galleryName" id="galleryName"
                           class="form-control" placeholder="Enter gallery name">
                </div>

                <div class="form-group">
                    <button class="btn btn-success">Save</button>
                </div>
            </form>
        </div>
    </div>
@endsection