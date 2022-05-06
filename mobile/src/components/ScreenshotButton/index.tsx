import React from "react";
import { styles } from "./styles";
import { TouchableOpacity, View, Image } from "react-native";
import { Camera, Trash } from "phosphor-react-native";
import { theme } from "../../theme";

interface Props {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

function ScreenshotButton({ screenshot, onTakeShot, onRemoveShot }: Props) {
  return (
    <TouchableOpacity
      onPress={screenshot ? onRemoveShot : onTakeShot}
      style={styles.container}
    >
      {screenshot ? (
        <View>
          <Image style={styles.image} source={{uri: screenshot}} />
          <Trash
            size={22}
            color={theme.colors.text_secondary}
            weight="fill"
            style={styles.removeIcon}
          />
        </View>
      ) : (
        <Camera size={24} color={theme.colors.text_secondary} weight="bold" />
      )}
    </TouchableOpacity>
  );
}

export default ScreenshotButton;
