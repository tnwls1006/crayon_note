import React, { useContext } from 'react'
import { CiDark, CiLight } from 'react-icons/ci'
import '../css/Start.css'
import { useNavigate } from 'react-router-dom'
import { themeContext } from '../path/to/themeContext' // themeContext를 import

function Start() {
    const { isDark, setIsDark } = useContext(themeContext)
    const titleColor = isDark ? '#fff' : '#000'
    const navigate = useNavigate()

    const onToggle = () => {
        setIsDark(!isDark)
    }
    const onTodo = () => {
        navigate('/Todo')
    }
    const onCal = () => {
        navigate('/Calendar')
    }

    return (
        <div className="Start_Page">
            <div className="Mode">
                <button
                    className="Mode-Btn"
                    onClick={onToggle}
                    style={{
                        border: isDark ? '3px solid #F1F0E8' : '3px solid #eee0c9',
                    }}
                >
                    {isDark ? <CiLight size="4vh" color="#F1F0E8" /> : <CiDark size="4vh" color="#eee0c9" />}
                </button>
            </div>

            <div className="Title" style={{ color: titleColor }}>
                <p>CRAYON</p>
                <p>BREW</p>
            </div>

            <div className="Start_Btn">
                <button onClick={onTodo}>Todo - START</button>
                <button onClick={onCal}>Calendar - START</button>
            </div>
        </div>
    )
}
export default Start
