import React from "react";
import { Route, Link } from "react-router-dom";
import Homepage from "./Homepage/Homepage";

function notFoundPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Page Not Found</h1>
      <p>Sorry, there is nothing to see here.</p>
      <p>
        <Link to='/'>Back to Home</Link>
        <Route path='/' component={Homepage} exact />
      </p>
    </div>
  );
}

export default notFoundPage;
