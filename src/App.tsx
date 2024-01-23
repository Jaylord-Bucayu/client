import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  ThemedLayoutV2,
  ThemedSiderV2,
  useNotificationProvider,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { authProvider } from "./authProvider";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";

import {
  PaymentsCreate,
  PaymentsEdit,
  PaymentsList,
  PaymentsShow,
} from "./pages/payments";

import {
  ParticularCreate,
  ParticularEdit,
  ParticularList,
  ParticularShow,
} from "./pages/particulars";


import {
  StudentsCreate,
  StudentEdit,
  StudentList,
  StudentsShow,
} from "./pages/students";

import {
  SectionsCreate,
  SectionsEdit,
  SectionsList,
  SectionsShow,
} from "./pages/sections";

import { ForgotPassword } from "./pages/forgotPassword";
import { Login } from "./pages/login";
import { Register } from "./pages/register";


function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <AntdApp>
            {/* <DevtoolsProvider> */}
              <Refine
                dataProvider={dataProvider("https://core-gpuv.onrender.com")}
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                resources={[
                
                  {
                    name: "particulars",
                    list: "/particulars",
                    create: "/particulars/create/:id",
                    edit: "/particulars/edit/:id",
                    show: "/particulars/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "payments",
                    list: "/payments",
                    create: "/payments/create",
                    edit: "/payments/edit/:id",
                    show: "/payments/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "students",
                    list: "/students",
                    create: "/students/create",
                    edit: "/students/edit/:id",
                    show: "/students/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },

                  {
                    name: "sections",
                    list: "/sections",
                    create: "/sections/create",
                    edit: "/sections/edit/:id",
                    show: "/sections/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "oHVipw-iFulYH-B9HjEn",
                }}
              >
                <Routes>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-inner"
                        fallback={<CatchAllNavigate to="/login" />}
                      >
                        <ThemedLayoutV2
                          Header={() => <Header sticky />}
                          Sider={(props) => <ThemedSiderV2 {...props} fixed />}
                        >
                          <Outlet />
                        </ThemedLayoutV2>
                      </Authenticated>
                    }
                  >
                    <Route
                      index
                      element={<NavigateToResource resource="students" />}
                    />
                    
                    
                    <Route path="/particulars">
                      <Route index element={<ParticularList />} />
                      <Route path="create/:id" element={<ParticularCreate />} />
                      <Route path="edit/:id" element={<ParticularEdit />} />
                      <Route path="show/:id" element={<ParticularShow />} />
                    </Route>
                  
                    <Route path="/payments">
                      <Route index element={<PaymentsList />} />
                      <Route path="create" element={<PaymentsCreate />} />
                      <Route path="edit/:id" element={<PaymentsEdit />} />
                      <Route path="show/:id" element={<PaymentsShow />} />
                    </Route>

                    <Route path="/students">
                      <Route index element={<StudentList />} />
                      <Route path="create" element={<StudentsCreate />} />
                      <Route path="edit/:id" element={<StudentEdit />} />
                      <Route path="show/:id" element={<StudentsShow />} />
                    </Route>

                    <Route path="/sections">
                      <Route index element={<SectionsList />} />
                      <Route path="create" element={<SectionsCreate />} />
                      <Route path="edit/:id" element={<SectionsEdit />} />
                      <Route path="show/:id" element={<SectionsShow />} />
                    </Route>
                   

                  
                    
                    <Route path="*" element={<ErrorComponent />} />
                  </Route>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-outer"
                        fallback={<Outlet />}
                      >
                        <NavigateToResource />
                      </Authenticated>
                    }
                  >
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                      path="/forgot-password"
                      element={<ForgotPassword />}
                    />
                  </Route>
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              {/* <DevtoolsPanel /> */}
            {/* </DevtoolsProvider> */}
          </AntdApp>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
