
/* JaxEdit: online LaTeX editor with live preview
 * Copyright (c) 2011-2013 JaxEdit project
 * License: GNU General Public License, Version 3
 *
 * Website: http://jaxedit.com
 * Source:  https://github.com/zohooo/jaxedit
 * Release: http://code.google.com/p/jaxedit/
 */

(function(){
  var definitions = {
    environment: {
      "proof":                    {mode: "main", args: ["[]", "||"], outs: ["par", "theorem"]}
    },
    command: {
      "address":                  {mode: "inline", args: ["{}"]},
      "curraddr":                 {mode: "inline", args: ["{}"]},
      "dedicatory":               {mode: "inline", args: ["{}"]},
      "email":                    {mode: "inline", args: ["{}"]},
      "keywords":                 {mode: "inline", args: ["{}"]},
      "subjclass":                {mode: "inline", args: ["{}"]},
      "translator":               {mode: "inline", args: ["{}"]}
    }
  };

  var extensions = {
    cmdDedicatory: function(node) {
      this.renderers.find("cmd", "title").call(this, node);
    },

    cmdMaketitle: function(node) {
      if (typeof this.cmdvalues["title"] == "undefined") return;
      var result = "<h1>" + this.cmdvalues["title"] + "</h1>";
      if (typeof this.cmdvalues["author"] != "undefined") {
        result += "<div class='author'>" + this.cmdvalues["author"] + "</div>";
      }
      if (typeof this.cmdvalues["dedicatory"] != "undefined") {
        result += "<div class='dedicatory'>" + this.cmdvalues["dedicatory"] + "</div>";
      }
      node.childs = [];
      node.value = result;
    }
  };

  typejax.parser.extend("amscls/amscls", definitions, extensions);
})();