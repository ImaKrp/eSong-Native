import React, { useEffect, useCallback } from "react";
import { ScrollPage, Void, Artist} from "./style";
import { Card } from "../../components/Card";
import { useSong } from "../../hooks/useSong";

export const MainLayout = () => {
  const { songs } = useSong();

  return (
    <>
      <Artist>Shawn Mendes</Artist>
      <ScrollPage horizontal={true}>
        {songs &&
          songs.length > 0 &&
          songs?.map((song, index) => {
            return (
              <Card
                key={index}
                id={song?.id}
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
