<script>
  import headerImage from "../assets/foto-header.png";

  export let description;
</script>

<style lang="scss">
  header {
    position: relative;
  }
  h1 {
    font-size: clamp(1.3em, 2.7vw, 4em); /* reference: https://css-tricks.com/simplified-fluid-typography/ */
    position: absolute;
    bottom: 23%;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    text-shadow: 1px 1px 8px rgba(#000000, .8);
    font-weight: 600;
  }

  figure {
    margin: 0;
    padding: 0;

    img {
      max-width: 100%;
      height: auto;
    }
  }
</style>

<header class="col-xs">
  <h1>Trabalhe no Elo7</h1>
  <figure>
    <img alt="trabalhe no ELO7" src="{headerImage}">
  </figure>

  {#if description}
    <p>{description}</p>
  {/if}
</header>