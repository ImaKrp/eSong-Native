import React, { useEffect, useCallback, useState } from "react";
import {
  FullView,
  LighterGray,
  Content,
  Wrapper,
  Card,
  Image,
  Title,
  Artist,
  Controllers,
  TogglePause,
  ChangeSong,
  ControllersImgs,
} from "./style";
import { useSong } from "../../hooks/useSong";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { Audio } from "expo-av";
import Slider from "@react-native-community/slider";

import playImg from "../../../assets/icons/play.png";
import pauseImg from "../../../assets/icons/pause.png";
import nextImg from "../../../assets/icons/next.png";
import previousImg from "../../../assets/icons/previous.png";

export const PlayerLayout = ({ songId, changed }) => {
  const { songs, loopState } = useSong();
  const navigation = useNavigation();
  const ScreenHeight = Dimensions.get("window").height;
  const ScreenWidth = Dimensions.get("window").width;
  const [sound, setSound] = useState();
  const [percentage, setPercentage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [finish, setFinish] = useState(false);
  const song = songs[songId];

  const PrevIndex = Number(songId) > 0 ? Number(songId) - 1 : 24;
  const NextIndex = Number(songId) < 24 ? Number(songId) + 1 : 0;

  if (changed) sound.unloadAsync();

  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setCurrentTime(status.positionMillis);
    setFinish(status.didJustFinish);
  };

  useEffect(() => {
    if (!currentTime) return;
    if (!duration) return;
    setPercentage(Math.round((currentTime / duration) * 100));
  }, [currentTime, duration]);

  if (finish) goToNext();

  async function goToMillis(value){
    setPercentage(value)
    await sound.setPositionAsync((duration / 100) * value)
  }

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      { uri: song?.preview },
      { shouldPlay: true },
      onPlaybackStatusUpdate
    );
    setSound(sound);
    setIsPlaying(true);
    await sound.playAsync();
  }

  async function goToNext() {
    await sound.unloadAsync();
    navigation.navigate("Player", {
      id: NextIndex,
    });
  }

  async function goToPrevious() {
    await sound.unloadAsync();
    navigation.navigate("Player", {
      id: PrevIndex,
    });
  }

  useEffect(() => {
    playSound();
  }, [songId]);

  async function handleTogglePause() {
    if (isPlaying) await sound.pauseAsync();
    else await sound.playAsync();
    setIsPlaying(!isPlaying);
  }

  return (
    <>
      <Wrapper height={ScreenHeight} width={ScreenWidth}>
        <Card
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
          <Image
            source={{
              uri: song?.album?.cover_big,
            }}
          />
          <Title numberOfLines={2}>{song?.title}</Title>
          <Artist numberOfLines={1}>{song?.artist?.name}</Artist>
          <Slider
            style={{ width: "110%", height: 20 }}
            value={Number(percentage)}
            maximumValue={100}
            minimumValue={0}
            minimumTrackTintColor="#a4add3"
            maximumTrackTintColor="#3c3c3c"
            step={0.01}
            onValueChange={goToMillis}
          />
          <Controllers>
            <ChangeSong activeOpacity={0.7} onPress={goToPrevious}>
              <ControllersImgs source={previousImg} />
            </ChangeSong>
            <TogglePause onPress={handleTogglePause} activeOpacity={0.7}>
              <ControllersImgs source={isPlaying ? pauseImg : playImg} />
            </TogglePause>
            <ChangeSong activeOpacity={0.7} onPress={goToNext}>
              <ControllersImgs source={nextImg} />
            </ChangeSong>
          </Controllers>
        </Card>
      </Wrapper>
      <FullView>
        <LighterGray color={"rgb(53, 53, 53)"}></LighterGray>
        <Content></Content>
      </FullView>
    </>
  );
};
