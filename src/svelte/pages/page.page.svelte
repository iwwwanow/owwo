<script>
	import BaseLayout from "../layouts/base.layout.svelte";

	import Avatar from "../components/avatar.component.svelte";
	import Date from "../components/date.component.svelte";
	import Cover from "../components/cover.component.svelte";
	import Card from "../components/card.component.svelte";
	import Text from "../components/text.component.svelte";

	export let page;
	export let elements;
</script>

<BaseLayout>
	<div class="grid page-info">
		<div class="page-info__page-data-container">
			<Cover data={page} />
			<span class="page-info__users-container">
				{#if page.users.length === 1}
					{@const user = page.users[0]}
					<div style="float: inline-start;">
						<Avatar {user} type="blob" />
					</div>
					<Date date={page.date} />
					<a href={user.username}>
						<h5
							style="word-break: break-all; margin-top: 1px; text-align: right;"
						>
							{user.username}
						</h5>
					</a>
				{:else}
					{#each page.users as user}
						<Avatar {user} type="blob" />
					{/each}
					<Date date={page.date} />
				{/if}
			</span>
		</div>

		<div class="page-info__page-text-container grid_break-start">
			<Text text={page.text} />
		</div>
	</div>

	<div class="grid todo" style="color: red;">
		<ul>
			<li>elementы отображаются только в формате LIST</li>
			<li>100vh max</li>
			<li>adaptive flex with wrap</li>
			<li>
				возможность добавить скрипт из стандартной библиотеки, который меняет
				верстку на GRID
			</li>
		</ul>
	</div>

	<div class="grid page__elements-container">
		{#each elements as element}
			<Card {element} />
		{/each}
	</div>
</BaseLayout>

<style>
	.page-info__page-data-container {
		display: flex;
		flex-direction: column;
		gap: var(--gap-v);
	}

	@media screen and (max-width: 650px) {
		.page-info__page-data-container {
			grid-column: 1/-1;
			flex-direction: row;
			justify-content: space-between;
			gap: var(--grid-gap);
		}
		:global(.page-info__page-data-container > *) {
			width: calc(50% - calc(var(--gap-grid) / 2));
		}
	}
</style>
