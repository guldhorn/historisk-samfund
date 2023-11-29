---
layout: default
title: Kontakt os
permalink: /kontakt
---

Vil du i kontakt med Historisk Samfund for Århus Stift kan du udfylde nedenstående formular eller sende en mail til foreningens digitale postkasse.

<form id="contactform" action="https://api.staticforms.xyz/submit" method="post">
    <input type="text" name="honeypot">
    <input type="hidden" name="accessKey" value="2c0293be-d540-4b7d-a254-c026a8acc2e7">
    <input type="hidden" name="$Formular" value="Kontakt os">
    <!-- Specify @ as reply to value if you want it to be customers email -->
    <input type="hidden" name="replyTo" value="@">
    <input type="hidden" name="redirectTo" value="{{ site.url }}/kvittering">
    <label for="name">
        <input type="text" id="name" name="name" placeholder="Navn" required>
    </label>
    <label for="email">
        <input type="text" id="email" name="email" placeholder="Email" required>
    </label>
    <label for="subject">
        <input type="text" id="subject" name="subject" placeholder="Emne" required>
    </label>
    <label for="message">
        <textarea name="message" id="message" placeholder="Skriv besked..." required></textarea>
    </label>
    <button type="submit" aria-label="Send beskeden">Send</button>
</form>
