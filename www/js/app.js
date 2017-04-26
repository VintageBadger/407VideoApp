// 407 Video App
// Authors: Roush, Joo, Wu, Crews-hill
// Code used and modified from Frank Reding(Neontribe.co.uk)

var videoApp = angular.module('videoApp', ['ionic', 'ngCordova'])

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
      templateUrl: '/index.html',
      controller: 'startPage'
    })
    .state('takeAVideoPage', {

    })

  $urlRouterProvider.otherwise("/");
})

videoApp.controller('startPage', function($scope, $cordovaCapture, $state, $cordovaFile, $cordovaMedia){
  //This is for the home screen that asks whether you want to use a video file or take a video
  //It will have two buttons that we need functionality for: UploadFile and TakeAVideo

  $cordovaFile.getFreeDiskSpace().then(function (success) {
    // success in kilobytes
  }, function (error) {
    // error
  });

  $scope.on_uploadFile = function(){
    console.log("clicked");
// TODO: Upload File Functionality

    $cordovaFile.checkDir(cordova.file.files, externalDataDirectory)
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });
}

$scope.on_takeAVideo = function(){

  $state.go('takeAVideoPage');

  //Save it as a file (idk what type is easiest)
  //Use this video file as the template to edit in the rest of app
  }
})

