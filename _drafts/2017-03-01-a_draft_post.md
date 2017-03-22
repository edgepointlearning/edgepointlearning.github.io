---
title: A Sample Post With a Title That Has a Whole Bunch of Words
author: Tyler Campbell and Jonathan Lawrence
#permalink: /2016/07/21/Instructor-led-Training-vs-eLearning/
background: draft.jpg
excerpt: Howdy! This is an example blog post that shows several types of HTML and Markdown content supported by this Jekyll site.
---

Emphasis, aka italics, with *asterisks* or _underscores_. Strong emphasis, aka bold, with **asterisks** or __underscores__. Strikethrough uses two tildes. ~~Scratch this.~~ Clicking this number[^fn-1] will lead you to a footnote[^fn-two]. Each footnote needs the `^fn-` prefix and a unique ID to be referenced for the footnoted content. [Here's a Markdown cheatsheet.](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet){:target="_blank"}

## Header 2

You can create reference links [using numbers][1] or [just the text itself]. Sed vel pretium orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque bibendum massa aliquet tortor facilisis pharetra. Donec eu turpis et dui convallis porttitor eu eu dui.

[1]: http://edg.pt
[just the text itself]: http://www.edgepointlearning.com

### Header 3

Duis lectus velit, hendrerit at orci eu, tempus malesuada dolor. Nulla velit dui, sodales id finibus vel, iaculis ut elit. Suspendisse vel felis eleifend, tincidunt enim ut, eleifend nunc. Donec ex quam, pellentesque quis ultricies vel, viverra vel velit.

#### Header 4

Porta vestibulum ac consectetur:

1. First ordered list item
2. Another item
  * Unordered sub-list.
  * Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
1. Ordered sub-list
1. And another item.

   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

   To have a line break without a paragraph, you will need to use two trailing spaces.
   Note that this line is separate, but within the same paragraph.
   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

Quisque bibendum massa aliquet tortor facilisis pharetra.

* Unordered list can use asterisks
- Or minuses
+ Or pluses

## Images

![placeholder](http://placehold.it/1200x200 "Large example image")

And here's a horizontal rule:

---

## Code

Inline `code` has `back-ticks around` it.

```javascript
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments and returns the sum of those arguments
var adder = new Function("a", "b", "return a + b");

// Call the function
adder(2, 6);
// > 8
```

You may also optionally show code snippets with line numbers. Add `linenos` to the Pygments tags.

{% highlight js linenos %}
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments and returns the sum of those arguments
var adder = new Function("a", "b", "return a + b");

// Call the function
adder(2, 6);
// > 8
{% endhighlight %}

## Tables

| Tables        | Are           | Cool  |
| :------------ |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

Ut fermentum massa justo sit amet risus.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

Fringilla. Nulla vitae elit libero. Ut auctor, massa vel pharetra gravida, elit massa faucibus nibh, in rhoncus ipsum dolor id metus.

-----

[^fn-1]: Handy! Now click the return link to go back.
[^fn-two]: You got it! Now click the return link to go back.
