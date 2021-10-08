import React, { useState } from "react";
import {
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
  Form
} from "./style";
import eyeImg from "../../../assets/icons/eye.png";
import eyeSlashImg from "../../../assets/icons/eyeSlash.png";

export const SignUp = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [visibility, setVisibility] = useState(false);

  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailError(value ? "" : "⨉ Insira seu endereço de e-mail do eSong.");
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordError(value ? "" : "⨉ Por favor, insira sua senha.");
  };

  return (
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
          <InputLabel>Senhaia</InputLabel>
          <Passwordiv>
            <Input
              placeholder="Insira sua senha."
              value={password}
              secureTextEntry={visibility ? false : true}
              onChangeText={handlePasswordChange}
              placeholderTextColor="#797979"
              isOnError={passwordError}
            />
            <Eye onPress={() => setVisibility(!visibility)} activeOpacity={0.7}>
              <EyeImg source={visibility ? eyeImg : eyeSlashImg} />
            </Eye>
          </Passwordiv>
        </InputDiv>
        {passwordError !== "" && <ErrorLabel>{passwordError}</ErrorLabel>}
      </GapDiv>
      <GapDiv>
        <InputDiv>
          <InputLabel>Senhaia</InputLabel>
          <Passwordiv>
            <Input
              placeholder="Insira sua senha."
              value={password}
              secureTextEntry={visibility ? false : true}
              onChangeText={handlePasswordChange}
              placeholderTextColor="#797979"
              isOnError={passwordError}
            />
            <Eye onPress={() => setVisibility(!visibility)} activeOpacity={0.7}>
              <EyeImg source={visibility ? eyeImg : eyeSlashImg} />
            </Eye>
          </Passwordiv>
        </InputDiv>
        {passwordError !== "" && <ErrorLabel>{passwordError}</ErrorLabel>}
      </GapDiv>
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
      <SubmitButton activeOpacity={0.7}>
        <SubmitText>INSCREVER-SE</SubmitText>
      </SubmitButton>
      <Hr />
      <SignUpDiv>
        <SignUpLabel>Não tem uma conta?</SignUpLabel>
        <SignUpBtn activeOpacity={0.7}>
          <SignUpText>Inscrever-se no eSong</SignUpText>
        </SignUpBtn>
      </SignUpDiv>
    </Form>
  );
};
