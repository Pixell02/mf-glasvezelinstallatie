import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useAuthContext } from "./hooks/useAuthContext";
import Create from "./pages/Create/Create";
import History from "./pages/History/History";
import CostForm from "./pages/Create/CostForm/CostForm";
import Users from "./pages/Users/Users";
import WorkHours from "./pages/WorkHours/WorkHours";
import AdministratorPanel from "./pages/AdministratorPanel/AdministratorPanel";
import Login from "./pages/Login/Login";
import ToAdd from "./pages/toAdd/toAdd";
import AddPriceContent from "./pages/toAdd/AddPriceContent";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <BrowserRouter>
      {authIsReady && (
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
          <Route path="/create/:id" element={<CostForm />} />
          <Route path="/administratorPanel" element={<AdministratorPanel />} />
          <Route path="/history" element={<History />} />
          <Route path="/workHours" element={<WorkHours />} />
          <Route path="/users" element={<Users />} />
          <Route path="/toAdd" element={<ToAdd />} />
          <Route path="/toAdd/:id" element={<AddPriceContent />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
