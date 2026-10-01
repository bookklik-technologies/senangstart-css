<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ $title ?? config('app.name') }}</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body visual="bg:neutral-50 text:neutral-900">
    <header layout="flex row between center" space="p:medium" visual="bg:white shadow:small">
        <a href="{{ url('/') }}" visual="font:bold text-size:big">{{ config('app.name') }}</a>
        <nav layout="flex row" space="g:medium">
            <a href="#features" visual="hover:text:primary">Features</a>
            <a href="#pricing" visual="hover:text:primary">Pricing</a>
        </nav>
    </header>

    <main layout="flex col" space="p:big g:big">
        @yield('content')
    </main>
</body>
</html>
