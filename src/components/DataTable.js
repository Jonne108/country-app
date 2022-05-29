import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

function DataTable({ rows, columns }) {
  return (
    <div
      className="Data-table"
      style={{ height: 800, width: '100%', marginRight: '15px' }}
    >
      <DataGrid
        components={{ Toolbar: GridToolbar }}
        rows={rows}
        rowHeight={90}
        getRowId={(row) => row.index}
        columns={columns}
        className="Box-shadow"
      />
    </div>
  );
}

export default DataTable;
