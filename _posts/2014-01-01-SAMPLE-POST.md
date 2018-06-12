---
title: It's A Sample Post!
permalink: /blog/sample-post/
author:
  name: Tyler Campbell
image: blog/2014/2014-01-01-dog-face.jpg
excerpt: This text shows up in search engines and on the blog listings page. This text shows up in search engines and on the blog listings page. This text shows up in search engines and on the blog listings page.
date: 2025-01-02
related: false
redirect_from: "/blog/2001/01/01/sample-post"
---

## Howdy! (This is an H2. Don't use H1.)

This is an example blog post that shows several types of HTML content supported in this theme. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet.

## Images

Lorem ipsum dolor sit amet, consectetur adipisicing elit.

### Wide images are 1170px wide

<!-- TODO: jekyll-assets-v3 -->
{% img 'blog/2014/2014-01-01-cat-treat.jpg'
   alt:'A well-behaved cat'
   class:'marginBot marginTopHalf'
   magick:resize:1170
   magick:quality:92 %}
{: .wideImage }

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

### Normal images are 670px wide

<!-- TODO: jekyll-assets-v3 -->
{% img 'blog/2014/2014-01-01-pink-chrysanthemum.jpg'
   alt:'A pink chrysanthemum'
   id:'chrysanthemum'
   class:'marginBot marginTopHalf'
   magick:resize:670
   magick:quality:92 %}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

### Smaller images can be floated

<!-- TODO: jekyll-assets-v3 -->
{% img 'blog/2014/2014-01-01-a-bouquet-of-nutrition.jpg'
   alt:'broc'
   class:'float-right thumbnail marginTopEM marginLeft'
   magick:resize:240
   magick:quality:92 %}

**Don't forget to add a `.clearfix` class to the following paragraph or block element!** Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
{: .clearfix }

<!-- TODO: jekyll-assets-v3 -->
{% img 'blog/2014/2014-01-01-lemon.jpg'
   alt:'broc'
   class:'float-left thumbnail marginTopHalf marginRight'
   magick:resize:240
   magick:quality:92 %}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
{: .clearfix }


## Embeds

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

<div class="responsive-embed widescreen marginBot marginTop">
  <iframe src="https://player.vimeo.com/video/229428936" width="480" height="380" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo.

<div class="responsive-embed">
  <iframe src="https://player.vimeo.com/video/219609124" width="480" height="380" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

## Common Styling

Taken from [kramdown quick reference.](https://kramdown.gettalong.org/quickref.html)

### Footnotes

Footnotes are supported as part of the Markdown syntax. Here's one in action. Clicking this number[^fn-sample_footnote] will lead you to a footnote.

### Emphasis

**To bold text**, use `**`.

*To italicize text*, use `*`.

### Blockquotes
> Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.

<cite>**Michael Scott**, The Office</cite>


### Block Attributes

This paragraph has an ID, a Title, and a class applied to it.
{: .c3 title="t" #para}

### Inline Attributes

This is *red*{: style="color: red"}.

### Abbreviations:

This is an HTML example.

*[HTML]: Hyper Text Markup Language

## Lists

Unordered Lists:

* Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
* Donec id elit non mi porta gravida at eget metus.
* Nulla vitae elit libero, a pharetra augue.

Ordered Lists:

1. Vestibulum id ligula porta felis euismod semper.
2. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
3. Maecenas sed diam eget risus varius blandit sit amet non magna.

## Tables

This table has styling applied to restrict its width:

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
{: style="max-width:670px;margin-left:auto;margin-right:auto" }

Othewise, tables are full-width by default:

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

---
#### An Esteemed Author

<!-- TODO: jekyll-assets-v3 -->
{% img 'blog/2014/2014-01-01-today-pink-is-my-mood.jpg'
   alt:'Quincy Conley'
   class:'float-right thumbnail marginLeft marginTopHalf'
   magick:resize:120
   magick:quality:92 %}

*Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco.*
{: .clearfix }
---

[^fn-sample_footnote]: Handy! Now click the return link to go back.
