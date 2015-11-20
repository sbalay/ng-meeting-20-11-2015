angular.module('app').controller('ParticipantsController', [
  'participantsService',
  function (participantsService) {

    console.log('controller');

    this.loading = true;

    participantsService.getAll().then(
      (participants) => {
        console.log('participants');
        console.log(participants);
        this.errorFlag = false;
        this.participants = participants;
      }
    ).catch(
      (err) => {
        console.log('errpr');
        this.errorFlag = true;
      }
    ).finally(
      () => {
        this.loading = false;
      }
    );

  }
]);
