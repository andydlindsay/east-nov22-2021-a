import useInput from "../hooks/useInput";

const Login = () => {
  const username = useInput('jello');
  const password = useInput('');

  const submitHandler = (event) => {
    event.preventDefault();
    alert(`thanks for submitting: ${username.value} and ${password.value}`);
    username.clear();
    password.clear();

    // axios.post('/api/login', {username, password})
    //   .then();
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={submitHandler}>
        <label>Username:</label>
        <input 
          // {...username}
          value={username.value}
          onChange={username.onChange}
        />
        <br />
        <label>Password:</label>
        <input 
          value={password.value}
          onChange={password.onChange}
        />
        <br />
        <button type="submit">Login!</button>
      </form>
    </div>
  );
};

export default Login;
