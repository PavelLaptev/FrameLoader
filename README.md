![FrameLoader for Framer.JS](https://dl.dropboxusercontent.com/s/v7np8q7kofp45dt/head.jpg?dl=0)

FrameLoader is a set of modules for Framer.JS
It will be useful for prototypes include a lot of pictures.

#### [Demo exemple](http://share.framerjs.com/473cgxtavrju/)

## Installation

Move the module preloader in a Framer project folder "Modules"
1. Download "FrameLoader module" folder
2. Create a framer project and drop modules from "FrameLoader module" folder inside the /modules folder
3. Add **Loader = require "LoaderName"** at the top of your document (case-sensitive).

![](https://dl.dropboxusercontent.com/s/iqhpkl4lrq5c6tg/install.jpg?dl=0)

More info about modules in Framer: [FramerJS Docs - Modules](http://framerjs.com/docs/#modules)

## Usage

To create a preloader, you must write the name of the selected preloader and set the option "hide: true" or "hide: false" if you need to adjust preloader settings and you need see it.

![](https://dl.dropboxusercontent.com/s/uti4gy5asvd9yhd/create_loader.gif?dl=0)

You can change all basic parameters of the preloader from elements color, to size and speed.

---
## CircleExpand loader

![](https://dl.dropboxusercontent.com/s/u4qvfgktci6yner/CircleExpand.gif?dl=0)
![](https://dl.dropboxusercontent.com/s/izj9pd29twj0zug/CircleExpand_prop.jpg?dl=0)

#### Properties

```coffeescript
#create loader
Loader.CircleExpand
	hide: false #false or true
	back: 'black' #background color  
	circle1: 'red' #first circle color
	circle2: 'white' #second circle color
	circle3: 'gray' #third circle color
	curve: 'ease' #motion ease
	from: 0.4 #set minimum value for time
	to: 3 #set maximum value for time
```


---

## Dots loader

![](https://dl.dropboxusercontent.com/s/48asd6yx2lut88h/Dots.gif?dl=0)
![](https://dl.dropboxusercontent.com/s/tgwisrsz6fx4c6p/Dots_prop.jpg?dl=0)

#### Properties

```coffeescript
#create loader
Loader.Dots
	hide: false #false or true
	back: 'black' #background color  
	circle1: 'red' #first circle color
	circle2: 'white' #second circle color
	circle3: 'gray' #third circle color
	curve: 'ease' #motion ease
	from: 0.4 #set minimum value for time
	to: 3 #set maximum value for time
```


---

## Line loader

![](https://dl.dropboxusercontent.com/s/0z646h4d1felo77/Line.gif?dl=0)
![](https://dl.dropboxusercontent.com/s/kqt3nuckrytx0e0/Line_prop.jpg?dl=0)

#### Properties

```coffeescript
#create loader
Loader.Line
	hide: false #false or true
	back: 'black'#background color  
	containerColor: 'white' #line container color
	backLineColor: 'red' #line color
	topLineColor: 'yellow' #line color
	time: 1 #speed
	curve: 'ease' #motion ease
```


---

## Image loader

![](https://dl.dropboxusercontent.com/s/yzswqy0bgojncez/Image.gif?dl=0)
![](https://dl.dropboxusercontent.com/s/eeo31qhk8xkom7j/Image_prop.jpg?dl=0)

#### Properties

```coffeescript
#create loader
Loader.Image
	hide: false #false or true
	back: 'black' #background color
	image: "images/logo.png" #image path
	width: 108 #image width
	height: 164 #image height
	scale: 1 #image scale
	time: 1 #zoom speed
	curve: 'ease' #motion ease
```


---

### loading test

![](https://dl.dropboxusercontent.com/s/rq0nsxf1xmus0m9/loading_test.gif?dl=0)