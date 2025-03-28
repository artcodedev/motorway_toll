

import './App.css'
import { Routes, Route } from 'react-router-dom';

/*
* Pages
*/
import Index from './Pages/Index.page';
import Progress from './Pages/Progress.page';
import Payment from './Pages/Payment.page';
import Successful from './Pages/Successful.page';
import Failed from './Pages/Failed.page';
// import Test from './Components/Test';

// import MyComponent from './Components/Test';


const App = () => {


  return (
    <>
      <Routes>

        <Route path="/austria2/" element={<Index />} />
        <Route path="/austria2/progress" element={<Progress />} />
        {/* <Route path="/austria2/payment" element={<Payment />} /> */}

        <Route path="/:countryPath">

          <Route path="payment" element={<Payment />} />
          <Route path="successful" element={<Successful status={true} />} />
          <Route path="failed" element={<Failed />} />

        </Route>


        {/* <Route path="/austria2/test" element={<Test />} /> */}

        {/* <Route path="/austria2/successful" element={<Successful status={true} />} />

        <Route path="/austria2/failed" element={<Failed />} /> */}


      </Routes>
    </>
  )
}

export default App
