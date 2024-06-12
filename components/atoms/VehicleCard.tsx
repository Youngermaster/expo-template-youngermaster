import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Vehicle from "~/models/Vehicle";
import colors from "~/styles/colors";

const VehicleCard: React.FC<Vehicle> = ({ plate, assignedDrivers }) => {
  console.log(plate, assignedDrivers);
  return (
    <View style={styles.cardContainer}>
      <View style={styles.detailsContainer}>
        <Text style={styles.vehicleName}>{plate}</Text>
        <Text style={styles.vehicleDescription}>
          {assignedDrivers.join(", ")}
        </Text>
      </View>
      <Image
        source={require("~/images/icons/Bus.png")}
        style={styles.vehicleImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  detailsContainer: {
    paddingRight: 20,
  },
  vehicleName: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.gray_2,
  },
  vehicleDescription: {
    fontSize: 14,
    color: colors.gray,
  },
  vehicleImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
});

export default VehicleCard;
