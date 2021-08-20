import React, { useState } from 'react'
import styled from 'styled-components';

export default function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false)

    return (
    <Nav>
      <Logo href="/">
        <img src={"/images/bein-logo.svg"} alt="logo"/>
      </Logo>
      <Hamburger onClick={() => {setIsOpen(!isOpen)}}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="/">Anasayfa</MenuLink>
        <MenuLink href="https://www.beinconnect.com.tr" target="_blank">İçerikleri Keşfet</MenuLink>
        <MenuLink href="https://www.beinconnect.com.tr" target="_blank">Paketler</MenuLink>
      </Menu>
    </Nav>
    )
}

const Nav = styled.div`
  padding:1rem 2rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
  background-image: transparent;
  width:80%;
  margin:0 auto;
`;

const Logo = styled.a`
  padding:1rem 0;
  
`;

const Hamburger = styled.div`
  display:none;
  flex-direction:column;
  cursor:pointer;

  span{
    height:2px;
    width:25px;
    background:white;
    margin-bottom:4px;
    border-radius:5px;
  }

  @media (max-width:768px) {
    display:flex;
  }
`;

const MenuLink = styled.a`
  color:white;
  padding:1rem 2rem;
  cursor:pointer;
  text-align:center;
  text-decoration:none;
  transition:all 0.3s ease-in;
  font-size:1rem;
  font-weight:600;

  &:hover{
    color:gray;
  }
`;

const Menu = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  position:relative;

  @media (max-width:768px) {
    overflow:hidden;
    flex-direction:column;
    width:100%;
    max-height: ${({isOpen}) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;