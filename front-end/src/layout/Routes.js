import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import ReservationNew from "../reservations/ReservationNew";
import ReservationSeat from "../reservations/ReservationSeat";
import MakeTable from "../tables/makeTable";
import NotFound from "./NotFound";
import { today } from "../utils/date-time";
import useQuery from "../utils/useQuery";
import Search from "../search/search";
import ReservationEdit from "../reservations/ReservationEdit";

function Routes() {
  const query = useQuery();
  const date = query.get("date");

  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to={"/dashboard"} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/tables/new">
        <MakeTable />
      </Route>
      <Route path="/reservations/:reservation_id/edit">
        <ReservationEdit />
      </Route>
      <Route path="/reservations/:reservation_id/seat">
        <ReservationSeat />
      </Route>
      <Route path="/reservations/new">
        <ReservationNew />
      </Route>
      <Route exact={true} path="/reservations">
        <Redirect to={"/dashboard"} />
      </Route>
      <Route path="/dashboard">
        <Dashboard date={date ? date : today()} />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;