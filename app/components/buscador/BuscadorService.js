
/**
 * Servicio para obtener los datos vía RESTful
 */
myApp.service('BuscadorService', ['$http', '$resource', 'config', '$log', function ($http, $resource, config, $log) {
    
    /**
     * Obtiene los filtros de búsqueda (dinámicos) para la dependencia indicada
     */
    this.getFiltros = function(dependencia) {
        var idDep = 1;
        if (typeof dependencia !== "undefined") {
            idDep = dependencia.idDependencia;
        }
        var url = config.restUrl + "busqueda/filtrosByDependencia/" + idDep;
        var promise = $http.get(url).then(function (response) {
            return response.data;
        });
        return promise;
    };
    
    /**
     * Obtiene los encabezados de la tabla de resultados
     * @param {type} dependencia
     */
    this.getEncabezados = function(dependencia) {
        var idDep = 1;
        if (typeof dependencia !== "undefined") {
            idDep = dependencia.idDependencia;
        }
        var url = config.restUrl + "busqueda/encabezados/" + idDep;
        var promise = $http.get(url).then(function (response) {
            return response.data;
        });
        return promise;
    };
    
    /**
     * Muestra todos los viajes en un inicio
     */
    this.realizaBusqueda = function(dependencia) {
        var idDep = 1;
        if (typeof dependencia !== "undefined") {
            idDep = dependencia.idDependencia;
        }
        var url = config.restUrl + "busqueda/viajes/" + idDep;
        var promise = $http.get(url).then(function (response) {
            return response.data;
        });
        return promise;
    };
    
    /**
     * Procesa los filtros de búsqueda para poder realizar la búsqueda dinámica del lado del servidor
     * @param filtros   Objeto JSON que contiene los filtros de búsqueda
     */
    this.buscaByFiltros = function(dependencia, filtros) {
        var idDep = 1;
        if (typeof dependencia !== "undefined") {
            idDep = dependencia.idDependencia;
        }
        var url = config.restUrl + "busqueda/" + idDep;
        var jsonFiltros = [];
        var objBusqueda = {"parametros": []};
        
        /* Procesar los filtros de búsqueda antes de enviarlos */
        for (i=0; i<filtros.length; i++) {
            var obj = {id: "", valor: "", idValor: 0, comparador: "", fecha: null, 
                        tipoDato: "string", tipoControl: "", descripcion: ""};
            obj.id = filtros[i].id;
            obj.comparador = filtros[i].comparador;
            obj.tipoControl = filtros[i].tipoControl;
            obj.descripcion = filtros[i].campo;
            if (obj.tipoControl === "SELECT" && typeof filtros[i].json !== "undefined" && filtros[i].json !== null && filtros[i].json !== "") {
                obj.valor = filtros[i].json.valor;
                //obj.idValor = filtros[i].json.id;
                jsonFiltros = jsonFiltros.concat(obj);
            } else if (obj.tipoControl === "TEXT" && typeof filtros[i].json !== "undefined" && filtros[i].json !== "") {
                obj.valor = filtros[i].json; //El valor se guarda directamente en la propiedad json
                jsonFiltros = jsonFiltros.concat(obj);
            } else if (obj.tipoControl === "DATE" && typeof filtros[i].json !== "undefined" 
                    && typeof filtros[i].json.date !== "undefined" && filtros[i].json !== null 
                    && filtros[i].json.date !== "") {
                var d = filtros[i].json.date;
                obj.valor = d.getUTCDate() + "/" + (d.getUTCMonth()+1) + "/" + d.getUTCFullYear();
                obj.fecha = d; 
                obj.tipoDato = "date";
                jsonFiltros = jsonFiltros.concat(obj);
            }
        }
        
        objBusqueda.parametros = jsonFiltros;
        var promise = $http.post(url, objBusqueda).then(function (response) {
            return response.data;
        });
        return promise;
    };
    
}]);