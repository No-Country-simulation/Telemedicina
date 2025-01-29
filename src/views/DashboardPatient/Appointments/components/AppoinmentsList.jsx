import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Chip } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Typography } from "@mui/material";

import {
  DataGrid,
  GridToolbarQuickFilter,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

const rows = [
  {
    id: 1,
    Medico: {
      nombre: "Harry Potter",
      src: "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      ocupacion: "Cirujano",
    },
    Estado: "Activa",
    FechaHora: {
      fecha: "10-31-24",
      hora: "13:00",
    },
    Acciones: "World",
  },
  {
    id: 2,
    Medico: {
      nombre: "Harry Potter",
      src: "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      ocupacion: "Cirujano",
    },
    Estado: "World",
    FechaHora: {
      fecha: "10-31-24",
      hora: "13:00",
    },
    Acciones: "World",
  },
  {
    id: 3,
    Medico: {
      nombre: "Harry Potter",
      src: "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      ocupacion: "Cirujano",
    },
    Estado: "World",
    FechaHora: {
      fecha: "10-31-24",
      hora: "13:00",
    },
    Acciones: "World",
  },
];

const columns = [
  {
    field: "Medico",
    headerName: "Medico",
    flex:1,
    editable: false,
    headerAlign: "center",
    renderCell: (user) => {
      return (
        <>
          <div className="flex justify-around items-center">
            <Avatar alt={user.value.name} src={user.value.src} />
            <p>
              {user.value.nombre} | <span>{user.value.ocupacion}</span>
            </p>
          </div>
        </>
      );
    },
  },
  {
    field: "Estado",
    headerName: "Status",
    flex:1,
    editable: false,
    headerAlign: "center",
    renderCell: (Estado) => {
      return (
        <>
          {Estado.value === "Activa" ? (
            <div className="w-fit my-0 mx-auto">
              <Chip
                icon={
                  <CircleIcon fontSize="small" style={{ color: "#9D1C1C" }} />
                }
                label="Activa"
                sx={{ background: "#F4D2D2", color: "#9D1C1C" }}
              />
            </div>
          ) : (
            <div className="w-fit my-0 mx-auto">
              <Chip
                icon={
                  <CircleIcon fontSize="small" style={{ color: "#10B015" }} />
                }
                label="Historial"
                sx={{ background: "#BBFFAD", color: "#10B015" }}
              />
            </div>
          )}
        </>
      );
    },
  },
  {
    field: "FechaHora",
    headerName: "Fecha y Hora",
    flex:1,
    editable: false,
    headerAlign: "center",
    renderCell: (fh) => {
      return (
        <>
          <p className="">
            <span>{FormatoFecha(fh.value.fecha)}</span> |
            <span>{fh.value.hora}</span>
          </p>
        </>
      );
    },
  },
  {
    field: "Acciones",
    headerName: "Acciones",
    flex:1,
    editable: false,
    headerAlign: "center",
    renderCell: () => {
      return (
        <>
          <div className="flex items-center justify-center h-full">
            <LabelImportantIcon
              fontSize="large"
              onClick={Reprogramar}
              style={{ cursor: "pointer" }}
            />
            <DateRangeIcon
              fontSize="large"
              onClick={Cancelar}
              style={{ cursor: "pointer" }}
            />
          </div>
        </>
      );
    },
  },
];
function FormatoFecha(value) {
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  const fecha = value.split("-");
  const mes = meses[fecha[0]];
  const fechaFinal = `${fecha[1]} ${mes}, ${fecha[2]}`;
  return fechaFinal;
}
function Reprogramar() {
  console.log("Reprogramar");
}
function Cancelar() {
  console.log("Cancelar");
}
function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 0.5,
        background: "transparent",
      }}
    >
      <Typography variant="h4" component="h1" color="white">
        Citas
      </Typography>
      <Box
        sx={{
          marginLeft: "auto",
          background: "transparent",
          display: "flex",
          alignItems: "center",
          gap: "2%",
        }}
      >
        <GridToolbarQuickFilter
          placeholder="Búsqueda"
          sx={{
            border: "none ",
            background: "#E5E5E5",
            borderRadius: "10px",
            padding: "6px 12px",
            "& *::before, & *::after": {
              content: "none",
              display:"none !important"
            },
          }}
        />
        <Box sx={{ background: "white", borderRadius: "20px", padding:.5 }}>
          <GridToolbarFilterButton />
        </Box>
      </Box>
    </Box>
  );
}
function AppoinmentsList() {
  return (
    <div
      style={{
        height: "fit-content",
        width: "100%",
        padding: "3%",
        background: "linear-gradient(80.17deg, #76BFE5 7.38%, #9CD2EE 92.62%)",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnSelector
        disableDensitySelector
        hideFooterSelectedRowCount
        disableColumnMenu
        sortable
        slots={{ toolbar: QuickSearchToolbar }}
        pageSize={5}
        rowsPerPageOptions={[5]}
        sx={{
          "& .MuiDataGrid-row": {
            backgroundColor: "white",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "white",
          },
          "& .css-1bgckiu-MuiDataGrid-main": {
            borderRadius: "10px 10px 0 0",
          },
          border: "none",
          borderRadius: "10px",
          width: "100%"
        }}
      />
    </div>
  );
}
export default AppoinmentsList;
