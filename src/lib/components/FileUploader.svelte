<script>
    // @ts-nocheck

    let files = [];

    const handleFileChange = async (event) => {
        const newFiles = Array.from(event.target.files);
        const compressedFiles = await Promise.all(newFiles.map(file => compressImage(file)));
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
