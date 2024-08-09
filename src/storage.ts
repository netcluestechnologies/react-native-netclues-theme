// storage.ts
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

// Function to set a default theme
export const setDefaultTheme = (theme: string = 'default'): void => {
    storage.set('theme', theme);
};

// Function to get the current theme
export const getDefaultTheme = (): string | undefined => {
    return storage.getString('theme');
};
