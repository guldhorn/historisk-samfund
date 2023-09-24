---
layout: default
slides:
  - url: /arrangementer/2023-09-26-nyt-om-tollundmanden
    image: tollundmanden-nyhed.jpg
    alt: Foredrag om Tollundmanden
    title: Nyt om Tollundmanden. Bændelorm, fodvorter og lækker grød
    text: Tirsdag den 26. september 2023
  - url: /arrangementer/2023-11-08-kulturhistorisk-skrald
    image: kulturhistorisk-skrald-nyhed.jpg
    alt: Foredrag om kulturhistorisk skrald
    title: Kulturhistorisk skrald. Museet i mudderet (metaldekektor)
    text: Onsdag den 8. november 2023
  - url: /arrangementer/2023-11-27-om-livoe
    image: livoe-nyhed.jpg
    alt: Foredrag om Livø
    title: Om Livø. 50 år på anstalten
    text: Mandag den 27. november 2023
---

<div class="slider-wrapper">
  <button class="slide-arrow" id="slide-arrow-prev">&#8249;</button>
  <button class="slide-arrow" id="slide-arrow-next">&#8250;</button>
  <ul class="slides-container" id="slides-container">
  {% for slide in page.slides %}
    <li class="slide">
      <a href="{{ slide.url | relative_url }}">
        <img src="/assets{{ slide.image | relative_url }}" alt="{{ slide.alt }}">
        <div class="slide-textbox">
          <p class="slide-title">{{ slide.title }}</p>
          <p class="slide-text">{{ slide.text }}</p>
          <p class="slide-read-more">Læs mere...</p>
        </div>
      </a>
    </li>
  {% endfor %}
    <!--
    <li class="slide">
      <a href="{{ '/arrangementer/2023-09-26-nyt-om-tollundmanden' | relative_url }}">
        <img src="{{ 'assets/tollundmanden-nyhed.jpg' | relative_url }}" alt="Foredrag om Tollundmanden">
        <div class="slide-textbox">
          <p class="slide-title">Nyt om Tollundmanden. Bændelorm, fodvorter og lækker grød</p>
          <p class="slide-text">Tirsdag den 26. september 2023</p>
          <p class="slide-read-more">Læs mere...</p>
        </div>
      </a>
    </li>
    <li class="slide">
      <a href="{{ '/arrangementer/2023-11-08-kulturhistorisk-skrald' | relative_url }}">
        <img src="{{ 'assets/kulturhistorisk-skrald-nyhed.jpg' | relative_url }}" alt="Foredrag om kulturhistorisk skrald">
        <div class="slide-textbox">
          <p class="slide-title">Kulturhistorisk skrald. Museet i mudderet (metaldekektor)</p>
          <p class="slide-text">Onsdag den 8. november 2023</p>
          <p class="slide-read-more">Læs mere...</p>
        </div>
      </a>
    </li>
    <li class="slide">
      <a href="{{ '/arrangementer/2023-11-27-om-livoe' | relative_url }}">
        <img src="{{ 'assets/livoe-nyhed.jpg' | relative_url }}" alt="Foredrag om Livø">
        <div class="slide-textbox">
          <p class="slide-title">Om Livø. 50 år på anstalten</p>
          <p class="slide-text">Mandag den 27. november 2023</p>
          <p class="slide-read-more">Læs mere...</p>
        </div>
      </a>
    </li>
    -->
  </ul>
</div>