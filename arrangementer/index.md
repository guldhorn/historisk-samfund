---
layout: default
title: Arrangementer
arrangements:
  - url: /arrangementer/2023-09-26-nyt-om-tollundmanden
    image: tollundmanden-arrangement.jpg
    alt: Foredrag om Tollundmanden
    title: Nyt om Tollundmanden. Bændelorm, fodvorter og lækker grød
    text: Tirsdag den 26. september 2023
  - url: /arrangementer/2023-11-08-kulturhistorisk-skrald
    image: kulturhistorisk-skrald-arrangement.jpg
    alt: Foredrag om kulturhistorisk skrald
    title: Kulturhistorisk skrald. Museet i mudderet (metaldekektor)
    text: Onsdag den 8. november 2023
  - url: /arrangementer/2023-11-27-om-livoe
    image: livoe-arrangement.jpg
    alt: Foredrag om Livø
    title: Om Livø. 50 år på anstalten
    text: Mandag den 27. november 2023
---

<h1>Kommende arrangementer</h1>
<ul class="future-arrangements">
{% for arr in page.arrangements %}
    <li class="future-arrangement">
        <a class="" href="{{ arr.url }}">
            <div class="future-arrangement-image">
                <img src="/assets/{{ arr.image }}">
            </div>
            <div class="future-arrangement-textbox">
                <div class="future-arrangement-title">{{ arr.title }}</div>
                <div class="future-arrangement-time">{{ arr.text }}</div>
                <div class="future-arrangement-read-more">Læs mere</div>
            </div>
        </a>
    </li>
{% endfor %}
</ul>

<!-- 
- [29. september 2023: Nyt om Tollundmanden](/arrangementer/2023-09-26-nyt-om-tollundmanden)
- [27. november 2023: Om Livø](/arrangementer/2023-11-27-om-livoe)
- [8. november 2023: Kulturhistorisk skrald](/arrangementer/2023-11-08-kulturhistorisk-skrald) -->
