// import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <footer style={{position: 'sticky', bottom: 0, padding: '30px'}}>
        <ul id='footer'>
            <h3>Footer</h3>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blue">Blue</Link></li>
            <li><Link to="/red">Red</Link></li>
            <li><Link to="/purple">Purple</Link></li>
            <li><Link to="/green">Green</Link></li>
        </ul>
      </footer>
    </div>
  )
}
