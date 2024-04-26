<script>
	export let text;
	export let className = "";
</script>

<span class={className}>
	{@html text}
</span>
