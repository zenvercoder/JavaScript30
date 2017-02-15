### Drum Kit

* [kbd](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd) = The HTML Keyboard Input Element (kbd) represents user input and produces an inline element displayed in the browser's default monospace font.

* Never look up the [ascii](http://www.asciitable.com/) table again by using keycode.info

* `cmd + function + left/right arrow` to get to top/bottom

* `cmd + shift up/down` to move line of code

![ommmSpin](/images/ommmSpin.png "JS30 Drum Kit")

### Whack A Mole/Typing with Tribbles

* Skipped to day 30 because I wanted to do a gamey-type thing

* Needs work... the whole thing needs work really, but it's a rabbit hole

* List of things I would tweak: 

1. Write an algorithm to spit out the data-key stuff instead of all of that redundant HTML
2. If you hit the correct key, tribbles will not pile up
3. You lose if tribbles pile up to the top
4. Keys to hit are not random, but actual words (random keys lighting up makes it not about typing)

![typingWithTribbles](/images/typingWithTribbles.png "JS30 Whack A Mole")

### JS + CSS Clock

* transform-origin: default is 50%. If you change it to 100%, it moves the x to the very right and that's where the transforms will take place. Very cool.

* help with time and some style: [JS30 Clock](http://codepen.io/thecageman/pen/YpJXVG) by [Dimitry](http://codepen.io/thecageman/). Fav line in this code: `time.innerHTML = ${hours}:${minutes}:${seconds < 10 ? '0'+seconds : seconds}`

* [Animation & Layers](http://codepen.io/Haru89ka/pen/ZOzMGp?editors=1100) by [Anaislab](http://codepen.io/Haru89ka/)

* Almost forgot: [Jellyfish loader](http://codepen.io/ispal/pen/apKZQd) by [Irko Palenius](http://codepen.io/ispal/)

![clock](/images/clock.png "JS30 clock")

### Playing with CSS Variables and JS

* [Stormtroopers](http://codepen.io/HermineF/pen/yeONYO?editors=0110) pen by [HermineF](http://codepen.io/HermineF/)

![stormTrooper](/images/stormTrooper.png "stormTrooper")


### Array Cardio Day 1

* querySelector returns a NodeList, not an array. NodeList does not have a .map() method. To get around that, you can wrap the entire thing in Array.from (like `Array.from(category.querySelectorAll('a'));`) or you can use ES6 spread. A spread will take every item out of something (an "iterable" like a NodeList) and put it into an array like `const link = [...category.querySelectorAll('a')];`

* link.textContext = Get the text content of the <link> element

* .reduce() = a method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value. In other words, takes all the things in the array and reduces it all into one value. `arr.reduce(callback, [initialValue])`