import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../Layout/DefaultLayout/DefaultLayout";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Projects from "../Pages/Projects/Projects";
import Teams from "../Pages/Teams/Teams";
import Analytics from "../Pages/Analytics/Analytics";
import Messages from "../Pages/Messages/Messages";
import Integration from "../Pages/Integrations/Integration";
import IntroducePage from "../components/ Introduce/ IntroducePage";




const router = createBrowserRouter([
    {
        path: "/introduce", // <-- nằm ngoài DefaultLayout
        element: <IntroducePage />
    },

    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <DashBoard />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/teams",
                element: <Teams />
            },
            {
                path: "/analytics",
                element: <Analytics />
            },
            {
                path: "/messages",
                element: <Messages />
            },
            {
                path: "/integration",
                element: <Integration />
            }
        ]
    }

])

export default router;