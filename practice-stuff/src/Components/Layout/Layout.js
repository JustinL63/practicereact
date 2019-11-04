import React from "react"
import Aux from "../../HOC/Auxillary"


const Layout = (props) => (
    <Aux>
        <div>
            Toolbar, SideDrawer, Backdrop
        </div>
        <main>
            {props.children}
        </main>
    </Aux>
)

export default Layout