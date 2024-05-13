<script>
// @ts-nocheck

	let files;

	$: if (files) {
		console.log(files);

		for (const file of files) {
			console.log(`${file.name}: ${file.size} bytes`);
		}
	}
</script>

<label for="avatar">Subir una imagen:</label>
<input accept="image/png, image/jpeg" bind:files id="avatar" name="avatar" type="file" />

<label for="many">Subir múltiples archivos de cualquier tipo:</label>
<input bind:files id="many" multiple type="file" />

{#if files}
	<h2>Archivos seleccionados:</h2>
	{#each Array.from(files) as file}
		<p>{file.name} ({file.size} bytes)</p>
	{/each}
{/if}

<style>
    label {
        display: block;
        margin-top: 1em;
    }

    input {
        display: block;
        margin-top: 0.5em;
    }
</style>