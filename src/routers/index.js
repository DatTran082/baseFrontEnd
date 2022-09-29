import LandingPage from "../pages/LandingPages"
import Login from "../pages/Auth/Login"
import Register from "../pages/Auth/Register"
import Profiles from "../pages/Profiles"

const PublicRoutes = [
    { path: "/", component: LandingPage },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/profile", component: Profiles, layout: null }
]

const PrivateRoutes = [

]

export { PublicRoutes, PrivateRoutes }