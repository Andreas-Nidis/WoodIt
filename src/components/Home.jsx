import styled from "styled-components";

const Home = (props) => {
    return (
        <Container>
            <Title>
                <h1>WoodIt</h1>
            </Title>
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
    color: #eeeeee;
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

export default Home;