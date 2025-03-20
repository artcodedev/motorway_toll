

import './App.css'
import { Routes, Route } from 'react-router-dom';

/*
* Pages
*/
import Index from './Pages/Index.page';
import Progress from './Pages/Progress.page';
import Payment from './Pages/Payment.page';

import AppTest from './Components/Test';


const App = () => {


  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/payment" element={<Payment />} />


        <Route path="/test" element={<AppTest />} />

      </Routes>
    </>
  )
}

export default App
