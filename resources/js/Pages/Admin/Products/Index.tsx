import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/Components/ui/table';
import { Plus, Edit, Trash2 } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    sku: string;
    price: string;
    stock_quantity: number;
}

interface Props {
    products: Product[];
}

export default function Index({ products }: Props) {
    const { flash } = usePage().props as any;

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Products Management
                    </h2>
                    <Button asChild className="text-white border border-white hover:bg-white hover:text-gray-800">
                        <Link href={route('admin.products.create')}>
                            <Plus className="mr-2 h-4 w-4" /> Add Product
                        </Link>
                    </Button>
                </div>
            }
        >
            <Head title="Products" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {flash.message && (
                        <div className="mb-4 rounded-md bg-green-100 p-4 text-green-700 dark:bg-green-900 dark:text-green-300">
                            {flash.message}
                        </div>
                    )}

                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>SKU</TableHead>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Price</TableHead>
                                        <TableHead>Stock</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {products.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={5} className="text-center py-10">
                                                No products found.
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        products.map((product) => (
                                            <TableRow key={product.id}>
                                                <TableCell className="font-medium">{product.sku}</TableCell>
                                                <TableCell>{product.name}</TableCell>
                                                <TableCell>${parseFloat(product.price).toFixed(2)}</TableCell>
                                                <TableCell>
                                                    <span className={cn(
                                                        "px-2 py-1 rounded-full text-xs font-semibold",
                                                        product.stock_quantity <= 5 ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300" : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                                                    )}>
                                                        {product.stock_quantity} in stock
                                                    </span>
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <div className="flex justify-end gap-2">
                                                        <Button variant="outline" size="sm" asChild>
                                                            <Link href={route('admin.products.edit', product.id)}>
                                                                <Edit className="h-4 w-4" />
                                                            </Link>
                                                        </Button>
                                                        <Button variant="destructive" size="sm" asChild>
                                                            <Link 
                                                                href={route('admin.products.destroy', product.id)} 
                                                                method="delete" 
                                                                as="button"
                                                            >
                                                                <Trash2 className="h-4 w-4" />
                                                            </Link>
                                                        </Button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

// Simple cn helper if not imported correctly
function cn(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}
