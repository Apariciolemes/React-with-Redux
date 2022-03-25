import { useDispatch, useSelector } from 'react-redux';
import { DataGridComponent } from '../common/components/data-grid/DataGrid';
import { addUsers, StateUsers } from '../store/features/users';

export function Users() {
    const dispatch = useDispatch()
    const rowsUsers = useSelector((state: any) => state.users.users)

    function handleAddUser() {
        dispatch(addUsers({
            id: rowsUsers.length + 1,
            name: 'Neto',
            email: 'joao@gmail.com',
            age: 24
        }))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Nome', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        {
            field: 'age',
            headerName: 'Idade',
            type: 'number',
            width: 90,
        },
    ];

    console.log("rowsUsers ->", rowsUsers);


    return (
        <div className="users">
            <div className="users__title">
                Lista de usuários
            </div>

            <DataGridComponent
                rows={rowsUsers}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div >
    )
}