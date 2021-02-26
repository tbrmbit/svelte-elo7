<script>
  export let data = {thumb, title, description};
</script>

<style lang="scss">
  @import 'variables.scss';
  $gap: 20px;

  .thumb-description {
    margin-bottom: 20px;
    
    h3 {
      font-size: 1.1em;
      font-weight: 600;
      text-transform: uppercase;
      color: $darkgray;
      margin-bottom: $gap;
    }

    img { margin-bottom: $gap; }
    p { color: $gray; }
  }
</style>

<div class="thumb-description">
  <img src={data.thumb} alt={data.title}/>
  <h3>{data.title}</h3>
  <p>{data.description}</p>
</div>