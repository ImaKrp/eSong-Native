import styled from "styled-components/native";

export const StyledView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.b100};
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: 10%;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.black};
  align-items: center;
  justify-content: center;
`;

export const HeaderText = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.purple};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const HeaderImage = styled.Image`
  height: 40px;
  width: 40px;
  margin-right: 15px;
`;

export const ScrollPage = styled.ScrollView`
  height: 100%;
  width: 100%;
`;
