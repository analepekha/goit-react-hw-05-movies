import styled from "styled-components";
import { HiSearch } from "react-icons/hi";


export const Form = styled.form`
  display: flex;
  justify-content: center;
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
  cursor: pointer;
  outline: none;
  background-color: transparent;

  &:hover{
    background-color: #fffff;
`;

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