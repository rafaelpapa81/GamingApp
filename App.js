import 'react-native-gesture-handler';

import { AuthProvider } from './app/context/AuthContext';
import AppNav from './app/navigation/AppNav';


function App() {
    return (
        <AuthProvider>
            <AppNav />
        </AuthProvider>
    );
}

export default App;

// snippets
//  -install extension: React Native Tools
//  -install extension: ES7+ React/Redux/React-Native snippets

// rnfes > reactNativeFunctionalExportComponent + reactNativeStylesheetStyle
// rnfe > reactNativeFunctionalExportComponent
// rnss > reactNativeStylesheetStyle
// imr > import React from 'react';
// slc > functional component
// https://marketplace.visualstudio.com/items?itemName=jundat95.react-native-snippet

// icons
//   - react native vector icons
//   - https://oblador.github.io/react-native-vector-icons/
//   - https://github.com/oblador/react-native-vector-icons

// handle screens with multiple navigators
//   get route and options
//  - https://reactnavigation.org/docs/screen-options-resolution