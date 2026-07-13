import { StyleSheet, View } from 'react-native';
import NavItem from './NavItem';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSettings } from '../hooks/useSettings';

export default function Navbar() {
    const navigation = useNavigation();
    const route = useRoute();
    const { t, colors } = useSettings();

    const NAV_ITEMS = [
        { id: 'home',    label: t.navHome,    iconName: 'home',        route: 'Home' },
        { id: 'create',  label: t.navCreate,  iconName: 'add-circle',  route: 'Create' },
        { id: 'library', label: t.navLibrary, iconName: 'library',     route: 'Library' },
        { id: 'user',    label: t.navUser,    iconName: 'person',      route: 'User' },
    ];

    return (
        <View style={[styles.navBar, { backgroundColor: colors.navBackground, borderTopColor: colors.border }]}>
            {NAV_ITEMS.map(item => (
                <NavItem
                    key={item.id}
                    label={item.label}
                    iconName={item.iconName}
                    isActive={route.name === item.route}
                    onPress={() => navigation.navigate('Main', { screen: item.route })}
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
        borderTopWidth: 1,
    },
});
