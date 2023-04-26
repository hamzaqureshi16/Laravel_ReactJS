import React from 'react'
import {Link} from 'react-router-dom';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
export default function test({auth}) {
  return (
    <div>
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">My Component</h2>}
        >
      <Link to='/'><input type="button" className='btn btn-danger' value="goto Dashboard" /></Link>
      </AuthenticatedLayout>
    </div>
  )
}
