---
layout: default
title: Arrangementer
---
<div>
    <p>Historisk Samfund for Århus Stift holder normalt tre arrangementer om foråret, en udflugt omkring sommerferien og tre arrangementer om efteråret.</p>
    <P>Arrangementerne tager alle udgangspunkt i stiftets historie, og spænder bredt i både emne, tid og sted. Du kan således få nyt fra oldtid og nutid, når vi afholder foredrag, rundvisning og udflugter.</p>
</div>

<h1>Årets arrangementer</h1>
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