import { Button } from "@mui/material";
import { GridRowsProp, GridColDef, DataGrid } from "@mui/x-data-grid";
import { PropsComp } from "./PropsComp";

const rows: GridRowsProp = [
  {
    id: 1,
    group: "Hello",
    code: "World",
    building: "Корпус 1",
    level: "Этаж 10",
    name: "Устройство монолитных стен из бетона марки В40",
  },
];

const columns: GridColDef[] = [
  { field: "group", headerName: "Группа", width: 150 },
  { field: "code", headerName: "Код работы", width: 150 },
  { field: "building", headerName: "Корпус", width: 150 },
  { field: "level", headerName: "Этаж", width: 150 },
  { field: "name", headerName: "Наименование", width: 150 },
];

export const Manage = () => {
  return (
    <>
      <div style={{ height: 300, width: "1200px", margin: "0 auto" }}>
        <Button>Hello</Button>
        <Button variant="contained">World</Button>
        <DataGrid rows={rows} columns={columns} />
      </div>
      <h1>Hello </h1>
      <PropsComp title="Привет из пропсов" />
      <PropsComp title="dfghjsdfghsajfs" />
      <PropsComp title="dsfdfsdf" />
    </>
  );
};
