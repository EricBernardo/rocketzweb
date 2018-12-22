<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>@yield('title_prefix', config('adminlte.title_prefix', ''))
        @yield('title', config('adminlte.title', 'AdminLTE 2'))
        @yield('title_postfix', config('adminlte.title_postfix', ''))</title>

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

    <link rel="stylesheet" href="{{ asset('css/app.css?v=' . getenv('APP_VERSION')) }}">

    @yield('page_css')

    <script>const base_url = {!! json_encode(url('/')) !!} +'/';</script>

</head>
<body class="hold-transition @yield('body_class')">

@yield('body')

<script src="{{ asset('js/app.js?v=' . getenv('APP_VERSION')) }}"></script>

@yield('page_script')

</body>
</html>
