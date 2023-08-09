import { Resource, Langs, Kinds } from "../interfaces/resource";

export let db: Resource[] = [
    {
        id: 0,
        title: "THW choose the job they are passionate about",
        author: "",
        url:new URL("https://www.youtube.com/watch?v=gyg5B2hMb5E"),
        lang: Langs.EN,
        kind: Kinds.Debates,
    },
    {
        id: 1,
        title: "Como debater moções de Economia",
        author: "Pedro González",
        url:new URL("https://www.youtube.com/watch?v=6EPnQqTnzkI"),
        lang: Langs.PT,
        kind: Kinds.Recorded,
    },
    {
        id: 2,
        title: "Note taking for debaters and adjudicators",
        author: "Noluthando Honono",
        url:new URL("https://youtu.be/9jpgDmXAAaA?t=7"),
        lang: Langs.EN,
        kind: Kinds.Debates,
    },
    {
        id: 3,
        title: "Contributing to panel discussions as a Wing or a Trainee",
        author: "Matthew Evans",
        url:new URL("https://youtu.be/M1fWwfRs8gg"),
        lang: Langs.EN,
        kind: Kinds.Recorded,
    },
    {
        id: 4,
        title: "Adjudication",
        author: "Brian Wong",
        url:new URL("https://youtu.be/pvOfgVUXF6g"),
        lang: Langs.EN,
        kind: Kinds.Recorded,
    
    },
    {
        id: 5,
        title: "How to debate International Relations Motions",
        author: "",
        url:new URL("https://drive.google.com/file/d/1RtOe92PmEldvuac22ojdeJcnNDOXx__N/view?usp=drivesdk"),
        lang: Langs.EN,
        kind: Kinds.Written,
    },
    {
        id: 6,
        title: "What does a good judge believe in?",
        author: "Shengwu Li",
        url:new URL("https://globaldebateblog.blogspot.com/2012/11/what-does-good-judge-believe-thoughts.html"),
        lang: Langs.EN,
        kind: Kinds.Articles,
    },
    {
        id: 7,
        title: "Arte",
        author: "Fattha Mahmud",
        url:new URL("https://www.youtube.com/watch?v=kC-ESS0VAXk"),
        lang: Langs.PT,
        kind: Kinds.Recorded,
    },
    {
        id: 8,
        title: "How to win debates without really making arguments: An Introduction to Framing",
        author: "Adam Hawksbee",
        url:new URL("https://www.youtube.com/watch?v=Xd_8jrid_mk"),
        lang: Langs.EN,
        kind: Kinds.Recorded,
    },
    {
        id: 9,
        title: "Debating China",
        author: "Brian Wong",
        url:new URL("https://www.youtube.com/watch?v=XnI4d0oJWRo"),
        lang: Langs.EN,
        kind: Kinds.Recorded,
    },
    {
        id: 10,
        title: "How to be a good and useful wing",
        author: "",
        url:new URL("https://drive.google.com/file/d/1HQLuMe0Mo1_PiEr3ZONaEyPQ8bOadrr1/view?usp=drivesdk"),
        lang: Langs.EN,
        kind: Kinds.Written,
    },
    {
        id: 11,
        title: "WUDC Judging Manual",
        author: "",
        url:new URL("https://drive.google.com/file/d/1rg9gNHM9-oFDmRPToiX0f5vlVIZP6gXz/view?usp=drivesdk"),
        lang: Langs.EN,
        kind: Kinds.Manuals,
    },
    {
        id: 12,
        title: "Política",
        author: "Gabriel Affonso",
        url:new URL("https://www.youtube.com/watch?v=FQ0yhMMv2hA&feature=youtu.be"),
        lang: Langs.PT,
        kind: Kinds.Recorded,
    },
    {
        id: 13,
        title: "Motion Setting and Evaluating",
        author: "",
        url:new URL("https://docs.google.com/document/u/0/d/1ZnLYmmvd_wom_u0EZk7JPXBBVtLsgACmA10oy7v68C8/mobilebasic"),
        lang: Langs.EN,
        kind: Kinds.Written,
    },
    {
        id: 14,
        title: "Análise de Moções e PrepTime",
        author: "Bruno Santos",
        url:new URL("https://www.youtube.com/watch?v=flzgvS7tupY"),
        lang: Langs.PT,
        kind: Kinds.Recorded,
    },
    {
        id: 15,
        title: "Becoming Super Saiyan",
        author: "",
        url:new URL("https://ehpriori.com/home/becoming-super-saiyan"),
        lang: Langs.EN,
        kind: Kinds.Articles,
    },
    {
        id: 16,
        title: "Eh Priori",
        author: "",
        url:new URL("https://ehpriori.com/"),
        lang: Langs.EN,
        kind: Kinds.Websites,
    },
    {
        id: 17,
        title: "Hello, Motions!",
        author: "Jessica Yung",
        url:new URL("http://hellomotions.com/"),
        lang: Langs.EN,
        kind: Kinds.Websites,
    },
    {
        id: 18,
        title: "The Breaker",
        author: "Gonçalo Teixeira",
        url:new URL("https://the-breaker.netlify.app/"),
        lang: Langs.PT,
        kind: Kinds.Websites,
    },
    {
        id: 19,
        title: "Manual de Debates da SdDUFC",
        author: "SdDUFC",
        url:new URL("https://drive.google.com/file/d/1l7i3Jttb6oIqeU91rCUOcRX5vxarSTzs/view?usp=sharing"),
        lang: Langs.PT,
        kind: Kinds.Manuals,
    },
    {
        id: 20,
        title: "Whip Speaker",
        author: "Helena Ivanov",
        url:new URL("https://www.youtube.com/watch?v=acXxhooa73c&feature=youtu.be"),
        lang: Langs.EN,
        kind: Kinds.Recorded,
    },
    {
        id: 21,
        title: "Primeiro Ministro e Líder da Oposição",
        author: "Ary Ferreira da Cunha",
        url:new URL("https://www.youtube.com/watch?v=U5u_I0JZTj8"),
        lang: Langs.PT,
        kind: Kinds.Recorded,
    },
    {
        id: 22,
        title: "THBT the world's poor would be justified in pursuing complete Marxist revolution.",
        author: "",
        url:new URL("https://www.youtube.com/watch?v=tngaDNSlCpU"),
        lang: Langs.EN,
        kind: Kinds.Debates,
    },
    {
        id: 23,
        title: "THS Iran's extension of the Sharia principle of 'an eye for an eye' to the victims of acid attacks.",
        author: "",
        url:new URL("https://www.youtube.com/watch?v=RMEEZGoUmvI"),
        lang: Langs.EN,
        kind: Kinds.Debates,
    },
    {
        id: 24,
        title: "THBT governments should abandon the strategy of 'decapitation' in fighting terrorism.",
        author: "",
        url:new URL("https://www.youtube.com/watch?v=3WX-4i9FqvE"),
        lang: Langs.EN,
        kind: Kinds.Debates,
    },
    {
        id: 25,
        title: "Adjuntos",
        author: "Frederico Oliveira",
        url:new URL("https://www.youtube.com/watch?v=PjZVa182LRo"),
        lang: Langs.PT,
        kind: Kinds.Recorded,
    },
    {
        id: 26,
        title: "Extensões",
        author: "Diogo Videira",
        url:new URL("https://www.youtube.com/watch?v=AXON4hgCSkI"),
        lang: Langs.PT,
        kind: Kinds.Recorded,
    },
    {
        id: 27,
        title: "Whips",
        author: "Hermione (Ana Cláudia Freitas)",
        url:new URL("https://www.youtube.com/watch?v=X3GUnYqWAP4"),
        lang: Langs.PT,
        kind: Kinds.Recorded,
    },
    {
        id: 28,
        title: "Ciclo de Formações CNADU - Tesouraria",
        author: "Gonçalo Lúcio",
        url:new URL("https://www.youtube.com/watch?v=QS2GNfhDYAI"),
        lang: Langs.PT,
        kind: Kinds.Recorded,
    },
    {
        id: 29,
        title: "Ciclo de Formações CNADU - Gestão Associativa",
        author: "Ana Lopes",
        url:new URL("https://www.youtube.com/watch?v=PlmgilYsElI"),
        lang: Langs.PT,
        kind: Kinds.Recorded,
    },
    {
        id: 30,
        title: "Ciclo de Formações CNADU - Gestão de Redes Sociais",
        author: "Maria João Alves",
        url:new URL("https://www.youtube.com/watch?v=KczwBPIUe0w"),
        lang: Langs.PT,
        kind: Kinds.Recorded,
    }
]