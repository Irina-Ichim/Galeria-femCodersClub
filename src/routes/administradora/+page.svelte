<script>
  // @ts-nocheck
    import { onMount } from 'svelte';
  
    let usuarios = [];
  
    onMount(async () => {
      console.log('Página de administrador cargada');
      const res = await fetch('http://localhost:3000/usuarios'); 
      const data = await res.json();
      if (data.success) {
        usuarios = data.usuarios;
      }
    });
  
    async function eliminarUsuario(id) {
    try {
      const res = await fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      if (data.success) {
        usuarios = usuarios.filter(usuario => usuario.id !== id);
      }
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
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
        <th>Contraseña</th>
        <th>Acciones</th> <!-- Añade una columna para las acciones -->
      </tr>
    </thead>
    <tbody>
      {#each usuarios as usuario}
        <tr>
          <td>{usuario.correo_electronico}</td>
          <td>{usuario.contraseña}</td>
          <td>
            <button on:click={() => eliminarUsuario(usuario.id)}>Eliminar</button> <!-- Añade un botón de eliminar -->
          </td>
        </tr>
      {/each}
    </tbody>
  </table>