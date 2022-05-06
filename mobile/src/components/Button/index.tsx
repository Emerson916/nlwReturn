import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";
import { theme } from "../../theme";

import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  isLoading: boolean;
}

function Button({ isLoading, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.text_on_brand_color} />
      ) : (
        <Text style={styles.title}> Enviar feedback</Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;
