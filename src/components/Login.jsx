const Login = () => (
  <div id="Login">
    <div className="feature-img">
      <div className="svg" />
    </div>
    <div className="content">
      <h1>Iniciar sesión</h1>
      <form>
        <label htmlFor="email">Correo</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          placeholder="Ingresa tu correo"
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Ingresa tu contraseña"
        />
        <button>Iniciar sesión</button>
      </form>
    </div>
  </div>
);

export default Login;
