import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate(-1);
  };

  return (
    <section className="px-6 md:px-16 py-20 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Login
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md space-y-4"
      >
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg px-4 py-2"
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg px-4 py-2"
          required
        />

        <button
          type="submit"
          className="w-full py-2 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-500 text-white cursor-pointer"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
