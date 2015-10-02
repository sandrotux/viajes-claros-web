
/**
 * Controlador global, añadido en el body.
 * Principalmente se utiliza para controlar el comparador de funcionarios (lateral izquierdo).
 */
myApp.controller('GlobalController', ['$scope', '$rootScope', '$log', '$location', 'GlobalService',
    function ($scope, $rootScope, $log, $location, GlobalService) {
    
    $scope.toggleComparador = false;
    $scope.funcionariosCompara = [];
    $scope.funcSelected;
    
    $scope.closeSidebar = function() {
        $scope.toggleComparador = false;
    };
    
    $scope.openSidebar = function() {
        $scope.toggleComparador = true;
    };
    
    /* Observar el cambio de dependencia */
    $scope.$watch(function() {
        return $rootScope.slcDependencia;
    }, function() {
        GlobalService.getFuncionarios().then(function(d) {
            $scope.funcionarios = d;
        });
    }, true);
    
    /* Agregar el funcionario seleccionado en el comparador */
    $scope.selectFuncionarioCompara = function($item, $model, $label) {
        $scope.funcionariosCompara.push($item);
        $log.info("compara: " + $scope.funcionariosCompara);
        $scope.funcSelected = "";
    };
    
    $scope.removeFuncionarioCompara = function(index) {
        $scope.funcionariosCompara.splice(index, 1);
    };
    
    /**
     * Función para redireccionar
     */
    $scope.go = function(path) {
        $location.path( path );
    };  
    
}]);