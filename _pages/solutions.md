---
title    : Solutions
permalink: '/solutions/'
hero     : <b>Solutions</b>That Drive<br>Your Business.
icon     : lightbulb
intro    : "<p>EdgePoint Learning works closely with you to understand your business, learning objectives and expected outcomes. We then craft a targeted learning solution that works. Whether your organization is a small- or medium-sized business (SMB), multinational corporation or not-for-profit, one thing remains constant: good learning equals good business. EdgePoint Learning has the expertise to define, design and develop point or blended learning solutions—instructor-led training programs (for classroom or virtual delivery); eLearning courseware; animations, simulations and gaming; and OJT reference materials—that will get the job done.</p>"
---

{% assign filtered_solutions = site.data.solutions | sort:'title' %}
{% for solution in filtered_solutions %}
  {% if solution.id != 'localization' %}
  <ul>
    <li>{{ solution.title }}</li>
    <li><figure style="width:32px">{{ site.data.icons[solution.icon]svg }}</figure></li>
    <li>{{ solution.desc }}</li>
    <li><a href='{{ solution.link }}'>Learn More</a></li>
  </ul>
  <br>
  {% endif %}
{% endfor %}
