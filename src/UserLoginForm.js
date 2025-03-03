import { useFormStatus } from "react-dom";

export default function UserLoginForm() {
  const { pending, data } = useFormStatus();
  return (
    <>
      <h3>Login Here</h3>

      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="Email or Phone"
        id="username"
        name="username"
        required
        disabled={pending}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        id="password"
        name="password"
        required
        disabled={pending}
      />

      <button type="submit" disabled={pending}>
        Log In
      </button>
      <p>{data ? `Validating ${data?.get("username")}...` : ""}</p>
      <div className="social">
        <div className="go">
          <i className="fab fa-google"></i> Google
        </div>
        <div className="fb">
          <i className="fab fa-facebook"></i> Facebook
        </div>
      </div>
    </>
  );
}
