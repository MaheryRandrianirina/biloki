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
import { Plus, Edit, Trash2, User } from 'lucide-react';

interface Client {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string | null;
}

interface Props {
    clients: Client[];
}

export default function Index({ clients }: Props) {
    const { flash } = usePage().props as any;

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Clients Management
                    </h2>
                    <Button asChild>
                        <Link href={route('admin.clients.create')}>
                            <Plus className="mr-2 h-4 w-4" /> Add Client
                        </Link>
                    </Button>
                </div>
            }
        >
            <Head title="Clients" />

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
                                        <TableHead>Name</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Phone</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {clients.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={4} className="text-center py-10">
                                                No clients found.
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        clients.map((client) => (
                                            <TableRow key={client.id}>
                                                <TableCell className="font-medium">
                                                    <div className="flex items-center gap-2">
                                                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center dark:bg-gray-700">
                                                            <User className="h-4 w-4 text-gray-500" />
                                                        </div>
                                                        {client.first_name} {client.last_name}
                                                    </div>
                                                </TableCell>
                                                <TableCell>{client.email}</TableCell>
                                                <TableCell>{client.phone || '-'}</TableCell>
                                                <TableCell className="text-right">
                                                    <div className="flex justify-end gap-2">
                                                        <Button variant="outline" size="sm" asChild>
                                                            <Link href={route('admin.clients.edit', client.id)}>
                                                                <Edit className="h-4 w-4" />
                                                            </Link>
                                                        </Button>
                                                        <Button variant="destructive" size="sm" asChild>
                                                            <Link 
                                                                href={route('admin.clients.destroy', client.id)} 
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
