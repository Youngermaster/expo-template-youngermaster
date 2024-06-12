import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import useDriverStore from "~/stores/DriverStore";
import useVehicleStore from "~/stores/VehicleStore";
import getVehicles from "~/hooks/useVehicles";
import VehicleCard from "~/components/atoms/VehicleCard";
import styles from "./styles";

const HomeScreen = ({ navigation }: { navigation: any }) => {
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
          <VehicleCard
            key={vehicle.id}
            id={vehicle.id}
            plate={vehicle.plate}
            assignedDrivers={vehicle.assignedDrivers}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
