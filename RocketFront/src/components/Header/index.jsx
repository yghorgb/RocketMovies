import { Container, Profile, Logo, SearchBar } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo>RocketMovies</Logo>

      <SearchBar placeholder="Pesquisar por título" />

      <Profile>
        <div>
          <strong>Yghor Gabriel</strong>
          <span>sair</span>
        </div>
        <img src="https://github.com/yghorgb.png" alt="Foto de usuário" />
      </Profile>
    </Container>
  );
}
