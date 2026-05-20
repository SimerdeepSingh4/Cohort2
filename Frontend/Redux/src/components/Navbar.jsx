import React from 'react'
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux'
import { changeThemeToDark, changeThemeToLight } from '../redux/slices/themeSlice'
const Navbar = () => {
  const dispatch = useDispatch()

    let isThemeDark = true

    const theme = useSelector((state) => state.theme.value)
    if (theme === 'dark') {
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
        isThemeDark = true
    } else {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
        isThemeDark = false
    }
    return (

        <div className='nav'>
            <div className='nav-content'>
            <h1>Current Theme is {theme}</h1>
            {
                isThemeDark ? <button onClick={() => { dispatch(changeThemeToLight()) }}>Change Theme to Light</button> : <button onClick={() => { dispatch(changeThemeToDark()) }}>Change Theme to Dark</button>
            }

            </div>
        </div>
    )
}

export default Navbar