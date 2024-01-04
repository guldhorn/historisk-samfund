---
layout: default
title: Kontakt os
permalink: /kontakt
---

Vil du i kontakt med Historisk Samfund for Århus Stift kan du udfylde nedenstående formular eller sende en mail til foreningens digitale postkasse.

<form id="contactform" action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="b90d20d9-9f0f-4b80-8b82-015416aa2683">
    <input type="hidden" name="redirect" value="{{ site.url }}/kvittering">
    <input type="hidden" name="from_name" value="Historisk Samfund - Kontakt os">
    <label for="name"><input type="text" name="name" placeholder="Navn" required></label>
    <label for="email"><input type="email" name="email" placeholder="Email" required></label>
    <label for="subject"><input type="text" name="subject" placeholder="Emne" required></label>
    <label for="message"><textarea name="message" placeholder="Skriv besked..." required></textarea></label>
    <div class="h-captcha" data-captcha="true"></div>
    <button type="submit"aria-label="Send beskeden">Send</button>
</form>
<script src="https://web3forms.com/client/script.js" async defer></script>
