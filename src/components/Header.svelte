<script>
  import headerImage from "../assets/foto-header.png";

  export let description;
</script>

<style lang="scss">
  header {
    position: relative;

    .header__description {
      padding: 20px 30px;
    }
  }
  h1 {
    font-size: clamp(1.3em, 2.7vw, 4em); /* reference: https://css-tricks.com/simplified-fluid-typography/ */
    position: absolute;
    bottom: 35%;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    text-shadow: 1px 1px 8px rgba(#000000, .8);
    font-weight: 600;

    @media only screen and (max-width: 800px) {
      bottom: 60%;
    }
  }

  p {
    text-align: center;
    color: $darkgray;
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

<header>
  <h1>Trabalhe no Elo7</h1>
  <figure>
    <img alt="trabalhe no ELO7" src="{headerImage}">
  </figure>

  {#if description}
    <p class="header__description">{description}</p>
  {/if}
</header>