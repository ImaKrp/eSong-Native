import styled from "styled-components/native";

export const StyledView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.b100};
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`;

export const ScrollPage = styled.ScrollView`
  height: 100%;
  width: 100%;
`;
