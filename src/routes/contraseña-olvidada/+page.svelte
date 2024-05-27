<script>
  import { goto } from "$app/navigation";

  let correoElectronico = "";
  let nuevaContraseña = "";
  let confirmarContraseña = "";
  let mensaje = "";

  async function handleSubmit() {
    if (nuevaContraseña !== confirmarContraseña) {
      mensaje = "Las contraseñas no coinciden";
      return;
    }

    const response = await fetch("http://localhost:3000/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correo_electronico: correoElectronico,
        nueva_contraseña: nuevaContraseña,
      }),
    });

    const data = await response.json();
    if (data.success) {
      mensaje = "Contraseña restablecida exitosamente";
    } else {
      mensaje = data.message;
    }
  }

  function cancelUpload() {
    goto("/");
  }
</script>

<h1>Restablecer Contraseña</h1>

{#if mensaje}
  <p>{mensaje}</p>
{/if}

<div class="container">
  <div class="form-container">
    <form on:submit|preventDefault={handleSubmit}>
      <label>
        Correo Electrónico:
        <input type="email" bind:value={correoElectronico} />
      </label>
      <label>
        Nueva Contraseña:
        <input type="password" bind:value={nuevaContraseña} />
      </label>
      <label>
        Confirmar Contraseña:
        <input type="password" bind:value={confirmarContraseña} />
      </label>
      <button type="submit">Restablecer Contraseña</button>
      <button on:click={cancelUpload}>Volver a Inicio</button>
    </form>
  </div>
  <img src="/logo.jpg" alt="der" class="derecha" />
</div>

<style>
  h1 {
    justify-content: center;
  }
  .container {
    margin-top: 100px;
    margin-right: 70px;
  }
  img {
    max-width: 500px;
    height: 500px;
    margin-right: 50px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease,
      border 0.3s ease;
  }

  img:hover {
    transform: scale(1.1);
    box-shadow:
      5px 5px 15px var(--color-secondary),
      -5px -5px 15px rgba(255, 255, 255, 0.1);
    border: 3px solid #3f3a8a;
  }

  @media (max-width: 600px) {
    img {
      max-width: 100%;
      height: auto;
      margin-top: 50px;
      margin-right: -50px;
    }
  }
</style>
