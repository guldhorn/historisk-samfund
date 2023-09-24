---
layout: default
title: Arrangementer
---

<h1>Kommende arrangementer</h1>
<ul class="future-arrangements">
{% for arr in site.data.arrangements %}
    <li class="future-arrangement">
        <a href="{{ arr.page_url | relative_url }}">
            <div class="future-arrangement-image">
                <img src="{{ arr.image_url | relative_url }}">
            </div>
            <div class="future-arrangement-textbox">
                <div class="future-arrangement-title">{{ arr.title }}</div>
                <div class="future-arrangement-time">{{ arr.date }}</div>
                <div class="future-arrangement-read-more">Læs mere</div>
            </div>
        </a>
    </li>
{% endfor %}
</ul>