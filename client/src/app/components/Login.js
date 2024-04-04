
const Login = ({ username, password }) => {
    return (
        <form>
            <div>
                <input
                  type="text"
                  value={username}
                  name="Username"
                  onChange={e => console.log(e)}
                  placeholder="username" />
            </div>
            <div>
                <input
                  type="text"
                  value={password}
                  name="Username"
                  onChange={e => console.log(e)}
                  placeholder="username" />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}