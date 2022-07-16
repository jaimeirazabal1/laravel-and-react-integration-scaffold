<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <meta name="viewport" content="initial-scale=1, width=device-width" />

    <title>Sistema de Colegios</title>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <!-- React root DOM -->
    <div id="root">
    </div>
    <!-- React JS -->
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>