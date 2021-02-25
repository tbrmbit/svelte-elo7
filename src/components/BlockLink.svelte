<script>
  export let link_name;
</script>

<style lang="scss">
  .block-link {
    margin: 20px auto;
    text-align: center;

    &__line {
      width: 300px;
      height: 2px;
      background-color: #ccc;
      margin-bottom: 20px;
    }

    &__link {
      
    }
  }
</style>

<div class="block-link">
  <div class="block-link__line"></div>
  {#if link_name}
    <a href="" class="block-link__link">{link_name}</a>
  {/if}
</div>