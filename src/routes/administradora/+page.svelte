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
    </tr>
  </thead>
  <tbody>
    {#each usuarios as usuario}
      <tr>
        <td>{usuario.correo_electronico}</td>
        <td>{usuario.contraseña}</td> 
      </tr>
    {/each}
  </tbody>
</table>