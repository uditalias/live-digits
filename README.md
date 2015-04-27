# live-digits v1.0.0
> AngularJS module for slide animation digits inside numbers

[Working Demo](http://uditalias.github.io/live-digits/demo/)

##installation
`$ bower install --save live-digits`

##usage

Just import `live-digits.min.js` and `live-digits.min.css` and add it to your app module

```html
<head>
  <link rel="stylesheet" href="bower_components/live-digits/dist/live-digits.css" />
  <script src="bower_components/live-digits/dist/live-digits.min.js"></script>
  
  <script>
    angular.module('myApp', ['udidu.live-digits'])
      .controller('mainController', ['$scope', '$timeout', function ($scope, $timeout) {
          
          $scope.liveValue = 100000;
          
          function _updateLiveValue() {
            $scope.liveValue = (Math.random() * 200000) + 100000;
            $timeout(_updateLiveValue, 1000);
          }
          
          _updateLiveValue();
      }]);
  </script>
</head>

<body ng-app="myApp" ng-controller="mainController">
  <!-- use the directive like this example: -->
  <live-digits value="liveValue" duration="300"></live-digits>
</body>

```

##options

The only 2 options you can config are `value` and `duration`

The `value` is the number (or string yeah!) which will be watched by the directive
to animate the value change.

The `duration` is optional and specifies the animation duration in milliseconds (default is `200`).

##dependencies

```json
"dependencies": {
  "angular": ">=1.x",
  "jquery": ">=1.x"
}
```

##build

Clone the project and run:

```
$ npm install

$ grunt build
```

The `dist/` folder will erase and the new build files will be copy into it

##license

MIT
