require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Loader-CircleExpand":[function(require,module,exports){
exports.CircleExpand = function(opts) {
  var curve, flag, from, i, j, randCircWrap, scriptEnable, to;
  if (opts == null) {
    opts = {};
  }
  flag = opts.hide != null ? opts.hide : opts.hide = true;
  scriptEnable = function() {
    var script;
    script = document.createElement("script");
    script.innerHTML = "var interval = setInterval(function() { if(document.readyState === 'complete') { clearInterval(interval); var wrap = document.getElementsByName('randCircWrap')[0]; wrap.setAttribute('style','display:none'); console.log('success!') } }, 100);";
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
  curve = opts.curve != null ? opts.curve : opts.curve = "cubic-bezier(0.860, 0.000, 0.070, 1.000)";
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
      curve: curve
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
  Framer.circle3.backgroundColor = opts.circle3 != null ? opts.circle3 : opts.circle3 = '#525174';
  if (flag === true) {
    return scriptEnable();
  }
};


},{}],"Loader-Dots":[function(require,module,exports){
exports.Dots = function(opts) {
  var curve, dotsWrap, flag, from, i, j, randCircWrap, scriptEnable, to;
  if (opts == null) {
    opts = {};
  }
  flag = opts.hide != null ? opts.hide : opts.hide = true;
  scriptEnable = function() {
    var script;
    script = document.createElement("script");
    script.innerHTML = "var interval = setInterval(function() { if(document.readyState === 'complete') { clearInterval(interval); var wrap = document.getElementsByName('randCircWrap')[0]; wrap.setAttribute('style','display:none'); console.log('success!') } }, 100);";
    return document.head.appendChild(script);
  };
  randCircWrap = new Layer({
    width: Screen.width,
    height: Screen.height,
    backgroundColor: opts.back != null ? opts.back : opts.back = '#525174'
  });
  randCircWrap.parent = Framer.Device.screen;
  randCircWrap.bringToFront();
  randCircWrap.name = "randCircWrap";
  from = opts.from != null ? opts.from : opts.from = 0.4;
  to = opts.to != null ? opts.to : opts.to = 2;
  curve = opts.curve != null ? opts.curve : opts.curve = "cubic-bezier(0.860, 0.000, 0.070, 1.000)";
  dotsWrap = new Layer({
    backgroundColor: 'transparent',
    width: 400,
    parent: randCircWrap
  });
  dotsWrap.center();
  for (i = j = 4; j >= 0; i = --j) {
    Framer["dot" + i] = new Layer({
      width: 45,
      height: 45,
      x: 40 + i * 70,
      borderRadius: 200,
      parent: dotsWrap
    });
    Framer["dot" + i].name = "dot" + i;
    Framer["dot" + i].centerY();
    Framer["animationA" + i] = new Animation({
      layer: Framer["dot" + i],
      properties: {
        scale: 4
      },
      time: Utils.randomNumber(from, to),
      delay: 0.1,
      curve: curve
    });
    Framer["animationB" + i] = Framer["animationA" + i].reverse();
    Framer["animationA" + i].on(Events.AnimationEnd, Framer["animationB" + i].start);
    Framer["animationB" + i].on(Events.AnimationEnd, Framer["animationA" + i].start);
  }
  Framer.animationA1.start();
  Framer.animationA2.start();
  Framer.animationA3.start();
  Framer.animationA4.start();
  Framer.animationA0.start();
  Framer.dot0.backgroundColor = opts.dot1 != null ? opts.dot1 : opts.dot1 = '#bce784';
  Framer.dot1.backgroundColor = opts.dot2 != null ? opts.dot2 : opts.dot2 = '#5dd39e';
  Framer.dot2.backgroundColor = opts.dot3 != null ? opts.dot3 : opts.dot3 = '#348aa7';
  Framer.dot3.backgroundColor = opts.dot4 != null ? opts.dot4 : opts.dot4 = '#513b56';
  Framer.dot4.backgroundColor = opts.dot5 != null ? opts.dot5 : opts.dot5 = '#FF6363';
  if (flag === true) {
    return scriptEnable();
  }
};


},{}],"Loader-Image":[function(require,module,exports){
exports.Image = function(opts) {
  var Image, animationA, animationB, curve, flag, randCircWrap, scriptEnable, time;
  if (opts == null) {
    opts = {};
  }
  flag = opts.hide != null ? opts.hide : opts.hide = true;
  scriptEnable = function() {
    var script;
    script = document.createElement("script");
    script.innerHTML = "var interval = setInterval(function() { if(document.readyState === 'complete') { clearInterval(interval); var wrap = document.getElementsByName('randCircWrap')[0]; wrap.setAttribute('style','display:none'); console.log('success!') } }, 100);";
    return document.head.appendChild(script);
  };
  randCircWrap = new Layer({
    width: Screen.width,
    height: Screen.height,
    backgroundColor: opts.back != null ? opts.back : opts.back = '#6159A9'
  });
  randCircWrap.parent = Framer.Device.screen;
  randCircWrap.bringToFront();
  randCircWrap.name = "randCircWrap";
  time = opts.time != null ? opts.time : opts.time = 1;
  curve = opts.curve != null ? opts.curve : opts.curve = "cubic-bezier(0.860, 0.000, 0.070, 1.000)";
  Image = new Layer({
    image: opts.image != null ? opts.image : opts.image = "images/logo.png",
    width: opts.width != null ? opts.width : opts.width = 108,
    height: opts.height != null ? opts.height : opts.height = 164,
    scale: opts.scale != null ? opts.scale : opts.scale = 1,
    parent: randCircWrap
  });
  Image.name = 'ImageDiv';
  Image.center();
  animationA = new Animation({
    layer: Image,
    properties: {
      scale: 2
    },
    time: time,
    delay: 0.1,
    curve: curve
  });
  animationB = animationA.reverse();
  animationA.on(Events.AnimationEnd, animationB.start);
  animationB.on(Events.AnimationEnd, animationA.start);
  animationA.start();
  if (flag === true) {
    return scriptEnable();
  }
};


},{}],"Loader-Line":[function(require,module,exports){
exports.Line = function(opts) {
  var animationA, animationB, animationC, animationD, backLine, curve, flag, lineContainer, randCircWrap, scriptEnable, time, topLine;
  if (opts == null) {
    opts = {};
  }
  flag = opts.hide != null ? opts.hide : opts.hide = true;
  scriptEnable = function() {
    var script;
    script = document.createElement("script");
    script.innerHTML = "var interval = setInterval(function() { if(document.readyState === 'complete') { clearInterval(interval); var wrap = document.getElementsByName('randCircWrap')[0]; wrap.setAttribute('style','display:none'); console.log('success!') } }, 100);";
    return document.head.appendChild(script);
  };
  randCircWrap = new Layer({
    width: Screen.width,
    height: Screen.height,
    backgroundColor: opts.back != null ? opts.back : opts.back = '#6252A2'
  });
  randCircWrap.parent = Framer.Device.screen;
  randCircWrap.bringToFront();
  randCircWrap.name = "randCircWrap";
  time = opts.time != null ? opts.time : opts.time = 1;
  curve = opts.curve != null ? opts.curve : opts.curve = "cubic-bezier(0.860, 0.000, 0.070, 1.000)";
  lineContainer = new Layer({
    clip: true,
    width: opts.width != null ? opts.width : opts.width = Screen.width / 1.3,
    height: opts.height != null ? opts.height : opts.height = 40,
    borderRadius: opts.borderRadius != null ? opts.borderRadius : opts.borderRadius = 100,
    backgroundColor: opts.containerColor != null ? opts.containerColor : opts.containerColor = '#3D90FF',
    parent: randCircWrap
  });
  lineContainer.name = 'ImageDiv';
  lineContainer.center();
  backLine = new Layer({
    backgroundColor: opts.backLineColor != null ? opts.backLineColor : opts.backLineColor = '#FFDF77',
    width: lineContainer.width / 3,
    height: 60,
    parent: lineContainer
  });
  backLine.center();
  topLine = new Layer({
    backgroundColor: opts.topLineColor != null ? opts.topLineColor : opts.topLineColor = '#FF4444',
    width: lineContainer.width / 5,
    height: 60,
    parent: lineContainer
  });
  topLine.center(backLine);
  animationA = new Animation({
    layer: backLine,
    properties: {
      scale: 3.2
    },
    time: time * 2,
    curve: curve
  });
  animationB = animationA.reverse();
  animationA.on(Events.AnimationEnd, animationB.start);
  animationB.on(Events.AnimationEnd, animationA.start);
  animationC = new Animation({
    layer: topLine,
    properties: {
      scale: 3
    },
    time: time,
    curve: curve
  });
  animationD = animationC.reverse();
  animationC.on(Events.AnimationEnd, animationD.start);
  animationD.on(Events.AnimationEnd, animationC.start);
  animationA.start();
  animationC.start();
  if (flag === true) {
    return scriptEnable();
  }
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdXNlci9Ecm9wYm94L0ZyYW1lTG9hZGVyL0ZyYW1lTG9hZGVyLWV4ZW1wbGUuZnJhbWVyL21vZHVsZXMvTG9hZGVyLUNpcmNsZUV4cGFuZC5jb2ZmZWUiLCIvVXNlcnMvdXNlci9Ecm9wYm94L0ZyYW1lTG9hZGVyL0ZyYW1lTG9hZGVyLWV4ZW1wbGUuZnJhbWVyL21vZHVsZXMvTG9hZGVyLURvdHMuY29mZmVlIiwiL1VzZXJzL3VzZXIvRHJvcGJveC9GcmFtZUxvYWRlci9GcmFtZUxvYWRlci1leGVtcGxlLmZyYW1lci9tb2R1bGVzL0xvYWRlci1JbWFnZS5jb2ZmZWUiLCIvVXNlcnMvdXNlci9Ecm9wYm94L0ZyYW1lTG9hZGVyL0ZyYW1lTG9hZGVyLWV4ZW1wbGUuZnJhbWVyL21vZHVsZXMvTG9hZGVyLUxpbmUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDRUEsT0FBTyxDQUFDLFlBQVIsR0FBdUIsU0FBQyxJQUFEO0FBRW5CLE1BQUE7O0lBRm9CLE9BQU87O0VBRTNCLElBQUEsdUJBQU8sSUFBSSxDQUFDLE9BQUwsSUFBSSxDQUFDLE9BQVE7RUFDcEIsWUFBQSxHQUFlLFNBQUE7QUFDWCxRQUFBO0lBQUEsTUFBQSxHQUFTLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCO0lBQ1QsTUFBTSxDQUFDLFNBQVAsR0FDSTtXQVFKLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBZCxDQUEwQixNQUExQjtFQVhXO0VBYWYsWUFBQSxHQUFtQixJQUFBLEtBQUEsQ0FDZjtJQUFBLEtBQUEsRUFBTyxNQUFNLENBQUMsS0FBZDtJQUNBLE1BQUEsRUFBUSxNQUFNLENBQUMsTUFEZjtJQUVBLGVBQUEsc0JBQWlCLElBQUksQ0FBQyxPQUFMLElBQUksQ0FBQyxPQUFRLFNBRjlCO0dBRGU7RUFJbkIsWUFBWSxDQUFDLE1BQWIs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TUFBQSxFQUFRLEVBRlI7SUFHQSxNQUFBLEVBQVEsYUFIUjtHQURZO0VBS2QsT0FBTyxDQUFDLE1BQVIsQ0FBZSxRQUFmO0VBR0EsVUFBQSxHQUFpQixJQUFBLFNBQUEsQ0FDYjtJQUFBLEtBQUEsRUFBTyxRQUFQO0lBQ0EsVUFBQSxFQUNJO01BQUEsS0FBQSxFQUFNLEdBQU47S0FGSjtJQUdBLElBQUEsRUFBTSxJQUFBLEdBQUssQ0FIWDtJQUlBLEtBQUEsRUFBTyxLQUpQO0dBRGE7RUFNakIsVUFBQSxHQUFhLFVBQVUsQ0FBQyxPQUFYLENBQUE7RUFDYixVQUFVLENBQUMsRUFBWCxDQUFjLE1BQU0sQ0FBQyxZQUFyQixFQUFtQyxVQUFVLENBQUMsS0FBOUM7RUFDQSxVQUFVLENBQUMsRUFBWCxDQUFjLE1BQU0sQ0FBQyxZQUFyQixFQUFtQyxVQUFVLENBQUMsS0FBOUM7RUFFQSxVQUFBLEdBQWlCLElBQUEsU0FBQSxDQUNiO0lBQUEsS0FBQSxFQUFPLE9BQVA7SUFDQSxVQUFBLEVBQ0k7TUFBQSxLQUFBLEVBQU0sQ0FBTjtLQUZKO0lBR0EsSUFBQSxFQUFNLElBSE47SUFJQSxLQUFBLEVBQU8sS0FKUDtHQURhO0VBTWpCLFVBQUEsR0FBYSxVQUFVLENBQUMsT0FBWCxDQUFBO0VBQ2IsVUFBVSxDQUFDLEVBQVgsQ0FBYyxNQUFNLENBQUMsWUFBckIsRUFBbUMsVUFBVSxDQUFDLEtBQTlDO0VBQ0EsVUFBVSxDQUFDLEVBQVgsQ0FBYyxNQUFNLENBQUMsWUFBckIsRUFBbUMsVUFBVSxDQUFDLEtBQTlDO0VBRUEsVUFBVSxDQUFDLEtBQVgsQ0FBQTtFQUNBLFVBQVUsQ0FBQyxLQUFYLENBQUE7RUFFQSxJQUFHLElBQUEsS0FBUSxJQUFYO1dBQ0ksWUFBQSxDQUFBLEVBREo7O0FBOUVXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuIyBMT0FERVIgT05FXG5leHBvcnRzLkNpcmNsZUV4cGFuZCA9IChvcHRzID0ge30pIC0+XG4gICAgIyBwYXN0ZSBzY3JpcHQgaW4gRE9NXG4gICAgZmxhZyA9IG9wdHMuaGlkZSA/PSB0cnVlXG4gICAgc2NyaXB0RW5hYmxlID0gLT5cbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKVxuICAgICAgICBzY3JpcHQuaW5uZXJIVE1MID0gXG4gICAgICAgICAgICBcInZhciBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB3cmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3JhbmRDaXJjV3JhcCcpWzBdO1xuICAgICAgICAgICAgICAgICAgICB3cmFwLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdkaXNwbGF5Om5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MhJylcbiAgICAgICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgfSwgMTAwKTtcIlxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdClcbiAgICAjIGJhY2tncm91bmQgbGF5ZXJcbiAgICByYW5kQ2lyY1dyYXAgPSBuZXcgTGF5ZXJcbiAgICAgICAgd2lkdGg6IFNjcmVlbi53aWR0aFxuICAgICAgICBoZWlnaHQ6IFNjcmVlbi5oZWlnaHRcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBvcHRzLmJhY2sgPz0gJyMzNDhhYTcnXG4gICAgcmFuZENpcmNXcmFwLnBhcmVudCA9IEZyYW1lci5EZXZpY2Uuc2NyZWVuXG4gICAgcmFuZENpcmNXcmFwLmJyaW5nVG9Gcm9udCgpXG4gICAgcmFuZENpcmNXcmFwLm5hbWUgPSBcInJhbmRDaXJjV3JhcFwiXG4gICAgIyB2YXJzXG4gICAgZnJvbSA9IG9wdHMuZnJvbSA/PSAwLjRcbiAgICB0byA9IG9wdHMudG8gPz0gM1xuICAgIGN1cnZlID0gb3B0cy5jdXJ2ZSA/PSBcImN1YmljLWJlemllcigwLjg2MCwgMC4wMDAsIDAuMDcwLCAxLjAwMClcIlxuICAgICMgY3JlYXRlIGNpcmNsZXMgYW5kIGFuaW1hdGlvbnNcbiAgICBmb3IgaSBpbiBbMy4uMF1cbiAgICAgICAgRnJhbWVyW1wiY2lyY2xlI3tpfVwiXSA9IG5ldyBMYXllclxuICAgICAgICAgICAgd2lkdGg6IDEwMCAqIGlcbiAgICAgICAgICAgIGhlaWdodDogMTAwICogaVxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyMDBcbiAgICAgICAgICAgIHBhcmVudDogcmFuZENpcmNXcmFwXG4gICAgICAgIEZyYW1lcltcImNpcmNsZSN7aX1cIl0ubmFtZSA9IFwiY2lyY2xlI3tpfVwiXG4gICAgICAgIEZyYW1lcltcImNpcmNsZSN7aX1cIl0uY2VudGVyKClcbiAgICAgICAgI2FuaW1hdGlvbnNcbiAgICAgICAgRnJhbWVyW1wiYW5pbWF0aW9uQSN7aX1cIl0gPSBuZXcgQW5pbWF0aW9uXG4gICAgICAgICAgICBsYXllcjogRnJhbWVyW1wiY2lyY2xlI3tpKzF9XCJdXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOlxuICAgICAgICAgICAgICAgIHNjYWxlOjRcbiAgICAgICAgICAgIHRpbWU6IFV0aWxzLnJhbmRvbU51bWJlcihmcm9tLCB0bylcbiAgICAgICAgICAgIGRlbGF5OiAwLjFcbiAgICAgICAgICAgIGN1cnZlOiBjdXJ2ZVxuICAgICAgICBGcmFtZXJbXCJhbmltYXRpb25CI3tpfVwiXSA9IEZyYW1lcltcImFuaW1hdGlvbkEje2l9XCJdLnJldmVyc2UoKVxuICAgICAgICBGcmFtZXJbXCJhbmltYXRpb25BI3tpfVwiXS5vbihFdmVudHMuQW5pbWF0aW9uRW5kLCBGcmFtZXJbXCJhbmltYXRpb25CI3tpfVwiXS5zdGFydClcbiAgICAgICAgRnJhbWVyW1wiYW5pbWF0aW9uQiN7aX1cIl0ub24oRXZlbnRzLkFuaW1hdGlvbkVuZCwgRnJhbWVyW1wiYW5pbWF0aW9uQSN7aX1cIl0uc3RhcnQpXG4gICAgRnJhbWVyLmFuaW1hdGlvbkExLnN0YXJ0KClcbiAgICBGcmFtZXIuYW5pbWF0aW9uQTIuc3RhcnQoKVxuICAgIEZyYW1lci5hbmltYXRpb25BMC5zdGFydCgpXG4gICAgIyBzZXQgY29sb3JzIGZvciBjaXJjbGVzXG4gICAgRnJhbWVyLmNpcmNsZTEuYmFja2dyb3VuZENvbG9yID0gb3B0cy5jaXJjbGUxID89ICcjNWRkMzllJ1xuICAgIEZyYW1lci5jaXJjbGUyLmJhY2tncm91bmRDb2xvciA9IG9wdHMuY2lyY2xlMiA/PSAnI2JjZTc4NCdcbiAgICBGcmFtZXIuY2lyY2xlMy5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRzLmNpcmNsZTMgPz0gJyM1MjUxNzQnXG4gICAgIyBjaGVjayBmbGFnIGZvciBzY3JpcHRcbiAgICBpZiBmbGFnIGlzIHRydWVcbiAgICAgICAgc2NyaXB0RW5hYmxlKClcbiIsIlxuIyBMT0FERVIgT05FXG5leHBvcnRzLkRvdHMgPSAob3B0cyA9IHt9KSAtPlxuICAgICMgcGFzdGUgc2NyaXB0IGluIERPTVxuICAgIGZsYWcgPSBvcHRzLmhpZGUgPz0gdHJ1ZVxuICAgIHNjcmlwdEVuYWJsZSA9IC0+XG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIilcbiAgICAgICAgc2NyaXB0LmlubmVySFRNTCA9IFxuICAgICAgICAgICAgXCJ2YXIgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgd3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdyYW5kQ2lyY1dyYXAnKVswXTtcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZGlzcGxheTpub25lJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzIScpXG4gICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgIH0sIDEwMCk7XCJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpXG4gICAgIyBiYWNrZ3JvdW5kIGxheWVyXG4gICAgcmFuZENpcmNXcmFwID0gbmV3IExheWVyXG4gICAgICAgIHdpZHRoOiBTY3JlZW4ud2lkdGhcbiAgICAgICAgaGVpZ2h0OiBTY3JlZW4uaGVpZ2h0XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogb3B0cy5iYWNrID89ICcjNTI1MTc0J1xuICAgIHJhbmRDaXJjV3JhcC5wYXJlbnQgPSBGcmFtZXIuRGV2aWNlLnNjcmVlblxuICAgIHJhbmRDaXJjV3JhcC5icmluZ1RvRnJvbnQoKVxuICAgIHJhbmRDaXJjV3JhcC5uYW1lID0gXCJyYW5kQ2lyY1dyYXBcIlxuICAgICMgdmFyc1xuICAgIGZyb20gPSBvcHRzLmZyb20gPz0gMC40XG4gICAgdG8gPSBvcHRzLnRvID89IDJcbiAgICBjdXJ2ZSA9IG9wdHMuY3VydmUgPz0gXCJjdWJpYy1iZXppZXIoMC44NjAsIDAuMDAwLCAwLjA3MCwgMS4wMDApXCJcbiAgICAjIGNyZWF0ZSBjaXJjbGVzIGFuZCBhbmltYXRpb25zXG5cbiAgICBkb3RzV3JhcCA9IG5ldyBMYXllclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgd2lkdGg6IDQwMFxuICAgICAgICBwYXJlbnQ6IHJhbmRDaXJjV3JhcFxuICAgIGRvdHNXcmFwLmNlbnRlcigpXG5cbiAgICBmb3IgaSBpbiBbNC4uMF1cbiAgICAgICAgRnJhbWVyW1wiZG90I3tpfVwiXSA9IG5ldyBMYXllclxuICAgICAgICAgICAgd2lkdGg6IDQ1XG4gICAgICAgICAgICBoZWlnaHQ6IDQ1XG4gICAgICAgICAgICB4OiA0MCArIGkqNzBcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMjAwXG4gICAgICAgICAgICBwYXJlbnQ6IGRvdHNXcmFwXG4gICAgICAgIEZyYW1lcltcImRvdCN7aX1cIl0ubmFtZSA9IFwiZG90I3tpfVwiXG4gICAgICAgIEZyYW1lcltcImRvdCN7aX1cIl0uY2VudGVyWSgpXG4gICAgICAgICNhbmltYXRpb25zXG4gICAgICAgIEZyYW1lcltcImFuaW1hdGlvbkEje2l9XCJdID0gbmV3IEFuaW1hdGlvblxuICAgICAgICAgICAgbGF5ZXI6IEZyYW1lcltcImRvdCN7aX1cIl1cbiAgICAgICAgICAgIHByb3BlcnRpZXM6XG4gICAgICAgICAgICAgICAgc2NhbGU6NFxuICAgICAgICAgICAgdGltZTogVXRpbHMucmFuZG9tTnVtYmVyKGZyb20sIHRvKVxuICAgICAgICAgICAgZGVsYXk6IDAuMVxuICAgICAgICAgICAgY3VydmU6IGN1cnZlXG4gICAgICAgIEZyYW1lcltcImFuaW1hdGlvbkIje2l9XCJdID0gRnJhbWVyW1wiYW5pbWF0aW9uQSN7aX1cIl0ucmV2ZXJzZSgpXG4gICAgICAgIEZyYW1lcltcImFuaW1hdGlvbkEje2l9XCJdLm9uKEV2ZW50cy5BbmltYXRpb25FbmQsIEZyYW1lcltcImFuaW1hdGlvbkIje2l9XCJdLnN0YXJ0KVxuICAgICAgICBGcmFtZXJbXCJhbmltYXRpb25CI3tpfVwiXS5vbihFdmVudHMuQW5pbWF0aW9uRW5kLCBGcmFtZXJbXCJhbmltYXRpb25BI3tpfVwiXS5zdGFydClcbiAgICBGcmFtZXIuYW5pbWF0aW9uQTEuc3RhcnQoKVxuICAgIEZyYW1lci5hbmltYXRpb25BMi5zdGFydCgpXG4gICAgRnJhbWVyLmFuaW1hdGlvbkEzLnN0YXJ0KClcbiAgICBGcmFtZXIuYW5pbWF0aW9uQTQuc3RhcnQoKVxuICAgIEZyYW1lci5hbmltYXRpb25BMC5zdGFydCgpXG4gICAgIyBzZXQgY29sb3JzIGZvciBjaXJjbGVzXG4gICAgRnJhbWVyLmRvdDAuYmFja2dyb3VuZENvbG9yID0gb3B0cy5kb3QxID89ICcjYmNlNzg0J1xuICAgIEZyYW1lci5kb3QxLmJhY2tncm91bmRDb2xvciA9IG9wdHMuZG90MiA/PSAnIzVkZDM5ZSdcbiAgICBGcmFtZXIuZG90Mi5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRzLmRvdDMgPz0gJyMzNDhhYTcnXG4gICAgRnJhbWVyLmRvdDMuYmFja2dyb3VuZENvbG9yID0gb3B0cy5kb3Q0ID89ICcjNTEzYjU2J1xuICAgIEZyYW1lci5kb3Q0LmJhY2tncm91bmRDb2xvciA9IG9wdHMuZG90NSA/PSAnI0ZGNjM2MydcbiAgICAjIGNoZWNrIGZsYWcgZm9yIHNjcmlwdFxuICAgIGlmIGZsYWcgaXMgdHJ1ZVxuICAgICAgICBzY3JpcHRFbmFibGUoKVxuIiwiXG4jIExPQURFUiBPTkVcbmV4cG9ydHMuSW1hZ2UgPSAob3B0cyA9IHt9KSAtPlxuICAgICMgcGFzdGUgc2NyaXB0IGluIERPTVxuICAgIGZsYWcgPSBvcHRzLmhpZGUgPz0gdHJ1ZVxuICAgIHNjcmlwdEVuYWJsZSA9IC0+XG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIilcbiAgICAgICAgc2NyaXB0LmlubmVySFRNTCA9IFxuICAgICAgICAgICAgXCJ2YXIgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgd3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdyYW5kQ2lyY1dyYXAnKVswXTtcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZGlzcGxheTpub25lJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzIScpXG4gICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgIH0sIDEwMCk7XCJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpXG4gICAgIyBiYWNrZ3JvdW5kIGxheWVyXG4gICAgcmFuZENpcmNXcmFwID0gbmV3IExheWVyXG4gICAgICAgIHdpZHRoOiBTY3JlZW4ud2lkdGhcbiAgICAgICAgaGVpZ2h0OiBTY3JlZW4uaGVpZ2h0XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogb3B0cy5iYWNrID89ICcjNjE1OUE5J1xuICAgIHJhbmRDaXJjV3JhcC5wYXJlbnQgPSBGcmFtZXIuRGV2aWNlLnNjcmVlblxuICAgIHJhbmRDaXJjV3JhcC5icmluZ1RvRnJvbnQoKVxuICAgIHJhbmRDaXJjV3JhcC5uYW1lID0gXCJyYW5kQ2lyY1dyYXBcIlxuICAgICMgdmFyc1xuICAgIHRpbWUgPSBvcHRzLnRpbWUgPz0gMVxuICAgIGN1cnZlID0gb3B0cy5jdXJ2ZSA/PSBcImN1YmljLWJlemllcigwLjg2MCwgMC4wMDAsIDAuMDcwLCAxLjAwMClcIlxuICAgICMgY3JlYXRlIGNpcmNsZXMgYW5kIGFuaW1hdGlvbnNcblxuICAgIEltYWdlID0gbmV3IExheWVyXG4gICAgICAgIGltYWdlOiBvcHRzLmltYWdlID89IFwiaW1hZ2VzL2xvZ28ucG5nXCJcbiAgICAgICAgd2lkdGg6IG9wdHMud2lkdGggPz0gMTA4XG4gICAgICAgIGhlaWdodDogb3B0cy5oZWlnaHQgPz0gMTY0XG4gICAgICAgIHNjYWxlOiBvcHRzLnNjYWxlID89IDFcbiAgICAgICAgcGFyZW50OiByYW5kQ2lyY1dyYXBcbiAgICBJbWFnZS5uYW1lID0gJ0ltYWdlRGl2J1xuICAgIEltYWdlLmNlbnRlcigpXG4gICAgI2FuaW1hdGlvbnNcbiAgICBhbmltYXRpb25BID0gbmV3IEFuaW1hdGlvblxuICAgICAgICBsYXllcjogSW1hZ2VcbiAgICAgICAgcHJvcGVydGllczpcbiAgICAgICAgICAgIHNjYWxlOjJcbiAgICAgICAgdGltZTogdGltZVxuICAgICAgICBkZWxheTogMC4xXG4gICAgICAgIGN1cnZlOiBjdXJ2ZVxuICAgIGFuaW1hdGlvbkIgPSBhbmltYXRpb25BLnJldmVyc2UoKVxuICAgIGFuaW1hdGlvbkEub24oRXZlbnRzLkFuaW1hdGlvbkVuZCwgYW5pbWF0aW9uQi5zdGFydClcbiAgICBhbmltYXRpb25CLm9uKEV2ZW50cy5BbmltYXRpb25FbmQsIGFuaW1hdGlvbkEuc3RhcnQpXG4gICAgYW5pbWF0aW9uQS5zdGFydCgpXG4gICAgIyBjaGVjayBmbGFnIGZvciBzY3JpcHRcbiAgICBpZiBmbGFnIGlzIHRydWVcbiAgICAgICAgc2NyaXB0RW5hYmxlKClcbiIsIlxuIyBMT0FERVIgT05FXG5leHBvcnRzLkxpbmUgPSAob3B0cyA9IHt9KSAtPlxuICAgICMgcGFzdGUgc2NyaXB0IGluIERPTVxuICAgIGZsYWcgPSBvcHRzLmhpZGUgPz0gdHJ1ZVxuICAgIHNjcmlwdEVuYWJsZSA9IC0+XG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIilcbiAgICAgICAgc2NyaXB0LmlubmVySFRNTCA9IFxuICAgICAgICAgICAgXCJ2YXIgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgd3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdyYW5kQ2lyY1dyYXAnKVswXTtcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZGlzcGxheTpub25lJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzIScpXG4gICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgIH0sIDEwMCk7XCJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpXG4gICAgIyBiYWNrZ3JvdW5kIGxheWVyXG4gICAgcmFuZENpcmNXcmFwID0gbmV3IExheWVyXG4gICAgICAgIHdpZHRoOiBTY3JlZW4ud2lkdGhcbiAgICAgICAgaGVpZ2h0OiBTY3JlZW4uaGVpZ2h0XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogb3B0cy5iYWNrID89ICcjNjI1MkEyJ1xuICAgIHJhbmRDaXJjV3JhcC5wYXJlbnQgPSBGcmFtZXIuRGV2aWNlLnNjcmVlblxuICAgIHJhbmRDaXJjV3JhcC5icmluZ1RvRnJvbnQoKVxuICAgIHJhbmRDaXJjV3JhcC5uYW1lID0gXCJyYW5kQ2lyY1dyYXBcIlxuICAgICMgdmFyc1xuICAgIHRpbWUgPSBvcHRzLnRpbWUgPz0gMVxuICAgIGN1cnZlID0gb3B0cy5jdXJ2ZSA/PSBcImN1YmljLWJlemllcigwLjg2MCwgMC4wMDAsIDAuMDcwLCAxLjAwMClcIlxuICAgICMgY3JlYXRlIGNpcmNsZXMgYW5kIGFuaW1hdGlvbnNcblxuICAgIGxpbmVDb250YWluZXIgPSBuZXcgTGF5ZXJcbiAgICAgICAgY2xpcDogdHJ1ZVxuICAgICAgICB3aWR0aDogb3B0cy53aWR0aCA/PSBTY3JlZW4ud2lkdGgvMS4zXG4gICAgICAgIGhlaWdodDogb3B0cy5oZWlnaHQgPz0gNDBcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBvcHRzLmJvcmRlclJhZGl1cyA/PSAxMDBcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBvcHRzLmNvbnRhaW5lckNvbG9yID89ICcjM0Q5MEZGJ1xuICAgICAgICBwYXJlbnQ6IHJhbmRDaXJjV3JhcFxuICAgIGxpbmVDb250YWluZXIubmFtZSA9ICdJbWFnZURpdidcbiAgICBsaW5lQ29udGFpbmVyLmNlbnRlcigpXG5cbiAgICAjIEJhY2sgTGluZVxuICAgIGJhY2tMaW5lID0gbmV3IExheWVyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IG9wdHMuYmFja0xpbmVDb2xvciA/PSAnI0ZGREY3NydcbiAgICAgIHdpZHRoOiBsaW5lQ29udGFpbmVyLndpZHRoLzNcbiAgICAgIGhlaWdodDogNjBcbiAgICAgIHBhcmVudDogbGluZUNvbnRhaW5lclxuICAgIGJhY2tMaW5lLmNlbnRlcigpXG5cbiAgICAjIFRvcCBMaW5lXG4gICAgdG9wTGluZSA9IG5ldyBMYXllclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBvcHRzLnRvcExpbmVDb2xvciA/PSAnI0ZGNDQ0NCdcbiAgICAgIHdpZHRoOiBsaW5lQ29udGFpbmVyLndpZHRoLzVcbiAgICAgIGhlaWdodDogNjBcbiAgICAgIHBhcmVudDogbGluZUNvbnRhaW5lclxuICAgIHRvcExpbmUuY2VudGVyKGJhY2tMaW5lKVxuICAgIFxuICAgICNhbmltYXRpb25zXG4gICAgYW5pbWF0aW9uQSA9IG5ldyBBbmltYXRpb25cbiAgICAgICAgbGF5ZXI6IGJhY2tMaW5lXG4gICAgICAgIHByb3BlcnRpZXM6XG4gICAgICAgICAgICBzY2FsZTozLjJcbiAgICAgICAgdGltZTogdGltZSoyXG4gICAgICAgIGN1cnZlOiBjdXJ2ZVxuICAgIGFuaW1hdGlvbkIgPSBhbmltYXRpb25BLnJldmVyc2UoKVxuICAgIGFuaW1hdGlvbkEub24oRXZlbnRzLkFuaW1hdGlvbkVuZCwgYW5pbWF0aW9uQi5zdGFydClcbiAgICBhbmltYXRpb25CLm9uKEV2ZW50cy5BbmltYXRpb25FbmQsIGFuaW1hdGlvbkEuc3RhcnQpXG5cbiAgICBhbmltYXRpb25DID0gbmV3IEFuaW1hdGlvblxuICAgICAgICBsYXllcjogdG9wTGluZVxuICAgICAgICBwcm9wZXJ0aWVzOlxuICAgICAgICAgICAgc2NhbGU6M1xuICAgICAgICB0aW1lOiB0aW1lXG4gICAgICAgIGN1cnZlOiBjdXJ2ZVxuICAgIGFuaW1hdGlvbkQgPSBhbmltYXRpb25DLnJldmVyc2UoKVxuICAgIGFuaW1hdGlvbkMub24oRXZlbnRzLkFuaW1hdGlvbkVuZCwgYW5pbWF0aW9uRC5zdGFydClcbiAgICBhbmltYXRpb25ELm9uKEV2ZW50cy5BbmltYXRpb25FbmQsIGFuaW1hdGlvbkMuc3RhcnQpXG5cbiAgICBhbmltYXRpb25BLnN0YXJ0KClcbiAgICBhbmltYXRpb25DLnN0YXJ0KClcbiAgICAjIGNoZWNrIGZsYWcgZm9yIHNjcmlwdFxuICAgIGlmIGZsYWcgaXMgdHJ1ZVxuICAgICAgICBzY3JpcHRFbmFibGUoKVxuIl19
