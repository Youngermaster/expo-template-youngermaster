import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { Button } from "react-native";

const OnboardingScreen = ({ navigation }: { navigation: any }) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate("Login")}
      onDone={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: "#fff",
          image: <Button title="Image1" onPress={() => {}} />,
          title: "Onboarding 1",
          subtitle: "Description of Onboarding 1",
        },
        {
          backgroundColor: "#fe6e58",
          image: <Button title="Image2" onPress={() => {}} />,
          title: "Onboarding 2",
          subtitle: "Description of Onboarding 2",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
