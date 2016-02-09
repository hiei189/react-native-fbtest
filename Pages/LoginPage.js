'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  NativeModules,
  View
} from 'react-native';

var FBLogin = require('react-native-facebook-login');
var FBLoginManager = NativeModules.FBLoginManager;

var PropTypes = React.PropTypes;

var LoginPage = React.createClass({

  render: function() {
    console.log('rendering');
    
    return (
      <FBLogin
          permissions={["email","user_friends"]}
          onLogin={function(e){console.log(e)}}
          onLogout={function(e){console.log(e)}}
          onLoginFound = {function(e){alert(e)}}
          onCancel={function(e){console.log(e)}}
          onPermissionsMissing={function(e){console.log(e)}}
          onLoginNotFound={function(){console.log("No user logged in.")}}
        />
    );
  }

});

module.exports = LoginPage;
