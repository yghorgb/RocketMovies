import { Container } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { FaArrowLeft } from "react-icons/fa";

export function Details() {
  return (
    <Container>
      <Header />
      <ButtonText title="Voltar" icon={<FaArrowLeft />} />
    </Container>
  );
}
