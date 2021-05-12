import React from "react";
import { motion } from "framer-motion";
import { TextInContainer, Title } from "./styles";
import ReactAnime from "react-animejs";

export const TextIn = () => {
  const { Anime, stagger } = ReactAnime;

  return (
    <TextInContainer>
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
        <Title>TEXT IN</Title>
      </motion.div>
      <Anime
        initial={[
          {
            targets: "#Box",
            translateX: 300,
            easing: "linear",
          },
        ]}
      >
        <h1 id="Box" style={{ height: 50, width: 50, color: "#00000" }}> React AnimeJS Package </h1>
      </Anime>
    </TextInContainer>
  );
};