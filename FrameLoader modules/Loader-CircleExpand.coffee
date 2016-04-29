
# LOADER ONE
exports.CircleExpand = (opts = {}) ->
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
        backgroundColor: opts.back ?= '#348aa7'
    randCircWrap.parent = Framer.Device.screen
    randCircWrap.bringToFront()
    randCircWrap.name = "randCircWrap"
    # vars
    from = opts.from ?= 0.4
    to = opts.to ?= 3
    curve = opts.curve ?= "cubic-bezier(0.860, 0.000, 0.070, 1.000)"
    # create circles and animations
    for i in [3..0]
        Framer["circle#{i}"] = new Layer
            width: 100 * i
            height: 100 * i
            borderRadius: 200
            parent: randCircWrap
        Framer["circle#{i}"].name = "circle#{i}"
        Framer["circle#{i}"].center()
        #animations
        Framer["animationA#{i}"] = new Animation
            layer: Framer["circle#{i+1}"]
            properties:
                scale:4
            time: Utils.randomNumber(from, to)
            delay: 0.1
            curve: curve
        Framer["animationB#{i}"] = Framer["animationA#{i}"].reverse()
        Framer["animationA#{i}"].on(Events.AnimationEnd, Framer["animationB#{i}"].start)
        Framer["animationB#{i}"].on(Events.AnimationEnd, Framer["animationA#{i}"].start)
    Framer.animationA1.start()
    Framer.animationA2.start()
    Framer.animationA0.start()
    # set colors for circles
    Framer.circle1.backgroundColor = opts.circle1 ?= '#5dd39e'
    Framer.circle2.backgroundColor = opts.circle2 ?= '#bce784'
    Framer.circle3.backgroundColor = opts.circle3 ?= '#525174'
    # check flag for script
    if flag is true
        scriptEnable()
