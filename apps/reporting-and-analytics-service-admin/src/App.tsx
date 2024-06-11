import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RevenueList } from "./revenue/RevenueList";
import { RevenueCreate } from "./revenue/RevenueCreate";
import { RevenueEdit } from "./revenue/RevenueEdit";
import { RevenueShow } from "./revenue/RevenueShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { PerformanceMetricList } from "./performanceMetric/PerformanceMetricList";
import { PerformanceMetricCreate } from "./performanceMetric/PerformanceMetricCreate";
import { PerformanceMetricEdit } from "./performanceMetric/PerformanceMetricEdit";
import { PerformanceMetricShow } from "./performanceMetric/PerformanceMetricShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Reporting and Analytics Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Revenue"
          list={RevenueList}
          edit={RevenueEdit}
          create={RevenueCreate}
          show={RevenueShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="PerformanceMetric"
          list={PerformanceMetricList}
          edit={PerformanceMetricEdit}
          create={PerformanceMetricCreate}
          show={PerformanceMetricShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
