import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "100%")};
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 3;
  align-items: center;
  justify-content: center;
`;

export const ModalDiv = styled.View`
  position: absolute;
  bottom: 15%;
  padding: 14px;
  width: 80%;
  background-color: ${({ theme }) => theme.colors.b100};
  border-radius: 6px;
  z-index: 5;
`;

export const Row = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.b100};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Span = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const CloseBtn = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
`;

export const CloseImg = styled.Image`
  width: 18px;
  height: 18px;
`;

export const Column = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.Image`
  width: ${({ size }) => (size ? size : "100%")};
  height: ${({ size }) => (size ? size : "100%")};
  border-radius: 75px;
`;

export const ImageDiv = styled.View`
  height: 150px;
  width: 150px;
  border-radius: 75px;
  background-color: ${({ theme }) => theme.colors.b600};
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`;

export const SaveBtn = styled.TouchableOpacity`
  width: 70%;
  align-items: center;
  justify-content: center;
  height: 58px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.w200};
  margin-bottom: 12px;
`;

export const SaveText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  letter-spacing: 2px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ErrorLabel = styled.Text`
  font-size: 15px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const InputDiv = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const GapDiv = styled.View`
  width: 80%;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 25px;
`;


export const InputLabel = styled.Text`
  font-size: 15px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  padding: 0px 12px;
  background-color: ${({ theme }) => theme.colors.b200};
  border: 1px solid
    ${({ isOnError, theme }) =>
      isOnError !== "" ? theme.colors.red : theme.colors.b500};
  color: ${({ theme }) => theme.colors.w200};
  border-radius: 4px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 8px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;