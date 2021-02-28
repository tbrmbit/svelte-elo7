<script>
  export let id_video;

  const ID_DEFAULT = 'UQ2-6gk9Szs';
  let ytLink = `http://www.youtube.com/embed/${id_video ? id_video : ID_DEFAULT}?autoplay=0&origin=http://example.com`

</script>

<style lang="scss">
  #ytplayer {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    min-height: 200px;

    @media only screen and (max-width: 1024px) {
      min-height: 300px;
      width: 100%;
    }

    @media only screen and (max-width: 770px) {
      width: 400px;
    }

    @media only screen and (max-width: 400px) {
      width: 300px;
    }
  }
</style>

<iframe id="ytplayer" type="text/html" src={ytLink} frameborder="0"/>