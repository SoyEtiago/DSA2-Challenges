// src/components/Login.js
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth, googleProvider } from "../firebaseConfig";
import { login, logout } from "../store/authSlice";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut 
} from "firebase/auth";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useMemo(() => user !== null, [user]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Registro con email y contraseña
  const handleEmailRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("Cuenta creada exitosamente. Ahora puedes iniciar sesión.");
      setEmail("");  // Limpiar input de email
      setPassword("");  // Limpiar input de contraseña
    } catch (error) {
      console.error("Error al registrarse:", error);
      setMessage("Error al crear la cuenta: " + error.message);
    }
  };

  // Login con email y contraseña
  const handleEmailLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const { uid, displayName, email: userEmail, photoURL } = result.user;
      dispatch(login({ uid, displayName, email: userEmail, photoURL }));
      setMessage("");
      setEmail("");  // Limpiar input de email
      setPassword("");  // Limpiar input de contraseña
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setMessage("Error al iniciar sesión: " + error.message);
    }
  };

  // Login con Google
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { uid, displayName, email: userEmail, photoURL } = result.user;
      dispatch(login({ uid, displayName, email: userEmail, photoURL }));
      setMessage("");
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
      setMessage("Error al iniciar sesión con Google: " + error.message);
    }
  };

  // Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
      setMessage("Has cerrado sesión exitosamente.");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      setMessage("Error al cerrar sesión: " + error.message);
    }
  };

  return (
    <div className="container">
      <h1>Autenticación</h1>
      {isAuthenticated ? (
        <div>
          <div className="profile-info">
            <p>Bienvenido, {user.displayName || user.email}</p>
            {user.photoURL && <img src={user.photoURL} alt="User Profile" width="50" height="50" />}
          </div>
          <button onClick={handleLogout}>Logout</button>
          <p className="success-message">{message}</p>
        </div>
      ) : (
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button" onClick={handleEmailRegister}>Registrarse</button>
            <button type="button" onClick={handleEmailLogin}>Iniciar sesión</button>
          </form>

          <button onClick={handleGoogleLogin}>Iniciar sesión con Google</button>
          <p className={message.includes("Error") ? "error-message" : "success-message"}>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
