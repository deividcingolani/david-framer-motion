import React from "react";
import { motion } from "framer-motion";
import { TextInContainer, Title } from "./styles";

export const TextIn = () => {
  return (
    <TextInContainer>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <Title>TEXT IN</Title>
      </motion.div>
    </TextInContainer>
  );
};
