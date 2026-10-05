import { FlatList, StyleSheet, Text, View } from 'react-native';
import usePlanets from '../hooks/usePlanets';
import Card from '../components/Card';
import Loader from '../components/Loader';
import AppButton from '../components/AppButton';

export default function PlanetsScreen() {
  const { planets, loading, error, refetch } = usePlanets();

  if (loading) return <Loader message="Cargando planetas..." />;

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>No se pudo cargar: {error}</Text>
        <AppButton title="Reintentar" onPress={refetch} />
      </View>
    );
  }

  return (
    <FlatList
      data={planets}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <Card
          title={item.name}
          image={item.image}
          description={item.description}
          badge={item.isDestroyed ? 'Destruido' : 'Activo'}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  error: { color: '#ff8a80', marginBottom: 16, textAlign: 'center' },
});
