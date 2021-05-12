import React from "react";
import { motion } from "framer-motion";
import { TextInContainer, Title } from "./styles";

export const TextOut = () => {
  return (
    <TextInContainer>
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 0 }}
      >
        <Title>TEXT OUT</Title>
      </motion.div>
    </TextInContainer>
  );
};