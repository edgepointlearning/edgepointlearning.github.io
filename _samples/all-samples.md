---
layout   : page
title    : Samples
permalink: "/all-samples/"
hero     : A Whole Bunch of Demos
---

<section class="story_holder">
  {% assign filtered_articles = site.demos | sort:'title' %}
  {% for article in filtered_articles %}
    {% include demo.html %}
  {% endfor %}
</section>
