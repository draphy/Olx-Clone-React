import React, { useContext } from "react";
import Login from "../Components/Login/Login";
import { AuthContext } from "../storage/FirebaseContext";
import { useHistory } from "react-router-dom";
function LoginPage() {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  return <div>{user ? history.push("/") : <Login />}</div>;
}

export default LoginPage;
