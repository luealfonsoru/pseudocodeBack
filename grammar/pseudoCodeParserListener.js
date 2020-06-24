// Generated from pseudoCodeParser.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by pseudoCodeParser.
function pseudoCodeParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

pseudoCodeParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
pseudoCodeParserListener.prototype.constructor = pseudoCodeParserListener;

// Enter a parse tree produced by pseudoCodeParser#root.
pseudoCodeParserListener.prototype.enterRoot = function(ctx) {
};

// Exit a parse tree produced by pseudoCodeParser#root.
pseudoCodeParserListener.prototype.exitRoot = function(ctx) {
};


// Enter a parse tree produced by pseudoCodeParser#expr.
pseudoCodeParserListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by pseudoCodeParser#expr.
pseudoCodeParserListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by pseudoCodeParser#var_declaration.
pseudoCodeParserListener.prototype.enterVar_declaration = function(ctx) {
};

// Exit a parse tree produced by pseudoCodeParser#var_declaration.
pseudoCodeParserListener.prototype.exitVar_declaration = function(ctx) {
};


// Enter a parse tree produced by pseudoCodeParser#element.
pseudoCodeParserListener.prototype.enterElement = function(ctx) {
};

// Exit a parse tree produced by pseudoCodeParser#element.
pseudoCodeParserListener.prototype.exitElement = function(ctx) {
};


// Enter a parse tree produced by pseudoCodeParser#func_def.
pseudoCodeParserListener.prototype.enterFunc_def = function(ctx) {
};

// Exit a parse tree produced by pseudoCodeParser#func_def.
pseudoCodeParserListener.prototype.exitFunc_def = function(ctx) {
};


// Enter a parse tree produced by pseudoCodeParser#param_def.
pseudoCodeParserListener.prototype.enterParam_def = function(ctx) {
};

// Exit a parse tree produced by pseudoCodeParser#param_def.
pseudoCodeParserListener.prototype.exitParam_def = function(ctx) {
};


// Enter a parse tree produced by pseudoCodeParser#multi_param_def.
pseudoCodeParserListener.prototype.enterMulti_param_def = function(ctx) {
};

// Exit a parse tree produced by pseudoCodeParser#multi_param_def.
pseudoCodeParserListener.prototype.exitMulti_param_def = function(ctx) {
};


// Enter a parse tree produced by pseudoCodeParser#num_expr.
pseudoCodeParserListener.prototype.enterNum_expr = function(ctx) {
};

// Exit a parse tree produced by pseudoCodeParser#num_expr.
pseudoCodeParserListener.prototype.exitNum_expr = function(ctx) {
};


// Enter a parse tree produced by pseudoCodeParser#bool_expr.
pseudoCodeParserListener.prototype.enterBool_expr = function(ctx) {
};

// Exit a parse tree produced by pseudoCodeParser#bool_expr.
pseudoCodeParserListener.prototype.exitBool_expr = function(ctx) {
};


// Enter a parse tree produced by pseudoCodeParser#str_expr.
pseudoCodeParserListener.prototype.enterStr_expr = function(ctx) {
};

// Exit a parse tree produced by pseudoCodeParser#str_expr.
pseudoCodeParserListener.prototype.exitStr_expr = function(ctx) {
};



exports.pseudoCodeParserListener = pseudoCodeParserListener;