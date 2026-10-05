import { StyleSheet, View } from 'react-native';
import useStudentInfo from '../hooks/useStudentInfo';
import InfoRow from '../components/InfoRow';
import AppButton from '../components/AppButton';

export default function StudentScreen({ navigation }) {
  const { nombre, carnet, seccion, grupo } = useStudentInfo();

  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        <InfoRow label="Nombre" value={nombre} />
        <InfoRow label="Carnet" value={carnet} />
        <InfoRow label="Sección y grupo" value={`${seccion} ${grupo}`} />
      </View>
      <AppButton title="Ver pantalla 2" onPress={() => navigation.navigate('Planets')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  panel: { backgroundColor: '#2a1a4d', borderRadius: 16, padding: 20, marginBottom: 28 },
});
