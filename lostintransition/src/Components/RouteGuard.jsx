import { Navigate } from "react-router-dom";

const routeGuard = (Component) => (props) => {
  if (localStorage.getItem("username")!==null) {
   return <Component {...props} />;
  } else {
    return <Navigate to="/" />;
  }
};

export default routeGuard;
