import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MapPoint, MapVehicleLogo } from 'helper/constant'
import { Popover, PopoverBody } from 'reactstrap';

class Marker extends Component {

    state = {
        popoverOpen: false
    };

    togglePopover = () => {
        this.setState({
          popoverOpen: !this.state.popoverOpen
        });
    }

    render() {

        const { pointDetail } = this.props
        console.log(pointDetail)

        return (
            <div
                {...this.props.onClick ? { onClick: this.props.onClick } : {}}
            >
                <img id={`popover${pointDetail.id}`} className="map-point-class" src={MapPoint} alt="Point"/>
                <Popover 
                    trigger="hover" 
                    placement="bottom" 
                    isOpen={this.state.popoverOpen} 
                    target={`popover${pointDetail.id}`} 
                    toggle={this.togglePopover}
                    className="custom-map-popover"
                >
                    <PopoverBody>
                        <div className="flex">
                            <img className="mr--20" src={MapVehicleLogo} alt="logo"/>
                            <div>
                                <div className="mtb--5 fs--16">
                                    <span>Truck Name: </span><span>{pointDetail.truck_name}</span>
                                </div>
                                <div className="mtb--5 fs--16">
                                    <span>Truck ID: </span><span>{pointDetail.truck_id}</span>
                                </div>
                                <div className="mtb--5 fs--16">
                                    <span>Avg Speed: </span><span>{pointDetail.avg_speed}</span>
                                </div>
                            </div>
                        </div>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}

Marker.defaultProps = {
    onClick: null,
};

Marker.propTypes = {
    onClick: PropTypes.func,
};

export default Marker;
