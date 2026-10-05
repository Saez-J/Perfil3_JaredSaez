import { useCallback, useEffect, useState } from 'react';

// Custom hook genérico para consumir una API con async/await + fetch.
export default function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (signal) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url, { signal });
      if (!response.ok) throw new Error(`Error HTTP ${response.status}`);
      setData(await response.json());
    } catch (e) {
      if (e.name !== 'AbortError') setError(e.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal);
    return () => controller.abort();
  }, [fetchData]);

  return { data, loading, error, refetch: () => fetchData() };
}
