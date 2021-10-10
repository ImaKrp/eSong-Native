import React, { useState, useCallback, useEffect } from "react";
import {
  StyledView,
  Header,
  HeaderText,
  HeaderImage,
  ScrollPage,
  InputDiv,
  GapDiv,
  Input,
  InputLabel,
  SubmitButton,
  SubmitText,
  Hr,
  SignUpDiv,
  SignUpBtn,
  SignUpText,
  SignUpLabel,
  ErrorLabel,
  Passwordiv,
  Eye,
  EyeImg,
  Form,
} from "./style";
import eyeImg from "../../../../assets/icons/eye.png";
import eyeSlashImg from "../../../../assets/icons/eyeSlash.png";
import eSongLogo from "../../../../assets/logo512.png";
import { useSession } from "../../../hooks/useSession";
import { useNavigation } from "@react-navigation/native";

export const SignIn = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [visibility, setVisibility] = useState(false);
  const { CreateSession, fetchAccounts } = useSession();
  const navigation = useNavigation();
  const fullfilAccounts = useCallback(async () => {
    await fetchAccounts();
  }, [fetchAccounts]);

  useEffect(() => {
    fullfilAccounts();
  }, [fullfilAccounts]);

  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailError(value ? "" : "⨉ Insira seu endereço de e-mail do eSong.");
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordError(value ? "" : "⨉ Por favor, insira sua senha.");
  };

  const handleSubmit = async () => {
    let error = 0;

    if (!password) {
      setPasswordError("⨉ Por favor, insira sua senha.");
      error++;
    }

    if (!email) {
      setEmailError("⨉ Insira seu endereço de e-mail do eSong.");
      error++;
    }

    if (error > 0) return;
    const resp = await CreateSession(email, password);

    if (resp !== true) {
      if (resp === "email") setEmailError("⨉ E-mail não Cadastrado.");
      if (resp === "senha") setPasswordError("⨉ Senha incorreta.");
    }
  };

  function goToSignUp() {
    navigation.navigate("SignUp");
  }

  return (
    <StyledView>
      <Header>
        <HeaderImage source={eSongLogo} />
        <HeaderText>eSong</HeaderText>
      </Header>
      <ScrollPage>
        <Form>
          <GapDiv>
            <InputDiv>
              <InputLabel>Endereço de e-mail</InputLabel>
              <Input
                placeholder="Insira seu endereço de e-mail."
                value={email}
                onChangeText={handleEmailChange}
                placeholderTextColor="#797979"
                isOnError={emailError}
              />
              {emailError !== "" && <ErrorLabel>{emailError}</ErrorLabel>}
            </InputDiv>
          </GapDiv>
          <GapDiv>
            <InputDiv>
              <InputLabel>Senha</InputLabel>
              <Passwordiv>
                <Input
                  placeholder="Insira sua senha."
                  value={password}
                  secureTextEntry={visibility ? false : true}
                  onChangeText={handlePasswordChange}
                  placeholderTextColor="#797979"
                  isOnError={passwordError}
                />
                <Eye
                  onPress={() => setVisibility(!visibility)}
                  activeOpacity={0.7}
                >
                  <EyeImg source={visibility ? eyeImg : eyeSlashImg} />
                </Eye>
              </Passwordiv>
            </InputDiv>
            {passwordError !== "" && <ErrorLabel>{passwordError}</ErrorLabel>}
          </GapDiv>
          <SubmitButton activeOpacity={0.7} onPress={handleSubmit}>
            <SubmitText>Entrar</SubmitText>
          </SubmitButton>
          <Hr />
          <SignUpDiv>
            <SignUpLabel>Não tem uma conta?</SignUpLabel>
            <SignUpBtn activeOpacity={0.7} onPress={goToSignUp}>
              <SignUpText>Inscrever-se no eSong</SignUpText>
            </SignUpBtn>
          </SignUpDiv>
        </Form>
      </ScrollPage>
    </StyledView>
  );
};
