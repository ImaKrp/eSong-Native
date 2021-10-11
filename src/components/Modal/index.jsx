import React, { useState } from "react";
import {
  Wrapper,
  InvWrapper,
  ModalDiv,
  Row,
  Span,
  CloseBtn,
  CloseImg,
  Column,
  ImageDiv,
  ProfileImage,
  SaveBtn,
  SaveText,
  GapDiv,
  InputDiv,
  InputLabel,
  Input,
  ErrorLabel,
} from "./style";
import { Dimensions } from "react-native";
import xImg from "../../../assets/icons/close.png";
import userImg from "../../../assets/icons/user.png";
import { useSession } from "../../hooks/useSession";
export const Modal = (prop) => {
  const { session, updateUser } = useSession();
  const [newPicture, setNewPicture] = useState(session.pic ?? "https://");
  const [newPictureError, setNewPictureError] = useState("");
  const [name, setName] = useState(session.name);
  const [nameError, setNameError] = useState("");
  const ScreenHeight = Dimensions.get("window").height;
  const ScreenWidth = Dimensions.get("window").width;

  const handleNameChange = (value) => {
    setName(value);
    setNameError(value ? "" : "⨉ Insira um nome de exibição.");
  };

  const handlePictureChange = (value) => {
    setNewPicture(value);
    if (value === "" || value === "https://") {
      setNewPictureError("");
      return;
    }

    function isImgLink(url) {
      if (typeof url !== "string") return false;
      return url.match(/^http[^]*.(jpeg|jpg|gif|png|svg)((.*))?$/gim) != null;
    }

    setNewPictureError(
      isImgLink(value) ? "" : "⨉ Insira uma url válida ou a remova."
    );
  };

  const handleSubmit = async () => {
    let error = 0;

    if (!name) {
      setNameError("⨉ Insira um nome de exibição.");
      error++;
    }

    if (newPictureError) error++;

    if (error > 0) return;
    await updateUser(session.email, session.pass, name, newPicture, session.id);
    prop.onClick();
  };

  return (
    <>
      <Wrapper
        height={ScreenHeight}
        width={ScreenWidth}
        onPress={prop.onClick}
      ></Wrapper>
      <ModalDiv
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,

          elevation: 9,
        }}
      >
        <Row>
          <Span>Detalhes do perfil</Span>
          <CloseBtn onPress={prop.onClick}>
            <CloseImg source={xImg} />
          </CloseBtn>
        </Row>
        <Column>
          <ImageDiv>
            {newPictureError ? (
              <>
                {session.pic ? (
                  <ProfileImage source={{ uri: session.pic }} />
                ) : (
                  <ProfileImage size="65%" source={userImg} />
                )}
              </>
            ) : (
              <>
                {newPicture !== "" && newPicture !== "https://" ? (
                  <ProfileImage source={{ uri: newPicture }} />
                ) : (
                  <>
                    {session.pic ? (
                      <ProfileImage source={{ uri: session.pic }} />
                    ) : (
                      <ProfileImage size="65%" source={userImg} />
                    )}
                  </>
                )}
              </>
            )}
          </ImageDiv>
          <GapDiv>
            <InputDiv>
              <InputLabel>Nome de Exibição</InputLabel>
              <Input
                placeholder="Adicionar um nome de exibição."
                value={name}
                onChangeText={handleNameChange}
                placeholderTextColor="#797979"
                isOnError={nameError}
                autoCapitalize="none"
              />
              {nameError !== "" && <ErrorLabel>{nameError}</ErrorLabel>}
            </InputDiv>
          </GapDiv>
          <GapDiv>
            <InputDiv>
              <InputLabel>Imagem</InputLabel>
              <Input
                placeholder="Adicionar uma url de imagem."
                value={newPicture}
                onChangeText={handlePictureChange}
                placeholderTextColor="#797979"
                isOnError={newPictureError}
                autoCapitalize="none"
              />
            </InputDiv>
            {newPictureError !== "" && (
              <ErrorLabel>{newPictureError}</ErrorLabel>
            )}
          </GapDiv>
          <SaveBtn activeOpacity={0.7} onPress={handleSubmit}>
            <SaveText>Salvar</SaveText>
          </SaveBtn>
        </Column>
      </ModalDiv>
    </>
  );
};
