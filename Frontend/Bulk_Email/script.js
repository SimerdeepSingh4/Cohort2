import box from './app.js'
import { circle } from './app.js'
let div = React.createElement('div', {id:'parent'},[ box(), circle()])
ReactDOM.createRoot(document.getElementById('root')).render(div)


