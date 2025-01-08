import styled from "styled-components";
import Header from "./Header";
import { useState, useEffect } from 'react';

const Home = (props) => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 630) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Container>
            <Title>
                <h1>WoodIt</h1>
            </Title>

            <Header isFixed={isFixed}/>

            <Main isFixed={isFixed}>
                <div>
                    <img id="img1" src="/images/main-image-1.jpg" alt="" />
                    <div>
                        <p>
                            Hello.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>
                            Hello.
                        </p>
                    </div>
                    <img id="img1" src="/images/main-image-2.jpg" alt="" />
                </div>
                <div>
                    <img id="img1" src="/images/main-image-3.jpg" alt="" />
                    <div>
                        <p>
                            Hello.
                        </p>
                    </div>
                </div>
            </Main>
        </Container>
    )
};

const Container = styled.main`
    position: relative;
    display: block;
    margin: 0;
    padding: 0;
    top: 0;
`;

const Title = styled.div`
    position: relative;
    color: #ffffff;
    margin: 0;
    padding: 0;
    top: 0;
    min-height: 630px;
    min-width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        margin: 0;
        padding: 0;
        text-align: center;
        font-size: 50px;
    }

    &:after {
        background: url('/images/main-background-1.jpg') center center / cover no-repeat fixed;
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 0.98;
        z-index: -1;
    }
`;

const Main =styled.div`
    position: relative;
    ${({isFixed}) => isFixed ? `
        margin-top: 80px;
        ` : `
        margin-top: 0px;
    `}

    div {
        padding: 0;
        margin: 0;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

    img {
        display: block;
        width: 50%;
        border: 1px solid rgba(152, 152, 152, 0.7);
    }

    p {
        padding: 0;
        margin: 0;
    }
`;

export default Home;