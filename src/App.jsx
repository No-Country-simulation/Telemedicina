import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './auth/LoginPage';
import { RegisterPages } from './auth/RegisterPages';
import LayoutLadingPage from './layouts/LayoutLadingPage';
import Home from './views/Home/Home';
import LayoutDashboard from './layouts/LayoutDashboard/LayoutDashboard';
import DashboardPatient from './views/DashboardPatient/DashboardPatient';
import AppoinmentsList from './views/DashboardPatient/Appointments/components/AppoinmentsList';
import { TableTreatmentsPatient } from './views/DashboardPatient/Treatments/components/TableTreatmentsPatient';
import DiagnosticsTablePatient from './views/DashboardPatient/Diagnostics/components/DiagnosticsTablePatient';
import CreaterAppoinmentsPatient from './views/DashboardPatient/ScheduleAppoinment/components/CreaterAppoinmentsPatient';
import StateAppoinmentsPatient from './views/DashboardPatient/ScheduleAppoinment/components/StateAppoinmentsPatient';
import { ContraSenaPage } from './auth/ContraSenaPage';

export const App = () => {
  return (
    <Routes>
      {/* Rutas de la Landing Page */}
      <Route path="/" element={<LayoutLadingPage />}>
        <Route index element={<Home />} />
      </Route>

      {/* Rutas de Autenticacion */}
      <Route path="/auth/contrasena" element={<ContraSenaPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register/" element={<RegisterPages />} />

      {/* Rutas del Dashboard Paciente */}
      <Route path="/dashboard-paciente" element={<LayoutDashboard />}>
        <Route index element={<DashboardPatient />} />
        <Route path="citas-programadas" element={<AppoinmentsList />} />
        <Route
          path="historial-medico/tratamientos"
          element={<TableTreatmentsPatient />}
        />
        <Route
          path="historial-medico/diagnosticos"
          element={<DiagnosticsTablePatient />}
        />
        <Route path="programar-cita" element={<CreaterAppoinmentsPatient />} />
        <Route
          path="programar-cita/estado-cita"
          element={<StateAppoinmentsPatient />}
        />
      </Route>
    </Routes>
  );
};
