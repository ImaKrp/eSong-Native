import React, { useState, useCallback, createContext, useEffect } from "react";
import { songApi } from "../../api/api";

const initialState = [];
export const songContext = createContext(initialState);

export function SongProvider({ children }) {
  const [songs, setSongs] = useState([]);
  const [songsCG, setSongsCG] = useState([]);
  const [songVolume, setSongVolume] = useState(0.05);
  const [loopState, setLoopState] = useState(0);

  const fetchSongs = useCallback(async () => {
    const { data } = await songApi.get("/search", {
      params: { q: "Shawn Mendes" },
    });
    setSongs(data.data);
  }, []);

  const fetchCGSongs = useCallback(async () => {
    const { data } = await songApi.get("/search", {
      params: { q: "Chri$tian Gate$" },
    });
    setSongsCG(data.data);
  }, []);

  useEffect(() => {
    fetchCGSongs();
  }, []);

  useEffect(() => {
    fetchSongs();
  }, []);

  const handleLoopState = () => {
    if (loopState === 2) {
      setLoopState(0);
      return;
    }
    setLoopState(loopState + 1);
  };

  return (
    <songContext.Provider
      value={{
        fetchSongs,
        songs,
        songsCG,
        songVolume,
        setSongVolume,
        handleLoopState,
        loopState,
      }}
    >
      {children}
    </songContext.Provider>
  );
}
