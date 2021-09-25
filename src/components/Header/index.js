import React from "react";
import corebizLogo from '../../assets/logo-corebiz.svg'
import { Container, Content, NavItens} from "./styles";

export default function Header() {
    return (
            <Container>
                <Content>
                    <a href="/">
                        <img src={corebizLogo} alt="Logo" />
                    </a>
                    <NavItens>
                        <a href="https://www.corebiz.ag/pt/about/">
                            a corebiz
                        </a>
                        <a href="https://www.corebiz.ag/pt/#framework-title">
                            serviços
                        </a>
                        <a href="https://www.corebiz.ag/pt/cases/">
                            cases
                        </a>
                        <a href="https://www.corebiz.ag/pt/contato/">
                            contato
                        </a>
                    </NavItens>
                </Content>
            </Container>
    );
}