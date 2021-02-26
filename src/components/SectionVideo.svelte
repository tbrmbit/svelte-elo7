<script>
  import YoutubePlayer from "../components/YoutubePlayer.svelte";
  const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum praesentium animi numquam consequatur, distinctio quam eligendi architecto, harum deserunt, dolor alias maxime ea! Quae dolores quibusdam inventore repellat eum?';
</script>

<style lang="scss">
  .section-video {
    
    &__container {
      position: relative;
      height: 220px;
    }
  }
</style>

<section class="section-video">
  <div class="row">
    <div class="col-lg-6 section-video__container">
      <YoutubePlayer></YoutubePlayer>
    </div>
    <div class="col-lg-6 section-video__content">
      <h2>Palavra do CEO</h2>
      <h3>Carlos Curioni</h3>
      <p>{lorem}</p>
    </div>
  </div>
</section>