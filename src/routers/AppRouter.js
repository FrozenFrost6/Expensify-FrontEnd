import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '../components/Header';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';



function AppRouter () {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" Component={ExpenseDashboard}></Route>
                <Route path="/add-expense" Component={AddExpense}></Route>
                <Route path="/edit-expense/:id" Component={EditExpense}></Route>
                <Route path="/help" Component={HelpPage}></Route>
                <Route path='*' Component={NotFoundPage}></Route>
            </Routes>
                
        </BrowserRouter>  
    );
}

export default AppRouter;