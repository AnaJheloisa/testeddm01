import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ana Júlia Pércio Ferreira !</Text>
      <Text>Heloisa Alves de Freitas !</Text>
      <Text>open up app.js to start working on your app!</Text>
      <Text>clone do porjeto aula 04-03-2024 3B3 Lado A</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
