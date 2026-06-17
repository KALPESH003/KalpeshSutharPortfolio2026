export const typeStyles = {
  display: "type-display",
  heading: "type-heading",
  subheading: "type-subheading",
  body: "type-body",
  label: "type-label",
  button: "type-button",
  meta: "type-meta",
  number: "type-number",
} as const;

type TypeStyle = keyof typeof typeStyles;

export function tx(...styles: Array<TypeStyle | false | null | undefined>) {
  return styles.filter(Boolean).map((style) => typeStyles[style as TypeStyle]).join(" ");
}
