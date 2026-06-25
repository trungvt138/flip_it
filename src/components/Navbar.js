import { StyleSheet, View } from 'react-native';
import NavItem from './NavItem';
import { useNavigation, useRoute } from '@react-navigation/native';

const NAV_ITEMS = [
    { id: 'home',    label: 'Home',    iconName: 'home',        route: 'Home' },
    { id: 'create',  label: 'Create',  iconName: 'add-circle',  route: 'Create' },
    { id: 'library', label: 'Library', iconName: 'library',     route: 'Library' },
];

export default function Navbar() {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={styles.navBar}>
            {NAV_ITEMS.map(item => (
                <NavItem
                    key={item.id}
                    label={item.label}
                    iconName={item.iconName}
                    isActive={route.name === item.route}
                    onPress={() => navigation.navigate(item.route)}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 75,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#e5e7eb',
    },
});
