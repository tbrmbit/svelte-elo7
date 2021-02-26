<script>
  import YoutubePlayer from "../components/YoutubePlayer.svelte";
  const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum praesentium animi numquam consequatur, distinctio quam eligendi architecto, harum deserunt, dolor alias maxime ea! Quae dolores quibusdam inventore repellat eum?';
</script>

<style lang="scss">
  @import 'variables.scss';
  
  .section-video {
    margin-bottom: 40px;

    &__container {
      position: relative;
      min-height: 220px;

      @media only screen and (max-width: 1024px) {
        min-height: 300px;
        margin-bottom: 20px;
      }
    }

    &__content {
      padding-left: 40px;

      h2 {
        font-size: 1.2em;
        font-weight: 600;
        color: $darkgray;
        text-transform: uppercase;
      }

      h3 {
        font-size: 1.1em;
        font-style: italic;
        color: $orange;
        margin-bottom: 30px;
      }

      p { 
        color: $darkgray; 
        text-align: justify;
      }

      @media only screen and (max-width: 1024px) {
        padding-left: 0;
      }
    }
  }
</style>

<section class="section-video">
  <div class="row">
    <div class="col-lg-6 col-md-6 col-sm-12 section-video__container">
      <YoutubePlayer></YoutubePlayer>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12 section-video__content">
      <h2>Palavra do CEO</h2>
      <h3>Carlos Curioni</h3>
      <p>{lorem}</p>
    </div>
  </div>
</section>