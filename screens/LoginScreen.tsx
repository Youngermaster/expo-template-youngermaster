import React, { useState } from "react";
import { View, TextInput, StyleSheet, Image, Dimensions } from "react-native";
import Button from "~/components/atoms/Button";
import { useAuthStore } from "~/stores/AuthStore";

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

export default LoginScreen;
