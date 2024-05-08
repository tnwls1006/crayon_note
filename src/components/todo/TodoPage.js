import { useContext, useState } from 'react'
import '../../css/NoteList.css'
import { themeContext } from '../../theme/ThemeContext'

function TodoPage() {
    const [todos, setTodos] = useState([])

    const submitFunction = (event) => {
        // 새로고침 방지
        event.preventDefault()

        // id, value 추가
        const noteId = todos.length + 1
        const noteValue = event.target.note.value

        // input data
        const note = { noteId, noteValue, isChecked: false }

        // notes에 추가
        setTodos([...todos, note])

        // input 초기화
        event.target.note.value = ''
    }

    // 삭제 기능
    const deleteNote = (deleteItemId) => {
        // 확인 창을 띄우고 사용자가 확인을 누를 때만 삭제
        const shouldDelete = window.confirm('정말로 삭제하시겠습니까?')
        if (shouldDelete) {
            const newTodos = todos
                .filter((item) => item.noteId !== deleteItemId)
                .map((item, index) => ({ ...item, noteId: index + 1 })) // 아이템의 id를 1씩 감소시킴
            setTodos(newTodos)
        }
    }

    const toggleComplete = (noteId) => {
        setTodos(todos.map((item) => (item.noteId === noteId ? { ...item, isChecked: !item.isChecked } : item)))
    }

    return (
        <div className="todo-List">
            <form onSubmit={submitFunction}>
                <input type="text" name="note" placeholder="write Todo List" />
            </form>

            <div className="list-items">
                {todos.map((item) => {
                    return (
                        <BtnNote
                            key={item.noteId}
                            item={item}
                            deleteNote={deleteNote}
                            toggleComplete={toggleComplete}
                        />
                    )
                })}
            </div>
        </div>
    )
}

function BtnNote({ item, deleteNote, toggleComplete }) {
    const { isDark, setIsDark } = useContext(themeContext)

    return (
        <div
            className="lists"
            style={{
                color: isDark ? 'white' : 'black',
                textDecoration: item.isChecked ? 'line-through' : 'none', // 취소선
                backgroundColor: item.isChecked && isDark ? '#ADC4CE' : item.isChecked ? '#DDE6ED' : 'transparent',
            }}
        >
            <div className="list-id" style={{ color: 'black' }}>
                {item.noteId}
            </div>

            <div className="list-value">{item.noteValue}</div>
            <div className="list-btn">
                {/* 완료 */}
                <button
                    onClick={() => toggleComplete(item.noteId)}
                    style={{
                        color: isDark ? 'white' : 'black',
                        border: isDark ? '2px solid #DDE6ED' : '2px solid #96B6C5',
                        backgroundColor:
                            item.isChecked && isDark ? '#526D82' : item.isChecked ? '#96B6C5' : 'transparent',
                    }}
                >
                    완료
                </button>

                {/* 수정 */}
                <button
                    style={{
                        color: isDark ? 'white' : 'black',
                        border: isDark ? '2px solid #DDE6ED' : '2px solid #96B6C5',
                        pointerEvents: 'none', // 비활성화
                    }}
                >
                    수정
                </button>

                {/* 삭제 */}
                <button
                    onClick={() => deleteNote(item.noteId)}
                    style={{
                        color: isDark ? 'white' : 'black',
                        border: isDark ? '2px solid #DDE6ED' : '2px solid #96B6C5',
                    }}
                >
                    삭제
                </button>
            </div>
        </div>
    )
}

export default TodoPage
