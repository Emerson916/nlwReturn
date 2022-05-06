import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { styles } from "./styles";
import { theme } from "../../theme";
import successImg from "../../assets/success.png";
import Copyright from "../Copyright";

interface Props {
  onSendAnotherFeedback: () => void;
}

function Success({ onSendAnotherFeedback }: Props) {
  return (
    <View style={styles.container}>
      <Image source={successImg} style={styles.image} />
      <Text style={styles.title}>Agradecemos o feedback</Text>

      <TouchableOpacity style={styles.button} onPress={onSendAnotherFeedback}>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}

export default Success;
