'use strict';

angular.module('udidu.live-digits', []).directive('liveDigits', [function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            value: '=',
            duration: '='
        },
        template: '<div class="udidu-live-digits"></div>',
        compile: function () {

            // the reason I didn't put this one on String.prototype
            // is not to pollute the global String prototype
            function _format() {
                var args = arguments;
                return this.replace(/{(\d+)}/g, function (match, number) {
                    return typeof args[number] !== 'undefined' ? args[number] : match;
                });
            }

            return function ($scope, $element, $attrs) {

                var _oldValueArr = null
                    , _newValueArr = null
                    , _elementHeight = 0
                    , _valueWatcher = null;

                $scope.duration = $scope.duration || 200;

                function _process() {

                    _newValueArr = $scope.value.toString().split('');

                    if (_oldValueArr && _oldValueArr.length == _newValueArr.length) {
                        _processNewValueAnimation();
                    } else {
                        _processFirstValue();
                    }

                    _oldValueArr = _newValueArr;
                }

                function _processNewValueAnimation() {
                    for (var i = 0, len = _newValueArr.length; i < len; i++) {
                        if (_newValueArr[i] != _oldValueArr[i]) {
                            if (_newValueArr[i] > _oldValueArr[i]) {
                                _animateCharAtIndexFromTop(i);
                            } else {
                                _animateCharAtIndexFromBottom(i);
                            }
                        }
                    }
                }

                function _animateCharAtIndexFromTop(index) {

                    var _newChar = _newValueArr[index]
                        , _selector = _format.call('div[data-idx="{0}"]', index);

                    var $numWrapper = $element.find(_selector);

                    $numWrapper.prepend(_format.call('<div>{0}</div>', _newChar));

                    $numWrapper.css('top', -_elementHeight);

                    $numWrapper.animate({'top': 0}, $scope.duration, function () {
                        $(this).find('div:nth-child(2)').remove();
                    });
                }

                function _animateCharAtIndexFromBottom(index) {

                    var _newChar = _newValueArr[index]
                        , _selector = _format.call('div[data-idx="{0}"]', index);

                    var $numWrapper = $element.find(_selector);

                    $numWrapper.append(_format.call('<div>{0}</div>', _newChar));

                    $numWrapper.animate({'top': -_elementHeight}, $scope.duration, function () {

                        $(this).find('div:nth-child(1)').remove();

                        $numWrapper.css('top', 0);
                    });
                }

                function _processFirstValue() {
                    var _elements = [];

                    // build the numbers html parts
                    for (var i = 0, len = _newValueArr.length; i < len; i++) {
                        _elements.push(_format.call('<div data-idx="{0}" class="digit-wrapper"><div>{1}</div></div>', i, _newValueArr[i]));
                    }

                    // push the html parts array into the wrapper element
                    $element.html(_elements.join(''));

                    // now that we have numbers we can gain the wrapper height
                    _elementHeight = $element.outerHeight(true);

                    // set a fixed height for the element
                    $element.css('height', _elementHeight);
                }

                _valueWatcher = $scope.$watch('value', function () {
                    _process();
                });

                $scope.$on('$destroy', function () {
                    _valueWatcher && _valueWatcher();
                });
            }
        }
    }
}]);
