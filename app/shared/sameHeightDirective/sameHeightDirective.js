myApp.directive('sameHeight', function ($log) { //declaration; identifier master
    
    function link(scope, element, attrs) { //scope we are in, element we are bound to, attrs of that element
        scope.$watch(function() {   
            var childs = element.children();
            var heights = [];
            for (var i=0; i<childs.length; i++) {
                heights.push(childs[i].clientHeight);
            }
            
            // altura máxima
            var max = Math.max.apply(null, heights);
            $log.info(max);
            
            // aplicar a todos los elementos
            //angular.element(element.querySelector('.panel')).style.height = '100px';
            for (var i=0; i<childs.length; i++) {
                childs[i].style.height = max + 'px';
            }
        });
    }
    
    return {
        restrict: 'A', //describes how we can assign an element to our directive in this case like <div master></div
        link: link // the function to link to our element
    };
}); 