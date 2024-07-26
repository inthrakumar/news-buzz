import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type State = {
  hydrated: boolean;
  Sports: number;
  World: number;
  Country: number;
  Tech: number;
};

type Actions = {
  setHydrated: () => void;
  setWorld: (index: number) => void;
  setSports: (index: number) => void;
  setCountry: (index: number) => void;
  setTech: (index: number) => void;
};

export const AuthStore = create<State & Actions>()(
  persist(
    immer((set) => ({
      hydrated: false,
      Sports: 0,
      World: 0,
      Country: 0,
      Tech: 0,
      setHydrated() {
        set((state) => {
          state.hydrated = true;
        });
      },
      setWorld(index: number) {
        set((state) => {
          state.World += index;
        });
      },
      setSports(index: number) {
        set((state) => {
          state.Sports += index;
        });
      },
      setTech(index: number) {
        set((state) => {
          state.Tech += index;
        });
      },
      setCountry(index: number) {
        set((state) => {
          state.Country += index;
        });
      },
    })),
    {
      name: 'locationData',
      onRehydrateStorage() {
        return (state, error) => {
          if (error) {
            console.log('persistence error');
          } else {
            state?.setHydrated();
          }
        };
      },
    }
  )
);
