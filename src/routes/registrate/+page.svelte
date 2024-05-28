<script>
  let usuario = "";
  let contraseña = "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[-_.])[A-Za-z\d_.-]{6,}$/;
  /**
   * @param {any} event
   */
  async function handleSubmit(event) {
    if (!emailRegex.test(usuario)) {
      alert("Por favor, introduce un correo electrónico válido");
      return;
    }

    if (!passwordRegex.test(contraseña)) {
      alert(
        "La contraseña debe tener al menos una minúscula, una mayúscula, un símbolo (_,-,.) y al menos 6 caracteres"
      );
      return;
    }

    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correo_electronico: usuario,
        contraseña: contraseña,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data.success) {
      alert("Usuario registrado exitosamente");
    } else {
      alert(data.message);
    }
  }
  function goHome() {
    window.location.href = "/";
  }
</script>

<div class="formulario">
  <a href="https://www.linkedin.com/company/fem-coders-club/" target="_blank">
    <img src="/logo.jpg" alt="logo" height="60px" />
  </a>
  <h1>Crear Cuenta</h1>
  <button on:click={goHome} class="volver">Volver al Inicio</button>
</div>

<div class="container">
  <form on:submit|preventDefault={handleSubmit}>
    <h2>Nuevo Registro</h2>
    <label>
      Correo electronico:
      <input type="text" bind:value={usuario} />
    </label>
    <label>
      Contraseña:
      <input type="password" bind:value={contraseña} />
    </label>

    <button type="submit">Enviar</button>
  </form>

  <div class="spline">
    <script
      type="module"
      src="https://unpkg.com/@splinetool/viewer@1.3.8/build/spline-viewer.js"
    ></script>
    <spline-viewer
      url="https://prod.spline.design/pEFWQWp9qeV4oCvh/scene.splinecode"
    ></spline-viewer>
  </div>
</div>

<style>
  .formulario {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
  .container {
    display: flex;
    justify-content: space-between;
  }

  .spline,
  form {
    flex: 1;
  }

  .spline {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }

    .spline {
      height: 50vh;
    }
  }
</style>
