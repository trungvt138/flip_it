import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TextBox from '../components/TextBox';
import HorizontalRuler from '../components/HorizontalRuler';
import Navbar from '../components/Navbar'
import LearningBox from '../components/LearningBox';

export default function Library() {
    return (

        <SafeAreaProvider>
            <SafeAreaView>
                <View style={{ flex: 1, paddingTop: 8, alignItems: 'center' }}>
                    <TextBox />

                </View >

                <View style= {{ paddingTop: 50}}>
                    <HorizontalRuler/>
                      <Text style={{marginLeft: 30, marginTop: 12, width: 117, height: 22, fontSize: 12, color: 'black'}}> Sort by: Newest first </Text>
                </View>
<View style={{flex :1, alignItems: 'center'}}> 
    
<View style={{}}>
    <LearningBox/>
</View>
               
                </View>

                <View style={{marginTop: 624}}>
                    <Navbar/>
                </View>


            </SafeAreaView>
        </SafeAreaProvider>
    );


}