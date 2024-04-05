
const Login = ({ email, setEmail, password, setPassword, handleLogin }) => {
    return (
        <div className="flex items-center justify-center mt-10">
            <form onSubmit={handleLogin} className="px-6 py-10 bg-customPurple3 rounded-l">
                <div className="bg-white mb-2">
                    <input
                    type="email"
                    value={email}
                    name="Email"
                    onChange={e => setEmail(e.target.value)}
                    placeholder="email" />
                </div>
                <div className="bg-white mb-3">
                    <input
                    type="password"
                    value={password}
                    name="Username"
                    onChange={e => setPassword(e.target.value)}
                    placeholder="password" />
                </div>
                <button type="submit" className="bg-white text-customPurple hover:text-white px-3 rounded-md border border-customPurple hover:bg-customPurple2 transition-all">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login