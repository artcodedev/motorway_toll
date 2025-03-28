import { createStore } from 'zustand/vanilla'
import { persist } from 'zustand/middleware'

export type DataVar = {
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
    chech_box: boolean
    country: string | null

    utm_source: string | null
    utm_medium: string | null
    utm_campaign: string | null
    utm_term: string | null
    utm_content: string | null
    utm_nooverride: string | null
    utm_referrer: string | null
    type_time: string | null
}
export type StepsData = {

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
    setChechBox: (data: boolean) => void
    setCountry: (data: string) => void

    setUtmSource: (data: string | null) => void
    setUtmMedium: (data: string | null) => void
    setUtmCampaign: (data: string | null) => void
    setUtmTerm: (data: string | null) => void
    setUtmContent: (data: string | null) => void
    setUtmNooverride: (data: string | null) => void
    setUtmReferrer: (data: string | null) => void
    setTypeTime: (data: string | null) => void

}


export const useStepsStore = createStore<DataVar & StepsData>()(
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
            chech_box: true,
            country: null,
            utm_source: null,
            utm_medium: null,
            utm_campaign: null,
            utm_term: null,
            utm_content: null,
            utm_nooverride: null,
            utm_referrer: null,
            type_time: '1',

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
            setPhone: (q) => set(() => ({ phone: q })),
            setChechBox: (q) => set(() => ({ chech_box: q })),
            setCountry: (q) => set(() => ({ country: q })),

            setUtmSource: (q) => set(() => ({ utm_source: q })),
            setUtmMedium: (q) => set(() => ({ utm_medium: q })),
            setUtmCampaign: (q) => set(() => ({ utm_campaign: q })),
            setUtmTerm: (q) => set(() => ({ utm_term: q })),
            setUtmContent: (q) => set(() => ({ utm_content: q })),
            setUtmNooverride: (q) => set(() => ({ utm_nooverride: q })),
            setUtmReferrer: (q) => set(() => ({ utm_referrer: q })),
            setTypeTime: (q) => set(() => ({ type_time: q }))

        }),
        { name: 'motorway' },
    ),
)

