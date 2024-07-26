import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type State = {
  isLocation: boolean;
  country: string | null;
  country_code: string | null;
  hydrated: boolean;
};

type Actions = {
  setHydrated: () => void;
  setLocation: (country: string, country_code: string) => void;
};
export const AuthStore = create<State & Actions>()(
  persist(
    immer((set) => ({
      isLocation: false,
      country: null,
      country_code: null,
      hydrated: false,
      setHydrated() {
        set({ hydrated: true });
      },
      setLocation(country: string, country_code: string) {
        set({ country, country_code });
        set({ isLocation: true });
      },
    })),
    {
      name: 'locationData',
      onRehydrateStorage() {
        return (state, error) => {
          if (error) {
            console.log('persistance error');
          } else {
            state?.setHydrated();
          }
        };
      },
    }
  )
);
