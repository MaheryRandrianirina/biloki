<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Product;
use App\Models\Client;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Create Admin User
        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'),
        ]);

        // Create Products
        Product::create([
            'name' => 'Laptop Pro 16',
            'sku' => 'LAP-001',
            'description' => 'High-performance laptop for professionals.',
            'price' => 1999.99,
            'stock_quantity' => 15,
        ]);

        Product::create([
            'name' => 'Wireless Mouse',
            'sku' => 'MOU-001',
            'description' => 'Ergonomic wireless mouse.',
            'price' => 49.99,
            'stock_quantity' => 50,
        ]);

        Product::create([
            'name' => 'Monitor 4K',
            'sku' => 'MON-001',
            'description' => '32-inch 4K UHD monitor.',
            'price' => 599.99,
            'stock_quantity' => 3, // Low stock
        ]);

        // Create Clients
        Client::create([
            'first_name' => 'Alice',
            'last_name' => 'Smith',
            'email' => 'alice@example.com',
            'phone' => '555-0101',
            'address' => '123 Tech Lane, Silicon Valley',
        ]);

        Client::create([
            'first_name' => 'Bob',
            'last_name' => 'Johnson',
            'email' => 'bob@example.com',
            'phone' => '555-0102',
            'address' => '456 Business St, New York',
        ]);
    }
}
