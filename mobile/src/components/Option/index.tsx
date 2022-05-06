import React from "react";
import { styles } from "./styles";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageProps,
} from "react-native";

interface Props extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

function Option({ title, image, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image source={image} style={styles.image} />

      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Option;
