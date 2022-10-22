import styled from "styled-components";
import { Link} from 'react-router-dom';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 20px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const LinkItem = styled(Link)`
  text-align: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(26, 82, 108, 1);
  background-color: #1a526c30;
  transition: transform 0.25s;

  :hover{
    transform: scale(1.02);
  }
`;

export const Title = styled.h3`
  text-align: center;
  text-decoration: none;
  color: black;
`;