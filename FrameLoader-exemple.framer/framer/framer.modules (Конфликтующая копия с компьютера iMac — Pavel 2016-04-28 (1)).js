require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Loader":[function(require,module,exports){
exports.CircleExpand = function(opts) {
  var i, j, randCircWrap, script;
  if (opts == null) {
    opts = {};
  }
  script = document.createElement("script");
  script.innerHTML = "var interval = setInterval(function() { if(document.readyState === 'complete') { clearInterval(interval); var wrap = document.getElementsByName('randCircWrap')[0]; wrap.setAttribute('style','display:none'); wrap.remove(); console.log('success!') } }, 100);";
  document.head.appendChild(script);
  randCircWrap = new Layer({
    width: Screen.width,
    height: Screen.height,
    backgroundColor: opts.blue != null ? opts.blue : opts.blue = '#f45'
  });
  randCircWrap.parent = Framer.Device.screen;
  randCircWrap.bringToFront();
  randCircWrap.name = "randCircWrap";
  for (i = j = 3; j >= 0; i = --j) {
    Framer["circle" + i] = new Layer({
      width: 100 * i,
      height: 100 * i,
      borderRadius: 200,
      parent: randCircWrap
    });
    Framer["circle" + i].name = "circle" + i;
    Framer["circle" + i].center();
    Framer["animationA" + i] = new Animation({
      layer: Framer["circle" + (i + 1)],
      properties: {
        scale: 4
      },
      time: Utils.randomNumber(from, to),
      delay: 0.1,
      curve: "cubic-bezier(0.860, 0.000, 0.070, 1.000)"
    });
    Framer["animationB" + i] = Framer["animationA" + i].reverse();
    Framer["animationA" + i].on(Events.AnimationEnd, Framer["animationB" + i].start);
    Framer["animationB" + i].on(Events.AnimationEnd, Framer["animationA" + i].start);
  }
  Framer.animationA1.start();
  Framer.animationA2.start();
  Framer.animationA0.start();
  Framer.circle1.backgroundColor = opts.circle1 != null ? opts.circle1 : opts.circle1 = '#f45';
  Framer.circle2.backgroundColor = circle2;
  return Framer.circle3.backgroundColor = circle3;
};


},{}],"myModule":[function(require,module,exports){
exports.Spin = function(color) {
  var AnimationA, AnimationB, script, spin, spinWrap;
  if (color == null) {
    color = '#5A62E7';
  }
  script = document.createElement("script");
  script.innerHTML = "function preload(){ var v_obj = document.getElementsByName('spinWrap')[0]; v_obj.setAttribute('style','display:none'); } window.onload = function () { preload() }";
  document.head.appendChild(script);
  spinWrap = new Layer({
    backgroundColor: color,
    width: Screen.width,
    height: Screen.height
  });
  spinWrap.parent = Framer.Device.screen;
  spinWrap.bringToFront();
  spinWrap.name = "spinWrap";
  print("Loader");
  spin = new Layer({
    backgroundColor: 'black',
    width: 100,
    height: 100,
    borderRadius: 200,
    parent: spinWrap
  });
  spin.name = "spin";
  spin.center();
  AnimationA = new Animation({
    layer: spin,
    properties: {
      scale: 3
    },
    time: 0.4,
    curve: "ease-in-out"
  });
  AnimationB = AnimationA.reverse();
  AnimationA.start();
  AnimationA.on(Events.AnimationEnd, AnimationB.start);
  return AnimationB.on(Events.AnimationEnd, AnimationA.start);
};


/*class Loader extends Layer
        
    constructor: (options={}) ->
        options.backgroundColor = "rgba(0,0,0,0.7)"
        options.width = Screen.width
        options.height = Screen.height
        super options
        parent = Framer.Device.screen
        .bringToFront()

myFunction = ->
    print "I'm running!"

exports.Loader = Loader
 */


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcGF2ZWxsYXB0ZXYvRHJvcGJveC9wcmVsb2FkLXRlc3QvcHJlbC5mcmFtZXIvbW9kdWxlcy9Mb2FkZXIuY29mZmVlIiwiL1VzZXJzL3BhdmVsbGFwdGV2L0Ryb3Bib3gvcHJlbG9hZC10ZXN0L3ByZWwuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDRUEsT0FBTyxDQUFDLFlBQVIsR0FBdUIsU0FBQyxJQUFEO0FBRW5CLE1BQUE7O0lBRm9CLE9BQU87O0VBRTNCLE1BQUEsR0FBUyxRQUFRLENBQUMsYUFBVCxDQUF1QixRQUF2QjtFQUNULE1BQU0sQ0FBQyxTQUFQLEdBQ0k7RUFTSixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQWQsQ0FBMEIsTUFBMUI7RUFHQSxZQUFBLEdBQW1CLElBQUEsS0FBQSxDQUNmO0lBQUEsS0FBQSxFQUFPLE1BQU0sQ0FBQyxLQUFkO0lBQ0EsTUFBQSxFQUFRLE1BQU0sQ0FBQyxNQURmO0lBRUEsZUFBQSxzQkFBaUIsSUFBSSxDQUFDLE9BQUwsSUFBSSxDQUFDLE9BQVEsTUFGOUI7R0FEZTtFQUluQixZQUFZLENBQUMsTUFBYixHQUFzQixNQUFNLENBQUMsTUFBTSxDQUFDO0VBQ3BDLFlBQVksQ0FBQyxZQUFiLENBQUE7RUFDQSxZQUFZLENBQUMsSUFBYixHQUFvQjtBQUVwQixPQUFTLDBCQUFUO0lBQ0ksTUFBTyxDQUFBLFFBQUEsR0FBUyxDQUFULENBQVAsR0FBMkIsSUFBQSxLQUFBLENBQ3ZCO01BQUEsS0FBQSxFQUFPLEdBQUEsR0FBTSxDQUFiO01BQ0EsTUFBQSxFQUFRLEdBQUEsR0FBTSxDQURkO01BRUEsWUFBQSxFQUFjLEdBRmQ7TUFHQSxNQUFBLEVBQVEsWUFIUjtLQUR1QjtJQUszQixNQUFPLENBQUEsUUFBQSxHQUFTLENBQVQs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QUFVLENBQUMsRUFBWCxDQUFjLE1BQU0sQ0FBQyxZQUFyQixFQUFtQyxVQUFVLENBQUMsS0FBOUM7QUExQ1c7OztBQThDZiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbiMgQ3JlYXRlIGZ1bmN0aW9ucyBcbmV4cG9ydHMuQ2lyY2xlRXhwYW5kID0gKG9wdHMgPSB7fSkgLT5cblxuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIilcbiAgICBzY3JpcHQuaW5uZXJIVE1MID0gXG4gICAgICAgIFwidmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZihkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgdmFyIHdyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgncmFuZENpcmNXcmFwJylbMF07XG4gICAgICAgICAgICAgICAgd3JhcC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZGlzcGxheTpub25lJyk7XG4gICAgICAgICAgICAgICAgd3JhcC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcyEnKVxuICAgICAgICAgICAgfSAgICBcbiAgICAgICAgfSwgMTAwKTtcIlxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuXG4gICAgIyMgUHJlbG9hZGVyXG4gICAgcmFuZENpcmNXcmFwID0gbmV3IExheWVyXG4gICAgICAgIHdpZHRoOiBTY3JlZW4ud2lkdGhcbiAgICAgICAgaGVpZ2h0OiBTY3JlZW4uaGVpZ2h0XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogb3B0cy5ibHVlID89ICcjZjQ1J1xuICAgIHJhbmRDaXJjV3JhcC5wYXJlbnQgPSBGcmFtZXIuRGV2aWNlLnNjcmVlblxuICAgIHJhbmRDaXJjV3JhcC5icmluZ1RvRnJvbnQoKVxuICAgIHJhbmRDaXJjV3JhcC5uYW1lID0gXCJyYW5kQ2lyY1dyYXBcIlxuXG4gICAgZm9yIGkgaW4gWzMuLjBdXG4gICAgICAgIEZyYW1lcltcImNpcmNsZSN7aX1cIl0gPSBuZXcgTGF5ZXJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAgKiBpXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCAqIGlcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMjAwXG4gICAgICAgICAgICBwYXJlbnQ6IHJhbmRDaXJjV3JhcFxuICAgICAgICBGcmFtZXJbXCJjaXJjbGUje2l9XCJdLm5hbWUgPSBcImNpcmNsZSN7aX1cIlxuICAgICAgICBGcmFtZXJbXCJjaXJjbGUje2l9XCJdLmNlbnRlcigpXG4gICAgICAgICNhbmltYXRpb25cbiAgICAgICAgRnJhbWVyW1wiYW5pbWF0aW9uQSN7aX1cIl0gPSBuZXcgQW5pbWF0aW9uXG4gICAgICAgICAgICBsYXllcjogRnJhbWVyW1wiY2lyY2xlI3tpKzF9XCJdXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOlxuICAgICAgICAgICAgICAgIHNjYWxlOjRcbiAgICAgICAgICAgIHRpbWU6IFV0aWxzLnJhbmRvbU51bWJlcihmcm9tLCB0bylcbiAgICAgICAgICAgIGRlbGF5OiAwLjFcbiAgICAgICAgICAgIGN1cnZlOiBcImN1YmljLWJlemllcigwLjg2MCwgMC4wMDAsIDAuMDcwLCAxLjAwMClcIlxuICAgICAgICBGcmFtZXJbXCJhbmltYXRpb25CI3tpfVwiXSA9IEZyYW1lcltcImFuaW1hdGlvbkEje2l9XCJdLnJldmVyc2UoKVxuICAgICAgICBGcmFtZXJbXCJhbmltYXRpb25BI3tpfVwiXS5vbihFdmVudHMuQW5pbWF0aW9uRW5kLCBGcmFtZXJbXCJhbmltYXRpb25CI3tpfVwiXS5zdGFydClcbiAgICAgICAgRnJhbWVyW1wiYW5pbWF0aW9uQiN7aX1cIl0ub24oRXZlbnRzLkFuaW1hdGlvbkVuZCwgRnJhbWVyW1wiYW5pbWF0aW9uQSN7aX1cIl0uc3RhcnQpXG4gICAgRnJhbWVyLmFuaW1hdGlvbkExLnN0YXJ0KClcbiAgICBGcmFtZXIuYW5pbWF0aW9uQTIuc3RhcnQoKVxuICAgIEZyYW1lci5hbmltYXRpb25BMC5zdGFydCgpXG5cblxuICAgIEZyYW1lci5jaXJjbGUxLmJhY2tncm91bmRDb2xvciA9IG9wdHMuY2lyY2xlMSA/PSAnI2Y0NSdcbiAgICBGcmFtZXIuY2lyY2xlMi5iYWNrZ3JvdW5kQ29sb3IgPSBjaXJjbGUyXG4gICAgRnJhbWVyLmNpcmNsZTMuYmFja2dyb3VuZENvbG9yID0gY2lyY2xlMyAgIFxuIiwiXG4jIENyZWF0ZSBmdW5jdGlvbnMgXG5leHBvcnRzLlNwaW4gPSAoY29sb3IgPSAnIzVBNjJFNycpIC0+XG5cbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpXG4gICAgc2NyaXB0LmlubmVySFRNTCA9IFwiZnVuY3Rpb24gcHJlbG9hZCgpe1xuICAgICAgICAgICAgdmFyIHZfb2JqID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3NwaW5XcmFwJylbMF07XG4gICAgICAgICAgICB2X29iai5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZGlzcGxheTpub25lJyk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgcHJlbG9hZCgpXG4gICAgICAgIH1cIlxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuXG4gICAgIyMgbmV3IGxheWVyIHx8IHRyaWdnZXIgLSBuZXdMYXllciAjI1xuICAgIHNwaW5XcmFwID0gbmV3IExheWVyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JcbiAgICAgICAgd2lkdGg6IFNjcmVlbi53aWR0aFxuICAgICAgICBoZWlnaHQ6IFNjcmVlbi5oZWlnaHRcbiAgICBzcGluV3JhcC5wYXJlbnQgPSBGcmFtZXIuRGV2aWNlLnNjcmVlblxuICAgIHNwaW5XcmFwLmJyaW5nVG9Gcm9udCgpXG4gICAgc3BpbldyYXAubmFtZSA9IFwic3BpbldyYXBcIlxuICAgIHByaW50IFwiTG9hZGVyXCJcblxuICAgICMjIG5ldyBsYXllciB8fCB0cmlnZ2VyIC0gbmV3TGF5ZXIgIyNcbiAgICBzcGluID0gbmV3IExheWVyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaydcbiAgICAgIHdpZHRoOiAxMDBcbiAgICAgIGhlaWdodDogMTAwXG4gICAgICBib3JkZXJSYWRpdXM6IDIwMFxuICAgICAgcGFyZW50OiBzcGluV3JhcFxuICAgIHNwaW4ubmFtZSA9IFwic3BpblwiXG4gICAgc3Bpbi5jZW50ZXIoKVxuXG4gICAgIyBjcmVhdGUgbmV3IGFuaW1hdGlvbiB8fCB0cmlnZ2VyIC0gbmV3QW5pbVxuICAgIEFuaW1hdGlvbkEgPSBuZXcgQW5pbWF0aW9uXG4gICAgICAgIGxheWVyOiBzcGluXG4gICAgICAgIHByb3BlcnRpZXM6XG4gICAgICAgICAgICBzY2FsZTozXG4gICAgICAgIHRpbWU6IDAuNFxuICAgICAgICBjdXJ2ZTogXCJlYXNlLWluLW91dFwiXG4gICAgQW5pbWF0aW9uQiA9IEFuaW1hdGlvbkEucmV2ZXJzZSgpXG4gICAgQW5pbWF0aW9uQS5zdGFydCgpXG4gICAgQW5pbWF0aW9uQS5vbihFdmVudHMuQW5pbWF0aW9uRW5kLCBBbmltYXRpb25CLnN0YXJ0KVxuICAgIEFuaW1hdGlvbkIub24oRXZlbnRzLkFuaW1hdGlvbkVuZCwgQW5pbWF0aW9uQS5zdGFydClcblxuXG5cbiMjI2NsYXNzIExvYWRlciBleHRlbmRzIExheWVyXG4gICAgICAgIFxuICAgIGNvbnN0cnVjdG9yOiAob3B0aW9ucz17fSkgLT5cbiAgICAgICAgb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwwLDAsMC43KVwiXG4gICAgICAgIG9wdGlvbnMud2lkdGggPSBTY3JlZW4ud2lkdGhcbiAgICAgICAgb3B0aW9ucy5oZWlnaHQgPSBTY3JlZW4uaGVpZ2h0XG4gICAgICAgIHN1cGVyIG9wdGlvbnNcbiAgICAgICAgcGFyZW50ID0gRnJhbWVyLkRldmljZS5zY3JlZW5cbiAgICAgICAgLmJyaW5nVG9Gcm9udCgpXG5cbm15RnVuY3Rpb24gPSAtPlxuICAgIHByaW50IFwiSSdtIHJ1bm5pbmchXCJcblxuZXhwb3J0cy5Mb2FkZXIgPSBMb2FkZXIjIyMiXX0=
