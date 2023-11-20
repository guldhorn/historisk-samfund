---
layout: default
---

<div class="slider-wrapper">
  <button class="slide-arrow" id="slide-arrow-prev">&#8249;</button>
  <button class="slide-arrow" id="slide-arrow-next">&#8250;</button>
  <ul class="slides-container" id="slides-container">
  {% for slide in site.data.slides %}
    <li class="slide">
      <a href="{{ slide.page_url | relative_url }}">
        <img src="{{ slide.image_url | relative_url }}" alt="{{ slide.image_alt }}">
        <div class="slide-textbox">
          <p class="slide-title">{{ slide.title }}</p>
          <p class="slide-text">{{ slide.text }}</p>
          <p class="slide-read-more">Læs mere...</p>
        </div>
      </a>
    </li>
  {% endfor %}
  </ul>
</div>

<div class="teaser-wrapper">
  {% for teaser in site.data.teasers %}
    <div class="teaser">
      <div class="teaser-image">
        <a href="{{ teaser.page_url | relative_url }}">
          <img src="{{ teaser.image_url | relative_url }}" alt="{{ teaser.image_alt }}">
        </a>
      </div>
      <div class="teaser-textbox">
        <p class="teaser-title">{{ teaser.title }}</p>
        <p class="teaser-text">{{ teaser.text }}</p>
        <a href="{{ teaser.page_url | relative_url }}">Læs mere...</a>
      </div>
    </div>
  {% endfor %}
</div>