import axios from 'axios';

export const LoginService = async ({ NICK_USR, password }) => {
  try {
    const response = await axios.post(
      "http://192.168.0.5:4000/api/v1/usuario/login",
      { NICK_USR, password },
      { headers: { 'Content-Type': 'application/json' } }
    );
    return response.data; // Devolvemos los datos correctos
  } catch (error) {
    console.error("Error en LoginService:", error.message);
    alert(error.message)
    return null; // Devolvemos null en caso de error
  }
};
