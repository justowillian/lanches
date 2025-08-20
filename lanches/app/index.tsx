import { router } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { posts } from "../assets/mockups/posts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 35, 150, 1)",
  },
  list: {
    width: "100%",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 6,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 8,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 20,
    color: "rgba(150, 0, 0, 1)"
  },
  text: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 1)"
  },
});

export default function Index() {

  function irParaDetalhes(id: number) {
    router.push(`/detalhes?id=${id}`);
  }

  return (
    <View
      style={styles.container}
    >
      <FlatList
        style={styles.list}
        data={posts}
        renderItem={({ item }) => (<TouchableOpacity
          style={styles.item}
          onPress={() => irParaDetalhes(item.id)}
        >
          <Text style={styles.titulo}>Nome do lanche: {item.title}</Text>
          <Text style={styles.text}>Ingredientes: {item.content}</Text>
        </TouchableOpacity>)}
      />
    </View>
  );
}