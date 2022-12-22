<script lang="ts">
    import FullPage from "../components/FullPage.svelte";
</script>

<FullPage background="darkslategray" color="white">
    <h1>We've had quite the journey.</h1>
    <p>I can't say it's ever really been easy.</p>
</FullPage>
<FullPage
        background="url('/images/us1.jpg')"
        color="white">
    <h1>We've covered a lot of ground.</h1>
    <p>Literal and emotional. We've come a long way.</p>
</FullPage>
<FullPage withTriangle background="aqua">
    <h1>Somehow we've stayed together.</h1>
    <p>There have been times of doubt. Times of uncertainty. Times where we've pulled back.</p>
</FullPage>
<FullPage
        background="url('/images/land1.jpg')"
        landscape
        color="white">
    <h1>There's no such thing as "too much."</h1>
    <p>We've proved that no matter what life throws at you, you're never stuck.</p>
</FullPage>

<style>

</style>