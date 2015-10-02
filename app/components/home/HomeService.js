
/**
 * Servicio para obtener los datos de la BD vía RESTful services,
 * para la pantalla de inicio
 **/
myApp.service('HomeService', ['$http', '$log', 'config', function ($http, $log, config) {
    
    this.countViajes = function(dependencia) {
        var idDep = 1;
        if (typeof dependencia !== "undefined") {
            idDep = dependencia.idDependencia;
        }
        var url = config.restUrl + "util/totalViajesByDependencia/" + idDep;
        var promise = $http.get(url).then(function (response) {
            $log.info(response.data);
            return response.data;
        });
        return promise;
    };
    
    this.totalViaticos = function(dependencia) {
        var idDep = 1;
        if (typeof dependencia !== "undefined") {
            idDep = dependencia.idDependencia;
        }
        var url = config.restUrl + "util/totalGastoByDependencia/" + idDep;
        var promise = $http.get(url).then(function (response) {
            return response.data;
        });
        return promise;
    };
    
}]);