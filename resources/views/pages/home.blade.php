@extends('app')

@section('content')
    <div class="container" ng-controller="homeCtrl">
        <div class="page-header">
            <div class="row"><div class="col-lg-12"><h1>Material Design home page</h1></div></div>
        </div>

        <div class="row">
            <div class="col-lg-7 col-md-7 col-sm-7">
                <div class="card custom-card shadow-z-2" ng-repeat="post in posts | orderBy:'-id'" ng-hide="loading">
                    <h4>#@{{ post.id }} @{{ post.title }}</h4>
                    <p>@{{ post.body  }}</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-7 col-md-7 col-sm-7">
                <div class="card custom-card shadow-z-2" ng-repeat="post in posts | orderBy:'-id'" ng-show="loading">Loading...</div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <a href="{{ $fb_loginUrl  }}" class="btn btn-material-teal-300">Facebook Login</a>
            </div>
        </div>
    </div>
@endsection