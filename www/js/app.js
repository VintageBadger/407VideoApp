// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
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
$scope.on_uploadFile = function(){

}

$scope.on_takeAVideo = function(){
  $state.go('takeAVideoPage');

  //Save it as a file (idk what type is easiest)
  //Use this video file as the template to edit in the rest of app
  }
})

videoApp.controller('takeAVideoPage', function($scope, $state, $cordovaCapture){
  document.addEventListener("deviceready", init, false);
  function init(){

  }

  //Need to get access to the camera
  // USED CODE FROM ngcordova.com/docs/plugins/capture/
  //Take a video, this captures Audio, Image, and Video
  $scope.captureAudio = function() {
    var options = { limit: 3, duration: 10 };

    $cordovaCapture.captureAudio(options).then(function(audioData) {
      // Success! Audio data is here
    }, function(err) {
      // An error occurred. Show a message to the user
    });
  }

  $scope.captureImage = function() {
    var options = { limit: 3 };

    $cordovaCapture.captureImage(options).then(function(imageData) {
      // Success! Image data is here
    }, function(err) {
      // An error occurred. Show a message to the user
    });
  }

  $scope.captureVideo = function() {
    var options = { limit: 3, duration: 15 };

    $cordovaCapture.captureVideo(options).then(function(videoData) {
      // Success! Video data is here
    }, function(err) {
      // An error occurred. Show a message to the user
    });
  }
})
