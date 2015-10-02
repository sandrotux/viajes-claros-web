myApp.controller("GraficasController", function ($scope) {

  $scope.labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
  $scope.series = ['Nacionales', 'Internacionales'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  
  $scope.labelsDonut = ["2013", "2014", "2015"];
  $scope.dataDonut = [300, 500, 100];
  
  $scope.labelsDonut2 = ["2013", "2014", "2015"];
  $scope.dataDonut2 = [500, 500, 200];
  
});
        