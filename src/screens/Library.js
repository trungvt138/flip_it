import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TextBox from '../components/TextBox';
import HorizontalRuler from '../components/HorizontalRuler';
import Navbar from '../components/Navbar'

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
    

                <View style={{ width: 300, height: 152, borderRadius: 14, marginTop: 12, backgroundColor:'#D9D9D9'}}>
                    <View style= {{ width: 300, height: 29, borderRadius: 9, justifyContent: 'center', backgroundColor: '#9080F7'}}> 
                                    <Text style={{marginLeft: 11, color: 'white'}}> 01.12.2026 </Text>

                    </View>

                    <Text style={{width: 268, height: 22, marginTop: 16, fontSize: 16, marginLeft: 16, color: 'black'}}> Englisch LK - Unit 3: Globalisierung </Text>
                    <Text style={{heihgt: 22, textAlign: 'center', marginTop: 3, color: '#37373'}}> 0/10 Cards </Text>

                    <TouchableOpacity style= {{ width: 125, height: 31, marginTop: 15, marginLeft: 11,
                                                alignItems: 'center', justifyContent: 'center', borderRadius: 9,
                                                 backgroundColor: '#9080F7'}} > 
                                                 <Text style={{ color: 'white'}}> Edit </Text> </TouchableOpacity>
                    
                    <TouchableOpacity style= {{ width: 125, height: 31, marginTop: -31, marginLeft: 163,
                                                alignItems: 'center', justifyContent: 'center', borderRadius: 9,
                                                 backgroundColor: '#FFF'}} > 
                                                 <Text style={{ color: '#9080F7'}}> Practice </Text> </TouchableOpacity>
                </View>



                <View style={{ width: 300, height: 152, borderRadius: 14, marginTop: 38, backgroundColor:'#D9D9D9'}}>
                    <View style= {{ width: 300, height: 29, borderRadius: 9, justifyContent: 'center', backgroundColor: '#9080F7'}}> 
                                    <Text style={{marginLeft: 11, color: 'white'}}> 01.12.2026 </Text>

                    </View>

                    <Text style={{width: 268, height: 22, marginTop: 16, fontSize: 16, marginLeft: 16, color: 'black'}}> Englisch LK - Unit 3: Globalisierung </Text>
                    <Text style={{heihgt: 22, textAlign: 'center', marginTop: 3, color: '#37373'}}> 0/10 Cards </Text>

                    <TouchableOpacity style= {{ width: 125, height: 31, marginTop: 15, marginLeft: 11,
                                                alignItems: 'center', justifyContent: 'center', borderRadius: 9,
                                                 backgroundColor: '#9080F7'}} > 
                                                 <Text style={{ color: 'white'}}> Edit </Text> </TouchableOpacity>
                    
                    <TouchableOpacity style= {{ width: 125, height: 31, marginTop: -31, marginLeft: 163,
                                                alignItems: 'center', justifyContent: 'center', borderRadius: 9,
                                                 backgroundColor: '#FFF'}} > 
                                                 <Text style={{ color: '#9080F7'}}> Practice </Text> </TouchableOpacity>
                </View>




                <View style={{ width: 300, height: 152, borderRadius: 14, marginTop: 38, backgroundColor:'#D9D9D9'}}>
                    <View style= {{ width: 300, height: 29, borderRadius: 9, justifyContent: 'center', backgroundColor: '#9080F7'}}> 
                                    <Text style={{ marginLeft: 11, color: 'white'}}> 01.12.2026 </Text>

                    </View>

                    <Text style={{width: 268, height: 22, marginTop: 16, fontSize: 16, marginLeft: 16, color: 'black'}}> Englisch LK - Unit 3: Globalisierung </Text>
                    <Text style={{heihgt: 22, textAlign: 'center', marginTop: 3, color: '#37373'}}> 0/10 Cards </Text>

                    <TouchableOpacity style= {{ width: 125, height: 31, marginTop: 15, marginLeft: 11,
                                                alignItems: 'center', justifyContent: 'center', borderRadius: 9,
                                                 backgroundColor: '#9080F7'}} > 
                                                 <Text style={{ color: 'white'}}> Edit </Text> </TouchableOpacity>
                    
                    <TouchableOpacity style= {{ width: 125, height: 31, marginTop: -31, marginLeft: 163,
                                                alignItems: 'center', justifyContent: 'center', borderRadius: 9,
                                                 backgroundColor: '#FFF'}} > 
                                                 <Text style={{ color: '#9080F7'}}> Practice </Text> </TouchableOpacity>
                </View>
                </View>

                <View style={{marginTop: 624}}>
                    <Navbar/>
                </View>


            </SafeAreaView>
        </SafeAreaProvider>
    );


}