define('0b0187d', function(require, exports, module) {

  /*---------------------------------------------------------------------------------------------
   *  Copyright (c) Microsoft Corporation. All rights reserved.
   *  Licensed under the MIT License. See License.txt in the project root for license information.
   *--------------------------------------------------------------------------------------------*/
  'use strict';
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ParseErrorCollector = exports.Marker = exports.Level = exports.GuardCondition = exports.LessGuard = exports.ListEntry = exports.UnknownAtRule = exports.MixinDeclaration = exports.MixinReference = exports.ExtendsReference = exports.Variable = exports.Interpolation = exports.VariableDeclaration = exports.NumericValue = exports.HexColorValue = exports.Operator = exports.AttributeSelector = exports.Term = exports.BinaryExpression = exports.Expression = exports.PageBoxMarginBox = exports.Page = exports.SupportsCondition = exports.MediaQuery = exports.Medialist = exports.Document = exports.Supports = exports.Media = exports.Namespace = exports.Import = exports.KeyframeSelector = exports.Keyframe = exports.NestedProperties = exports.FontFace = exports.ViewPort = exports.FunctionDeclaration = exports.ElseStatement = exports.WhileStatement = exports.EachStatement = exports.ForStatement = exports.IfStatement = exports.FunctionArgument = exports.FunctionParameter = exports.Function = exports.Invocation = exports.Property = exports.Declaration = exports.CustomPropertySet = exports.CustomPropertyDeclaration = exports.AbstractDeclaration = exports.AtApplyRule = exports.SimpleSelector = exports.Selector = exports.RuleSet = exports.BodyDeclaration = exports.Declarations = exports.Stylesheet = exports.Identifier = exports.Nodelist = exports.Node = exports.getParentDeclaration = exports.getNodePath = exports.getNodeAtOffset = exports.ReferenceType = exports.NodeType = void 0;
  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b)
                  if (b.hasOwnProperty(p))
                      d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  (function (NodeType) {
      NodeType[NodeType["Undefined"] = 0] = "Undefined";
      NodeType[NodeType["Identifier"] = 1] = "Identifier";
      NodeType[NodeType["Stylesheet"] = 2] = "Stylesheet";
      NodeType[NodeType["Ruleset"] = 3] = "Ruleset";
      NodeType[NodeType["Selector"] = 4] = "Selector";
      NodeType[NodeType["SimpleSelector"] = 5] = "SimpleSelector";
      NodeType[NodeType["SelectorInterpolation"] = 6] = "SelectorInterpolation";
      NodeType[NodeType["SelectorCombinator"] = 7] = "SelectorCombinator";
      NodeType[NodeType["SelectorCombinatorParent"] = 8] = "SelectorCombinatorParent";
      NodeType[NodeType["SelectorCombinatorSibling"] = 9] = "SelectorCombinatorSibling";
      NodeType[NodeType["SelectorCombinatorAllSiblings"] = 10] = "SelectorCombinatorAllSiblings";
      NodeType[NodeType["SelectorCombinatorShadowPiercingDescendant"] = 11] = "SelectorCombinatorShadowPiercingDescendant";
      NodeType[NodeType["Page"] = 12] = "Page";
      NodeType[NodeType["PageBoxMarginBox"] = 13] = "PageBoxMarginBox";
      NodeType[NodeType["ClassSelector"] = 14] = "ClassSelector";
      NodeType[NodeType["IdentifierSelector"] = 15] = "IdentifierSelector";
      NodeType[NodeType["ElementNameSelector"] = 16] = "ElementNameSelector";
      NodeType[NodeType["PseudoSelector"] = 17] = "PseudoSelector";
      NodeType[NodeType["AttributeSelector"] = 18] = "AttributeSelector";
      NodeType[NodeType["Declaration"] = 19] = "Declaration";
      NodeType[NodeType["Declarations"] = 20] = "Declarations";
      NodeType[NodeType["Property"] = 21] = "Property";
      NodeType[NodeType["Expression"] = 22] = "Expression";
      NodeType[NodeType["BinaryExpression"] = 23] = "BinaryExpression";
      NodeType[NodeType["Term"] = 24] = "Term";
      NodeType[NodeType["Operator"] = 25] = "Operator";
      NodeType[NodeType["Value"] = 26] = "Value";
      NodeType[NodeType["StringLiteral"] = 27] = "StringLiteral";
      NodeType[NodeType["URILiteral"] = 28] = "URILiteral";
      NodeType[NodeType["EscapedValue"] = 29] = "EscapedValue";
      NodeType[NodeType["Function"] = 30] = "Function";
      NodeType[NodeType["NumericValue"] = 31] = "NumericValue";
      NodeType[NodeType["HexColorValue"] = 32] = "HexColorValue";
      NodeType[NodeType["MixinDeclaration"] = 33] = "MixinDeclaration";
      NodeType[NodeType["MixinReference"] = 34] = "MixinReference";
      NodeType[NodeType["VariableName"] = 35] = "VariableName";
      NodeType[NodeType["VariableDeclaration"] = 36] = "VariableDeclaration";
      NodeType[NodeType["Prio"] = 37] = "Prio";
      NodeType[NodeType["Interpolation"] = 38] = "Interpolation";
      NodeType[NodeType["NestedProperties"] = 39] = "NestedProperties";
      NodeType[NodeType["ExtendsReference"] = 40] = "ExtendsReference";
      NodeType[NodeType["SelectorPlaceholder"] = 41] = "SelectorPlaceholder";
      NodeType[NodeType["Debug"] = 42] = "Debug";
      NodeType[NodeType["If"] = 43] = "If";
      NodeType[NodeType["Else"] = 44] = "Else";
      NodeType[NodeType["For"] = 45] = "For";
      NodeType[NodeType["Each"] = 46] = "Each";
      NodeType[NodeType["While"] = 47] = "While";
      NodeType[NodeType["MixinContent"] = 48] = "MixinContent";
      NodeType[NodeType["Media"] = 49] = "Media";
      NodeType[NodeType["Keyframe"] = 50] = "Keyframe";
      NodeType[NodeType["FontFace"] = 51] = "FontFace";
      NodeType[NodeType["Import"] = 52] = "Import";
      NodeType[NodeType["Namespace"] = 53] = "Namespace";
      NodeType[NodeType["Invocation"] = 54] = "Invocation";
      NodeType[NodeType["FunctionDeclaration"] = 55] = "FunctionDeclaration";
      NodeType[NodeType["ReturnStatement"] = 56] = "ReturnStatement";
      NodeType[NodeType["MediaQuery"] = 57] = "MediaQuery";
      NodeType[NodeType["FunctionParameter"] = 58] = "FunctionParameter";
      NodeType[NodeType["FunctionArgument"] = 59] = "FunctionArgument";
      NodeType[NodeType["KeyframeSelector"] = 60] = "KeyframeSelector";
      NodeType[NodeType["ViewPort"] = 61] = "ViewPort";
      NodeType[NodeType["Document"] = 62] = "Document";
      NodeType[NodeType["AtApplyRule"] = 63] = "AtApplyRule";
      NodeType[NodeType["CustomPropertyDeclaration"] = 64] = "CustomPropertyDeclaration";
      NodeType[NodeType["CustomPropertySet"] = 65] = "CustomPropertySet";
      NodeType[NodeType["ListEntry"] = 66] = "ListEntry";
      NodeType[NodeType["Supports"] = 67] = "Supports";
      NodeType[NodeType["SupportsCondition"] = 68] = "SupportsCondition";
      NodeType[NodeType["NamespacePrefix"] = 69] = "NamespacePrefix";
      NodeType[NodeType["GridLine"] = 70] = "GridLine";
      NodeType[NodeType["Plugin"] = 71] = "Plugin";
      NodeType[NodeType["UnknownAtRule"] = 72] = "UnknownAtRule";
  })(exports.NodeType || (exports.NodeType = {}));
  (function (ReferenceType) {
      ReferenceType[ReferenceType["Mixin"] = 0] = "Mixin";
      ReferenceType[ReferenceType["Rule"] = 1] = "Rule";
      ReferenceType[ReferenceType["Variable"] = 2] = "Variable";
      ReferenceType[ReferenceType["Function"] = 3] = "Function";
      ReferenceType[ReferenceType["Keyframe"] = 4] = "Keyframe";
      ReferenceType[ReferenceType["Unknown"] = 5] = "Unknown";
  })(exports.ReferenceType || (exports.ReferenceType = {}));
  function getNodeAtOffset(node, offset) {
      var candidate = null;
      if (!node || offset < node.offset || offset > node.end) {
          return null;
      }
      // Find the shortest node at the position
      node.accept(function (node) {
          if (node.offset === -1 && node.length === -1) {
              return true;
          }
          if (node.offset <= offset && node.end >= offset) {
              if (!candidate) {
                  candidate = node;
              }
              else if (node.length <= candidate.length) {
                  candidate = node;
              }
              return true;
          }
          return false;
      });
      return candidate;
  }
  exports.getNodeAtOffset = getNodeAtOffset;
  function getNodePath(node, offset) {
      var candidate = getNodeAtOffset(node, offset);
      var path = [];
      while (candidate) {
          path.unshift(candidate);
          candidate = candidate.parent;
      }
      return path;
  }
  exports.getNodePath = getNodePath;
  function getParentDeclaration(node) {
      var decl = node.findParent(exports.NodeType.Declaration);
      if (decl && decl.getValue() && decl.getValue().encloses(node)) {
          return decl;
      }
      return null;
  }
  exports.getParentDeclaration = getParentDeclaration;
  var Node = /** @class */ (function () {
      function Node(offset, len, nodeType) {
          if (offset === void 0) {
              offset = -1;
          }
          if (len === void 0) {
              len = -1;
          }
          this.parent = null;
          this.offset = offset;
          this.length = len;
          if (nodeType) {
              this.nodeType = nodeType;
          }
      }
      Object.defineProperty(Node.prototype, "end", {
          get: function () { return this.offset + this.length; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Node.prototype, "type", {
          get: function () {
              return this.nodeType || exports.NodeType.Undefined;
          },
          set: function (type) {
              this.nodeType = type;
          },
          enumerable: true,
          configurable: true
      });
      Node.prototype.getTextProvider = function () {
          var node = this;
          while (node && !node.textProvider) {
              node = node.parent;
          }
          if (node) {
              return node.textProvider;
          }
          return function () { return 'unknown'; };
      };
      Node.prototype.getText = function () {
          return this.getTextProvider()(this.offset, this.length);
      };
      Node.prototype.matches = function (str) {
          return this.length === str.length && this.getTextProvider()(this.offset, this.length) === str;
      };
      Node.prototype.startsWith = function (str) {
          return this.length >= str.length && this.getTextProvider()(this.offset, str.length) === str;
      };
      Node.prototype.endsWith = function (str) {
          return this.length >= str.length && this.getTextProvider()(this.end - str.length, str.length) === str;
      };
      Node.prototype.accept = function (visitor) {
          if (visitor(this) && this.children) {
              for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                  var child = _a[_i];
                  child.accept(visitor);
              }
          }
      };
      Node.prototype.acceptVisitor = function (visitor) {
          this.accept(visitor.visitNode.bind(visitor));
      };
      Node.prototype.adoptChild = function (node, index) {
          if (index === void 0) {
              index = -1;
          }
          if (node.parent && node.parent.children) {
              var idx = node.parent.children.indexOf(node);
              if (idx >= 0) {
                  node.parent.children.splice(idx, 1);
              }
          }
          node.parent = this;
          var children = this.children;
          if (!children) {
              children = this.children = [];
          }
          if (index !== -1) {
              children.splice(index, 0, node);
          }
          else {
              children.push(node);
          }
          return node;
      };
      Node.prototype.attachTo = function (parent, index) {
          if (index === void 0) {
              index = -1;
          }
          if (parent) {
              parent.adoptChild(this, index);
          }
          return this;
      };
      Node.prototype.collectIssues = function (results) {
          if (this.issues) {
              results.push.apply(results, this.issues);
          }
      };
      Node.prototype.addIssue = function (issue) {
          if (!this.issues) {
              this.issues = [];
          }
          this.issues.push(issue);
      };
      Node.prototype.hasIssue = function (rule) {
          return Array.isArray(this.issues) && this.issues.some(function (i) { return i.getRule() === rule; });
      };
      Node.prototype.isErroneous = function (recursive) {
          if (recursive === void 0) {
              recursive = false;
          }
          if (this.issues && this.issues.length > 0) {
              return true;
          }
          return recursive && Array.isArray(this.children) && this.children.some(function (c) { return c.isErroneous(true); });
      };
      Node.prototype.setNode = function (field, node, index) {
          if (index === void 0) {
              index = -1;
          }
          if (node) {
              node.attachTo(this, index);
              this[field] = node;
              return true;
          }
          return false;
      };
      Node.prototype.addChild = function (node) {
          if (node) {
              if (!this.children) {
                  this.children = [];
              }
              node.attachTo(this);
              this.updateOffsetAndLength(node);
              return true;
          }
          return false;
      };
      Node.prototype.updateOffsetAndLength = function (node) {
          if (node.offset < this.offset || this.offset === -1) {
              this.offset = node.offset;
          }
          var nodeEnd = node.end;
          if ((nodeEnd > this.end) || this.length === -1) {
              this.length = nodeEnd - this.offset;
          }
      };
      Node.prototype.hasChildren = function () {
          return this.children && this.children.length > 0;
      };
      Node.prototype.getChildren = function () {
          return this.children ? this.children.slice(0) : [];
      };
      Node.prototype.getChild = function (index) {
          if (this.children && index < this.children.length) {
              return this.children[index];
          }
          return null;
      };
      Node.prototype.addChildren = function (nodes) {
          for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
              var node = nodes_1[_i];
              this.addChild(node);
          }
      };
      Node.prototype.findFirstChildBeforeOffset = function (offset) {
          if (this.children) {
              var current = null;
              for (var i = this.children.length - 1; i >= 0; i--) {
                  // iterate until we find a child that has a start offset smaller than the input offset
                  current = this.children[i];
                  if (current.offset <= offset) {
                      return current;
                  }
              }
          }
          return null;
      };
      Node.prototype.findChildAtOffset = function (offset, goDeep) {
          var current = this.findFirstChildBeforeOffset(offset);
          if (current && current.end >= offset) {
              if (goDeep) {
                  return current.findChildAtOffset(offset, true) || current;
              }
              return current;
          }
          return null;
      };
      Node.prototype.encloses = function (candidate) {
          return this.offset <= candidate.offset && this.offset + this.length >= candidate.offset + candidate.length;
      };
      Node.prototype.getParent = function () {
          var result = this.parent;
          while (result instanceof Nodelist) {
              result = result.parent;
          }
          return result;
      };
      Node.prototype.findParent = function (type) {
          var result = this;
          while (result && result.type !== type) {
              result = result.parent;
          }
          return result;
      };
      Node.prototype.findAParent = function () {
          var types = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              types[_i] = arguments[_i];
          }
          var result = this;
          while (result && !types.some(function (t) { return result.type === t; })) {
              result = result.parent;
          }
          return result;
      };
      Node.prototype.setData = function (key, value) {
          if (!this.options) {
              this.options = {};
          }
          this.options[key] = value;
      };
      Node.prototype.getData = function (key) {
          if (!this.options || !this.options.hasOwnProperty(key)) {
              return null;
          }
          return this.options[key];
      };
      return Node;
  }());
  exports.Node = Node;
  var Nodelist = /** @class */ (function (_super) {
      __extends(Nodelist, _super);
      function Nodelist(parent, index) {
          if (index === void 0) {
              index = -1;
          }
          var _this = _super.call(this, -1, -1) || this;
          _this.attachTo(parent, index);
          _this.offset = -1;
          _this.length = -1;
          return _this;
      }
      return Nodelist;
  }(Node));
  exports.Nodelist = Nodelist;
  var Identifier = /** @class */ (function (_super) {
      __extends(Identifier, _super);
      function Identifier(offset, length) {
          var _this = _super.call(this, offset, length) || this;
          _this.isCustomProperty = false;
          return _this;
      }
      Object.defineProperty(Identifier.prototype, "type", {
          get: function () {
              return exports.NodeType.Identifier;
          },
          enumerable: true,
          configurable: true
      });
      Identifier.prototype.containsInterpolation = function () {
          return this.hasChildren();
      };
      return Identifier;
  }(Node));
  exports.Identifier = Identifier;
  var Stylesheet = /** @class */ (function (_super) {
      __extends(Stylesheet, _super);
      function Stylesheet(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(Stylesheet.prototype, "type", {
          get: function () {
              return exports.NodeType.Stylesheet;
          },
          enumerable: true,
          configurable: true
      });
      Stylesheet.prototype.setName = function (value) {
          this.name = value;
      };
      return Stylesheet;
  }(Node));
  exports.Stylesheet = Stylesheet;
  var Declarations = /** @class */ (function (_super) {
      __extends(Declarations, _super);
      function Declarations(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(Declarations.prototype, "type", {
          get: function () {
              return exports.NodeType.Declarations;
          },
          enumerable: true,
          configurable: true
      });
      return Declarations;
  }(Node));
  exports.Declarations = Declarations;
  var BodyDeclaration = /** @class */ (function (_super) {
      __extends(BodyDeclaration, _super);
      function BodyDeclaration(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      BodyDeclaration.prototype.getDeclarations = function () {
          return this.declarations;
      };
      BodyDeclaration.prototype.setDeclarations = function (decls) {
          return this.setNode('declarations', decls);
      };
      return BodyDeclaration;
  }(Node));
  exports.BodyDeclaration = BodyDeclaration;
  var RuleSet = /** @class */ (function (_super) {
      __extends(RuleSet, _super);
      function RuleSet(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(RuleSet.prototype, "type", {
          get: function () {
              return exports.NodeType.Ruleset;
          },
          enumerable: true,
          configurable: true
      });
      RuleSet.prototype.getSelectors = function () {
          if (!this.selectors) {
              this.selectors = new Nodelist(this);
          }
          return this.selectors;
      };
      RuleSet.prototype.isNested = function () {
          return !!this.parent && this.parent.findParent(exports.NodeType.Declarations) !== null;
      };
      return RuleSet;
  }(BodyDeclaration));
  exports.RuleSet = RuleSet;
  var Selector = /** @class */ (function (_super) {
      __extends(Selector, _super);
      function Selector(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(Selector.prototype, "type", {
          get: function () {
              return exports.NodeType.Selector;
          },
          enumerable: true,
          configurable: true
      });
      return Selector;
  }(Node));
  exports.Selector = Selector;
  var SimpleSelector = /** @class */ (function (_super) {
      __extends(SimpleSelector, _super);
      function SimpleSelector(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(SimpleSelector.prototype, "type", {
          get: function () {
              return exports.NodeType.SimpleSelector;
          },
          enumerable: true,
          configurable: true
      });
      return SimpleSelector;
  }(Node));
  exports.SimpleSelector = SimpleSelector;
  var AtApplyRule = /** @class */ (function (_super) {
      __extends(AtApplyRule, _super);
      function AtApplyRule(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(AtApplyRule.prototype, "type", {
          get: function () {
              return exports.NodeType.AtApplyRule;
          },
          enumerable: true,
          configurable: true
      });
      AtApplyRule.prototype.setIdentifier = function (node) {
          return this.setNode('identifier', node, 0);
      };
      AtApplyRule.prototype.getIdentifier = function () {
          return this.identifier;
      };
      AtApplyRule.prototype.getName = function () {
          return this.identifier ? this.identifier.getText() : '';
      };
      return AtApplyRule;
  }(Node));
  exports.AtApplyRule = AtApplyRule;
  var AbstractDeclaration = /** @class */ (function (_super) {
      __extends(AbstractDeclaration, _super);
      function AbstractDeclaration(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      return AbstractDeclaration;
  }(Node));
  exports.AbstractDeclaration = AbstractDeclaration;
  var CustomPropertyDeclaration = /** @class */ (function (_super) {
      __extends(CustomPropertyDeclaration, _super);
      function CustomPropertyDeclaration(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(CustomPropertyDeclaration.prototype, "type", {
          get: function () {
              return exports.NodeType.CustomPropertyDeclaration;
          },
          enumerable: true,
          configurable: true
      });
      CustomPropertyDeclaration.prototype.setProperty = function (node) {
          return this.setNode('property', node);
      };
      CustomPropertyDeclaration.prototype.getProperty = function () {
          return this.property;
      };
      CustomPropertyDeclaration.prototype.setValue = function (value) {
          return this.setNode('value', value);
      };
      CustomPropertyDeclaration.prototype.getValue = function () {
          return this.value;
      };
      CustomPropertyDeclaration.prototype.setPropertySet = function (value) {
          return this.setNode('propertySet', value);
      };
      CustomPropertyDeclaration.prototype.getPropertySet = function () {
          return this.propertySet;
      };
      return CustomPropertyDeclaration;
  }(AbstractDeclaration));
  exports.CustomPropertyDeclaration = CustomPropertyDeclaration;
  var CustomPropertySet = /** @class */ (function (_super) {
      __extends(CustomPropertySet, _super);
      function CustomPropertySet(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(CustomPropertySet.prototype, "type", {
          get: function () {
              return exports.NodeType.CustomPropertySet;
          },
          enumerable: true,
          configurable: true
      });
      return CustomPropertySet;
  }(BodyDeclaration));
  exports.CustomPropertySet = CustomPropertySet;
  var Declaration = /** @class */ (function (_super) {
      __extends(Declaration, _super);
      function Declaration(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(Declaration.prototype, "type", {
          get: function () {
              return exports.NodeType.Declaration;
          },
          enumerable: true,
          configurable: true
      });
      Declaration.prototype.setProperty = function (node) {
          return this.setNode('property', node);
      };
      Declaration.prototype.getProperty = function () {
          return this.property;
      };
      Declaration.prototype.getFullPropertyName = function () {
          var propertyName = this.property ? this.property.getName() : 'unknown';
          if (this.parent instanceof Declarations && this.parent.getParent() instanceof NestedProperties) {
              var parentDecl = this.parent.getParent().getParent();
              if (parentDecl instanceof Declaration) {
                  return parentDecl.getFullPropertyName() + propertyName;
              }
          }
          return propertyName;
      };
      Declaration.prototype.getNonPrefixedPropertyName = function () {
          var propertyName = this.getFullPropertyName();
          if (propertyName && propertyName.charAt(0) === '-') {
              var vendorPrefixEnd = propertyName.indexOf('-', 1);
              if (vendorPrefixEnd !== -1) {
                  return propertyName.substring(vendorPrefixEnd + 1);
              }
          }
          return propertyName;
      };
      Declaration.prototype.setValue = function (value) {
          return this.setNode('value', value);
      };
      Declaration.prototype.getValue = function () {
          return this.value;
      };
      Declaration.prototype.setNestedProperties = function (value) {
          return this.setNode('nestedProperties', value);
      };
      Declaration.prototype.getNestedProperties = function () {
          return this.nestedProperties;
      };
      return Declaration;
  }(AbstractDeclaration));
  exports.Declaration = Declaration;
  var Property = /** @class */ (function (_super) {
      __extends(Property, _super);
      function Property(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(Property.prototype, "type", {
          get: function () {
              return exports.NodeType.Property;
          },
          enumerable: true,
          configurable: true
      });
      Property.prototype.setIdentifier = function (value) {
          return this.setNode('identifier', value);
      };
      Property.prototype.getIdentifier = function () {
          return this.identifier;
      };
      Property.prototype.getName = function () {
          return this.getText();
      };
      Property.prototype.isCustomProperty = function () {
          return this.identifier.isCustomProperty;
      };
      return Property;
  }(Node));
  exports.Property = Property;
  var Invocation = /** @class */ (function (_super) {
      __extends(Invocation, _super);
      function Invocation(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(Invocation.prototype, "type", {
          get: function () {
              return exports.NodeType.Invocation;
          },
          enumerable: true,
          configurable: true
      });
      Invocation.prototype.getArguments = function () {
          if (!this.arguments) {
              this.arguments = new Nodelist(this);
          }
          return this.arguments;
      };
      return Invocation;
  }(Node));
  exports.Invocation = Invocation;
  var Function = /** @class */ (function (_super) {
      __extends(Function, _super);
      function Function(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(Function.prototype, "type", {
          get: function () {
              return exports.NodeType.Function;
          },
          enumerable: true,
          configurable: true
      });
      Function.prototype.setIdentifier = function (node) {
          return this.setNode('identifier', node, 0);
      };
      Function.prototype.getIdentifier = function () {
          return this.identifier;
      };
      Function.prototype.getName = function () {
          return this.identifier ? this.identifier.getText() : '';
      };
      return Function;
  }(Invocation));
  exports.Function = Function;
  var FunctionParameter = /** @class */ (function (_super) {
      __extends(FunctionParameter, _super);
      function FunctionParameter(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(FunctionParameter.prototype, "type", {
          get: function () {
              return exports.NodeType.FunctionParameter;
          },
          enumerable: true,
          configurable: true
      });
      FunctionParameter.prototype.setIdentifier = function (node) {
          return this.setNode('identifier', node, 0);
      };
      FunctionParameter.prototype.getIdentifier = function () {
          return this.identifier;
      };
      FunctionParameter.prototype.getName = function () {
          return this.identifier ? this.identifier.getText() : '';
      };
      FunctionParameter.prototype.setDefaultValue = function (node) {
          return this.setNode('defaultValue', node, 0);
      };
      FunctionParameter.prototype.getDefaultValue = function () {
          return this.defaultValue;
      };
      return FunctionParameter;
  }(Node));
  exports.FunctionParameter = FunctionParameter;
  var FunctionArgument = /** @class */ (function (_super) {
      __extends(FunctionArgument, _super);
      function FunctionArgument(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(FunctionArgument.prototype, "type", {
          get: function () {
              return exports.NodeType.FunctionArgument;
          },
          enumerable: true,
          configurable: true
      });
      FunctionArgument.prototype.setIdentifier = function (node) {
          return this.setNode('identifier', node, 0);
      };
      FunctionArgument.prototype.getIdentifier = function () {
          return this.identifier;
      };
      FunctionArgument.prototype.getName = function () {
          return this.identifier ? this.identifier.getText() : '';
      };
      FunctionArgument.prototype.setValue = function (node) {
          return this.setNode('value', node, 0);
      };
      FunctionArgument.prototype.getValue = function () {
          return this.value;
      };
      return FunctionArgument;
  }(Node));
  exports.FunctionArgument = FunctionArgument;
  var IfStatement = /** @class */ (function (_super) {
      __extends(IfStatement, _super);
      function IfStatement(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(IfStatement.prototype, "type", {
          get: function () {
              return exports.NodeType.If;
          },
          enumerable: true,
          configurable: true
      });
      IfStatement.prototype.setExpression = function (node) {
          return this.setNode('expression', node, 0);
      };
      IfStatement.prototype.setElseClause = function (elseClause) {
          return this.setNode('elseClause', elseClause);
      };
      return IfStatement;
  }(BodyDeclaration));
  exports.IfStatement = IfStatement;
  var ForStatement = /** @class */ (function (_super) {
      __extends(ForStatement, _super);
      function ForStatement(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(ForStatement.prototype, "type", {
          get: function () {
              return exports.NodeType.For;
          },
          enumerable: true,
          configurable: true
      });
      ForStatement.prototype.setVariable = function (node) {
          return this.setNode('variable', node, 0);
      };
      return ForStatement;
  }(BodyDeclaration));
  exports.ForStatement = ForStatement;
  var EachStatement = /** @class */ (function (_super) {
      __extends(EachStatement, _super);
      function EachStatement(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(EachStatement.prototype, "type", {
          get: function () {
              return exports.NodeType.Each;
          },
          enumerable: true,
          configurable: true
      });
      EachStatement.prototype.getVariables = function () {
          if (!this.variables) {
              this.variables = new Nodelist(this);
          }
          return this.variables;
      };
      return EachStatement;
  }(BodyDeclaration));
  exports.EachStatement = EachStatement;
  var WhileStatement = /** @class */ (function (_super) {
      __extends(WhileStatement, _super);
      function WhileStatement(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(WhileStatement.prototype, "type", {
          get: function () {
              return exports.NodeType.While;
          },
          enumerable: true,
          configurable: true
      });
      return WhileStatement;
  }(BodyDeclaration));
  exports.WhileStatement = WhileStatement;
  var ElseStatement = /** @class */ (function (_super) {
      __extends(ElseStatement, _super);
      function ElseStatement(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(ElseStatement.prototype, "type", {
          get: function () {
              return exports.NodeType.Else;
          },
          enumerable: true,
          configurable: true
      });
      return ElseStatement;
  }(BodyDeclaration));
  exports.ElseStatement = ElseStatement;
  var FunctionDeclaration = /** @class */ (function (_super) {
      __extends(FunctionDeclaration, _super);
      function FunctionDeclaration(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(FunctionDeclaration.prototype, "type", {
          get: function () {
              return exports.NodeType.FunctionDeclaration;
          },
          enumerable: true,
          configurable: true
      });
      FunctionDeclaration.prototype.setIdentifier = function (node) {
          return this.setNode('identifier', node, 0);
      };
      FunctionDeclaration.prototype.getIdentifier = function () {
          return this.identifier;
      };
      FunctionDeclaration.prototype.getName = function () {
          return this.identifier ? this.identifier.getText() : '';
      };
      FunctionDeclaration.prototype.getParameters = function () {
          if (!this.parameters) {
              this.parameters = new Nodelist(this);
          }
          return this.parameters;
      };
      return FunctionDeclaration;
  }(BodyDeclaration));
  exports.FunctionDeclaration = FunctionDeclaration;
  var ViewPort = /** @class */ (function (_super) {
      __extends(ViewPort, _super);
      function ViewPort(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(ViewPort.prototype, "type", {
          get: function () {
              return exports.NodeType.ViewPort;
          },
          enumerable: true,
          configurable: true
      });
      return ViewPort;
  }(BodyDeclaration));
  exports.ViewPort = ViewPort;
  var FontFace = /** @class */ (function (_super) {
      __extends(FontFace, _super);
      function FontFace(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(FontFace.prototype, "type", {
          get: function () {
              return exports.NodeType.FontFace;
          },
          enumerable: true,
          configurable: true
      });
      return FontFace;
  }(BodyDeclaration));
  exports.FontFace = FontFace;
  var NestedProperties = /** @class */ (function (_super) {
      __extends(NestedProperties, _super);
      function NestedProperties(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(NestedProperties.prototype, "type", {
          get: function () {
              return exports.NodeType.NestedProperties;
          },
          enumerable: true,
          configurable: true
      });
      return NestedProperties;
  }(BodyDeclaration));
  exports.NestedProperties = NestedProperties;
  var Keyframe = /** @class */ (function (_super) {
      __extends(Keyframe, _super);
      function Keyframe(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(Keyframe.prototype, "type", {
          get: function () {
              return exports.NodeType.Keyframe;
          },
          enumerable: true,
          configurable: true
      });
      Keyframe.prototype.setKeyword = function (keyword) {
          return this.setNode('keyword', keyword, 0);
      };
      Keyframe.prototype.getKeyword = function () {
          return this.keyword;
      };
      Keyframe.prototype.setIdentifier = function (node) {
          return this.setNode('identifier', node, 0);
      };
      Keyframe.prototype.getIdentifier = function () {
          return this.identifier;
      };
      Keyframe.prototype.getName = function () {
          return this.identifier ? this.identifier.getText() : '';
      };
      return Keyframe;
  }(BodyDeclaration));
  exports.Keyframe = Keyframe;
  var KeyframeSelector = /** @class */ (function (_super) {
      __extends(KeyframeSelector, _super);
      function KeyframeSelector(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(KeyframeSelector.prototype, "type", {
          get: function () {
              return exports.NodeType.KeyframeSelector;
          },
          enumerable: true,
          configurable: true
      });
      return KeyframeSelector;
  }(BodyDeclaration));
  exports.KeyframeSelector = KeyframeSelector;
  var Import = /** @class */ (function (_super) {
      __extends(Import, _super);
      function Import(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(Import.prototype, "type", {
          get: function () {
              return exports.NodeType.Import;
          },
          enumerable: true,
          configurable: true
      });
      Import.prototype.setMedialist = function (node) {
          if (node) {
              node.attachTo(this);
              this.medialist = node;
              return true;
          }
          return false;
      };
      return Import;
  }(Node));
  exports.Import = Import;
  var Namespace = /** @class */ (function (_super) {
      __extends(Namespace, _super);
      function Namespace(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(Namespace.prototype, "type", {
          get: function () {
              return exports.NodeType.Namespace;
          },
          enumerable: true,
          configurable: true
      });
      return Namespace;
  }(Node));
  exports.Namespace = Namespace;
  var Media = /** @class */ (function (_super) {
      __extends(Media, _super);
      function Media(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(Media.prototype, "type", {
          get: function () {
              return exports.NodeType.Media;
          },
          enumerable: true,
          configurable: true
      });
      return Media;
  }(BodyDeclaration));
  exports.Media = Media;
  var Supports = /** @class */ (function (_super) {
      __extends(Supports, _super);
      function Supports(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(Supports.prototype, "type", {
          get: function () {
              return exports.NodeType.Supports;
          },
          enumerable: true,
          configurable: true
      });
      return Supports;
  }(BodyDeclaration));
  exports.Supports = Supports;
  var Document = /** @class */ (function (_super) {
      __extends(Document, _super);
      function Document(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(Document.prototype, "type", {
          get: function () {
              return exports.NodeType.Document;
          },
          enumerable: true,
          configurable: true
      });
      return Document;
  }(BodyDeclaration));
  exports.Document = Document;
  var Medialist = /** @class */ (function (_super) {
      __extends(Medialist, _super);
      function Medialist(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Medialist.prototype.getMediums = function () {
          if (!this.mediums) {
              this.mediums = new Nodelist(this);
          }
          return this.mediums;
      };
      return Medialist;
  }(Node));
  exports.Medialist = Medialist;
  var MediaQuery = /** @class */ (function (_super) {
      __extends(MediaQuery, _super);
      function MediaQuery(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(MediaQuery.prototype, "type", {
          get: function () {
              return exports.NodeType.MediaQuery;
          },
          enumerable: true,
          configurable: true
      });
      return MediaQuery;
  }(Node));
  exports.MediaQuery = MediaQuery;
  var SupportsCondition = /** @class */ (function (_super) {
      __extends(SupportsCondition, _super);
      function SupportsCondition(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(SupportsCondition.prototype, "type", {
          get: function () {
              return exports.NodeType.SupportsCondition;
          },
          enumerable: true,
          configurable: true
      });
      return SupportsCondition;
  }(Node));
  exports.SupportsCondition = SupportsCondition;
  var Page = /** @class */ (function (_super) {
      __extends(Page, _super);
      function Page(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(Page.prototype, "type", {
          get: function () {
              return exports.NodeType.Page;
          },
          enumerable: true,
          configurable: true
      });
      return Page;
  }(BodyDeclaration));
  exports.Page = Page;
  var PageBoxMarginBox = /** @class */ (function (_super) {
      __extends(PageBoxMarginBox, _super);
      function PageBoxMarginBox(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(PageBoxMarginBox.prototype, "type", {
          get: function () {
              return exports.NodeType.PageBoxMarginBox;
          },
          enumerable: true,
          configurable: true
      });
      return PageBoxMarginBox;
  }(BodyDeclaration));
  exports.PageBoxMarginBox = PageBoxMarginBox;
  var Expression = /** @class */ (function (_super) {
      __extends(Expression, _super);
      function Expression(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(Expression.prototype, "type", {
          get: function () {
              return exports.NodeType.Expression;
          },
          enumerable: true,
          configurable: true
      });
      return Expression;
  }(Node));
  exports.Expression = Expression;
  var BinaryExpression = /** @class */ (function (_super) {
      __extends(BinaryExpression, _super);
      function BinaryExpression(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(BinaryExpression.prototype, "type", {
          get: function () {
              return exports.NodeType.BinaryExpression;
          },
          enumerable: true,
          configurable: true
      });
      BinaryExpression.prototype.setLeft = function (left) {
          return this.setNode('left', left);
      };
      BinaryExpression.prototype.getLeft = function () {
          return this.left;
      };
      BinaryExpression.prototype.setRight = function (right) {
          return this.setNode('right', right);
      };
      BinaryExpression.prototype.getRight = function () {
          return this.right;
      };
      BinaryExpression.prototype.setOperator = function (value) {
          return this.setNode('operator', value);
      };
      BinaryExpression.prototype.getOperator = function () {
          return this.operator;
      };
      return BinaryExpression;
  }(Node));
  exports.BinaryExpression = BinaryExpression;
  var Term = /** @class */ (function (_super) {
      __extends(Term, _super);
      function Term(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(Term.prototype, "type", {
          get: function () {
              return exports.NodeType.Term;
          },
          enumerable: true,
          configurable: true
      });
      Term.prototype.setOperator = function (value) {
          return this.setNode('operator', value);
      };
      Term.prototype.getOperator = function () {
          return this.operator;
      };
      Term.prototype.setExpression = function (value) {
          return this.setNode('expression', value);
      };
      Term.prototype.getExpression = function () {
          return this.expression;
      };
      return Term;
  }(Node));
  exports.Term = Term;
  var AttributeSelector = /** @class */ (function (_super) {
      __extends(AttributeSelector, _super);
      function AttributeSelector(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(AttributeSelector.prototype, "type", {
          get: function () {
              return exports.NodeType.AttributeSelector;
          },
          enumerable: true,
          configurable: true
      });
      AttributeSelector.prototype.setNamespacePrefix = function (value) {
          return this.setNode('namespacePrefix', value);
      };
      AttributeSelector.prototype.getNamespacePrefix = function () {
          return this.namespacePrefix;
      };
      AttributeSelector.prototype.setIdentifier = function (value) {
          return this.setNode('identifier', value);
      };
      AttributeSelector.prototype.getIdentifier = function () {
          return this.identifier;
      };
      AttributeSelector.prototype.setOperator = function (operator) {
          return this.setNode('operator', operator);
      };
      AttributeSelector.prototype.getOperator = function () {
          return this.operator;
      };
      AttributeSelector.prototype.setValue = function (value) {
          return this.setNode('value', value);
      };
      AttributeSelector.prototype.getValue = function () {
          return this.value;
      };
      return AttributeSelector;
  }(Node));
  exports.AttributeSelector = AttributeSelector;
  var Operator = /** @class */ (function (_super) {
      __extends(Operator, _super);
      function Operator(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(Operator.prototype, "type", {
          get: function () {
              return exports.NodeType.Operator;
          },
          enumerable: true,
          configurable: true
      });
      return Operator;
  }(Node));
  exports.Operator = Operator;
  var HexColorValue = /** @class */ (function (_super) {
      __extends(HexColorValue, _super);
      function HexColorValue(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(HexColorValue.prototype, "type", {
          get: function () {
              return exports.NodeType.HexColorValue;
          },
          enumerable: true,
          configurable: true
      });
      return HexColorValue;
  }(Node));
  exports.HexColorValue = HexColorValue;
  var _dot = '.'.charCodeAt(0), _0 = '0'.charCodeAt(0), _9 = '9'.charCodeAt(0);
  var NumericValue = /** @class */ (function (_super) {
      __extends(NumericValue, _super);
      function NumericValue(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(NumericValue.prototype, "type", {
          get: function () {
              return exports.NodeType.NumericValue;
          },
          enumerable: true,
          configurable: true
      });
      NumericValue.prototype.getValue = function () {
          var raw = this.getText();
          var unitIdx = 0;
          var code;
          for (var i = 0, len = raw.length; i < len; i++) {
              code = raw.charCodeAt(i);
              if (!(_0 <= code && code <= _9 || code === _dot)) {
                  break;
              }
              unitIdx += 1;
          }
          return {
              value: raw.substring(0, unitIdx),
              unit: unitIdx < raw.length ? raw.substring(unitIdx) : undefined
          };
      };
      return NumericValue;
  }(Node));
  exports.NumericValue = NumericValue;
  var VariableDeclaration = /** @class */ (function (_super) {
      __extends(VariableDeclaration, _super);
      function VariableDeclaration(offset, length) {
          var _this = _super.call(this, offset, length) || this;
          _this.needsSemicolon = true;
          return _this;
      }
      Object.defineProperty(VariableDeclaration.prototype, "type", {
          get: function () {
              return exports.NodeType.VariableDeclaration;
          },
          enumerable: true,
          configurable: true
      });
      VariableDeclaration.prototype.setVariable = function (node) {
          if (node) {
              node.attachTo(this);
              this.variable = node;
              return true;
          }
          return false;
      };
      VariableDeclaration.prototype.getVariable = function () {
          return this.variable;
      };
      VariableDeclaration.prototype.getName = function () {
          return this.variable ? this.variable.getName() : '';
      };
      VariableDeclaration.prototype.setValue = function (node) {
          if (node) {
              node.attachTo(this);
              this.value = node;
              return true;
          }
          return false;
      };
      VariableDeclaration.prototype.getValue = function () {
          return this.value;
      };
      return VariableDeclaration;
  }(AbstractDeclaration));
  exports.VariableDeclaration = VariableDeclaration;
  var Interpolation = /** @class */ (function (_super) {
      __extends(Interpolation, _super);
      function Interpolation(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(Interpolation.prototype, "type", {
          get: function () {
              return exports.NodeType.Interpolation;
          },
          enumerable: true,
          configurable: true
      });
      return Interpolation;
  }(Node));
  exports.Interpolation = Interpolation;
  var Variable = /** @class */ (function (_super) {
      __extends(Variable, _super);
      function Variable(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(Variable.prototype, "type", {
          get: function () {
              return exports.NodeType.VariableName;
          },
          enumerable: true,
          configurable: true
      });
      Variable.prototype.getName = function () {
          return this.getText();
      };
      return Variable;
  }(Node));
  exports.Variable = Variable;
  var ExtendsReference = /** @class */ (function (_super) {
      __extends(ExtendsReference, _super);
      function ExtendsReference(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(ExtendsReference.prototype, "type", {
          get: function () {
              return exports.NodeType.ExtendsReference;
          },
          enumerable: true,
          configurable: true
      });
      ExtendsReference.prototype.getSelectors = function () {
          if (!this.selectors) {
              this.selectors = new Nodelist(this);
          }
          return this.selectors;
      };
      return ExtendsReference;
  }(Node));
  exports.ExtendsReference = ExtendsReference;
  var MixinReference = /** @class */ (function (_super) {
      __extends(MixinReference, _super);
      function MixinReference(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(MixinReference.prototype, "type", {
          get: function () {
              return exports.NodeType.MixinReference;
          },
          enumerable: true,
          configurable: true
      });
      MixinReference.prototype.getNamespaces = function () {
          if (!this.namespaces) {
              this.namespaces = new Nodelist(this);
          }
          return this.namespaces;
      };
      MixinReference.prototype.setIdentifier = function (node) {
          return this.setNode('identifier', node, 0);
      };
      MixinReference.prototype.getIdentifier = function () {
          return this.identifier;
      };
      MixinReference.prototype.getName = function () {
          return this.identifier ? this.identifier.getText() : '';
      };
      MixinReference.prototype.getArguments = function () {
          if (!this.arguments) {
              this.arguments = new Nodelist(this);
          }
          return this.arguments;
      };
      MixinReference.prototype.setContent = function (node) {
          return this.setNode('content', node);
      };
      MixinReference.prototype.getContent = function () {
          return this.content;
      };
      return MixinReference;
  }(Node));
  exports.MixinReference = MixinReference;
  var MixinDeclaration = /** @class */ (function (_super) {
      __extends(MixinDeclaration, _super);
      function MixinDeclaration(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(MixinDeclaration.prototype, "type", {
          get: function () {
              return exports.NodeType.MixinDeclaration;
          },
          enumerable: true,
          configurable: true
      });
      MixinDeclaration.prototype.setIdentifier = function (node) {
          return this.setNode('identifier', node, 0);
      };
      MixinDeclaration.prototype.getIdentifier = function () {
          return this.identifier;
      };
      MixinDeclaration.prototype.getName = function () {
          return this.identifier ? this.identifier.getText() : '';
      };
      MixinDeclaration.prototype.getParameters = function () {
          if (!this.parameters) {
              this.parameters = new Nodelist(this);
          }
          return this.parameters;
      };
      MixinDeclaration.prototype.setGuard = function (node) {
          if (node) {
              node.attachTo(this);
              this.guard = node;
          }
          return false;
      };
      return MixinDeclaration;
  }(BodyDeclaration));
  exports.MixinDeclaration = MixinDeclaration;
  var UnknownAtRule = /** @class */ (function (_super) {
      __extends(UnknownAtRule, _super);
      function UnknownAtRule(offset, length) {
          return _super.call(this, offset, length) || this;
      }
      Object.defineProperty(UnknownAtRule.prototype, "type", {
          get: function () {
              return exports.NodeType.UnknownAtRule;
          },
          enumerable: true,
          configurable: true
      });
      UnknownAtRule.prototype.setAtRuleName = function (atRuleName) {
          this.atRuleName = atRuleName;
      };
      UnknownAtRule.prototype.getAtRuleName = function (atRuleName) {
          return this.atRuleName;
      };
      return UnknownAtRule;
  }(BodyDeclaration));
  exports.UnknownAtRule = UnknownAtRule;
  var ListEntry = /** @class */ (function (_super) {
      __extends(ListEntry, _super);
      function ListEntry() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(ListEntry.prototype, "type", {
          get: function () {
              return exports.NodeType.ListEntry;
          },
          enumerable: true,
          configurable: true
      });
      ListEntry.prototype.setKey = function (node) {
          return this.setNode('key', node, 0);
      };
      ListEntry.prototype.setValue = function (node) {
          return this.setNode('value', node, 1);
      };
      return ListEntry;
  }(Node));
  exports.ListEntry = ListEntry;
  var LessGuard = /** @class */ (function (_super) {
      __extends(LessGuard, _super);
      function LessGuard() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      LessGuard.prototype.getConditions = function () {
          if (!this.conditions) {
              this.conditions = new Nodelist(this);
          }
          return this.conditions;
      };
      return LessGuard;
  }(Node));
  exports.LessGuard = LessGuard;
  var GuardCondition = /** @class */ (function (_super) {
      __extends(GuardCondition, _super);
      function GuardCondition() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      GuardCondition.prototype.setVariable = function (node) {
          return this.setNode('variable', node);
      };
      return GuardCondition;
  }(Node));
  exports.GuardCondition = GuardCondition;
  (function (Level) {
      Level[Level["Ignore"] = 1] = "Ignore";
      Level[Level["Warning"] = 2] = "Warning";
      Level[Level["Error"] = 4] = "Error";
  })(exports.Level || (exports.Level = {}));
  var Marker = /** @class */ (function () {
      function Marker(node, rule, level, message, offset, length) {
          if (offset === void 0) {
              offset = node.offset;
          }
          if (length === void 0) {
              length = node.length;
          }
          this.node = node;
          this.rule = rule;
          this.level = level;
          this.message = message || rule.message;
          this.offset = offset;
          this.length = length;
      }
      Marker.prototype.getRule = function () {
          return this.rule;
      };
      Marker.prototype.getLevel = function () {
          return this.level;
      };
      Marker.prototype.getOffset = function () {
          return this.offset;
      };
      Marker.prototype.getLength = function () {
          return this.length;
      };
      Marker.prototype.getNode = function () {
          return this.node;
      };
      Marker.prototype.getMessage = function () {
          return this.message;
      };
      return Marker;
  }());
  exports.Marker = Marker;
  /*
  export class DefaultVisitor implements IVisitor {
  
      public visitNode(node:Node):boolean {
          switch (node.type) {
              case NodeType.Stylesheet:
                  return this.visitStylesheet(<Stylesheet> node);
              case NodeType.FontFace:
                  return this.visitFontFace(<FontFace> node);
              case NodeType.Ruleset:
                  return this.visitRuleSet(<RuleSet> node);
              case NodeType.Selector:
                  return this.visitSelector(<Selector> node);
              case NodeType.SimpleSelector:
                  return this.visitSimpleSelector(<SimpleSelector> node);
              case NodeType.Declaration:
                  return this.visitDeclaration(<Declaration> node);
              case NodeType.Function:
                  return this.visitFunction(<Function> node);
              case NodeType.FunctionDeclaration:
                  return this.visitFunctionDeclaration(<FunctionDeclaration> node);
              case NodeType.FunctionParameter:
                  return this.visitFunctionParameter(<FunctionParameter> node);
              case NodeType.FunctionArgument:
                  return this.visitFunctionArgument(<FunctionArgument> node);
              case NodeType.Term:
                  return this.visitTerm(<Term> node);
              case NodeType.Declaration:
                  return this.visitExpression(<Expression> node);
              case NodeType.NumericValue:
                  return this.visitNumericValue(<NumericValue> node);
              case NodeType.Page:
                  return this.visitPage(<Page> node);
              case NodeType.PageBoxMarginBox:
                  return this.visitPageBoxMarginBox(<PageBoxMarginBox> node);
              case NodeType.Property:
                  return this.visitProperty(<Property> node);
              case NodeType.NumericValue:
                  return this.visitNodelist(<Nodelist> node);
              case NodeType.Import:
                  return this.visitImport(<Import> node);
              case NodeType.Namespace:
                  return this.visitNamespace(<Namespace> node);
              case NodeType.Keyframe:
                  return this.visitKeyframe(<Keyframe> node);
              case NodeType.KeyframeSelector:
                  return this.visitKeyframeSelector(<KeyframeSelector> node);
              case NodeType.MixinDeclaration:
                  return this.visitMixinDeclaration(<MixinDeclaration> node);
              case NodeType.MixinReference:
                  return this.visitMixinReference(<MixinReference> node);
              case NodeType.Variable:
                  return this.visitVariable(<Variable> node);
              case NodeType.VariableDeclaration:
                  return this.visitVariableDeclaration(<VariableDeclaration> node);
          }
          return this.visitUnknownNode(node);
      }
  
      public visitFontFace(node:FontFace):boolean {
          return true;
      }
  
      public visitKeyframe(node:Keyframe):boolean {
          return true;
      }
  
      public visitKeyframeSelector(node:KeyframeSelector):boolean {
          return true;
      }
  
      public visitStylesheet(node:Stylesheet):boolean {
          return true;
      }
  
      public visitProperty(Node:Property):boolean {
          return true;
      }
  
      public visitRuleSet(node:RuleSet):boolean {
          return true;
      }
  
      public visitSelector(node:Selector):boolean {
          return true;
      }
  
      public visitSimpleSelector(node:SimpleSelector):boolean {
          return true;
      }
  
      public visitDeclaration(node:Declaration):boolean {
          return true;
      }
  
      public visitFunction(node:Function):boolean {
          return true;
      }
  
      public visitFunctionDeclaration(node:FunctionDeclaration):boolean {
          return true;
      }
  
      public visitInvocation(node:Invocation):boolean {
          return true;
      }
  
      public visitTerm(node:Term):boolean {
          return true;
      }
  
      public visitImport(node:Import):boolean {
          return true;
      }
  
      public visitNamespace(node:Namespace):boolean {
          return true;
      }
  
      public visitExpression(node:Expression):boolean {
          return true;
      }
  
      public visitNumericValue(node:NumericValue):boolean {
          return true;
      }
  
      public visitPage(node:Page):boolean {
          return true;
      }
  
      public visitPageBoxMarginBox(node:PageBoxMarginBox):boolean {
          return true;
      }
  
      public visitNodelist(node:Nodelist):boolean {
          return true;
      }
  
      public visitVariableDeclaration(node:VariableDeclaration):boolean {
          return true;
      }
  
      public visitVariable(node:Variable):boolean {
          return true;
      }
  
      public visitMixinDeclaration(node:MixinDeclaration):boolean {
          return true;
      }
  
      public visitMixinReference(node:MixinReference):boolean {
          return true;
      }
  
      public visitUnknownNode(node:Node):boolean {
          return true;
      }
  }
  */
  var ParseErrorCollector = /** @class */ (function () {
      function ParseErrorCollector() {
          this.entries = [];
      }
      ParseErrorCollector.entries = function (node) {
          var visitor = new ParseErrorCollector();
          node.acceptVisitor(visitor);
          return visitor.entries;
      };
      ParseErrorCollector.prototype.visitNode = function (node) {
          if (node.isErroneous()) {
              node.collectIssues(this.entries);
          }
          return true;
      };
      return ParseErrorCollector;
  }());
  exports.ParseErrorCollector = ParseErrorCollector;
  

});
