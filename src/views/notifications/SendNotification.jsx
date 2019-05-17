import React, { Component } from 'react';
import { plusIcon, Reload, SearchIcon, UpDownIcon, selectwhiteMenuarrow } from 'helper/constant'
import { InputGroup, InputGroupText, InputGroupAddon, Button, Input, Table, CustomInput,  Modal, ModalBody } from 'reactstrap';
import Select, { components } from 'react-select';

const tableDemoData = [
    {
        notification: 'location-tracker-1',
        group:[
            {
                value: 'CLASS 1'
            },
            {
                value: 'CLASS 2'
            }
        ],
        last_receive_time: '11/25/2018',
    },
    {
        notification: 'location-tracker-2',
        group:[
            {
                value: 'CLASS 1'
            },
            {
                value: 'CLASS 2'
            }
        ],
        last_receive_time: '11/25/2018',
    },
    {
        notification: 'location-tracker-3',
        group:[
            {
                value: 'CLASS 1'
            },
            {
                value: 'CLASS 2'
            }
        ],
        last_receive_time: '11/25/2018',
    },
    {
        notification: 'location-tracker-4',
        group:[
            {
                value: 'CLASS 1'
            },
            {
                value: 'CLASS 2'
            }
        ],
        last_receive_time: '11/25/2018',
    },
]

const tableColumn = [
    {
        column: 'checkbox',
        index: 'checkbox'
    },
    {
        column: 'Notification',
        index: 'notification'
    },
    {
        column: 'Groups',
        index: 'group'
    },
    {
        column: 'Last receive Time',
        index: 'last_receive_time'
    }
]

const DropdownIndicator = (props) => {
    return components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        {
          props.isFocused ?
            <img className="mr-10" src={selectwhiteMenuarrow} alt="arrow" /> :
            <img className="mr-10" src={selectwhiteMenuarrow} alt="arrow" />
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
        option: 'Actions'
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


class SendNotification extends Component {

    state = {
        notificationModel: false,
        selectedoption: 1
    };

    selectOptionsMethod = (selected) => {
        this.setState({selectedoption: selected.id})
    }

    togglenotificationModel = () => {
        this.setState(prevState => ({
            notificationModel: !prevState.notificationModel
        }));
      }
    

    render() {

        const {selectedoption} = this.state

        return (
            <div>
                <div className="flex align-center">
                    <div className="view-title">
                        NOTIFICATION HISTORY
                    </div>
                    <div className="ml-auto view-plus-btn" onClick={this.togglenotificationModel}>
                        <img src={plusIcon} alt="plus"/>Send Notification
                    </div>
                </div>
                <div className="flex align- mt--30">
                    <div>
                        <InputGroup className="search-input-class">
                            <Input className="app-form-input" placeholder="Search by Incident ID"/>
                            <InputGroupAddon addonType="append">
                            <InputGroupText className="notification-search-button"><img src={SearchIcon} alt="search"/></InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                    <div className="ml-auto">
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
                            classNamePrefix="custom-select-notification"
                        />
                    </div>
                    <div className="ml-auto refresh-button plr--20 ptb-10">
                        <img className="mr--15" src={Reload} alt="referesh"/>Refresh
                    </div>
                </div>
                <div className="mtb--30">
                    <Table borderless responsive>
                        <thead>
                            <tr className="notification-table-header">
                                <th><CustomInput type="checkbox" id="1"/></th>
                                <th>Notification<img className="ml--15" src={UpDownIcon} alt="icon"/></th>
                                <th>Groups<img className="ml--15" src={UpDownIcon} alt="icon"/></th>
                                <th>Last Receive Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableDemoData && 
                                tableDemoData.map((e,i) => {
                                    return (
                                        <tr key={i}>
                                            {
                                                tableColumn &&
                                                tableColumn.map((f,i) => {
                                                    if (e[f.index]) {
                                                        if (f.index === 'group') {
                                                            return(
                                                                <td key={i} className="name-tab">
                                                                    {
                                                                        e.group.map((j, i) => {
                                                                            return(
                                                                                <span key={i}>
                                                                                    {j.value} { e.group.length !== i+1 && ', '}
                                                                                </span>
                                                                            )
                                                                        })
                                                                    }
                                                                </td>
                                                            )
                                                        } else {
                                                            return(
                                                                <td key={i}>{e[`${f.index}`]}</td> 
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
                <NotificationModel
                    notificationModel={this.state.notificationModel}
                    togglenotificationModel={() => this.togglenotificationModel}
                />
            </div>
        );
    }
}

export default SendNotification;

const NotificationModel = ({notificationModel, togglenotificationModel}) => {
    return(
        <Modal centered isOpen={notificationModel} toggle={togglenotificationModel()}>
            <ModalBody className="notification-model-body plr--50 ptb--40">
                <div className="text-center fs--26">
                    Send New Notification
                </div>
                <div className="mt--15">
                    <div className="form-group">
                        <label>Message</label>
                        <input type="text" className="form-control app-form-input border-radius--10" aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label>Groups</label>
                        <input type="text" className="form-control app-form-input border-radius--10" aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label>Datetime</label>
                        <input type="text" className="form-control app-form-input border-radius--10" aria-describedby="emailHelp"/>
                    </div>
                    <div className="text-center">
                        <Button color="primary" className="add-gateway-button mt--10" onClick={togglenotificationModel()}>Add Gateway</Button>
                        <div className="cancle-link mt--10" onClick={togglenotificationModel()}>
                            cancel
                        </div>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    )
}