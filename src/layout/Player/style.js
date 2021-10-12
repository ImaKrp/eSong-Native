import styled from "styled-components/native";

export const FullView = styled.ScrollView`
  height: 100%;
  width: 100%;
  flex: 1;
`;

export const LighterGray = styled.View`
  height: 250px;
  width: 100%;
  background-color: ${({ color }) => (color ? color : "rgb(83, 83, 83)")};
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.b100};
`;

export const Wrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 35%;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: 65%;
  z-index: 1;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.View`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.b100};
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  padding: 30px;
`;

export const Image = styled.Image`
  width: 270px;
  height: 270px;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  width: 100%;
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 10px;
`;

export const Artist = styled.Text`
  width: 100%;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.light};
  color: rgb(124, 124, 124);
  margin-bottom: 16px;
`;

export const Slider = styled.Slider`
  width: 110%;
`;

export const Controllers = styled.View`
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TogglePause = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 30px;
  margin: 0 20px;
`;

export const ChangeSong = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 30px;
`;

export const ControllersImgs = styled.Image`
  width: 50%;
  height: 50%;
`;
