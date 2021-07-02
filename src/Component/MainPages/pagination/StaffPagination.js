import React, { Component } from "react";
import { Check2Square } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";

export class StaffPagination extends Component {
  render() {
    const { data, totalPost, dataPerPage, paginate, filter } = this.props;
    const pageNum = [];

    for (let i = 1; i <= Math.ceil(totalPost / dataPerPage); i++) {
      pageNum.push(i);
    }
    return (
      <div>
        <div className="staff_table">
          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th>Staff Name</th>
                <th>Staff Mail</th>
                <th>Jobs Overdue</th>
                <th>Jobs Due Today</th>
                <th>Jobs due this week</th>
                <th>Jobs due next week</th>
                <th>
                  <Check2Square color="#cdcdcd" size={30} />
                </th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((value) => {
                  if (filter === "") {
                    return value;
                  } else if (value.Client_Name.toLocaleLowerCase().includes(filter)) {
                    return value;
                  }
                })
                .map((value, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        {" "}
                        <h6 className="text-primary">
                          {" "}
                          <PersonCircle
                            color="#333283"
                            size={30}
                            className="dashboard_container_third_teams_list_icon"
                          />{" "}
                          {value.Client_Name.toLocaleLowerCase()}{" "}
                        </h6>{" "}
                      </td>
                      <td>
                        {" "}
                        <a href="#">
                          {" "}
                          <h6 className="text-primary">{value.Email}</h6>{" "}
                        </a>
                      </td>
                      <td>
                        <h6 className="text-danger">{value.Jobs_Overdue}</h6>{" "}
                      </td>
                      <td>
                        <h6 className="text-primary">{value.Jobs_Due_Today}</h6>
                      </td>
                      <td>
                        <h6 className="text-info">
                          {value.Jobs_due_this_week}
                        </h6>
                      </td>
                      <td>
                        <h6 className="text-info">{value.Due_Next_week}</h6>
                      </td>
                      <td>
                        <div class="checkbox">
                          <label htmlFor="">
                            <input type="checkbox" value="" />
                          </label>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <nav>
          <ul className="pagination">
            {pageNum.map((value, index) => {
              return (
                <li key={index} className="page-item">
                  <a
                    onClick={() => paginate(value)}
                    href="#"
                    className="page-link"
                  >
                    {value}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default StaffPagination;
