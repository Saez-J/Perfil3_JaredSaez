import { Image, StyleSheet, Text, View } from 'react-native';

// Tarjeta reutilizable: recibe todo por props.
export default function Card({ title, image, description, badge }) {
  return (
    <View style={styles.card}>
      {image ? <Image source={{ uri: image }} style={styles.image} resizeMode="cover" /> : null}
      <View style={styles.body}>
        <View style={styles.row}>
          <Text style={styles.title}>{title}</Text>
          {badge ? <Text style={styles.badge}>{badge}</Text> : null}
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#2a1a4d', borderRadius: 16, marginBottom: 16, overflow: 'hidden' },
  image: { width: '100%', height: 180, backgroundColor: '#150b28' },
  body: { padding: 14 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  title: { color: '#fff', fontSize: 20, fontWeight: '700', flexShrink: 1 },
  badge: { color: '#ffd166', fontSize: 12, fontWeight: '600' },
  description: { color: '#cfc6e6', fontSize: 14, lineHeight: 20 },
});
