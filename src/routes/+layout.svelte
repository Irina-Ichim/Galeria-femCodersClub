<script>
    
    import '../global.css';
  </script>
  
  <header>
    <h1>Galería Pública femCoders Club</h1>
    <script type="module" src="https://unpkg.com/@splinetool/viewer@1.4.0/build/spline-viewer.js"></script>
    <spline-viewer url="https://prod.spline.design/pEFWQWp9qeV4oCvh/scene.splinecode"></spline-viewer>
 
  </header>
  
  <main>
    
    <slot></slot>
  </main>
  
  <footer>
    
    <p>&copy; 2024 femCoders Club</p>
  </footer>
  
  <style>
      header {
    width: 100%;
    height: 100vh; /* 100% del alto de la pantalla */
    display: flex;
    justify-content: center;

    align-items: center;
    overflow: hidden; /* Para ocultar cualquier contenido que se desborde */
  }

  spline-viewer {
    width: 100%;
    height: 100%;
  }
  h1{
    margin-top:100px;
    color:#e16b29;
  }
  
  </style>
  