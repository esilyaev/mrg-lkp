// STYLES
import "../assets/reset.css";
import "../assets/common.css";
import "../assets/contracts.css";
// COMPONENTS
import { MRSidebar } from "../comps/MRSidebar";
import { MRFilterButton } from "../comps/MRFilterButton";
// MUI
import Box from '@mui/material/Box';
import GridOnIcon from "@mui/icons-material/GridOn";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { rows } from "./mockContracts";
import { useMemo, useState } from "react";
import { ContractsList } from "./ContractsList";
// import { useNavigate } from "react-router";

export enum ViewType {
  CARD,
  TABLE,
}

enum ContractsFilter {
  ALL,
  REVIEW,
  CONTROL,
  CLOSE,
}

export const Contracts = () => {
  const [filter, setFilter] = useState(ContractsFilter.CLOSE);
  const [view, setView] = useState(ViewType.TABLE);
  // const navigate = useNavigate();
  const filteredContracts = useMemo(() => {
    switch (filter) {
      case ContractsFilter.ALL:
        return rows;

      case ContractsFilter.CLOSE:
        return rows.filter((item) => item.status === "Закрыт");

      case ContractsFilter.REVIEW:
        return rows.filter((item) => item.status === "Согласование");

      case ContractsFilter.CONTROL:
        return rows.filter((item) => item.status === "Контроль");

      default:
        return rows;
    }
  }, [filter]);
  return (
    <>
      <MRSidebar />
      <section className="contracts common-p">
        <div className="container contracts__container common-container">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '32px',
            }}>
            <h1 className="contracts__title heading-1">Контракты</h1>
            <div className="contracts__dropdown dropdown">
              <span>Все проекты</span>
              <ArrowDropDownIcon />
            </div>
          </Box>

          <Box
            sx={{

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '24px',
            }}
          >

            <Box
              sx={{
                display: 'flex',
                background: '#fff',
                borderRadius: '6px',
              }}
            >
              <li
                className="filter__list-item active"
                onClick={() => {
                  setFilter(ContractsFilter.ALL);
                }}
              >
                <MRFilterButton name="Все проекты" />
              </li>
              <li
                className="filter__list-item"
                onClick={() => {
                  setFilter(ContractsFilter.REVIEW);
                }}
              >
                <MRFilterButton name="Согласование" />
              </li>
              <li
                className="filter__list-item"
                onClick={() => {
                  setFilter(ContractsFilter.CONTROL);
                }}
              >
                <MRFilterButton name="Контроль" />
              </li>
              <li
                className="filter__list-item"
                onClick={() => {
                  setFilter(ContractsFilter.CLOSE);
                }}
              >
                <MRFilterButton name="Закрыт" />

              </li>
            </Box>

            <div className="filter__buttons">
              <button
                className="filter__buttons-item active"
                onClick={() => setView(ViewType.CARD)}

              >
                <Box>
                  <GridOnIcon />
                </Box>

              </button>
              <button
                className="filter__buttons-item"
                onClick={() => setView(ViewType.TABLE)}

              >

                <Box>
                  <FormatListBulletedIcon />
                </Box>


              </button>
            </div>

          </Box>

          <ContractsList viewType={view} rows={filteredContracts} />
        </div>
        {/* <button onClick={() => navigate("/")}>На главную</button> */}
      </section>

      {/* <MRButton />/ */}
    </>
  );
};