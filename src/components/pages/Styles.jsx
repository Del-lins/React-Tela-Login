import styled from "styled-components";

export const Container = styled.div`
  width: 450px;
  background: rgba(2, 2, 2, 0.068);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 40px;
  border-radius: 10px;
  margin: 0 auto;

  h1 {
    text-align: center;
  }

  @media (max-width: 668px) {
    width: 400px;

    h1 {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    width: 300px;
    padding: 20px;
  }
`;

export const Inputdiv = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin: 30px auto;

  input {
    width: 100%;
    height: 100%;
    background: transparent;
    outline: none;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    font-size: 16px;
    color: #fff;
    padding: 20px 25px;
  }

  input::placeholder {
    color: #fff;
  }

  .icon {
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
  }

  @media (max-width: 480px) {
    height: 45px;

    input {
      font-size: 14px;
      padding: 15px 20px;
    }

    .icon {
      right: 20px;
      font-size: 16px;
    }
  }
`;

export const LembreMi = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14.5px;
  margin: -15px 0 15px;

  label {
    color: #fff;
    cursor: pointer;
  }

  input {
    margin-right: 5px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    display: flex;
    align-items: center;
  }
`;

export const ButtonEntrar = styled.button`
  width: 100%;
  height: 50px;
  background: #fff;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  transition: 0.4s;

  &:hover {
    background: #efeff01a;
    color: #fff;
  }

  @media (max-width: 480px) {
    height: 45px;
    font-size: 14px;
  }
`;

export const Signup = styled.div`
  font-size: 15px;
  margin: 20px 0 10px;
  text-decoration: none;

  a {
    color: #fff;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
