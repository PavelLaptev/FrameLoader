#init loader
Loader  = require "Loader-Dots"

#create loader
Loader.Dots
	hide:true

#your prototype
backgroundA = new BackgroundLayer
	backgroundColor: "rgba(86,87,147,1)"

layerA = new Layer
	width: Screen.width
	height: Screen.height
	image: "images/loaded.png"
layerA.draggable.enabled = true
layerA.draggable.constraints = layerA