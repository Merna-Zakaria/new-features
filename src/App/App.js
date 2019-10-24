import React from "react";
import "./App.scss";
import Routing from "./routing";
import { connect } from 'react-redux';

import { IntlProvider } from "react-intl";
import messages from "../localization/messages";

class App extends React.Component  {
  render () {
    const { lang } = this.props;  

    return (
      <IntlProvider
        locale={lang} 
        messages={messages[lang]} 
      >
        <div
          className={lang === "ar" ? "rtl" : "ltr"}
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          {" "}
          
          <h1 className="header"> hi from app</h1>
         
          <Routing />
        </div>
      </IntlProvider>
    );

  }

  
}

// export default App;

const mapStateToProps = state => {
  console.log('state in app',state);

  return {
    lang: state.locale.lang
  }
} 

export default connect(mapStateToProps)(App); 
