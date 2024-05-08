import { useNavigate } from 'react-router-dom'
import '../css/PageCg.css'
import { useContext } from 'react'
import { themeContext } from '../theme/ThemeContext'

function PageCg() {
    const navigate = useNavigate()
    const { isDark, setIsDark } = useContext(themeContext)

    const onTodo = () => {
        navigate('/Todo')
    }

    const onCal = () => {
        navigate('/Calendar')
    }

    return (
        <div className="change-Btn">
            <button
                onClick={onTodo}
                style={{
                    backgroundColor: isDark ? '#9db2bf' : '#F1F0E8',
                    border: isDark ? '1px solid #fff' : '1px solid #000',
                }}
            >
                Todo
            </button>
            <button
                onClick={onCal}
                style={{
                    backgroundColor: isDark ? '#9db2bf' : '#F1F0E8',
                    border: isDark ? '1px solid #fff' : '1px solid #000',
                }}
            >
                Calendar
            </button>
        </div>
    )
}

export default PageCg
