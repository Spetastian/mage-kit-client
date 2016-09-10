import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, Link } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import Codex from './components/codex'
import Spells from './components/spells'
import Spell from './components/spells/spell'
import Spellbooks from './components/spellbooks'
import NotFound from './components/not-found'
import configureStore from './redux/configure-store'

let store = configureStore()
const history = syncHistoryWithStore(browserHistory, store,{
    selectLocationState (state) {
      return state.get('routing').toJS();
  }
})

const App = React.createClass({
  render() {
    return <div className="root-container">
    <header className="top-header">
      <nav>
          <ul className="tabs main-menu-holder">
            <li><Link to="/codex">Codex</Link></li>
            <li><Link to="/spells">Spells</Link></li>
            <li><Link to="/spellbooks">Spellbooks</Link></li>
          </ul>
      </nav>
      </header>
      <main>
      {this.props.children}
      </main>
    </div>
  }
})

render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="codex" component={Codex}/>
        <Route path="spells" component={Spells}>
          <Route path="/spell/:spellId" component={Spell}/>
        </Route>
          <Route path="spellbooks" component={Spellbooks}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
