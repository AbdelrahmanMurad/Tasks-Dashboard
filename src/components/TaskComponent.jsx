import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TasksController from "../controllers/tasks-controller";
import { tasksActions } from "../redux/slices/tasks-slice";

let TaskComponent = (props) => {
  let taskController = new TasksController();

  let navigator = useNavigate();
  let dispatch = useDispatch();
  let showDetailsHandler = () => {
    dispatch(tasksActions.showDetails(props.task.id));
    navigator(`/dashboard/tasks/${props.task.id}/details`);
    // navigator(`/dashboard/tasks/details`);
  };

  let deleteTaskHandler = async () => {
    let deleted = await taskController.delete(props.task);
    if (deleted) {
      dispatch(tasksActions.delete(props.task.id));
    }
  };

  return (
    <div className="col-md-4">
      <div className="card task card">
        <img src="img/3.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {props.task.name} - {props.task.category}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <span data-feather="calendar"></span> {props.task.startDate}
            <span className="main-color"> To </span> {props.task.endDate}
          </h6>
          <p className="card-text">{props.task.details}</p>
          <hr />
          <span className="btn badge-light-warning status-btn Wating">
            {props.task.status}
          </span>
          {/* <NavLink
            to={`/dashboard/tasks/${props.task.id}/details`}
            className="btn btn-bg-gray pull-right"
          >
            <span>Details</span>
          </NavLink> */}
          <button
            className="btn btn-bg-gray pull-right"
            onClick={showDetailsHandler}
          >
            Details
          </button>

          <button
            className="btn btn-bg-gray pull-right"
            onClick={deleteTaskHandler}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default TaskComponent;
