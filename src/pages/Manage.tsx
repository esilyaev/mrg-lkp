import { DataGrid, GridColDef, GridRowsProp, gridClasses } from '@mui/x-data-grid'

import '../assets/reset.css'
import '../assets/manage.css'
import '../assets/fonts.css'
// Filter
import Button from '@mui/material/Button';
import TimelineIcon from '@mui/icons-material/Timeline';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
// Filter

// Date Picker
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// Date Picker

// import { MRButton } from '../comps/MRButton.tsx';


const columns: GridColDef[] = [
	{ field: 'group', headerName: 'Группа', width: 120, headerClassName: 'table-headerName table-headerName__first' },
	{ field: 'work_code', headerName: 'Код работы', width: 120, headerClassName: 'table-headerName' },
	{ field: 'pavilion', headerName: 'Корпус', width: 100, headerClassName: 'table-headerName' },
	{ field: 'floor', headerName: 'Этаж', width: 100, headerClassName: 'table-headerName' },
	{ field: 'name', headerName: 'Наименование', width: 378, headerClassName: 'table-headerName' },
	{ field: 'total', headerName: 'Всего', width: 100, headerClassName: 'table-headerName' },
	{ field: 'fact_month', headerName: 'Факт за месяц', editable: true, width: 170, headerClassName: 'table-headerName table-headerName__last', },
];

const rows: GridRowsProp = [
	{ id: 1, group: ' ', work_code: '3.2.2.1', pavilion: '10', floor: '5 этаж', name: 'Устройство монолитных стен из бетона марки В40', total: '100', fact_month: '...' },
	{ id: 2, group: ' ', work_code: '3.2.2.1', pavilion: '10', floor: '5 этаж', name: 'Устройство монолитных стен из бетона марки В40', total: '100', fact_month: '...' },
	{ id: 3, group: ' ', work_code: '3.2.2.1', pavilion: '10', floor: '5 этаж', name: 'Устройство монолитных стен из бетона марки В40', total: '100', fact_month: '...' },
	{ id: 4, group: ' ', work_code: '3.2.2.1', pavilion: '10', floor: '5 этаж', name: 'Устройство монолитных стен из бетона марки В40', total: '100', fact_month: '...' },
	{ id: 5, group: ' ', work_code: '3.2.2.1', pavilion: '10', floor: '5 этаж', name: 'Устройство монолитных стен из бетона марки В40', total: '100', fact_month: '...' },
	{ id: 6, group: ' ', work_code: '3.2.2.1', pavilion: '10', floor: '5 этаж', name: 'Устройство монолитных стен из бетона марки В40', total: '100', fact_month: '...' },
	{ id: 7, group: ' ', work_code: '3.2.2.1', pavilion: '10', floor: '5 этаж', name: 'Устройство монолитных стен из бетона марки В40', total: '100', fact_month: '...' },
];

export const Manage = () => {
return (
<>
<section className='manage'>
	<div className="container manage__container">
		{/* <div className="manage__header">
			<div className="title">Управление контрактом</div>
		</div> */}
		
		<div className="manage__filter-panel">

			
			<Button className='manage__filter-button'
			sx={{
				background: "white",
				fontSize: "13px",
				padding: "6px 12px",
				textTransform: "none",
				margin: "0px 8px 0px 0px",
				borderColor: "none",
				borderRadius: "4px",
				color: '#2A292E',
				boxShadow: "none",
				'&:hover': {
					backgroundColor: '#e4eaff',
					boxShadow: 'none',
				},
				'&:active': {
					backgroundColor: '#2a292e',
					boxShadow: 'none',
					color: '#FFFFFF',
				},
			  }}
			  startIcon={
				<TimelineIcon
				  sx={{
					color: "primary.main",
					width: '16px',
					height: '16px'
				  }}
				/>
			  }
			 variant="contained" >
				График освоения
			</Button>

			<Button
			sx={{
				background: "white",
				fontSize: "13px",
				padding: "6px 12px",
				textTransform: "none",
				margin: "0px 8px 0px 0px",
				borderColor: "none",
				borderRadius: "4px",
				color: '#2A292E',
				boxShadow: "none",
				'&:hover': {
					backgroundColor: '#e4eaff',
					boxShadow: 'none',
				},
				'&:active': {
					backgroundColor: '#2a292e',
					boxShadow: 'none',
					color: '#FFFFFF',
				},
			  }}
			  

			  startIcon={
				<WysiwygIcon
				  sx={{
					color: "primary.main",
					width: '16px',
					height: '16px'
				  }}
				/>
			  }
			 variant="contained" >
				Объемы
			</Button>

			<Button
			sx={{
				background: "white",
				fontSize: "13px",
				padding: "6px 12px",
				textTransform: "none",
				margin: "0px 8px 0px 0px",
				borderColor: "none",
				borderRadius: "4px",
				color: '#2A292E',
				boxShadow: "none",
				'&:hover': {
					backgroundColor: '#e4eaff',
					boxShadow: 'none',
				},
				'&:active': {
					backgroundColor: '#2a292e',
					boxShadow: 'none',
					color: '#FFFFFF',
				},
			  }}
			  

			  startIcon={
				<PaymentsOutlinedIcon
				  sx={{
					color: "primary.main",
					width: '16px',
					height: '16px'
				  }}
				/>
			  }
			 variant="contained" >
				Стоимость
			</Button>

			<Button
			sx={{
				background: "white",
				fontSize: "13px",
				padding: "6px 12px",
				textTransform: "none",
				margin: "0px 8px 0px 0px",
				borderColor: "none",
				borderRadius: "4px",
				color: '#2A292E',
				boxShadow: "none",
				'&:hover': {
					backgroundColor: '#e4eaff',
					boxShadow: 'none',
				},
				'&:active': {
					backgroundColor: '#2a292e',
					boxShadow: 'none',
					color: '#FFFFFF',
				},
			  }}
			  

			  startIcon={
				<PlaylistAddCheckIcon
				  sx={{
					color: "primary.main",
					width: '16px',
					height: '16px'
				  }}
				/>
			  }
			 variant="contained" >
				Обязательства
			</Button>

			<Button
			sx={{
				background: "white",
				fontSize: "13px",
				padding: "6px 12px",
				textTransform: "none",
				margin: "0px 8px 0px 0px",
				borderColor: "none",
				borderRadius: "4px",
				color: '#2A292E',
				boxShadow: "none",
				'&:hover': {
					backgroundColor: '#e4eaff',
					boxShadow: 'none',
				},
				'&:active': {
					backgroundColor: '#2a292e',
					boxShadow: 'none',
					color: '#FFFFFF',
				},
			  }}
			  

			  startIcon={
				<LibraryAddCheckOutlinedIcon
				  sx={{
					color: "primary.main",
					width: '16px',
					height: '16px'
				  }}
				/>
			  }
			 variant="contained" >
				Доп. соглашения
			</Button>

			<Button
			sx={{
				background: "white",
				fontSize: "13px",
				padding: "6px 12px",
				textTransform: "none",
				margin: "0px 8px 0px 0px",
				borderColor: "none",
				borderRadius: "4px",
				color: '#2A292E',
				boxShadow: "none",
				'&:hover': {
					backgroundColor: '#e4eaff',
					boxShadow: 'none',
				},
				'&:active': {
					backgroundColor: '#2a292e',
					boxShadow: 'none',
					color: '#FFFFFF',
				},
			  }}
			  

			  startIcon={
				<WorkOutlineOutlinedIcon
				  sx={{
					color: "primary.main",
					width: '16px',
					height: '16px'
				  }}
				/>
			  }
			 variant="contained" >
				Информация о контракте
			</Button>
		</div>
		<div className="manage__datepicker_contaienr">
			<div className="manage__datepicker">
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DatePicker label="Начало периода"
					sx={{
						marginRight: "16px",
						'& .MuiInputBase-input': {
							padding: '0px 8px',
							height: '40px'
						},
					}}
					/>
					<DatePicker label="Конец периода"
					sx={{
						marginRight: "16px",
						'& .MuiInputBase-input': {
							padding: '0px 8px',
							height: '40px'
						},
						
						'& .MuiInputLabel-root': {
							
						},
					}} />
				</LocalizationProvider>
			</div>
			<div className="manage__buttom_container">
				<Button variant="contained"
				sx={{
					marginRight: "8px",
					borderRadius: "100px",
					fontSize: "14px",
					textTransform: "none",
					padding: "10px 24px",
					height: "40px"

				}}>
					Сформировать КС
				</Button>
				<Button variant="contained"
				sx={{
					borderRadius: "100px",
					fontSize: "14px",
					textTransform: "none",
					padding: "10px 24px",
					height: "40px"

				}}>
					Отправить факт за месяц
				</Button>
			</div>
		</div>

		<div style={{ height: 400, width: '100%' }}>
			<DataGrid className='DataGridStyle' rows={rows} columns={columns}
			getRowClassName={(params) =>
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
);
};
