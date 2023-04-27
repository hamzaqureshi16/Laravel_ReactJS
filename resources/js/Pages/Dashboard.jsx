import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Test from './test';
export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            {console.log(auth.user)}
           <Routes>
                <Route path='/dashboard' index element={<Main auth={auth}/>}></Route>
                <Route path='/test' element={<Test auth={auth}/>}></Route>
           </Routes>
        </AuthenticatedLayout>
    );
}
