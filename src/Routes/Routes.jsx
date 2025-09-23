import { Routes, Route } from "react-router-dom";
import Main from "../components/Main/Main";
import AddToDo from "../components/AddToDo/AddToDo";
import UpdateToDo from "../components/UpdateToDo/UpdateToDo";
import ListToDo from "../components/ListToDo/ListToDo";
import ShowToDo from "../components/ShowToDo/ShowToDo";
import NotFound from "../components/NotFound/NotFound";
const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="list" element={<ListToDo />} />
      <Route path="addToDo" element={<AddToDo />} />
      <Route path="update-todo/:id" element={<UpdateToDo />} />
      <Route path="showToDo/:id" element={<ShowToDo />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  );
};
export default RoutesPages;
