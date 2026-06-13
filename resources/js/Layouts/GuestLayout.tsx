import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 text-gray-900 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900 dark:text-gray-100">
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white text-gray-900 px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-gray-800 dark:text-gray-100">
                {children}
            </div>
        </div>
    );
}
