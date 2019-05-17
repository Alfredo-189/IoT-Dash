import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { UpDownIcon } from 'helper/constant'
import ReactPaginate from 'react-paginate';

class Shifts extends Component {
    render() {
        return (
            <div className="monitor-table mt--30">
                <div className="fs--18 font-semibold heading">
                    SHIFTS
                </div>
                <Table striped borderless className="mb--0">
                    <thead>
                        <tr>
                            <th>SIFT Name<img className="ml--15 cursor-pointer" src={UpDownIcon} alt="icon"/></th>
                            <th>Hours</th>
                            <th>Total Employees</th>
                            <th>Total Workhours</th>
                            <th>Avg Workshours<img className="ml--15 cursor-pointer" src={UpDownIcon} alt="icon"/></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CR-UPS-01</td>
                            <td>8am-12pm</td>
                            <td>8</td>
                            <td>140 hours</td>
                            <td>140 hours</td>
                        </tr>
                        <tr>
                            <td>CR-UPS-01</td>
                            <td>8am-12pm</td>
                            <td>8</td>
                            <td>140 hours</td>
                            <td>140 hours</td>
                        </tr>
                        <tr>
                            <td>CR-UPS-01</td>
                            <td>8am-12pm</td>
                            <td>8</td>
                            <td>140 hours</td>
                            <td>140 hours</td>
                        </tr>
                        <tr>
                            <td>CR-UPS-01</td>
                            <td>8am-12pm</td>
                            <td>8</td>
                            <td>140 hours</td>
                            <td>140 hours</td>
                        </tr>
                        <tr>
                            <td>CR-UPS-01</td>
                            <td>8am-12pm</td>
                            <td>8</td>
                            <td>140 hours</td>
                            <td>140 hours</td>
                        </tr>
                        <tr>
                            <td>CR-UPS-01</td>
                            <td>8am-12pm</td>
                            <td>8</td>
                            <td>140 hours</td>
                            <td>140 hours</td>
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

export default Shifts;