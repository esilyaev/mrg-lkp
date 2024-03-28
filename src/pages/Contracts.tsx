// STYLES
import "../assets/reset.css"
import "../assets/common.css"
import "../assets/contracts.css"
// COMPONENTS
import { MRSidebar } from "../comps/MRSidebar";
import { MRCard } from "../comps/MRCard";
import { MRFilterButton } from "../comps/MRFilterButton";
// MUI
import { Grid } from "@mui/material";
import GridOnIcon from '@mui/icons-material/GridOn';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { GridRowsProp, GridColDef, DataGrid } from "@mui/x-data-grid";


const rows: GridRowsProp = [
  {
    id: 1,
    favorite: "",
    option: "Договор Генподряда №234 ",
    date: "12 июня 2023",
    building: "City Bay оч. 2",
    offer: "Генподряда",
    name: "Оказание",
    number: "09-87/52",
    summ: "54 456 123.84 руб.",
    remain: "1 654 456 123.84 руб.",
    status: "Контроль",
  },
  {
    id: 2,
    favorite: "",
    option: "Договор Генподряда №234 ",
    date: "12 июня 2023",
    building: "City Bay оч. 2",
    offer: "Генподряда",
    name: "Оказание",
    number: "09-87/52",
    summ: "54 456 123.84 руб.",
    remain: "1 654 456 123.84 руб.",
    status: "Контроль",
  },
  {
    id: 3,
    favorite: "",
    option: "Договор Генподряда №234 ",
    date: "12 июня 2023",
    building: "City Bay оч. 2",
    offer: "Генподряда",
    name: "Оказание",
    number: "09-87/52",
    summ: "54 456 123.84 руб.",
    remain: "1 654 456 123.84 руб.",
    status: "Контроль",
  },
  {
    id: 4,
    favorite: "",
    option: "Договор Генподряда №234 ",
    date: "12 июня 2023",
    building: "City Bay оч. 2",
    offer: "Генподряда",
    name: "Оказание",
    number: "09-87/52",
    summ: "54 456 123.84 руб.",
    remain: "1 654 456 123.84 руб.",
    status: "Контроль",
  },
  {
    id: 5,
    favorite: "",
    option: "Договор Генподряда №234 ",
    date: "12 июня 2023",
    building: "City Bay оч. 2",
    offer: "Генподряда",
    name: "Оказание",
    number: "09-87/52",
    summ: "54 456 123.84 руб.",
    remain: "1 654 456 123.84 руб.",
    status: "Контроль",
  },
  {
    id: 6,
    favorite: "",
    option: "Договор Генподряда №234 ",
    date: "12 июня 2023",
    building: "City Bay оч. 2",
    offer: "Генподряда",
    name: "Оказание",
    number: "09-87/52",
    summ: "54 456 123.84 руб.",
    remain: "1 654 456 123.84 руб.",
    status: "Контроль",
  },
  {
    id: 7,
    favorite: "",
    option: "Договор Генподряда №234 ",
    date: "12 июня 2023",
    building: "City Bay оч. 2",
    offer: "Генподряда",
    name: "Оказание",
    number: "09-87/52",
    summ: "54 456 123.84 руб.",
    remain: "1 654 456 123.84 руб.",
    status: "Контроль",
  },
  {
    id: 8,
    favorite: "",
    option: "Договор Генподряда №234 ",
    date: "12 июня 2023",
    building: "City Bay оч. 2",
    offer: "Генподряда",
    name: "Оказание",
    number: "09-87/52",
    summ: "54 456 123.84 руб.",
    remain: "1 654 456 123.84 руб.",
    status: "Контроль",
  },
  {
    id: 9,
    favorite: "",
    option: "Договор Генподряда №234 ",
    date: "12 июня 2023",
    building: "City Bay оч. 2",
    offer: "Генподряда",
    name: "Оказание",
    number: "09-87/52",
    summ: "54 456 123.84 руб.",
    remain: "1 654 456 123.84 руб.",
    status: "Контроль",
  },
  {
    id: 10,
    favorite: "",
    option: "Договор Генподряда №234 ",
    date: "12 июня 2023",
    building: "City Bay оч. 2",
    offer: "Генподряда",
    name: "Оказание",
    number: "09-87/52",
    summ: "54 456 123.84 руб.",
    remain: "1 654 456 123.84 руб.",
    status: "Контроль",
  },

];

const columns: GridColDef[] = [
  {
    field: "favorite", headerName: "", minWidth: 50,
    headerClassName: 'table-header',
  },
  {
    field: "option", headerName: "Вид контракта", minWidth: 278,
    headerClassName: 'table-header',
  },
  {
    field: "date", headerName: "Дата", minWidth: 140,
    headerClassName: 'table-header',
  },
  {
    field: "building", headerName: "Проект", minWidth: 160,
    headerClassName: 'table-header',
  },
  {
    field: "offer", headerName: "Предмет договора", minWidth: 160,
    headerClassName: 'table-header',
  },
  {
    field: "name", headerName: "Наименование", minWidth: 160,
    headerClassName: 'table-header',
  },
  {
    field: "number", headerName: "№", minWidth: 120,
    headerClassName: 'table-header',
  },
  {
    field: "summ", headerName: "Сумма", minWidth: 160,
    headerClassName: 'table-header',
  },
  {
    field: "remain", headerName: "Остаток", minWidth: 160,
    headerClassName: 'table-header',
  },
  {
    field: "status", headerName: "Статус", minWidth: 140,
    headerClassName: 'table-header',
    cellClassName: 'status-cell',
  },

];


export const Contracts = () => {
  return <>

    <MRSidebar />
    <section className="contracts common-p">
      <div className="container contracts__container common-container">
        <div className="contracts__header common-header">
          <h1 className="contracts__title heading-1">Контракты</h1>
          <div className="contracts__dropdown dropdown">
            <span>Все проекты</span>
            <ArrowDropDownIcon />
          </div>
        </div>
        <div className="contracts__filter filter">
          <ul className="filter__list">
            <li className="filter__list-item active">

              <MRFilterButton />

            </li>
            <li className="filter__list-item"><span>Согласование</span></li>
            <li className="filter__list-item"><span>Контроль</span></li>
            <li className="filter__list-item"><span>Закрыт</span></li>
          </ul>
          <div className="filter__buttons">
            <button className="filter__buttons-item active" >
              <div className="filter__buttons-item-wrap">
                <GridOnIcon />
              </div>
            </button>
            <button className="filter__buttons-item">
              <div className="filter__buttons-item-wrap">
                <FormatListBulletedIcon />
              </div>
            </button>
          </div>
        </div>
        <Grid container spacing={2} className="contracts__grid-list grid-list">
          <Grid item xs={4} className="grid-list__card card">
            <MRCard />
          </Grid>
          <Grid item xs={4} className="grid-list__card card">
            <MRCard />
          </Grid>
          <Grid item xs={4} className="grid-list__card card">
            <MRCard />
          </Grid>
          <Grid item xs={4} className="grid-list__card card">
            <MRCard />
          </Grid>
          <Grid item xs={4} className="grid-list__card card">
            <MRCard />
          </Grid>
          <Grid item xs={4} className="grid-list__card card">
            <MRCard />
          </Grid>
          <Grid item xs={4} className="grid-list__card card">
            <MRCard />
          </Grid>
          <Grid item xs={4} className="grid-list__card card">
            <MRCard />
          </Grid>
          <Grid item xs={4} className="grid-list__card card">
            <MRCard />
          </Grid>
          <Grid item xs={4} className="grid-list__card card">
            <MRCard />
          </Grid>
        </Grid>


        <DataGrid sx={{
          // width: '100%',
          background: ''
        }} rows={rows} columns={columns} />


      </div>
    </section>


    {/* <MRButton />/ */}

  </>;
};
