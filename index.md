---
layout: default
---

<div class="slider-wrapper">
  <button class="slide-arrow" id="slide-arrow-prev">&#8249;</button>
  <button class="slide-arrow" id="slide-arrow-next">&#8250;</button>
  <ul class="slides-container" id="slides-container">
    {% for file in site.static_files %}
    {% if file.extname == ".jpg" %}
        <li class="slide">
            <img src="{{ file.path }}" alt="Slide {{ loop.index }}">
        </li>
    {% endif %}
    {% endfor %}
  </ul>
</div>