import { useState, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginComponent from "./LoginComponent/LoginComponent";
import { UserProvider } from "../context/UserContext/UserProvider";
import { UsuarioContext } from "../context/UserContext/UsuarioContext";

const MainComponent = () => {
  const { usuario } = useContext(UsuarioContext); // Obtenemos el usuario del contexto

  if (!usuario) {
    return <LoginComponent/>;
  } 
  

  return (
    <UserProvider>
      <Routes>
        
        <Route path="/" element={
          
          <LoginComponent/>
          
          }/>
      
      </Routes>
    </UserProvider>
  )
}

export default MainComponent