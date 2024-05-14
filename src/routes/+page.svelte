<script>
  import { goto } from '$app/navigation'; 

  let usuario = '';
  let contraseña = '';

  // @ts-ignore
  function handleSubmit(event) {
    // Handle form submission logic here
    goto('/home'); 
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

<p><a href="/contraseña-olvidada">¿Has olvidado tu contraseña?</a></p>
<p><a href="/registrate">Registrarse</a></p>

