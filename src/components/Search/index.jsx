import { Container } from "../../styles/Global";
import * as S from "./styles";
import { FaSearch } from 'react-icons/fa'

export default function Search({ setSearch, search }) {
  const resultSearch = () => {
    window.location.href = `/resultado-busca?fruta=${search}`
  }
  return (
    <S.Content>
      <Container>
        <S.Wrapper>
          <S.Form>
            <input
              type="text"
              placeholder="Pesquisa sua fruta preferida..."
              onKeyUp={(e) => setSearch(e.target.value)}
            />
            <S.Icon onClick={(e) =>{ 
              e.preventDefault()
              resultSearch()
            }}>
              <FaSearch />
            </S.Icon>
          </S.Form>
        </S.Wrapper>
      </Container>
    </S.Content>
  );
}
