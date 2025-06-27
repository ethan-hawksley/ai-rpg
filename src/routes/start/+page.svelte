<script>
  import medieval from "$lib/assets/medieval.png";
  import zombie from "$lib/assets/zombie.png";
</script>

<h1>Start game</h1>

<h2>Pick your starting scenario.</h2>
<label class="scenario-radio">
    <input checked id="medieval" name="scenario" type="radio" value="medieval"/>
    <img alt="Medieval" src={medieval}>
</label>

<label class="scenario-radio">
    <input id="zombie" name="scenario" type="radio" value="zombie"/>
    <img alt="Zombie" src={zombie}>
</label>

<h2>Pick your AI storyteller.</h2>

<style>
    .scenario-radio > input {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
    }

    .scenario-radio > img {
        cursor: pointer;
        width: min(20vw, 300px);
        aspect-ratio: 1/1;
    }

    .scenario-radio > input:checked + img {
        outline: 2px solid black;
    }
</style>