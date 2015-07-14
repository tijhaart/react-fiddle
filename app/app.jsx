'use strict';

import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
// import 'normalize.css/normalize.css';
import './scss/app.scss';``
import React from 'react';
require('react-tap-event-plugin')();

// import {GroceryEditor} from 'modules/grocery'

// React.render(
//   <GroceryEditor />,
//   document.getElementById('app')
// );

import {GroceryEditorRender} from 'modules/grocery';

// React.render(
//   <GroceryEditorRender />,
//   document.getElementById('app')
// );

import {createApp, UI, View, ViewManager, Container} from 'touchstonejs';
let {NavigationBar, Tabs, GroupHeader} = UI;
let {Tab} = Tabs;
let TabLabel = Tabs.Label;

let GroceryListView = React.createClass({
  statics: {
    navigationBar: 'main',
    getNavigation ({name}) {
      return {
        title: name
      }
    }
  }
  ,
  render() {
    return (
      <Container>
        <GroceryEditorRender />
      </Container>
    );
  }
});

class TabsNavView extends React.Component {
  render() {
    return (
      <Container>
        <ViewManager ref="vm" name="tabs" defaultView={'groceries'}>
          <View name="groceries" component={GroceryListView} />
        </ViewManager>

        <Tabs.Navigator>
          <Tab>
            <i style={{fontSize:'1.5rem'}} className="ion-ios-cart"></i>
            <TabLabel>Groceries</TabLabel>
          </Tab>
        </Tabs.Navigator>
      </Container>
    );
  }
}

class MainView extends React.Component {
  render() {
    return (
      <Container>
        <NavigationBar name="main" />

        <ViewManager name="main" defaultView="tabs">
          <View name="tabs" component={TabsNavView} />
        </ViewManager>
      </Container>
    );
  }
}

let App = React.createClass({
  mixins: [createApp()]
  ,
  render() {
    return (
      <ViewManager name="app" defaultView="main">
        <View name="main" component={MainView} />
      </ViewManager>
    );
  }
});

React.render(<App />, document.getElementById('app'));
