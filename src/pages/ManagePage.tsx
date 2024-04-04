import { DataGridPremium as DataGrid, GridColDef, gridClasses } from '@mui/x-data-grid-premium'

import '../assets/reset.css'
import '../assets/manage.css'
// Components
import Box from '@mui/material/Box'
import { MRSidebar } from '../widgets/MRSidebar'
import { ManageFilterButton } from '../comps/FilterButton'
import { MRButton } from '../comps/MRButton'
import { MRHeader } from '../comps/MRHeader'

// Filter

import TimelineIcon from '@mui/icons-material/Timeline'
import WysiwygIcon from '@mui/icons-material/Wysiwyg'
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined'
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck'
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'

// Date Picker
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

const columns: GridColDef[] = [
  {
    field: 'group',
    headerName: 'Группа',
    width: 120,
    headerClassName: 'table-headerName table-headerName__first',
  },
  {
    field: 'work_code',
    headerName: 'Код работы',
    width: 120,
    headerClassName: 'table-headerName',
  },
  {
    field: 'pavilion',
    headerName: 'Корпус',
    width: 100,
    headerClassName: 'table-headerName',
  },
  {
    field: 'floor',
    headerName: 'Этаж',
    width: 100,
    headerClassName: 'table-headerName',
  },
  {
    field: 'name',
    headerName: 'Наименование',
    flex: 1,
    minWidth: 378,
    headerClassName: 'table-headerName',
  },
  {
    field: 'total',
    headerName: 'Всего',
    width: 100,
    headerClassName: 'table-headerName',
  },
  {
    field: 'fact_month',
    headerName: 'Факт за месяц',
    editable: true,
    width: 170,
    headerClassName: 'table-headerName table-headerName__last',
  },
]

import { rows } from './mockManage'

export const ManagePage = () => {
  return (
    <>
      <MRSidebar />
      <section className="manage">
        <Box>
          <MRHeader
            title="Управление контрактом"
            select="City Bay1 оч./ Договор генподряда №345 от 12.04.2021"
          />
          <Box
            sx={{
              marginBottom: '32px',
            }}
          >
            <ManageFilterButton title="График освоения" startIcon={<TimelineIcon />} />
            <ManageFilterButton title="Объемы" startIcon={<WysiwygIcon />} />
            <ManageFilterButton title="Стоимость" startIcon={<PaymentsOutlinedIcon />} />
            <ManageFilterButton title="Обязательства" startIcon={<PlaylistAddCheckIcon />} />
            <ManageFilterButton
              title="Доп. соглашения"
              startIcon={<LibraryAddCheckOutlinedIcon />}
            />
            <ManageFilterButton
              title="Информация о контракте"
              startIcon={<WorkOutlineOutlinedIcon />}
            />
          </Box>

          <Box
            sx={{
              marginBottom: '24px',
              display: 'flex',
            }}
          >
            <Box
              sx={{
                width: '600px',
                display: 'flex',
                '& .MuiInputLabel-root': {
                  transform: 'translate(14px, 11px) scale(0.8);',
                },
                '& .MuiFormLabel-filled': {
                  transform: 'translate(14px, -10px) scale(0.75);',
                },
                '& .MuiSvgIcon-root': {
                  fill: '#5134a3',
                  width: '16px',
                  height: '16px',
                },
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Начало периода"
                  sx={{
                    marginRight: '16px',
                    '& .MuiInputBase-input': {
                      padding: '0px 8px',
                      height: '40px',
                    },
                  }}
                />
                <DatePicker
                  label="Конец периода"
                  sx={{
                    marginRight: '16px',
                    '& .MuiInputBase-input': {
                      padding: '0px 8px',
                      height: '40px',
                    },
                  }}
                />
              </LocalizationProvider>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '100%',
              }}
            >
              <MRButton title="Сформировать КС" />
              <MRButton title="Отправить факт за месяц" />
            </Box>
          </Box>

          <div style={{ display: 'flex', width: '100%' }}>
            <DataGrid
              autoPageSize
              pagination
              rows={rows}
              columns={columns}
              autoHeight={true}
              getRowClassName={params =>
                params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
              }
              sx={{
                backgroundColor: '#ffffff',
                border: '0px',
                boxShadow: '0 12px 16px -4px rgba(21, 21, 21, 0.05)',
                margin: '0px auto',
                [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]: {
                  outline: 'none',
                },
                [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]:
                  {
                    outline: 'none',
                  },
                '& .odd': {
                  backgroundColor: '#fafafa',
                },
                '& .MuiDataGrid-scrollbar--horizontal': {
                  backgroundColor: '#000',
                },
              }}
            />
          </div>
        </Box>
      </section>
    </>
  )
}
