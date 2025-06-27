<script lang="ts">
    import {base} from "\$app/paths";

    let {children} = $props();
</script>

<nav>
    <a href="{base}/">Home</a>
    <a href="{base}/about">About</a>
    <a href="{base}/start">Start</a>
    <a href="{base}/play">Play</a>
</nav>

{@render children()}