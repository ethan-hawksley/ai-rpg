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
    export let story = [scenarios[data.settings.scenario]];

    onMount(() => {
        const continueButton = document.getElementById('continue') as HTMLButtonElement | null;
        if (continueButton) {
            continueButton.addEventListener('click', handleClickEvent);
        }
    })

    async function handleClickEvent() {
        const responseTextArea = document.getElementById('response') as HTMLTextAreaElement;
        if (!responseTextArea) return;
        const response = responseTextArea.value;
        if (!response) return;

        addToStory(response)
        responseTextArea.value = '';
        const message = await getAIMessage();
        addToStory(message)
    }

    async function getAIMessage() {
        const url = 'https://ai.hackclub.com/chat/completions';
        const message = masterPrompt + story.slice(-10).join('\n');
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    messages: [{role: "user", content: message}]
                })
            });

            const data = await response.json();
            console.log(data);
            return data.choices[0].message.content;
        } catch (e) {
            console.error(e);
        }
    }

    function addToStory(text: string) {
        story.push(text);
        story = story;
    }

</script>
<div class="container">
    <h2>AI-RPG</h2>
    <p>Game ready!</p>

    <ol>
        {#each story as section, index (index)}
            <li>{section}</li>
        {/each}
    </ol>

    <label for="response">Your response:</label>
    <textarea cols="33" id="response" name="response" rows="5"></textarea>
    <button id="continue">Continue</button>
</div>

<style>
    li {
        display: inline-block;
        margin: 5px;
    }
</style>