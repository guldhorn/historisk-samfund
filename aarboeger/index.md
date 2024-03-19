---
layout: default
title: Årbøger
---

<div class="yearbook-intro">
    <div>
        <p>Historisk Samfund for Århus Stift udgiver hvert år ved årets udgang en årbog med artikler, som tager udgangspunkt i Østjyllands historie og kultur. Artiklerne er skrevet af forskellige forfattere, og foreningen har en ambition om, at der er bidrag fra studerende.</p>
        <p>Foreningen har en lang tradion for at udgive årbøger. Den første udkom i 1908, og alle årbøger fra 1908 til 2014 er digitaliseret. <a href="{{ 'artikler' | relative_url }}">Søg i artikelbasen</a></p>
    </div>
    <div>
        <p>Hvis du har lyst til at bidrage til årbogen, kan du <a href="{{ 'kontakt' | relative_url }}">kontakte os via kontaktformularen</a></p>
        <p><a href="{{ 'assets/Forfattervejledning.pdf' | relative_url }}">Se vejledningen til forfattere</a></p>
    </div>
</div>
      <div>
        <p>Hvis du trykker på en forside nedenfor, kan du se årbogens indholdsfortegnelse.</p>
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
