import React, { useState } from "react";
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
  LoginDiv,
  LoginBtn,
  LoginText,
  LoginLabel,
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
export const SignUp = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [verifyEmail, setVerifyEmail] = useState("");
  const [verifyEmailError, setVerifyEmailError] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [verifyPasswordError, setVerifyPasswordError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [visibility1, setVisibility1] = useState(false);
  const [visibility2, setVisibility2] = useState(false);
  const { AddAccount } = useSession();
  const navigation = useNavigation();
  const handleNameChange = (value) => {
    setName(value);
    setNameError(value ? "" : "⨉ Insira um nome para seu perfil.");
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailError(value ? "" : "⨉ Você deve inserir seu e-mail.");
    if (!verifyEmail) return;
    setVerifyEmailError(
      value
        ? value === verifyEmail
          ? ""
          : "⨉ Os endereços de e-mail não correspondem."
        : "⨉ Você deve confirmar seu e-mail."
    );
  };

  const handleVerifyEmailChange = (value) => {
    setVerifyEmail(value);
    setVerifyEmailError(
      value
        ? value === email
          ? ""
          : "⨉ Os endereços de e-mail não correspondem."
        : "⨉ Você deve confirmar seu e-mail."
    );
  };

  const handleVerifyPasswordChange = (value) => {
    setVerifyPassword(value);
    setVerifyPasswordError(
      value
        ? value === password
          ? ""
          : "⨉ As senhas não correspondem."
        : "⨉ Você deve confirmar sua senha."
    );
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordError(value ? "" : "⨉ Você precisa inserir uma senha.");
    if (!verifyPassword) return;
    setVerifyPasswordError(
      value
        ? value === verifyPassword
          ? ""
          : "⨉ As senhas não correspondem."
        : "⨉ Você deve confirmar sua senha."
    );
  };

  const handleSubmit = async () => {
    let error = 0;

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) !== true) {
      setEmailError("⨉ Insira um endereço de e-mail valido.");
      error++;
    }

    if (verifyEmailError) error++;

    if (verifyPasswordError) error++;

    if (!name) {
      setNameError("⨉ Insira um nome para seu perfil.");
      error++;
    }

    if (!password) {
      setPasswordError("⨉ Por favor, insira sua senha.");
      error++;
    }

    if (!email) {
      setEmailError("⨉ Insira seu endereço de e-mail do eSong.");
      error++;
    }

    if (!verifyPassword) {
      setVerifyPasswordError("⨉ Você deve confirmar sua senha.");
      error++;
    }

    if (!verifyEmail) {
      setVerifyEmailError("⨉ Você deve confirmar seu e-mail.");
      error++;
    }

    if (error > 0) return;

    const resp = await AddAccount(email, password, name);
    if (resp !== true) {
      if (resp === "email") setEmailError("⨉ E-mail já cadastrado.");
    }
  };
  function goToSignIn() {
    navigation.navigate("SignIn");
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
              <InputLabel>Qual é o seu e-mail?</InputLabel>
              <Input
                keyboardType="email-address"
                autoComplete="email"
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
              <InputLabel>Confirme seu e-mail</InputLabel>
              <Input
                placeholder="Insira novamente seu endereço de e-mail."
                value={verifyEmail}
                onChangeText={handleVerifyEmailChange}
                placeholderTextColor="#797979"
                isOnError={verifyEmailError}
              />
              {verifyEmailError !== "" && (
                <ErrorLabel>{verifyEmailError}</ErrorLabel>
              )}
            </InputDiv>
          </GapDiv>
          <GapDiv>
            <InputDiv>
              <InputLabel>Crie uma senha</InputLabel>
              <Passwordiv>
                <Input
                  placeholder="Crie uma senha."
                  value={password}
                  secureTextEntry={visibility1 ? false : true}
                  onChangeText={handlePasswordChange}
                  placeholderTextColor="#797979"
                  isOnError={passwordError}
                />
                <Eye
                  onPress={() => setVisibility1(!visibility1)}
                  activeOpacity={0.7}
                >
                  <EyeImg source={visibility1 ? eyeImg : eyeSlashImg} />
                </Eye>
              </Passwordiv>
            </InputDiv>
            {passwordError !== "" && <ErrorLabel>{passwordError}</ErrorLabel>}
          </GapDiv>
          <GapDiv>
            <InputDiv>
              <InputLabel>Confirme sua senha</InputLabel>
              <Passwordiv>
                <Input
                  placeholder="Insira novamente sua senha."
                  value={verifyPassword}
                  secureTextEntry={visibility2 ? false : true}
                  onChangeText={handleVerifyPasswordChange}
                  placeholderTextColor="#797979"
                  isOnError={verifyPasswordError}
                />
                <Eye
                  onPress={() => setVisibility2(!visibility2)}
                  activeOpacity={0.7}
                >
                  <EyeImg source={visibility2 ? eyeImg : eyeSlashImg} />
                </Eye>
              </Passwordiv>
            </InputDiv>
            {verifyPasswordError !== "" && (
              <ErrorLabel>{verifyPasswordError}</ErrorLabel>
            )}
          </GapDiv>
          <GapDiv>
            <InputDiv>
              <InputLabel>Como devemos chamar você?</InputLabel>
              <Input
                placeholder="Insira seu nome de perfil."
                value={name}
                onChangeText={handleNameChange}
                placeholderTextColor="#797979"
                isOnError={nameError}
              />
              {nameError !== "" && <ErrorLabel>{nameError}</ErrorLabel>}
            </InputDiv>
          </GapDiv>
          <SubmitButton activeOpacity={0.7} onPress={handleSubmit}>
            <SubmitText>INSCREVER-SE</SubmitText>
          </SubmitButton>
          <Hr />
          <LoginDiv>
            <LoginLabel>Já tem uma conta? </LoginLabel>
            <LoginBtn activeOpacity={0.7} onPress={goToSignIn}>
              <LoginText> Faça login</LoginText>
            </LoginBtn>
            <LoginLabel>.</LoginLabel>
          </LoginDiv>
        </Form>
      </ScrollPage>
    </StyledView>
  );
};
