<script lang="ts">
    import Info from "../components/Info.svelte";
    import ThemeToggle from "../components/ThemeToggle.svelte";
</script>

<ThemeToggle/>

<main class="mb-20">
      <div class="hero min-h-screen">
            <div class="hero-overlay bg-opacity-0"></div>
            <div class="hero-content text-center">
                  <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Debatabase</h1>
                        <p class="mb-5">Os recursos de debate competitivo, que não sabias que precisasavas, num só lugar.</p>

                        <a class="btn btn-accent" target="_blank" 
                           href="https://forms.gle/BVY4rivH3u2BBCyL9"
                        >
                           Sugestões
                        </a>
                  </div>
            </div>

      </div>
        
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                    text-center w-11/12 mx-auto"
      >
            <Info icon="translate"
                  title="Português e Inglês"
                  desc=""/>
            <Info icon="easel2"
                  title="Formações Gravadas"
                  desc=""/>
            <Info icon="file-earmark-pdf"
                  title="Formações Escritas"
                  desc=""/>
            <Info icon="globe2"
                  title="Websites e Artigos"
                  desc=""/>
            <Info icon="camera-video"
                  title="Vídeos"
                  desc=""/>
            <Info icon="film"
                  title="Debates Gravados"
                  desc=""/>
      
            <div>© 2023 Gonçalo Teixeira.</div>
      </div>
</main>
