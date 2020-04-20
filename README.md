
# vue-lottie2
![npm version](https://badge.fury.io/js/lottie-vuejs.svg)
![npm](https://img.shields.io/npm/dm/lottie-vuejs) 
![GitHub stars](https://img.shields.io/github/stars/SuperbuffNL/lottie-vuejs?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/SuperbuffNL/lottie-vuejs?style=social)  

![](https://raw.githubusercontent.com/felippenardi/lottie-react-web/HEAD/images/lottie.png)  
**vue-lottie2 is currently in development! Use in production environment at your own risk**

vue-lottie2 is a simple VueJS wrapper for [lottie-web](https://github.com/airbnb/lottie-web).
It encompasses critical lottie-web functionality into an vue component plugin. 
Utilize vue-lottie2 to quickly and almost effortlessly bring lottie functionality into your VueJS project.

## Why Lottie?
Lottie is a mobile library for Web, and iOS that parses Adobe After Effects animations exported as json with Bodymovin and renders them natively!

Designers can create and ship beautiful animations without an engineer painstakingly recreating it by hand. They say a picture is worth 1,000 words so here are 13,000:

#### Flexible After Effects features
Lottie supports solids, shape layers, masks, alpha mattes, trim paths, and dash patterns.

#### Manipulate your animation any way you like
You can go forward, backward, and most importantly you can program your animation to respond to any interaction.

#### Small file sizes
Bundle vector animations within your app without having to worry about multiple dimensions or large file sizes. Alternatively, you can decouple animation files from your app’s code entirely by loading them from a JSON API.

[Learn more](http://airbnb.design/introducing-lottie/) › http://airbnb.design/lottie/

Looking for lottie files › https://www.lottiefiles.com/

## Install
Add to vue-lottie2 to your project
```bash
npm install --save vue-lottie2
```
   
Install vue-lottie2 globally
```bash
# Install globally (recommended)
npm install -g vue-lottie2
```
Add to global scope
```js
import Vue from 'vue'
import LottieAnimation from 'vue-lottie2' // import lottie-vuejs

Vue.use(LottieAnimation); // add lottie-animation to your global scope

new Vue({
  render: h => h(App)
}).$mount('#app')

```
**OR**   
```html
<script>
import LottieAnimation from 'vue-lottie2' // import vue-lottie2

export default {
  components: {
      LottieAnimation
  },
  data: () => ({
    ...
  })
};
</script>
```

## Usage
Basic
```html
<lottie-animation
    path="path/to/your/lottie-animation.json"
/>
```

Advanced
```html
<lottie-animation
    path="path/to/your/lottie-animation.json"
    :loop="false"
    :autoPlay="true"
    :loopDelayMin="2.5"
    :loopDelayMax="5"
    :speed="1"
    :width="256"
    :height="256"
    @AnimControl="setAnimController"
/>
```
Configuration
* **path**:  
The relative path to the animation object (starts in your public folder) e.g. `animations/my-cool-animation.json` or an absolute path e.g. `http://www.mysite.com/animations/my-cool-animation.json`. 
* **speed**:        
type: Number<br /> 
required: false<br /> 
default: 1
* **width**:       
type: Number<br /> 
required: false<br /> 
default: -1 //defaults to 100%, Number is in pixels
* **height**:  
type: Number<br /> 
required: false<br /> 
default: -1 //defaults to 100%, Number is in pixels
* **loop**:    
type:Boolean<br /> 
required: false<br /> 
default: true
* **autoPlay**:  
type:Boolean<br /> 
required: false<br /> 
default: true
* **loopDelayMin**:  
type: Number<br /> 
required: false<br /> 
default: 0
* **loopDelayMax**:  
type: Number<br /> 
required: false<br /> 
default: 0
* **@AnimControl**:   
type: Event<br />
required: false<br />
Returns the lottie-web animation controller for custom event hookup & direct access to the lottie instance. [Read the lottie-web usage section for more info](https://github.com/airbnb/lottie-web)

## build
Running the build script results in 3 compiled files in the `dist` directory, one for each of the `main`, `module`, and `unpkg` properties listed in your package.json file. With these files generated, you're ready to go!
