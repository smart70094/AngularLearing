angular.module('app', ['ui.grid'])
  .controller('ctrl', ctrl);

function ctrl() {
  this.myData = [
    {
        firstName: "Cox",
        lastName: "Carney",
        company: "Enormo",
        employed: true
    },
    {
        firstName: "Lorraine",
        lastName: "Wise",
        company: "Comveyer",
        employed: false
    },
    {
        firstName: "Nancy",
        lastName: "Waters",
        company: "Fuelton",
        employed: false
    }
  ];
}
