import React from "react";
import { Link } from "react-router-dom";
import Commoncomponent from "./Commoncomponent";

export default function Dashboard() {
  return (
    <div>
      <Commoncomponent/>
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4"></div>
              <div className="row">
                <div className="col-12">
                  <div className="card shadow spt_text">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        {" "}
                        Select the type of use accordingly
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="select_rental_wrap d-flex">
                        <div className="select_rent_item">
                          <Link
                            className="single select_rent_anc"
                            to="/usersinfo"
                          >
                            <i class="fa fa-user" aria-hidden="true"></i>{" "}
                            Personal Use
                          </Link>
                        </div>
                        <div className="select_rent_item">
                          <Link
                            className="apartment select_rent_anc"
                            to="/dashBoard/apartmentComplex"
                          >
                            <i class="fa fa-users" aria-hidden="true"></i>
                            <span>Agent Use</span>
                          </Link>
                        </div>
                      </div>
                      <div className="srp_note">
                        <p>
                          <b>Note:</b> Choose Agent only in case you are going
                          to add more then 1 person and his family data. and/or
                          you are employer and going to add your's employee
                          data.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
