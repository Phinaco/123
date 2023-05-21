import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, CashRegister } from '../pages';

import { Navbar } from '../../ui';

export const SaleFlowRouter = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="/Home" element={<Home />}/>
                <Route path="/CashRegister" element={<CashRegister />}/>

                <Route path="/" element={<Navigate to="/Home" />} />
            </Routes>
        </div>


    </>
  )
}
