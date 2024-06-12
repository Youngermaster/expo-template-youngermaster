import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { Button, Dimensions, Image, StyleSheet } from "react-native";
import colors from "~/styles/colors";

const OnboardingScreen = ({ navigation }: { navigation: any }) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate("Login")}
      onDone={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: colors.white,
          image: (
            <Image
              source={require("~/images/the_world_is_mine.png")}
              style={styles.image}
            />
          ),
          title: "Onboarding 1",
          subtitle: "Description of Onboarding 1",
          titleStyles: styles.title,
          subTitleStyles: styles.subtitle,
        },
        {
          backgroundColor: colors.greenVolt,
          image: (
            <Image
              source={require("../images/bike_ride.png")}
              style={styles.image}
            />
          ),
          titleStyles: styles.title,
          subTitleStyles: styles.subtitle,
          title: "Onboarding 2",
          subtitle: "Description of Onboarding 2",
        },
        {
          backgroundColor: colors.white,
          image: (
            <Image
              source={require("../images/claim_points.png")}
              style={styles.image}
            />
          ),
          titleStyles: styles.title,
          subTitleStyles: styles.subtitle,
          title: "Onboarding 3",
          subtitle: "Description of Onboarding 3",
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain", // To make sure the image fits inside the container
    height: Dimensions.get("window").height * 0.4, // Set height to 40% of the screen height
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
});
