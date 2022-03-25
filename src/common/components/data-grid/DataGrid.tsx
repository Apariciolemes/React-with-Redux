import { DataGrid } from '@mui/x-data-grid';

export function DataGridComponent({ rows, columns, pageSize }: any) {

    console.log(rows);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                getRowId={row => row.id}
                rows={rows}
                columns={columns}
                pageSize={pageSize}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>

    )

}