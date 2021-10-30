import Home from "./containers/Home";
import Blog from './containers/Blog';
import Services from "./containers/Services";
import Cantact_us from "./containers/CantactUs";
import Settings from "./containers/Settings";
import Admin from "./containers/Admin";
import Panel from "./containers/Panel";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import ViewArticle from "./components/ViewArticle";

const routes = {
    menu: [
        {
            key: "admin",
            path: "/admin",
            component: Admin,
            exact: true,
            icon: null,
        },
        {
            key: "blog",
            path: "/blog",
            component: Blog,
            exact: true,
            icon: null,
        },
        {
            key: "viewArticle",
            path: "/blog/:id",
            component: ViewArticle,
            exact: true,
            icon: null,
        },
        {
            key: "services",
            path: "/services",
            component: Services,
            exact: true,
            icon: null,
        },
        {
            key: "cantact_us",
            path: "/cantact_us",
            component: Cantact_us,
            exact: true,
            icon: null,
        },
        {
            key: "settings",
            path: "/settings",
            component: Settings,
            exact: true,
            icon: null,
        },
        {
            key: "home",
            path: "/home",
            component: Home,
            exact: false,
            icon: null,
        }
    ],
    authAbdu: [
    {
        key: "signin",
        path: "/sign-in",
        component: SignIn,
        exact: true,
        icon: null,
    },
    {
        key: "signup",
        path: "/sign-up",
        component: SignUp,
        exact: true,
        icon: null,
    },
    {
        key: "panel",
        path: ["/", "/panel"],
        component: Panel,
        exact: false,
        icon: null,
    }
],
}

export default routes;
