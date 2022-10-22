import styled from "styled-components";

export const CastList = styled.div`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const CardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 4px rgba(26, 82, 108, .5);
`;

export const CastImg = styled.img`
  display: block;
  width: 250px;
  height: auto;
`;

export const Text = styled.p`
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 8px; 
`;

export const AdditionalText = styled(Text)`
  font-weight: 400; 
`;

