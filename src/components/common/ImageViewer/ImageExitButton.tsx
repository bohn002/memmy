import { Pressable, View } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import SFIcon from "../icons/SFIcon";
import { ICON_MAP } from "../../../constants/IconMap";

interface IProps {
  onPress: () => void;
}

function ImageExitButton({ onPress }: IProps) {
  return (
    <View style={[styles.buttonPosition]}>
      <Pressable onPress={onPress} hitSlop={10} padding={1.5}>
        <View>
          <SFIcon icon={ICON_MAP.EXIT} color="white" size={14} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonPosition: {
    position: "absolute",
    top: 45,
    right: 10,
    backgroundColor: "gray",
    borderRadius: 100,
  },

  buttonText: {
    color: "white",
  },
});

export default ImageExitButton;
