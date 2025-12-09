export const fetchJson = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Falha no fetch: ${response.status} → ${url}`);
  }

  const json = await response.json();
  return json as T;
};
