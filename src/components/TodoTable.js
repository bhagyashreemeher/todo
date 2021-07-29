import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Avatar from '@material-ui/core/Avatar';
import { Container } from '@material-ui/core';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'first_name',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'last_name',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'email',
    headerName: 'Email',
    description: 'This column has a value getter and is not sortable.',
    width: 260
  },
  {
    field: 'avatar',
    headerName: 'Avatar',
    width: 150,
    renderCell: (params) => (
      // <img src={params.value} alt='' />
      <Avatar alt="" src={params.value} />
    ),
  }
];

export default function DataTable() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);

    fetch('https://reqres.in/api/users?page=' + page)
      .then(async res => {
        console.log(res);
        const result = await res.json();
        const val = [...result.data];
        setData(val);
        setConfig(result);
      })
      .catch(error => {
        console.log(error)
      })
    setLoading(false);

  }, [page])

  const onPageChanged = (data) => {
    setLoading(true);
    setPage(data.page + 1);
  }

  return (
    <Container className="table" maxWidth="lg">
      <div>
        {!loading &&
          <DataGrid
            autoHeight={true}
            rows={data}
            page={page - 1}
            paginationMode='server'
            columns={columns}
            rowCount={config.total}
            pageSize={config.per_page}
            onPageChange={onPageChanged}
            disableSelectionOnClick
          />
        }

      </div>
    </Container>
  );
}
