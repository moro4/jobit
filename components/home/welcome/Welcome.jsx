import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList }
   from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const Welcome = () => {

   const [activeJobType, setActiveJobType] = useState('Full-Time');
   const jobTypes = ['Full-time', 'Part-time', 'Contracter'];
   const router = useRouter();

   return (
      <View>

         <View style={styles.container}>
            <Text style={styles.userName}>Hello, Moro</Text>
            <Text style={styles.welcomeMessage}>Find your perfect job</Text>
         </View>

         <View style={styles.searchContainer}>

            {/* Searchfield */}
            <View style={styles.searchWrapper}>
               <TextInput
                  style={styles.searchInput}
                  onChange={() => {}}
                  value=''
                  placeholder='What are you looking for?'
               />

            </View>

            {/* Searchbutton */}
            <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
               <Image
                  source={icons.search}
                  resizeMode='contain'
                  style={styles.searchBtnImage}
               />
            </TouchableOpacity>

         </View>

         {/* Work arrangement filter */}
         <View style={styles.tabsContainer}>
            <FlatList
               data={jobTypes}
               renderItem={({item}) => (
                  <TouchableOpacity
                     style={styles.tab(activeJobType, item)}
                     onPress={() => {
                        setActiveJobType(item);
                        router.push(`/search/${item}`);
                     }}
                  >
                     <Text style={styles.tabText(activeJobType, item)}>
                        {item}
                     </Text>
                  </TouchableOpacity>
               )}
               keyExtractor={item => item}
               horizontal
               ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            />
         </View>

      </View>
   )
}

export default Welcome