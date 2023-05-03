import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from './app/config/colors';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.mainTitleText}>GAMEON</Text>
        {/*<StatusBar style="auto" />*/}
      </View>
      <TouchableOpacity style={styles.letsGoButton}>
        <Text style={styles.arrowFwButton}>Let's Begin</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color='#fff' />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  arrowFwButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letsGoButton: {
    backgroundColor: colors.secondary,
    padding: 20,
    width:'90%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainTitleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.primary,
  },
});
