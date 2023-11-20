---
layout: default
title: Online artikler
permalink: /artikler
---
<div>
    <p>Et væld af oplysninger om vores lokale historie ligger gemt i Historisk Samfund for Århus Stifts mange glimrende årbøger. Foreningen har digitaliseret Samfundets årbøger fra 1908 og helt frem til 2014. Du kan tilgå artiklerne her. Historisk Samfund for Århus Stift ønsker alle god fornøjelse.</p>
</div>

<div class="searchform-container">
    <form id="searchform" method="get">
        <input id="q" class="form-control" name="q" type="search" aria-label="Indtast søgeord" placeholder="Indtast søgeord" required>
        <div class="form-row">
            <div class="select-container">
                <label for="year">Årstal
                    <select id="year" class="form-control" name="year" aria-label="Vis kun resultater fra denne årgang">>
                        <option value="" selected>Vælg evt. årgang</option>
                        {% for i in (1908..2014) %}
                            <option value="{{ i }}">{{ i }}</option>
                        {% endfor %}
                    </select>
                </label>
            </div>
            <div class="select-container">
                <label for="sort">Sortering
                    <select id="sort" class="form-control" name="sort" aria-label="Sortér søgningen">
                        <option value="year_asc" selected>Årstal (stigende)</option>
                        <option value="year_desc">Årstal (faldende)</option>
                        <option value="title_asc">Titel (stigende)</option>
                        <option value="title_desc">Titel (faldende)</option>
                        <option value="author_asc">Forfatter (A-Å)</option>
                        <option value="author_desc">Forfatter (Å-A)</option>
                    </select>
                </label>
            </div>
            <div class="select-container">
                <label for="size">Antal visninger
                    <select id="size" name="size" class="form-control" aria-label="Vælg antal søgeresultater per side">
                        <option value="20" selected>20 per side</option>
                        <option value="50">50 per side</option>
                        <option value="100">100 per side</option>
                    </select>
                </label>
            </div>
        </div>
        <button type="submit" aria-label="Søg">Søg</button>
    </form>
</div>

<div class="results-container">
    <ul class="results-list">
    </ul>
</div>
