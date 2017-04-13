// 407 Video App
// Authors: Roush, Joo, Wu, Crews-hill

var videoApp = angular.module('videoApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

videoApp.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider){
  if(window.plugins && window.plugins.nativepagetransitions)
    $ionicConfigProvider.views.transition('none');
  $stateProvider
    .state('startPage',{
      url: '/',
      templateUrl: '/407VideoAppRoughHTML',
      controller: 'startPage'
    })
    .state('takeAVideoPage', {

    })

  $urlRouterProvider.otherwise("/");
})

videoApp.controller('startPage', function($scope, $cordovaCapture, $state){
  //This is for the home screen that asks whether you want to use a video file or take a video
  //It will have two buttons that we need functionality for: UploadFile and TakeAVideo
$scope.on_uploadFile = function(){
//
// TODO: Upload File Functionality
}

$scope.on_takeAVideo = function(){
  //TODO: Finish TakeAVIDEO functionality , Jackie's Responsibility
  $state.go('takeAVideoPage');

  //Save it as a file (idk what type is easiest)
  //Use this video file as the template to edit in the rest of app
  }
})

videoApp.controller('takeAVideoPage', function($scope, $state, $cordovaCapture) {
  document.addEventListener("deviceready", init, false);
  function init() {

  }
}


