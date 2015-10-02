
/**
 * Controlador para la pantalla del Buscador
 */
myApp.controller('BuscadorController', ['$scope', '$rootScope', '$log', 'BuscadorService', function ($scope, $rootScope, $log, BuscadorService) {
      
    $scope.filtros = [];
    $scope.pagItemsByPage = 10;
    $scope.dependencia = $rootScope.slcDependencia;    

    /**
     * Obtiene los filtros de búsqueda (parametrizados en base de datos) para mostrarlos en la pantalla
     */
    BuscadorService.getFiltros($scope.dependencia).then(function(d) { 
        $log.info(d);
        $scope.filtros = d;
    });
    
    /**
     * Obtiene los encabezados de las columnas de la tabla de resultados
     */
    BuscadorService.getEncabezados($scope.dependencia).then(function(d) { 
        $scope.headers = d;
    });
        
    /**
     * Mostrar los viajes sin filtros en un inicio
     */
    BuscadorService.realizaBusqueda($scope.dependencia).then(function (d) {
        $scope.viajes = d;
        $scope.viajesSafe = d;
        $scope.total = d.length;
        $scope.pagTotalPages = Math.floor($scope.total / $scope.pagItemsByPage);
    });
    
    /**
     * Realiza la búsqueda
     */
    $scope.realizaBusqueda = function() {
        BuscadorService.buscaByFiltros($scope.dependencia, $scope.filtros).then(function (d) {
            $scope.viajes = d;
            console.log(d);
            $scope.viajesSafe = d;
            $scope.total = d.length;
            $scope.pagTotalPages = Math.floor($scope.total / $scope.pagItemsByPage);
        });
    };
    
}]);
