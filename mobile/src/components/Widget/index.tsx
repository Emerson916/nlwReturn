import React, { useRef } from "react";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { ChatTeardropDots } from "phosphor-react-native";
import { theme } from "../../theme";
import { styles } from "./styles";
import BottomSheet from "@gorhom/bottom-sheet";
import Options from "../Options";
import { feedbackTypes } from "../../utils/feedbackTypes";
import Form from "../Form";
import Success from "../Success";

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots size={24} color={theme.colors.text_on_brand_color} />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        <Success />
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);