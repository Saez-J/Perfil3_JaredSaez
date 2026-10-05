import { StyleSheet, Text, View } from 'react-native';

export default function InfoRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { marginBottom: 14 },
  label: { color: '#b388ff', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 },
  value: { color: '#fff', fontSize: 20, fontWeight: '600' },
});
