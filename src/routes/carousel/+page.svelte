<script>
// @ts-nocheck

  import { onMount } from 'svelte';

  // @ts-ignore
  let images = [];
  let currentImage = 0;

  async function loadImages() {
    const response = await fetch('http://localhost:3000/all-images');
    const data = await response.json();
    if (data.success) {
      // @ts-ignore
      images = data.images.map(image => {
        // Recuperar los likes guardados en localStorage
        const likes = localStorage.getItem(`likes-${image}`) || 0;
        // @ts-ignore
        return { src: image, likes: parseInt(likes, 10) };
      });
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

  // @ts-ignore
  const incrementLikes = (index) => {
    // @ts-ignore
    images = images.map((image, i) => {
      if (i === index) {
        const newLikes = image.likes + 1;
        // Guardar los nuevos likes en localStorage
        localStorage.setItem(`likes-${image.src}`, newLikes);
        return { ...image, likes: newLikes };
      }
      return image;
    });
  };

  onMount(loadImages);
  function goHome() {
    window.location.href = "/home";
  }
</script>

<div class="header">
  <a href="https://www.linkedin.com/company/fem-coders-club/" target="_blank">
    <img src="/logo.jpg" alt="logo" height="60px" />
  </a>
  <h1>Galería Pública femCoders Club</h1>
  <button on:click={goHome} class="volver">Volver al Inicio</button>
</div>

<div class="carousel">
  {#each images as image, index}
    {#if index === currentImage}
      <div class="image-container">
        <img src={`http://localhost:3000/uploads/${image.src}`} alt="Imagen del carrusel" />
        <div class="likes">
          <span>¡Me gusta!: {image.likes}</span>
          <button on:click={() => incrementLikes(index)}> 💜</button>
        </div>
      </div>
    {/if}
  {/each}
  <div class="buttons">
    <button on:click={prevImage}>Anterior</button>
    <button on:click={nextImage}>Siguiente</button>
  </div>
</div>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    padding-bottom: 30px;
    margin-right: 15px;
  }
 .carousel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .image-container {
    position: relative;
  }

  .carousel img {
    max-width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
  }
  .likes {
    position: absolute;
    bottom: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .buttons {
    display: flex;
    gap: 10px;
  }

  .carousel button {
    padding: 10px 20px;
    border: none;
    background-color: var(--color-secondary);
    color: white;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  .carousel button:hover {
    background-color: var(--color-primary);
    
  }
  @media screen and (max-width: 600px) {
  .carousel {
    width: 100%;
    padding: 0 20px;
  }

  .carousel img {
    max-width: calc(90vw - 40px); 
  }
}

</style>

