<script>
  import { goto } from "$app/navigation";
  import MultipleFileUploader from "$lib/components/MultipleFileUploader.svelte";

  let files = [];
  let showConfirmation = false;

  function confirmUpload() {
    console.log("El usuario ha confirmado la subida de los archivos");
    showConfirmation = true;
    goto("/carousel");
  }
</script>

<h2>Bienvenido a la página de inicio</h2>
<p>¡Has iniciado sesión correctamente!</p>

<MultipleFileUploader />

<div>
  <p>
    Confirmas que deseas agregar estas imagenes a la galeria publica de fem
    coders club?
  </p>
  Esto significa que aceptas nuestra<a href="/politica-de-privacidad">
    politica de privacidad</a
  >
  y que las imagenes seran visibles para cualquier persona que visite la
  galeria.
  <button on:click={confirmUpload}>Sí</button>
  <button
    on:click={() => {
      files = [];
      showConfirmation = false;
    }}>No</button
  >
</div>
