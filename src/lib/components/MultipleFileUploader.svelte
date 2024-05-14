<script>
// @ts-nocheck

    let files = [];

    const handleFileChange = async (event) => {
        const selectedFiles = Array.from(event.target.files);
        if (files.length + selectedFiles.length > 5) {
            alert("Solo se pueden cargar hasta 5 fotos.");
            return;
        }
        
        const compressedFiles = await Promise.all(selectedFiles.map(file => compressImage(file)));
        files = [...files, ...compressedFiles];
    };

    const compressImage = (file) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = URL.createObjectURL(file);
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const MAX_WIDTH = 800;
                const MAX_HEIGHT = 800;
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);

                canvas.toBlob(blob => {
                    const newFile = new File([blob], file.name, {
                        type: 'image/jpeg',
                        lastModified: Date.now()
                    });
                    resolve(newFile);
                }, 'image/jpeg', 0.8);
            };
            img.onerror = reject;
        });
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
