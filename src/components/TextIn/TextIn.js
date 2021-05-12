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
            keyframes: [
              {
                translateX: 150,
              },
              {
                translateY: 150,
              },
              {
                translateX: 0,
              },
              {
                translateY: 0,
              },
            ],
            // easing:'spring',
            duration: 3500,
            loop: true,
          },
        ]}
      >
        <h1 id="Box" style={{ height: 50, width: 50, color: "#00000" }}>
          {" "}
          React AnimeJS Package{" "}
        </h1>
      </Anime>
    </TextInContainer>
  );
};
