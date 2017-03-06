---
title: A Sample Post
author: Tyler Campbell
#permalink: /2016/07/21/Instructor-led-Training-vs-eLearning/
background: 2014-12-15-when-to-outsource-your-elearning.jpg
excerpt: Howdy! This is an example blog post that shows several types of HTML content supported in this theme.
---

Suspendisse sed condimentum magna. Ut auctor, massa vel pharetra gravida, elit massa faucibus nibh, in rhoncus ipsum dolor id metus. Nullam rhoncus tincidunt quam non tempus. Sed id maximus dolor. Donec tincidunt risus vitae lacus feugiat, vel euismod enim imperdiet.

## Header 2

Sed vel pretium orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque bibendum massa aliquet tortor facilisis pharetra. Donec eu turpis et dui convallis porttitor eu eu dui. [Nullam quis risus eget urna mollis ornare vel eu leo.](#)

### Header 3

Duis lectus velit, hendrerit at orci eu, tempus malesuada dolor. Nulla velit dui, sodales id finibus vel, iaculis ut elit. Suspendisse vel felis eleifend, tincidunt enim ut, eleifend nunc. Donec ex quam, pellentesque quis ultricies vel, viverra vel velit.

#### Header 4

Suspendisse sed condimentum magna. Ut auctor, massa vel pharetra gravida, elit massa faucibus nibh, in rhoncus ipsum dolor id metus. Nullam rhoncus tincidunt quam non tempus. Sed id maximus dolor. Donec tincidunt risus vitae lacus feugiat, vel euismod enim imperdiet. Aliquam non odio mauris. Duis sit amet tristique urna, ultrices egestas leo.

Porta vestibulum ac consectetur:

- Morbi leo risus
- porta ac consectetur ac
- Estibulum at eros
- Nullam quis risus eget urna mollis ornare vel eu leo

Praesent porttitor placerat lorem, non iaculis urna condimentum et. Proin vel leo consequat, fringilla metus nec, suscipit augue. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Vestibulum justo tortor, finibus non magna non, finibus mollis augue. Vivamus aliquet ornare mi sed malesuada

1. Vestibulum id ligula porta felis euismod semper.
1. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
1. Maecenas sed diam eget risus varius blandit sit amet non magna.
1. Nulla vitae elit libero, a pharetra augue.

## Inline HTML elements

HTML defines a long list of available inline tags, a complete list of which can be found on the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

- **To bold text**, use `<strong>`.
- *To italicize text*, use `<em>`.
- Abbreviations, like <abbr title="HyperText Markup Langage">HTML</abbr> should use `<abbr>`, with an optional `title` attribute for the full phrase.
- Citations, like <cite>&mdash; Mark otto</cite>, should use `<cite>`.
- <del>Deleted</del> text should use `<del>` and <ins>inserted</ins> text should use `<ins>`.
- Superscript <sup>text</sup> uses `<sup>` and subscript <sub>text</sub> uses `<sub>`.

Most of these elements are styled by browsers with few modifications on our part.

## Footnotes

Footnotes are supported as part of the Markdown syntax. Here's one in action. Clicking this number[^fn-sample_footnote] will lead you to a footnote. The syntax looks like:

{% highlight text %}
Clicking this number[^fn-sample_footnote]
{% endhighlight %}

Each footnote needs the `^fn-` prefix and a unique ID to be referenced for the footnoted content. You can place the footnoted content wherever you like. Markdown parsers should properly place it at the bottom of the post.

## Code

Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.

{% highlight js %}
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments and returns the sum of those arguments
var adder = new Function("a", "b", "return a + b");

// Call the function
adder(2, 6);
// > 8
{% endhighlight %}

You may also optionally show code snippets with line numbers. Add `linenos` to the Pygments tags.

{% highlight js linenos %}
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments and returns the sum of those arguments
var adder = new Function("a", "b", "return a + b");

// Call the function
adder(2, 6);
// > 8
{% endhighlight %}


## Lists

Ut fermentum massa justo sit amet risus.

* Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
* Donec id elit non mi porta gravida at eget metus.
* Nulla vitae elit libero, a pharetra augue.

Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.

1. Vestibulum id ligula porta felis euismod semper.
2. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
3. Maecenas sed diam eget risus varius blandit sit amet non magna.

## Images

![placeholder](http://placehold.it/1200x200 "Large example image")

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

[^fn-sample_footnote]: Handy! Now click the return link to go back.
