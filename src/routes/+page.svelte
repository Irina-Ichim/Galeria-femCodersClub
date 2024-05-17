<script>
  import { goto } from '$app/navigation'; 

  let usuario = '';
  let contraseña = '';

  async function handleSubmit(event) {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correo_electronico: usuario,
        contraseña: contraseña
      })
    });

    const data = await response.json();
    console.log(data) 
    
  

    if (data.success) {
      goto('/home'); 
    } else {
      alert(data.message);
    }
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
