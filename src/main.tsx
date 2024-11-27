import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import "./index.css"
import {NextUIProvider} from "@nextui-org/react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ThemeProvider} from "./components/theme-provider";
import {Layout} from "./components/layout";
import {Workflow} from "./pages/workflow";
import {Landing} from "./pages/landing";
import {Export} from "./pages/export";
import {Dashboard} from "./pages/dashboard";

const container = document.getElementById("root")

const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing/>
    },
    {
        path: 'dashboard',
        element: <Dashboard/>
    },
    {
        path: 'project/:id/',
        element: <Layout/>,
        children:[
            {
                path: 'workflow',
                element: <Workflow/>,
            },
            {
                path: 'export',
                element: <Export/>
            }
        ]
    },
])

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <NextUIProvider>
          <ThemeProvider>
            <RouterProvider router={router}/>
          </ThemeProvider>
          </NextUIProvider>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}


