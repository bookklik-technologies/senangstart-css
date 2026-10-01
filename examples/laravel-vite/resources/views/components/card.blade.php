@props(['title', 'highlight' => false])

{{-- Static parts of a Blade-interpolated attribute are scanned; both branches
     of the ternary are string literals, so both tokens are generated. --}}
<article layout="flex col" space="p:medium g:small"
         visual="rounded:medium {{ $highlight ? 'bg:primary text:white' : 'bg:white' }} shadow:small">
    <h3 visual="font:bold">{{ $title }}</h3>
    <div>{{ $slot }}</div>
</article>
