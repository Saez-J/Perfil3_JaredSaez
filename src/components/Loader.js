import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function Loader({ message = 'Cargando...' }) {
  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color="#b388ff" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { color: '#cfc6e6', marginTop: 12 },
});
