import styled from "styled-components/native";

export const FullView = styled.ScrollView`
  height: 100%;
  width: 100%;
  flex: 1;
`;

export const Wrapper = styled.View`
  height: 250px;
  width: 100%;
  background-color: rgb(64,64,64);
  flex-direction: row;
  align-items: center;
`;

export const ProfileInfo = styled.Text`
  width: 100%;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Username = styled.Text`
  width: 100%;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Content = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const MenuBtn = styled.TouchableOpacity`
  width: 80%;
  align-items: center;
  justify-content: center;
  height: 58px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.w200};
  margin-top: 150px;
`;

export const MenuText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: 15px;
  letter-spacing: 2px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ProfileImage = styled.Image`
  width: ${({ size }) => (size ? size : "100%")};
  height: ${({ size }) => (size ? size : "100%")};
  border-radius: 75px;
`;

export const ImageDiv = styled.TouchableOpacity`
  margin: 0 10px;
  height: 150px;
  width: 150px;
  border-radius: 75px;
  background-color: ${({ theme }) => theme.colors.b600};
  align-items: center;
  justify-content: center;
`;

export const Column = styled.TouchableOpacity`
  margin-left: 10px;
  justify-content: center;
  align-items: center;
`;

