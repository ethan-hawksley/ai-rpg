<script lang="ts">
    let {children} = $props();
</script>

<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/start">Start</a>
    <a href="/play">Play</a>
</nav>

{@render children()}