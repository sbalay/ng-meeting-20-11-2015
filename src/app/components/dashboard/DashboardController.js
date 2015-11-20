angular.module('app').controller('DashboardController', [
  function () {

    this.soyElController = true;

    const fn = () => {
      console.log('this en fn');
      console.log(this);

      const fn1 = function () {
        console.log('this en fn1');
        console.log(this);

        const fn2 = () => {
          console.log('this en fn2');
          console.log(this);

        };

        fn2();

      };

      fn1();

    };

    fn();

  }
]);
