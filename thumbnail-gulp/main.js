(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Fitzs-Jobs/Development/ReactCasts/thumbnail-gulp/src/app.jsx":[function(require,module,exports){
var options = {
  thumbnailData: [{
    title: "Show Courses",
    number: 12,
    header: 'Learn React',
    description: 'React is fantastic library.',
    imageURL: 'http://formatjs.io/img/react.svg'
  },{
    title: "Show Courses",
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp speeds up your development workflow.',
    imageURL: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
  }]
};

console.log('hey');

// React, please render Class
var element = React.createElement(ThumbnailList, options);

// React, after you render, place in body tag
React.render(element, document.querySelector('.target'));

},{}]},{},["/Fitzs-Jobs/Development/ReactCasts/thumbnail-gulp/src/app.jsx"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvRml0enMtSm9icy9EZXZlbG9wbWVudC9SZWFjdENhc3RzL3RodW1ibmFpbC1ndWxwL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBSSxPQUFPLEdBQUc7RUFDWixhQUFhLEVBQUUsQ0FBQztJQUNkLEtBQUssRUFBRSxjQUFjO0lBQ3JCLE1BQU0sRUFBRSxFQUFFO0lBQ1YsTUFBTSxFQUFFLGFBQWE7SUFDckIsV0FBVyxFQUFFLDZCQUE2QjtJQUMxQyxRQUFRLEVBQUUsa0NBQWtDO0dBQzdDLENBQUM7SUFDQSxLQUFLLEVBQUUsY0FBYztJQUNyQixNQUFNLEVBQUUsRUFBRTtJQUNWLE1BQU0sRUFBRSxZQUFZO0lBQ3BCLFdBQVcsRUFBRSwyQ0FBMkM7SUFDeEQsUUFBUSxFQUFFLDREQUE0RDtHQUN2RSxDQUFDO0FBQ0osQ0FBQyxDQUFDOztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRW5CLDZCQUE2QjtBQUM3QixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFMUQsNkNBQTZDO0FBQzdDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIG9wdGlvbnMgPSB7XG4gIHRodW1ibmFpbERhdGE6IFt7XG4gICAgdGl0bGU6IFwiU2hvdyBDb3Vyc2VzXCIsXG4gICAgbnVtYmVyOiAxMixcbiAgICBoZWFkZXI6ICdMZWFybiBSZWFjdCcsXG4gICAgZGVzY3JpcHRpb246ICdSZWFjdCBpcyBmYW50YXN0aWMgbGlicmFyeS4nLFxuICAgIGltYWdlVVJMOiAnaHR0cDovL2Zvcm1hdGpzLmlvL2ltZy9yZWFjdC5zdmcnXG4gIH0se1xuICAgIHRpdGxlOiBcIlNob3cgQ291cnNlc1wiLFxuICAgIG51bWJlcjogMjUsXG4gICAgaGVhZGVyOiAnTGVhcm4gR3VscCcsXG4gICAgZGVzY3JpcHRpb246ICdHdWxwIHNwZWVkcyB1cCB5b3VyIGRldmVsb3BtZW50IHdvcmtmbG93LicsXG4gICAgaW1hZ2VVUkw6ICdodHRwczovL2F2YXRhcnMwLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzYyMDA2MjQ/dj0zJnM9NDAwJ1xuICB9XVxufTtcblxuY29uc29sZS5sb2coJ2hleScpO1xuXG4vLyBSZWFjdCwgcGxlYXNlIHJlbmRlciBDbGFzc1xudmFyIGVsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFRodW1ibmFpbExpc3QsIG9wdGlvbnMpO1xuXG4vLyBSZWFjdCwgYWZ0ZXIgeW91IHJlbmRlciwgcGxhY2UgaW4gYm9keSB0YWdcblJlYWN0LnJlbmRlcihlbGVtZW50LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFyZ2V0JykpOyJdfQ==
