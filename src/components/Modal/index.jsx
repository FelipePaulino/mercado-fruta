import { useRef, useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import * as S from "./styles";

export default function Modal({ showModal, setShowModal, isLogged }) {
  const [user, setUser] = useState()
  const [password, setPassword] = useState()


  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const loggedUser = "teste@teste.com.br"
  const nameUser = "Felipe Ribeiro"
  const loggedPassword = "123456"

  const SignIn = () => {
    if (user === loggedUser && password === loggedPassword) {
      localStorage.setItem('Logged', 'isLogged');
      alert('Seja bem vindo e boas compras!!!')
      window.location.href = window.location.href
    }
    else {
      alert('Usuário não cadastrado')
    }
  }

  const SignOut = () => {
    localStorage.setItem('Logged', '');
    alert('Usuário desconectado, faça login para realizar as compras!')
    window.location.href = window.location.href
  }

  return (
    <>
      {showModal ? (
        <animated.div style={animation}>
          <S.Login>
            <S.Heading>
              {isLogged ? (
                <S.Logged>
                  <h3>Bem vindo</h3>
                  <span>{nameUser}</span>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      SignOut()
                    }}
                  >
                    Sair
                  </button>
                </S.Logged>
              ) : (
                <S.Loggouf>
                  <h3>Login</h3>
                  <div>
                    <label htmlFor="Email">Email</label>
                    <input type="email" placeholder="Digite seu email..." onKeyUp={(e) => setUser(e.target.value)} />
                  </div>

                  <div>
                    <label htmlFor="Email">Senha</label>
                    <input type="email" placeholder="Digite sua senha..." onKeyUp={(e) => setPassword(e.target.value)} />
                  </div>


                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      SignIn()
                    }}
                  >
                    Entrar
                  </button>
                </S.Loggouf>
              )}

            </S.Heading>
          </S.Login>
        </animated.div>
      ) : null
      }
    </>
  );
}
