import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { NavLink } from "react-router-dom";



export const BtnGoBack = styled.button`
padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  background-color: #1a526c;
  font-weight: 500;
  outline: none;
  border: 0;
  cursor: pointer;
  position: relative;
  
`;

export const Icon = styled(BiArrowBack)`
  width: 15px;
  height: 15px;
  position: absolute;
  left: 0;
`

export const MainInfo = styled.div`
display: flex;
padding: 20px;
// border-bottom: 1px solid black;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .25);

  
`;

export const Img = styled.img`
    width: 250px;
    height: auto;
    margin-right: 15px;
  
`;

export const WrapperAbout = styled.div`

  
`;

export const Main = styled.main`
padding: 15px;
  border-bottom: 1px solid black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
`;

export const Link = styled(NavLink)`
//   padding: 8px 16px;
//   margin-right: 20px;
//   border-radius: 4px;
  text-decoration: none;
  color: black;
//   font-weight: 500;
  
//   &.active {
//     color: white;
//     background-color: #1a526c;
//   }

`;