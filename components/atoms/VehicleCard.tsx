import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface VehicleCardProps {
  vehicleName: string;
  vehicleDescription: string;
}

const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicleName,
  vehicleDescription,
}) => {
  return (
    <View style={styles.container}>
      <Image source={require("~/images/icons/Bus.png")} style={styles.image} />
      <Text style={styles.name}>{vehicleName}</Text>
      <Text style={styles.description}>{vehicleDescription}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 8,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#888",
  },
});

export default VehicleCard;
