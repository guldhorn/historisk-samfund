---
layout: default
title: Bliv medlem
permalink: /bliv-medlem
---

Et medlemskab af Historisk Samfund for Århus Stift koster 250 kr. om året. 

For kontingentet får du foreningens årbog, som er fyldt med spændende og afvekslende artikler om vor egns historie. Du får desuden mulighed for at deltage i en række spændende foredrag arrangeret af Historisk Samfund for Århus Stift.

<form id="contactform" action="https://api.staticforms.xyz/submit" method="post">
    <input type="text" id="email" name="email">
    <input type="hidden" name="accessKey" value="2c0293be-d540-4b7d-a254-c026a8acc2e7">
    <input type="hidden" name="$Formular" value="Bliv medlem">
    <!-- Specify @ as reply to value if you want it to be customers email -->
    <input type="hidden" name="replyTo" value="@">
    <input type="hidden" name="redirectTo" value="{{ site.url }}/kvittering">
    <label for="name">
        <input type="text" id="name" name="name" placeholder="Navn" required>
    </label>
    <div id="errorDiv"></div>
    <label for="honeypot">
        <input type="text" id="honeypot" name="honeypot" placeholder="Email">
    </label>
    <label for="address">
        <input type="text" id="address" name="$address" placeholder="Adresse" required>
    </label>
    <label for="message">
        <textarea name="message" id="message" placeholder="Eventuelle kommentarer..."></textarea>
    </label>
    <button type="submit" aria-label="Send beskeden">Send</button>
</form>
