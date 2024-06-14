import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { Container, Inputdiv, LembreMi, ButtonEntrar, Signup } from "./Styles";
const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>Acesse o Sistema</h1>
        <Inputdiv>
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setUserName(e.target.value)}
          />
          <FaUser className="icon" />
        </Inputdiv>

        <Inputdiv>
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </Inputdiv>

        <LembreMi>
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu a senha?</a>
        </LembreMi>
        <ButtonEntrar>Entrar</ButtonEntrar>

        <Signup>
          <p>
            Não tem uma conta? <a href="#">Cadastre-se</a>
          </p>
        </Signup>
      </form>
    </Container>
  );
};

export default Login;
