<script>
    import { goto } from '$app/navigation'; 
  
    let usuario = '';
    let contraseña = '';
    let confirmarContraseña = '';
  
    async function handleSubmit(event) {
      if (contraseña !== confirmarContraseña) {
        alert('Las contraseñas no coinciden');
        return;
      }
  
      goto('/');
    }
  </script>
  
  <h1>Restablecer Contraseña</h1>
  
  <form on:submit|preventDefault={handleSubmit}>
    <label>
      Usuario:
      <input type="text" bind:value={usuario} />
    </label>
    <label>
      Nueva Contraseña:
      <input type="password" bind:value={contraseña} />
    </label>
    <label>
      Confirmar Nueva Contraseña:
      <input type="password" bind:value={confirmarContraseña} />
    </label>
  
    <button type="submit">Enviar</button> 
  </form>
  
  <p><a href="/">Iniciar Sesión</a></p>