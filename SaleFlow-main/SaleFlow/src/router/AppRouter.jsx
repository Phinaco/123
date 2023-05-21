import { Route, Routes} from 'react-router-dom';

import { Login } from '../auth/pages/Login';
import { SaleFlowRouter } from '../SaleFlow/routes/SaleFlowRouter';

export const AppRouter = () => {
    return(
        <>
            <Routes>
                <Route path="Login" element={<Login />}/>
                <Route path="/*" element={<SaleFlowRouter />}/>
            </Routes>
        </>
    )
}