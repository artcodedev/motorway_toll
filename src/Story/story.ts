import { createStore } from 'zustand/vanilla'
import { persist } from 'zustand/middleware'


export type StepsData = {

    number_car: string | null
    vehicle: string | null 
    number_car_prefix: string | null
    validity: string | null
    start_of_validity: string | null
    start_date: string | null
    end_date: string | null
    price: string | null
    type_price: string | null
    flag: string | null
    email: string | null
    phone: string | null

    // country_code: string | null


    setNumberCar: (data: string | null) => void
    setVehicle: (data: string | null) => void
    setNumberCarPrefix: (data: string | null) => void
    setValidity: (data: string | null) => void
    setStartOfValidity: (data: string | null) => void
    setStartDate: (data: string | null) => void
    setEndDate: (data: string | null) => void
    setPrice: (data: string | null) => void
    setTypePrice: (data: string | null) => void
    setFlag: (data: string | null) => void
    setEmail: (data: string | null) => void
    setPhone: (data: string | null) => void
    // setCountryCode: (data: string | null) => void



}


export const useStepsStore = createStore<StepsData>()(
    persist(
        (set) => ({
            number_car: null,
            vehicle: null,
            number_car_prefix: null,
            validity: null,
            start_of_validity: null,
            start_date: null,
            end_date: null,
            price: null,
            type_price: null,
            flag: null,
            email: '',
            phone: '',

            setNumberCar: (q) => set(() => ({ number_car: q })),
            setVehicle: (q) => set(() => ({ vehicle: q })),
            setNumberCarPrefix: (q) => set(() => ({ number_car_prefix: q })),
            setValidity: (q) => set(() => ({ validity: q })),
            setStartOfValidity: (q) => set(() => ({ start_of_validity: q })),
            setStartDate: (q) => set(() => ({ start_date: q })),
            setEndDate: (q) => set(() => ({ end_date: q })),
            setPrice: (q) => set(() => ({ price: q })),
            setTypePrice: (q) => set(() => ({ type_price: q })),
            setFlag: (q) => set(() => ({ flag: q })),
            setEmail: (q) => set(() => ({ email: q })),
            setPhone: (q) => set(() => ({ phone: q }))

        }),
        { name: 'motorway' },
    ),
)

