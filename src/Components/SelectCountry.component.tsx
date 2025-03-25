import { ChangeEvent, useEffect, useState } from "react";
import { countries } from '../Data/Contries'
import arrow_down from '../Static/svg/arrow_down.svg'

import style from '../Style/Components/UIKit/UISelctCountry.module.scss';
import { useStepsStore } from "../Story/story";


interface CountryType {
    code: string;
    name: string;
    flag: string;
    isEU: boolean;
    isEuroUnion: boolean;
    prefix: string;
    plateFormat: string;
    placeholder: string;
    mask: string;
}

interface Props {
    error: boolean
    flag: string
    onClickInput: () => void
}

const SelectCountry = ({ ...pr }: Props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [value, setValue] = useState<string>(useStepsStore.getState().number_car || '');
    const [placeholder, setPlaceholder] = useState<string>('')

    const [selectedCountry, setSelectedCountry] = useState<CountryType | null>(null);

    const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const euCountries = filteredCountries.filter((country) => country.isEU);
    const nonEuCountries = filteredCountries.filter((country) => !country.isEU);

    const handleSelect = (country: CountryType) => {

        useStepsStore.getState().setNumberCarPrefix(country.code);
        useStepsStore.getState().setFlag(country.flag);
        useStepsStore.getState().setCountry(country.name);
        setPlaceholder(country.placeholder);
        setSelectedCountry(country);
        setIsOpen(false);
        
    };

    const onChancheNumberCar = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value.toUpperCase());

        useStepsStore.getState().setNumberCar(e.currentTarget.value.toUpperCase());
    }

    useEffect(() => {
        const placeholder = filteredCountries.filter((country) => useStepsStore.getState().number_car_prefix === country.prefix);

        if (placeholder.length) {
            const pla = placeholder[0]['placeholder'];
            setPlaceholder(pla ? pla : '');
        }
    }
    );

    return (
        <>


            <div className={style['UISelectCountry']} style={{ width: '100%' }}>

                <div className={style['UISelectCountry_wrap']} style={{ display: 'flex', width: '100%' }} >

                    <div className={style['UISelectCountry_wrap_info']} onClick={() => setIsOpen(true)}>
                        <div className={style['UISelectCountry_wrap_info_res']}>
                            <img src={selectedCountry ? selectedCountry.flag : pr.flag} />
                        </div>

                        <div className={style['UISelectCountry_wrap_svg']}>
                            <img src={arrow_down} />
                        </div>
                    </div>

                    <input style={pr.error ? { border: '1px solid red' } : {}} placeholder={placeholder} onClick={pr.onClickInput} value={value} onChange={onChancheNumberCar} />

                </div>

                <div>
                    {isOpen && (
                        <div
                            className="dropdown"
                            style={{
                                top: "100%",
                                left: 0,
                                right: 0,
                                marginTop: "8px",
                                background: "white",
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                maxHeight: "300px",
                                overflowY: "auto",
                                zIndex: 1000,
                            }}
                        >

                            <div
                                style={{
                                    padding: "8px",
                                    borderBottom: "1px solid #ddd",
                                    position: "sticky",
                                    top: 0,
                                    background: "white",
                                }}
                            >
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    style={{
                                        width: "100%",
                                        padding: "8px",
                                        border: "1px solid #ddd",
                                        borderRadius: "4px",
                                        boxSizing: 'border-box'
                                    }}
                                />
                            </div>


                            {euCountries.map((country, idx) => (
                                <div
                                    key={country.name + country.flag + idx}
                                    className="dropdown-item"
                                    style={{
                                        padding: "8px 12px",
                                        display: "flex",
                                        alignItems: "center",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => handleSelect(country)}
                                >
                                    <img
                                        src={country.flag}
                                        alt={country.name}
                                        style={{ width: "20px", height: "15px", marginRight: "8px" }}
                                    />
                                    {`${country.name} (${country.prefix})`}
                                </div>
                            ))}

                            {nonEuCountries.length > 0 && (
                                <hr style={{ margin: "8px 0" }} />
                            )}

                            {nonEuCountries.map((country, idx) => (
                                <div
                                    key={country.code + idx}
                                    className="dropdown-item"
                                    style={{
                                        padding: "8px 12px",
                                        display: "flex",
                                        alignItems: "center",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => handleSelect(country)}
                                >
                                    <img
                                        src={country.flag}
                                        alt={country.name}
                                        style={{ width: "20px", height: "15px", marginRight: "8px" }}
                                    />
                                    {country.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>



        </>
    );
}


export default SelectCountry;