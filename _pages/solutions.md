---
title    : Solutions
permalink: '/solutions/'
hero     : Solutions<br> That Drive<br> Your Business.
cards    :
 - demos
 - talk
---
## EdgePoint Enables Your Workforce

<figure class="featuredIcon">{{ site.data.icons.lightbulb.svg }}</figure>

EdgePoint Learning works closely with you to understand you business and craft a targeted learning solution that works. Whether your organization is a small or medium-sized business, multinational corporation or non-profit, good learning equals good business.

EdgePoint has the expertise to develop learning solutions that will get the job done, including:

* eLearning courseware
* Animations, simulations and gaming
* Instructor-led training programs (for classroom or virtual delivery)
* On-the-job reference materials and job aid
* Blended Learning Solutions

[Contact us](/form/talk/) to talk about how we can work together.

<section id="solutions">
  {% assign filtered_solutions = site.data.solutions | sort:'title' %}
  {% for solution in filtered_solutions %}
    <article class="solution" id='solution_{{ solution.name }}'>
      <figure>{{ site.data.icons[solution.icon]svg }}</figure>
      <section>
        <h3>{{ solution.title }}</h3>
        <p>{{ solution.desc }}</p>
        <!-- <p><a href='{{ solution.link }}' class='button'>Learn More</a></p> -->
      </section>
    </article>
  {% endfor %}
</section>
