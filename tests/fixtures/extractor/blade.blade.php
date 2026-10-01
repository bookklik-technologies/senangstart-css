{{-- Blade comment trap: <div layout="trap-blade-comment"> --}}
<!-- HTML comment trap: <div layout="trap-html-comment"> -->
@extends('layouts.app')
@php
  $layout = 'trap-php-block';
  $visual = "visual=bg:trap";
@endphp

<div layout="flex col" space="p:medium" visual="bg:white">
  <nav layout="{{ $open ? 'flex row' : 'grid' }}" space="{{ $compact ? 'p:small' : 'p:big' }}"></nav>
  <aside visual="rounded:medium {{ $dark ? 'bg:black' : 'bg:light' }} shadow-{{ $level }}"></aside>
  <span visual="{!! $raw ? 'text:white' : 'text:black' !!}"></span>
  <span layout=" {{ $x }} between "></span>
  <button visual="bg:primary @if($danger) bg:danger @elseif($warn) bg:warning @else bg:success @endif"></button>
  <div space="@class(['m:small', 'g:medium' => $gap])"></div>
  <div {{ $attributes }} layout="wrap" data-layout="trap-data"></div>
  <div layout="{{ $layout }}" visual="{{ config('app.visual') }}"></div>
  @if($show)
    <section layout="center" visual="bg:info">{{ $text }}</section>
  @else
    <section layout="around"></section>
  @endif
  @foreach($items as $item)
    <p visual="text:muted">{{ $item }} space = big</p>
  @endforeach
  <x-card :layout="$open ? 'relative' : 'absolute'" :visual="'bg:card'" />
</div>
