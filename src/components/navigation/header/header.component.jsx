import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../../assets/crown.svg';
import './header.styles.scss';
import {auth} from '../../../firebase/firebase.utils';
import Cart from '../cart/cart.component';

const Header = ({currentUser}) => (
    <div className="header">
         <Link className="logo-container" to='/'>
             <Logo className='logo'/>
         </Link>
         <div className="options">
              <Cart/>
              <Link className="option" to='/shop'>SHOP</Link>
              <Link to="/" className="option">CONTACT</Link>
             
              {
                  currentUser?
                  <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                  : <Link to="/sign" className="option">SIGN IN</Link>
              }
         </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);