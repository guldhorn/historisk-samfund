---
layout: default
title: Kontakt os
permalink: /kontakt
---

Vil du i kontakt med Historisk Samfund for Århus Stift kan du udfylde nedenstående formular eller sende en mail til foreningens digitale postkasse.

<form class="contact-form" action="https://api.staticforms.xyz/submit" method="post">
    <input type="text" name="honeypot" style="display: none;">
    <input type="hidden" name="accessKey" value="80cb6273-c24d-4f66-a336-2abd77c8923b">
    <input type="hidden" name="$Formular" value="Kontakt os">
    <input type="hidden" name="replyTo" value="@">
    <input type="hidden" name="redirectTo" value="https://aarhusstadsarkiv.github.io/historisk-samfund">
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
    <input type="submit" value="Submit" />
</form>
