type Display =
  /* <display-outside> values */
  'block' |
  'inline' |

  /* <display-inside> values */
  'flow' |
  'flow-root' |
  'table' |
  'flex' |
  'grid' |

  /* <display-internal> values */
  'table-row-group' |
  'table-header-group' |
  'table-footer-group' |
  'table-row' |
  'table-cell' |
  'table-column-group' |
  'table-column' |
  'table-caption' |

  /* <display-box> values */
  'contents' |
  'none' |

  /* <display-legacy> values */
  'inline-block' |
  'inline-table' |
  'inline-flex' |
  'inline-grid' |

  /* Global values */
  'inherit' |
  'initial' |
  'unset';

function display({ displayRaw }: { displayRaw?: Display }) {
  return displayRaw && { display: displayRaw };
}

export default display;
export { Display };
