import React, { Component } from 'react';
import Select, { components } from 'react-select';
import { Map, Marker, Popup, TileLayer, ImageOverlay } from 'react-leaflet'
import L from 'leaflet';

import { selectMenuarrow, Reload, GroupIcon } from 'helper/constant';
import Zones from './../../components/workmonitor/zones/Zones'
import Shifts from './../../components/workmonitor/shifts/Shifts'
import Employee from './../../components/workmonitor/employee/Employee'
import NumberOfpeopleChart from './../../components/workmonitor/numberOfpeoplechart/NumberOfpeopleChart'
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import floorPlan from './floor.png';
console.log(floorPlan)

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

const position = [51.505, -0.09]

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
        option: 'All Zones'
    },
    {
        id: 2,
        option: 'Option2'
    },
    {
        id: 3,
        option: 'Option3'
    }
]

const liveOption = [
    {
        id: 1,
        option: 'Live'
    },
    {
        id: 2,
        option: 'Option2'
    },
    {
        id: 3,
        option: 'Option3'
    }
]

class WorksiteMonitoring extends Component {

    state = {
        selectedoption: 1,
        liveOptionState: 1,
        startDate: null,
        endDate: null,
        focusedInput: null
    }


    selectOptionsMethod = (selected) => {
        this.setState({selectedoption: selected.id})
    }

    selectOptionsMethodForLive = (selected) => {
        this.setState({liveOptionState: selected.id})
    }

    render() {
        const {selectedoption, liveOptionState} = this.state
        return (
            <div className="worksite-monitor">
                <div className="flex align-center">
                    <div className="font-bold fs--25">
                        WORKSITE MONITORING
                    </div>
                    <div className="ml-auto">
                        <button className=" worksite-monitor-refresh plr--20 fs--14">
                            <img className="mr--15" src={Reload} alt="referesh"/>Refresh
                        </button>
                    </div>
                    <div className="ml--10">
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
                    <div className="ml--10">
                        <Select
                            styles={colourStyles}
                            name="colors"
                            components={{ DropdownIndicator }}
                            placeholder="Select option"
                            onChange={this.selectOptionsMethodForLive}
                            getOptionLabel={(option) => option.option}
                            getOptionValue={(option) => option.id}
                            value={liveOption.filter(option => option.id === liveOptionState)}
                            options={liveOption}
                            className="basic-select"
                            classNamePrefix="custom-select"
                        />
                    </div>
                    <div>
                        {/* <button className="date-button fs--14 plr--20 ml--10">
                            23/03/2019 - 23/03/2019
                        </button> */}
                        <div className="date-range-picker ml--10">
                            <DateRangePicker
                                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                            />
                        </div>
                    </div>
                </div>
                <div className="row mt--15">
                    <div className="col-xl-9">
                        <div className="floor-plan-card height100percent">
                            <div className="floor-header">
                                <div className="font-semibold fs--18">
                                    FLOOR PLAN
                                </div>
                            </div>
                            <div className="flor-map-cont">
                            {/* Floor plan map */}
                            <Map crs={L.CRS.Simple} center={[0, 0]}  zoom={-20}>
                                    <ImageOverlay
                                        url={floorPlan}
                                        bounds={[[( 486 /2)*-1,(1267/2)*-1], [ 486 ,1267]]}
                                    />
                                </Map>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="people-count-card height100percent">
                            <div className="text-center people-count">
                                <div>
                                    <img src={GroupIcon} alt="GroupIcon"/>
                                </div>
                                <div className="fs--18 font-bold">
                                    PEOPLE COUNT
                                </div>
                            </div>
                            <div className="text-center count-block pb--30 border-bottom">
                                <div className="count">
                                    50
                                </div>
                                <div className="fs--16 font-semibold">
                                    TOTAL PEOPLE IN BUILDING
                                </div>
                            </div>
                            <div className="text-center count-block pb--30">
                                <div className="count">
                                    23
                                </div>
                                <div className="fs--16 font-semibold">
                                    VIZAG-LANKALPALEM
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Zones/>
                </div>
                <div>
                    <Shifts/>
                </div>
                <div>
                    <Employee/>
                </div>
                <div className="number-of-people">
                    <NumberOfpeopleChart/>
                </div>
            </div>
        );
    }
}

export default WorksiteMonitoring;