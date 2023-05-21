import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";
import { Job } from "../../../../types";

interface Styles {
  logoImage: ImageStyle;
  companyName: TextStyle;
  infoContainer: ViewStyle;
  infoWrapper: ViewStyle;
  location: TextStyle;
}

interface MiscStyles {
  container: ViewStyle;
  logoContainer: ViewStyle;
  jobName: TextStyle;
  publisher: TextStyle;
}

const misc = (selectedJob: string, item: Job) => StyleSheet.create<MiscStyles>({
  container: {
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  jobName: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  },
  publisher: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }
});

const styles = StyleSheet.create<Styles>({
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default {
  misc,
  ...styles
};
