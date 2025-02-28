import { People } from '@/data/people'
import { IPerson } from '@/models/people'
import { addFavorite, addPeople } from '@/redux/states'
import { AppStore } from '@/redux/store'
import { Box, Checkbox } from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Home () {

  const statePeople = useSelector((store: AppStore) => store.people )
  const selectedPeople = useSelector((store: AppStore) => store.favorites)

  const dispatch = useDispatch()

  const handleChange = (person: IPerson) => {
    const people = [...selectedPeople]
    const existing = people.find(p => p.id === person.id)
    if (existing) {
      const index = people.findIndex(p => p.id === person.id)
      people.splice(index, 1)
    } else {
      people.push(person)
    }
    dispatch(addFavorite(people))
  }

  const columns : GridColDef<(typeof People)[number]>[]= [
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      headerName: '',
      width: 20,
      renderCell: (params: GridRenderCellParams) => <>{
        <Checkbox size='small' checked={selectedPeople.some(p => p.id === params.row.id)} onChange={() => handleChange(params.row)}/>
      }</>
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'category',
      headerName: 'Category',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    }
  ]

  useEffect(() => {
    dispatch(addPeople(People))
  }, [])

  return (
    <Box component="section" sx={{ maxWidth: 1024, margin: '0 auto', padding: 1 }}>
      <DataGrid 
        rows={statePeople}
        columns={columns}
        disableColumnSelector
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
      />
    </Box>
  )
}

export default Home

