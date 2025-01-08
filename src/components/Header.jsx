import styled from "styled-components";
import React from "react";

const Header= ({ isFixed }) => {
    return (
        <Nav isFixed={isFixed}>
            <Logo>
                <img src="/images/main-logo.jpg" alt="" />
            </Logo>

            <NavMenu>
                <a>
                    <span>Home</span>
                </a>
                <a>
                    <span>About</span>
                </a>
                <a>
                    <span>Request</span>
                </a>
            </NavMenu>
        </Nav>
    )
}

const Nav = styled.nav`
    ${({ isFixed }) => isFixed ? `
        position: fixed;
        top: 0px;
        background-color: #fff;
        ` : `
        position: relative;
        margin-top: 0px;
    `}
    
    left: 0;
    right: 0;
    border: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-around;
    letter-spacing: 10px;
    height: 80px;
    z-index: 3;
`;

const Logo = styled.a`
    padding: 0;
    margin: 0;
    width: 70px;
    margin-left: auto;

    img {
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    position: relative;
    padding: 0px;
    margin: 0px;
    margin-right: auto;
    display: flex;

    a {
        display: flex;
        align-items: center;
        margin: 0 12px;
        cursor: pointer;

        span {
            font-size: 16px;
            letter-spacing: 5px;
            padding: 0 15px;
            white-space: nowrap;
            position: relative;

            &:before {
                background-color: rgb(0, 0, 0);
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: '';
                height: 1.5px;
                left: 15px;
                opacity: 0;
                position: absolute;
                right: 20px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }

        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }
`;

export default Header;