import { DataGridPremium as DataGrid, GridColDef, gridClasses } from '@mui/x-data-grid-premium'

import '../assets/reset.css'
import '../assets/manage.css'
// Components
import { MRSidebar } from '../widgets/MRSidebar'
import { ManageFilterButton } from '../comps/FilterButton'
import { MRButton } from '../comps/MRButton'

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
    width: 378,
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

// const rows: GridRowsProp = [
//   {
//     id: 1,
//     group: " ",
//     work_code: "3.2.2.1",
//     pavilion: "10",
//     floor: "5 этаж",
//     name: "Устройство монолитных стен из бетона марки В40",
//     total: "100",
//     fact_month: "...",
//   },
//   {
//     id: 2,
//     group: " ",
//     work_code: "3.2.2.1",
//     pavilion: "10",
//     floor: "5 этаж",
//     name: "Устройство монолитных стен из бетона марки В40",
//     total: "100",
//     fact_month: "...",
//   },
//   {
//     id: 3,
//     group: " ",
//     work_code: "3.2.2.1",
//     pavilion: "10",
//     floor: "5 этаж",
//     name: "Устройство монолитных стен из бетона марки В40",
//     total: "100",
//     fact_month: "...",
//   },
//   {
//     id: 4,
//     group: " ",
//     work_code: "3.2.2.1",
//     pavilion: "10",
//     floor: "5 этаж",
//     name: "Устройство монолитных стен из бетона марки В40",
//     total: "100",
//     fact_month: "...",
//   },
//   {
//     id: 5,
//     group: " ",
//     work_code: "3.2.2.1",
//     pavilion: "10",
//     floor: "5 этаж",
//     name: "Устройство монолитных стен из бетона марки В40",
//     total: "100",
//     fact_month: "...",
//   },
//   {
//     id: 6,
//     group: " ",
//     work_code: "3.2.2.1",
//     pavilion: "10",
//     floor: "5 этаж",
//     name: "Устройство монолитных стен из бетона марки В40",
//     total: "100",
//     fact_month: "...",
//   },
//   {
//     id: 7,
//     group: " ",
//     work_code: "3.2.2.1",
//     pavilion: "10",
//     floor: "5 этаж",
//     name: "Устройство монолитных стен из бетона марки В40",
//     total: "100",
//     fact_month: "...",
//   },
// ];
import { rows } from './mockManage'

export const ManagePage = () => {
  return (
    <>
      <MRSidebar />
      <section className="manage">
        <div className="container manage__container">
          <div className="manage__filter-panel">
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
          </div>

          <div className="manage__datepicker_contaienr">
            <div className="manage__datepicker">
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
            </div>
            <div className="manage__buttom_container">
              <MRButton title="Сформировать КС" />
              <MRButton title="Отправить факт за месяц" />
            </div>
          </div>

          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              className="DataGridStyle"
              rows={rows}
              columns={columns}
              getRowClassName={params =>
                params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
              }
              sx={{
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
        </div>
      </section>
    </>
  )
}
