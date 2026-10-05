import useFetchData from './useFetchData';

const URL = 'https://dragonball-api.com/api/planets?limit=20';

// Custom hook: obtiene y normaliza los planetas de Dragon Ball.
export default function usePlanets() {
  const { data, loading, error, refetch } = useFetchData(URL);

  const planets = (data?.items ?? []).map((p) => ({
    id: p.id,
    name: p.name,
    image: p.image,
    description: p.description,
    isDestroyed: p.isDestroyed,
  }));

  return { planets, loading, error, refetch };
}
