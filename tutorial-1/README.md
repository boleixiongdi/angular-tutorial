##angular-tutorial1

>AngularJS 应用程序由 ng-app 定义。应用程序在 <body> 内运行。
>模块可以说是AngularJS 的根本。它包含配置、控制、过滤、工厂模式、指令及其它模块。
> >var app = angular.module('myApp', []);

>ng-controller="InvoiceCntl" 属性是一个 AngularJS 指令。用于定义一个控制器。
InvoiceCntl 函数是一个 JavaScript 函数。
AngularJS 使用$scope 对象来调用控制器。
在 AngularJS 中， $scope 是一个应用象(属于应用变量和函数)。
控制器的 $scope （相当于作用域、控制范围）用来保存AngularJS Model(模型)的对象。
控制器在作用域中创建了两个属性 (qty 和 cost)。
ng-model 指令绑定输入域到控制器的属性（qty 和 cost）。
这个{{表达式}}标记是AngularJS的数据绑定。其中的表达式可以是表达式和过滤器({{ expression | filter }})的组合。AngularJS提供了过滤器来对输入输出数据格式化。
上面的这个例子里，{{}}里的表达式让AngularJS把从输入框中获得的数据相乘，然后把相乘结果格式化成本地货币样式，然后输出到页面上。