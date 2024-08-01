import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import "./index.css"
import ScrollToTop from './Companent/ScrollToTop/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>

)
