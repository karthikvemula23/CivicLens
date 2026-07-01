function LoginForm() {
  return (
    <form>
      <h2>Welcome Back</h2>
      <p>Sign in to continue to CivicLens.</p>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>

      <button type="submit">Sign In</button>
    </form>
  );
}

export default LoginForm;