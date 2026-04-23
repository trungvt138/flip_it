import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';

export default function NavItem(props) {
    return (
        <TouchableOpacity style={styles.navItem}>
            <View style={styles.iconWrapper}>
                <Image source={props.icon} />
            </View>
            <Text style={styles.label}>{props.label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconWrapper: {
        padding: 3,
        borderWidth: 1,
        borderStyle: 'solid',
        // borderColor: '#9080F7',
        justifyContent: 'center',
        borderRadius: 5
    },
    navItem: {
        alignItems: 'center',
    },
    label: {
        // color: '#9080F7'
    }
})