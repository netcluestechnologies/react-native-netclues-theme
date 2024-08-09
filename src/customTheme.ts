import type { ThemeColors } from './themeConfig';
import predefinedThemes from './predefinedThemes';
import { getDefaultTheme, setDefaultTheme } from './storage';

// Function to get all themes
export const getAllThemes = (): ThemeColors[] => {
    return predefinedThemes;
};

// Function to set the theme and save it to storage
export const setThemeColorsData = (themeId: string = 'default'): ThemeColors | undefined => {
    const themeColor = predefinedThemes.find((item) => item.id === themeId);
    setDefaultTheme(themeId);
    return themeColor;
};

// Function to get the current theme from storage
export const getSelectedThemeData = (): ThemeColors | undefined => {
    const themeId = getDefaultTheme();
    return themeId ? setThemeColorsData(themeId) : setThemeColorsData();
};
