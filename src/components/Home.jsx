import styled from "styled-components";
import Header from "./Header";
import { useState, useEffect } from 'react';

const Home = (props) => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
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
            <Main>
                <div>
                    <img src="/images/main-image-1.jpg" alt="" />
                    <p>
                        Hello.
                    </p>
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
    min-height: 400px;
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
`;

export default Home;