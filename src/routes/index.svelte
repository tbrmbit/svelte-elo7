<script>
	import Header from '../components/Header.svelte';
	import BlockLink from '../components/BlockLink.svelte';

	const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum praesentium animi numquam consequatur, distinctio quam eligendi architecto, harum deserunt, dolor alias maxime ea! Quae dolores quibusdam inventore repellat eum?';
</script>

<style lang="scss">
	@import '~flexboxgrid/css/flexboxgrid.min.css';
	.container {
		width: 100%;
		max-width: 960px;
		margin-right: auto;
    margin-left: auto;
		padding-right: 1rem;
    padding-left: 1rem;
		box-sizing: border-box;
	}
	@media (min-width: 480px) {
	}
</style>

<svelte:head>
	<title>Elo7 | Produtos Fora de Série</title>
</svelte:head>

<div class="container">
	<div class="row">
		<Header description={lorem}></Header>
		<BlockLink link_name={'Vagas em aberto'}></BlockLink>

		<main>
			
		</main>
	</div>
</div>


<!-- <h1>Great success!</h1>

<figure>
	<img alt="Success Kid" src="{successkid}">
	<figcaption>Have fun with Sapper!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
 -->