import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Man1 } from 'helper/constant'
import ReactPaginate from 'react-paginate';

class Employee extends Component {
    render() {
        return (
            <div className="monitor-table mt--30">
                <div className="fs--18 font-semibold heading">
                    EMPLOYEES
                </div>
                <Table striped borderless className="mb--0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Zone</th>
                            <th>Hours</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img className="mr--20 table-profile" src={Man1} alt=""/>John Doe</td>
                            <td>Q.C,Q.A & MICRO BIOLOGY</td>
                            <td>4 Hours</td>
                            <td>6464644512</td>
                        </tr>
                        <tr>
                            <td><img className="mr--20 table-profile" src={Man1} alt=""/>John Doe</td>
                            <td>Q.C,Q.A & MICRO BIOLOGY</td>
                            <td>4 Hours</td>
                            <td>6464644512</td>
                        </tr>
                        <tr>
                            <td><img className="mr--20 table-profile" src={Man1} alt=""/>John Doe</td>
                            <td>Q.C,Q.A & MICRO BIOLOGY</td>
                            <td>4 Hours</td>
                            <td>6464644512</td>
                        </tr>
                        <tr>
                            <td><img className="mr--20 table-profile" src={Man1} alt=""/>John Doe</td>
                            <td>Q.C,Q.A & MICRO BIOLOGY</td>
                            <td>4 Hours</td>
                            <td>6464644512</td>
                        </tr>
                        <tr>
                            <td><img className="mr--20 table-profile" src={Man1} alt=""/>John Doe</td>
                            <td>Q.C,Q.A & MICRO BIOLOGY</td>
                            <td>4 Hours</td>
                            <td>6464644512</td>
                        </tr>
                        <tr>
                            <td><img className="mr--20 table-profile" src={Man1} alt=""/>John Doe</td>
                            <td>Q.C,Q.A & MICRO BIOLOGY</td>
                            <td>4 Hours</td>
                            <td>6464644512</td>
                        </tr>
                    </tbody>
                </Table>
                <div className="pagination-class">
                    <ReactPaginate
                        previousLabel={<i className="fas fa-chevron-left"></i>}
                        nextLabel={<i className="fas fa-chevron-right"></i>}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={100}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                    />
                </div>
            </div>
        );
    }
}

export default Employee;