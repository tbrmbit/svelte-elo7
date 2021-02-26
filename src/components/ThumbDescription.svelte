<script>
  export let data = {thumb, title, description};
</script>

<style lang="scss">
  .thumb-description {
    
  }
</style>

<div class="thumb-description">
  <img src={data.thumb} alt={data.title}/>
  <h3>{data.title}</h3>
  <p>{data.description}</p>
</div>