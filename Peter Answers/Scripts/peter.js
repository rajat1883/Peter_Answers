var app = angular.module('peterApp', []).
    controller('peterController', function ($scope) {
        var cheatState = false;
        $scope.answer = '';
        var i = 0;
        var dummyText = 'Peter please answer my question';
        $scope.petition = '';
        $scope.changeText = function (keyPressed) {
            if (keyPressed === '.')
            {
                event.preventDefault();
                cheatState = !cheatState;
            }
            if (cheatState) {
                event.preventDefault();
                if (keyPressed !== '.') {
                    $scope.answer += keyPressed;
                }
                $scope.petition += dummyText[i] !== undefined ? dummyText[i] : ' ';
            }
            if (!cheatState && keyPressed === '.') {
                $scope.petition += dummyText[i] !== undefined ? dummyText[i] : ' ';
            }
            i++;
        };

        $scope.resetPeter = function () {
            cheatState = false;
            $scope.answer = '';
            i = 0;
            $scope.petition = '';
            $scope.question = '';
            $scope.showAnswer = false;
        };

        $scope.fireAnswer = function (keyPressed) {
            if (keyPressed === '?') {
                $scope.showAnswer = true;
            }
        };

    });