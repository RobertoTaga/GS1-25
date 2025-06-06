import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'history';

export async function saveEntry(entry: {
  humidity: number;
  slope: number;
  date: string;
}) {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    const history = data ? JSON.parse(data) : [];
    const updated = [entry, ...history];
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Erro ao salvar entrada:', error);
  }
}

export async function loadHistory(): Promise<
  { humidity: number; slope: number; date: string }[]
> {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Erro ao carregar histórico:', error);
    return [];
  }
}
