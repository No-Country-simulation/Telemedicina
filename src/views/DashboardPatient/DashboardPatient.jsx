import AppoinmentsPatient from './Appointments/AppoinmentsPatient';
import DiagnosticsPatient from './Diagnostics/DiagnosticsPatient';
import MedicalHistory from './MedicalHistory';
import ScheduleAppoinmentsPatient from './ScheduleAppoinment/ScheduleAppoinmentsPatient';
import { TreatmentsPatient } from './Treatments/TreatmentsPatient';
import Logo from '../../assets/Logo.svg';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Patient from '../../assets/patient1.avif';

const DashboardPatient = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-5 md:px-3">
      <div className="flex flex-col md:flex-row md:justify-between px-3 md:col-span-6 ">
        {/* Logo */}
        <article className="flex justify-between pt-2 md:flex-1  md:items-center">
          <div className="flex items-center">
            <figure className="w-8">
              <img
                src={Logo}
                alt="logo"
                className="aspect-square object-fill w-full"
              />
            </figure>
            <h2 className="text-[#0086ff] font-bold">TELEMEDICINA</h2>
          </div>
          <div className="md:pr-10">
            <NotificationsIcon className="fill-[#0086ff]" />
          </div>
        </article>
        {/* photo patient */}
        <article className="bg-[#F7F7F7] w-max p-2 md:mt-2 rounded-lg flex items-center gap-3 mx-auto md:mx-px">
          {/* Avatar Patient */}
          <figure className="w-10 rounded-full shadow-xl">
            <img
              src={Patient}
              alt="paciente"
              className="w-full rounded-full aspect-square object-cover"
            />
          </figure>
          <h3>Ana Maria</h3>
        </article>
      </div>
      <h2 className="md:text-4xl mx-auto md:mx-px md:pl-3 py-4 md:col-span-6">
        Bienvenida <span className="text-btns">Ana Maria!</span>
      </h2>

      {/* ---------------- */}
      <AppoinmentsPatient />
      <MedicalHistory />
      <ScheduleAppoinmentsPatient />
      <TreatmentsPatient />
      <DiagnosticsPatient />
    </section>
  );
};

export default DashboardPatient;
