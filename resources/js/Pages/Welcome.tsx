import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Package, ArrowRight } from 'lucide-react';

export default function Welcome({
    auth,
}: PageProps) {
    return (
        <>
            <Head title="Welcome to Biloki" />
            <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 selection:bg-blue-500 selection:text-white">
                {/* Navigation */}
                <nav className="absolute top-0 right-0 p-6 flex gap-4">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </nav>

                {/* Hero Section */}
                <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
                    <div className="mb-8 p-4 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        <Package size={64} strokeWidth={1.5} />
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
                        Welcome to <span className="text-blue-600 dark:text-blue-500">Biloki</span>
                    </h1>
                    
                    <p className="max-w-2xl text-xl text-gray-600 dark:text-gray-200 mb-10 leading-relaxed">
                        The modern, professional solution for managing your products, 
                        stock levels, and clients with ease. Built for efficiency and performance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        {auth.user ? (
                            <Button size="lg" className="h-12 px-8 text-lg text-gray-600 dark:text-white" asChild>
                                <Link href={route('dashboard')}>
                                    Go to Dashboard <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        ) : (
                            <>
                                <Button size="lg" className="h-12 px-8 text-lg text-gray-600 dark:text-white" asChild>
                                    <Link href={route('login')}>
                                        Get Started <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="h-12 px-8 text-lg text-gray-600 dark:text-white" asChild>
                                    <Link href={route('register')}>
                                        Create Account
                                    </Link>
                                </Button>
                            </>
                        )}
                    </div>

                    <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
                        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-left">Product Management</h3>
                            <p className="text-gray-600 dark:text-gray-200 text-left text-sm">
                                Full control over your product catalog with detailed information and tracking.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-left">Real-time Stock</h3>
                            <p className="text-gray-600 dark:text-gray-200 text-left text-sm">
                                Accurate stock monitoring with low-stock alerts to keep your business running smoothly.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-left">Client CRM</h3>
                            <p className="text-gray-600 dark:text-gray-200 text-left text-sm">
                                Manage your customer relationships and contact information in one centralized place.
                            </p>
                        </div>
                    </div>
                </div>

                <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-500">
                    &copy; {new Date().getFullYear()} Biloki Management System. All rights reserved.
                </footer>
            </div>
        </>
    );
}
