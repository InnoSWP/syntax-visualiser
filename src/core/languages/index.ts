import languages from "./all"

export {
  loadLanguageSampleCode,
  loadCodemirrorLanguageSupport,
} from "./loaders"

export type Languages = typeof languages
export type LanguageId = keyof Languages
export type ParserId = keyof Languages[LanguageId]["parsers"]
export type ParserIdOfLanguage<L extends LanguageId> = Extract<
  keyof Languages[L]["parsers"],
  string
>
export type FullParserIdOfLanguage<L extends LanguageId> =
  `${L}>${ParserIdOfLanguage<L>}`
export type FullParserId = FullParserIdOfLanguage<LanguageId>

export default languages
