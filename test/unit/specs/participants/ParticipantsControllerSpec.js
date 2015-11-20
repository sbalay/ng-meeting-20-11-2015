describe('ParticipantsController', function () {

  var passPromise,
      ParticipantsController,
      mockParticipantsService,
      rootScope;

  beforeEach(function () {
    module('app');

    module(function ($provide) {
      $provide.factory('participantsService', [
        '$q',
        function($q) {
          return {
            getAll: jasmine.createSpy('getAll').and.callFake(function () {
              console.log('getall');
              console.log('passPromise');
              console.log(passPromise);
              var deferred = $q.defer();
              if (passPromise) {
                deferred.resolve(['mockParticipant'])
              } else {
                deferred.reject();
              }
              return deferred.promise;
            })
          };
        }
      ]);
    });
  });

  beforeEach(inject(function ($controller, participantsService, $rootScope) {
    mockParticipantsService = participantsService;
    rootScope = $rootScope;
    ParticipantsController = $controller('ParticipantsController', {
      participantsService: mockParticipantsService
    });
  }));

  describe('initialization', function () {

    it('should get all participants', function () {
      expect(mockParticipantsService.getAll).toHaveBeenCalled();
    });

    it('should set participants after getAll success', function () {
      passPromise = true;
      expect(ParticipantsController.participants).toEqual(['mockParticipant']);
    });

    it('should set error status after getAll failure', function () {
      passPromise = false;
      expect(ParticipantsController.errorFlag).toBe(true);
    });

    it('should not be loading', function () {
      expect(ParticipantsController.loading).toBe(false);
    });

  });

});
