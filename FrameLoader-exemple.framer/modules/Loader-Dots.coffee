
# LOADER ONE
exports.Dots = (opts = {}) ->
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
        backgroundColor: opts.back ?= '#525174'
    randCircWrap.parent = Framer.Device.screen
    randCircWrap.bringToFront()
    randCircWrap.name = "randCircWrap"
    # vars
    from = opts.from ?= 0.4
    to = opts.to ?= 2
    curve = opts.curve ?= "cubic-bezier(0.860, 0.000, 0.070, 1.000)"
    # create circles and animations

    dotsWrap = new Layer
        backgroundColor: 'transparent'
        width: 400
        parent: randCircWrap
    dotsWrap.center()

    for i in [4..0]
        Framer["dot#{i}"] = new Layer
            width: 45
            height: 45
            x: 40 + i*70
            borderRadius: 200
            parent: dotsWrap
        Framer["dot#{i}"].name = "dot#{i}"
        Framer["dot#{i}"].centerY()
        #animations
        Framer["animationA#{i}"] = new Animation
            layer: Framer["dot#{i}"]
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
    Framer.animationA3.start()
    Framer.animationA4.start()
    Framer.animationA0.start()
    # set colors for circles
    Framer.dot0.backgroundColor = opts.dot1 ?= '#bce784'
    Framer.dot1.backgroundColor = opts.dot2 ?= '#5dd39e'
    Framer.dot2.backgroundColor = opts.dot3 ?= '#348aa7'
    Framer.dot3.backgroundColor = opts.dot4 ?= '#513b56'
    Framer.dot4.backgroundColor = opts.dot5 ?= '#FF6363'
    # check flag for script
    if flag is true
        scriptEnable()
