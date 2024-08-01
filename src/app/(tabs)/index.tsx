import { View } from "react-native";
import React from "react";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

const Index = () => {
  async function test() {
    const res = await fetch("http://localhost:8081/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filterBy: "rating" }),
    });
    const jsonData = await res.json();
    console.log(jsonData);
  }

  return (
    <View className="mt-40">
      <Text>index</Text>
      <Button onPress={() => test()}>
        <Text>Test</Text>
      </Button>
    </View>
  );
};

export default Index;
