import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import NavItem from './NavItem';
import { useNavigation } from '@react-navigation/native';

const NAV_ITEMS = [
    {id: 'home', label: 'Home', icon: require("../../assets/home-navbar.png"), route: "Home"},
    {id: 'create', label: 'Create', icon: require("../../assets/create-navbar.png"), route: "Create"},
    {id: 'library', label: 'Library', icon: require("../../assets/library-navbar.png"), route: "Library"},
]

export default function Navbar() {
    const navigation = useNavigation();
    return (
        <View style={styles.navBar}>
            {NAV_ITEMS.map(item => (
                <NavItem key={item.id} label={item.label} icon={item.icon} onPress={navigation.navigate(item.route)}/>
            ))}
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
})