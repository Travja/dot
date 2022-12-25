<!--suppress CssUnresolvedCustomProperty -->
<script lang="ts">
    import type {Tweened} from "svelte/motion";
    import {tweened} from "svelte/motion";
    import {onDestroy, onMount} from "svelte";
    import {get} from "svelte/store";
    import {quadInOut} from "svelte/easing";
    import {fly} from "svelte/transition";

    export let woolColor = "#dfdfdf";

    const clamp = (num, min, max) => Math.max(Math.min(num, Math.max(min, max)), Math.min(min, max));
    let xPos: Tweened<number> = tweened(0, {
        easing: quadInOut,
        duration: 2000
    });

    let right = Math.random() > 0.5;
    let running = false;
    let walking = false;
    let eating = false;
    let task = -1;
    let rainbowTask = -1;
    let startDelay = Math.random() * 2000 - 1000;
    let num = 0;
    let rotationMax = 20;

    const generateRainbowText = (step: number): string => {
        return "hsl(" + (360 * step / rotationMax) + ",80%,50%)";
    }

    onMount(() => {
        if (woolColor == "#dfdfdf") {
            let colorRandom = Math.random();
            if (colorRandom < 0.05) {
                rainbowTask = setInterval(() => {
                    num = ++num % rotationMax;
                    woolColor = generateRainbowText(num);
                }, 500, 1000);
            } else if (colorRandom >= 0.05 && colorRandom < 0.2) {
                woolColor = "dodgerblue";
            }
        }

        xPos = tweened(clamp(Math.random() * document.body.clientWidth, 0, document.body.clientWidth - 100), {
            easing: quadInOut,
            duration: 2000
        });
        setTimeout(() => {
            task = setInterval(() => {
                if (eating) return;
                running = false;
                walking = false;


                eating = Math.random() < 0.2;
                if (eating) {
                    setTimeout(() => eating = false, 5000);
                    return;
                }


                let move = Math.random() > 0.5;
                if (!move) return;

                right = Math.random() > 0.5;
                let distance = Math.random() * 200;
                if (right) distance *= -1;
                let curr = get(xPos);
                let cWidth = document.body.clientWidth;
                let finalPos = clamp(curr + distance, 0, cWidth - 100);
                let speed = Math.abs(curr - finalPos);

                xPos.set(finalPos);
                right = !right;
                if (speed > 100)
                    running = true;
                else
                    walking = true;
            }, 2000);
        }, startDelay);
    });

    onDestroy(() => {
        if (task != -1)
            clearInterval(task)
        if (rainbowTask != -1)
            clearInterval(rainbowTask);
    })
</script>

<div class="sheep"
     in:fly={{y: 100, duration: Math.random() * 4000 + 1000}}
     class:running={running}
     class:walking={walking}
     class:eating={eating}
     style="left: {$xPos}px; transform: scaleX({right ? 1 : -1}); --startDelay: {startDelay}ms; --woolColor: {woolColor};">
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

<style>
    @keyframes blink {
        0%, 90%, 100% {
            transform: scaleY(100%);
        }
        95% {
            transform: scaleY(0%);
        }
    }

    @keyframes run {
        0%, 100% {
            transform: rotate(0);
        }
        15% {
            transform: rotate(20deg);
        }
        25% {
            transform: rotate(35deg);
        }
        85% {
            transform: rotate(-35deg);
        }
    }

    @keyframes walk {
        0%, 50%, 100% {
            transform: rotate(0) translateY(0);
        }
        15% {
            transform: rotate(-20deg) translateY(-3px);
        }
        85% {
            transform: rotate(20deg) translateY(-3px);
        }
    }

    @keyframes eat {
        0%, 100% {
            bottom: 30%;
        }
        30%, 50%, 70% {
            bottom: 5%;
            transform: rotate(20deg) translateX(8px);
        }
        40%, 60% {
            bottom: 8%;
            transform: rotate(15deg) translateX(8px);
        }
    }

    @keyframes fluff {
        0%, 100% {
            transform: scale(100%);
        }
        50% {
            transform: scale(105%);
        }
    }

    @keyframes tail-wiggle {
        0%, 90%, 95%, 100% {
            transform: rotate(0);
        }
        92.5%, 97.5% {
            transform: rotate(25deg);
        }
    }

    .sheep {
        position: fixed;
        bottom: 5px;
        left: 0;
        width: 100px;
        aspect-ratio: 1;
        transition: transform 0.3s ease-in-out;
        --black: #222;
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
        bottom: 30%;
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
        animation-delay: var(--startDelay);
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

    .body, .fluff {
        background: var(--woolColor);
        transition: background 0.5s linear;
    }

    .body {
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
        right: 70%;
        animation: fluff 0.5s infinite;
    }

    .fluff:nth-child(2) {
        top: 60%;
        right: 30%;
        animation-delay: 0.05s;
    }

    .fluff:nth-child(3) {
        right: 69%;
        top: 35%;
        animation-delay: 0.1s;
    }

    .fluff:nth-child(4) {
        right: 0%;
        animation-delay: 0.15s;
    }

    .fluff:nth-child(5) {
        right: 40%;
        top: -25%;
        animation-delay: 0.2s;
    }

    .fluff:nth-child(6) {
        right: 15%;
        top: 53%;
        animation-delay: 0.25s;
    }

    .fluff:nth-child(7) {
        right: 50%;
        top: 50%;
        animation-delay: 0.3s;
    }

    .fluff:nth-child(8) {
        right: 18%;
        top: -19%;
        animation-delay: 0.35s;
    }

    .fluff:nth-child(9) {
        right: 60%;
        top: -17%;
        animation-delay: 0.4s;
    }

    .feet {
        display: flex;
        flex-direction: row;
        bottom: 0;
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

    .walking .foot {
        animation: walk 1s infinite;
    }

    .hind-feet .foot {
        animation-delay: 0.15s !important;
    }

    .hind-feet .foot.foot1 {
        animation-delay: 0.4s !important;
    }

    .foot1 {
        background: #333;
        left: 8px;
        bottom: 2px;
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
        animation-delay: var(--startDelay);
        animation: tail-wiggle 10s infinite;
    }
</style>