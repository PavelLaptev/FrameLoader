
# LOADER ONE
exports.Image = (opts = {}) ->
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
        backgroundColor: opts.back ?= '#6159A9'
    randCircWrap.parent = Framer.Device.screen
    randCircWrap.bringToFront()
    randCircWrap.name = "randCircWrap"
    # vars
    time = opts.time ?= 1
    curve = opts.curve ?= "cubic-bezier(0.860, 0.000, 0.070, 1.000)"
    # create circles and animations

    Image = new Layer
        image: opts.image ?= "images/logo.png"
        width: opts.width ?= 108
        height: opts.height ?= 164
        scale: opts.scale ?= 1
        parent: randCircWrap
    Image.name = 'ImageDiv'
    Image.center()
    #animations
    animationA = new Animation
        layer: Image
        properties:
            scale:2
        time: time
        delay: 0.1
        curve: curve
    animationB = animationA.reverse()
    animationA.on(Events.AnimationEnd, animationB.start)
    animationB.on(Events.AnimationEnd, animationA.start)
    animationA.start()
    # check flag for script
    if flag is true
        scriptEnable()
