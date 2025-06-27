<script lang="ts">
    import {onMount} from "svelte";
    import medieval from "$lib/assets/medieval.png";
    import zombie from "$lib/assets/zombie.png";
    import futuristic from "$lib/assets/futuristic.png"
    import serious from "$lib/assets/serious.png";
    import creative from "$lib/assets/creative.png";
    import unforgiving from "$lib/assets/unforgiving.png"

    onMount(() => {
        const startForm = document.getElementById("start-form") as HTMLFormElement | null
        if (startForm) {
            startForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const formData = new FormData(startForm)
                console.log(formData)
                if (formData.has("scenario") && formData.has("storyteller")) {
                    console.log(formData.get("scenario"), formData.get("storyteller"))
                }
            })
        }
    })
</script>

<h1>Start game</h1>
<form id="start-form">
    <div>
        <h2>Pick your starting scenario.</h2>
        <label class="radio">
            <input id="medieval" name="scenario" type="radio" value="medieval"/>
            <img alt="Medieval" src={medieval}>
        </label>

        <label class="radio">
            <input id="zombie" name="scenario" type="radio" value="zombie"/>
            <img alt="Zombie" src={zombie}>
        </label>

        <label class="radio">
            <input id="futuristic" name="scenario" type="radio" value="futuristic"/>
            <img alt="Futuristic" src={futuristic}>
        </label>
    </div>

    <div>
        <h2>Pick your AI storyteller.</h2>

        <label class="radio">
            <input id="serious" name="storyteller" type="radio" value="serious"/>
            <img alt="Serious" src={serious}>
        </label>

        <label class="radio">
            <input id="creative" name="storyteller" type="radio" value="creative"/>
            <img alt="Creative" src={creative}>
        </label>

        <label class="radio">
            <input id="unforgiving" name="storyteller" type="radio" value="unforgiving"/>
            <img alt="unforgiving" src={unforgiving}>
        </label>
    </div>

    <button type="submit">Start Game</button>

</form>

<style>
    .radio > input {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
    }

    .radio > img {
        cursor: pointer;
        width: min(20vw, 300px);
        aspect-ratio: 1/1;
    }

    .radio > input:checked + img {
        outline: 2px solid black;
    }
</style>