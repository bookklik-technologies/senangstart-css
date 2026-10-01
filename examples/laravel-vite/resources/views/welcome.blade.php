@extends('layouts.app')

@section('content')
    <section layout="flex col center" space="p-y:giant g:medium">
        <h1 visual="text-size:huge font:bold">Build Laravel UIs with plain words</h1>
        <p visual="text:neutral-600">Utilities are generated from the attributes in your Blade views.</p>
    </section>

    <section id="features" layout="grid grid-cols:3 tab:grid-cols:1" space="g:medium">
        <x-card title="Readable">layout, space, visual — three attributes, no class soup.</x-card>
        <x-card title="Tiny" :highlight="true">Only the tokens you use end up in the CSS.</x-card>
        <x-card title="Fast">Vite HMR: edit a view, the CSS updates.</x-card>
    </section>

    @foreach ($plans as $plan)
        <div layout="flex row between" space="p:small" visual="{{ $loop->even ? 'bg:neutral-100' : 'bg:white' }}">
            <span>{{ $plan->name }}</span>
            <span visual="font:bold">{{ $plan->price }}</span>
        </div>
    @endforeach
@endsection
