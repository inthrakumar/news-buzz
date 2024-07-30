import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type State = {
  isLocation: boolean;
  country: string | null;
  country_code: string | null;
  hydrated: boolean;
  longitude: number | null;
  latitude: number | null;
};

type Actions = {
  setHydrated: () => void;
  setLocation: (country: string | null, country_code: string | null) => void;
  reset: () => void;
};

const initialState: State = {
  isLocation: false,
  country: null,
  country_code: null,
  hydrated: false,
  longitude: null,
  latitude: null,
};

export const AuthStore = create<State & Actions>()(
  persist(
    immer((set) => ({
      ...initialState,
      setHydrated() {
        set({ hydrated: true });
      },
      setLocation(country: string | null, country_code: string | null) {
        set({ country, country_code });
        set({ isLocation: true });
      },
      reset() {
        set((state) => {
          state.isLocation = initialState.isLocation;
          state.country = initialState.country;
          state.country_code = initialState.country_code;
          state.hydrated = initialState.hydrated;
          state.longitude = initialState.longitude;
          state.latitude = initialState.latitude;
        });
      },
    })),
    {
      name: 'locationData',
      onRehydrateStorage() {
        return (state, error) => {
          if (error) {
            console.log('Persistence error:', error);
          } else {
            state?.setHydrated();
          }
        };
      },
    }
  )
);
