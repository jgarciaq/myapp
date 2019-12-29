var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Salida desde el controller");

$http.get('/contactlist')    

    person1 = {
      name: 'Jhon Doe',
      email: 'jdoe@gmail.com',
      number: '(111)-111-111'
    };

    person2 = {
      name: 'Jane Smith',
      email: 'jsmith@gmail.com',
      number: '(222)-222-222'
    };

    person3 = {
      name: 'Tim Doe',
      email:'jdoe@gmail.com',
      number: '(333)-333-333'
    };

var contactlist = [person1, person2, person3];
$scope.contactlist = contactlist;

}]);
