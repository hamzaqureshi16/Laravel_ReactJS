<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
 


class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = \App\Models\User::first(); 
        \App\Models\Admin::create([
            'user_id' => $admin->id,
        ]);

        $role = Role::create(['name'=>'admin']);
        $admin->assignRole($role);
        

    }
}
