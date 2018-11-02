angular.module("Demo", []).controller("DemoCtrl", function($scope, $http) {
  function openInNewTab() {
    var uri = 'http://martinfowler.com/ieeeSoftware/whenType.pdf';
    var link = angular.element('<a href="' + uri + '" target="_blank"></a>');

    angular.element(document.body).append(link);

    link[0].click();
    link.remove();
  };
  
  $("#test").click(function(){
    openInNewTab();
  });
  
  $("#test").click();

  $scope.works = openInNewTab;

  $scope.doesntWork = function() {
    $http.get('https://api.github.com/users/angular').then(openInNewTab);
  };
});