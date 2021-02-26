<script>
  import { onMount } from "svelte";
  const JOBS_API = 'http://www.mocky.io/v2/5d6fb6b1310000f89166087b';
  let jobsList = [];

  onMount(() => {
    getJobs();
  });

  const getJobs = (async () => {
    const resp = await fetch(JOBS_API);
    const jobs = await resp.json();
    jobsList = jobs.vagas;
    if (resp.ok) {
  		return jobsList;
		} else {
			throw new Error(resp);
		}
  });

</script>

<style lang="scss">
  @import 'variables.scss';
  $fsize: 1.2em;

  .section-jobs {
    h2, h3 {
      font-size: 1.4em;
      font-weight: 600;
      color: $darkgray;
      margin-bottom: 30px;
      text-transform: uppercase; 
    }

    h2 {
      width: 100%;
      text-align: center;
    }

    h3 { font-size: 1.3em; }

    figure {
      margin: 0;
      padding: 0;

      img {
        max-width: 100%;
        height: auto;
      }
    }

    &__job-item { padding-bottom: 10px; }

    &__job-name {
      font-size: $fsize;
      color: $lightgreen;
      text-decoration: none;
      padding-right: 10px;

      &:hover { text-decoration: underline; }
    }

    &__local {
      font-size: $fsize;
      color: $mediumgray;
    }

    &--right { text-align: right; }
  }
</style>

<section class="section-jobs">
  <h2>Vagas em Aberto</h2>

  {#await getJobs}
    <p>carregando os jobs</p>
  {:then data}
    <div class="row">
      <div class="col-lg-6">
        <h3>Desenvolvimento</h3>
      </div>
    </div>
    {#each jobsList as job}
      {#if job.ativa}
        <div class="row section-jobs__job-item">
          <div class="col-lg-6">
            <a href={job.link} target="_blank" class="section-jobs__job-name">{job.cargo}</a>
          </div>
          <div class="col-lg-6 section-jobs--right">
            <p class="section-jobs__local">{job.localizacao 
                  ? `${job.localizacao.bairro} - ${job.localizacao.cidade}, ${job.localizacao.pais}` 
                  : 'Remoto' 
                }
            </p>
          </div>
        </div>
      {/if}
    {/each}
  {:catch error}
    <p>ooops... aconteceu um erro =[</p>
  {/await}
</section>