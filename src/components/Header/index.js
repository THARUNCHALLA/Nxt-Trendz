import Cookies from 'js-cookie'

import {withRouter} from 'react-router-dom'

import './index.css'

const Header = props => {
  const onclickDelete = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/')
  }

  return (
    <div className="HeaderContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
        alt="website logo"
        className="websiteLogo"
      />
      <div className="AnotherContainerInHeader">
        <li className="description">Home</li>
        <li className="description">Products</li>
        <li className="description">Cart</li>
        <button type="button" className="button" onClick={onclickDelete}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default withRouter(Header)
