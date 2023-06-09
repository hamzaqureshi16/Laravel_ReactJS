import React from 'react'
import { Link } from 'react-router-dom';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
export default function main({auth}) {
  return (
    <div>
       
        <Head title="Dashboard" />
        <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>

                        <div className="flex justify-center">

                            <div className='m-2'>
                              <Link to='/test'><input type="button" value="Test" className='btn btn-primary' /></Link>
                            </div>
                            <div className='m-2'>
                              <Link to='/addtask'><input type="button" value="Add task" className='btn btn-warning' /></Link>
                            </div>
                        
                        </div>
                        </div>
                </div>
        </div>
        
    </div>
  )
}
