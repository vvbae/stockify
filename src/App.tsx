import { Redirect, Route } from "react-router-dom";
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ArtistPage from "./pages/ArtistPage";
import Main from "./pages/Main";
import Portfolio from "./pages/Portfolio";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/login" component={Login}>
                        <Login />
                    </Route>
                    <Route exact path="/register" component={Register}>
                        <Register />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/login" />
                    </Route>
                    <Route exact path="/:tab(artist)/:name" component={ArtistPage}>
                        <Redirect to="/:tab(artist)/:name" />
                    </Route>
                    <Route exact path="/:tab(main)" component={Main}>
                        <Redirect to="/main"/>
                    </Route>
                    <Route exact path="/:tab(portfolio)" component={Portfolio}>
                        <Redirect to="/portfolio"/>
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="login" href="/login">
                        <IonLabel>Login</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="register" href="/register">
                        <IonLabel>Register</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="artist" href="/:tab(artist)/:name">
                        <IonLabel>Artist</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="main" href="/:tab(main)/">
                        <IonLabel>Main</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="portfolio" href="/:tab(portfolio)/">
                        <IonLabel>Portfolio</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;
