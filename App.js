//import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//import Svg, { Path } from "react-native-svg"

// icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// fonts
import { useFonts } from 'expo-font';

// colors
import colors from './app/config/colors';

// svg
import GamingImg from './app/assets/gaming.svg';
import ButterflyImg from './app/assets/floral-butterfly.svg';

export default function App() {

  //-----------------------
  // load font
  const [fontsLoaded] = useFonts({
    'Roboto-MediumItalic': require('./app/assets/fonts/Roboto-MediumItalic.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  //-----------------------

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.mainTitleText}>GAMEON</Text>
        {/*<StatusBar style="auto" />*/}
      </View>
      <GamingImg width={300} height={300}/>
      <ButterflyImg width={300} height={300} fill={'red'}/>
      <TouchableOpacity style={styles.letsGoButton}>
        <Text style={styles.arrowFwButton}>Let's Begin</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color='#fff' />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  arrowFwButton: {
    fontFamily:'Roboto-MediumItalic',
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
  mainImg: {
    width: 300,
    height: 300,
  },
  mainTitleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.primary,
  },
});
