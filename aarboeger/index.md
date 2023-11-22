---
layout: default
title: Årbøger
---

<div class="yearbook-intro">
    <div>
        <p>Historisk Samfund for Århus Stift udgiver hvert år i november / december en årbog med artikler som tager udgangspunkt i stiftets historie og kultur. Artiklerne er skrevet af forskellige forfattere, og foreningen har en ambition om, at der er bidrag fra studerende.</p>
        <p>Bogens artikler kan læses selvstændigt, og årbogen indgår i en over 100 år lang række af årbøger, der begyndte at udkomme i 1908. Alle årbøger fra 1908 til 2014 er digitaliseret. <a href="{{ 'artikler' | relative_url }}">Søg i artikelbasen</a></p>
    </div>
    <div>
        <p>Hvis du har lyst til at bidrage til årbogen, kan du <a href="{{ 'kontakt' | relative_url }}">kontakte os via kontaktformularen</a></p>
        <p>Se vejledning til forfattere. (link til vejledning)</p>
    </div>
</div>

<div class="yearbook-list">
    {% for book in site.data.yearbooks %}
    <div>
        <a href="{{ book.url | relative_url }}">
            <img src="{{ book.image_front_url | relative_url }}" />
        </a>
    </div>
    {% endfor %}
</div>
