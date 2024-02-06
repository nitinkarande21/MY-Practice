// how to create component 
// functional componant
// first letter should be capital of component 

import "./app.css"
import Navigation from "./component/Navigation";
import Main from "./component/Main";
import { Bio } from "./component/Bio";

function App() {

  return (
    <div>
      <Navigation />
      <Main/>
      <Bio/>

    </div>

  );

}

export default App;
