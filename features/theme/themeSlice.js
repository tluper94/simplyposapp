import { createSlice } from '@reduxjs/toolkit';

const getInitalTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedTheme = window.localStorage.getItem('theme');

    if (typeof storedTheme === 'boolean') {
      return storedTheme;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');

    if (userMedia.matches) {
      return true;
    }
  }

  return false;
};

const initialState = {
  isDark: getInitalTheme()
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: state => {
      state.isDark = !state.isDark;
    }
  }
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
