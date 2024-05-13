<script>
    let files = [];

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        if (files.length + selectedFiles.length > 5) {
            alert("Solo se pueden cargar hasta 5 fotos.");
            return;
        }
        
        files = [...files, ...selectedFiles];
    };

    const removeFile = (index) => {
        files = files.filter((_, i) => i !== index);
    };
</script>

<label for="many">Subir múltiples archivos de cualquier tipo (máximo 5):</label>
<input id="many" type="file" multiple accept="image/png, image/jpeg" on:change={handleFileChange} />

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

<style>
    label {
        display: block;
        margin-top: 1em;
    }
    input {
        display: block;
        margin-top: 0.5em;
    }
    button {
        margin-top: 0.5em;
    }
</style>
