angular.module('app').factory('participantsService', [
  '$q',
  function ($q) {

    return {
      getAll: () => {
        const deferred = $q.defer();

        setTimeout(() => {
          const rand = Math.random();
          if (rand > 0.3) {
            deferred.resolve(['mishu', 'juli', 'uva', 'prudi', 'gabo', 'rama', 'seba',
                              'creo que ita', 'por ahi guido']);
          } else {
            deferred.reject();
          }
        }, 1500);

        return deferred.promise;
      }
    };

  }
]);
