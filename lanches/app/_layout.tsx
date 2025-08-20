import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  faixa: {
    backgroundColor: "rgba(141, 141, 141, 1)",
  },
  texto: {
    color: "rgba(255, 255, 255, 1)",
  },
});

export default function Layout() {
  return <Stack
    screenOptions={{
      headerStyle: styles.faixa,
      headerTitleStyle: styles.texto,
    }}
  >
    <Stack.Screen name="index" options={{ title: "Lanchonete do Cleitin" }} />
    <Stack.Screen name="detalhes" options={{ title: "Detalhes do Lanches" }} />

  </Stack>;
}