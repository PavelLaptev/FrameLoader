require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Loader":[function(require,module,exports){
exports.CircleExpand = function(opts) {
  var flag, from, i, j, randCircWrap, scriptEnable, to;
  if (opts == null) {
    opts = {};
  }
  flag = opts.enable != null ? opts.enable : opts.enable = 1;
  scriptEnable = function() {
    var script;
    script = document.createElement("script");
    script.innerHTML = "var interval = setInterval(function() { if(document.readyState === 'complete') { clearInterval(interval); var wrap = document.getElementsByName('randCircWrap')[0]; wrap.setAttribute('style','display:none'); wrap.remove(); console.log('success!') } }, 100);";
    return document.head.appendChild(script);
  };
  randCircWrap = new Layer({
    width: Screen.width,
    height: Screen.height,
    backgroundColor: opts.back != null ? opts.back : opts.back = '#348aa7'
  });
  randCircWrap.parent = Framer.Device.screen;
  randCircWrap.bringToFront();
  randCircWrap.name = "randCircWrap";
  from = opts.from != null ? opts.from : opts.from = 0.4;
  to = opts.to != null ? opts.to : opts.to = 3;
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
  Framer.circle1.backgroundColor = opts.circle1 != null ? opts.circle1 : opts.circle1 = '#5dd39e';
  Framer.circle2.backgroundColor = opts.circle2 != null ? opts.circle2 : opts.circle2 = '#bce784';
  return Framer.circle3.backgroundColor = opts.circle3 != null ? opts.circle3 : opts.circle3 = '#525174';
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdXNlci9Ecm9wYm94L3ByZWxvYWQtdGVzdC9wcmVsLmZyYW1lci9tb2R1bGVzL0xvYWRlci5jb2ZmZWUiLCIvVXNlcnMvdXNlci9Ecm9wYm94L3ByZWxvYWQtdGVzdC9wcmVsLmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0VBLE9BQU8sQ0FBQyxZQUFSLEdBQXVCLFNBQUMsSUFBRDtBQUVuQixNQUFBOztJQUZvQixPQUFPOztFQUUzQixJQUFBLHlCQUFPLElBQUksQ0FBQyxTQUFMLElBQUksQ0FBQyxTQUFVO0VBQ3RCLFlBQUEsR0FBZSxTQUFBO0FBQ1gsUUFBQTtJQUFBLE1BQUEsR0FBUyxRQUFRLENBQUMsYUFBVCxDQUF1QixRQUF2QjtJQUNULE1BQU0sQ0FBQyxTQUFQLEdBQ0k7V0FTSixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQWQsQ0FBMEIsTUFBMUI7RUFaVztFQWNmLFlBQUEsR0FBbUIsSUFBQSxLQUFBLENBQ2Y7SUFBQSxLQUFBLEVBQU8sTUFBTSxDQUFDLEtBQWQ7SUFDQSxNQUFBLEVBQVEsTUFBTSxDQUFDLE1BRGY7SUFFQSxlQUFBLHNCQUFpQixJQUFJLENBQUMsT0FBTCxJQUFJLENBQUMsT0FBUSxTQUY5QjtHQURlO0VBSW5CLFlBQVksQ0FBQyxNQUFiLEdBQXNCLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDcEMsWUFBWSxDQUFDLFlBQWIsQ0FBQTtFQUNBLFlBQVksQ0FBQyxJQUFiLEdBQW9CO0VBRXBCLElBQUEsdUJBQU8sSUFBSSxDQUFDLE9BQUwsSUFBSSxDQUFDLE9BQVE7RUFDcEIsRUFBQSxxQkFBSyxJQUFJLENBQUMsS0FBTCxJQUFJLENBQUMsS0FBTTtBQUVoQixPQUFTLDBCQUFUO0lBQ0ksTUFBTyxDQUFBLFFBQUEsR0FBUyxDQUFULENB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RUFBTyxJQUFQO0lBQ0EsVUFBQSxFQUNJO01BQUEsS0FBQSxFQUFNLENBQU47S0FGSjtJQUdBLElBQUEsRUFBTSxHQUhOO0lBSUEsS0FBQSxFQUFPLGFBSlA7R0FEYTtFQU1qQixVQUFBLEdBQWEsVUFBVSxDQUFDLE9BQVgsQ0FBQTtFQUNiLFVBQVUsQ0FBQyxLQUFYLENBQUE7RUFDQSxVQUFVLENBQUMsRUFBWCxDQUFjLE1BQU0sQ0FBQyxZQUFyQixFQUFtQyxVQUFVLENBQUMsS0FBOUM7U0FDQSxVQUFVLENBQUMsRUFBWCxDQUFjLE1BQU0sQ0FBQyxZQUFyQixFQUFtQyxVQUFVLENBQUMsS0FBOUM7QUExQ1c7OztBQThDZiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbiMgTE9BREVSIE9ORVxuZXhwb3J0cy5DaXJjbGVFeHBhbmQgPSAob3B0cyA9IHt9KSAtPlxuICAgICMgcGFzdGUgc2NyaXB0IGluIERPTVxuICAgIGZsYWcgPSBvcHRzLmVuYWJsZSA/PSAxXG4gICAgc2NyaXB0RW5hYmxlID0gLT5cbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKVxuICAgICAgICBzY3JpcHQuaW5uZXJIVE1MID0gXG4gICAgICAgICAgICBcInZhciBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB3cmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3JhbmRDaXJjV3JhcCcpWzBdO1xuICAgICAgICAgICAgICAgICAgICB3cmFwLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdkaXNwbGF5Om5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MhJylcbiAgICAgICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgfSwgMTAwKTtcIlxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdClcbiAgICAjIGJhY2tncm91bmQgbGF5ZXJcbiAgICByYW5kQ2lyY1dyYXAgPSBuZXcgTGF5ZXJcbiAgICAgICAgd2lkdGg6IFNjcmVlbi53aWR0aFxuICAgICAgICBoZWlnaHQ6IFNjcmVlbi5oZWlnaHRcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBvcHRzLmJhY2sgPz0gJyMzNDhhYTcnXG4gICAgcmFuZENpcmNXcmFwLnBhcmVudCA9IEZyYW1lci5EZXZpY2Uuc2NyZWVuXG4gICAgcmFuZENpcmNXcmFwLmJyaW5nVG9Gcm9udCgpXG4gICAgcmFuZENpcmNXcmFwLm5hbWUgPSBcInJhbmRDaXJjV3JhcFwiXG4gICAgIyB2YXJzXG4gICAgZnJvbSA9IG9wdHMuZnJvbSA/PSAwLjRcbiAgICB0byA9IG9wdHMudG8gPz0gM1xuICAgICMgY3JlYXRlIGNpcmNsZXMgYW5kIGFuaW1hdGlvbnNcbiAgICBmb3IgaSBpbiBbMy4uMF1cbiAgICAgICAgRnJhbWVyW1wiY2lyY2xlI3tpfVwiXSA9IG5ldyBMYXllclxuICAgICAgICAgICAgd2lkdGg6IDEwMCAqIGlcbiAgICAgICAgICAgIGhlaWdodDogMTAwICogaVxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyMDBcbiAgICAgICAgICAgIHBhcmVudDogcmFuZENpcmNXcmFwXG4gICAgICAgIEZyYW1lcltcImNpcmNsZSN7aX1cIl0ubmFtZSA9IFwiY2lyY2xlI3tpfVwiXG4gICAgICAgIEZyYW1lcltcImNpcmNsZSN7aX1cIl0uY2VudGVyKClcbiAgICAgICAgI2FuaW1hdGlvbnNcbiAgICAgICAgRnJhbWVyW1wiYW5pbWF0aW9uQSN7aX1cIl0gPSBuZXcgQW5pbWF0aW9uXG4gICAgICAgICAgICBsYXllcjogRnJhbWVyW1wiY2lyY2xlI3tpKzF9XCJdXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOlxuICAgICAgICAgICAgICAgIHNjYWxlOjRcbiAgICAgICAgICAgIHRpbWU6IFV0aWxzLnJhbmRvbU51bWJlcihmcm9tLCB0bylcbiAgICAgICAgICAgIGRlbGF5OiAwLjFcbiAgICAgICAgICAgIGN1cnZlOiBcImN1YmljLWJlemllcigwLjg2MCwgMC4wMDAsIDAuMDcwLCAxLjAwMClcIlxuICAgICAgICBGcmFtZXJbXCJhbmltYXRpb25CI3tpfVwiXSA9IEZyYW1lcltcImFuaW1hdGlvbkEje2l9XCJdLnJldmVyc2UoKVxuICAgICAgICBGcmFtZXJbXCJhbmltYXRpb25BI3tpfVwiXS5vbihFdmVudHMuQW5pbWF0aW9uRW5kLCBGcmFtZXJbXCJhbmltYXRpb25CI3tpfVwiXS5zdGFydClcbiAgICAgICAgRnJhbWVyW1wiYW5pbWF0aW9uQiN7aX1cIl0ub24oRXZlbnRzLkFuaW1hdGlvbkVuZCwgRnJhbWVyW1wiYW5pbWF0aW9uQSN7aX1cIl0uc3RhcnQpXG4gICAgRnJhbWVyLmFuaW1hdGlvbkExLnN0YXJ0KClcbiAgICBGcmFtZXIuYW5pbWF0aW9uQTIuc3RhcnQoKVxuICAgIEZyYW1lci5hbmltYXRpb25BMC5zdGFydCgpXG4gICAgIyBzZXQgY29sb3JzIGZvciBjaXJjbGVzXG4gICAgRnJhbWVyLmNpcmNsZTEuYmFja2dyb3VuZENvbG9yID0gb3B0cy5jaXJjbGUxID89ICcjNWRkMzllJ1xuICAgIEZyYW1lci5jaXJjbGUyLmJhY2tncm91bmRDb2xvciA9IG9wdHMuY2lyY2xlMiA/PSAnI2JjZTc4NCdcbiAgICBGcmFtZXIuY2lyY2xlMy5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRzLmNpcmNsZTMgPz0gJyM1MjUxNzQnXG4iLCJcbiMgQ3JlYXRlIGZ1bmN0aW9ucyBcbmV4cG9ydHMuU3BpbiA9IChjb2xvciA9ICcjNUE2MkU3JykgLT5cblxuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIilcbiAgICBzY3JpcHQuaW5uZXJIVE1MID0gXCJmdW5jdGlvbiBwcmVsb2FkKCl7XG4gICAgICAgICAgICB2YXIgdl9vYmogPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnc3BpbldyYXAnKVswXTtcbiAgICAgICAgICAgIHZfb2JqLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdkaXNwbGF5Om5vbmUnKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICBwcmVsb2FkKClcbiAgICAgICAgfVwiXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpXG5cbiAgICAjIyBuZXcgbGF5ZXIgfHwgdHJpZ2dlciAtIG5ld0xheWVyICMjXG4gICAgc3BpbldyYXAgPSBuZXcgTGF5ZXJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvclxuICAgICAgICB3aWR0aDogU2NyZWVuLndpZHRoXG4gICAgICAgIGhlaWdodDogU2NyZWVuLmhlaWdodFxuICAgIHNwaW5XcmFwLnBhcmVudCA9IEZyYW1lci5EZXZpY2Uuc2NyZWVuXG4gICAgc3BpbldyYXAuYnJpbmdUb0Zyb250KClcbiAgICBzcGluV3JhcC5uYW1lID0gXCJzcGluV3JhcFwiXG4gICAgcHJpbnQgXCJMb2FkZXJcIlxuXG4gICAgIyMgbmV3IGxheWVyIHx8IHRyaWdnZXIgLSBuZXdMYXllciAjI1xuICAgIHNwaW4gPSBuZXcgTGF5ZXJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJ1xuICAgICAgd2lkdGg6IDEwMFxuICAgICAgaGVpZ2h0OiAxMDBcbiAgICAgIGJvcmRlclJhZGl1czogMjAwXG4gICAgICBwYXJlbnQ6IHNwaW5XcmFwXG4gICAgc3Bpbi5uYW1lID0gXCJzcGluXCJcbiAgICBzcGluLmNlbnRlcigpXG5cbiAgICAjIGNyZWF0ZSBuZXcgYW5pbWF0aW9uIHx8IHRyaWdnZXIgLSBuZXdBbmltXG4gICAgQW5pbWF0aW9uQSA9IG5ldyBBbmltYXRpb25cbiAgICAgICAgbGF5ZXI6IHNwaW5cbiAgICAgICAgcHJvcGVydGllczpcbiAgICAgICAgICAgIHNjYWxlOjNcbiAgICAgICAgdGltZTogMC40XG4gICAgICAgIGN1cnZlOiBcImVhc2UtaW4tb3V0XCJcbiAgICBBbmltYXRpb25CID0gQW5pbWF0aW9uQS5yZXZlcnNlKClcbiAgICBBbmltYXRpb25BLnN0YXJ0KClcbiAgICBBbmltYXRpb25BLm9uKEV2ZW50cy5BbmltYXRpb25FbmQsIEFuaW1hdGlvbkIuc3RhcnQpXG4gICAgQW5pbWF0aW9uQi5vbihFdmVudHMuQW5pbWF0aW9uRW5kLCBBbmltYXRpb25BLnN0YXJ0KVxuXG5cblxuIyMjY2xhc3MgTG9hZGVyIGV4dGVuZHMgTGF5ZXJcbiAgICAgICAgXG4gICAgY29uc3RydWN0b3I6IChvcHRpb25zPXt9KSAtPlxuICAgICAgICBvcHRpb25zLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLDAsMCwwLjcpXCJcbiAgICAgICAgb3B0aW9ucy53aWR0aCA9IFNjcmVlbi53aWR0aFxuICAgICAgICBvcHRpb25zLmhlaWdodCA9IFNjcmVlbi5oZWlnaHRcbiAgICAgICAgc3VwZXIgb3B0aW9uc1xuICAgICAgICBwYXJlbnQgPSBGcmFtZXIuRGV2aWNlLnNjcmVlblxuICAgICAgICAuYnJpbmdUb0Zyb250KClcblxubXlGdW5jdGlvbiA9IC0+XG4gICAgcHJpbnQgXCJJJ20gcnVubmluZyFcIlxuXG5leHBvcnRzLkxvYWRlciA9IExvYWRlciMjIyJdfQ==
