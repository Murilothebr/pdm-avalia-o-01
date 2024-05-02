import { Colors } from "@/consts/colors";
import { Spacing } from "@/consts/spacing";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  Image
} from "react-native";

type FormInput = {
  title: string;
} & TouchableOpacityProps;

export default function FormButton({ title, ...rest }: FormInput) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Image
        source={ require("../../assets/images/Login.png") }
        style={ styles.buttonImage}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 10,
    padding: 10,
  },
  title: {
    color: "white",
    textAlign: "center",
  },
  buttonImage: {
    width: 200,
    height: 50,
  },
});
