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