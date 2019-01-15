// Landing pages
/* global FlowRouter, BlazeLayout */

FlowRouter.route('/', {
  action: function() {
    if(Meteor.userId()) {
      // If user is logged in
      BlazeLayout.render('App_Body', {
        main: 'Landing_page'
      })
    } else {
      // If user is not logged in
      BlazeLayout.render('App_Body', {
        main: 'Prompt_page'
      })
    }
  }
})

FlowRouter.route('/logout', {
  action: function() {
    Meteor.logout(function () {
      FlowRouter.go('/')
    })
  }
})