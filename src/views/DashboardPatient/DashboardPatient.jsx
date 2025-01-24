import AppoinmentsPatient from './Appointments/AppoinmentsPatient';
import DiagnosticsPatient from './Diagnostics/DiagnosticsPatient';
import MedicalHistory from './MedicalHistory';
import ScheduleAppoinmentsPatient from './ScheduleAppoinment/ScheduleAppoinmentsPatient';
import { TreatmentsPatient } from './Treatments/TreatmentsPatient';

const DashboardPatient = () => {
  return (
    <div>
      DASHBOARD PACIENTE:
      <hr />
      <AppoinmentsPatient />
      <MedicalHistory />
      <ScheduleAppoinmentsPatient />
      <TreatmentsPatient />
      <DiagnosticsPatient />
    </div>
  );
};

export default DashboardPatient;
