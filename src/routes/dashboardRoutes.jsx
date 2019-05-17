import Dashboard from "./../views/dashboard/Dashboard";
import FleetTracking from "./../views/dashboard/FleetTracking";
import Devices from "./../views/device/Devices";
import Fleet from "./../views/device/Fleet";
import SendNotification from "./../views/notifications/SendNotification";
import WorksiteMonitoring from "./../views/worksite/WorksiteMonitoring";
import GateWay from "./../views/device/GateWay";

const dashboardRoutes = [
    { path: "/dashboard", component: Dashboard },
    { path: "/fleet-tracking", component: FleetTracking },
    { path: "/devices", component: Devices },
    { path: "/fleet", component: Fleet },
    { path: "/send-notifications", component: SendNotification },
    { path: "/worksite-monitoring", component: WorksiteMonitoring },
    { path: "/gateways", component: GateWay }
]

export default dashboardRoutes;