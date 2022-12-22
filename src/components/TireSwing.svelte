<script lang="ts">
    import type {Tweened} from "svelte/motion";
    import {tweened} from "svelte/motion";
    import {onDestroy, onMount} from "svelte";
    import {sineInOut} from "svelte/easing";

    let rotate: Tweened<number> = tweened(-10, {
        easing: sineInOut,
        duration: 1300
    });
    let task = -1;
    let audio: HTMLAudioElement;
    let swinging = false;
    let tireSwing: HTMLElement;

    onMount(() => {
        audio = new Audio("/wee-trim.mp3");
        audio.loop = false;
        audio.volume = 0.2;
        tireSwing.click();
        task = setInterval(() => {
            let willSwing = Math.random() < 0.05;
            if (willSwing) swing();
        }, 1000, 1000);
    });

    onDestroy(() => clearInterval(task))

    const swing = (): void => {
        if (swinging) return;
        swinging = true;
        audio.load();
        audio.play();
        setTimeout(() => {
            let width = document.body.clientWidth;
            if (width > 600) rotate.set(40);
            else rotate.set(30);
            setTimeout(() => {
                rotate.set(-10);

                setTimeout(() => swinging = false, 1300);
            }, 1300)
        }, 1000);
    };
</script>

<div class="tire-swing" style="--rotation: {$rotate}deg" bind:this={tireSwing}>
    <div class="rope"/>
    <div class="back-tire"/>
    <div class="sheep">
        <div class="front-feet feet">
            <div class="foot foot1"/>
            <div class="foot foot2"/>
        </div>
        <div class="hind-feet feet">
            <div class="foot foot1"/>
            <div class="foot foot2"/>
        </div>
        <div class="tail"/>
        <div class="body">
            <div class="fluff"/>
            <div class="fluff"/>
            <div class="fluff"/>
            <div class="fluff"/>
            <div class="fluff"/>
            <div class="fluff"/>
            <div class="fluff"/>
            <div class="fluff"/>
            <div class="fluff"/>
        </div>
        <div class="head-wrapper">
            <div class="ear2"/>
            <div class="ear1"/>
            <div class="head"/>
            <div class="eye">
                <div class="eye-ball"/>
            </div>
        </div>
    </div>
    <div class="front-tire"/>
</div>

<style>
    @keyframes blink {
        0%, 90%, 100% {
            transform: scaleY(100%);
        }
        95% {
            transform: scaleY(0%);
        }
    }

    @keyframes tail-wiggle {
        0%, 100% {
            transform: rotate(0);
        }
        50% {
            transform: rotate(25deg);
        }
    }

    @keyframes scream-front {
        0%, 100% {
            transform: rotate(-30deg);
        }
        50% {
            transform: rotate(-70deg);
        }
    }

    @keyframes scream-back {
        0%, 100% {
            transform: rotate(30deg);
        }
        50% {
            transform: rotate(70deg);
        }
    }

    .tire-swing {
        position: fixed;
        bottom: 100px;
        width: 100px;
        height: 80vh;
        right: -100px;
        --tire-width: 10px;
        transform-origin: 50% 0;
        transform: rotate(var(--rotation));
    }

    .rope {
        position: absolute;
        bottom: 10px;
        left: 50%;
        background: saddlebrown;
        box-shadow: inset 0 0 5px #333;
        width: 10px;
        height: 90vh;
    }

    .back-tire, .front-tire {
        height: 68px;
        width: 30px;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-70%);
        border-radius: 50%;
        box-shadow: calc(var(--tire-width) + 1px) 0 0 var(--tire-width) #333;
        clip-path: inset(-10px -30px -10px 0);
    }

    .back-tire {
        transform: translateX(4%);
        box-shadow: calc((var(--tire-width) + 1px) * -1) 0 0 var(--tire-width) black;
        clip-path: inset(-10px 0 -10px -30px);
    }

    .sheep {
        width: 100px;
        aspect-ratio: 1;
        transition: transform 0.3s ease-in-out;
        --black: #222;
        transform: scaleX(-1);
        position: absolute;
        bottom: 0;
    }

    .sheep * {
        position: absolute;
    }

    .eye, .head-wrapper, .head, .eye-ball, .ear1, .ear2,
    .body {
        border-radius: 50%;
        aspect-ratio: 1;
    }

    .head-wrapper {
        width: 30%;
        right: 0;
        bottom: 25%;
        transform-origin: 50% 50%;
    }

    .eating .head-wrapper {
        animation: eat 5s infinite;
    }

    .head {
        width: 100%;
        background: var(--black);
        border-radius: 40% 70%;
    }

    .eye {
        background: white;
        aspect-ratio: unset;
        width: 40%;
        height: 40%;
        right: 15%;
        top: 20%;
        animation: blink 6s infinite;
        transform-origin: 50% 50%;
    }

    .eye-ball {
        background: black;
        width: 40%;
        right: 15%;
        top: 40%;
    }

    .ear1, .ear2 {
        background: #444;
        width: 30%;
        top: -10%;
    }

    .ear2 {
        left: 20%;
        top: -17%;
        background: #333;
    }

    .body {
        background: white;
        width: 70%;
        height: 40%;
        top: 45%;
        left: 15%;
        left: 15%;
    }

    .fluff {
        width: 22px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: white;
        right: 70%;
    }

    .fluff:nth-child(2) {
        top: 60%;
        right: 30%;
    }

    .fluff:nth-child(3) {
        right: 69%;
        top: 35%;
    }

    .fluff:nth-child(4) {
        right: 0%;
    }

    .fluff:nth-child(5) {
        right: 40%;
        top: -25%;
    }

    .fluff:nth-child(6) {
        right: 15%;
        top: 53%;
    }

    .fluff:nth-child(7) {
        right: 50%;
        top: 50%;
    }

    .fluff:nth-child(8) {
        right: 18%;
        top: -19%;
    }

    .fluff:nth-child(9) {
        right: 60%;
        top: -17%;
    }

    .feet {
        display: flex;
        flex-direction: row;
        bottom: -5px;
        transform-origin: 50% 0;
    }

    .front-feet {
        right: 22%;
        animation-delay: 0.15s !important;
    }

    .hind-feet {
        left: 11%;
    }

    .running .feet {
        animation: run 1s infinite;
    }

    .foot {
        position: relative;
        height: 30px;
        width: 15px;
        background: var(--black);
        border-radius: 0 0 6px 6px;
        transform-origin: 50% 0;
    }

    .front-feet .foot {
        animation: scream-front 0.6s infinite;
    }

    .hind-feet .foot {
        animation: scream-back 0.6s infinite;
        animation-delay: 0.15s !important;
    }

    .hind-feet .foot.foot1 {
        animation-delay: 0.4s !important;
    }

    .foot1 {
        background: #333;
        left: 8px;
        animation-delay: 0.25s !important;
    }

    .hind-feet .foot2 {
        left: -8px;
    }

    .hind-feet .foot1 {
        left: 14px;
    }

    .tail {
        width: 12px;
        aspect-ratio: 1;
        background: var(--black);
        border-radius: 50%;
        top: 45%;
        left: 8%;
        transform-origin: 100% 100%;
        animation: tail-wiggle 0.5s infinite;
    }
</style>