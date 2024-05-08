import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'

import { themeContext } from './theme/ThemeContext'
import { Route, Routes } from 'react-router-dom'
import Start from './components/Start'
import Todo from './components/todo/Todo'
import Calendar from './components/calendar/Calendar'

export default function App() {
    // 기본적으로 라이트 모드로 시작
    const [isDark, setIsDark] = useState(false)

    // 객체 자체를 전달
    const themeContextValue = { isDark, setIsDark }

    // // 다크모드, 라이트모드
    // const theme = themeMode === 'lightTheme' ? lightTheme : darkTheme

    return (
        <themeContext.Provider value={themeContextValue}>
            <div className="App">
                <header
                    className="App-body"
                    style={{
                        backgroundColor: isDark ? '#27374D' : '#eee0c9',
                    }}
                >
                    <div
                        className="Memo-body"
                        style={{
                            backgroundColor: isDark ? '#526D82' : '#f1f0e8',
                        }}
                    >
                        <Routes>
                            <Route path="/" element={<Start />} />
                            <Route path="/Todo" element={<Todo />} />
                            <Route path="/Calendar" element={<Calendar />} />
                        </Routes>
                    </div>
                </header>
            </div>
        </themeContext.Provider>
    )
}
