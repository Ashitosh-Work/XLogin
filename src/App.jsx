import { useState } from 'react'

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [iscorrect, setISCorrect] = useState(true);

  const changeHandler = (event, field) => {
    if (field == "username") {
      setUsername(event.target.value);
    }
    else {
      setPassword(event.target.value);
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if ((username === "user") && (password === "password")) {
      setIsLogged(true);
    }
    else {
      setISCorrect(false);
    }
  }

  return (
    <>
      <h1>Login Page</h1>
      {!isLogged ?
        <>
          {!iscorrect ? <p>Invalid username or password</p> : null}
          <form onSubmit={(event) => submitHandler(event)}>
            <label>Username:</label>
            <input value={username} onChange={(event) => changeHandler(event, "username")} required />
            <br />
            <label>Password:</label>
            <input value={password} onChange={(event) => changeHandler(event)} required />
            <br />
            <button>Submit</button>
          </form>
        </> :
        <p>Welcome, user!</p>
      }
    </>
  )
}

export default App
