import { StyleSheet } from "react-native";
import colors from "~/styles/colors";

export const styles = StyleSheet.create({
  button: {
    elevation: 8,
    backgroundColor: colors.greenVolt,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
