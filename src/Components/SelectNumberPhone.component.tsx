

import { ChangeEvent, useState } from "react";
import { countries } from '../Data/Contries'
import arrow_down from '../Static/svg/arrow_down.svg'

import style from '../Style/Components/SelectNumberPhone.module.scss';
import { useStepsStore } from "../Story/story";
import $ from "jquery"
import 'jquery-mask-plugin';
import MaskInput from 'react-maskinput';
import { PatternFormat } from 'react-number-format';


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
    onClickInput: () => void
}

const SelectNumberPhone = ({...pr}: Props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [value, setValue] = useState<string>(useStepsStore.getState().number_car || '');

    const [selectedCountry, setSelectedCountry] = useState<CountryType | null>(null);

    const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const euCountries = filteredCountries.filter((country) => country.isEU);
    const nonEuCountries = filteredCountries.filter((country) => !country.isEU);

    const handleSelect = (country: any) => {
        setSelectedCountry(country);
        setIsOpen(false);
    };

    const onChancheNumberCar = (e: ChangeEvent<HTMLInputElement>) => {

        setValue(e.currentTarget.value.toLocaleUpperCase());

        // save in global state

    }

    return (
        <>

            <div className={style['SelectNumberPhone']} style={{ width: '100%' }}>

                <div className={style['SelectNumberPhone_title']}>Phone number</div>

                <div className={style['SelectNumberPhone_wrap']} style={{ display: 'flex', width: '100%' }} >

                    <div className={style['SelectNumberPhone_wrap_info']} onClick={() => setIsOpen(true)}>
                        <div className={style['SelectNumberPhone_wrap_info_res']}>
                            <img src={selectedCountry ? selectedCountry.flag : 'https://flagcdn.com/w40/be.png'} />
                        </div>

                        <div className={style['SelectNumberPhone_wrap_info_codeNumber']}>345</div>

                        <div className={style['SelectNumberPhone_wrap_svg']}>
                            <img src={arrow_down} />
                        </div>
                    </div>
                    {/* <PatternFormat format="(###) #### ###" allowEmptyFormatting mask="_" onChange={onChancheNumberCar}/> */}

                    {/* <MaskInput  maskChar="_" />; */}
                    <input id='date' style={pr.error ? { border: '1px solid red' } : {}} onClick={pr.onClickInput} value={value} onChange={onChancheNumberCar} />

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

export default SelectNumberPhone;