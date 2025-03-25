import React, { useState } from 'react';
import { countries } from '../../Data/Contries';
import style from '../../Style/Components/UIKit/UIDropdownOptionsNumberCar.module.scss';

interface DropdownProps {
  onSelect: (option: string) => void;
}

const UIDropdownOptionsNumberCar: React.FC<DropdownProps> = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedOptionUrl, setSelectedOptionUrl] = useState<string | null>(null);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string, url: string) => {

    // setSelectedOption(option);
    setSelectedOptionUrl(url);
    onSelect(option);
    setIsOpen(false);
  };

  return (

    <div className={style['UIDropdownOptionsNumberCar']}>

      <div className={style['UIDropdownOptionsNumberCar_header']} onClick={toggleDropdown}>
        <img src={`${selectedOptionUrl ? selectedOptionUrl : 'https://flagcdn.com/w40/af.png' }`} />
      </div>

      {isOpen && (
        <div className={style['UIDropdownOptionsNumberCar_list']}>
          {countries.map((option) => (
            <div
              key={option.code}
              className={style['UIDropdownOptionsNumberCar_list_item']}
              onClick={() => handleOptionClick(option.code, option.flag)}
            >
              <img src={option.flag} />
            </div>
          ))}
        </div>
      )}
    </div>

  );
};

export default UIDropdownOptionsNumberCar;