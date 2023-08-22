import { Navigate } from "react-router-dom";

const routeGuard = (Component) => (props) => {
  if (localStorage.getItem("userId")!==null) {
   return <Component {...props} />;
  } else {
    return <Navigate to="/" />;
  }
};

export default routeGuard;
