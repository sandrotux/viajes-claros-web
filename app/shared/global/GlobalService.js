
/**
 * Servicio para el controlador global
 */
myApp.service('GlobalService', ['$rootScope', '$http', 'config', '$log', function ($rootScope, $http, config, $log) {
     
    /**
     * Obtiene la dependencia seleccionada (default 1=INAI)
     */
    function getIdDependencia() {
        if (typeof $rootScope.slcDependencia !== "undefined") {
            return $rootScope.slcDependencia.idDependencia;
        } else {
            return 1;
        }
    }
        
    /**
     * Obtiene los funcionarios de la dependencia actual seleccionada
     */
    this.getFuncionarios = function() {
        var url = config.restUrl + "funcionario/funcionariosByDependencia/" + getIdDependencia();
        var promise = $http.get(url).then(function (response) {
            $log.info(response.data);
            return response.data;
        });
        return promise;
    };
    
}]);