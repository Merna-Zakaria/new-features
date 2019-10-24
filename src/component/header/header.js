import React from "react";
import { Link } from "react-router-dom";
import Auth from '../../App/auth';
import { connect } from 'react-redux';
import { setCurrentLang } from '../../redux/actions/lang';
import { injectIntl } from 'react-intl';

class  Header extends React.Component {

  switcher = (lang) => {
    this.props.setCurrentLang(lang);
}

 
   onLogin = () => {
    Auth.authenticate()
   console.log('login')
  }

   onLogout = () => {
    Auth.signout()
    console.log('logout')
  }

//   renderLangSwitcher = () => {
//     return (
//         <div className="m-3">
//             <button className="mr-3" id="en" onClick={() => this.switcher('en')}>English</button>
//             <button  className="mr-3" id="ar" onClick={() => this.switcher('ar')}>العربية</button>
//         </div>
//     )
// }

 render () {
console.log(this.props.intl)
  const { messages } = this.props.intl;

  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" to="/home">
          {messages.home}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/aboutUs">
          {messages.About_Us}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">
            {messages.Blog}
          </Link>
        </li>
        <div className="m-3">
            <button className="mr-3" id="en" onClick={() => this.switcher('en')}>English</button>
            <button  className="mr-3" id="ar" onClick={() => this.switcher('ar')}>العربية</button>
        </div>
      <button className="btn btn-info mr-3" onClick={this.onLogin}>Login</button>
      <button className="btn btn-warning" onClick={this.onLogout}>Logout</button>
      </ul>
    </div>
  );


  // const { messages } = this.props.intl;
  // return (
  //     // <Container className="p-3">
  //     <div>
  //     {this.renderLangSwitcher()}
  //             <Link className="mr-3" to='/'>{messages.home}</Link>
  //             <Link className="mr-3" to='public'>{messages.public}</Link>
  //             <Link className="mr-3" to='private'>{messages.private}</Link>
  //             <button className="mr-3" variant="primary" onClick={this.login}>{messages.login}</button>
  //             <button className="mr-3" variant="danger" onClick={this.logout}>{messages.logout}</button>
  //         </div>
  //     // </Container>
  // )
 }
};

// export default Header;

const mapStateToProps = state => {
  return { lang: state.locale.lang }
}

const HeaderComponent = injectIntl(Header);

export default connect(mapStateToProps, { setCurrentLang })(HeaderComponent);
