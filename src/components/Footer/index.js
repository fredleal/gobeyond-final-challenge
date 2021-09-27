import React from "react";
import { Container, Info, InfoImgs, InfoText, Locations } from "./styles";
import corebizLogo2 from '../../assets/logo2.svg'
import instagramIcon from '../../assets/instagramIcon.svg'
import facebookIcon from '../../assets/facebookIcon.svg'
import linkedinIcon from '../../assets/linkedinIcon.svg'




export function Footer() {
    return (
        <Container>
            <Info>
                <InfoImgs>
                        <img src={corebizLogo2} alt="Logo" />
                        <p>direitos reservados. corebiz 2021</p>
                    <div>
                        <a href="/">
                            <img src={facebookIcon} alt="Facebook" />
                        </a>
                        <a href="/">
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                        <a href="https://www.linkedin.com/in/frederico-leal/">
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </a>
                    </div>
                </InfoImgs>
                <InfoText>
                    <ul>
                        <li><a href="https://www.corebiz.ag/pt/about/">a corebiz</a> </li>
                        <li><a href="https://www.corebiz.ag/pt/#framework-title">serviços</a></li>
                        <li><a href="https://www.corebiz.ag/pt/cases/">cases</a></li>
                        <li><a href="https://www.corebiz.ag/pt/contato/">contato</a></li>
                    </ul>
                </InfoText>
            </Info>
            <Locations>
                <div>
                    <h2>.Brasil </h2>
                    <p> Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP</p>
                    <p>
                        R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP
                    </p>
                </div>

                <div>
                    <h2>.Argentina</h2>
                    <p> Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA</p>
                </div>

                <div>
                    <h2>.México</h2>
                    <p>
                        Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo,
                        11520 Ciudad de México, CDMX
                    </p>
                </div>

                <div>
                    <h2>.Chile</h2>
                    <p> Roberto del Río 1137, Providencia.</p>
                </div>
            </Locations>
        </Container>
    )
}