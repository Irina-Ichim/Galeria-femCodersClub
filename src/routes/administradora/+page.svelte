<script>
  // @ts-nocheck

  import { onMount } from "svelte";

  let usuarios = [];
  let imagenes = [];

  onMount(async () => {
    await cargarUsuarios();
    await cargarImagenes();
  });

  async function cargarUsuarios() {
    const res = await fetch("http://localhost:3000/usuarios");
    const data = await res.json();
    if (data.success) {
      usuarios = data.usuarios;
    }
  }

  async function cargarImagenes() {
    const res = await fetch("http://localhost:3000/all-images");
    const data = await res.json();
    if (data.success) {
      imagenes = data.images;
    }
  }

  async function eliminarUsuario(id) {
    try {
      const res = await fetch(`http://localhost:3000/usuarios/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      if (data.success) {
        usuarios = usuarios.filter((usuario) => usuario.id !== id);
      }
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
    }
  }
  async function eliminarImagen(nombreImagen) {
    try {
      const res = await fetch(
        `http://localhost:3000/delete-image/${nombreImagen}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      if (data.success) {
        imagenes = imagenes.filter((imagen) => imagen !== nombreImagen);
      }
    } catch (error) {
      console.error("Error al eliminar la imagen:", error);
    }
  }
</script>

<h1>Página de administrador</h1>
<p>Hola Irina</p>
<p>Esta es la página de administrador</p>

<h2>Usuarios</h2>
<table>
  <thead>
    <tr>
      <th>Correo Electrónico</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
    {#each usuarios as usuario}
      <tr>
        <td>{usuario.correo_electronico}</td>
        <td>
          <button on:click={() => eliminarUsuario(usuario.id)}>Eliminar</button>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<h2>Imágenes</h2>
<div>
  {#each imagenes as imagen}
    <img
      src={`http://localhost:3000/uploads/${imagen}`}
      alt="Imagen cargada"
      width="100"
    />
    <button on:click={() => eliminarImagen(imagen)}>Eliminar</button>
  {/each}
</div>
