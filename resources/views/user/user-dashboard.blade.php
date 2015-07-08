@extends('master')

@section('content')
<div class="row">
    <div class="col-md-12">
        <h1>Welcome {{Auth::user()->name}}</h1>
    </div>
</div>

<div class="row">
    <div class="col-md-12">
        <a href="{{url('places/my-places')}}" class="btn btn-primary">Add Places DEMO</a>
    </div>
</div>
@endsection
