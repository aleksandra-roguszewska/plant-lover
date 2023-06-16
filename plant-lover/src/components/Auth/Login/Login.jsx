const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <input placeholder="Email" type="email"></input>
      <input placeholder="Password" type="password" minLength={6}></input>
      <button>Login</button>
      <p>{"Don't have an account yet?"}</p>
      <button>Register</button>
    </div>
  );
};

export default Login;
