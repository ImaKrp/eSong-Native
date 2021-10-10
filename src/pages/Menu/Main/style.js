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
  height: 80px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.black};
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  padding-top: 20px;
`;

export const Container = styled.View``;

export const ScrollPage = styled.ScrollView`
  height: 100%;
  width: 100%;
`;

export const HomeButton = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.b600};
  align-items: center;
  justify-content: center;
`;

export const HomeImg = styled.Image`
  width: 20px;
  height: 20px;
`;

export const DisableModal = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;

export const CollapseButton = styled.TouchableOpacity`
  height: 36px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.b600};
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  padding: 3px 3px;
`;

export const User = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 16px;
`;


export const MiniUser = styled.Image`
  width: 20px;
  height: 20px;
  border-radius: 16px;
`;

export const Username = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  margin: 0 8px;
`;

export const Arrow = styled.Image`
  width: 8px;
  height: 8px;
  margin-right: 6px;
  transform: rotate(${({ active }) => (active === true ? `270deg` : "90deg")});
`;

export const Modal = styled.View`
  padding: 4px;
  border-radius: 4px;
  position: absolute;
  top: 75px;
  right: 20px;
  z-index: 5;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.b600};
`;

export const RedirectBtn = styled.TouchableOpacity`
  padding: 4px;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  justify-content: center;
`;

export const RedirectText = styled.Text`
  font-size: 15px;
  margin-left: 6px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
`;
