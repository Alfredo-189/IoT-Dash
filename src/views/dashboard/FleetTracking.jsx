import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './../../components/map/Marker';

const DemoJson = [
    {
        id:1,
        lat: 20.5937,
        lng: 78.9629,
        truck_name: 'TR_01',
        truck_id: 'TRX098x',
        avg_speed: '45 miles/hr'
    },
    {
        id:2,
        lat: 15.8700,
        lng: 100.9925,
        truck_name: 'TR_02',
        truck_id: 'TRX098x',
        avg_speed: '30 miles/hr'
    },
    {
        id:3,
        lat: 39.913818,
        lng: 116.363625,
        truck_name: 'TR_03',
        truck_id: 'TRX098x',
        avg_speed: '65 miles/hr'
    },
    {
        id:4,
        lat: 0.7893,
        lng: 113.9213,
        truck_name: 'TR_04',
        truck_id: 'TRX098x',
        avg_speed: '35 miles/hr'
    },
    {
        id:5,
        lat: 33.2232,
        lng: 43.6793,
        truck_name: 'TR_05',
        truck_id: 'TRX098x',
        avg_speed: '78 miles/hr'
    },
    {
        id:6,
        lat: 24.882618,
        lng: 72.858894,
        truck_name: 'TR_06',
        truck_id: 'TRX098x',
        avg_speed: '66 miles/hr'
    },
    {
        id:7,
        lat: 39.0742,
        lng: 21.8243,
        truck_name: 'TR_07',
        truck_id: 'TRX098x',
        avg_speed: '44 miles/hr'
    },
    {
        id:8,
        lat: 48.0196,
        lng: 66.9237,
        truck_name: 'TR_08',
        truck_id: 'TRX098x',
        avg_speed: '85 miles/hr'
    }
]

class FleetTracking extends Component {

    state = {
        center: {
            lat: 20.5937,
            lng: 78.9629,
        },
        zoom: 4
    }

    onClick = () => {
        console.log('sdjgfdsjh')
    }

    render() {

        const  mapStyle = [
            {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "weight": "2.00"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#9c9c9c"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#7b7b7b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#46bcec"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#c8d7d4"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#070707"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            }
        ]

        return (
            <div  style={{ height: 'calc(100vh - 92px)', width: '100%' }}>
                <GoogleMapReact
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                    options={{ styles: mapStyle }}
                >
                {
                    DemoJson &&
                    DemoJson.map((data,i) => {
                        return (
                            <Marker
                                key={data.id}
                                lat={data.lat}
                                lng={data.lng}
                                pointDetail={data}
                                onClick={this.onClick}
                            />
                        )
                    })
                }
                </GoogleMapReact>
            </div>
        );
    }
}

export default FleetTracking;