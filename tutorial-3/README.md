##tutorial-3

>directive和controller如何通信
>scope:{
       water:'@'
}
该表达式等价于：
>link:function(scope,element,attrs){
  scope.water=attrs.water;
 }