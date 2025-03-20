import { createStore } from 'zustand/vanilla'
import { persist } from 'zustand/middleware'


export type StepsData = {

    number_car: string | null
    setNumberCar: (data: string | null) => void

}


export const useStepsStore = createStore<StepsData>()(
    persist(
        (set) => ({
            number_car: null,

            setNumberCar: (q) => set(() => ({ number_car: q })),


        }),
        { name: 'position-storage' },
    ),
)

