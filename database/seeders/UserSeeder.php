<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    { 
         
        $faker = \Faker\Factory::create();
        $name = $faker->name;
        $email = $faker->email; 
 
        DB::table('users')->insert([
            'name' => $name,
            'email' => $email,
            'password' => Hash::make('password'),
        ]);

    }
}
