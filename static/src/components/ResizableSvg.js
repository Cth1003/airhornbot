const ResizeableSvg = {
  checkMediaQuery() {
    return window.matchMedia('(max-width: 690px)').matches;
  },

  getViewBox(width, height) {
    if (this.checkMediaQuery()) {
      return `0 0 ${width * 2} ${height * 2}`;
    }
    else {
      return `0 0 ${width} ${height}`;
    }
  }
};

export default ResizeableSvg;