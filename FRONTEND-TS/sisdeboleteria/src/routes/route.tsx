import BaseDashBoard from "../pages/layout/BaseDashBoard";
import Login from "../pages/Server/Login";
import ProtectedRoute from "./ProtectedRoute";
import Register from "../pages/Server/Register";
import Welcome from "../pages/Welcome";
import Index from "../pages/admin";
import CreateUser from "../pages/admin/user/create";
import UserList from "../pages/admin/user";
import ShowUser from "../pages/admin/user/show";
import EditUser from "../pages/admin/user/edit";
import DeleteUser from "../pages/admin/user/delete";
import UsuarioList from "../pages/admin/proovedor";

export const routes = [
    {
        path: '/',
        element: <Welcome />,
    },{
        path: '/Login',
        element: <Login />,
    },{
        path: '/Register',
        element: <Register />,
    },{
        path: '/admin',
        element: (
            <ProtectedRoute allowedRoles={["admin"]}>
                <Index />
            </ProtectedRoute>
        ),
    },{
        path: '/admin/users',
        element: (
            <ProtectedRoute allowedRoles={["admin"]}>
                <UserList />
            </ProtectedRoute>
        ),
    },{
        path: '/admin/users/create',
        element: (
            <ProtectedRoute allowedRoles={["admin"]}>
                <CreateUser />
            </ProtectedRoute>
        ),
    },{
        path: '/admin/users/:id',
        element: (
            <ProtectedRoute allowedRoles={["admin"]}>
                <ShowUser />
            </ProtectedRoute>
        ),
    },{
        path: '/admin/users/:id/edit',
        element: (
            <ProtectedRoute allowedRoles={["admin"]}>
                <EditUser />
            </ProtectedRoute>
        ),
    },{
        path: '/admin/users/:id/confirm-delete',
        element: (
            <ProtectedRoute allowedRoles={["admin"]}>
                <DeleteUser />
            </ProtectedRoute>
        ),
    },{
        path: '/admin/providers',
        element: (
            <ProtectedRoute allowedRoles={["admin", "proveedor"]}>
                <UsuarioList />
            </ProtectedRoute>
        ),
    },{
        path: '/dashboard',
        element: (
            <ProtectedRoute allowedRoles={["admin", "proveedor", "empleado"]}>
                <BaseDashBoard />
            </ProtectedRoute>
        ),
        children: [
            
        ]
    },
];