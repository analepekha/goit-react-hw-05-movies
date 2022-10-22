import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { NavLink } from "react-router-dom";


export const BtnGoBack = styled.button`
  padding: 8px 15px 8px 20px ;
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
  left: 4px;
`;

export const MainInfo = styled.div`
  display: flex;
  padding: 20px;
  box-shadow: 0 1px 2px rgba(26, 82, 108, .5);
  background-color: #026b9c2b;  
`;

export const Img = styled.img`
  width: 250px;
  height: auto;
  margin-right: 15px; 
`;

export const WrapperAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Main = styled.main`
  padding: 15px;
  border-bottom: 1px solid #1a526c;
  box-shadow: 0 2px 4px rgba(26, 82, 108, .5);
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 4px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  outline: none;
  border: 0;
  cursor: pointer;

   :hover {
    color: white;
    background-color: #1a526c;
  }

  &.active {
    color: white;
    background-color: #1a526c;
  }
`;

export const AddItem = styled.li`
   :first-child{
    margin-right: 10px;
    }
  `;

export const AddInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  padding: 20px;
`;

export const AddList = styled.ul`
  display: flex;
  margin-top: 15px;
`;