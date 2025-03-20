import React from 'react';
// import Dropdown from './Dropbox';

const AppTest: React.FC = () => {
  const options = ['Опция 1', 'Опция 2', 'Опция 3'];

  const handleSelect = (option: string) => {
    console.log('Выбрана опция:', option);
  };

  return (
    <div>
      <h1>Кастомный выпадающий список</h1>

      {/* <Dropdown options={options} onSelect={handleSelect} /> */}

    </div>
  );
};

export default AppTest;