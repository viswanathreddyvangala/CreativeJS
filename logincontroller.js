var app = angular.module("myapp", []);
app.config(function(dateProvider) {
           var greeting= dateProvider.$get().givehours();
          if(greeting>=0 && greeting<=12){
          dateProvider.greet("GOOD MORNING");
          }else if(greeting>12&&greeting<=17){
            dateProvider.greet("GOOD AFTERNOON VISWAREDDY");
          }else
          dateProvider.greet("GOOD NIGHT");

          });
app.provider('date',function(){
  var greetmessage
             return{
               greet : function(value){
                 greetmessage = value;
               },
                 $get : function() {
                            return{
                                 givetime : function(){
                                 var date=new Date();
                                 var hours=date.getHours();
                                 var minutes=date.getMinutes();
                                 if(minutes>=0 && minutes<=9){
                                    minutes="0"+minutes;
                                  }
                                  return  hours+" : "+minutes;
                                },
                                givehours : function(){
                                var date=new Date();
                                var hours=date.getHours();
                                return hours;
                              },
                               givegreetings :function(){
                                 return greetmessage
                               }
                             }
                           }
    }
});
app.controller("logincontroller", function($scope,date){
  $scope.tasks=[];
  // // var taskdatalocal=localStroage['taskslist'];
  // if(taskdatalocal != undefined){
  //   $scope.tasks=JSON.parse(taskdatalocal);
  // }
  // $scope.guid = function() {
  //   function s4() {
  //     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  //   }
  //   return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  // }
  $scope.time=date.givetime();
  $scope.messge=date.givegreetings();
  $scope.searchEnter= function(){
    if(event.which  ==13 && $scope.texttoaddtask!="")
    $scope.addtask()
  };
  $scope.addtask= function(){
    $scope.tasks.push({'taskmessage':$scope.texttoaddtask ,'status':false});
      $scope.texttoaddtask="";
    // localStroage['tasklist']=JSON.stringify($scope.tasks);
    // console.log(localStroage)
  };
  $scope.contentedit= function(){
         event.target.contenteditable=event.target.contenteditable=="false"?"true":"false";
        console.log(event.target.contenteditable);
  };

$scope.clickagian =function(){
  if(event.which == 13 )
      $scope.contentedit();
}
});
app.controller('login',function($scope){
  $scope.submit = function(){
     console.log("asdadad")
    if($scope.text == 'viswa' && $scope.password == 'passowrd' ){
      console.log("suuccess")
    }
  }


})
