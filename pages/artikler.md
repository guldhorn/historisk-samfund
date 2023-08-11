---
layout: default
title: Online artikler
permalink: /artikler
---

<p>Et væld af oplysninger om vores lokale historie ligger gemt og glemt i Historisk Samfund for Århus Stifts mange glimrende årbøger.
Historisk Samfund for Århus Stift har digitaliseret Samfundets årbøger fra 1908 og 2014. 
Du kan tilgå artiklerne her. Historisk Samfund for Århus Stift ønsker alle god fornøjelse.</p>

<div class="searchform-container">
    <form id="searchform" method="get">
        <input type="hidden" name="_shape" value="objects">
        <input type="hidden" name="_sort" value="year">
        <input class="form-control" name="_search" type="search" aria-label="Indtast søgeord" placeholder="Indtast søgeord">
        <select id="year-filter" class="form-control" name="year" aria-label="Vis kun resultater fra denne årgang">>
            <option value="" selected>Vælg en årgang</option>
            {% for i in (1908..2014) %}
                <option value="{{ i }}">{{ i }}</option>
            {% endfor %}
        </select>
        <button type="submit" aria-label="Søg">Søg</button>
    </form>
</div>
<div class="results-container">
    <ul class="results-list">
    </ul>
</div>
