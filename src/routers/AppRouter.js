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
                <Route path="/" element={<ExpenseDashboard />} />
                <Route path="/add-expense" element={<AddExpense />} />
                <Route path="/edit-expense/:id" element={<EditExpense />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>  
    );
}

export default AppRouter;