import React from 'react'
import './Exper.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Exper = () => {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="exper" id='Expriance'>
        <div className="achive">
            <div className="circle" style={{color: darkMode ? 'var(--orange)' : ''}}>1+</div>
            <span>Years</span>
            <span>Experience</span>
        </div>
        <div className="achive">
            <div className="circle" style={{color: darkMode ? 'var(--orange)' : ''}}>10+</div>
            <span>Completed</span>
            <span>Projects</span>
        </div>
        <div className="achive">
            <div className="circle" style={{color: darkMode ? 'var(--orange)' : ''}}>1+</div>
            <span>Companies</span>
            <span>Wrok</span>
        </div>
    </div>
  )
}

export default Exper