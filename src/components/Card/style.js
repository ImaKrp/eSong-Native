import styled from "styled-components/native";

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.b600};
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  width: 162px;
  margin-right: 20px;
  padding: 14px;
  border-radius: 4px;
`;

export const PlayBtn = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.blue};
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 8px;
  right: 8px;
`;

export const PlayImg = styled.Image`
  width: 24px;
  height: 24px;
`;

export const Img = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export const ImgDiv = styled.View`
  width: 134px;
  height: 134px;
  margin-bottom: 20px;
`;

export const Artist = styled.Text`
  width: 100%;
  font-size: 16px;
  color: rgb(124, 124, 124);
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const SongName = styled.Text`
  width: 100%;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 10px;
`;
