import { useState } from "react";
import * as S from "./styles";
import { BiCart } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { Container } from "../../styles/Global";
import { Data } from "./data";
import Modal from "../Modal";

export default function Header({isLogged }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <S.Content>
      <Container>
        <S.Grid>
          <S.Brand>
            <a href="/">
              <img src="./logo.png" alt="Logo" />
            </a>
          </S.Brand>

          <S.Nav>
            <ul>
              {Data.map((items) => {
                return (
                  <li>
                    <a href={items.url}>{items.page}</a>
                  </li>
                );
              })}
            </ul>
          </S.Nav>

          <S.Icons>
            <a href="/carrinho">
              <BiCart />
            </a>

            <button onClick={openModal}>
              <FaUserCircle />
            </button>
          </S.Icons>
        </S.Grid>
        <Modal showModal={showModal} setShowModal={setShowModal} isLogged={isLogged} />
      </Container>
    </S.Content>
  );
}
