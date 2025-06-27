<script lang="ts">
    import {onMount} from "svelte";
    import {prompt, scenarios, storytellers} from "./data";

    type ScenarioKey = keyof typeof scenarios
    type StorytellerKey = keyof typeof storytellers

    export let data: {
        settings: {
            scenario: ScenarioKey;
            storyteller: StorytellerKey;
        };
    };

    const masterPrompt = prompt + storytellers[data.settings.storyteller]
    export let story = data.settings.scenario;

    onMount(() => {
        const continueButton = document.getElementById("continue") as HTMLButtonElement | null;
        if (continueButton) {
            continueButton.addEventListener("click", handleClickEvent);
        }
    })

    async function handleClickEvent() {
        const responseTextArea = document.getElementById('response') as HTMLTextAreaElement;
        if (!responseTextArea) return;
        const response = responseTextArea.value;
        if (!response) return;

        // Clear the text area
        story += `\n${response}`
        responseTextArea.value = ""
        console.log(response);
        const message = await getAIMessage();
        story += `\n${message}`
    }

    async function getAIMessage() {
        //ai.hackclub.com usage time
        const url = "https://ai.hackclub.com/chat/completions"
        const message = `${masterPrompt} ${story.slice(-1000)}`
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messages: [{role: "user", content: message}]
                })
            })

            const data = await response.json();
            console.log(data);
            return data.choices[0].message.content;
            // time to look up how to use ol and li with sveltekit
            // still looking up sadly
        } catch (e) {
            console.error(e);
        }
    }

</script>

<h2>AI-RPG</h2>
<p>Game ready!</p>
<p>{data.settings.scenario}</p>
<p>{data.settings.storyteller}</p>
<p>Built with hackclub AI api. We need to use the correct API for it.</p>

<p id="story">{story}</p>
<label for="response">Your response:</label>
<textarea cols="33" id="response" name="response" rows="5"></textarea>
<button id="continue">Continue</button>