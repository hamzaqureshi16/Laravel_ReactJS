import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Main from './Main';
import Test from './test';
import AddTask from './User/AddTask';
import axios from 'axios';
export default function Dashboard({ auth,user }) {
    const [isAdmin, setisAdmin] = useState(false);
    const [tasks, setTasks] = useState({});
    useEffect(() => {
        console.log('tf');
        async function checkrole(){
            try {
                const isAdmin = await axios.get(`/api/has-role/admin/${user.id}`)
                setisAdmin(isAdmin.data.hasRole);
            } catch (error) {
                console.log(error);
            }

        }

        checkrole()
    },[])

    useEffect(()=>{
        isAdmin ? getTasks() : console.log('not admin');
    },[isAdmin])

    const getTasks = async ()=>{
        const tasks = await axios.get('/api/getTasks');
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
        {isAdmin &&
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div>
                            <h1>Hi, {user.name}</h1>
                        </div>
                    </div>
                </div>
            </div>
                                }
         
          {!isAdmin &&
           <Routes>
                <Route path='/dashboard' index element={<Main auth={auth}/>}></Route>
                <Route path='/test' element={<Test auth={auth}/>}></Route>
                <Route path='/addtask' element={<AddTask id={user.id}/>}></Route>
            </Routes>}
        </AuthenticatedLayout>
    );
    }
