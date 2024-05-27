<script>
  import { goto } from "$app/navigation";
  import MultipleFileUploader from "$lib/components/MultipleFileUploader.svelte";

  let files = [];
  let showConfirmation = false;
  let policyAccepted = false;

  function confirmPolicy() {
    policyAccepted = true;
  }

  function confirmUpload() {
    if (policyAccepted) {
      console.log("El usuario ha confirmado la subida de los archivos");
      showConfirmation = true;
      goto("/carousel");
    } else {
      alert("Debes aceptar la política de privacidad antes de subir archivos.");
    }
  }

  function cancelUpload() {
    goto("/");
  }
</script>

<div class="wrapper">
  <img src="/izquierda.png" alt="izq" class="izquierda" />
  <div class="container">
    <h2>¡Bienvenida a la página de inicio 👋 !</h2>
    <br />
    <p>¡Has iniciado sesión correctamente!</p>
    &nbsp

    <div>
      <p>
        Confirmas que deseas agregar estas imágenes a la galería pública de fem
        coders club?
      </p>
      <br />

      <p class="destacar">
        Esto significa que aceptas nuestra <a href="/politica-de-privacidad"
          >política de privacidad</a
        >
        y que las imágenes serán visibles para cualquier persona que visite la galería.
      </p>
      <br />
      <button on:click={confirmPolicy}>Aceptar</button>
      <button on:click={cancelUpload}>Cancelar</button>
    </div>
    &nbsp
    <p>¡Gracias por tu contribución! 🎉</p>
    {#if policyAccepted}
      <MultipleFileUploader />
      <button on:click={confirmUpload}>Ver Galería</button>
    {/if}
  </div>
</div>

<style>
  .wrapper {
    height: 100vh;
    display: flex;
    align-items: flex-start;
    backdrop-filter: blur(10px);
    background: var(--color-primary);
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 30px;
  }

  .izquierda {
    margin-right: 20px;
    height: auto;
    max-width: 100%;
  }

  .container {
    max-width: 100%;
    margin: 250px auto 0;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  .destacar {
    background: linear-gradient(
      to bottom right,
      var(--color-secondary),
      var(--color-primary),
      var(--color-secondary)
    );
    color: white;
  }

  p {
    color: var(--color-primary);
    font-size: 1em;
  }

  a {
    color: var(--color-secondary);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    font-size: 1.2em;
  }

  @media (min-width: 768px) {
    .wrapper {
      align-items: flex-start;
      height: 20%;
    }

    .izquierda {
      max-width: 40%;
      height: 30%;
    }

    .container {
      max-width: 600px;
    }
  }
</style>
