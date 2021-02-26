<script>
  import camila from '../assets/camila.png';
  import guto from '../assets/guto.png';
  import david from '../assets/david.png';
  import beatriz from '../assets/beatriz.png';
  const peopleList = [
    camila,
    guto,
    david,
    beatriz,
  ];
</script>

<style lang="scss">
  @import 'variables.scss';

  .section-our-team {
    h2 {
      max-width: 250px;
      font-size: 1.2em;
      font-weight: 600;
      color: $darkgray;
      text-transform: uppercase;
      text-align: center;
      margin: 0 auto 40px auto;
    }

    &__item { margin: 0 auto; }
  }
</style>

<section class="section-our-team">
  <h2>Conheça nosso time fora de série</h2>
  <div class="row section-our-team__people">
    {#each peopleList as people}
    <div class="section-our-team__item col-lg-3">
      <img src={people} alt="time">
    </div>
    {/each}
  </div>
</section>


