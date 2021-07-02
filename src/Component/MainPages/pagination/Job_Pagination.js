import React, { Component } from 'react'
import { Check2Square } from 'react-bootstrap-icons';

export class JobPagination extends Component {
    render() {
        const {data, totalPost, dataPerPage, paginate, filter} = this.props;
        const pageNum = []

        for (let i = 1; i <= Math.ceil(totalPost / dataPerPage); i++){
            pageNum.push(i)
        }
        return (
            <div>
                <table className="table table-bordered mt-3">
                    <thead>
                        <tr>
                            <th>Client</th>
                            <th>Job Name</th>
                            <th>Tasks</th>
                            <th>In Date</th>
                            <th>Out Date</th>
                            <th>Status</th>
                            <th>Managers</th>
                            <th><Check2Square color="#cdcdcd" size={30} /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.filter((value) => {
                            if (filter === ''){
                                return value
                            }else if(value.Job_Name.includes(filter)){
                                return value
                            }
                        }).map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td> <h6 className="text-primary">{value.Client}</h6></td> 
                                    <td><h6 className="text-primary">{value.Job_Name}</h6></td>
                                    <td><h6 className="text-primary">{value.Tasks}</h6></td>
                                    <td><h6 className="text-primary">{value.In_Date}</h6></td>
                                    <td><h6 className="text-primary">{value.Out_Date}</h6></td>
                                    <td><h6 className="text-primary">{value.Status}</h6></td>
                                    <td><h6 className="text-primary">{value.Managers}</h6></td>
                                    <td><div class="checkbox">
                                    <label htmlFor=""><input type="checkbox" value="" /></label>
                                    </div> </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                        <nav>
                            <ul className="pagination">
                                {pageNum.map((value, index) => {
                                    return (
                                        <li key={index} className="page-item">
                                            <a onClick={() => paginate(value)} href="#" className="page-link">
                                                {value}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
            </div>
        )
    }
}

export default JobPagination
