import { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import * as S from "./styles";
import { AiFillCheckCircle } from "react-icons/ai";
import Button from "../Button";

export default function Checked({ check, setCheck, label }) {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: check ? 1 : 0,
    transform: check ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeCheck = e => {
      if(modalRef.current === e.target) {
          setCheck(false)
      }
  }

  const keyPress = useCallback(e => {
      if(e.key === 'Escape' && check) {
          setCheck(false)
      }
  },
  [setCheck, check])

  useEffect(() => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress)
  },[keyPress])

  const goToCar = () => {
    window.location.href = '/carrinho'
  }

  return (
    <>
      {check ? (
        <S.Background ref={modalRef} onClick={closeCheck}>
          <animated.div style={animation}>
            <S.Wrapper>
              <h2>Seu produto foi adicionado ao carrinho!</h2>
              <S.CheckItem />

              <Button 
                label="Ir para o carrinho"
                onClick={(e) => {
                  e.preventDefault()
                  goToCar()
                }} 
              />

              <S.CloseChecked
                aria-label="Close check"
                onClick={() => setCheck((prev) => !prev)}
              />
            </S.Wrapper>
          </animated.div>
        </S.Background>
      ) : null}
    </>
  );
}
