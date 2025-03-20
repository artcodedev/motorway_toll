





import style from '../../Style/Components/UIKit/UIOptionsNumberCar.module.scss';
import { countries } from '../../Data/Contries';
import '../../Style/flags.css';
import ReactFlagsSelect from "react-flags-select";
import { useState } from 'react';





const UIOptionsNumberCar = () => {

    const [selected, setSelected] = useState("");
    return (
        <>

            <div className={style['UIOptionsNumberCar']}>

                {/* <span className={style['UIOptionsNumberCar_flag-hn']} title="Honduras"></span>
            <span className="flag-hn" title="Honduras">sd</span>
            <i className='em em-gb'></i>  */}

                {/* <i className='em em-us'></i>  */}
                <ReactFlagsSelect
                    searchPlaceholder=""
                    placeholder=""
                    // fullWidth={false}
                    // searchable
                    customLabels={{
                        "GB": "GB",
                        "US": "US",
                        "FR": "FR"
                    }}
                    showOptionLabel={false}
                    className={style['UIOptionsNumberCar_test']}
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                />

                <select
                    className={style['UIOptionsNumberCar_select']}
                // value={selectedOption}
                // onChange={handleChange}
                >

                    {countries.map((e) => <option data-content='<i className="em em-gb"></i>' data-img="https://flagcdn.com/w40/af.png" style={{ display: 'flex', textAlign: 'center' }} value={e.code} >
                        <i className='em em-us'></i>
                    </option>)}

                </select>
            </div>
        </>
    );
}


export default UIOptionsNumberCar;