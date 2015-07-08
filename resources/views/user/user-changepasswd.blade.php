@extends('master')

@section('content')
<div class="row">
    <div class="col-md-12">
        <h1>Change your password</h1>
    </div>
</div>

<div class="row">
    <div class="col-md-12">
        <form action="{{ url('user/save-new-password') }}" method="POST">

            <input type="hidden" name="_token" value="{{ csrf_token() }}">

            <div class="form-group">
                <input type="password" name="current_password"
                id="current_password" placeholder="Enter current password"
                tabindex="1" class="form-control"/>
            </div>

            <div class="form-group">
                <input type="password" name="new_password"
                id="new_password" placeholder="Enter your new password"
                tabindex="2" class="form-control"/>
            </div>

            <div class="form-group">
                <input type="password" name="confirm_new_password"
                id="confirm_new_password" placeholder="Confirm your new password"
                tabindex="3" class="form-control"/>
            </div>

            <button class="btn btn-primary">Save</button>
        </form>
    </div>
</div>
@endsection
