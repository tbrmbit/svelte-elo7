<script>
	import Header from '../components/Header.svelte';
	import BlockLink from '../components/BlockLink.svelte';
	import SectionVideo from '../components/SectionVideo.svelte';
	import SectionOurTeam from '../components/SectionOurTeam.svelte';
	import SectionCulture from '../components/SectionCulture.svelte';
	import SectionBanner from '../components/SectionBanner.svelte';
	import SectionJobs from '../components/SectionJobs.svelte';

	const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum praesentium animi numquam consequatur, distinctio quam eligendi architecto, harum deserunt, dolor alias maxime ea! Quae dolores quibusdam inventore repellat eum?';
</script>

<style lang="scss" global>
	@import 'variables.scss';
	.wrapper{
		.container {
			width: 100%;
			max-width: 960px;
			margin-right: auto;
			margin-left: auto;
			padding-right: 1rem;
			padding-left: 1rem;
			box-sizing: border-box;
		}

		.container-fluid {
			width: 100%;
			box-sizing: border-box;

			.container {
				padding: $gutter;
			}

			&--gray {
				background-color: $lightgray;
			}
		}
	}
	
	@media (min-width: 480px) {
	}
</style>

<svelte:head>
	<title>Elo7 | Produtos Fora de Série</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" >
</svelte:head>

<div class="wrapper">
	<div class="container">
		<Header description={lorem}></Header>
		<BlockLink link_name={'Vagas em aberto'}></BlockLink>
	</div>
	<div class="container-fluid container-fluid--gray">
		<div class="container">
			<SectionVideo></SectionVideo>
			<SectionOurTeam></SectionOurTeam>
		</div>
	</div>
	<div class="container">
		<SectionCulture></SectionCulture>
		<BlockLink link_name={'Saiba Mais'}></BlockLink>
	</div>
	<div class="container">
		<SectionBanner></SectionBanner>
		<SectionJobs></SectionJobs>
	</div>
</div>
