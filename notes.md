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

![clock](/images/clock.png "JS30 clock")