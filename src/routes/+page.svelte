<script>
  // @ts-nocheck

  import { goto } from "$app/navigation";

  let usuario = "";
  let contraseña = "";

  async function handleSubmit(event) {
    const response = await fetch("http://localhost:3000/login", {
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
      if (usuario === "onlyirina7@gmail.com") {
        goto("/administradora");
      } else {
        goto("/home");
      }
    } else {
      alert(data.message);
    }
  }
</script>

<div class="header">
  <a href="https://www.linkedin.com/company/fem-coders-club/" target="_blank">
    <img src="/logo.jpg" alt="logo" height="60px" />
  </a>
  <h1>Galería Pública femCoders Club</h1>
</div>

<div class="container">
  <div class="form-container">
    <h2>Iniciar Sesión</h2>
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
  </div>

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
  
  h2 {
    margin-bottom: 20px;
    margin-top: 70px;
  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .header img {
    position: absolute;
    left: 20px;
    top: 20px;
    width: 100px;
    height: auto;
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }


  @media (max-width: 600px) {
    h2 {
      margin-top: 30px;
    }

    .header img {
      left: 10px;
      top: 10px;
      width: 50px;
    }
  }
</style>
