import { StyleSheet, View, Text, TouchableOpacity    } from "react-native";

export default function LearningBox() {
    return (
         <View style={styles.learningBox}>
                    <View style= {styles.header}> 
                                    <Text style={styles.datum}> 01.12.2026 </Text>

                    </View>

                    <Text style={styles.karteiName}> Englisch LK - Unit 3: Globalisierung </Text>
                    <Text style={styles.cardName}> 0/10 Cards </Text>

                    <TouchableOpacity style= {styles.editButton}> 
                                                 <Text style={{ color: 'white'}}> Edit </Text> </TouchableOpacity>
                    
                    <TouchableOpacity style= {styles.practiceButton} > 
                                                 <Text style={{ color: '#9080F7'}}> Practice </Text> </TouchableOpacity>
                </View>

    );
}

const styles = StyleSheet.create({
    learningBox: {
    width: 300, height: 152, borderRadius: 14, marginTop: 12, backgroundColor:'#D9D9D9',
  },

  header: {
     width: 300, height: 29, borderRadius: 9, justifyContent: 'center', backgroundColor: '#9080F7',
  },

  datum: {
    marginLeft: 11, color: 'white'
  },

  karteiName: {
    width: 268, height: 22, marginTop: 16, fontSize: 16, marginLeft: 16, color: 'black'
  },
  
  cardName: {
    heihgt: 22, textAlign: 'center', marginTop: 3, color: '#37373'
  },

  editButton: {
    width: 125, height: 31, marginTop: 15, marginLeft: 11, alignItems: 'center', justifyContent: 'center', borderRadius: 9, backgroundColor: '#9080F7', 
  },

  practiceButton: {
    width: 125, height: 31, marginTop: -31, marginLeft: 163, alignItems: 'center', justifyContent: 'center', borderRadius: 9, backgroundColor: '#FFF'
  }
})