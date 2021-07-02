import React, { Component } from "react";
import { Check2Square } from "react-bootstrap-icons";

export class ClientPagination extends Component {
  render() {
    const { data, totalPost, dataPerPage, paginate } = this.props;
    const pageNum = [];

    for (let i = 1; i <= Math.ceil(totalPost / dataPerPage); i++) {
      pageNum.push(i);
    }
    return (
      <div className="client_table">
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Jobs Overdue</th>
              <th>Due Today</th>
              <th>Due This week</th>
              <th>Due Next week</th>
              <th>
                <Check2Square color="#cdcdcd" size={30} />
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, index) => {
              return (
                <tr>
                  <td>
                    {" "}
                    <h6 className="text-primary">{value.Client_Name}</h6>{" "}
                  </td>
                  <td>
                    <h6 className="text-primary">{value.Phone}</h6>
                  </td>
                  <td>
                    <h6 className="text-primary">{value.Email}</h6>
                  </td>
                  <td>
                    <h6 className="text-primary">{value.Jobs_Overdue}</h6>
                  </td>
                  <td>
                    <h6 className="text-primary">{value.Jobs_Due_Today}</h6>
                  </td>
                  <td>
                    <h6 className="text-primary">{value.Jobs_due_this_week}</h6>
                  </td>
                  <td>
                    <h6 className="text-primary">{value.Due_Next_week}</h6>
                  </td>
                  <td>
                    <div class="checkbox">
                      <label htmlFor="">
                        <input type="checkbox" value="" />
                      </label>
                    </div>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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

export default ClientPagination;
