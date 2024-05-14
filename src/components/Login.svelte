<!-- Login.svelte -->
<script>
    import { navigate } from 'svelte-routing';

    let email = '';
    let password = '';

    const handleSubmit = () => {
        // Aquí puedes agregar la lógica para manejar el inicio de sesión
        // Por ahora, simplemente redireccionaremos a la página principal
        navigate('/');
    };
</script>

<h2>Iniciar Sesión</h2>

<form on:submit|preventDefault={handleSubmit}>
    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" bind:value={email} required />
    </div>
    <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" bind:value={password} required />
    </div>
    <div>
        <button type="submit">Enviar</button>
    </div>
</form>

<div>
    <p>¿No tienes cuenta? <a href="/registro">Regístrate</a></p>
    <p><a href="/recuperar-contrasena">¿Contraseña olvidada?</a></p>
</div>
