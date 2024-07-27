import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { TopNews } from '../types/types';

type State = {
  hydrated: boolean;
  TopNews: number;
  Sports: number;
  World: number;
  Country: number;
  Tech: number;
  setHydrated: () => void;
};

export const PageContainerStore = create<State>()(
  persist(
    immer((set) => ({
      hydrated: false,
      TopNews: 1,
      Sports: 1,
      World: 1,
      Country: 1,
      Tech: 1,
      setHydrated() {
        set((state) => {
          state.hydrated = true;
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
