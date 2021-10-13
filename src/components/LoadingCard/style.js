import styled from "styled-components/native";

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.b600};
  align-items: flex-start;
  justify-content: flex-start;
  width: 162px;
  height: 100%;
  margin-right: 20px;
  padding: 14px;
  border-radius: 4px;
`;

export const ImgDiv = styled.View`
  width: 134px;
  height: 134px;
  border-radius: 4px;
  margin-bottom: 20px;
  background-color: #333333;
`;

export const Artist = styled.Text`
  width: 100%;
  height: 17px;
  border-radius: 4px;
  background-color: #333333;
`;

export const SongName = styled.Text`
  width: 100%;
  height: 20px;
  border-radius: 4px;
  background-color: #333333;
  margin-bottom: 16px;
`;
