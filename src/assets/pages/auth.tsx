import React from "react";
import "../../assets/Styles/pages/all-pages.scss";
import { auth, googleProvider } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInAnonymously,
} from "firebase/auth";
// import PersonalLinks from "../components/Navigations/PersonalLinks";

export const Auth = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [isRegistering, setIsRegistering] = React.useState(false);

  console.log(auth?.currentUser?.email);

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const loginFunct = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  };

  const signAnon = async () => {
    try {
      await signInAnonymously(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="main-columns-divide__main-area">
        <div className="main-exercises">
          <h2>Authentication</h2>
          <button onClick={signAnon}>Use without logging in</button>
          <div className="auth__inputs">
            {isRegistering ? (
              <div className="auth__inputs__register">
                <h2>Register new account</h2>
                <input
                  placeholder="email..."
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="pasword..."
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="add-btn auth-btn" onClick={signIn}>
                  Sign in
                </button>
              </div>
            ) : (
              <div className="auth__inputs__login">
                <h2>Login with your account</h2>
                <input
                  placeholder="email..."
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="pasword..."
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="add-btn  auth-btn" onClick={loginFunct}>
                  Login
                </button>
                <p>
                  Don't have an account?{" "}
                  <a onClick={() => setIsRegistering(true)}>Register</a>
                </p>
              </div>
            )}
          </div>
          <div className="auth__buttons">
            <button className="add-btn" onClick={signInWithGoogle}>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
