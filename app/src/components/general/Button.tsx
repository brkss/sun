import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  txt: string;
  clicked: () => void;
}

export const Button: React.FC<Props> = ({ txt, clicked }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => clicked()}>
      <Text>{txt}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#646468",
  },
});
