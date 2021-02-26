<script>
  export let link_name;
</script>

<style lang="scss">
  @mixin arrow-left {
    border: solid $lightgreen;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 2px;
    position: absolute;
    top: 9px;
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
  }

  .block-link {
    width: 230px;
    margin: 20px auto;
    text-align: center;

    &__line {
      width: 100%;
      height: 2px;
      background-color: $gray;
      margin-bottom: 20px;
    }

    &__link {
      font-size: 1.2em;
      text-transform: uppercase;
      color: $lightgreen;
      text-decoration: none;
      position: relative;

      &:before {
        content: '';
        @include arrow-left;
        right: -15px;
        transition: all .5s ease-out .1s;
      }

      &:after {
        content: '';
        @include arrow-left;
        right: -20px;
        transition: all .4s ease-out;
      }

      &:hover {
        text-decoration: underline;

        &:before {
          right: -20px;
        }

        &:after {
          right: -25px;
        }
      }
    }
  }
</style>

<div class="block-link">
  <div class="block-link__line"></div>
  {#if link_name}
    <a href="" class="block-link__link">{link_name}</a>
  {/if}
</div>