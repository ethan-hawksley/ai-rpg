<script lang="ts">
    import {base} from "\$app/paths";

    let {children} = $props();

    export const prerender = true;
</script>

<nav>
    <a href="{base}/">Home</a>
    <a href="{base}/about">About</a>
    <a href="{base}/start">Start</a>
    <a href="https://github.com/ethan-hawksley/ai-rpg">GitHub Repo</a>
</nav>

{@render children()}