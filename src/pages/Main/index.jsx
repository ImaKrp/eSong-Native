import React from "react";
import { ScrollPage, Void, Artist } from "./style";
import { Card } from "../../components/Card";
import { LoadingCard } from "../../components/LoadingCard";
import { useSong } from "../../hooks/useSong";

export const MainLayout = () => {
  const { songs, songsCG } = useSong();
  let cont = 0;
  return (
    <>
      <Artist>Shawn Mendes</Artist>
      <ScrollPage horizontal={true}>
        {!songs.length > 0 &&
          [...Array(25)].map((i) => <LoadingCard key={i ?? cont++} />)}
        {songs &&
          songs.length > 0 &&
          songs?.map((song, index) => {
            return (
              <Card
                key={index}
                id={song?.id}
                type={"SM"}
                index={index}
                name={song?.title_short}
                image={song?.album.cover_medium}
                artist={song?.artist.name}
              />
            );
          })}
        <Void />
      </ScrollPage>
      <Artist>Chri$tian Gate$</Artist>
      <ScrollPage horizontal={true}>
        {!songsCG.length > 0 &&
          [...Array(25)].map((i) => <LoadingCard key={i ?? cont++} />)}
        {songsCG &&
          songsCG.length > 0 &&
          songsCG?.map((song, index) => {
            return (
              <Card
                key={index}
                id={song?.id}
                type={"CG"}
                index={index}
                name={song?.title_short}
                image={song?.album.cover_medium}
                artist={song?.artist.name}
              />
            );
          })}
        <Void />
      </ScrollPage>
    </>
  );
};
