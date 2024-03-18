import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ana Júlia Pércio Ferreira !</Text>
      <Text>Heloisa Alves de Freitas !</Text>

      <Button title='Enviar'></Button>

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
