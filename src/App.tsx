import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { Sider as CustomSider } from './components/index'

import {
  ErrorComponent,
  ThemedLayoutV2,
  ThemedSiderV2,
  useNotificationProvider,
  ThemedTitleV2
  
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
import { CustomHeader } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";

import { model, adapter } from "./access/accessControl";

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
  FeesCreate,
  FeesEdit,
  FeesList,
  FeesShow,
} from "./pages/fees";


import {
  ClearanceCreate,
  ClearanceEdit,
  ClearanceList,
  ClearanceShow,
} from "./pages/clearance";

import {
  SectionsCreate,
  SectionsEdit,
  SectionsList,
  SectionsShow,
  SectionsParticularAdd
} from "./pages/sections";


import {
  QeueryCreate,
  QeueryEdit,
  QeueryList,
  QeueryShow,
} from "./pages/query";




import { ForgotPassword } from "./pages/forgotPassword";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { CanAccess } from "@refinedev/core";
import { newEnforcer } from "casbin";
  const role = localStorage.getItem("role")
  
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
                accessControlProvider={{
                  can: async ({ resource, action }) => {
                    const enforcer = await newEnforcer(model, adapter);
                    const can = await enforcer.enforce(role, resource, action);
        
                    return {
                      can,
                    };
                  },
                }}
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
                    name: "query",
                    list: "/query",
                    create: "/query/create/:id",
                    edit: "/query/edit/:id",
                    show: "/query/show/:id",
                    
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
                    clone: "/sections/add/:id/:section",
                    meta: {
                      canDelete: true,
                    },
                  },
                 

                  {
                    name: "fees",
                    list: "/fees",
                    create: "/fees/create",
                    edit: "/fees/edit/:id",
                    show: "/fees/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },

                  {
                    name: "clearance",
                    list: "/clearance",
                    // create: "/clearance/create",
                    edit: "/clearance/edit/:id",
                    show: "/clearance/show/:id",
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
                         Title={({ collapsed }) => (
                          <ThemedTitleV2
                            // collapsed is a boolean value that indicates whether the <Sidebar> is collapsed or not
                            collapsed={collapsed}
                            icon={<img src="https://client-weld-eight.vercel.app/logo.png" />}
                            text="Alertify"
                          />
                        )}

                          Header={() => <CustomHeader sticky />}
                          Sider={(props) => <ThemedSiderV2 {...props} fixed />}
                          // Sider={CustomSider}
                        >
                          <CanAccess>
                          <Outlet />
                          </CanAccess>
                        </ThemedLayoutV2>
                      </Authenticated>
                    }
                  >
                    <Route
                      index
                      element={<NavigateToResource resource="students" />}
                    />
                    
                    
                    <Route path="/students">
                      <Route index element={<StudentList />} />
                      <Route path="create" element={<StudentsCreate />} />
                      <Route path="edit/:id" element={<StudentEdit />} />
                      <Route path="show/:id" element={<StudentsShow />} />
                    </Route>
                    
                    <Route path="/particulars">
                      <Route index element={<ParticularList />} />
                      <Route path="create/:id" element={<ParticularCreate />} />
                      <Route path="edit/:id" element={<ParticularEdit />} />
                      <Route path="show/:id" element={<ParticularShow />} />
                    </Route>

                    <Route path="/query">
                      <Route index element={<QeueryList />} />
                      <Route path="create/:id" element={<QeueryCreate />} />
                      <Route path="edit/:id" element={<QeueryEdit />} />
                      <Route path="show/:id" element={<QeueryShow />} />
                    </Route>
                  
                    <Route path="/payments">
                      <Route index element={<PaymentsList />} />
                      <Route path="create" element={<PaymentsCreate />} />
                      <Route path="edit/:id" element={<PaymentsEdit />} />
                      <Route path="show/:id" element={<PaymentsShow />} />
                    </Route>

                   

                    <Route path="/sections">
                      <Route index element={<SectionsList />} />
                      <Route path="create" element={<SectionsCreate />} />
                      <Route path="edit/:id" element={<SectionsEdit />} />
                      <Route path="show/:id" element={<SectionsShow />} />
                      <Route path="add/:id/:section" element={<SectionsParticularAdd />} />
                    </Route>

                    <Route path="/fees">
                      <Route index element={<FeesList />} />
                      <Route path="create" element={<FeesCreate />} />
                      <Route path="edit/:id" element={<FeesEdit />} />
                      <Route path="show/:id" element={<FeesShow />} />
                    </Route>

                    <Route path="/clearance">
                      <Route index element={<ClearanceList />} />
                      {/* <Route path="create" element={<ClearanceCreate />} /> */}
                      <Route path="edit/:id" element={<ClearanceEdit />} />
                      <Route path="show/:id" element={<ClearanceShow />} />
                    </Route>
                                
                    <Route path="*" element={<ErrorComponent />} />
                  </Route>
               
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                      path="/forgot-password"
                      element={<ForgotPassword />}
                    />
                 
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
