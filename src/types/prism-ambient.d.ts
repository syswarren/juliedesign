// Ambient module declarations for Prism.js dynamic component imports
// These modules do not ship official type definitions per-language.

declare module 'prismjs/components/*' {
  const value: any;
  export default value;
}

declare module 'prismjs' {
  const Prism: any;
  export default Prism;
}


