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


