import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';

export default function Navbar() {
    return (
        <View style={styles.navBar}>
            <TouchableOpacity style={styles.navItem}>
                <View style={styles.iconWrapper}>
                    <Image source={require("../assets/home-navbar.png")} />
                </View>
                <Text style={styles.iconText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require("../assets/home-navbar.png")} />
                <Text>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require("../assets/home-navbar.png")} />
                <Text>Library</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 360,
        height: 75,
        backgroundColor: '#D9D9D9',
    },
    iconWrapper: {
        padding: 3,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#9080F7',
        justifyContent: 'center',
        borderRadius: 5
    },
    navItem: {
        alignItems: 'center',
    },
    iconText: {
        color: '#9080F7'
    }
})