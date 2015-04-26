<!doctype html>
<html lang="en" ng-app="app">
<head>
    <meta charset="UTF-8">
    <title>Laravel 5 tutorial series</title>
    <link rel="stylesheet" href="{{ elixir('css/all.css')  }}"/>
    <script>var baseUrl = "{{ url('/') }}/";</script>
</head>
<body>
<div class="header-panel shadow-z-2">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-3">
                <h1>Laravel 5 tutorial series</h1>
            </div>
        </div>
    </div>
</div>
@yield('content')
<script src="{{ elixir('js/all.js')  }}"></script>
<script>
    $(document).ready(function() {
        // This command is used to initialize some elements and make them work properly
        $.material.init();
    });
</script>
</body>
</html>