---
layout: default
title: Årbøger
permalink: /aarboeger
---

<div class="yearbook-intro">
    <div>
        <p>Historisk Samfund for Århus Stift udgiver hvert år i november / december en årbog med artikler som tager udgangspunkt i stiftets historie og kultur. Artiklerne er skrevet af forskellige forfattere, og foreningen har en ambition om, at der er bidrag fra studerende.</p>
        <p>Bogens artikler kan læses selvstændigt, og årbogen indgår i en over 100 år lang række af årbøger, der begyndte at udkomme i 1908. Alle årbøger fra 1908 til 2014 er digitaliseret. <a href="/artikler.md">Søg i artikelbasen</a></p>
    </div>
    <div>
        <p>Har du lyst til at bidrage til årbogen så send en mail til post@historisk-samfund-aarhus.dk</p>
        <p>Se vejledning til forfattere. (link til vejledning)</p>
    </div>
</div>

<div class="yearbook-list">
    {% for book in site.data.yearbooks %}
    <div class="book">
      <div class="card">
          <div class="card__face card__face--front" style="background-image:url({{ book.image_front_url | relative_url }});">front</div>
          <div class="card__face card__face--back" style="background-image:url({{ book.image_back_url | relative_url }});">back</div>
      </div>
    </div>
    {% endfor %}
</div>