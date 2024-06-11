import React, { useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Button from "~/components/atoms/Button";
import { useAuthStore } from "~/stores/AuthStore";
import useDriverStore from "~/stores/DriverStore";
import useVehicleStore from "~/stores/VehicleStore";
import getVehicles from "~/hooks/useVehicles";
import VehicleCard from "~/components/atoms/VehicleCard";
import styles from "./styles";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const { logout } = useAuthStore();
  const driver = useDriverStore((state) => state.driver);
  const { vehicles, setVehicles } = useVehicleStore();

  useEffect(() => {
    const loadVehicles = async () => {
      const response = await getVehicles();
      setVehicles(response.vehicles);
    };

    loadVehicles();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hi, {driver?.name}!</Text>
      <Text>Welcome to the Home Page!</Text>

      <Text>These are your available Vehicles:</Text>
      <ScrollView style={styles.vehicleContainer}>
        {vehicles.map((vehicle) => (
          <View key={vehicle.id}>
            <VehicleCard
              vehicleName={vehicle.plate}
              vehicleDescription={vehicle.assignedDrivers.join(", ")}
            />
          </View>
        ))}
      </ScrollView>
      <Button
        title="Logout"
        onPress={() => {
          logout();
          navigation.navigate("Login");
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
