import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type State = {
  hydrated: boolean;
  TopNews: number;
  Sports: number;
  Entertainment: number;
  Country: number;
  Tech: number;
  setHydrated: () => void;
  resetCounters: () => void;
};

export const PageContainerStore = create<State>()(
  persist(
    immer((set) => ({
      hydrated: false,
      TopNews: 1,
      Sports: 1,
      Entertainment: 1,
      Country: 1,
      Tech: 1,
      setHydrated() {
        set((state) => {
          state.hydrated = true;
        });
      },
      resetCounters() {
        set((state) => {
          state.TopNews = 1;
          state.Sports = 1;
          state.Entertainment = 1;
          state.Country = 1;
          state.Tech = 1;
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
