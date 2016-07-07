---
title    : Success Stories
permalink: '/success-stories/'
hero     : Learning Success is<b>Business Impact.</b>
---

<figure style="width:32px">{{ site.data.icons.rocket.svg }}</figure>

For EdgePoint Learning, learning program success can only be achieved through having a measurable impact on your organization's performance at the enterprise, team or individual levels. EdgePoint Enables™ our clients to rapidly develop and deploy best-fit learning programs designed for business benefit. 

{% assign filtered_stories = site.stories | sort:'solution' %}
{% for story in filtered_stories %}
  {% if story.solution %}
  {% assign solution = site.data.solutions | where:"id", story.solution | first %}
  <ul>
    <li>{{ solution.title }}</li>
    <li><figure style="width:32px">{{ site.data.icons[solution.icon]svg }}</figure></li>
    <li>{{ story.snippet }}</li>
    <li><a href='{{ story.link }}'>Read Story</a></li>
  </ul>
  <br>
  {% endif %}
{% endfor %}
