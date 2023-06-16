import {Kinds, Langs} from "./resource"
////////////////////////////////////////////////////////////////////////////////
// LANGUAGE OF THE RESOURCE
////////////////////////////////////////////////////////////////////////////////

export interface LangsFilter {
    pt: boolean,
    en: boolean,
}

export const langArray = (lang: LangsFilter) => {
    let res: Langs[] = [];

    if (lang.pt) { res.push(Langs.PT); }
    if (lang.en) { res.push(Langs.EN); }

    return res;
}

////////////////////////////////////////////////////////////////////////////////
// KINDS OF RESOURCES
////////////////////////////////////////////////////////////////////////////////

export interface KindsFilter {
    recorded: boolean,
    written: boolean,
    casefiles: boolean,
    articles: boolean,
    websites: boolean,
    videos: boolean,
    debates: boolean,
    manuals: boolean,
}

export const kindArray = (kind: Kinds) => {
    let res: Kinds[] = [];

    if (kind.recorded)  { res.push(Kinds.Recorded);  }
    if (kind.written)   { res.push(Kinds.Written);   }
    if (kind.casefiles) { res.push(Kinds.Casefiles); }
    if (kind.articles)  { res.push(Kinds.Articles);  }
    if (kind.websites)  { res.push(Kinds.Websites);  }
    if (kind.videos)    { res.push(Kinds.Videos);    }
    if (kind.debates)   { res.push(Kinds.Debates);   }
    if (kind.manuals)   { res.push(Kinds.Manuals);   }

    return res;
}

////////////////////////////////////////////////////////////////////////////////
// FILTER
////////////////////////////////////////////////////////////////////////////////

export interface DataFilter {
    title: string,
    lang: LangsFilter,
    kind: KindsFilter
}