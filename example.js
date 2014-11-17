angular.module('ui.bootstrap.papeditor', ['ui.bootstrap']);
angular.module('ui.bootstrap.papeditor').controller('PandaPolicyEditor', function ($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Group A',
      content: 'IG'
    },
    {
      title: 'Group B',
      content: '3MT'
    },
    {
      title: 'Group C',
      content: 'D&U'
    }
  ];

  $scope.policy_headers = [
    {
      title: 'Policy Identifier',
      content: 'Panda Policy 1'
    },
    {
      title: 'Rule Combination Algorithm',
      content: 'Algorithm 2'
    },
    {
      title: 'Description',
      content: 'This policy is to deny IM between groups.'
    }
  ];

  $scope.policy_targets = [
    {
      title: 'Subject',
      content: 'Any'
    },
    {
      title: 'Resource',
      content: 'Any'
    },
    {
      title: 'Action',
      content: 'IM Filter'
    }
  ];

  $scope.items = ['Rule 1', 'Rule 2', 'Rule 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Rule ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
});
