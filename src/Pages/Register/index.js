import { auth } from "../../firebaseConnection";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useState } from "react";
import { toast } from "react-toastify";
import "./index.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(false);
  const [userDetail, setUserDetail] = useState({});

  async function newUser() {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Usuário registrado com sucesso!");

        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        if (error.code === "auth/weak-password") {
          toast.warning("Senha muito fraca!");
        } else if (error.code === "auth/email-already-in-use") {
          toast.warning("Email existente!");
        }
      });
  }

  async function loginUser() {
    await signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        toast.success("Login feito com sucesso!");

        setUserDetail({
          uid: value.user.id,
          email: value.user.email,
        });
        setUser(true);

        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        toast.error("Erro ao fazer login!");
      });
  }

  return (
    <div className="container">
      <div className="design-page">
        <h1>Welcome!</h1>
        <img src={require("../../assets/image.png")} />
      </div>
      <div className="register-content">
        <label>Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button onClick={newUser}>Register</button>
        <a onClick={loginUser} href="#">
          Already have an account?
        </a>
      </div>
    </div>
  );
};

export default Register;
