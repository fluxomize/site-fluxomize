// src/components/Header/index.tsx

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: var(--shape);
  border-bottom: 1px solid var(--border);
`;

const Logo = styled.img`
  height: 50px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--text);
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: var(--primary);
    text-shadow: 0 0 8px rgba(0, 242, 255, 0.6);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--primary);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ 
            color: 'var(--text)',
            fontSize: '1.2rem',
            fontWeight: 'bold'
          }}>
            Flux
          </span>
        </div>
      </Link>
      <Nav>
        <NavLink to="/contact">Contato</NavLink>
      </Nav>
    </HeaderContainer>
  );
};