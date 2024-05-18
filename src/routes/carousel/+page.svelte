<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  let images = [];
  let currentImage = 0;

  async function loadImages(userId) {
    const response = await fetch(`http://localhost:3000/imagenes/${userId}`);
    const data = await response.json();
    if (data.success) {
      images = data.imagenes.map(img => img.ruta_archivo);
    } else {
      alert(data.message);
    }
  }

  const nextImage = () => {
    currentImage = (currentImage + 1) % images.length;
  };

  const prevImage = () => {
    currentImage = (currentImage - 1 + images.length) % images.length;
  };

  onMount(async () => {
      const { params } = $page;
      loadImages(params.userId);
  });
</script>

<div class="carousel">
{#each images as image, index}
  {#if index === currentImage}
    <img src={`http://localhost:3000/${image}`} alt="Imagen del carrusel" />
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