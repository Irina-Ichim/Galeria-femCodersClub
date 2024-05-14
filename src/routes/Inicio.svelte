<!-- src/routes/Inicio.svelte -->
<script>
    // Manejo del estado del formulario
    let usuario = '';
    let contraseña = '';
  
    // Función para manejar el envío del formulario
    function handleSubmit() {
      // Aquí puedes enviar los datos del formulario al servidor o realizar alguna acción adicional
      console.log('Usuario:', usuario);
      console.log('Contraseña:', contraseña);
    }
  </script>
  
  <h1>Iniciar Sesión</h1>
  
  <form on:submit|preventDefault={handleSubmit}>
    <label>
      Usuario:
      <input type="text" bind:value={usuario} />
    </label>
    <label>
      Contraseña:
      <input type="password" bind:value={contraseña} />
    </label>
    <button type="submit">Enviar</button>
  </form>
  
  <p><a href="/olvidar-contraseña">¿Has olvidado tu contraseña?</a></p>
  <p><a href="/registrarse">Registrarse</a></p>