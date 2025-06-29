<script lang="ts">
    import {onMount} from "svelte";
    import {goto} from "$app/navigation";
    import {base} from "$app/paths";
    import medieval from "$lib/assets/medieval.png";
    import zombie from "$lib/assets/zombie.png";
    import futuristic from "$lib/assets/futuristic.png"
    import rich from "$lib/assets/rich.png"
    import poor from "$lib/assets/poor.png"
    import heroic from "$lib/assets/heroic.png"
    import serious from "$lib/assets/serious.png";
    import creative from "$lib/assets/creative.png";
    import unforgiving from "$lib/assets/unforgiving.png"

    onMount(() => {
        const startForm = document.getElementById("start-form") as HTMLFormElement | null
        if (startForm) {
            startForm.addEventListener("submit", handleFormSubmission)
        }
    })

    function handleFormSubmission(event: SubmitEvent): void {
        event.preventDefault();
        const form = event.currentTarget as HTMLFormElement;
        const formData = new FormData(form);

        if (formData.has("scenario") && formData.has("storyteller")) {
            const scenario = formData.get("scenario");
            const storyteller = formData.get("storyteller");
            console.log(scenario, storyteller);

            const settings = JSON.stringify({scenario, storyteller});
            goto(`${base}/play?settings=${encodeURIComponent(settings)}`);
        }
    }
</script>

<div class="container">
    <h1>Start game</h1>
    <form id="start-form">
        <div>
            <h2>Pick your starting scenario.</h2>

            <div class="picker-group">
                <label class="radio">
                    <input id="medieval" name="scenario" type="radio" value="medieval"/>
                    <img alt="Medieval" src={medieval}>
                    <span>Medieval England</span>
                </label>

                <label class="radio">
                    <input id="zombie" name="scenario" type="radio" value="zombie"/>
                    <img alt="Zombie" src={zombie}>
                    <span>Zombie Apocalypse</span>
                </label>

                <label class="radio">
                    <input id="futuristic" name="scenario" type="radio" value="futuristic"/>
                    <img alt="Futuristic" src={futuristic}>
                    <span>City of the Far Future</span>
                </label>
            </div>
        </div>

        <div>
            <h2>Pick your backstory.</h2>

            <div class="picker-group">
                <label class="radio">
                    <input id="rich" name="backstory" type="radio" value="rich"/>
                    <img alt="Rich" src={rich}>
                    <span>Rich</span>
                </label>

                <label class="radio">
                    <input id="poor" name="backstory" type="radio" value="poor"/>
                    <img alt="Poor" src={poor}>
                    <span>Poor</span>
                </label>

                <label class="radio">
                    <input id="heroic" name="backstory" type="radio" value="heroic"/>
                    <img alt="Heroic" src={heroic}>
                    <span>Heroic</span>
                </label>
            </div>
        </div>

        <div>
            <h2>Pick your storyteller's personality.</h2>

            <div class="picker-group">
                <label class="radio">
                    <input id="serious" name="storyteller" type="radio" value="serious"/>
                    <img alt="Serious" src={serious}>
                    <span>Serious</span>
                </label>

                <label class="radio">
                    <input id="creative" name="storyteller" type="radio" value="creative"/>
                    <img alt="Creative" src={creative}>
                    <span>Creative</span>
                </label>

                <label class="radio">
                    <input id="unforgiving" name="storyteller" type="radio" value="unforgiving"/>
                    <img alt="Unforgiving" src={unforgiving}>
                    <span>Unforgiving</span>
                </label>
            </div>
        </div>

        <button type="submit">Start Game</button>

    </form>
</div>

<style>
    .container {
        max-width: 800px;
        margin: 2em auto;
        background: var(--secondary-background-color);
        border-radius: var(--border-radius);
        box-shadow: 0 4px 24px #0002;
        padding: 2.5em 2em;
    }

    form > div {
        margin-bottom: 2.5em;
    }

    h2 {
        margin-bottom: 1em;
    }

    .picker-group {
        display: flex;
        gap: 2em;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 1em;
    }

    label.radio {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #2a2f3a;
        border-radius: var(--border-radius);
        box-shadow: 0 2px 8px #0002;
        padding: 1.2em 1em 1em 1em;
        cursor: pointer;
        transition: box-shadow 0.2s, border 0.2s;
        border: 2px solid transparent;
        min-width: 160px;
        max-width: 220px;
        flex: 1 1 180px;
    }

    .radio > input {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
    }

    .radio > img {
        width: 90px;
        height: 90px;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 0.7em;
        border: 2px solid #444c56;
        transition: border 0.2s, box-shadow 0.2s;
        background: #23272f;
    }

    .radio > span {
        font-size: 1.1em;
        color: var(--text-color);
        margin-top: 0.2em;
        font-weight: 500;
    }

    .radio > input:checked + img {
        border: 3px solid var(--accent-color);
        box-shadow: 0 0 0 4px #4f8cff33;
    }

    .radio > input:checked ~ span {
        color: var(--accent-color);
    }

    label.radio:hover, label.radio:focus-within {
        box-shadow: 0 4px 16px #4f8cff33;
        border: 2px solid var(--accent-color);
    }

    button[type="submit"] {
        margin-top: 1.5em;
        width: 100%;
        font-size: 1.2em;
        padding: 1em 0;
        letter-spacing: 0.05em;
    }
</style>