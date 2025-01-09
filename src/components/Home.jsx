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
                <Wrap>
                    <img id="img1" src="/images/main-image-1.jpg" alt="" />
                    <div>
                        <p className="title">
                            The Art of Wood Carving
                        </p>
                        <p>
                            Every piece of wood tells a story, and at WoodIt, we transform these stories into timeless works of art. <br/><br/>
                            From intricate designs to bold statements, our carvings celebrate the beauty and character of nature's finest material. <br/><br/>
                            Each cut, curve, and detail is a testament to the artistry and precision that defines wood carving.
                        </p>
                    </div>
                </Wrap>
                <Wrap>
                    <div>
                        <p className="title">
                            Our Process
                        </p>
                        <p>
                            At WoodIt, every project begins with <b>YOU</b>. <br/><br/> 
                            Share your ideas, and together we'll shape them into a custom design that fits your vision. <br/><br/> 
                            Using traditional tools and modern techniques, we bring your concepts to life, honoring the integrity of the wood and ensuring every carving is as functional as it is beautiful.
                        </p>
                    </div>
                    <img id="img2" src="/images/main-image-2.jpg" alt="" />
                </Wrap>
                <Wrap>
                    <img id="img3" src="/images/main-image-3.jpg" alt="" />
                    <div>
                        <p className="title">
                            Why Choose WoodIt
                        </p>
                        <p>
                            When you choose WoodIt, you're choosing craftsmanship that values sustainability and individuality. <br/><br/>
                            We source high-quality, responsibly harvested wood and turn it into one-of-a-kind creations that stand the test of time. <br/><br/>
                            Whether it's a personalized gift, a functional piece, or a decorative masterpiece, every project is a labor of love.
                        </p>
                    </div>
                </Wrap>
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

    
`;

const Wrap = styled.div`
    padding: 0;
    margin: 0;
    display: flex;

    div {
        background-color: rgba(152, 152, 152, 0.07);
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    img {
        display: block;
        width: 50%;
        border: 1px solid rgba(152, 152, 152, 0.7);
    }

    p {
        padding: 0 50px;
        text-align: center;
        font-size: 20px;
    }

    .title {
        margin: 0;
        padding: 0;
        font-size: 28px;
        text-decoration: underline;
    }
    
    @media (max-width: 768px) {
        background-color: rgba(152, 152, 152, 0.07);

        img {
            display: none;
        }

        div {
            background-color: rgba(0, 0, 0, 0);
            margin: 14px 0;
            width: 100%;
        }
    }
`;

export default Home;