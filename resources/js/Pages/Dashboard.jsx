import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Test from './test';
export default function Dashboard({ auth }) {
    return (
           <Routes>
                <Route path='/' index element={<Main auth={auth}/>}></Route>
                <Route path='/test' element={<Test auth={auth}/>}></Route>
           </Routes>
    );
}
