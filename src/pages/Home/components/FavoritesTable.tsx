import { People } from "@/data/people"
import { IPerson } from "@/models/people"
import { removeFavorite } from "@/redux/states"
import { AppStore } from "@/redux/store"
import { Delete } from "@mui/icons-material"
import { Box, IconButton } from "@mui/material"
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid"
import { useDispatch, useSelector } from "react-redux"

function Favorites () {
  const selectedPeople = useSelector((store: AppStore) => store.favorites)

  const dispatch = useDispatch()

  const handleRemove = (person: IPerson) => {
      dispatch(removeFavorite(person))
    }

  const columns : GridColDef<(typeof People)[number]>[]= [
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      headerName: '',
      width: 20,
      renderCell: (params: GridRenderCellParams) => <>{
        <IconButton onClick={() => handleRemove(params.row)}>
          <Delete />
        </IconButton>
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
    
  return (
    <Box component="section" sx={{ maxWidth: 1024, margin: '0 auto', padding: 1 }}>
      <DataGrid 
        rows={selectedPeople}
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


export default Favorites
