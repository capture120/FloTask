import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface CustomComponentProps {
  name: string;
  count: number; 
}

export default function CustomComponent({ name, count }: CustomComponentProps) {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{count}</Text>
    </View>
  );
}
