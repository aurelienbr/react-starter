// @flow
import React from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import { connect } from "react-redux";
import fr from "react-intl/locale-data/fr";
import en from "react-intl/locale-data/en";
import ru from "react-intl/locale-data/ru";

import { BrowserRouter as Router, Route } from "react-router-dom";

addLocaleData([...fr, ...en, ...ru]);

const Rooter = () => <Router />;

export default Rooter;
