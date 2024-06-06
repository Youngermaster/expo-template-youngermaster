import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "~/components/atoms/Button";
import { useAuthStore } from "~/stores/AuthStore";
import useDriverStore from "~/stores/DriverStore";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const { logout } = useAuthStore();
  const driver = useDriverStore((state) => state.driver);
  console.log("Driver Data:", driver);

  return (
    <View style={styles.container}>
      <Text>Hi, {driver?.name}!</Text>
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
