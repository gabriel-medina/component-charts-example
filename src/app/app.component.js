module.exports = {
  template: require('./app.html'),
  controller: function () {
    this.hello = 'Hello World!';
    
    this.pieChartTitle = 'Fruit Consumption 2017';
    this.pieChartSubtitle = 'Donor Sit Amet';

    this.pieChartData = {
      values : [
        {
          key : 'Banana',
          value : 50
        },
        {
          key : 'Apple',
          value : 25
        },
        {
          key : 'Watermelon',
          value : 20
        },
        {
          key : 'Strawberry',
          value : 5
        }
      ]
    };

    this.pieChartColorPalette = ['#221038','#301D3D','#67557D','#7D6A97','#9587AA'];

  }
};
