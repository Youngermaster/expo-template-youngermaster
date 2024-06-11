import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
  image: {
    resizeMode: "contain",
    height: Dimensions.get("window").height * 0.4,
    width: "100%",
    marginVertical: 10,
  },
});

export default styles;
