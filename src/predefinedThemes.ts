import { Appearance } from 'react-native';
import type { ThemeColors } from './themeConfig';

const isDarkMode = (Appearance.getColorScheme() === 'dark')


const predefinedThemes: ThemeColors[] = [
    {
        id: 'red',
        name: "Red",
        colors: {
            background: isDarkMode ? '#000000' : '#ffffff',
            text: isDarkMode ? '#ffffff' : '#000000',
            primary: '#f44336',
            secondary: '#c62828',
        }
    },
    {
        id: 'pink',
        name: 'Pink',
        colors: {
            background: isDarkMode ? '#000000' : '#ffffff',
            text: isDarkMode ? '#ffffff' : '#000000',
            primary: '#e91e63',
            secondary: '#c2185b',
        }
    },
    {
        id: 'purple',
        name: 'Purple',
        colors: {
            background: isDarkMode ? '#000000' : '#ffffff',
            text: isDarkMode ? '#ffffff' : '#000000',
            primary: '#9c27b0',
            secondary: '#6a1b9a',
        }
    },
    {
        id: 'deepPurple',
        name: 'Deep Purple',
        colors: {
            background: isDarkMode ? '#000000' : '#ffffff',
            text: isDarkMode ? '#ffffff' : '#000000',
            primary: '#673ab7',
            secondary: '#4527a0',
        }
    },
    {
        id: 'indigo',
        name: 'Indigo',
        colors: {
            background: isDarkMode ? '#000000' : '#ffffff',
            text: isDarkMode ? '#ffffff' : '#000000',
            primary: '#3f51b5',
            secondary: '#283593',
        }
    },
    {
        id: 'blue',
        name: 'Blue',
        colors: {
            background: isDarkMode ? '#000000' : '#ffffff',
            text: isDarkMode ? '#ffffff' : '#000000',
            primary: '#2196f3',
            secondary: '#1565c0',
        }
    },
    {
        id: 'lightBlue',
        name: 'Light Blue',
        colors: {
            background: isDarkMode ? '#000000' : '#ffffff',
            text: isDarkMode ? '#ffffff' : '#000000',
            primary: '#03a9f4',
            secondary: '#0288d1',
        }
    },
    {
        id: 'cyan',
        name: 'Cyan',
        colors: {
            background: isDarkMode ? '#000000' : '#ffffff',
            text: isDarkMode ? '#ffffff' : '#000000',
            primary: '#00bcd4',
            secondary: '#0097a7',
        }
    },
    {
        id: 'teal',
        name: 'Teal',
        colors: {
            background: isDarkMode ? '#000000' : '#ffffff',
            text: isDarkMode ? '#ffffff' : '#000000',
            primary: '#009688',
            secondary: '#00796b',
        }
    },
    {
        id: 'green',
        name: 'Green',
        colors: {
            background: isDarkMode ? '#000000' : '#ffffff',
            text: isDarkMode ? '#ffffff' : '#000000',
            primary: '#4caf50',
            secondary: '#388e3c',
        }
    },
    {
        id: 'lightGreen',
        name: 'Light Green',
        colors: {
            background: isDarkMode ? '#000000' : '#ffffff',
            text: isDarkMode ? '#ffffff' : '#000000',
            primary: '#8bc34a',
            secondary: '#689f38',
        }
    },
    {
        id: 'lime',
        name: 'Lime',
        colors: {
            background: isDarkMode ? '#000000' : '#ffffff',
            text: isDarkMode ? '#ffffff' : '#000000',
            primary: '#cddc39',
            secondary: '#afb42b',
        }
    },
    {
        id: 'yellow',
        name: 'Yellow',
        colors: {
            background: isDarkMode ? '#000000' : '#ffffff',
            text: isDarkMode ? '#ffffff' : '#000000',
            primary: '#ffeb3b',
            secondary: '#fbc02d',
        }
    },
    {
        id: 'amber',
        name: 'Amber',
        colors: {
            background: isDarkMode ? '#000000' : '#ffffff',
            text: isDarkMode ? '#ffffff' : '#000000',
            primary: '#ffc107',
            secondary: '#ffa000',
        }
    },
    {
        name: 'orange',
        id: 'Orange',
        colors: {
            background: isDarkMode ? '#000000' : '#ffffff',
            text: isDarkMode ? '#ffffff' : '#000000',
            primary: '#ff9800',
            secondary: '#ef6c00',
        }
    },
    {
        id: 'deepOrange',
        name: 'Deep Orange',
        colors: {
            background: isDarkMode ? '#000000' : '#ffffff',
            text: isDarkMode ? '#ffffff' : '#000000',
            primary: '#ff5722',
            secondary: '#e64a19',
        }
    },
    {
        id: 'brown',
        name: 'Brown',
        colors: {
            background: isDarkMode ? '#000000' : '#ffffff',
            text: isDarkMode ? '#ffffff' : '#000000',
            primary: '#795548',
            secondary: '#5d4037',
        }
    },
    {
        id: 'grey',
        name: 'Grey',
        colors: {
            background: isDarkMode ? '#000000' : '#ffffff',
            text: isDarkMode ? '#ffffff' : '#000000',
            primary: '#9e9e9e',
            secondary: '#616161',
        }
    },
    {
        id: 'default',
        name: 'Default',
        colors: {
            background: isDarkMode ? '#000000' : '#ffffff',
            text: isDarkMode ? '#ffffff' : '#000000',
            primary: '#607d8b',
            secondary: '#37474f',
        }
    }
];


export default predefinedThemes;
