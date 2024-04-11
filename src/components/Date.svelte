<script>
	const date = new Date(Date.now());
	const creationDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * 30);
	const localDate = date.toLocaleDateString("ru-RU");
	const localCreationDate = creationDate.toLocaleDateString("ru-RU");
</script>

<div class="date-container">
	<h6 class="date_creation">{localCreationDate},</h6>
	<h6 class="date_last">{localDate}</h6>
</div>

<style>
	.date-container {
		display: flex;
		gap: 8px;
	}
	.date_creation {
		color: var(--dark);
	}
	.date_last {
		color: var(--light);
	}
</style>
