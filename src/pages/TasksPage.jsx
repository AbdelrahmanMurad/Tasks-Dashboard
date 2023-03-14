import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskComponent from "../components/TaskComponent";
import TasksController from "../controllers/tasks-controller";
import { tasksActions } from "../redux/slices/tasks-slice";

export default function TasksPage() {
  let controller = new TasksController();
  let tasks = useSelector((state) => state.tasks.filteredData);
  let dispatch = useDispatch();

  let fetchTasks = async () => {
    const tasks = await controller.read();
    dispatch(tasksActions.read(tasks));
  };
  // eslint-disable-next-line
  useEffect(() => { fetchTasks(); }, []);

  let onCategoryFilterChangeHandler = (event) => {
    dispatch(tasksActions.filterByCategory(event.target.value));
  };

  let onStatusFilterChangeHandler = (event) => {
    dispatch(tasksActions.filterByStatus(event.target.value));
  };

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>

        <div className="mb-2 mb-md-0">
          <div className="d-flex align-items-center ms-3 ms-lg-4"></div>
          <div className="d-flex align-items-center ms-3 ms-lg-4"></div>
        </div>

        <ul className="list-inline">
          <li className="list-inline-item">
            <select
              className="dropdown form-control pull-right"
              placeholder="Filter By status"
              autoComplete="off"
              onChange={onStatusFilterChangeHandler}
            >
              <option value="All">Filter By status</option>
              <option value="In Progress">In Progress</option>
              <option value="Complete">Complete</option>
              <option value="Canceled">Canceled</option>
              <option value="Waiting">Waiting</option>
            </select>
          </li>
          <li className="list-inline-item mt-3">
            <select
              className="dropdown form-control pull-right"
              placeholder="Filter By status"
              autoComplete="off"
              onChange={onCategoryFilterChangeHandler}
            >
              <option value="all">Filter By category</option>
              <option value="Work">Work</option>
              <option value="Home">Home</option>
              <option value="Family">Family</option>
              <option value="Sport">Sport</option>
            </select>
          </li>
        </ul>
      </div>

      <div className="row mt- 5">
        {tasks.map((element) => (
          <TaskComponent key={element.id} task={element} />
        ))}
      </div>
    </main>
  );
}
