import Home from './pages/Home/Home'
import {Provider as MediaQueryProvider} from "./MediaQueryContext.tsx"
import './App.css';

function App() {
    return (
        <MediaQueryProvider screens={{
            xxs: "300px",
            xs: "425px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "4xl": "2560px"
        }}>
            <Home/>
        </MediaQueryProvider>
    )
}

export default App