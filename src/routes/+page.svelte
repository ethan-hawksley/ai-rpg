<script lang="ts">
    import {base} from "\$app/paths";
</script>

<div class="container">
    <h1>Welcome to the AI RPG!</h1>
    <p>In this RPG, you play by the rules of an AI storyteller.</p>

    <p>Different AI storytellers have different attitudes. Some are more lenient, and others are much stricter.</p>
    <p>You'll also have the choice of scenario. Through this, you can experience many different places.</p>
    <p>Additionally, some storytellers may be happy for you to change the story at the very beginning to something else
        if
        you would rather. Don't be afraid to get creative, the sky is the limit!</p>

    <a href="{base}/start" id="start">Start</a>
</div>

<style>
    #start {
        background-color: var(--accent-color);
        color: var(--text-color);
        border: none;
        border-radius: var(--border-radius);
        padding: 0.75em 1.5em;
        font-size: 1em;
        cursor: pointer;
        transition: background-color var(--transition), box-shadow var(--transition);
        margin-top: 0.5em;
    }
</style>