import styled from "styled-components/native";

export const ScrollPage = styled.ScrollView`
  padding-left: 20px;
  height: 245px;
  width: 100%;
`;

export const Void = styled.View`
  height: 100%;
  width: 20px;
`;

export const Artist = styled.Text`
  width: 100%;
  font-size: 18px;
  margin: 25px 0 16px 20px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
