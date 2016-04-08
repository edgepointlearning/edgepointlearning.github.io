---
title    : Solutions
permalink: '/solutions/'
layout   : page

hero     : <b>Solutions</b>That Drive<br>Your Business.
icon     : lightbulb
intro    : "<p>EdgePoint Learning works closely with you to understand your business, learning objectives and expected outcomes. We then craft a targeted learning solution that works. Whether your organization is a small- or medium-sized business (SMB), multinational corporation or not-for-profit, one thing remains constant: good learning equals good business. EdgePoint Learning has the expertise to define, design and develop point or blended learning solutions—instructor-led training programs (for classroom or virtual delivery); eLearning courseware; animations, simulations and gaming; and OJT reference materials—that will get the job done.</p>"
---

<section class="box_holder">
  {% for box in site.solutions %}
    {% include box.html solution='true' %}
  {% endfor %}
</section>
<hr style="border: 0; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(158, 158, 163, 1), rgba(0, 0, 0, 0));">
