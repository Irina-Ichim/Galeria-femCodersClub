<script>
    // @ts-nocheck

    let files = [];

    const handleFileChange = (event) => {
        const newFiles = Array.from(event.target.files);
        files = [...files, ...newFiles];
    };

    const removeFile = (index) => {
        console.log(`Eliminando archivo en el índice ${index}`);
        files = files.filter((_, i) => i !== index);
        console.log('Archivos restantes:', files);
    };
</script>

<label for="avatar">Subir una imagen:</label>
<input accept="image/png, image/jpeg" on:change={handleFileChange} id="avatar" name="avatar" type="file" />

{#if files.length > 0}
    <h2>Archivos seleccionados:</h2>
    {#each files as file, index}
        <div>
            <img src={URL.createObjectURL(file)} alt="Imagen cargada" style="max-width: 200px; max-height: 200px;">
            <p>{file.name} ({file.size} bytes)</p>
            <button on:click={() => removeFile(index)}>Eliminar</button>
        </div>
    {/each}
{/if}
