import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import colors from './app/config/colors';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text style={styles.titleText}>GAMEON</Text>
        {/*<StatusBar style="auto" />*/}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.primary,
  },
});
