import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Intro } from "..";

export const AppNavigation: React.FC = () => {
  const { Group, Screen, Navigator } = createStackNavigator();

  return (
    <Navigator>
      <Group screenOptions={{ headerShown: false }}>
        <Screen name={"intro"} component={Intro} />
      </Group>
    </Navigator>
  );
};
