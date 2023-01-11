# POUR formatter la balise code j'utilise la librairie Highlight.js

lien vers la librairie : https://highlightjs.org/

tuto pour installer : 

1. coller les cdn css 
<!-- Highlight -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/atom-one-dark.min.css" integrity="sha512-Jk4AqjWsdSzSWCSuQTfYRIF84Rq/eV0G2+tu07byYwHcbTGfdmLrHjUSwvzp5HvbiqK4ibmNwdcG49Y5RGYPTg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
2. coller les cdn js
 <!-- HighLight -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
    <script>hljs.highlightAll();</script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/languages/css.min.js" integrity="sha512-xR3r57wYgwm5sn+JFRs5G8aNXMYSdxRGGrs1slFiVtREckY/+aBUNrhkn/4XpbTLke39koHzUIcotRI4Ka0Bpw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    
3. utilisation dans html

    <pre>
        <code class="language-css">
        .exemple{
            ...
        }
        </code>
    </pre>
