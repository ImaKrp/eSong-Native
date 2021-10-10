import styled from "styled-components/native";

export const Form = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 25px 0;
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

export const SubmitButton = styled.TouchableOpacity`
  margin-top: 10px;
  width: 80%;
  height: 58px;
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.w200};
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const SubmitText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  letter-spacing: 2px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Hr = styled.View`
  margin-top: 35px;
  margin-bottom: 35px;
  width: 80%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.b700};
`;

export const LoginBtn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const LoginText = styled.Text`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue};
  margin-bottom: 22px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const LoginLabel = styled.Text`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.w100};
  margin-bottom: 22px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ErrorLabel = styled.Text`
  font-size: 15px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Eye = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Passwordiv = styled.View`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 8px;
`;

export const EyeImg = styled.Image`
  width: 20px;
  height: 15px;
`;

export const LoginDiv = styled.View`
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

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