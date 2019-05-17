import React, { Component } from 'react';
import { Dash1, Dash2, Dash3, Dash4, DeviceDot, ActiveDot, InactiveDot } from 'helper/constant';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, AreaChart, Area } from 'recharts';
import DonutChart from 'react-donut-chart';

    
const DeviceStatusData = [
    { name: '12/12/2018', register: 100, active: 30, inactive: 10},
    { name: '13/12/2018', register: 20, active: 60, inactive: 90},
    { name: '14/12/2018', register: 10, active: 20, inactive: 70},
    { name: '15/12/2018', register: 90, active: 70, inactive: 50},
    { name: '16/12/2018', register: 48, active: 90, inactive: 20}
    ];

const UserActivitydData = [
    { name: '12/12/2018', count: 100},
    { name: '13/12/2018', count: 20},
    { name: '14/12/2018', count: 10},
    { name: '15/12/2018', count: 90},
    { name: '16/12/2018', count: 48}
    ];

const SummeryData = [
    {
        label: 'Device',
        value: 50
    },
    {
        label: 'In Active',
        value: 30,
    },
    {
        label: 'Active',
        value: 20
    }
];
    

class Dashboard extends Component {

    state = {
        activeSummeryItem: SummeryData[0]
    }

    render() {
        return (
            <div className="container-fluid pa--0">
                <div className="row">

                    <div className="col-6 col-xl-3 plr--10 mtb--10">
                        <div className="dash-mini-card">
                            <div className="flex">
                                <div className="pl--15 ptb--20">
                                    <div className="title fs--12">
                                        TOTAL DEVICE ONLINE
                                    </div>
                                    <div className="sub-title fs--20 mt--5">
                                        18
                                    </div>
                                </div>
                                <div className="ml-auto right-icon">
                                    <img src={Dash1} alt="dash"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-xl-3 plr--10 mtb--10">
                        <div className="dash-mini-card">
                            <div className="flex">
                                <div className="pl--15 ptb--20">
                                    <div className="title fs--12">
                                        TOTAL USERS
                                    </div>
                                    <div className="sub-title fs--20 mt--5">
                                        1000
                                    </div>
                                </div>
                                <div className="ml-auto right-round-icon">
                                    <div className="rounded-block"><img src={Dash4} alt="dash"/></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-xl-3 plr--10 mtb--10">
                        <div className="dash-mini-card">
                            <div className="flex">
                                <div className="pl--15 ptb--20">
                                    <div className="title fs--12">
                                        TOTAL DEVICE TYPE
                                    </div>
                                    <div className="sub-title fs--20 mt--5">
                                        15
                                    </div>
                                </div>
                                <div className="ml-auto right-round-icon">
                                    <div className="rounded-block"><img src={Dash3} alt="dash"/></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-xl-3 plr--10 mtb--10">
                        <div className="dash-mini-card">
                            <div className="flex">
                                <div className="pl--15 ptb--20">
                                    <div className="title fs--12">
                                        TOTAL USER GROUPS
                                    </div>
                                    <div className="sub-title fs--20 mt--5">
                                        15
                                    </div>
                                </div>
                                <div className="ml-auto right-round-icon">
                                    <div className="rounded-block"><img src={Dash2} alt="dash"/></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-xl-4 plr--10 mtb--10">
                        <div className="circular-progress-card height100percent">
                            <div className="summery-title">
                                USAGE SUMMERY
                            </div>
                            <div className="summery-process-parent">
                                <div className="doutnut-middle-part">
                                    <div className="fs--15 title-number">{this.state.activeSummeryItem.value}</div>
                                    <div className="fs--12 sub-title">{this.state.activeSummeryItem.label}</div>
                                </div>
                                <DonutChart
                                    legend={false}
                                    clickToggle={false}
                                    className="summery-chart"
                                    data= { SummeryData }
                                    formatValues= {
                                        (value, total) => (
                                            Number.isNaN(value / total) ? '--'
                                                : `${((value / total) * 100).toFixed(0)}`
                                        )
                                    }
                                    onMouseEnter = {
                                        (item) => {
                                            console.log(`mousing over: ${item}`);
                                            this.setState({activeSummeryItem: item})
                                            return item;
                                        }
                                    }
                                    colors = {['#17A9F3', '#3DAC16', '#F52780']}
                                    onClick = {
                                        (item, toggled) => {
                                            if (toggled) {
                                                console.log(`selecting: ${item.label}`);
                                            } else {
                                                console.log(`unselecting: ${item.label}`);
                                            }
                                            return item;
                                        }
                                    }
                                />
                                <div className="main-info-container mt--20">

                                    <div className="flex">
                                        <div className="mr--5"><img src={DeviceDot} alt="device"/></div>
                                        <div className="text-size">DEVICE</div>
                                        <div className="line device-line"></div>
                                        <div className="ml-auto">50</div>
                                    </div>

                                    <div className="flex">
                                        <div className="mr--5"><img src={ActiveDot} alt="device"/></div>
                                        <div className="text-size">ACTIVE</div>
                                        <div className="line active-line"></div>
                                        <div className="ml-auto">20</div>
                                    </div>

                                    <div className="flex">
                                        <div className="mr--5"><img src={InactiveDot} alt="device"/></div>
                                        <div className="text-size">INACTIVE</div>
                                        <div className="line inactive-line"></div>
                                        <div className="ml-auto">30</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-xl-8 plr--10 mtb--10">
                    <div className="dash-charts">
                            <div className="flex">
                                <div className="title">
                                    DEVICE STATUS
                                </div>
                                <div className="count-title ml-auto fs--14">
                                    <div className="rectangle"></div>DEVICE REGISTERED
                                </div>
                                <div className="count-title ml-auto fs--14">
                                    <div className="rectangle-active"></div>DEVICES ACTIVE
                                </div>
                                <div className="count-title ml-auto fs--14">
                                    <div className="rectangle-inactive"></div>DEVICES INACTIVE
                                </div>
                            </div>
                            <div className="my-dash-chat-wrapper">
                                <LineChart width={700} height={285} data={DeviceStatusData}>
                                    <XAxis dataKey='name'/>
                                    <YAxis domain={['auto', 'auto']}/>
                                    <Tooltip position={{y: 200}} />
                                    <CartesianGrid stroke='#f5f5f5'/>
                                    <Line dataKey='register' stroke='#17A9F3' strokeWidth={2}/>
                                    <Line dataKey='active' stroke='#48A920' strokeWidth={2}/>
                                    <Line dataKey='inactive' stroke='#F52780' strokeWidth={2}/>
                                </LineChart>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-xl-4 plr--10 mtb--10">
                        <div className="circular-progress-card height100percent">
                            <div className="title">
                                USERS ACTIVE TODAY
                            </div>
                            <div className="process-parent">
                                <CircularProgressbar
                                    className="circular-process"
                                    percentage={55}
                                    styles={{
                                        path: {
                                            stroke: '#17A9F3',
                                        }
                                    }}

                                />
                                <div className="middle-part">
                                    <div className="fs--30 title-number">500</div>
                                    <div className="fs--16 sub-title">USERS</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-xl-8 plr--10 mtb--10">
                        <div className="dash-charts">
                            <div className="flex">
                                <div className="title">
                                    USER ACTIVITY
                                </div>
                                <div className="count-title ml-auto fs--14">
                                    <div className="rectangle"></div>USER COUNT
                                </div>
                            </div>
                            <div className="my-dash-chat-wrapper">
                                <AreaChart width={700} height={285} data={UserActivitydData}
                                    // margin={{ top: 20, right: 80, left: 20, bottom: 5 }}
                                >
                                    <defs>
                                        <linearGradient id="MyGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="rgba(0, 136, 254, 0.3)" />
                                            <stop offset="95%" stopColor="rgba(23,169,243, 0)" />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="name"/>
                                    <YAxis />
                                    <Tooltip />
                                    <Area
                                        type="monotone"
                                        dataKey="count"
                                        stroke="#19AAF3"
                                        strokeWidth="2"
                                        fillOpacity="1"
                                        fill="url(#MyGradient)"
                                    />
                                </AreaChart>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-xl-4 plr--10 mtb--10">
                        <div className="circular-progress-card">
                            <div className="title">
                                TOTAL VEHICLES
                            </div>
                            <div className="process-parent">
                                <CircularProgressbar
                                    className="circular-process"
                                    percentage={25}
                                    styles={{
                                        path: {
                                            stroke: '#17A9F3',
                                        }
                                    }}

                                />
                                <div className="middle-part">
                                    <div className="fs--30 title-number">1500</div>
                                    <div className="fs--16 sub-title">ACTIVE</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-xl-4 plr--10 mtb--10">
                        <div className="circular-progress-card">
                            <div className="title">
                                VEHICLES AT DESTINATION
                            </div>
                            <div className="process-parent">
                                <CircularProgressbar
                                    className="circular-process"
                                    percentage={40}
                                    styles={{
                                        path: {
                                            stroke: '#F52780',
                                        }
                                    }}

                                />
                                <div className="middle-part">
                                    <div className="fs--30 title-number">20</div>
                                    <div className="fs--16 sub-title">DESTINATION</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-xl-4 plr--10 mtb--10">
                        <div className="circular-progress-card">
                            <div className="title">
                                VEHICLES IN TRANSIT
                            </div>
                            <div className="process-parent">
                                <CircularProgressbar
                                    className="circular-process"
                                    percentage={10}
                                    styles={{
                                        path: {
                                            stroke: '#3DAC16',
                                        }
                                    }}

                                />
                                <div className="middle-part">
                                    <div className="fs--30 title-number">500</div>
                                    <div className="fs--16 sub-title">IN TRANSIT</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Dashboard;