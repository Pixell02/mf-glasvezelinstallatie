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
import CreateUser from "./pages/createUser/CreateUser";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <BrowserRouter>
      {authIsReady && (
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/*" element={<Navigate to="/login" />} />
          <Route path="/createUser/:id" element={<CreateUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={user ? <Create /> : <Login />} />
          <Route path="/create/:id" element={user ? <CostForm /> :  <Login />} />
          {user && (user.uid === "4W9EZuIVmGX67mWx1w48G4ASTq32" || user.uid === "UmZ0GSiCgnNvrJQkeL7xpLgJhYJ3" ) && (
            <>
            <Route path="/administratorPanel" element={ <AdministratorPanel />} />
          <Route path="/toAdd" element={<ToAdd />} />
          <Route path="/users" element={<Users />} />
          </>
          )}
          
          <Route path="/history" element={user ? <History /> : <Login />} />
          <Route path="/workHours" element={user ? <WorkHours /> : <Login />} />
          
          
          <Route path="/toAdd/:id" element={<AddPriceContent />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
