<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function store(Request $request){
        
        // $validated = $request->validate([
        //     'name' => 'required',
        //     'due_date' => 'required',
        //     'description' => 'required',
        // ]);
        dd($request);
    }
}
