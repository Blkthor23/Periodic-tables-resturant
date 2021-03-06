import React from "react";
import { useHistory } from "react-router-dom";

import { previous, next } from "../utils/date-time";

function Buttons({ date }) {
  const history = useHistory();

  return (
    <>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => history.push(`/dashboard?date=${previous(date)}`)}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => history.push("/dashboard")}
        >
          Today
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => history.push(`/dashboard?date=${next(date)}`)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Buttons;