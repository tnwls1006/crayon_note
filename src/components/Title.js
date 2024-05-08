import '../css/Title.css'
import '../css/Start.css'
import React, { useContext } from 'react'
import { themeContext } from '../theme/ThemeContext'
import { CiDark, CiLight } from 'react-icons/ci'

export default function Title() {
    const { isDark, setIsDark } = useContext(themeContext)

    const onToggle = () => {
        setIsDark(!isDark)
    }

    return (
        <div className="todo-TopBar">
            <div
                className="title"
                style={{
                    color: isDark ? 'white' : 'black',
                }}
            >
                <p>CRAYON BREW</p>
            </div>
            <div className="title-Btn">
                <button
                    className="Mode-Btn"
                    onClick={onToggle}
                    style={{
                        border: isDark ? '2px solid #F1F0E8' : '2px solid #eee0c9',
                    }}
                >
                    {isDark ? <CiLight size="4vh" color="#F1F0E8" /> : <CiDark size="4vh" color="#eee0c9" />}
                </button>
            </div>
        </div>
    )
}
