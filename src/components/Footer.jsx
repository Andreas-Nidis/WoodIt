import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = (props) => {
    return (
        <Container>
            <SiteLinks>
                <h4>SiteLinks</h4>
                <Link to="/home">
                    <span>Home</span>
                </Link>
                <Link to="/about">
                    <span>About</span>
                </Link>
                <Link to="/request">
                    <span>Request</span>
                </Link>
            </SiteLinks>
            <Contact>
                <h4>Contact</h4>
                <span>Pablo Quanteni</span>
                <a>example@email.com</a>
                <a>(+31)000000000</a>
            </Contact>
        </Container>
    )
}

const Container = styled.footer`
    position:   relative;
    border-top: 1px solid rgba(152, 152, 152, 0.7);
    background-color: #282828;
    color: #f7f7f7;
    display: flex;
`;

const SiteLinks = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    padding-bottom: 40px;
    opacity: 0.8;

    h4 {
        text-decoration: underline;
        padding: 0;
        margin-bottom: 20px;
        letter-spacing: 1px;
    }

    a {
        padding: 3px;
        letter-spacing: 1px;
        span {
            color: #f7f7f7;
        }
    }
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    padding-bottom: 40px;
    opacity: 0.8;

    h4 {
        text-decoration: underline;
        letter-spacing: 1px;
    }

    span {
        padding: 3px;
        letter-spacing: 1px;
    }

    a {
        padding: 3px;
        letter-spacing: 1px;
        color: #f7f7f7;
    }
`;

export default Footer;
