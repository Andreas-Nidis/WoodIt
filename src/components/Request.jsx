import styled from "styled-components";
import Header from "./Header";
import React from "react";
import { useState } from "react";
import Footer from "./Footer";

const Request = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            description,
        };

        try {
            const response = await fetch('/send-email', { // replace with actual endpoint or EmailJS code
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setStatus('success');
        } catch (error) {
            setStatus('error');

            setTimeout(() => {
                setStatus('');
                setName('');
                setEmail('');
                setDescription('');
            }, 5000);
        }
    };

    if (status === 'success') {
        return <Message>Request Sent!</Message>;
    }

    if (status === 'error') {
        return <Message>Error: Oops! This feature hasn't been implemented yet! I didn't want to leave my email open to scammer bots. Next time!</Message>;
    }

    return (
        <>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <Form onSubmit={handleSubmit}>
                <LeftColumn>
                    <InputField
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <InputField
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </LeftColumn>
                <RightColumn>
                    <TextArea
                        placeholder="Describe your project"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </RightColumn>
                <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </>
    )
}

const HeaderContainer = styled.div`
    position: fixed;
    width: 100%;
    z-index: 1;
`;

const Form = styled.form`
    position: relative;
    top: 80px;
    padding: 20px 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LeftColumn = styled.div`
    padding: 10px;
    width: 50%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    gap: 20px;
`;

const RightColumn = styled.div`
    padding: 10px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputField = styled.input`
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: #0073e6;
    }
`;

const TextArea = styled.textarea`
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    min-width: 80%;
    max-width: 80%;
    height: 150px;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: #0073e6;
    }
`;

const SubmitButton = styled.button`
    margin-left: 35%;
    margin-right: 35%;
    padding: 15px;
    font-size: 16px;
    background-color: #6c6c6d;
    color: white;
    border: 1px solid #484848;
    border-radius: 50px;
    cursor: pointer;
    width: 30%;
    margin-top: 20px;

    &:hover {
        background-color: #484848;
    }

    &:active {
        border: 1px solid #afafaf;
        background-color: #afafaf;
        color: #1a1a1a;
    }
`;

const Message = styled.div`
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #333;
`;

const FooterContainer = styled.div`
    margin-top: 150px;
`;

export default Request;
