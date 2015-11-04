
/**
 * Controlador para la pantalla del Funcionarios
 */
myApp.controller('FuncionarioController', ['$scope', 'FuncionarioService', function ($scope, FuncionarioService) {
        
    FuncionarioService.getFuncionariosByDependencia().then(function(d) {
        $scope.funcionarios = d;
    });
    
}]);