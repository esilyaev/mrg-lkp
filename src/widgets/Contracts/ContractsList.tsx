import { Box, Grid } from '@mui/material'
// import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { DataGridPremium as DataGrid, GridColDef, gridClasses } from '@mui/x-data-grid-premium'
// import { DataGridPro, GridActionsCellItem } from '@mui/x-data-grid-pro';
import { MRCard } from 'widgets/Contracts/MRCard'
import { ViewType } from '../../pages/ContractsPage'

const CellBackground = {
  Согласование: '#EFEEFF',
  Контроль: '#E3FBE3',
  Закрыт: '#FCE4E4',
}
const CellColor = {
  Согласование: '#6E46DC',
  Контроль: '#136C13',
  Закрыт: '#A51818',
}

const columns: GridColDef[] = [
  {
    field: 'favorite',
    headerName: '',
    minWidth: 50,
    headerClassName: 'table-header',
  },
  {
    field: 'option',
    headerName: 'Вид контракта',
    minWidth: 278,
    headerClassName: 'table-header',
  },
  {
    field: 'date',
    headerName: 'Дата',
    minWidth: 140,
    headerClassName: 'table-header',
  },
  {
    field: 'building',
    headerName: 'Проект',
    minWidth: 160,
    headerClassName: 'table-header',
  },
  {
    field: 'offer',
    headerName: 'Предмет договора',
    minWidth: 160,
    headerClassName: 'table-header',
  },
  {
    field: 'name',
    headerName: 'Наименование',
    minWidth: 160,
    headerClassName: 'table-header',
  },
  {
    field: 'number',
    headerName: '№',
    minWidth: 120,
    headerClassName: 'table-header',
  },
  {
    field: 'summ',
    headerName: 'Сумма',
    minWidth: 160,
    headerClassName: 'table-header',
  },
  {
    field: 'remain',
    headerName: 'Остаток',
    minWidth: 160,
    headerClassName: 'table-header',
  },
  {
    field: 'status',
    headerName: 'Статус',
    minWidth: 140,
    headerClassName: 'table-header',
    renderCell: params => {
      return (
        <Box
          sx={{
            padding: '8px 12px',
            display: 'inline',
            background: CellBackground[params.value],
            color: CellColor[params.value],
            borderRadius: '100px',
          }}
        >
          {params.value}
        </Box>
      )
    },
  },
]

const flag = false

export const ContractsList = (props: { viewType: ViewType; rows: any[] }) => {
  if (props.viewType === ViewType.CARD) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <MRCard
            status="Контроль"
            title="Slava 4 оч."
            subtitle="Договор генподряда №111"
            summa="1 000 000.00"
            remain="0"
            date="12 июня 2023"
          />
        </Grid>
        <Grid item xs={4}>
          <MRCard
            status="Закрыт"
            title="Slava 1 оч."
            subtitle="Договор генподряда №222"
            summa="1 000 000.00"
            remain="0"
            date="12 июня 2023"
          />
        </Grid>
        <Grid item xs={4}>
          <MRCard
            status="Согласование"
            title="Slava 3 оч РЕД"
            subtitle="Договор генподряда №333"
            summa="1 000 000.00"
            remain="0"
            date="12 июня 2023"
          />
        </Grid>
        <Grid item xs={4}>
          <MRCard
            status="Контроль"
            title="Slava 6 оч."
            subtitle="Договор генподряда №444"
            summa="1 000 000.00"
            remain="0"
            date="12 июня 2023"
          />
        </Grid>
        <Grid item xs={4}>
          <MRCard
            status="Закрыт"
            title="Slava 8 оч."
            subtitle="Договор генподряда №555"
            summa="1 000 000.00"
            remain="0"
            date="12 июня 2023"
          />
        </Grid>
        <Grid item xs={4}>
          <MRCard
            status="Согласование"
            title="Slava 10 оч."
            subtitle="Договор генподряда №777"
            summa="1 000 000.00"
            remain="0"
            date="12 июня 2023"
          />
        </Grid>
      </Grid>
    )
  } else {
    return (
      <DataGrid
        sx={{
          [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]: {
            outline: 'none',
          },
          [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]: {
            outline: 'none',
          },
          '& .odd': {
            backgroundColor: '#fafafa',
          },
          '& .MuiDataGrid-scrollbar--horizontal': {
            backgroundColor: '#000',
          },
          '& .table-header': {
            backgroundColor: '#EAEBED',
          },
          '& .MuiDataGrid-cell': {
            background: '#fff',
          },
        }}
        rows={props.rows}
        columns={columns}
        initialState={{ pinnedColumns: { right: ['status'] } }}
      />
    )
  }
}
