import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { useAppDispatch, useAppSelector } from '../hooks';
import type { RootState } from '../store';
import type { StyleOption } from '../machine/machine.types';

interface BrewState {
  style: StyleOption | null;
  size: string | null;
  extras: string[];
}

const initialState: BrewState = {
  style: null,
  size: null,
  extras: [],
}

export const brewSlice = createSlice({
  name: 'brew',
  initialState,
  reducers: {
    setStyle: (state, action: PayloadAction<StyleOption | null>) => {
      state.style = action.payload;
    },
    setSize: (state, action: PayloadAction<string | null>) => {
      state.size = action.payload;
    },
    addExtras: (state, action: PayloadAction<string>) => {
      state.extras.push(action.payload);
      const uniqueArr = new Set(state.extras);
      state.extras = [...uniqueArr];
    },
    clearExtras: (state) => {
      state.extras = [];
    },
  },
});
const { setStyle, setSize, addExtras, clearExtras } = brewSlice.actions;


// Store Accessors
export const useStyleSelection = () => useAppSelector((state: RootState) => state.brew.style);
export const useSizeSelection = () => useAppSelector((state: RootState) => state.brew.size);
export const useExtrasSelection = () => useAppSelector((state: RootState) => state.brew.extras);
export const useBrewSelection = () => useAppSelector((state: RootState) => state.brew);
// END Store Accessors

// Store mutators
export const useSetStyle = () => {
  const dispatch = useAppDispatch();
  return (style: StyleOption | null) => dispatch(setStyle(style));
};

export const useSetSize = () => {
  const dispatch = useAppDispatch();
  return (sizeId: string | null) => dispatch(setSize(sizeId));
};

export const useSetExtras = () => {
  const dispatch = useAppDispatch();
  return (extraId: string) => dispatch(addExtras(extraId));
};

export const useClearExtras = () => {
  const dispatch = useAppDispatch();
  return () => dispatch(clearExtras());
};
// END Store mutators


export default brewSlice.reducer;
