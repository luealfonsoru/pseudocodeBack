// Generated from pseudoCodeParser.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var pseudoCodeParserListener = require('./pseudoCodeParserListener').pseudoCodeParserListener;
var grammarFileName = "pseudoCodeParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003-\u00c2\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002\u001c\n\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003$\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004:\n\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "M\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "Y\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u0007b\n\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bl\n\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00a2\n\t\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u00aa\n\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007",
    "\n\u00b6\n\n\f\n\u000e\n\u00b9\u000b\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00c0\n\u000b\u0003\u000b",
    "\u0002\u0003\u0012\f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0002\u0002\u0002\u00d2\u0002\u001b\u0003\u0002\u0002\u0002\u0004#",
    "\u0003\u0002\u0002\u0002\u00069\u0003\u0002\u0002\u0002\bL\u0003\u0002",
    "\u0002\u0002\nX\u0003\u0002\u0002\u0002\fa\u0003\u0002\u0002\u0002\u000e",
    "k\u0003\u0002\u0002\u0002\u0010\u00a1\u0003\u0002\u0002\u0002\u0012",
    "\u00a9\u0003\u0002\u0002\u0002\u0014\u00bf\u0003\u0002\u0002\u0002\u0016",
    "\u0017\u0005\u0004\u0003\u0002\u0017\u0018\u0007&\u0002\u0002\u0018",
    "\u0019\u0005\u0002\u0002\u0002\u0019\u001c\u0003\u0002\u0002\u0002\u001a",
    "\u001c\u0007\u0002\u0002\u0003\u001b\u0016\u0003\u0002\u0002\u0002\u001b",
    "\u001a\u0003\u0002\u0002\u0002\u001c\u0003\u0003\u0002\u0002\u0002\u001d",
    "\u001e\u0007\u0003\u0002\u0002\u001e\u001f\u0007&\u0002\u0002\u001f",
    "$\u0005\u0006\u0004\u0002 !\u0007\u0004\u0002\u0002!\"\u0007&\u0002",
    "\u0002\"$\u0005\u0006\u0004\u0002#\u001d\u0003\u0002\u0002\u0002# \u0003",
    "\u0002\u0002\u0002$\u0005\u0003\u0002\u0002\u0002%&\u0007,\u0002\u0002",
    "&:\u0007\u0006\u0002\u0002\'(\u0007,\u0002\u0002()\u0007&\u0002\u0002",
    ")*\u0007\b\u0002\u0002*+\u0007&\u0002\u0002+,\u0007\u0016\u0002\u0002",
    ",-\u0007&\u0002\u0002-:\u0005\b\u0005\u0002./\u0007,\u0002\u0002/0\u0007",
    "&\u0002\u000201\u0007\b\u0002\u000212\u0007&\u0002\u00022:\u0005\b\u0005",
    "\u000234\u0007,\u0002\u000245\u0007&\u0002\u000256\u0007\u000f\u0002",
    "\u000267\u0005\n\u0006\u000278\u0007\u0006\u0002\u00028:\u0003\u0002",
    "\u0002\u00029%\u0003\u0002\u0002\u00029\'\u0003\u0002\u0002\u00029.",
    "\u0003\u0002\u0002\u000293\u0003\u0002\u0002\u0002:\u0007\u0003\u0002",
    "\u0002\u0002;<\u0007\u0011\u0002\u0002<=\u0007&\u0002\u0002=>\u0005",
    "\u0010\t\u0002>?\u0007\u0006\u0002\u0002?M\u0003\u0002\u0002\u0002@",
    "A\u0007\u0013\u0002\u0002AB\u0007&\u0002\u0002BC\u0007$\u0002\u0002",
    "CD\u0005\u0012\n\u0002DE\u0007%\u0002\u0002EF\u0007\u0006\u0002\u0002",
    "FM\u0003\u0002\u0002\u0002GH\u0007\u0012\u0002\u0002HI\u0007&\u0002",
    "\u0002IJ\u0005\u0014\u000b\u0002JK\u0007\u0006\u0002\u0002KM\u0003\u0002",
    "\u0002\u0002L;\u0003\u0002\u0002\u0002L@\u0003\u0002\u0002\u0002LG\u0003",
    "\u0002\u0002\u0002M\t\u0003\u0002\u0002\u0002NO\u0007\u0005\u0002\u0002",
    "OP\u0007&\u0002\u0002PY\u0005\u0004\u0003\u0002QR\u0007&\u0002\u0002",
    "RS\u0007\u0010\u0002\u0002ST\u0007&\u0002\u0002TU\u0005\f\u0007\u0002",
    "UV\u0007&\u0002\u0002VW\u0005\u0004\u0003\u0002WY\u0003\u0002\u0002",
    "\u0002XN\u0003\u0002\u0002\u0002XQ\u0003\u0002\u0002\u0002Y\u000b\u0003",
    "\u0002\u0002\u0002Z[\u0007,\u0002\u0002[\\\u0007&\u0002\u0002\\]\u0005",
    "\u000e\b\u0002]^\u0007\u0005\u0002\u0002^b\u0003\u0002\u0002\u0002_",
    "`\u0007,\u0002\u0002`b\u0007\u0005\u0002\u0002aZ\u0003\u0002\u0002\u0002",
    "a_\u0003\u0002\u0002\u0002b\r\u0003\u0002\u0002\u0002cd\u0007\'\u0002",
    "\u0002de\u0007,\u0002\u0002ef\u0007&\u0002\u0002fl\u0005\u000e\b\u0002",
    "gh\u0007\u0019\u0002\u0002hi\u0007&\u0002\u0002il\u0007,\u0002\u0002",
    "jl\u0003\u0002\u0002\u0002kc\u0003\u0002\u0002\u0002kg\u0003\u0002\u0002",
    "\u0002kj\u0003\u0002\u0002\u0002l\u000f\u0003\u0002\u0002\u0002m\u00a2",
    "\u0007+\u0002\u0002n\u00a2\u0007,\u0002\u0002op\u0007+\u0002\u0002p",
    "q\u0007&\u0002\u0002qr\u0007\u001f\u0002\u0002rs\u0007&\u0002\u0002",
    "s\u00a2\u0005\u0010\t\u0002tu\u0007+\u0002\u0002uv\u0007&\u0002\u0002",
    "vw\u0007 \u0002\u0002wx\u0007&\u0002\u0002x\u00a2\u0005\u0010\t\u0002",
    "yz\u0007+\u0002\u0002z{\u0007&\u0002\u0002{|\u0007#\u0002\u0002|}\u0007",
    "&\u0002\u0002}\u00a2\u0005\u0010\t\u0002~\u007f\u0007+\u0002\u0002\u007f",
    "\u0080\u0007&\u0002\u0002\u0080\u0081\u0007\"\u0002\u0002\u0081\u0082",
    "\u0007&\u0002\u0002\u0082\u00a2\u0005\u0010\t\u0002\u0083\u0084\u0007",
    "+\u0002\u0002\u0084\u0085\u0007&\u0002\u0002\u0085\u0086\u0007!\u0002",
    "\u0002\u0086\u0087\u0007&\u0002\u0002\u0087\u00a2\u0005\u0010\t\u0002",
    "\u0088\u0089\u0007,\u0002\u0002\u0089\u008a\u0007&\u0002\u0002\u008a",
    "\u008b\u0007\u001f\u0002\u0002\u008b\u008c\u0007&\u0002\u0002\u008c",
    "\u00a2\u0005\u0010\t\u0002\u008d\u008e\u0007,\u0002\u0002\u008e\u008f",
    "\u0007&\u0002\u0002\u008f\u0090\u0007 \u0002\u0002\u0090\u0091\u0007",
    "&\u0002\u0002\u0091\u00a2\u0005\u0010\t\u0002\u0092\u0093\u0007,\u0002",
    "\u0002\u0093\u0094\u0007&\u0002\u0002\u0094\u0095\u0007#\u0002\u0002",
    "\u0095\u0096\u0007&\u0002\u0002\u0096\u00a2\u0005\u0010\t\u0002\u0097",
    "\u0098\u0007,\u0002\u0002\u0098\u0099\u0007&\u0002\u0002\u0099\u009a",
    "\u0007\"\u0002\u0002\u009a\u009b\u0007&\u0002\u0002\u009b\u00a2\u0005",
    "\u0010\t\u0002\u009c\u009d\u0007,\u0002\u0002\u009d\u009e\u0007&\u0002",
    "\u0002\u009e\u009f\u0007!\u0002\u0002\u009f\u00a0\u0007&\u0002\u0002",
    "\u00a0\u00a2\u0005\u0010\t\u0002\u00a1m\u0003\u0002\u0002\u0002\u00a1",
    "n\u0003\u0002\u0002\u0002\u00a1o\u0003\u0002\u0002\u0002\u00a1t\u0003",
    "\u0002\u0002\u0002\u00a1y\u0003\u0002\u0002\u0002\u00a1~\u0003\u0002",
    "\u0002\u0002\u00a1\u0083\u0003\u0002\u0002\u0002\u00a1\u0088\u0003\u0002",
    "\u0002\u0002\u00a1\u008d\u0003\u0002\u0002\u0002\u00a1\u0092\u0003\u0002",
    "\u0002\u0002\u00a1\u0097\u0003\u0002\u0002\u0002\u00a1\u009c\u0003\u0002",
    "\u0002\u0002\u00a2\u0011\u0003\u0002\u0002\u0002\u00a3\u00a4\b\n\u0001",
    "\u0002\u00a4\u00aa\u0007(\u0002\u0002\u00a5\u00aa\u0007)\u0002\u0002",
    "\u00a6\u00a7\u0007\u001a\u0002\u0002\u00a7\u00a8\u0007&\u0002\u0002",
    "\u00a8\u00aa\u0005\u0012\n\u0003\u00a9\u00a3\u0003\u0002\u0002\u0002",
    "\u00a9\u00a5\u0003\u0002\u0002\u0002\u00a9\u00a6\u0003\u0002\u0002\u0002",
    "\u00aa\u00b7\u0003\u0002\u0002\u0002\u00ab\u00ac\f\u0005\u0002\u0002",
    "\u00ac\u00ad\u0007&\u0002\u0002\u00ad\u00ae\u0007\u0018\u0002\u0002",
    "\u00ae\u00af\u0007&\u0002\u0002\u00af\u00b6\u0005\u0012\n\u0006\u00b0",
    "\u00b1\f\u0004\u0002\u0002\u00b1\u00b2\u0007&\u0002\u0002\u00b2\u00b3",
    "\u0007\u0019\u0002\u0002\u00b3\u00b4\u0007&\u0002\u0002\u00b4\u00b6",
    "\u0005\u0012\n\u0005\u00b5\u00ab\u0003\u0002\u0002\u0002\u00b5\u00b0",
    "\u0003\u0002\u0002\u0002\u00b6\u00b9\u0003\u0002\u0002\u0002\u00b7\u00b5",
    "\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8\u0013",
    "\u0003\u0002\u0002\u0002\u00b9\u00b7\u0003\u0002\u0002\u0002\u00ba\u00c0",
    "\u0007-\u0002\u0002\u00bb\u00bc\u0007-\u0002\u0002\u00bc\u00bd\u0007",
    "&\u0002\u0002\u00bd\u00be\u0007\u001f\u0002\u0002\u00be\u00c0\u0005",
    "\u0014\u000b\u0002\u00bf\u00ba\u0003\u0002\u0002\u0002\u00bf\u00bb\u0003",
    "\u0002\u0002\u0002\u00c0\u0015\u0003\u0002\u0002\u0002\u000e\u001b#",
    "9LXak\u00a1\u00a9\u00b5\u00b7\u00bf"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'Sea'", "'Haga que'", "':'", "'.'", "'haga'", 
                     null, "'es'", "'por el contrario'", null, null, "'mientras'", 
                     "'la lista de'", "'la funci\u00F3n que'", null, null, 
                     null, "'expresi\u00F3n l\u00F3gica'", null, "'imprimir'", 
                     null, "'Continuar'", "'o'", "'y'", "'no'", null, null, 
                     null, null, "'m\u00E1s'", "'menos'", "'m\u00F3dulo'", 
                     null, null, "'\u00BF'", "'?'", "' '", "','", "'Cierto'", 
                     "'Falso'" ];

var symbolicNames = [ null, "DEF", "REWRITE", "SENTENCE", "END", "DO", "ASSIG", 
                      "IS", "ELSE", "EQUAL", "THEN", "WHILE", "LIST", "FUNCT", 
                      "PARAM", "NUMBERDEF", "STRINGDEF", "BOOLDEF", "INDEX", 
                      "PRINT", "VALUE", "CONTINUE", "OR", "AND", "NOT", 
                      "GT", "LT", "GTE", "LTE", "ADD", "SUB", "MOD", "DIV", 
                      "MULT", "OPQUEST", "CLQUEST", "SPACE", "COMA", "TRUE", 
                      "FALSE", "COMMENT", "NUMBER", "VAR", "STRING" ];

var ruleNames =  [ "root", "expr", "var_declaration", "element", "func_def", 
                   "param_def", "multi_param_def", "num_expr", "bool_expr", 
                   "str_expr" ];

function pseudoCodeParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

pseudoCodeParser.prototype = Object.create(antlr4.Parser.prototype);
pseudoCodeParser.prototype.constructor = pseudoCodeParser;

Object.defineProperty(pseudoCodeParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

pseudoCodeParser.EOF = antlr4.Token.EOF;
pseudoCodeParser.DEF = 1;
pseudoCodeParser.REWRITE = 2;
pseudoCodeParser.SENTENCE = 3;
pseudoCodeParser.END = 4;
pseudoCodeParser.DO = 5;
pseudoCodeParser.ASSIG = 6;
pseudoCodeParser.IS = 7;
pseudoCodeParser.ELSE = 8;
pseudoCodeParser.EQUAL = 9;
pseudoCodeParser.THEN = 10;
pseudoCodeParser.WHILE = 11;
pseudoCodeParser.LIST = 12;
pseudoCodeParser.FUNCT = 13;
pseudoCodeParser.PARAM = 14;
pseudoCodeParser.NUMBERDEF = 15;
pseudoCodeParser.STRINGDEF = 16;
pseudoCodeParser.BOOLDEF = 17;
pseudoCodeParser.INDEX = 18;
pseudoCodeParser.PRINT = 19;
pseudoCodeParser.VALUE = 20;
pseudoCodeParser.CONTINUE = 21;
pseudoCodeParser.OR = 22;
pseudoCodeParser.AND = 23;
pseudoCodeParser.NOT = 24;
pseudoCodeParser.GT = 25;
pseudoCodeParser.LT = 26;
pseudoCodeParser.GTE = 27;
pseudoCodeParser.LTE = 28;
pseudoCodeParser.ADD = 29;
pseudoCodeParser.SUB = 30;
pseudoCodeParser.MOD = 31;
pseudoCodeParser.DIV = 32;
pseudoCodeParser.MULT = 33;
pseudoCodeParser.OPQUEST = 34;
pseudoCodeParser.CLQUEST = 35;
pseudoCodeParser.SPACE = 36;
pseudoCodeParser.COMA = 37;
pseudoCodeParser.TRUE = 38;
pseudoCodeParser.FALSE = 39;
pseudoCodeParser.COMMENT = 40;
pseudoCodeParser.NUMBER = 41;
pseudoCodeParser.VAR = 42;
pseudoCodeParser.STRING = 43;

pseudoCodeParser.RULE_root = 0;
pseudoCodeParser.RULE_expr = 1;
pseudoCodeParser.RULE_var_declaration = 2;
pseudoCodeParser.RULE_element = 3;
pseudoCodeParser.RULE_func_def = 4;
pseudoCodeParser.RULE_param_def = 5;
pseudoCodeParser.RULE_multi_param_def = 6;
pseudoCodeParser.RULE_num_expr = 7;
pseudoCodeParser.RULE_bool_expr = 8;
pseudoCodeParser.RULE_str_expr = 9;

function RootContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pseudoCodeParser.RULE_root;
    return this;
}

RootContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RootContext.prototype.constructor = RootContext;

RootContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

RootContext.prototype.SPACE = function() {
    return this.getToken(pseudoCodeParser.SPACE, 0);
};

RootContext.prototype.root = function() {
    return this.getTypedRuleContext(RootContext,0);
};

RootContext.prototype.EOF = function() {
    return this.getToken(pseudoCodeParser.EOF, 0);
};

RootContext.prototype.enterRule = function(listener) {
    if(listener instanceof pseudoCodeParserListener ) {
        listener.enterRoot(this);
	}
};

RootContext.prototype.exitRule = function(listener) {
    if(listener instanceof pseudoCodeParserListener ) {
        listener.exitRoot(this);
	}
};




pseudoCodeParser.RootContext = RootContext;

pseudoCodeParser.prototype.root = function() {

    var localctx = new RootContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, pseudoCodeParser.RULE_root);
    try {
        this.state = 25;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pseudoCodeParser.DEF:
        case pseudoCodeParser.REWRITE:
            this.enterOuterAlt(localctx, 1);
            this.state = 20;
            this.expr();
            this.state = 21;
            this.match(pseudoCodeParser.SPACE);
            this.state = 22;
            this.root();
            break;
        case pseudoCodeParser.EOF:
            this.enterOuterAlt(localctx, 2);
            this.state = 24;
            this.match(pseudoCodeParser.EOF);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pseudoCodeParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.DEF = function() {
    return this.getToken(pseudoCodeParser.DEF, 0);
};

ExprContext.prototype.SPACE = function() {
    return this.getToken(pseudoCodeParser.SPACE, 0);
};

ExprContext.prototype.var_declaration = function() {
    return this.getTypedRuleContext(Var_declarationContext,0);
};

ExprContext.prototype.REWRITE = function() {
    return this.getToken(pseudoCodeParser.REWRITE, 0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof pseudoCodeParserListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof pseudoCodeParserListener ) {
        listener.exitExpr(this);
	}
};




pseudoCodeParser.ExprContext = ExprContext;

pseudoCodeParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, pseudoCodeParser.RULE_expr);
    try {
        this.state = 33;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pseudoCodeParser.DEF:
            this.enterOuterAlt(localctx, 1);
            this.state = 27;
            this.match(pseudoCodeParser.DEF);
            this.state = 28;
            this.match(pseudoCodeParser.SPACE);
            this.state = 29;
            this.var_declaration();
            break;
        case pseudoCodeParser.REWRITE:
            this.enterOuterAlt(localctx, 2);
            this.state = 30;
            this.match(pseudoCodeParser.REWRITE);
            this.state = 31;
            this.match(pseudoCodeParser.SPACE);
            this.state = 32;
            this.var_declaration();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Var_declarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pseudoCodeParser.RULE_var_declaration;
    return this;
}

Var_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Var_declarationContext.prototype.constructor = Var_declarationContext;

Var_declarationContext.prototype.VAR = function() {
    return this.getToken(pseudoCodeParser.VAR, 0);
};

Var_declarationContext.prototype.END = function() {
    return this.getToken(pseudoCodeParser.END, 0);
};

Var_declarationContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pseudoCodeParser.SPACE);
    } else {
        return this.getToken(pseudoCodeParser.SPACE, i);
    }
};


Var_declarationContext.prototype.ASSIG = function() {
    return this.getToken(pseudoCodeParser.ASSIG, 0);
};

Var_declarationContext.prototype.VALUE = function() {
    return this.getToken(pseudoCodeParser.VALUE, 0);
};

Var_declarationContext.prototype.element = function() {
    return this.getTypedRuleContext(ElementContext,0);
};

Var_declarationContext.prototype.FUNCT = function() {
    return this.getToken(pseudoCodeParser.FUNCT, 0);
};

Var_declarationContext.prototype.func_def = function() {
    return this.getTypedRuleContext(Func_defContext,0);
};

Var_declarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof pseudoCodeParserListener ) {
        listener.enterVar_declaration(this);
	}
};

Var_declarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof pseudoCodeParserListener ) {
        listener.exitVar_declaration(this);
	}
};




pseudoCodeParser.Var_declarationContext = Var_declarationContext;

pseudoCodeParser.prototype.var_declaration = function() {

    var localctx = new Var_declarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, pseudoCodeParser.RULE_var_declaration);
    try {
        this.state = 55;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 35;
            this.match(pseudoCodeParser.VAR);
            this.state = 36;
            this.match(pseudoCodeParser.END);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 37;
            this.match(pseudoCodeParser.VAR);
            this.state = 38;
            this.match(pseudoCodeParser.SPACE);
            this.state = 39;
            this.match(pseudoCodeParser.ASSIG);
            this.state = 40;
            this.match(pseudoCodeParser.SPACE);
            this.state = 41;
            this.match(pseudoCodeParser.VALUE);
            this.state = 42;
            this.match(pseudoCodeParser.SPACE);
            this.state = 43;
            this.element();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 44;
            this.match(pseudoCodeParser.VAR);
            this.state = 45;
            this.match(pseudoCodeParser.SPACE);
            this.state = 46;
            this.match(pseudoCodeParser.ASSIG);
            this.state = 47;
            this.match(pseudoCodeParser.SPACE);
            this.state = 48;
            this.element();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 49;
            this.match(pseudoCodeParser.VAR);
            this.state = 50;
            this.match(pseudoCodeParser.SPACE);
            this.state = 51;
            this.match(pseudoCodeParser.FUNCT);
            this.state = 52;
            this.func_def();
            this.state = 53;
            this.match(pseudoCodeParser.END);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pseudoCodeParser.RULE_element;
    return this;
}

ElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementContext.prototype.constructor = ElementContext;

ElementContext.prototype.NUMBERDEF = function() {
    return this.getToken(pseudoCodeParser.NUMBERDEF, 0);
};

ElementContext.prototype.SPACE = function() {
    return this.getToken(pseudoCodeParser.SPACE, 0);
};

ElementContext.prototype.num_expr = function() {
    return this.getTypedRuleContext(Num_exprContext,0);
};

ElementContext.prototype.END = function() {
    return this.getToken(pseudoCodeParser.END, 0);
};

ElementContext.prototype.BOOLDEF = function() {
    return this.getToken(pseudoCodeParser.BOOLDEF, 0);
};

ElementContext.prototype.OPQUEST = function() {
    return this.getToken(pseudoCodeParser.OPQUEST, 0);
};

ElementContext.prototype.bool_expr = function() {
    return this.getTypedRuleContext(Bool_exprContext,0);
};

ElementContext.prototype.CLQUEST = function() {
    return this.getToken(pseudoCodeParser.CLQUEST, 0);
};

ElementContext.prototype.STRINGDEF = function() {
    return this.getToken(pseudoCodeParser.STRINGDEF, 0);
};

ElementContext.prototype.str_expr = function() {
    return this.getTypedRuleContext(Str_exprContext,0);
};

ElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof pseudoCodeParserListener ) {
        listener.enterElement(this);
	}
};

ElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof pseudoCodeParserListener ) {
        listener.exitElement(this);
	}
};




pseudoCodeParser.ElementContext = ElementContext;

pseudoCodeParser.prototype.element = function() {

    var localctx = new ElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, pseudoCodeParser.RULE_element);
    try {
        this.state = 74;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pseudoCodeParser.NUMBERDEF:
            this.enterOuterAlt(localctx, 1);
            this.state = 57;
            this.match(pseudoCodeParser.NUMBERDEF);
            this.state = 58;
            this.match(pseudoCodeParser.SPACE);
            this.state = 59;
            this.num_expr();
            this.state = 60;
            this.match(pseudoCodeParser.END);
            break;
        case pseudoCodeParser.BOOLDEF:
            this.enterOuterAlt(localctx, 2);
            this.state = 62;
            this.match(pseudoCodeParser.BOOLDEF);
            this.state = 63;
            this.match(pseudoCodeParser.SPACE);
            this.state = 64;
            this.match(pseudoCodeParser.OPQUEST);
            this.state = 65;
            this.bool_expr(0);
            this.state = 66;
            this.match(pseudoCodeParser.CLQUEST);
            this.state = 67;
            this.match(pseudoCodeParser.END);
            break;
        case pseudoCodeParser.STRINGDEF:
            this.enterOuterAlt(localctx, 3);
            this.state = 69;
            this.match(pseudoCodeParser.STRINGDEF);
            this.state = 70;
            this.match(pseudoCodeParser.SPACE);
            this.state = 71;
            this.str_expr();
            this.state = 72;
            this.match(pseudoCodeParser.END);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Func_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pseudoCodeParser.RULE_func_def;
    return this;
}

Func_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_defContext.prototype.constructor = Func_defContext;

Func_defContext.prototype.SENTENCE = function() {
    return this.getToken(pseudoCodeParser.SENTENCE, 0);
};

Func_defContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pseudoCodeParser.SPACE);
    } else {
        return this.getToken(pseudoCodeParser.SPACE, i);
    }
};


Func_defContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Func_defContext.prototype.PARAM = function() {
    return this.getToken(pseudoCodeParser.PARAM, 0);
};

Func_defContext.prototype.param_def = function() {
    return this.getTypedRuleContext(Param_defContext,0);
};

Func_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof pseudoCodeParserListener ) {
        listener.enterFunc_def(this);
	}
};

Func_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof pseudoCodeParserListener ) {
        listener.exitFunc_def(this);
	}
};




pseudoCodeParser.Func_defContext = Func_defContext;

pseudoCodeParser.prototype.func_def = function() {

    var localctx = new Func_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, pseudoCodeParser.RULE_func_def);
    try {
        this.state = 86;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pseudoCodeParser.SENTENCE:
            this.enterOuterAlt(localctx, 1);
            this.state = 76;
            this.match(pseudoCodeParser.SENTENCE);
            this.state = 77;
            this.match(pseudoCodeParser.SPACE);
            this.state = 78;
            this.expr();
            break;
        case pseudoCodeParser.SPACE:
            this.enterOuterAlt(localctx, 2);
            this.state = 79;
            this.match(pseudoCodeParser.SPACE);
            this.state = 80;
            this.match(pseudoCodeParser.PARAM);
            this.state = 81;
            this.match(pseudoCodeParser.SPACE);
            this.state = 82;
            this.param_def();
            this.state = 83;
            this.match(pseudoCodeParser.SPACE);
            this.state = 84;
            this.expr();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Param_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pseudoCodeParser.RULE_param_def;
    return this;
}

Param_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Param_defContext.prototype.constructor = Param_defContext;

Param_defContext.prototype.VAR = function() {
    return this.getToken(pseudoCodeParser.VAR, 0);
};

Param_defContext.prototype.SPACE = function() {
    return this.getToken(pseudoCodeParser.SPACE, 0);
};

Param_defContext.prototype.multi_param_def = function() {
    return this.getTypedRuleContext(Multi_param_defContext,0);
};

Param_defContext.prototype.SENTENCE = function() {
    return this.getToken(pseudoCodeParser.SENTENCE, 0);
};

Param_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof pseudoCodeParserListener ) {
        listener.enterParam_def(this);
	}
};

Param_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof pseudoCodeParserListener ) {
        listener.exitParam_def(this);
	}
};




pseudoCodeParser.Param_defContext = Param_defContext;

pseudoCodeParser.prototype.param_def = function() {

    var localctx = new Param_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, pseudoCodeParser.RULE_param_def);
    try {
        this.state = 95;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 88;
            this.match(pseudoCodeParser.VAR);
            this.state = 89;
            this.match(pseudoCodeParser.SPACE);
            this.state = 90;
            this.multi_param_def();
            this.state = 91;
            this.match(pseudoCodeParser.SENTENCE);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 93;
            this.match(pseudoCodeParser.VAR);
            this.state = 94;
            this.match(pseudoCodeParser.SENTENCE);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Multi_param_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pseudoCodeParser.RULE_multi_param_def;
    return this;
}

Multi_param_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Multi_param_defContext.prototype.constructor = Multi_param_defContext;

Multi_param_defContext.prototype.COMA = function() {
    return this.getToken(pseudoCodeParser.COMA, 0);
};

Multi_param_defContext.prototype.VAR = function() {
    return this.getToken(pseudoCodeParser.VAR, 0);
};

Multi_param_defContext.prototype.SPACE = function() {
    return this.getToken(pseudoCodeParser.SPACE, 0);
};

Multi_param_defContext.prototype.multi_param_def = function() {
    return this.getTypedRuleContext(Multi_param_defContext,0);
};

Multi_param_defContext.prototype.AND = function() {
    return this.getToken(pseudoCodeParser.AND, 0);
};

Multi_param_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof pseudoCodeParserListener ) {
        listener.enterMulti_param_def(this);
	}
};

Multi_param_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof pseudoCodeParserListener ) {
        listener.exitMulti_param_def(this);
	}
};




pseudoCodeParser.Multi_param_defContext = Multi_param_defContext;

pseudoCodeParser.prototype.multi_param_def = function() {

    var localctx = new Multi_param_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, pseudoCodeParser.RULE_multi_param_def);
    try {
        this.state = 105;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pseudoCodeParser.COMA:
            this.enterOuterAlt(localctx, 1);
            this.state = 97;
            this.match(pseudoCodeParser.COMA);
            this.state = 98;
            this.match(pseudoCodeParser.VAR);
            this.state = 99;
            this.match(pseudoCodeParser.SPACE);
            this.state = 100;
            this.multi_param_def();
            break;
        case pseudoCodeParser.AND:
            this.enterOuterAlt(localctx, 2);
            this.state = 101;
            this.match(pseudoCodeParser.AND);
            this.state = 102;
            this.match(pseudoCodeParser.SPACE);
            this.state = 103;
            this.match(pseudoCodeParser.VAR);
            break;
        case pseudoCodeParser.SENTENCE:
            this.enterOuterAlt(localctx, 3);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Num_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pseudoCodeParser.RULE_num_expr;
    return this;
}

Num_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Num_exprContext.prototype.constructor = Num_exprContext;

Num_exprContext.prototype.NUMBER = function() {
    return this.getToken(pseudoCodeParser.NUMBER, 0);
};

Num_exprContext.prototype.VAR = function() {
    return this.getToken(pseudoCodeParser.VAR, 0);
};

Num_exprContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pseudoCodeParser.SPACE);
    } else {
        return this.getToken(pseudoCodeParser.SPACE, i);
    }
};


Num_exprContext.prototype.ADD = function() {
    return this.getToken(pseudoCodeParser.ADD, 0);
};

Num_exprContext.prototype.num_expr = function() {
    return this.getTypedRuleContext(Num_exprContext,0);
};

Num_exprContext.prototype.SUB = function() {
    return this.getToken(pseudoCodeParser.SUB, 0);
};

Num_exprContext.prototype.MULT = function() {
    return this.getToken(pseudoCodeParser.MULT, 0);
};

Num_exprContext.prototype.DIV = function() {
    return this.getToken(pseudoCodeParser.DIV, 0);
};

Num_exprContext.prototype.MOD = function() {
    return this.getToken(pseudoCodeParser.MOD, 0);
};

Num_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof pseudoCodeParserListener ) {
        listener.enterNum_expr(this);
	}
};

Num_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof pseudoCodeParserListener ) {
        listener.exitNum_expr(this);
	}
};




pseudoCodeParser.Num_exprContext = Num_exprContext;

pseudoCodeParser.prototype.num_expr = function() {

    var localctx = new Num_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, pseudoCodeParser.RULE_num_expr);
    try {
        this.state = 159;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 107;
            this.match(pseudoCodeParser.NUMBER);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 108;
            this.match(pseudoCodeParser.VAR);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 109;
            this.match(pseudoCodeParser.NUMBER);
            this.state = 110;
            this.match(pseudoCodeParser.SPACE);
            this.state = 111;
            this.match(pseudoCodeParser.ADD);
            this.state = 112;
            this.match(pseudoCodeParser.SPACE);
            this.state = 113;
            this.num_expr();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 114;
            this.match(pseudoCodeParser.NUMBER);
            this.state = 115;
            this.match(pseudoCodeParser.SPACE);
            this.state = 116;
            this.match(pseudoCodeParser.SUB);
            this.state = 117;
            this.match(pseudoCodeParser.SPACE);
            this.state = 118;
            this.num_expr();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 119;
            this.match(pseudoCodeParser.NUMBER);
            this.state = 120;
            this.match(pseudoCodeParser.SPACE);
            this.state = 121;
            this.match(pseudoCodeParser.MULT);
            this.state = 122;
            this.match(pseudoCodeParser.SPACE);
            this.state = 123;
            this.num_expr();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 124;
            this.match(pseudoCodeParser.NUMBER);
            this.state = 125;
            this.match(pseudoCodeParser.SPACE);
            this.state = 126;
            this.match(pseudoCodeParser.DIV);
            this.state = 127;
            this.match(pseudoCodeParser.SPACE);
            this.state = 128;
            this.num_expr();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 129;
            this.match(pseudoCodeParser.NUMBER);
            this.state = 130;
            this.match(pseudoCodeParser.SPACE);
            this.state = 131;
            this.match(pseudoCodeParser.MOD);
            this.state = 132;
            this.match(pseudoCodeParser.SPACE);
            this.state = 133;
            this.num_expr();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 134;
            this.match(pseudoCodeParser.VAR);
            this.state = 135;
            this.match(pseudoCodeParser.SPACE);
            this.state = 136;
            this.match(pseudoCodeParser.ADD);
            this.state = 137;
            this.match(pseudoCodeParser.SPACE);
            this.state = 138;
            this.num_expr();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 139;
            this.match(pseudoCodeParser.VAR);
            this.state = 140;
            this.match(pseudoCodeParser.SPACE);
            this.state = 141;
            this.match(pseudoCodeParser.SUB);
            this.state = 142;
            this.match(pseudoCodeParser.SPACE);
            this.state = 143;
            this.num_expr();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 144;
            this.match(pseudoCodeParser.VAR);
            this.state = 145;
            this.match(pseudoCodeParser.SPACE);
            this.state = 146;
            this.match(pseudoCodeParser.MULT);
            this.state = 147;
            this.match(pseudoCodeParser.SPACE);
            this.state = 148;
            this.num_expr();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 149;
            this.match(pseudoCodeParser.VAR);
            this.state = 150;
            this.match(pseudoCodeParser.SPACE);
            this.state = 151;
            this.match(pseudoCodeParser.DIV);
            this.state = 152;
            this.match(pseudoCodeParser.SPACE);
            this.state = 153;
            this.num_expr();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 154;
            this.match(pseudoCodeParser.VAR);
            this.state = 155;
            this.match(pseudoCodeParser.SPACE);
            this.state = 156;
            this.match(pseudoCodeParser.MOD);
            this.state = 157;
            this.match(pseudoCodeParser.SPACE);
            this.state = 158;
            this.num_expr();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Bool_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pseudoCodeParser.RULE_bool_expr;
    return this;
}

Bool_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Bool_exprContext.prototype.constructor = Bool_exprContext;

Bool_exprContext.prototype.TRUE = function() {
    return this.getToken(pseudoCodeParser.TRUE, 0);
};

Bool_exprContext.prototype.FALSE = function() {
    return this.getToken(pseudoCodeParser.FALSE, 0);
};

Bool_exprContext.prototype.NOT = function() {
    return this.getToken(pseudoCodeParser.NOT, 0);
};

Bool_exprContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pseudoCodeParser.SPACE);
    } else {
        return this.getToken(pseudoCodeParser.SPACE, i);
    }
};


Bool_exprContext.prototype.bool_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Bool_exprContext);
    } else {
        return this.getTypedRuleContext(Bool_exprContext,i);
    }
};

Bool_exprContext.prototype.OR = function() {
    return this.getToken(pseudoCodeParser.OR, 0);
};

Bool_exprContext.prototype.AND = function() {
    return this.getToken(pseudoCodeParser.AND, 0);
};

Bool_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof pseudoCodeParserListener ) {
        listener.enterBool_expr(this);
	}
};

Bool_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof pseudoCodeParserListener ) {
        listener.exitBool_expr(this);
	}
};



pseudoCodeParser.prototype.bool_expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Bool_exprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 16;
    this.enterRecursionRule(localctx, 16, pseudoCodeParser.RULE_bool_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 167;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pseudoCodeParser.TRUE:
            this.state = 162;
            this.match(pseudoCodeParser.TRUE);
            break;
        case pseudoCodeParser.FALSE:
            this.state = 163;
            this.match(pseudoCodeParser.FALSE);
            break;
        case pseudoCodeParser.NOT:
            this.state = 164;
            this.match(pseudoCodeParser.NOT);
            this.state = 165;
            this.match(pseudoCodeParser.SPACE);
            this.state = 166;
            this.bool_expr(1);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 181;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 179;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new Bool_exprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, pseudoCodeParser.RULE_bool_expr);
                    this.state = 169;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 170;
                    this.match(pseudoCodeParser.SPACE);
                    this.state = 171;
                    this.match(pseudoCodeParser.OR);
                    this.state = 172;
                    this.match(pseudoCodeParser.SPACE);
                    this.state = 173;
                    this.bool_expr(4);
                    break;

                case 2:
                    localctx = new Bool_exprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, pseudoCodeParser.RULE_bool_expr);
                    this.state = 174;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 175;
                    this.match(pseudoCodeParser.SPACE);
                    this.state = 176;
                    this.match(pseudoCodeParser.AND);
                    this.state = 177;
                    this.match(pseudoCodeParser.SPACE);
                    this.state = 178;
                    this.bool_expr(3);
                    break;

                } 
            }
            this.state = 183;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Str_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pseudoCodeParser.RULE_str_expr;
    return this;
}

Str_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Str_exprContext.prototype.constructor = Str_exprContext;

Str_exprContext.prototype.STRING = function() {
    return this.getToken(pseudoCodeParser.STRING, 0);
};

Str_exprContext.prototype.SPACE = function() {
    return this.getToken(pseudoCodeParser.SPACE, 0);
};

Str_exprContext.prototype.ADD = function() {
    return this.getToken(pseudoCodeParser.ADD, 0);
};

Str_exprContext.prototype.str_expr = function() {
    return this.getTypedRuleContext(Str_exprContext,0);
};

Str_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof pseudoCodeParserListener ) {
        listener.enterStr_expr(this);
	}
};

Str_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof pseudoCodeParserListener ) {
        listener.exitStr_expr(this);
	}
};




pseudoCodeParser.Str_exprContext = Str_exprContext;

pseudoCodeParser.prototype.str_expr = function() {

    var localctx = new Str_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, pseudoCodeParser.RULE_str_expr);
    try {
        this.state = 189;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 184;
            this.match(pseudoCodeParser.STRING);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 185;
            this.match(pseudoCodeParser.STRING);
            this.state = 186;
            this.match(pseudoCodeParser.SPACE);
            this.state = 187;
            this.match(pseudoCodeParser.ADD);
            this.state = 188;
            this.str_expr();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


pseudoCodeParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 8:
			return this.bool_expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

pseudoCodeParser.prototype.bool_expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		case 1:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.pseudoCodeParser = pseudoCodeParser;
