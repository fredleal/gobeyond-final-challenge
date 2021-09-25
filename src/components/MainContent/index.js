import React, { useEffect, useState } from "react";
import { LeftContainer, RightContainer, MainContainer} from "./styles";
import arrowButton from "../../assets/arrow-button.svg";




export function MainContent() {
    const [data, setData] = useState([
        { title: " ", imgUrl: " ", thumbUrl: " " },
        { title: " ", imgUrl: " ", thumbUrl: " " },
        { title: " ", imgUrl: " ", thumbUrl: " " },
        { title: " ", imgUrl: " ", thumbUrl: " " },
    ]);


    const [index, setIndex] = useState(0);
    useEffect(() => {
        async function getPhoto() {
            const response = await fetch(
                "https://my-json-server.typicode.com/fredleal/db-api/data"
            );
            const data = await response.json();

            setData(data);

            console.log(data);
        }

        getPhoto();
    }, []);

    return (
        <MainContainer>
            <LeftContainer>
                <h1>{data[index].title}</h1>
                <button>
                    <a href="https://www.corebiz.ag/pt/">
                        veja mais
                        <img src={arrowButton} alt="Veja Mais" />
                    </a>
                </button>
                <div>
                    <img
                        className={index === 0}
                        src={data[0].thumbUrl}
                        alt="imagem"
                        onClick={() => setIndex(0)}
                    />
                    <img
                        className={index === 1}
                        src={data[1].thumbUrl}
                        alt="imagem"
                        onClick={() => setIndex(1)}
                    />
                    <img
                        className={index === 2}
                        src={data[2].thumbUrl}
                        alt="imagem"
                        onClick={() => setIndex(2)}
                    />
                    <img
                        className={index === 3}
                        src={data[3].thumbUrl}
                        alt="imagem"
                        onClick={() => setIndex(3)}
                    />
                </div>
            </LeftContainer>
            <RightContainer>
                <div>
                <img src={data[index].imgUrl} alt="imagem"  />
                </div>
            </RightContainer>
        </MainContainer>
    );
}