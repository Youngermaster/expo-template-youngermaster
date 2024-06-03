import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "~/components/atoms/Button";
import { useAuthStore } from "~/stores/AuthStore";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const logout = useAuthStore((state) => state.logout);

  return (
    <View style={styles.container}>
      <Text>Hi, name!</Text>
      <Text>Welcome to the Home Page!</Text>
      <Button
        title="Logout"
        onPress={() => {
          logout();
          navigation.navigate("Login");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
