/**
 * Widening helper for the two English namespaces declared `as const`.
 *
 * `en/home.ts` and `en/contact.ts` end in `as const`, which freezes every
 * string in them to a literal type. A translated string is a `string`, and
 * `string` is never assignable to `"Translation for documents that matter."`,
 * so those two namespaces cannot be annotated with their English type directly.
 *
 * `Translated<T>` keeps the shape exactly — every key, every nested object,
 * every tuple length produced by `as const` — and widens only the leaf string
 * literals back to `string`. A missing key, a misspelled key or an array with
 * the wrong number of entries still fails the build, which is the point.
 *
 * The other six namespaces are not const-asserted, so they are annotated with
 * their English type (`MetaDict`, `ChromeDict`, …) and need no help.
 */
export type Translated<T> = T extends string
  ? string
  : T extends number | boolean | null | undefined
    ? T
    : { -readonly [K in keyof T]: Translated<T[K]> };
