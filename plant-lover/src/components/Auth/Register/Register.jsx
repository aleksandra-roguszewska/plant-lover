const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <input placeholder="Name" type="text" id="name" name="name"></input>
      <input
        placeholder="Profile picture"
        type="file"
        id="profilePicture"
        name="profilePicture"
      ></input>
      <input placeholder="Email" type="email" name="email" id="email"></input>
      <input
        placeholder="Password"
        type="password"
        minLength={6}
        name="password"
        id="password"
      ></input>
      <input
        placeholder="Confirm password"
        type="password"
        minLength={6}
        name="passwordConfirm"
        id="passwordConfirm"
      ></input>
      <button>Register</button>
      <p>{"Already have an account?"}</p>
      <button>Login</button>
    </div>
  );
};

export default Register;
