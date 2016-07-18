---
title    : Success Stories
permalink: '/stories/'
hero     : Learning Success<br> is Business Impact.
---
## EdgePoint Enables Results

<figure class="featuredIcon">{{ site.data.icons.rocket.svg }}</figure>

At EdgePoint, we believe learning program success means your training has a measureable impact on performance at the enterprise, team or individual level.

EdgePoint Enables™ our clients to rapidly develop and deploy best-fit learning programs designed to meet your specific business needs.

[Contact us](#) to talk about how we can work together.

{% include clients.html %}

<section id='solutions'>
  {% assign filtered_stories = site.stories | sort:'solution' %}
  {% for story in filtered_stories %}
    {% if story.solution %}
    {% assign solution = site.data.solutions | where:'id', story.solution | first %}
    <article class='solution'>
      <figure>{{ site.data.icons[solution.icon]svg }}</figure>
      <section>
        <h3>{{ solution.title }}</h3>
        <p>{{ story.snippet }}</p>
        <p><a href='{{ story.link }}' class='button'>Read Story</a></p>
      </section>
    </article>
    {% endif %}
  {% endfor %}
</section>
