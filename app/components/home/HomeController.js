
myApp.controller('HomeController', ['$scope', '$rootScope', '$log', 'HomeService', function ($scope, $rootScope, $log, HomeService) {
    
    $scope.toggleAirplane = true;
    $scope.dependencia = $rootScope.slcDependencia;
    
    $scope.mapCenter = {
		lng : -50.133208,
		lat : 19.4326077,
		zoom : 3
	};
    
    HomeService.countViajes($scope.dependencia).then(function (d) {
	    $scope.totalViajes = d.descripcion;
	});
    
    HomeService.totalViaticos($scope.dependencia).then(function (d) {
	    $scope.totalGastado = d.descripcion;
	});
    
    
    $scope.tresViajes = [
        {ciudad: "Durango", pais: "México", tema: "DECLARACIÓN CONJUNTA PARA LA IMPLEMENTACIÓN DE ACCIONES PARA UN GOBIERNO ABIERTO.", fecha: "24/08/2015"},
        {ciudad: "Los Cabos", pais: "México", tema: "NOTIFICACIÓN - 12/JUL/15 - BAJA CALIFORNIA SUR", fecha: "12/07/2015"},
        {ciudad: "Zapopan", pais: "México", tema: "SEGUNDO FORO DE CONSULTA PARA LAS POSIBLES REFORMAS EN MATERIA DE TRANSPARENCIA LUEGO DE LA PROMULGACIÓN DE LA LEY GENERAL DE TRANSPARENCIA. FORO: \"UN JALISCO TRANSPARENTE: TRABAJO DE TODOS LOS DÍAS\"", fecha: "09/07/2015"}
    ];
    
    $scope.tresServidores = [
        {nombre: "Rosendoevgueni Monterrey Chepov", puesto: "COMISIONADA PRESIDENTE", monto: "324143"},
        {nombre: "Ximena Puente De La Mora", puesto: "COMISIONADO", monto: "260855"},
        {nombre: "Christian Laris Cutiño", puesto: "DIRECTOR DE RELACIONES INTERINSTITUCIONALES Y PÚBLICAS", monto: "201441"}
    ];
    
    $scope.tresServidoresViajes = [
        {nombre: "Christian Laris Cutiño", puesto: "DIRECTOR DE RELACIONES INTERINSTITUCIONALES Y PÚBLICAS", totalViajes: "35"},
        {nombre: "Ximena Puente De La Mora", puesto: "COMISIONADA PRESIDENTE", totalViajes: "26"},
        {nombre: "Francisco Javier Acuña Llamas", puesto: "COMISIONADO", totalViajes: "25"}
    ];
    
}]);
