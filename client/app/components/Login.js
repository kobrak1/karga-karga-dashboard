
const Login = ({ email, setEmail, password, setPassword, handleLogin }) => {
    return (
        <form onSubmit={handleLogin} >
            <div>
                <input
                  type="email"
                  value={email}
                  name="Email"
                  onChange={e => setEmail(e.target.value)}
                  placeholder="email" />
            </div>
            <div>
                <input
                  type="password"
                  value={password}
                  name="Username"
                  onChange={e => setPassword(e.target.value)}
                  placeholder="password" />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default Login