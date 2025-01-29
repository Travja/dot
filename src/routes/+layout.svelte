<script lang="ts">
    import '../app.css';
    import Sheep from "../components/Sheep.svelte";
    import TireSwing from "../components/TireSwing.svelte";
    import FullPage from "../components/FullPage.svelte";
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();

    let clicked = $state(false);
</script>

{#if clicked}
    {@render children?.()}
    <div class="grass"></div>
    {#each {length: 3} as _, i}
        <Sheep/>
    {/each}
    <TireSwing/>
{:else}
    <FullPage background="darkslategray" color="white">
        <h1>
            We don't meet people by accident.
            <br/>
            They are meant to cross our path for a reason.
        </h1>
        <div class="button" onclick={() => clicked = true}>Our Story</div>
    </FullPage>
{/if}

<style>
    .grass {
        background: #238301;
        height: 12px;
        position: fixed;
        bottom: 0;
        width: 100%;
        border-top: 2px solid black;
    }

    .button {
        border-radius: 10px;
        background-color: #355ca8;
        box-shadow: 1px 1px 5px #222;
        color: white;
        padding: 1rem;
        border: 2px solid white;
    }

    .button:hover {
        cursor: pointer;
    }
</style>