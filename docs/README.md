
# ThreeMap Dev 0.0.1 :earth_americas::earth_africa::earth_asia:

!> It's highly **Work In Progress** - there is still a lot to be done.
*Do not use it in production!*
If you're willing to help :heartpulse: - checkout **Contribiution guide**.

Library for high-quality :high_brightness: fully-customizable vector maps
built with THREE.JS for creating stunning :sunglasses: visualizations with ease.

## Installation

Just run: <br/>
`npm install three-map` <br/>
Or use cdn from [rawgit]()

## Usage

As easy as installation: <br/>
`new ThreeMap.Map({camera, controls, style})`<br/>
camera - THREE.JS camera
controls - THREE.JS controls e.g. OrbitControls
style - ThreeMap style config [(checkout API)](api-interfaces-interfaces.istyle)

## Motivation

I needed to have nice 3D Map in my app. Of course, there are some other libraries,
but each one of them has some disadvantage for my use case:
* [Mapbox GL JS](https://www.mapbox.com/mapbox-gl-js/api/) - great library,
but without more advanced visualization features. If you don't have to
use 3D models etc. you should definitely check it out.
* [Vizicities](https://github.com/UDST/vizicities) - almost the same as this library,
but doesn't support map customization as much - you have to load tiles images
for base-map ( roads especially ) and 3D tiles for buildings.
* [Deck GL](http://uber.github.io/deck.gl) - based on Mapbox GL JS with great
support for visualization, almost ideal. Limited only by Mapbox GL 60 degrees
pitch limit, and the fact that use second GL context for its content
(at least at the time of writing, see [this issue](https://github.com/mapbox/mapbox-gl-js/issues/6456)
if you're interested.

So ThreeMap was created:
* Visualisation is great, as ThreeMap is only a THREE.JS object, so you can use all of THREE.JS goodness.
* Everything is constructed from MVT tiles, no need for textures & images.
* Provides a quite customizable configuration's options.
* **Still in development & buggy - so still a lot of work to do.**
