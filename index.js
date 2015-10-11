'use strict';

/* global Node, document */

/**
 *
 * DOM Clean, leaving only nodes & text nodes.
 *
 * @param {DomElement} node
 * @param {DomElement} parent
 */

function clean(node) {
  if (isElementNode(node)) {
    if (node.childNodes && node.childNodes.length) {
      for (var i = 0; i < node.childNodes.length; i++) {
        if (clean(node.childNodes[i])) {
          i--; // childNodes.length reduced by 1
        }
      }
    }
  } else if (!isNonEmptyTextNode(node)) {
    node.parentNode.removeChild(node);
    return true; // removed
  }
}

function isElementNode(node) {
  return node.nodeType === Node.ELEMENT_NODE;
}

function isNonEmptyTextNode(node) {
  return !!(node.nodeType === Node.TEXT_NODE &&
    node.nodeValue.replace(/^\s+|\s+$/g, ''));
}

function cleanHTML(html) {
  var frag = document.createElement('template');
  frag.innerHTML = html;
  clean(frag.content.firstChild);
  return frag.innerHTML;
}

function cleanClone(node) {
  var frag = document.createDocumentFragment();
  frag.appendChild(node.cloneNode(true));
  clean(frag.firstChild);
  return frag;
}

function cleanEl(val) {
  if (typeof val === 'string') {
    return cleanHTML(val);
  } else {
    return clean(val);
  }
}

module.exports = {
  HTML: cleanHTML,
  html: cleanHTML,
  el: cleanEl,
  clone: cleanClone,
  clean: clean
};
