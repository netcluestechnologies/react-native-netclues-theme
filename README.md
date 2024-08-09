# react-native-netclues-theme

[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue.svg?logo=typescript&style=flat)](https://www.typescriptlang.org/)
[![MMKV](https://img.shields.io/badge/MMKV-Used-blue.svg?style=flat-square)](https://github.com/mrousavy/react-native-mmkv)
[![React Native](https://img.shields.io/badge/React%20Native-Supported-green.svg?style=flat-square)](https://reactnative.dev/)
[![Platform](https://img.shields.io/badge/Platform-iOS%20%7C%20Android-lightgrey.svg?style=flat-square)](https://www.reactnative.dev/)
[![Themes](https://img.shields.io/badge/Themes-18%20Available-brightgreen.svg?style=flat-square)](https://github.com/your-repo-link)
[![npm version](https://img.shields.io/npm/v/@netclues/react-native-netclues-theme.svg?style=flat-square)](https://www.npmjs.com/package/@netclues/react-native-netclues-theme)
[![npm downloads](https://img.shields.io/npm/dt/@netclues/react-native-netclues-theme.svg?style=flat-square)](https://www.npmjs.com/package/@netclues/react-native-netclues-theme)
[![license](https://img.shields.io/npm/l/@netclues/react-native-netclues-theme.svg?style=flat-square)](https://www.npmjs.com/package/@netclues/react-native-netclues-theme)

This package provides a predefined set of color themes for React Native applications, allowing easy switching between themes and storage of the selected theme. It also includes functions to get the current theme, set a new theme, and retrieve all available themes.

## Features

- **Predefined Themes:** Includes multiple color themes with support for both light and dark modes.
- **Storage Integration:** Saves the selected theme to storage and retrieves it automatically.
- **Customizable:** Easily extend or modify predefined themes.

## Installation

```sh
npm install @netclues/react-native-netclues-theme
```
or using yarn:

```sh
yarn add @netclues/react-native-netclues-theme
```

## Usage

## Importing the Package
To use the theme manager, you need to import the relevant functions and themes into your React Native project.

```js
import { themes, getAllThemes, setThemeColorsData, getSelectedThemeData } from 'your-package-name';
```

## Getting All Themes
You can retrieve all predefined themes using the getAllThemes function.

```js
const allThemes = getAllThemes();
console.log(allThemes);
```

## Setting and Getting a Theme
To set a theme and save it to storage:

```js
const selectedTheme = setThemeColorsData('blue');
console.log(selectedTheme);
```

To retrieve the currently selected theme:
```js
const currentTheme = getSelectedThemeData();
console.log(currentTheme);
```

## Using Themes in Components
You can use the selected theme in your components to style them according to the selected theme's color scheme.

```js
import { StyleSheet, View, Text } from 'react-native';
import { getSelectedThemeData } from 'react-native-netclues-theme';

const theme = getSelectedThemeData();

const App = () => {
  return (
    <View style={[styles.container, { backgroundColor: theme?.colors.background }]}>
      <Text style={{ color: theme?.colors.text }}>Hello, Themed World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
```

## Available Themes

The package includes the following predefined themes:

- **Red**
- **Pink**
- **Purple**
- **Deep Purple**
- **Indigo**
- **Blue**
- **Light Blue**
- **Cyan**
- **Teal**
- **Green**
- **Light Green**
- **Lime**
- **Yellow**
- **Amber**
- **Orange**
- **Deep Orange**
- **Brown**
- **Grey**
- **Default**

## License

MIT

---