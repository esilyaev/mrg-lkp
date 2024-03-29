import { Grid } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { MRCard } from "../comps/MRCard";
import { ViewType } from "./Contracts";

const columns: GridColDef[] = [
  {
    field: "favorite",
    headerName: "",
    minWidth: 50,
    headerClassName: "table-header",
  },
  {
    field: "option",
    headerName: "Вид контракта",
    minWidth: 278,
    headerClassName: "table-header",
  },
  {
    field: "date",
    headerName: "Дата",
    minWidth: 140,
    headerClassName: "table-header",
  },
  {
    field: "building",
    headerName: "Проект",
    minWidth: 160,
    headerClassName: "table-header",
  },
  {
    field: "offer",
    headerName: "Предмет договора",
    minWidth: 160,
    headerClassName: "table-header",
  },
  {
    field: "name",
    headerName: "Наименование",
    minWidth: 160,
    headerClassName: "table-header",
  },
  {
    field: "number",
    headerName: "№",
    minWidth: 120,
    headerClassName: "table-header",
  },
  {
    field: "summ",
    headerName: "Сумма",
    minWidth: 160,
    headerClassName: "table-header",
  },
  {
    field: "remain",
    headerName: "Остаток",
    minWidth: 160,
    headerClassName: "table-header",
  },
  {
    field: "status",
    headerName: "Статус",
    minWidth: 140,
    headerClassName: "table-header",
    cellClassName: "status-cell",
  },
];

export const ContractsList = (props: { viewType: ViewType; rows: any[] }) => {
  if (props.viewType === ViewType.CARD) {
    return (
      <Grid container spacing={2} className="contracts__grid-list grid-list">
        <Grid item xs={4} className="grid-list__card card">
          <MRCard status="Контроль" title="Привет" subtitle="Мир" summa="1 000 000.00"/>
        </Grid>
        <Grid item xs={4} className="grid-list__card card">
          <MRCard status="Закрыт" title="Привет" subtitle="Мир" summa="1 000 000.00"/>
        </Grid>
        <Grid item xs={4} className="grid-list__card card">
          <MRCard status="Согласование" title="Привет" subtitle="Мир" summa="1 000 000.00"/>
        </Grid>
        <Grid item xs={4} className="grid-list__card card">
          <MRCard status="Контроль" title="Привет" subtitle="Мир" summa="1 000 000.00"/>
        </Grid>
        <Grid item xs={4} className="grid-list__card card">
          <MRCard status="Закрыт" title="Привет" subtitle="Мир" summa="1 000 000.00"/>
        </Grid>
        <Grid item xs={4} className="grid-list__card card">
          <MRCard status="Согласование" title="Привет" subtitle="Мир" summa="1 000 000.00"/>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <DataGrid
        sx={{
          // width: '100%',
          // background: "",
        }}
        rows={props.rows}
        columns={columns}
      />
    );
  }
};