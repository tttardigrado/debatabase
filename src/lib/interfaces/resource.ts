export enum Langs {
    PT,
    EN
}

export enum Kinds {
    Recorded = "Formações Gravadas",
    Written = "Formações Escritas",
    Casefiles = "Casefiles",
    Articles = "Artigos",
    Videos = "Vídeos",
    Debates = "Debates Gravados",
    Manuals = "Manuais de Debate",
    Websites = "Websites"
}

export interface Resource {
    id: int,
    title: string,
    author: string,
    url: URL,
    lang: Langs,
    kind: Kinds,
}