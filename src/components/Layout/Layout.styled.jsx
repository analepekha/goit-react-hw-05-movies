import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .25);


`;

export const Nav = styled.nav`
display: flex;
padding: 10px 30px;
`


export const Link = styled(NavLink)`
  padding: 8px 16px;
  margin-right: 20px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  
  &.active {
    color: white;
    background-color: #1a526c;
  }

`;
