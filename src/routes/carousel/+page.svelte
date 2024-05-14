<script>
    let images = [];
    let currentImage = 0;

    const nextImage = () => {
        currentImage = (currentImage + 1) % images.length;
    };

    const prevImage = () => {
        currentImage = (currentImage - 1 + images.length) % images.length;
    };
</script>

<div class="carousel">
    {#each images as image, index (image)}
        {#if index === currentImage}
            <img src={image} alt="Imagen del carrusel" />
        {/if}
    {/each}
    <button on:click={prevImage}>Anterior</button>
    <button on:click={nextImage}>Siguiente</button>
</div>

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