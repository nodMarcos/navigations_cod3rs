import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TextoCentral from './src/components/TextoCentral';
import Navegacao from './src/navegacao';
import TelaA from './src/views/TelaA';
import TelaB from './src/views/TelaB';
import TelaC from './src/views/TelaC';

export default function App() {
  return (
    <View style={styles.container}>
      <Navegacao />
      {/* <TelaA />
      <TelaB />
      <TelaC />
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
