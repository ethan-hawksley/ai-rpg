<script lang="ts">
    export let data: {
        settings: Record<string, unknown>;
        hasSettings: boolean;
    };
</script>

<h2>AI-RPG</h2>
{#if data.hasSettings}
    <p>Game ready!</p>
{:else}
    <p>No user data available</p>
{/if}