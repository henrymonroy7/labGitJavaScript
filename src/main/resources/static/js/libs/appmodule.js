(function () {
    var app = angular.module('modone', []);
    
    app.controller('plan_control',function($scope,$http){
        $scope.collection=[];
        $scope.nameps;
        
        $scope.loadData = function() {
        var configList = {
            method: "GET",
            url: "blueprints"
        };

        var response=$http(configList);

        response.success(function(data, status, headers, config) {            
            $scope.collection = data;
        });

        response.error(function(data, status, headers, config) {
            alert("The petition has failed. HTTP Status:"+status);
        });
    };
    
    $scope.drawData = function(nameps) {
            $http({
                method: "GET",
                url: "blueprints/"+nameps                
            }).success(function(nameps) {
                var cnv= document.getElementById("idcanvas");
                var ctx = cnv.getContext("2d");
                
                switch(nameps){
                    case "larecta":
                        ctx.beginPath();
                        ctx.lineCap="round";
                        ctx.moveTo(20,20);
                        ctx.lineTo(200,20);
                        ctx.stroke();
                        break;
                    case 'rayon':
                        break;
                    case 'poligono1':
                        break;
                    
                }
                
                
            }).error(function(data,status,headers,config) {
                alert("Ha fallado la petición. Estado HTTP:"+status);
            });
        };
    
    
    

        }
                
    );
    
    
    
    /**
    $scope.drawData = function() {
            $http({
                method: "GET",
                url: "blueprints/"+nameps                
            }).success(function(nameps) {
                var cnv= document.getElementById("idcanvas");
                var ctx = cnv.getContext("2d");
                
                
            }).error(function(data,status,headers,config) {
                alert("Ha fallado la petición. Estado HTTP:"+status);
            });
        };**/
    
})();








