---
layout: default
title: Bliv medlem
permalink: /bliv-medlem
---

Et medlemskab af Historisk Samfund for Århus Stift koster 250 kr. om året. 

For kontingentet får du foreningens årbog, som er fyldt med spændende og afvekslende artikler om vor egns historie. Du får desuden mulighed for at deltage i en række spændende foredrag arrangeret af Historisk Samfund for Århus Stift.

<form id="contactform" action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="c455ebc6-5d5f-44b7-af14-e052fbfc075d">
    <!-- <input type="hidden" name="access_key" value="b90d20d9-9f0f-4b80-8b82-015416aa2683"> -->
    <input type="hidden" name="redirect" value="{{ site.url }}/kvittering">
    <input type="hidden" name="from_name" value="Historisk Samfund - Bliv medlem">
    <input type="hidden" name="subject" value="Nyt medlem">
    <label for="name"><input type="text" name="name" placeholder="Navn" required></label>
    <label for="email"><input type="email" name="email" placeholder="Email" required></label>
    <label for="address"><input name="address" placeholder="Adresse" required></label>
    <label for="message"><textarea name="message" placeholder="Eventuelle kommentarer..."></textarea></label>
    <div class="h-captcha" data-captcha="true"></div>
    <button type="submit" aria-label="Send beskeden">Send</button>
</form>
<script src="https://web3forms.com/client/script.js" async defer></script>
