import React, { Component } from 'react';
import { XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts';
import Select, { components } from 'react-select';

const UserActivitydData = [
    { name: 'Mon 25 March 2019, 2 pm', count: 0},
    { name: 'Tue 26 March 2019, 3 pm', count: 2},
    { name: 'Wed 27 March 2019, 4 pm', count: 2},
    { name: 'Thu 28 March 2019, 6 pm', count: 2},
    { name: 'Fri 29 March 2019, 5 pm', count: 0},
    { name: 'Mon 30 March 2019, 6 pm', count: 5},
    { name: 'Tue 31 March 2019, 7 pm', count: 6},
    { name: 'Tue 1 April 2019, 8 pm', count: 0},
    { name: 'Tue 2 April 2019, 8 pm', count: 0},
    { name: 'Tue 3 April 2019, 9 pm', count: 4},
    { name: 'Tue 4 April 2019, 5 pm', count: 0},
    { name: 'Tue 5 April 2019, 8 pm', count: 0},
    { name: 'Tue 6 April 2019, 8 pm', count: 0},
    { name: 'Tue 7 April 2019, 9 pm', count: 4},
    { name: 'Tue 8 April 2019, 5 pm', count: 0},
    { name: 'Tue 9 April 2019, 8 pm', count: 0},
    { name: 'Tue 10 April 2019, 8 pm', count: 0},
];

const DropdownIndicator = (props) => {
    return components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        {
          props.isFocused ?
          <i className="fas fa-chevron-down"></i> :
          <i className="fas fa-chevron-down"></i>
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
        option: 'HOURLY'
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

class NumberOfpeopleChart extends Component {
    state = {
        selectedoption: 1
    }


    selectOptionsMethod = (selected) => {
        this.setState({selectedoption: selected.id})
    }

    render() {
        const {selectedoption} = this.state
        return (
            <div className="number-of-people-chart mtb--30">
                <div className="pa--15 heading">
                    <div className="fs--15 font-semibold">
                        Number of People
                    </div>
                    <div className="fs--15 font-semibold">
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
                    <div className="fs--15 font-semibold">
                        
                    </div>
                </div>
                <div className="my-dash-chat-wrapper">
                    <AreaChart width={700} height={285} data={UserActivitydData}
                        // margin={{ top: 20, right: 80, left: 20, bottom: 5 }}
                    >
                        <defs>
                            <linearGradient id="MyGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#D2C1EE" />
                                <stop offset="95%" stopColor="#D2C1EE" />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name"/>
                        <YAxis />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="count"
                            stroke="#A98ADF"
                            strokeWidth="2"
                            fillOpacity="1"
                            fill="url(#MyGradient)"
                        />
                    </AreaChart>
                </div>
                <div className="pl--15 pb--15 fs--15 font-semibold dot-block">
                    <div className="dot mr--5"></div>Conference room
                </div>
            </div>
        );
    }
}

export default NumberOfpeopleChart;