var app = angular.module('LoginApp', []);

app.controller('ctrlLogin', function($scope, $http)
{    

    
    $scope.mostrarLogin = true;
    $scope.mostrarError = false;
    $scope.mensaje = "";
    $scope.modelPass="";
    $scope.modelRut="";


    $scope.login=function(){
        var user=({
            rutCliente:$scope.modelRut,
            password:$scope.modelPass
        });
    
        $http( {method:'POST',url: "http://localhost:8080/clientes/login",data:user}).then(function(respuesta){
            console.log(respuesta.data);
            if(respuesta.data){
                window.location.href="Home.html"
            }else{
                $scope.mostrarError=true;
                $scope.mensaje="Rut o clave incorrectos";
            }
        })
    }
});