import React,{useContext} from 'react';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../storage/FirebaseContext';
import { useHistory } from 'react-router-dom';
function Header() {
  const { user } = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {
            user ?  ` Welcome ${user.displayName}` :    <span onClick={(e) => {
              history.push('/login')
            }} >Login</span>
          }
          {/* {
            user ? <span>{user}</span> : <span>Logout</span>
          } */}
          
          <hr />
        </div>
          {user && <span onClick={() => {
            firebase.auth().signOut()
            history.push('/login')
          }} >Logout</span> }
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>

            {
            user ?      <span onClick={(e) => {
              history.push('/create')
            }} >SELL</span> :    <span onClick={(e) => {
              history.push('/login')
            }} >SELL</span>
          }


        
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
