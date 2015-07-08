@extends('master')

@section('content')
<div class="row">
    <div class="col-md-12"><h1>Edit profile</h1></div>
</div>

<div class="row">
    <div class="col-md-12">
        <form action="{{ url('user/profile/save') }}" method="POST">

            <input type="hidden" name="_token" value="{{ csrf_token() }}">

            <div class="form-group">
                <input type="text" name="name"
                id="name" placeholder="Enter your display name"
                class="form-control" tabindex="1" value="{{$user->name}}" />
            </div>

            <div class="form-group">
                <input type="text" name="email_address"
                id="email_address" placeholder="Email address"
                class="form-control" disabled value="{{$user->email}}" />
            </div>

            <button class="btn btn-primary">Save</button>
        </form>
    </div>
</div>
@endsection
