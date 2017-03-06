var d3 = require('d3');

module.exports = {
  template: require('./cch-pie-chart.html'),
  controller: PieChartController,
  bindings: {
    title: '<',
    subtitle: '<',
    colorPalette: '<',
    data: '<'
  }
};

/** @ngInject */
function PieChartController($scope, $window, $element){
  var $ctrl = this;

  var DEFAULT_WIDTH = 640;
  var DEFAULT_HEIGHT = 480;

  this.$postLink = postLink;

  function postLink(){

    // data values will be watched
    // if data is undefined or null, do not render anything!
    // if data changes, re-render
    // (if you want to be fancy) if data changes for second time, do a transition... 

    $scope.$watch( function(){ return $ctrl.data }, function( prev, cur ){
      if (cur !== undefined){
        render();
      }
    } );
  }

  function render(){

    console.log('the DOM element and controller data: ', $element, $ctrl);

    var width = DEFAULT_WIDTH;
    var height = DEFAULT_HEIGHT;
    var colorPalette = $ctrl.colorPalette;
    var data = $ctrl.data;

    var verticalPadding = 10;
    var titleSize = 24;
    var subtitleSize = 16;

    // PIE FORMING OBJECTS
    var radius = Math.min(width,height)/3;
    var arc = d3.svg.arc()
                .outerRadius(radius - 10)
                .innerRadius(0);

    var pieFn = d3.layout.pie().value( function(d){ return d.value; } );

    // TITLES AND SUBTITLES
    var svg = d3.select($element[0])
      .append('svg')
        .attr({
          width: DEFAULT_WIDTH,
          height: DEFAULT_HEIGHT
        })
        .style({
          "background-color": 'white' // testing purposes
        });

    svg.append('text')
      .text($ctrl.title)
      .attr({
        "text-anchor": 'middle',
        x: (width / 2),
        y: verticalPadding + titleSize,
        "font-family": 'sans-serif',
        fill: 'black',
        "font-size": titleSize + 'px'
      });

    svg.append('text')
      .text($ctrl.subtitle)
      .attr({
        "text-anchor": 'middle',
        x: (width / 2),
        y: verticalPadding + titleSize + verticalPadding + subtitleSize,
        "font-family": 'sans-serif',
        fill: 'gray',
        "font-size": subtitleSize + 'px'
      });

    var graphG = svg.append('g')
      .attr("transform", "translate(" + (width / 2) + "," + (height / 2) + ")");

    // console.log("data.values",data.values,pieFn(data.values));

    var g = graphG.selectAll(".arc")
      .data(pieFn(data.values))
      .enter().append("g")
        .attr("class", "arc");

    g.append("path")
      .attr("d", arc)
      .style("fill", function(d,i){return colorPalette[i];} );

    
  }
}
