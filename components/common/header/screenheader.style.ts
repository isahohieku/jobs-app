import { StyleSheet, ViewStyle, ImageStyle, TextStyle, StyleProp } from "react-native";

import { COLORS, SIZES } from "../../../constants";

interface ContainerStyles {
  btnContainer: ViewStyle;
};

interface ButtonStyles {
  btnImg: ImageStyle;
};

export const misc = (dimension: string) => StyleSheet.create<ButtonStyles>({
  btnImg: {
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }
});

const styles = StyleSheet.create<ContainerStyles>({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default {
  misc,
  ...styles
};
