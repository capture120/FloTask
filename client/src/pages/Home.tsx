import React, { useState, useCallback } from 'react';
import AppLoading  from 'expo-app-loading';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  useFonts,
  Inconsolata_200ExtraLight,
  Inconsolata_300Light,
  Inconsolata_400Regular,
  Inconsolata_500Medium,
  Inconsolata_600SemiBold,
  Inconsolata_700Bold,
  Inconsolata_800ExtraBold,
  Inconsolata_900Black,
} from '@expo-google-fonts/inconsolata';

export default function Home({ navigation }) {
  const handleNavigate = () => {
    navigation.navigate('Dashboard');
  };

  const [isLoaded] = useFonts({
    Inconsolata_200ExtraLight,
    Inconsolata_300Light,
    Inconsolata_400Regular,
    Inconsolata_500Medium,
    Inconsolata_600SemiBold,
    Inconsolata_700Bold,
    Inconsolata_800ExtraBold,
    Inconsolata_900Black,
  });
  
  if (!isLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Hi, welcome to</Text>
          <Image source={require('../../assets/logo.png')} style={styles.image} />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleNavigate}
          >
            <View style={styles.customButton}>
              <Text style={styles.buttonText}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFECCC',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Inconsolata_700Bold',
    lineHeight: 50,
    position: 'relative',
    top: -20,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Inconsolata_700Bold',
    lineHeight: 50,
    position: 'relative',
    top: -20,
  },
  image: {
    height: 200,
    width: 200,
  },
  buttonContainer: {
    marginTop: 20,
  },
  customButton: {
    width: 253,
    height: 62,
    backgroundColor: '#FFCB12',
    borderRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: 'black',
    fontFamily: 'Inconsolata_700Bold',
    fontSize: 18,
  },
});


