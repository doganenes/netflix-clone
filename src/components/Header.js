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
  background-color: rgba(0, 0, 0, 0.5); /* Şeffaflık ekledim */
  position: fixed; /* Header sabitlenir */
  width: 100%;
  z-index: 1000; /* Diğer bileşenlerin üzerinde görünmesini sağlar */
`;

const Logo = styled.img`
  width: 100px;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white; /* Linkler için beyaz renk */
  transition: color 0.3s ease; /* Geçiş efekti */

  &:hover {
    color: #e50914; /* Fare üzerine geldiğinde Netflix kırmızısı olacak */
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <StyledLink to="/">
        <Logo src={NetflixLogo} alt="Netflix Logo" />
      </StyledLink>
      <Navigation>
        <StyledLink to="/login">
          <Button>Giriş Yap</Button>
        </StyledLink>
        <StyledLink to="/signup">
          <Button primary>Kayıt Ol</Button>
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
