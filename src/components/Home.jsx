import styled from "styled-components";

const Home = (props) => {
    return (
        <Container>
            <Title>
                <h1>WoodIt</h1>
            </Title>
            <BackgroundImg>
                <img src="../images/main-background-image.jpg" alt="WoodIt Background Image"/>
            </BackgroundImg>
        </Container>
    )
};

const Container = styled.main`
    position: relative;
`;

const Title = styled.div`
    position: relative;
`;

const BackgroundImg = styled.img`
    position: relative;
`;

export default Home;