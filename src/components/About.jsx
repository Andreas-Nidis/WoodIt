import styled from "styled-components";
import Header from "./Header";

const About = (props) => {
    return (
        <>
            <Header />
            <Container>
                <Portrait>
                    <img src="/images/portrait-image.jpeg" alt="Portrait of Pablo" />
                </Portrait>
                <Text>
                    <p>
                        My name is Pablo!
                    </p>
                </Text>
            </Container>
        </>
    )
}

const Container = styled.div`
    position: relative;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
`;

const Portrait = styled.div`
    position: relative;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        margin: 40px;
        width: 100%;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        box-shadow: 0px 32px 184px 5px rgba(122, 122, 122, 0.7);
    }
`;

const Text = styled.div`
    position: relative;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export default About;