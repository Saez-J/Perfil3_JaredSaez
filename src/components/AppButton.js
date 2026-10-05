import { Pressable, StyleSheet, Text } from 'react-native';

export default function AppButton({ title, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.btn, pressed && { opacity: 0.8 }]}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: { backgroundColor: '#7c4dff', paddingVertical: 14, paddingHorizontal: 28, borderRadius: 12, alignItems: 'center' },
  text: { color: '#fff', fontSize: 16, fontWeight: '700' },
});
