// Breakpoints
export const size = {
  xs: 300,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

// Behavior
// Received by parameter
const STARTPOINT = {
  // max: starts with maximum width
  MAX: 'max',
  // min: starts with minimum width
  MIN: 'min',
};

// Restricting
export const constraints = {
  xs: (props) => {
    switch (props) {
      case STARTPOINT.MAX:
        return `(max-width: ${size.xs}px)`;
      case STARTPOINT.MIN:
        return `(min-width: ${size.xs}px)`;
      default:
        return `(max-width: ${size.xs}px)`; // by default starts with max-width
    }
  },
  sm: (props) => {
    switch (props) {
      case STARTPOINT.MAX:
        return `(max-width: ${size.sm}px)`;
      case STARTPOINT.MIN:
        return `(min-width: ${size.sm}px)`;
      default:
        return `(max-width: ${size.sm}px)`; // by default starts with max-width
    }
  },
  md: (props) => {
    switch (props) {
      case STARTPOINT.MAX:
        return `(max-width: ${size.md}px)`;
      case STARTPOINT.MIN:
        return `(min-width: ${size.md}px)`;
      default:
        return `(max-width: ${size.md}px)`; // by default starts with max-width
    }
  },
  lg: (props) => {
    switch (props) {
      case STARTPOINT.MAX:
        return `(max-width: ${size.lg}px)`;
      case STARTPOINT.MIN:
        return `(min-width: ${size.lg}px)`;
      default:
        return `(max-width: ${size.xl}px)`; // by default starts with max-width
    }
  },
  xl: (props) => {
    switch (props) {
      case STARTPOINT.MAX:
        return `(max-width: ${size.xl}px)`;
      case STARTPOINT.MIN:
        return `(min-width: ${size.xl}px)`;
      default:
        return `(max-width: ${size.xl}px)`; // by default starts with max-width
    }
  },
};
