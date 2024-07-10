import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    /*<View style={styles.container}>
      <Text>Home</Text>
      <Text
        onPress={() => {
          router.push('/sign-in');
        }}>
        Sign In
      </Text>
    </View>*/
    <View style={styles.container}>
      <Text>Home</Text>
      <Link href="sign-in">Sign In</Link>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

