// components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./common/Button";
import NetflixLogo from "./Logonetflix.png";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: #000;
`;

const Logo = styled.img`
  width: 100px;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src={NetflixLogo} alt="Netflix Logo" />
      </Link>
      <Navigation>
        <Link to="/login">
          <Button>Giriş Yap</Button>
        </Link>
        <Link to="/signup">
          <Button primary>Kayıt Ol</Button>{" "}
          {/* 'primary' prop'u daha belirgin bir stil için eklenmiştir. */}
        </Link>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
