import { TextContainer, MainContainer } from "./styles";
import vejaMais from "../../assets/button.svg";


export function MainContent() {
    return (
        <MainContainer>
            <TextContainer>
                <h1>a Corebiz atua em toda jornada digital do usuário.</h1>
                <button>
                    <a href="https://www.corebiz.ag/pt/">
                        <img src={vejaMais} alt="Veja Mais" />
                    </a>
                </button>
            </TextContainer>
        </MainContainer>
    );
}