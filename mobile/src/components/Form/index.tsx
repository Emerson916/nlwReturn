import React from "react";
import { styles } from "./styles";
import { TextInput, View, Image, Text, TouchableOpacity } from "react-native";
import { ArrowArcLeft } from "phosphor-react-native";
import { theme } from "../../theme";
import { FeedbackType } from "../Widget";
import { feedbackTypes } from "../../utils/feedbackTypes";
import ScreenshotButton from "../ScreenshotButton";
import Button from "../Button";

interface Props {
  feedbackType: FeedbackType;
}

function Form({ feedbackType }: Props) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowArcLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image source={feedbackTypeInfo.image} style={styles.image} />
          <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          onTakeShot={() => {}}
          onRemoveShot={() => {}}
          screenshot=""
        />

        <Button isLoading={false}/>
      </View>
    </View>
  );
}

export default Form;
