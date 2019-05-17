import { WorkSiteIcon, DeviceDirectory, AccessManagement, DevicesFleet, Devices, Notifications, DashboardIcon, LocationMark, Statistics } from 'helper/constant'
export const sidebarData = [
    {
        name: 'Dashboard',
        icon: DashboardIcon,
        bottomText: null,
        child: [
            {
                listname: 'Metrics',
                routepath: '/metrics',
                icon: Statistics
            },
            {
                listname: 'Usage Dashboard',
                routepath: '/dashboard',
                icon: Statistics
            },
            {
                listname: 'Locations',
                routepath: '/fleet-tracking',
                icon: LocationMark
            }
        ]
    },
    {
        name: 'Device Directory',
        icon: DeviceDirectory,
        bottomText: 'List, Filter, Events',
        child: [
            {
                listname: 'Gateways',
                routepath: '/gateways',
                icon: Devices
            },
            {
                listname: 'Devices',
                routepath: '/devices',
                icon: Devices
            },
            {
                listname: 'Incidents',
                routepath: '/incidents',
                icon: Devices
            },
            {
                listname: 'Enrolling Devices',
                routepath: '/enrolling-devices',
                icon: DevicesFleet
            }
        ]
    },
    {
        name: 'Device Identity',
        icon: DeviceDirectory,
        bottomText: 'Security, Certificates',
        child: [
            {
                listname: 'Options',
                routepath: '/Options',
                icon: DevicesFleet
            }
        ]
    },
    {
        name: 'Worksite Monitoring',
        icon: WorkSiteIcon,
        bottomText: null,
        child: [
            {
                listname: 'Option1',
                routepath: '/option1',
                icon: null
            },
            {
                listname: 'Worksite Monitoring',
                routepath: '/worksite-monitoring',
                icon: null
            },
            {
                listname: 'Option2',
                routepath: '/option2',
                icon: null
            }
        ]
    },
    {
        name: 'Employee Monitoring',
        icon: WorkSiteIcon,
        bottomText: 'Security, Certificates',
        child: [
            {
                listname: 'Option1',
                routepath: '/option1',
                icon: null
            },
            {
                listname: 'Employee Monitoring',
                routepath: '/employee-monitoring',
                icon: null
            },
            {
                listname: 'Option2',
                routepath: '/option2',
                icon: null
            }
        ]
    },
    {
        name: 'Timesheets',
        icon: WorkSiteIcon,
        bottomText: 'Security, Certificates',
        child: [
            {
                listname: 'Option1',
                routepath: '/option1',
                icon: null
            },
            {
                listname: 'Option2',
                routepath: '/option2',
                icon: null
            }
        ]
    },
    {
        name: 'Notifications',
        icon: Notifications,
        bottomText: 'Notify User',
        child: [
            {
                listname: 'Send Notifications',
                routepath: '/send-notifications',
                icon: null
            }
        ]
    },
    {
        name: 'Access Management',
        icon: AccessManagement,
        bottomText: 'Access authentication',
        child: []
    }
]