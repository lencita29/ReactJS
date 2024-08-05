// install react router dom
// install npm i web-vitals
// localhost:3000/pathname
// comment all the function call inside the return in app.js

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import ArroFunction from './ArroFunction'
import ArrayMethods from './ArrayMethods'
import Variable from './Variable'
import Props from './Props'
import Conditionalrendering from './Conditionalrendering'
import Events from './Events'
import Destructuring from './Destructuring'
import Imp from './Imp'
import SpreadOperator from './SpreadOperator'
import Ternary from './Ternary'
import Test from './Test'
import Test2 from './Test2'
import Test3 from './Test3'
import Test4 from './Test4'
import Usestate from './Usestate'
import Notfound from './Notfound'
import Useeffect from './Useeffect'
import Localstorage from './Localstorage'
import View from './View'
import Edit from './Edit'
import Employe from './Employe'
import Empedit from './Empedit'
import Localstemploy from './Localstemploy'
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/ArroFunction" element={<ArroFunction />} />
                <Route exact path="/ArrayMethods" element={<ArrayMethods />} />
                <Route exact path="/Variable" element={<Variable />} />
                <Route exact path="/Props" element={<Props />} />
                <Route exact path="/Conditionalrendering" element={<Conditionalrendering />} />
                <Route exact path="/Events" element={<Events />} />
                <Route exact path="/Destructuring" element={<Destructuring />} />
                <Route exact path="/Imp" element={<Imp />} />
                <Route exact path="/SpreadOperator" element={<SpreadOperator />} />
                <Route exact path="/Ternary" element={<Ternary />} />
                <Route exact path="/Test" element={<Test />} />
                <Route exact path="/Test2" element={<Test2 />} />
                <Route exact path="/Test3" element={<Test3 />} />
                <Route exact path="/Test4" element={<Test4/>} />
                <Route exact path="/Usestate" element={<Usestate />} />
                <Route path="/Notfound" element={<Notfound />}/>
                <Route exact path="/Useeffect" element={<Useeffect />} />
                <Route exact path="/Localstorage" element={<Localstorage/>} />
                <Route exact path="/View" element={<View/>} />
                {/* <Route exact path="/Edit" element={<Edit/>} /> */}
                <Route exact path="/Edit/:item" element={<Edit/>} />
                <Route exact path="/Employe" element={<Employe/>} />
                <Route exact path="/Empedit/:item" element={<Empedit/>} />
                <Route exact path="/Localstemploy" element={<Localstemploy/>} />
            
            </Routes>
        </BrowserRouter>

        //    create link in the home page home.jsx
        // wihout router link will not execute
    )
}
