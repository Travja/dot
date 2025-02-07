<!--suppress CssUnresolvedCustomProperty -->
<script lang="ts">
    import {onMount} from "svelte";

    interface Props {
        withTriangle?: boolean;
        background?: string;
        color?: string;
        landscape?: boolean;
        shadowed?: boolean;
        children?: import('svelte').Snippet;
    }

    let {
        withTriangle = false,
        background = 'white',
        color = 'black',
        landscape = false,
        shadowed = false,
        children
    }: Props = $props();

    let isSafari = $state(false);
    onMount(() => setTimeout(() => isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || /CriOS/i.test(navigator.userAgent)))
</script>

{#if withTriangle}
    <div class="transition" style="--background: {background}; --color: {color}">
        <div class="triangle triangle-left">
            <div class="filler"></div>
        </div>
        <div class="triangle triangle-right">
            <div class="filler"></div>
        </div>
    </div>
{/if}
<div class="full-page wrapper sticky" style="--background: {background}; --color: {color}"
     class:safari={isSafari}>
    {#if !landscape}
        <div class="backdrop"></div>
    {/if}
    <div class="content center"
         class:image={background.startsWith("url")}
         class:tri={withTriangle}
         class:shadowed={shadowed}>
        <div class="contentWrapper">
            {@render children?.()}
        </div>
    </div>
</div>

<style>
    .full-page {
        background: var(--background);
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .backdrop {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--background);
        background-position: center;
        background-attachment: fixed;
        background-size: contain;
        background-repeat: no-repeat;
        backdrop-filter: blur(15px);
    }

    .full-page.safari, .safari .backdrop {
        background-attachment: unset;
    }

    .content {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 100%;
        color: var(--color);
    }

    .contentWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: auto;
        padding: 2rem;
    }

    .contentWrapper::-webkit-scrollbar {
        display: none;
    }

    .content.image {
        backdrop-filter: blur(3px);
        background-color: rgba(255, 255, 255, 0.2);
        text-shadow: 3px 3px 3px black;
    }

    .content:not(.tri) {
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.7);
        clip-path: inset(-15px 0px 0px 0px);
    }

    .transition {
        padding-top: 3rem;
    }

    .transition {
        display: flex;
        flex-direction: row;
        --triangle-offset: 20px;
    }

    .triangle {
        flex: 1;
        height: 70px;
        overflow: hidden;
    }

    .triangle-right {
        box-shadow: 70px 0px 10px 0px rgb(0, 0, 0, 0.7);
        text-align: right;
    }

    .triangle-left {
        box-shadow: -70px 0px 10px 0px rgb(0, 0, 0, 0.7);
    }

    .triangle:before {
        content: '';
        position: absolute;
        width: 100px;
        height: 100px;
        background: var(--background);
        transform: rotate(45deg);
        -ms-transform: rotate(45deg); /* IE 9 */
        -moz-transform: rotate(45deg); /* Firefox */
        -webkit-transform: rotate(45deg); /* Safari and Chrome */
        -o-transform: rotate(45deg); /* Opera */
        bottom: -50px;
        box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.7);
    }

    .triangle-left:before {
        right: var(--triangle-offset);
    }

    .triangle-right:before {
        left: var(--triangle-offset);
    }

    .filler {
        height: 100%;
        width: calc(100% - 70px);
        background: var(--background);
    }

    .triangle-right .filler {
        float: right;
    }

    .shadowed {
        box-shadow: inset 0 0 100px 75px #111, 0 0 10px 0 rgba(0, 0, 0, 0.7) !important;
    }
</style>