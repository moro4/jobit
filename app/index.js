import { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS, SIZES, icons, images } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, WelcomeScreen }
   from '../components';

export default function Home() {

   const router = useRouter();

   return (
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
         <Stack.Screen
            options={{
               headerStyle: {backgroundColor: COLORS.lightWhite},
               headerShadowVisible: false,
               headerLeft: () =>
                  <ScreenHeaderBtn icon={icons.menu} dimension='60%'/>,
               headerRight: () =>
                  <ScreenHeaderBtn icon={icons.profile} dimension='100%'/>,
               headerTitle: ''
            }}
         />
      </SafeAreaView>
   )
}