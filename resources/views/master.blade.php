<!doctype html>
<html lang="en" ng-app="myApp">
    <head>
        <meta charset="UTF-8">
        <title>DEMO Application</title>
        <link rel="stylesheet" href="{{url(elixir('css/all.css'))}}"/>
        <link rel="stylesheet" href="{{url(elixir('css/app.css'))}}"/>
        <script>var baseUrl = "{{ url('/') }}";</script>
    </head>
    <body>
        @if(Auth::user())
            @include('partials.nav')
        @endif
        <div class="container">
            @if(Session::has('flash_message'))
            <div id="message-success" class="alert alert-success">{{Session::get('flash_message')}}</div>
            @endif

            @if(Session::has('flash_error'))
            <div id="message-danger" class="alert alert-danger">{{Session::get('flash_error')}}</div>
            @endif

            @if(Session::has('flash_warning'))
            <div id="message-warning" class="alert alert-warning">{{Session::get('flash_warning')}}</div>
            @endif

            @yield('content')
        </div>
        <script src="{{url(asset('js/vendor/vendor.js'))}}"></script>
        <script src="{{url(elixir('js/all.js'))}}"></script>
        @yield('scripts')
    </body>
</html>
