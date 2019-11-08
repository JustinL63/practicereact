import React from 'react';
import './App.css';
import Layout from "../src/Components/Layout/Layout"
import BurgerBuilder from "../src/Containers/BurgerBuilder/BurgerBuilder"

class App extends React.Component {
  render() {
    return(
      <div>
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </div>
    )
  }
}
    
export default App;
