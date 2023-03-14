import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { authActions } from "../redux/slices/auth-slice";
import { tasksActions } from "../redux/slices/tasks-slice";

let DashboardBasePage = () => {
  let dispatch = useDispatch();
  let navigator = useNavigate();
  let loggedIn = useSelector((state) => state.auth.loggedIn);

  let onSearchChangeHandler = (event) => {
    dispatch(tasksActions.search(event.target.value));
  };

  let signOutHandler = () => {
    localStorage.setItem("loggedIn", false);
    dispatch(authActions.signOut());
    navigator("/", { replace: true });
  };

  return (
    <Fragment>
      <header className="navbar sticky-top navbar-light bg-light flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          Momen Task
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          onChange={onSearchChangeHandler}
          placeholder="Search"
          aria-label="Search"
        />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <button
              className="nav-link px-3 btn-light-main btn"
              href="#"
              type="button"
              onClick={signOutHandler}
            >
              Sign out
            </button>
          </div>
        </div>
      </header>
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink
                    className={(props) =>
                      props.isActive ? "nav-link active" : "nav-link"
                    }
                    aria-current="page"
                    to="/dashboard/tasks"
                    end
                  >
                    <span data-feather="home"></span>
                    Tasks
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={(props) =>
                      props.isActive ? "nav-link active" : "nav-link"
                    }
                    to="/dashboard/tasks/new"
                  >
                    <span data-feather="file"></span>
                    New Task
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="users"></span>
                    {loggedIn ?? "NO VALUE!"}
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="bar-chart-2"></span>
                    other link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="layers"></span>
                    other link
                  </a>
                </li> */}
              </ul>
            </div>
          </nav>
          {/* <TasksPage /> */}
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
};
export default DashboardBasePage;
