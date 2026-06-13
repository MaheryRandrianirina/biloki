import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Package, Users, AlertTriangle, ArrowRight } from 'lucide-react';

interface Stats {
    total_products: number;
    total_clients: number;
    low_stock: number;
}

interface Props {
    stats: Stats;
}

export default function Dashboard({ stats }: Props) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard Overview
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {/* Products Stat */}
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg border-l-4 border-blue-500">
                            <div className="p-6">
                                <div className="flex items-center">
                                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mr-4">
                                        <Package className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-200">Total Products</p>
                                        <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.total_products}</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <Link href={route('admin.products.index')} className="text-sm text-blue-600 hover:underline flex items-center">
                                        View all products <ArrowRight className="ml-1 h-3 w-3" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Clients Stat */}
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg border-l-4 border-green-500">
                            <div className="p-6">
                                <div className="flex items-center">
                                    <div className="p-3 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 mr-4">
                                        <Users className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-200">Total Clients</p>
                                        <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.total_clients}</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <Link href={route('admin.clients.index')} className="text-sm text-green-600 hover:underline flex items-center">
                                        View all clients <ArrowRight className="ml-1 h-3 w-3" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Low Stock Warning */}
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg border-l-4 border-red-500">
                            <div className="p-6">
                                <div className="flex items-center">
                                    <div className="p-3 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 mr-4">
                                        <AlertTriangle className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-200">Low Stock Alert</p>
                                        <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.low_stock}</p>
                                    </div>
                                </div>
                                <div className="mt-4 text-sm text-gray-500">
                                    Products with stock &le; 5
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                            <div className="flex flex-wrap gap-4">
                                <Button asChild>
                                    <Link href={route('admin.products.create')}>Add New Product</Link>
                                </Button>
                                <Button asChild variant="outline">
                                    <Link href={route('admin.clients.create')}>Add New Client</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

// Simple Button component inline to avoid import issues if not yet ready
function Button({ children, className, variant = "default", asChild, ...props }: any) {
    const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2";
    const variants: any = {
        default: "bg-gray-900 text-gray-50 shadow hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90",
        outline: "border border-gray-200 bg-white shadow-sm hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
    };
    
    const classes = `${base} ${variants[variant]} ${className || ''}`;

    if (asChild) {
        return <div className={classes}>{children}</div>;
    }

    return <button className={classes} {...props}>{children}</button>;
}
