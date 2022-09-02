import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import reportWebVitals from './reportWebVitals'
import { App } from './App'
import { AppStateProvider } from './state/AppStateContext'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
    <StrictMode>
        <AppStateProvider>
            <App />
        </AppStateProvider>
    </StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
