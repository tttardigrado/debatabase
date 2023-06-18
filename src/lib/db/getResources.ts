import { db } from "./resources";
import { Resource } from "../interfaces/resource"
import { DataFilter, langArray, kindArray } from '../interfaces/filter';

// check if a title or author name in a resource matches a string (is includes case incencitive)
const doesTitleMatch = (str: string) => (r: Resource) =>
  r.title.toLowerCase().includes(str.toLowerCase()) ||
  r.author.toLowerCase().includes(str.toLowerCase())

export const getResources = (df: DataFilter) =>
    db.filter((r) => langArray(df.lang).indexOf(r.lang) !== -1) // language filter
      .filter((r) => kindArray(df.kind).indexOf(r.kind) !== -1) // kind filter
      .filter(doesTitleMatch(df.title)) // title filter

export const getSaved = (saved: number[] ,str: string) =>
    saved.map((i) => db[i])
         .filter(doesTitleMatch(str))