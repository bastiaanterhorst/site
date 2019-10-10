# Getting this up and running

1. Install Hugo: ```brew install hugo```
2. Run in dev mode: ```hugo server```



TODO

- make the sizings flex?


- publish to gh pages
    - https://help.github.com/en/articles/using-a-custom-domain-with-github-pages
    - http://instantclick.io/
- inspiration
    https://jonasluebbers.com/
    https://nalden.net
    https://ashfurrow.com
    https://www.123rf.com/photo_96959915_old-marbled-paper-texture-background.html
    anneke.com
    https://www.productculture.org/about
    https://web.archive.org/web/20021210080822/http://textism.com:80/about/
    
- type
    https://fonts.google.com/specimen/Merriweather?selection.family=Merriweather
    https://fonts.google.com/specimen/Merriweather+Sans
    https://fonts.google.com/specimen/Playfair+Display?selection.family=Playfair+Display
    https://fonts.google.com/specimen/Playfair+Display+SC





good example of using variables to dynamically change what is rendered:
    {{ $displaySidebar := false }}
    {{ range .Site.Params.mainSections }}
    {{ if eq $.Section . }}
    {{ $displaySidebar = true }}
    {{ end }}
    {{ end }}

    {{ if $displaySidebar }}
    <div class="container pt-2 pt-md-6 pb-3 pb-md-6">
      <div class="row">
        <div class="col-12 col-md-3 mb-3">
          <div class="sidebar">
            {{ partial "sidebar.html" . }}
          </div>
        </div>
        <div class="col-12 col-md-9">
          {{ block "main" . }}
          {{ end }}
        </div>
      </div>
    </div>
    {{ else }}
    {{ block "main" . }}
    {{ end }}
    {{ end}}
  </div>