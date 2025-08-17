import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" backgroundColor="#B87B56" translucent={false} />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  );
}
