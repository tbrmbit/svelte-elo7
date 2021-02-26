<script>
  import ThumbDescription from '../components/ThumbDescription.svelte';
  import qualityThumb from '../assets/qualidade.png';
  import relaxThumb from '../assets/descontracao.png';
  import extraThumb from '../assets/atividades.png';

  const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum praesentium animi numquam consequatur, distinctio quam eligendi architecto, harum deserunt, dolor alias maxime ea! Quae dolores quibusdam inventore repellat eum?';
  const cultureList = [
    {thumb: qualityThumb, title: 'Qualidade de Vida', description: lorem},
    {thumb: relaxThumb, title: 'Ambiente Descontraído', description: lorem},
    {thumb: extraThumb, title: 'Atividades Extras', description: lorem},
  ];
</script>

<style lang="scss">
  .section-culture {
    
  }
</style>

<section class="section-culture">
  <div class="row">
    {#each cultureList as culture}
      <div class="col-lg-4">
        <ThumbDescription data={culture}></ThumbDescription>
      </div>
    {/each}
  </div>
</section>