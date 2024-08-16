import { latLngToCell, gridDistance } from "h3-js";

// Configuration
const resolution = 9; // Define the H3 resolution
const kDistance = 2; // Define the radius of interest (1 = adjacent hexagons)

// Helper function to calculate potential drivers
const findPotentialDrivers = (passengerLat, passengerLng, drivers) => {
  // Convert passenger's location to an H3 index
  const passengerH3Index = latLngToCell(passengerLat, passengerLng, resolution);

  // Initialize result arrays
  const potentialDrivers = [];
  const nonPotentialDrivers = [];

  drivers.forEach((driver) => {
    // Convert driver's location to an H3 index
    const driverH3Index = latLngToCell(driver.lat, driver.lng, resolution);

    // Calculate distance between passenger and driver
    const distance = gridDistance(passengerH3Index, driverH3Index);

    if (distance !== null && distance <= kDistance) {
      potentialDrivers.push(driver);
    } else {
      nonPotentialDrivers.push(driver);
    }
  });

  return { potentialDrivers, nonPotentialDrivers };
};

// Example usage
const passengerLat = 37.775938728915946;
const passengerLng = -122.41795063018799;
const drivers = [
  { id: "driver1", lat: 37.776, lng: -122.418 },
  { id: "driver2", lat: 37.77, lng: -122.412 },
  { id: "driver3", lat: 37.78, lng: -122.425 },
  { id: "driver4", lat: 37.769, lng: -122.419 },
];

const { potentialDrivers, nonPotentialDrivers } = findPotentialDrivers(
  passengerLat,
  passengerLng,
  drivers
);

console.log("Potential Drivers:", potentialDrivers);
console.log("Non-Potential Drivers:", nonPotentialDrivers);
