import React, { Component } from 'react';
import { plusIcon, deviceActivity, selectMenuarrow } from 'helper/constant'
import { Table, CustomInput } from 'reactstrap';
import classNames from 'classnames';
import Select, { components } from 'react-select';

const tableDemoData = [
    {
        name: 'location-tracker-1',
        location: 'Chandler, AZ',
        lastactivity: '1 min ago',
        status: 'online',
    },
    {
        name: 'location-tracker-2',
        location: 'Chandler, AZ',
        lastactivity: '2 min ago',
        status: 'offline',
    },
    {
        name: 'location-tracker-3',
        location: 'Chandler, AZ',
        lastactivity: '5 min ago',
        status: 'online',
    },
    {
        name: 'location-tracker-4',
        location: 'Chandler, AZ',
        lastactivity: '7 min ago',
        status: 'offline',
    },
    {
        name: 'location-tracker-5',
        location: 'Chandler, AZ',
        lastactivity: '10 min ago',
        status: 'online',
    },
    {
        name: 'location-tracker-6',
        location: 'Chandler, AZ',
        lastactivity: '1 hr ago',
        status: 'offline',
    },
]

const tableColumn = [
    {
        column: 'checkbox',
        index: 'checkbox'
    },
    {
        column: 'NAME',
        index: 'name'
    },
    {
        column: 'LOCATION',
        index: 'location'
    },
    {
        column: 'LAST ACTIVITY',
        index: 'lastactivity'
    },
    {
        column: 'STATUS',
        index: 'status'
    }
]

const DropdownIndicator = (props) => {
    return components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        {
          props.isFocused ?
            <img className="mr-10" src={selectMenuarrow} alt="arrow" /> :
            <img className="mr-10" src={selectMenuarrow} alt="arrow" />
        }
      </components.DropdownIndicator>
    );
};

const colourStyles = {
    control: styles => ({
      ...styles,
      border: 0,
      borderRadius: '5px',
      fontSize: '13px',
      fontFamily: 'open-sans'
    }),
    option: (styles, { isDisabled }) => {
      return {
        ...styles,
        color: '#3D4060',
        padding: '15px 10px',
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    }
};

const selectOptions = [
    {
        id: 1,
        option: 'Default'
    },
    {
        id: 2,
        option: 'option2'
    },
    {
        id: 3,
        option: 'option3'
    }
]
  

class Devices extends Component {

    state = {
        selectedoption: 1
    }

    selectOptionsMethod = (selected) => {
        this.setState({selectedoption: selected.id})
    }

    render() {

        const {selectedoption} = this.state

        return (
            <div>
                <div className="flex align-center main-view-border-block">
                    <div className="fs--25 view-title">
                        Devices
                    </div>
                    <div className="ml-auto view-plus-btn">
                        <img src={plusIcon} alt="plus"/>Enroll Devices
                    </div>
                </div>
                <div className="mt--15 fs--20">
                    View and manage your devices
                </div>
                <div className="mt--15">
                    <Select
                        styles={colourStyles}
                        name="colors"
                        components={{ DropdownIndicator }}
                        placeholder="Select option"
                        onChange={this.selectOptionsMethod}
                        getOptionLabel={(option) => option.option}
                        getOptionValue={(option) => option.id}
                        value={selectOptions.filter(option => option.id === selectedoption)}
                        options={selectOptions}
                        className="basic-select"
                        classNamePrefix="custom-select"
                    />
                </div>
                <div className="ptb--15">
                    <Table striped responsive>
                        <thead>
                            <tr className="table-heading">
                                <th><CustomInput type="checkbox" id="1"/></th>
                                <th>NAME</th>
                                <th>LOCATION</th>
                                <th>LAST ACTIVITY</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* <tr>
                            <th scope="row"><CustomInput type="checkbox" id="2"/></th>
                            <td className="name-tab">location-tracker-1</td>
                            <td className="location-tab">Chandler, AZ</td>
                            <td className="activity-tab"><img className="mr--10" src={deviceActivity} alt="activity"/>2 min ago</td>
                            <td className="online-tab"><div className="online-status-class"></div>online</td>
                        </tr> */}
                            {
                                tableDemoData && 
                                tableDemoData.map((e,i) => {
                                    return (
                                        <tr key={i}>
                                            {
                                                tableColumn &&
                                                tableColumn.map((f,i) =>  {
                                                    if (e[f.index]) {
                                                        if (f.index === 'name') {
                                                            return(
                                                                <td key={i} className="name-tab">{e[`${f.index}`]}</td>
                                                            )
                                                        } else if (f.index === 'location') {
                                                            return(
                                                                <td key={i} className="location-tab">{e[`${f.index}`]}Z</td>
                                                            )
                                                        } else if (f.index === 'lastactivity') {
                                                            return(
                                                                <td key={i} className="activity-tab"><img className="mr--10" src={deviceActivity} alt="activity"/>{e[`${f.index}`]}</td>
                                                            )
                                                        } else if (f.index === 'status') {
                                                            return(
                                                                <td key={i} className="online-tab">
                                                                    <div className={classNames(
                                                                        e[f.index] === 'online' && 'online-status-class', 
                                                                        e[f.index] === 'offline' && 'offline-status-class', 
                                                                    )}/>
                                                                    {e[`${f.index}`]}
                                                                </td>
                                                            )
                                                        } else {
                                                            return (
                                                                <td key={i}/>
                                                            )
                                                        }
                                                    } else {
                                                        return(
                                                            <th key={Math.random()} scope="row"><CustomInput type="checkbox" id={Math.random()}/></th>
                                                        )
                                                    }
                                                })
                                            }                      
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Devices;