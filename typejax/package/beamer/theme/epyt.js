
/* JaxEdit: online LaTeX editor with live preview
 * Copyright (c) 2011-2013 JaxEdit project
 * License: GNU General Public License, Version 3
 *
 * Website: http://jaxedit.com
 * Source:  https://github.com/zohooo/jaxedit
 * Release: http://code.google.com/p/jaxedit/
 */

(function(){
  var definitions = {environment: {}, command: {}};
  var extensions = {};

  var styles = {
    "div.frame, div.maketitle": {
      "color": "white",
      "background-image": "linear-gradient(top, #000 0%, #323232 50%, #646464 100%)",
      "background-image": "-moz-linear-gradient(top, #000 0%, #323232 50%, #646464 100%)",
      "background-image": "-webkit-linear-gradient(top, #000 0%, #323232 50%, #646464 100%)",
      "background-image": "-ms-linear-gradient(top, #000 0%, #323232 50%, #646464 100%)",
      "background-image": "-o-linear-gradient(top, #000 0%, #323232 50%, #646464 100%)",
      "background-color": "#323232"
    },

    "div.frametitle": {
      "color": "#E2D560"
    },

    "div.framesubtitle": {
      "color": "#E2D560"
    },

    "div.center": {
      "border-width": "0"
    },

    "div.verbatim": {
      "border-width": "0"
    },

    "div.definition, div.definitions, div.example, div.examples, div.fact, div.lemma, div.theorem, div.proposition, div.corollary, div.proof, div.exercise, div.remark, div.solution": {
      "border-width": "0"
    },

    "span.thmname": {
      "color": "#D7CB70",
      "padding-right": "0.5em"
    },

    "div.tableofcontents": {
      "border-width": "0"
    },

    "h1": {
      "color": "#F6E72A"
    },

    "ol, ul": {
      "margin-left": "1em"
    }
  };

  typejax.parser.extend("beamer/theme/epyt", definitions, extensions, styles);
})();
