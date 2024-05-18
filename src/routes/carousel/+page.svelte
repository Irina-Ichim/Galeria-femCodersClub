<script>
  import { onMount } from 'svelte';
  /**
   * @type {string | any[]}
   */
  let images = [];
  let currentImage = 0;

  async function loadImages() {
    const response = await fetch('http://localhost:3000/all-images');
    const data = await response.json();
    if (data.success) {
      images = data.images;
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

  onMount(loadImages);
</script>

<div class="carousel">
{#each images as image, index}
  {#if index === currentImage}
    <img src={`http://localhost:3000/uploads/${image}`} alt="Imagen del carrusel" />
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
button{
  position: absolute;
  top: 80%;
  margin-left: 200px;
  transform: translateY(-50%);
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>