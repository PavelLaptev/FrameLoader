
# LOADER ONE
exports.Line = (opts = {}) ->
    # paste script in DOM
    flag = opts.hide ?= true
    scriptEnable = ->
        script = document.createElement("script")
        script.innerHTML = 
            "var interval = setInterval(function() {
                if(document.readyState === 'complete') {
                    clearInterval(interval);
                    var wrap = document.getElementsByName('randCircWrap')[0];
                    wrap.setAttribute('style','display:none');
                    console.log('success!')
                }    
            }, 100);"
        document.head.appendChild(script)
    # background layer
    randCircWrap = new Layer
        width: Screen.width
        height: Screen.height
        backgroundColor: opts.back ?= '#6252A2'
    randCircWrap.parent = Framer.Device.screen
    randCircWrap.bringToFront()
    randCircWrap.name = "randCircWrap"
    # vars
    time = opts.time ?= 1
    curve = opts.curve ?= "cubic-bezier(0.860, 0.000, 0.070, 1.000)"
    # create circles and animations

    lineContainer = new Layer
        clip: true
        width: opts.width ?= Screen.width/1.3
        height: opts.height ?= 40
        borderRadius: opts.borderRadius ?= 100
        backgroundColor: opts.containerColor ?= '#3D90FF'
        parent: randCircWrap
    lineContainer.name = 'ImageDiv'
    lineContainer.center()

    # Back Line
    backLine = new Layer
      backgroundColor: opts.backLineColor ?= '#FFDF77'
      width: lineContainer.width/3
      height: 60
      parent: lineContainer
    backLine.center()

    # Top Line
    topLine = new Layer
      backgroundColor: opts.topLineColor ?= '#FF4444'
      width: lineContainer.width/5
      height: 60
      parent: lineContainer
    topLine.center(backLine)
    
    #animations
    animationA = new Animation
        layer: backLine
        properties:
            scale:3.2
        time: time*2
        curve: curve
    animationB = animationA.reverse()
    animationA.on(Events.AnimationEnd, animationB.start)
    animationB.on(Events.AnimationEnd, animationA.start)

    animationC = new Animation
        layer: topLine
        properties:
            scale:3
        time: time
        curve: curve
    animationD = animationC.reverse()
    animationC.on(Events.AnimationEnd, animationD.start)
    animationD.on(Events.AnimationEnd, animationC.start)

    animationA.start()
    animationC.start()
    # check flag for script
    if flag is true
        scriptEnable()
