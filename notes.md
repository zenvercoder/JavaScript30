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

* The filter() method creates a new array with all elements that pass the test implemented by the provided function.

`var newArray = arr.filter(callback[, thisArg])`

* The map() method creates a new array with the results of calling a provided function on every element in this array.

`var new_array = arr.map(callback[, thisArg])`

* The sort() method sorts the elements of an array in place and returns the array. 

* `function compare(a, b) {
    if (a is less than b by some ordering criterion) {
      return -1;
    }
    if (a is greater than b by the ordering criterion) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }`

* .reduce() = a method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value. In other words, takes all the things in the array and reduces it all into one value. 

`arr.reduce(callback, [initialValue])`

### Flex Panel Gallery

* box-sizing: border-box: margin not included in height + width

* display: flex; a flex item can alater its dimensions to fill available space. Enables a flex context for all its direct children

* flex: 1; the children will evenly distribute their space amongst themselves

* nested flexboxes in this example: `.panels` + `.panel` both display: flex.
 
* `.panels` = flex container `.panel` = flex item

* `.panel` is also a flex container

* flexbox default = stacked left-to-right

* `panels.forEach(panel => panel.addEventListener('transitionend', toggleOpen);` if one writes `toggleOpen()`, it's calling the function and will run on page load automatically. We just want to give it reference to the function, not run it. 

* `console.log(e.propertyName);` that was interesting. There were two transitions happening, so that would have made `panel.addEventListener('transitionend'` behave differently than I would have expected. 