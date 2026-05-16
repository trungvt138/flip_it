import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';

export default function NavItem(props) {
    return (
        <TouchableOpacity style={styles.navItem} onPress={props.onPress}>
            <View style={[styles.iconWrapper, props.isActive && styles.activeIconWrapper]}>
                <Image source={props.icon} style={[props.isActive && styles.activeIcon]} />
            </View>
            <Text style={[styles.label, props.isActive && styles.activeLabel]}>{props.label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconWrapper: {
        padding: 3,
        borderWidth: 1,
        borderStyle: 'solid',
    
        justifyContent: 'center',
        borderRadius: 5
    },
    navItem: {
        alignItems: 'center',
    },
    label: {
        // color: '#9080F7'
    },
    activeIcon: {
        tintColor: '#9080F7',
    },
    activeLabel: {
        color: '#9080F7',
    },
    activeIconWrapper: {
        borderColor: '#9080F7',
    }
})