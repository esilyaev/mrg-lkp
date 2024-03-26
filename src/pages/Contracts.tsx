// import { MRButton } from "../comps/MRButton";
import "../assets/reset.css"
import "../assets/common.css"
import "../assets/contracts.css"

import { Grid } from "@mui/material";
// import AcUnitIcon from "@mui/icons-material/AcUnit";
import { MRSidebar } from "../comps/MRSidebar";
import { MRCard } from "../comps/MRCard";
import { MRFilterButton } from "../comps/MRFilterButton";
import GridOnIcon from '@mui/icons-material/GridOn';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



export const Contracts = () => <>

  <MRSidebar />
  <section className="contracts">
    <div className="container contracts__container">
      <div className="contracts__header">
        <h1 className="contracts__title heading-1">Контракты</h1>
        <div className="contracts__dropdown dropdown">
          <span>Все проекты</span>
          <ArrowDropDownIcon/>
        </div>
      </div>
      <div className="contracts__filter filter">
        <ul className="filter__list">
          <li className="filter__list-item active">

            <MRFilterButton/>

          </li>
          <li className="filter__list-item"><span>Согласование</span></li>
          <li className="filter__list-item"><span>Контроль</span></li>
          <li className="filter__list-item"><span>Закрыт</span></li>
        </ul>
        <div className="filter__buttons">
          <button className="filter__buttons-item active">

            <GridOnIcon />

          </button>
          <button className="filter__buttons-item">

            <FormatListBulletedIcon />

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


    </div>
  </section>


  {/* <MRButton />/ */}

</>;
