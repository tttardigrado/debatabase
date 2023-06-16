import { db } from "./resources";
import { Resource } from "../interfaces/resource"
import { DataFilter, langArray, kindArray } from '../interfaces/filter';

// check if a title in a resource matches a string (is includes case incencitive)
const doesTitleMatch = (str: string) => (r: Resource) => r.title.toLowerCase().includes(str.toLowerCase())

export const getResources = (df: DataFilter) =>
    db.filter((r) => langArray(df.lang).indexOf(r.lang) !== -1) // language filter
      .filter((r) => kindArray(df.kind).indexOf(r.kind) !== -1) // kind filter
      .filter(doesTitleMatch(df.title)) // title filter

export const getSaved = (str: string) =>
    db.filter(doesTitleMatch(str))