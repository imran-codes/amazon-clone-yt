import { Router } from "@mui/icons-material";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/router";
import React from "react";
import { auth } from "../../lib/firebase";
import { useAppDispatch } from "../../lib/store/hooks";
import { signInToAccount } from "../../lib/store/reducers/userReducer";
import { Container, RegisterButton, SignInButton } from "./styled";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const router = useRouter();
  const dispatch = useAppDispatch();

  const loginUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(signInToAccount(userCredential.user));
        router.push("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`${errorMessage}`);
      });
  };

  const registerUser = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(signInToAccount(userCredential.user));
        router.push("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`${errorMessage}`);
      });
  };

  return (
    <Container>
      <h1>Sign In</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SignInButton type="submit" onClick={(e) => loginUser(e)}>
          Sign In
        </SignInButton>
        <p style={{ textAlign: "center" }}>Or</p>
        <RegisterButton type="button" onClick={(e) => registerUser(e)}>
          Create your Amazon Account
        </RegisterButton>
      </form>
    </Container>
  );
};

export default LoginForm;
