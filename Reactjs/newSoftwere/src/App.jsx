import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './Screens/Signup/Signup';
import Login from './Screens/Login/Login';
import StudentRegistrationForm from './Components/Students/StudentRegistrationForm';
import StudentList from './Components/Students/StudentList';
import TeachersRegistrationForm from './Components/Teacher/TeachersRegistrationForm';
import TeacherList from './Components/Teacher/TeachersList';
import SubjectAdd from './Components/Subjects/SubjectAdd';
import SubjectList from './Components/Subjects/SubjectList';
import SyllabusForm from './Components/Syllabus/SyllabusForm';
import SyllabusList from './Components/Syllabus/SyllabusList';
import ClassForm from './Components/Class/ClassForm';
import ClassList from './Components/Class/ClassList';
import { AddmissionForm } from './Components/Addmission/AddmissionForm';
import FeeStructure from './Components/Fees/FeeStructure';
import FeeVoucher from './Components/Fees/FeeVoucher';
import FeeSubmission from './Components/Fees/FeeSubmission';
import ExamSchedule from './Components/Exam/ExamSchedule';
import ExamResult from './Components/Exam/ExamResult';


function App() {
  return (
    <>
     <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />

        <Route path="/student/student-registration" element={<StudentRegistrationForm />} />
        <Route path="/student/student-list" element={<StudentList />} />

        <Route path="/teachers/teacher-registration" element={<TeachersRegistrationForm  />} />
        <Route path="/teachers/teacher-list" element={<TeacherList />} />

        <Route path="/subjects/subject-add" element={<SubjectAdd />} />
        <Route path="/subjects/subject-list" element={<SubjectList />} />

        <Route path="/syllabus/syllabus-form" element={<SyllabusForm />} />
        <Route path="/syllabus/syllabus-list" element={<SyllabusList />} />


        <Route path="/class/class-form" element={<ClassForm />} />
        <Route path="/class/class-list" element={<ClassList />} />
        
        <Route path="/fees/fee-structuer" element={<FeeStructure />} />
        <Route path="/fees/fee-voucher" element={<FeeVoucher />} />
        <Route path="/fees/fee-submission" element={<FeeSubmission />} />

        <Route path="/admission/admission-form" element={<AddmissionForm />} />

        <Route path="/exam/exam-schedule" element={<ExamSchedule />} />
        <Route path="/exam/exam-result" element={<ExamResult />} />

     </Routes>
    </>
  )
}

export default App
