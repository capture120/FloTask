import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";

export const terraAPI = axios.create({
  baseURL: "https://terraapi.com/", // replace with the actual base URL of TerraAPI
});

interface HeartRateData {
  heartRate: number;
  stressLevel: number;
}

const HeartRateComponent: React.FC = () => {
  const [data, setData] = useState<HeartRateData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await terraAPI.get("/path/to/endpoint"); // replace with the actual endpoint
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    // Optional: Set up a polling mechanism to fetch data every X seconds
    const intervalId = setInterval(fetchData, 10000); // fetch data every 10 seconds

    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <SafeAreaView>
      {data ? (
        <View>
          <Text>Heart Rate: {data.heartRate}</Text>
          <Text>Stress Level: {data.stressLevel}</Text>
        </View>
      ) : (
        <p>Loading...</p>
      )}
    </SafeAreaView>
  );
};

export default HeartRateComponent;
