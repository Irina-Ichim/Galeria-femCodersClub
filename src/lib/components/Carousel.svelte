<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    let files = [];
    let currentImage = 0;
    let showConfirmation = false;

    const handleFileChange = async (event) => {
        const selectedFiles = Array.from(event.target.files);
        if (files.length + selectedFiles.length > 5) {
            alert("Solo se pueden cargar hasta 5 fotos.");
            return;
        }
        
        const compressedFiles = await Promise.all(selectedFiles.map(file => compressImage(file)));
        files = [...files, ...compressedFiles];
        showConfirmation = true;
    };

    const confirmUpload = () => {
        showConfirmation = false;
    };

    // ... el resto de tu código ...
</script>

<label for="many">Subir múltiples archivos de cualquier tipo (máximo 5):</label>
<input id="many" type="file" multiple accept="image/png, image/jpeg" on:change={handleFileChange} />

{#if showConfirmation}
    <div>
        <p>¿Estás seguro de subir los archivos a la galería pública?</p>
        <button on:click={confirmUpload}>Sí</button>
        <button on:click={() => {files = []; showConfirmation = false;}}>No</button>
    </div>
{/if}

{#if files.length > 0 && !showConfirmation}
    <div class="carousel">
        {#each files as file, index (file)}
            {#if index === currentImage}
                <img src={URL.createObjectURL(file)} alt="Imagen cargada" in:fade={{duration: 500}} out:fade={{duration: 500}} />
                <p>{file.name} ({file.size} bytes)</p>
                <button on:click={() => removeFile(index)}>Eliminar</button>
            {/if}
        {/each}
    </div>
{/if}

<style>
    .carousel {
        width: 800px;
        height: 800px;
        position: relative;
    }
    .carousel img {
        position: absolute;
        top: 0;
        left: 0;
    }
</style>