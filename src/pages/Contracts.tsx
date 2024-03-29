// STYLES
import "../assets/reset.css";
import "../assets/common.css";
import "../assets/contracts.css";
// COMPONENTS
import { MRSidebar } from "../comps/MRSidebar";
import { MRFilterButton } from "../comps/MRFilterButton";
// MUI
import GridOnIcon from "@mui/icons-material/GridOn";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { rows } from "./mockContracts";
import { useMemo, useState } from "react";
import { ContractsList } from "./ContractsList";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();
  const filteredContracts = useMemo(() => {
    switch (filter) {
      case ContractsFilter.ALL:
        return rows;

      case ContractsFilter.CLOSE:
        return rows.filter((item) => item.status === "Закрыто");

      default:
        return rows;
    }
  }, [filter]);
  return (
    <>
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
              <li
                className="filter__list-item active"
                onClick={() => {
                  setFilter(ContractsFilter.ALL);
                }}
              >
                <MRFilterButton />
              </li>
              <li
                className="filter__list-item"
                onClick={() => {
                  setFilter(ContractsFilter.REVIEW);
                }}
              >
                <span>Согласование</span>
              </li>
              <li
                className="filter__list-item"
                onClick={() => {
                  setFilter(ContractsFilter.CONTROL);
                }}
              >
                <span>Контроль</span>
              </li>
              <li
                className="filter__list-item"
                onClick={() => {
                  setFilter(ContractsFilter.CLOSE);
                }}
              >
                <span>Закрыт</span>
              </li>
            </ul>
            <div className="filter__buttons">
              <button
                className="filter__buttons-item active"
                onClick={() => setView(ViewType.TABLE)}
              >
                <div className="filter__buttons-item-wrap">
                  <GridOnIcon />
                </div>
              </button>
              <button
                className="filter__buttons-item"
                onClick={() => setView(ViewType.CARD)}
              >
                <div className="filter__buttons-item-wrap">
                  <FormatListBulletedIcon />
                </div>
              </button>
            </div>
          </div>
          <ContractsList viewType={view} rows={filteredContracts} />
        </div>
        <button onClick={() => navigate("/")}>На главную</button>
      </section>

      {/* <MRButton />/ */}
    </>
  );
};
