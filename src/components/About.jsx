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
                        Hi, I'm Pablo. I'm a passionate woodcarver with over a decade of experience bringing ideas to life through the beauty of wood.<br/><br/>
                        For me, every piece of wood has a story to tell, and my job is to uncover it. Whether it's a simple design or an intricate masterpiece, I believe in crafting with precision, care, and respect for the material.<br/><br/>
                        Woodcarving started as a hobby in my grandfather's workshop, where I first learned to shape raw blocks into something meaningful. Over the years, it grew into a lifelong calling.<br/><br/>
                        I specialize in custom carvings, blending traditional techniques with modern artistry to create pieces that are personal and timeless.<br/><br/>
                        When I'm not carving, you'll find me exploring forests for inspiration or experimenting with new ideas in my workshop.<br/><br/>
                        I believe that craftsmanship is about more than just skill—it's about putting a piece of your soul into everything you make. So if you have a vision for a project, I'd love to bring it to life for you. Let's create something beautiful together.
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

    @media (max-width: 980px) {
        flex-direction: column;
        align-items: center;
    }
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

        @media (max-width: 980px) {
            box-shadow: 0px 12px 54px 5px rgba(122, 122, 122, 0.7);
        }
    }

    @media (max-width: 980px) {
        width: 70%;
    }
`;

const Text = styled.div`
    padding: 0 30px;
    position: relative;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: justify;

    @media (max-width: 980px) {
        padding: 20px 30px;
        width: 90%;
        align-items: justify;
    }
`;

export default About;