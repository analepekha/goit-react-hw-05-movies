import styled from "styled-components";
import { HiSearch } from "react-icons/hi";


export const Form = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
   outline: none;


    border-color: #1a526c;
  
`;

export const BtnSearch = styled.button`
  display: inline-block;
  position: relative;
  width: 38px;
  height: 38px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 4%;
  // opacity: 0.6;
  // transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
background-color: transparent;

  &:hover{
    background-color: #fffff;
`;

// export const LabelSearch = styled.span`
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   overflow: hidden;
//   clip: rect(0, 0, 0, 0);
//   white-space: nowrap;
//   clip-path: inset(50%);
//   border: 0;
// `;


export const Icon = styled(HiSearch)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  fill:  #1a526c;

  
`;