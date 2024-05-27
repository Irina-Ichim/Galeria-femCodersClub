<script>
  let correoElectronico = '';
  let nuevaContraseña = '';
  let confirmarContraseña = '';
  let mensaje = '';

  async function handleSubmit() {
    if (nuevaContraseña !== confirmarContraseña) {
      mensaje = 'Las contraseñas no coinciden';
      return;
    }

    const response = await fetch('http://localhost:3000/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correo_electronico: correoElectronico,
        nueva_contraseña: nuevaContraseña
      })
    });

    const data = await response.json();
    if (data.success) {
      mensaje = 'Contraseña restablecida exitosamente';
    } else {
      mensaje = data.message;
    }
  }
</script>

<h1>Restablecer Contraseña</h1>

{#if mensaje}
  <p>{mensaje}</p>
{/if}

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
</form>
