require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Loader":[function(require,module,exports){
exports.CircleExpand = function(opts) {
  var flag, from, i, j, randCircWrap, scriptEnable, to;
  if (opts == null) {
    opts = {};
  }
  flag = opts.enable != null ? opts.enable : opts.enable = true;
  scriptEnable = function() {
    var script;
    script = document.createElement("script");
    script.innerHTML = "var interval = setInterval(function() { if(document.readyState === 'complete') { clearInterval(interval); var wrap = document.getElementsByName('randCircWrap')[0]; wrap.setAttribute('style','display:none'); wrap.remove(); console.log('success!') } }, 100);";
    return document.head.appendChild(script);
  };
  if (flag === true) {
    scriptEnable();
  } else {
    alert(87492874);
  }
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcGF2ZWxsYXB0ZXYvRHJvcGJveC9wcmVsb2FkLXRlc3QvcHJlbC5mcmFtZXIvbW9kdWxlcy9Mb2FkZXIuY29mZmVlIiwiL1VzZXJzL3BhdmVsbGFwdGV2L0Ryb3Bib3gvcHJlbG9hZC10ZXN0L3ByZWwuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDRUEsT0FBTyxDQUFDLFlBQVIsR0FBdUIsU0FBQyxJQUFEO0FBRW5CLE1BQUE7O0lBRm9CLE9BQU87O0VBRTNCLElBQUEseUJBQU8sSUFBSSxDQUFDLFNBQUwsSUFBSSxDQUFDLFNBQVU7RUFDdEIsWUFBQSxHQUFlLFNBQUE7QUFDWCxRQUFBO0lBQUEsTUFBQSxHQUFTLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCO0lBQ1QsTUFBTSxDQUFDLFNBQVAsR0FDSTtXQVNKLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBZCxDQUEwQixNQUExQjtFQVpXO0VBY2YsSUFBRyxJQUFBLEtBQVEsSUFBWDtJQUNJLFlBQUEsQ0FBQSxFQURKO0dBQUEsTUFBQTtJQUdJLEtBQUEsQ0FBTSxRQUFOLEVBSEo7O0VBS0EsWUFBQSxHQUFtQixJQUFBLEtBQUEsQ0FDZjtJQUFBLEtBQUEsRUFBTyxNQUFNLENBQUMsS0FBZDtJQUNBLE1BQUEsRUFBUSxNQUFNLENBQUMsTUFEZjtJQUVBLGVBQUEsc0JBQWlCLElBQUksQ0FBQyxPQUFMLElBQUksQ0FBQyxPQUFRLFNBRjlCO0dBRGU7RUFJbkIsWUFBWSxDQUFDLE1BQWIsR0FBc0IsTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUNwQyxZQUFZLENBQUMsWUFBYixDQUFBO0VBQ0EsWUFBWSxDQUFDLElBQWIsR0FBb0I7RUFFcEIsSUFBQSx1QkFBTyxJQUFJLENBQUMsT0FBTCxJQUFJLENBQUMsT0FBUTtFQUNwQixFQUFBLHFCQUFLLElBQUksQ0FBQyxLQUFMLElBQUksQ0FBQyxLQUFNO0FBRWhCLE9BQVMsMEJBQVQ7SUFDSSxNQUFPLENBQUEsUUFBQSxHQUFTLENBQVQsQ0FBUCxHQUEyQixJQUFBLEtBQUEsQ0FDdkI7TUFBQSxLQUFBLEVBQU8sR0FBQSxHQUFNLENBQWI7TUFDQSxNQUFBLEVBQVEsR0FBQSxHQUFNLENBRGQ7TUFFQSxZQUFBLEVBQWMsR0FGZDtNQUdBLE1BQUEsRUFBUSxZQUhSO0tBRHVCO0lBSzNCLE1BQU8sQ0FBQSxRQUFBLEdBQVMsQ0FBVCxDQUFhLENBQUMsSUFBckIsR0FBNEIsUUFBQSxHQUFTO0lBQ3JDLE1BQU8sQ0FBQSxRQUFBLEdBQVMsQ0FBVCxDQUFhLENBQUMsTUFBckIsQ0FBQTtJQUVBLE1BQU8sQ0FBQSxZQUFBLEdBQWEsQ0FBYixDQUFQLEdBQStCLElBQUEsU0FBQSxDQUMzQjtNQUFBLEtBQUEsRUFBTyxNQUFPLENBQUEsUUFBQSxHQUFRLENBQUMsQ0FBQSxHQUFFLENBQUgsQ0FBUixDQUFkO01BQ0EsVUFBQSxFQUNJO1FBQUEsS0FBQSxFQUFNLENBQU47T0FGSjtNQUdBLElBQUEsRUFBTSxLQUFLLENBQUMsWUFBTixDQUFtQixJQUFuQixFQUF5QixFQUF6QixDQUhOO01BSUEsS0FBQSxFQUFPLEdBSlA7TUFLQSxLQUFBLEVBQU8sMENBTFA7S0FEMkI7SUFPL0IsTUFBTyxDQUFBLFlBQUEsR0FBYSxDQUFiLENBQVAsR0FBMkIsTUFBTyxDQUFBLFlBQUEsR0FBYSxDQUFiLENBQWlCLENBQUMsT0FBekIsQ0FBQTtJQUMzQixNQUFPLENBQUEsWUFBQSxHQUFhLENBQWIsQ0FBaUIsQ0FBQyxFQUF6QixDQUE0QixNQUFNLENBQUMsWUFBbkMsRUFBaUQsTUFBTyxDQUFBLFlBQUEsR0FBYSxDQUFiLENBQWlCLENBQUMsS0FBMUU7SUFDQSxNQUFPLENBQUEsWUFBQSxHQUFhLENBQWIsQ0FBaUIsQ0FBQyxFQUF6QixDQUE0QixNQUFNLENBQUMsWUFBbkMsRUFBaUQsTUFBTyxDQUFBLFlBQUEsR0FBYSxDQUFiLENBQWlCLENBQUMsS0FBMUU7QUFsQko7RUFtQkEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFuQixDQUFBO0VBQ0EsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFuQixDQUFBO0VBQ0EsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFuQixDQUFBO0VBRUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFmLDBCQUFpQyxJQUFJLENBQUMsVUFBTCxJQUFJLENBQUMsVUFBVztFQUNqRCxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWYsMEJBQWlDLElBQUksQ0FBQyxVQUFMLElBQUksQ0FBQyxVQUFXO1NBQ2pELE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZiwwQkFBaUMsSUFBSSxDQUFDLFVBQUwsSUFBSSxDQUFDLFVBQVc7QUExRDlCOzs7O0FDQXZCLE9BQU8sQ0FBQyxJQUFSLEdBQWUsU0FBQyxLQUFEO0FBRVgsTUFBQTs7SUFGWSxRQUFROztFQUVwQixNQUFBLEdBQVMsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkI7RUFDVCxNQUFNLENBQUMsU0FBUCxHQUFtQjtFQU9uQixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQWQsQ0FBMEIsTUFBMUI7RUFHQSxRQUFBLEdBQWUsSUFBQSxLQUFBLENBQ1g7SUFBQSxlQUFBLEVBQWlCLEtBQWpCO0lBQ0EsS0FBQSxFQUFPLE1BQU0sQ0FBQyxLQURkO0lBRUEsTUFBQSxFQUFRLE1BQU0sQ0FBQyxNQUZmO0dBRFc7RUFJZixRQUFRLENBQUMsTUFBVCxHQUFrQixNQUFNLENBQUMsTUFBTSxDQUFDO0VBQ2hDLFFBQVEsQ0FBQyxZQUFULENBQUE7RUFDQSxRQUFRLENBQUMsSUFBVCxHQUFnQjtFQUNoQixLQUFBLENBQU0sUUFBTjtFQUdBLElBQUEsR0FBVyxJQUFBLEtBQUEsQ0FDVDtJQUFBLGVBQUEsRUFBaUIsT0FBakI7SUFDQSxLQUFBLEVBQU8sR0FEUDtJQUVBLE1BQUEsRUFBUSxHQUZSO0lBR0EsWUFBQSxFQUFjLEdBSGQ7SUFJQSxNQUFBLEVBQVEsUUFKUjtHQURTO0VBTVgsSUFBSSxDQUFDLElBQUwsR0FBWTtFQUNaLElBQUksQ0FBQyxNQUFMLENBQUE7RUFHQSxVQUFBLEdBQWlCLElBQUEsU0FBQSxDQUNiO0lBQUEsS0FBQSxFQUFPLElBQVA7SUFDQSxVQUFBLEVBQ0k7TUFBQSxLQUFBLEVBQU0sQ0FBTjtLQUZKO0lBR0EsSUFBQSxFQUFNLEdBSE47SUFJQSxLQUFBLEVBQU8sYUFKUDtHQURhO0VBTWpCLFVBQUEsR0FBYSxVQUFVLENBQUMsT0FBWCxDQUFBO0VBQ2IsVUFBVSxDQUFDLEtBQVgsQ0FBQTtFQUNBLFVBQVUsQ0FBQyxFQUFYLENBQWMsTUFBTSxDQUFDLFlBQXJCLEVBQW1DLFVBQVUsQ0FBQyxLQUE5QztTQUNBLFVBQVUsQ0FBQyxFQUFYLENBQWMsTUFBTSxDQUFDLFlBQXJCLEVBQW1DLFVBQVUsQ0FBQyxLQUE5QztBQTFDVzs7O0FBOENmIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuIyBMT0FERVIgT05FXG5leHBvcnRzLkNpcmNsZUV4cGFuZCA9IChvcHRzID0ge30pIC0+XG4gICAgIyBwYXN0ZSBzY3JpcHQgaW4gRE9NXG4gICAgZmxhZyA9IG9wdHMuZW5hYmxlID89IHRydWVcbiAgICBzY3JpcHRFbmFibGUgPSAtPlxuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpXG4gICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBcbiAgICAgICAgICAgIFwidmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgncmFuZENpcmNXcmFwJylbMF07XG4gICAgICAgICAgICAgICAgICAgIHdyYXAuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2Rpc3BsYXk6bm9uZScpO1xuICAgICAgICAgICAgICAgICAgICB3cmFwLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcyEnKVxuICAgICAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgICB9LCAxMDApO1wiXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuXG4gICAgaWYgZmxhZyBpcyB0cnVlXG4gICAgICAgIHNjcmlwdEVuYWJsZSgpXG4gICAgZWxzZVxuICAgICAgICBhbGVydCg4NzQ5Mjg3NClcbiAgICAjIGJhY2tncm91bmQgbGF5ZXJcbiAgICByYW5kQ2lyY1dyYXAgPSBuZXcgTGF5ZXJcbiAgICAgICAgd2lkdGg6IFNjcmVlbi53aWR0aFxuICAgICAgICBoZWlnaHQ6IFNjcmVlbi5oZWlnaHRcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBvcHRzLmJhY2sgPz0gJyMzNDhhYTcnXG4gICAgcmFuZENpcmNXcmFwLnBhcmVudCA9IEZyYW1lci5EZXZpY2Uuc2NyZWVuXG4gICAgcmFuZENpcmNXcmFwLmJyaW5nVG9Gcm9udCgpXG4gICAgcmFuZENpcmNXcmFwLm5hbWUgPSBcInJhbmRDaXJjV3JhcFwiXG4gICAgIyB2YXJzXG4gICAgZnJvbSA9IG9wdHMuZnJvbSA/PSAwLjRcbiAgICB0byA9IG9wdHMudG8gPz0gM1xuICAgICMgY3JlYXRlIGNpcmNsZXMgYW5kIGFuaW1hdGlvbnNcbiAgICBmb3IgaSBpbiBbMy4uMF1cbiAgICAgICAgRnJhbWVyW1wiY2lyY2xlI3tpfVwiXSA9IG5ldyBMYXllclxuICAgICAgICAgICAgd2lkdGg6IDEwMCAqIGlcbiAgICAgICAgICAgIGhlaWdodDogMTAwICogaVxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyMDBcbiAgICAgICAgICAgIHBhcmVudDogcmFuZENpcmNXcmFwXG4gICAgICAgIEZyYW1lcltcImNpcmNsZSN7aX1cIl0ubmFtZSA9IFwiY2lyY2xlI3tpfVwiXG4gICAgICAgIEZyYW1lcltcImNpcmNsZSN7aX1cIl0uY2VudGVyKClcbiAgICAgICAgI2FuaW1hdGlvbnNcbiAgICAgICAgRnJhbWVyW1wiYW5pbWF0aW9uQSN7aX1cIl0gPSBuZXcgQW5pbWF0aW9uXG4gICAgICAgICAgICBsYXllcjogRnJhbWVyW1wiY2lyY2xlI3tpKzF9XCJdXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOlxuICAgICAgICAgICAgICAgIHNjYWxlOjRcbiAgICAgICAgICAgIHRpbWU6IFV0aWxzLnJhbmRvbU51bWJlcihmcm9tLCB0bylcbiAgICAgICAgICAgIGRlbGF5OiAwLjFcbiAgICAgICAgICAgIGN1cnZlOiBcImN1YmljLWJlemllcigwLjg2MCwgMC4wMDAsIDAuMDcwLCAxLjAwMClcIlxuICAgICAgICBGcmFtZXJbXCJhbmltYXRpb25CI3tpfVwiXSA9IEZyYW1lcltcImFuaW1hdGlvbkEje2l9XCJdLnJldmVyc2UoKVxuICAgICAgICBGcmFtZXJbXCJhbmltYXRpb25BI3tpfVwiXS5vbihFdmVudHMuQW5pbWF0aW9uRW5kLCBGcmFtZXJbXCJhbmltYXRpb25CI3tpfVwiXS5zdGFydClcbiAgICAgICAgRnJhbWVyW1wiYW5pbWF0aW9uQiN7aX1cIl0ub24oRXZlbnRzLkFuaW1hdGlvbkVuZCwgRnJhbWVyW1wiYW5pbWF0aW9uQSN7aX1cIl0uc3RhcnQpXG4gICAgRnJhbWVyLmFuaW1hdGlvbkExLnN0YXJ0KClcbiAgICBGcmFtZXIuYW5pbWF0aW9uQTIuc3RhcnQoKVxuICAgIEZyYW1lci5hbmltYXRpb25BMC5zdGFydCgpXG4gICAgIyBzZXQgY29sb3JzIGZvciBjaXJjbGVzXG4gICAgRnJhbWVyLmNpcmNsZTEuYmFja2dyb3VuZENvbG9yID0gb3B0cy5jaXJjbGUxID89ICcjNWRkMzllJ1xuICAgIEZyYW1lci5jaXJjbGUyLmJhY2tncm91bmRDb2xvciA9IG9wdHMuY2lyY2xlMiA/PSAnI2JjZTc4NCdcbiAgICBGcmFtZXIuY2lyY2xlMy5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRzLmNpcmNsZTMgPz0gJyM1MjUxNzQnXG4iLCJcbiMgQ3JlYXRlIGZ1bmN0aW9ucyBcbmV4cG9ydHMuU3BpbiA9IChjb2xvciA9ICcjNUE2MkU3JykgLT5cblxuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIilcbiAgICBzY3JpcHQuaW5uZXJIVE1MID0gXCJmdW5jdGlvbiBwcmVsb2FkKCl7XG4gICAgICAgICAgICB2YXIgdl9vYmogPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnc3BpbldyYXAnKVswXTtcbiAgICAgICAgICAgIHZfb2JqLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdkaXNwbGF5Om5vbmUnKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICBwcmVsb2FkKClcbiAgICAgICAgfVwiXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpXG5cbiAgICAjIyBuZXcgbGF5ZXIgfHwgdHJpZ2dlciAtIG5ld0xheWVyICMjXG4gICAgc3BpbldyYXAgPSBuZXcgTGF5ZXJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvclxuICAgICAgICB3aWR0aDogU2NyZWVuLndpZHRoXG4gICAgICAgIGhlaWdodDogU2NyZWVuLmhlaWdodFxuICAgIHNwaW5XcmFwLnBhcmVudCA9IEZyYW1lci5EZXZpY2Uuc2NyZWVuXG4gICAgc3BpbldyYXAuYnJpbmdUb0Zyb250KClcbiAgICBzcGluV3JhcC5uYW1lID0gXCJzcGluV3JhcFwiXG4gICAgcHJpbnQgXCJMb2FkZXJcIlxuXG4gICAgIyMgbmV3IGxheWVyIHx8IHRyaWdnZXIgLSBuZXdMYXllciAjI1xuICAgIHNwaW4gPSBuZXcgTGF5ZXJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJ1xuICAgICAgd2lkdGg6IDEwMFxuICAgICAgaGVpZ2h0OiAxMDBcbiAgICAgIGJvcmRlclJhZGl1czogMjAwXG4gICAgICBwYXJlbnQ6IHNwaW5XcmFwXG4gICAgc3Bpbi5uYW1lID0gXCJzcGluXCJcbiAgICBzcGluLmNlbnRlcigpXG5cbiAgICAjIGNyZWF0ZSBuZXcgYW5pbWF0aW9uIHx8IHRyaWdnZXIgLSBuZXdBbmltXG4gICAgQW5pbWF0aW9uQSA9IG5ldyBBbmltYXRpb25cbiAgICAgICAgbGF5ZXI6IHNwaW5cbiAgICAgICAgcHJvcGVydGllczpcbiAgICAgICAgICAgIHNjYWxlOjNcbiAgICAgICAgdGltZTogMC40XG4gICAgICAgIGN1cnZlOiBcImVhc2UtaW4tb3V0XCJcbiAgICBBbmltYXRpb25CID0gQW5pbWF0aW9uQS5yZXZlcnNlKClcbiAgICBBbmltYXRpb25BLnN0YXJ0KClcbiAgICBBbmltYXRpb25BLm9uKEV2ZW50cy5BbmltYXRpb25FbmQsIEFuaW1hdGlvbkIuc3RhcnQpXG4gICAgQW5pbWF0aW9uQi5vbihFdmVudHMuQW5pbWF0aW9uRW5kLCBBbmltYXRpb25BLnN0YXJ0KVxuXG5cblxuIyMjY2xhc3MgTG9hZGVyIGV4dGVuZHMgTGF5ZXJcbiAgICAgICAgXG4gICAgY29uc3RydWN0b3I6IChvcHRpb25zPXt9KSAtPlxuICAgICAgICBvcHRpb25zLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLDAsMCwwLjcpXCJcbiAgICAgICAgb3B0aW9ucy53aWR0aCA9IFNjcmVlbi53aWR0aFxuICAgICAgICBvcHRpb25zLmhlaWdodCA9IFNjcmVlbi5oZWlnaHRcbiAgICAgICAgc3VwZXIgb3B0aW9uc1xuICAgICAgICBwYXJlbnQgPSBGcmFtZXIuRGV2aWNlLnNjcmVlblxuICAgICAgICAuYnJpbmdUb0Zyb250KClcblxubXlGdW5jdGlvbiA9IC0+XG4gICAgcHJpbnQgXCJJJ20gcnVubmluZyFcIlxuXG5leHBvcnRzLkxvYWRlciA9IExvYWRlciMjIyJdfQ==
