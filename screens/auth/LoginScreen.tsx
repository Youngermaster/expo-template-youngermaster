import React, { useState } from "react";
import { View, TextInput, Image } from "react-native";
import Button from "~/components/atoms/Button";
import { useAuthStore } from "~/stores/AuthStore";
import styles from "./styles";

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { authenticate } = useAuthStore();

  const handleLogin = () => {
    authenticate(username, password);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("~/images/mobile_encryption.png")}
        style={styles.image}
      />
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
