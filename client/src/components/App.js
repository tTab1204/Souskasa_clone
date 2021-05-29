import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import HostContainer from "./views/HostPage/HostContainer";
import BecomeAHostContainer from "./views/BecomeAHostPage/BecomeAHostContainer";
import HostDetailPage from "./views/HostDetailPage/HostDetailPage";
import ListYourKitchenContainer from "./views/ListYourKitchenPage/ListYourKitchenContainer";
import Footer from "./views/Footer/Footer";
import { Layout, Button } from "antd";
import UploadKitchenPage from "./admin/UploadKitchenPage";
import UploadHostPage from "./admin/UploadHostPage";
import KitchenContainer from "./views/KitchenPage/KitchenContainer";
import EventContainer from "./views/EventPage/EventContainer";
import UploadEventPage from "./admin/UploadEventPage";
import EventDetailContainer from "./views/EventDetailPage/EventDetailContainer";
import UserProfilePresenter from "./views/UserProfilePage/UserProfilePresenter";
import MyTicketPage from "./views/MyTicketPage/MyTicketPage";
import { MainBox } from "./views/HostPage/HostStyle";
import { BackTop } from "antd";
import KitchenDetailContainer from "./views/KitchenDetailPage/KitchenDetailContainer";

const { Content } = Layout;

const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};

function App() {
  return (
    <Suspense fallback={<Button type="primary" size="small" loading></Button>}>
      <div
      // style={{ background: "geekblue" }}
      >
        <NavBar />
        <Content
          style={{
            // backgroundColor: "rgb(250, 250, 250)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <MainBox>
            {/* <Switch> 는 첫번째로 매칭되는 path 를 가진 컴포넌트를 렌더링 시킨다. 
          이것이 exact path 와 다른 점은 첫번째 매칭만 본다는 것이다. */}
            <Switch>
              <Route exact path="/" component={Auth(LandingPage, null)} />
              <Route exact path="/login" component={Auth(LoginPage, false)} />
              <Route
                exact
                path="/register"
                component={Auth(RegisterPage, false)}
              />
              <Route
                exact
                path="/hosts"
                component={Auth(HostContainer, true)}
              />
              <Route
                exact
                path="/become-a-host"
                component={Auth(BecomeAHostContainer, true)}
              />
              <Route
                path="/hosts/:hostsId"
                component={Auth(HostDetailPage, null)}
              />

              <Route
                exact
                path="/list-your-kitchen"
                component={Auth(ListYourKitchenContainer, null)}
              />
              <Route
                exact
                path="/kitchens"
                component={Auth(KitchenContainer, null)}
              />
              <Route
                exact
                path="/kitchens/:kitchensId"
                component={Auth(KitchenDetailContainer, null)}
              />
              <Route
                exact
                path="/events"
                component={Auth(EventContainer, null)}
              />

              {/* My Page */}
              <Route
                exact
                path="/users/:userName"
                component={Auth(UserProfilePresenter, null)}
              />

              <Route
                exact
                path="/my-tickets"
                component={Auth(MyTicketPage, null)}
              />

              {/* Admin Page */}
              <Route
                exact
                path="/events/:eventId"
                component={Auth(EventDetailContainer, null)}
              />
              <Route
                exact
                path="/upload-kitchen"
                component={Auth(UploadKitchenPage, true)}
              />
              <Route
                exact
                path="/upload-host"
                component={Auth(UploadHostPage, true)}
              />
              <Route
                exact
                path="/upload-event"
                component={Auth(UploadEventPage, true)}
              />
            </Switch>
          </MainBox>
        </Content>

        <BackTop>
          <div style={style}>UP</div>
        </BackTop>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
