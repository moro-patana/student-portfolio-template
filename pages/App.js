// import React from "react"
// import About from "../components/about"
// import '../styles/body.css'
// import FrontEnd from "../components/frontEnd"
// import RecipeBlog from "../components/blog"
// import OrganiseCss from "../components/css"

// function App() {
//     return (
//         <div className="container">
//             <h1>Students Portfolio</h1>
//             <About/>
//             <RecipeBlog/>
//             <FrontEnd/>
//             <OrganiseCss/>
//         </div>
//     )
// }
// export default App;
import React from "react"
import { Switch, Route } from "react-router-dom"
import '../styles/body.css'
import About from "../components/about"
import Responsive from "../components/designList"
function App() {
  return (
      <div className="container">
          <About/>
          <Switch>
              <Route path="/">
                  <Responsive/>
              </Route>
          </Switch>
      </div>
  )
}
export default App;