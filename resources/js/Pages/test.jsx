import React from 'react'
import {Link} from 'react-router-dom';
export default function test({auth}) {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div>
            <h1>This is my custom component</h1>
            <Link to='/dashboard'>
              <input type="button" className='btn btn-danger' value="goto Dashboard" />
            </Link>
          </div>
          </div>
        </div>
      </div>
   
  )
}
