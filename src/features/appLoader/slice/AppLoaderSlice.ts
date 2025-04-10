import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../../stores/store';
import {IAppLoaderModel} from '../model/AppLoaderModel';

const initialState: IAppLoaderModel = {
  appLoader: false,
};

export const onAppLoader = (state: RootState) => state.appLoader;
export const appLoaderSlice = createSlice({
  name: 'AppLoader',
  initialState,
  reducers: {
    triggerAppLoader: state => {
      state.appLoader = true;
    },

    stopLoader: state => {
      state.appLoader = false;
    },
  },
});

export const {triggerAppLoader, stopLoader} = appLoaderSlice.actions;
export default appLoaderSlice.reducer;
