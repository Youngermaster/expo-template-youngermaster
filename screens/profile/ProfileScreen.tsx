import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Button from "~/components/atoms/Button";
import { useAuthStore } from "~/stores/AuthStore";

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  const { logout } = useAuthStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
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

export default ProfileScreen;
