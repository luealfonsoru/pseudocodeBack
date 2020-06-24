// Generated from /home/lucholuis123/pseudoCode/grammar/pseudoCodeParser.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class pseudoCodeParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		DEF=1, REWRITE=2, SENTENCE=3, END=4, DO=5, ASSIG=6, IS=7, ELSE=8, EQUAL=9, 
		THEN=10, WHILE=11, LIST=12, FUNCT=13, PARAM=14, NUMBERDEF=15, STRINGDEF=16, 
		BOOLDEF=17, INDEX=18, PRINT=19, VALUE=20, CONTINUE=21, OR=22, AND=23, 
		NOT=24, GT=25, LT=26, GTE=27, LTE=28, ADD=29, SUB=30, MOD=31, DIV=32, 
		MULT=33, OPQUEST=34, CLQUEST=35, SPACE=36, COMA=37, TRUE=38, FALSE=39, 
		COMMENT=40, NUMBER=41, VAR=42, STRING=43;
	public static final int
		RULE_root = 0, RULE_expr = 1, RULE_var_declaration = 2, RULE_element = 3, 
		RULE_func_def = 4, RULE_param_def = 5, RULE_multi_param_def = 6, RULE_num_expr = 7, 
		RULE_bool_expr = 8, RULE_str_expr = 9;
	private static String[] makeRuleNames() {
		return new String[] {
			"root", "expr", "var_declaration", "element", "func_def", "param_def", 
			"multi_param_def", "num_expr", "bool_expr", "str_expr"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'Sea'", "'Haga que'", "':'", "'.'", "'haga'", null, "'es'", "'por el contrario'", 
			null, null, "'mientras'", "'la lista de'", "'la funci\u00F3n que'", null, 
			null, null, "'expresi\u00F3n l\u00F3gica'", null, "'Imprimir'", null, 
			"'Continuar'", "'o'", "'y'", "'no'", null, null, null, null, "'m\u00E1s'", 
			"'menos'", "'m\u00F3dulo'", null, null, "'\u00BF'", "'?'", "' '", "','", 
			"'Cierto'", "'Falso'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "DEF", "REWRITE", "SENTENCE", "END", "DO", "ASSIG", "IS", "ELSE", 
			"EQUAL", "THEN", "WHILE", "LIST", "FUNCT", "PARAM", "NUMBERDEF", "STRINGDEF", 
			"BOOLDEF", "INDEX", "PRINT", "VALUE", "CONTINUE", "OR", "AND", "NOT", 
			"GT", "LT", "GTE", "LTE", "ADD", "SUB", "MOD", "DIV", "MULT", "OPQUEST", 
			"CLQUEST", "SPACE", "COMA", "TRUE", "FALSE", "COMMENT", "NUMBER", "VAR", 
			"STRING"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "pseudoCodeParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public pseudoCodeParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class RootContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SPACE() { return getToken(pseudoCodeParser.SPACE, 0); }
		public RootContext root() {
			return getRuleContext(RootContext.class,0);
		}
		public TerminalNode EOF() { return getToken(pseudoCodeParser.EOF, 0); }
		public RootContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_root; }
	}

	public final RootContext root() throws RecognitionException {
		RootContext _localctx = new RootContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_root);
		try {
			setState(25);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DEF:
			case REWRITE:
			case PRINT:
				enterOuterAlt(_localctx, 1);
				{
				setState(20);
				expr();
				setState(21);
				match(SPACE);
				setState(22);
				root();
				}
				break;
			case EOF:
				enterOuterAlt(_localctx, 2);
				{
				setState(24);
				match(EOF);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprContext extends ParserRuleContext {
		public TerminalNode DEF() { return getToken(pseudoCodeParser.DEF, 0); }
		public TerminalNode SPACE() { return getToken(pseudoCodeParser.SPACE, 0); }
		public Var_declarationContext var_declaration() {
			return getRuleContext(Var_declarationContext.class,0);
		}
		public TerminalNode REWRITE() { return getToken(pseudoCodeParser.REWRITE, 0); }
		public TerminalNode PRINT() { return getToken(pseudoCodeParser.PRINT, 0); }
		public TerminalNode VAR() { return getToken(pseudoCodeParser.VAR, 0); }
		public TerminalNode END() { return getToken(pseudoCodeParser.END, 0); }
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		ExprContext _localctx = new ExprContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_expr);
		try {
			setState(37);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DEF:
				enterOuterAlt(_localctx, 1);
				{
				setState(27);
				match(DEF);
				setState(28);
				match(SPACE);
				setState(29);
				var_declaration();
				}
				break;
			case REWRITE:
				enterOuterAlt(_localctx, 2);
				{
				setState(30);
				match(REWRITE);
				setState(31);
				match(SPACE);
				setState(32);
				var_declaration();
				}
				break;
			case PRINT:
				enterOuterAlt(_localctx, 3);
				{
				setState(33);
				match(PRINT);
				setState(34);
				match(SPACE);
				setState(35);
				match(VAR);
				setState(36);
				match(END);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Var_declarationContext extends ParserRuleContext {
		public TerminalNode VAR() { return getToken(pseudoCodeParser.VAR, 0); }
		public TerminalNode END() { return getToken(pseudoCodeParser.END, 0); }
		public List<TerminalNode> SPACE() { return getTokens(pseudoCodeParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(pseudoCodeParser.SPACE, i);
		}
		public TerminalNode ASSIG() { return getToken(pseudoCodeParser.ASSIG, 0); }
		public TerminalNode VALUE() { return getToken(pseudoCodeParser.VALUE, 0); }
		public ElementContext element() {
			return getRuleContext(ElementContext.class,0);
		}
		public TerminalNode FUNCT() { return getToken(pseudoCodeParser.FUNCT, 0); }
		public Func_defContext func_def() {
			return getRuleContext(Func_defContext.class,0);
		}
		public Var_declarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var_declaration; }
	}

	public final Var_declarationContext var_declaration() throws RecognitionException {
		Var_declarationContext _localctx = new Var_declarationContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_var_declaration);
		try {
			setState(59);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(39);
				match(VAR);
				setState(40);
				match(END);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(41);
				match(VAR);
				setState(42);
				match(SPACE);
				setState(43);
				match(ASSIG);
				setState(44);
				match(SPACE);
				setState(45);
				match(VALUE);
				setState(46);
				match(SPACE);
				setState(47);
				element();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(48);
				match(VAR);
				setState(49);
				match(SPACE);
				setState(50);
				match(ASSIG);
				setState(51);
				match(SPACE);
				setState(52);
				element();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(53);
				match(VAR);
				setState(54);
				match(SPACE);
				setState(55);
				match(FUNCT);
				setState(56);
				func_def();
				setState(57);
				match(END);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementContext extends ParserRuleContext {
		public TerminalNode NUMBERDEF() { return getToken(pseudoCodeParser.NUMBERDEF, 0); }
		public TerminalNode SPACE() { return getToken(pseudoCodeParser.SPACE, 0); }
		public Num_exprContext num_expr() {
			return getRuleContext(Num_exprContext.class,0);
		}
		public TerminalNode END() { return getToken(pseudoCodeParser.END, 0); }
		public TerminalNode BOOLDEF() { return getToken(pseudoCodeParser.BOOLDEF, 0); }
		public TerminalNode OPQUEST() { return getToken(pseudoCodeParser.OPQUEST, 0); }
		public Bool_exprContext bool_expr() {
			return getRuleContext(Bool_exprContext.class,0);
		}
		public TerminalNode CLQUEST() { return getToken(pseudoCodeParser.CLQUEST, 0); }
		public TerminalNode STRINGDEF() { return getToken(pseudoCodeParser.STRINGDEF, 0); }
		public Str_exprContext str_expr() {
			return getRuleContext(Str_exprContext.class,0);
		}
		public ElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_element; }
	}

	public final ElementContext element() throws RecognitionException {
		ElementContext _localctx = new ElementContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_element);
		try {
			setState(78);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUMBERDEF:
				enterOuterAlt(_localctx, 1);
				{
				setState(61);
				match(NUMBERDEF);
				setState(62);
				match(SPACE);
				setState(63);
				num_expr();
				setState(64);
				match(END);
				}
				break;
			case BOOLDEF:
				enterOuterAlt(_localctx, 2);
				{
				setState(66);
				match(BOOLDEF);
				setState(67);
				match(SPACE);
				setState(68);
				match(OPQUEST);
				setState(69);
				bool_expr(0);
				setState(70);
				match(CLQUEST);
				setState(71);
				match(END);
				}
				break;
			case STRINGDEF:
				enterOuterAlt(_localctx, 3);
				{
				setState(73);
				match(STRINGDEF);
				setState(74);
				match(SPACE);
				setState(75);
				str_expr();
				setState(76);
				match(END);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Func_defContext extends ParserRuleContext {
		public TerminalNode SENTENCE() { return getToken(pseudoCodeParser.SENTENCE, 0); }
		public List<TerminalNode> SPACE() { return getTokens(pseudoCodeParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(pseudoCodeParser.SPACE, i);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PARAM() { return getToken(pseudoCodeParser.PARAM, 0); }
		public Param_defContext param_def() {
			return getRuleContext(Param_defContext.class,0);
		}
		public Func_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func_def; }
	}

	public final Func_defContext func_def() throws RecognitionException {
		Func_defContext _localctx = new Func_defContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_func_def);
		try {
			setState(90);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SENTENCE:
				enterOuterAlt(_localctx, 1);
				{
				setState(80);
				match(SENTENCE);
				setState(81);
				match(SPACE);
				setState(82);
				expr();
				}
				break;
			case SPACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(83);
				match(SPACE);
				setState(84);
				match(PARAM);
				setState(85);
				match(SPACE);
				setState(86);
				param_def();
				setState(87);
				match(SPACE);
				setState(88);
				expr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Param_defContext extends ParserRuleContext {
		public TerminalNode VAR() { return getToken(pseudoCodeParser.VAR, 0); }
		public TerminalNode SPACE() { return getToken(pseudoCodeParser.SPACE, 0); }
		public Multi_param_defContext multi_param_def() {
			return getRuleContext(Multi_param_defContext.class,0);
		}
		public TerminalNode SENTENCE() { return getToken(pseudoCodeParser.SENTENCE, 0); }
		public Param_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_param_def; }
	}

	public final Param_defContext param_def() throws RecognitionException {
		Param_defContext _localctx = new Param_defContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_param_def);
		try {
			setState(99);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(92);
				match(VAR);
				setState(93);
				match(SPACE);
				setState(94);
				multi_param_def();
				setState(95);
				match(SENTENCE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(97);
				match(VAR);
				setState(98);
				match(SENTENCE);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Multi_param_defContext extends ParserRuleContext {
		public TerminalNode COMA() { return getToken(pseudoCodeParser.COMA, 0); }
		public TerminalNode VAR() { return getToken(pseudoCodeParser.VAR, 0); }
		public TerminalNode SPACE() { return getToken(pseudoCodeParser.SPACE, 0); }
		public Multi_param_defContext multi_param_def() {
			return getRuleContext(Multi_param_defContext.class,0);
		}
		public TerminalNode AND() { return getToken(pseudoCodeParser.AND, 0); }
		public Multi_param_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multi_param_def; }
	}

	public final Multi_param_defContext multi_param_def() throws RecognitionException {
		Multi_param_defContext _localctx = new Multi_param_defContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_multi_param_def);
		try {
			setState(109);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case COMA:
				enterOuterAlt(_localctx, 1);
				{
				setState(101);
				match(COMA);
				setState(102);
				match(VAR);
				setState(103);
				match(SPACE);
				setState(104);
				multi_param_def();
				}
				break;
			case AND:
				enterOuterAlt(_localctx, 2);
				{
				setState(105);
				match(AND);
				setState(106);
				match(SPACE);
				setState(107);
				match(VAR);
				}
				break;
			case SENTENCE:
				enterOuterAlt(_localctx, 3);
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Num_exprContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(pseudoCodeParser.NUMBER, 0); }
		public TerminalNode VAR() { return getToken(pseudoCodeParser.VAR, 0); }
		public List<TerminalNode> SPACE() { return getTokens(pseudoCodeParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(pseudoCodeParser.SPACE, i);
		}
		public TerminalNode ADD() { return getToken(pseudoCodeParser.ADD, 0); }
		public Num_exprContext num_expr() {
			return getRuleContext(Num_exprContext.class,0);
		}
		public TerminalNode SUB() { return getToken(pseudoCodeParser.SUB, 0); }
		public TerminalNode MULT() { return getToken(pseudoCodeParser.MULT, 0); }
		public TerminalNode DIV() { return getToken(pseudoCodeParser.DIV, 0); }
		public TerminalNode MOD() { return getToken(pseudoCodeParser.MOD, 0); }
		public Num_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_num_expr; }
	}

	public final Num_exprContext num_expr() throws RecognitionException {
		Num_exprContext _localctx = new Num_exprContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_num_expr);
		try {
			setState(163);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(111);
				match(NUMBER);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(112);
				match(VAR);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(113);
				match(NUMBER);
				setState(114);
				match(SPACE);
				setState(115);
				match(ADD);
				setState(116);
				match(SPACE);
				setState(117);
				num_expr();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(118);
				match(NUMBER);
				setState(119);
				match(SPACE);
				setState(120);
				match(SUB);
				setState(121);
				match(SPACE);
				setState(122);
				num_expr();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(123);
				match(NUMBER);
				setState(124);
				match(SPACE);
				setState(125);
				match(MULT);
				setState(126);
				match(SPACE);
				setState(127);
				num_expr();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(128);
				match(NUMBER);
				setState(129);
				match(SPACE);
				setState(130);
				match(DIV);
				setState(131);
				match(SPACE);
				setState(132);
				num_expr();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(133);
				match(NUMBER);
				setState(134);
				match(SPACE);
				setState(135);
				match(MOD);
				setState(136);
				match(SPACE);
				setState(137);
				num_expr();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(138);
				match(VAR);
				setState(139);
				match(SPACE);
				setState(140);
				match(ADD);
				setState(141);
				match(SPACE);
				setState(142);
				num_expr();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(143);
				match(VAR);
				setState(144);
				match(SPACE);
				setState(145);
				match(SUB);
				setState(146);
				match(SPACE);
				setState(147);
				num_expr();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(148);
				match(VAR);
				setState(149);
				match(SPACE);
				setState(150);
				match(MULT);
				setState(151);
				match(SPACE);
				setState(152);
				num_expr();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(153);
				match(VAR);
				setState(154);
				match(SPACE);
				setState(155);
				match(DIV);
				setState(156);
				match(SPACE);
				setState(157);
				num_expr();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(158);
				match(VAR);
				setState(159);
				match(SPACE);
				setState(160);
				match(MOD);
				setState(161);
				match(SPACE);
				setState(162);
				num_expr();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Bool_exprContext extends ParserRuleContext {
		public TerminalNode TRUE() { return getToken(pseudoCodeParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(pseudoCodeParser.FALSE, 0); }
		public TerminalNode NOT() { return getToken(pseudoCodeParser.NOT, 0); }
		public List<TerminalNode> SPACE() { return getTokens(pseudoCodeParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(pseudoCodeParser.SPACE, i);
		}
		public List<Bool_exprContext> bool_expr() {
			return getRuleContexts(Bool_exprContext.class);
		}
		public Bool_exprContext bool_expr(int i) {
			return getRuleContext(Bool_exprContext.class,i);
		}
		public TerminalNode OR() { return getToken(pseudoCodeParser.OR, 0); }
		public TerminalNode AND() { return getToken(pseudoCodeParser.AND, 0); }
		public Bool_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bool_expr; }
	}

	public final Bool_exprContext bool_expr() throws RecognitionException {
		return bool_expr(0);
	}

	private Bool_exprContext bool_expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		Bool_exprContext _localctx = new Bool_exprContext(_ctx, _parentState);
		Bool_exprContext _prevctx = _localctx;
		int _startState = 16;
		enterRecursionRule(_localctx, 16, RULE_bool_expr, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(171);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TRUE:
				{
				setState(166);
				match(TRUE);
				}
				break;
			case FALSE:
				{
				setState(167);
				match(FALSE);
				}
				break;
			case NOT:
				{
				setState(168);
				match(NOT);
				setState(169);
				match(SPACE);
				setState(170);
				bool_expr(1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(185);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(183);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
					case 1:
						{
						_localctx = new Bool_exprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_bool_expr);
						setState(173);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(174);
						match(SPACE);
						setState(175);
						match(OR);
						setState(176);
						match(SPACE);
						setState(177);
						bool_expr(4);
						}
						break;
					case 2:
						{
						_localctx = new Bool_exprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_bool_expr);
						setState(178);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(179);
						match(SPACE);
						setState(180);
						match(AND);
						setState(181);
						match(SPACE);
						setState(182);
						bool_expr(3);
						}
						break;
					}
					} 
				}
				setState(187);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Str_exprContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(pseudoCodeParser.STRING, 0); }
		public TerminalNode VAR() { return getToken(pseudoCodeParser.VAR, 0); }
		public List<TerminalNode> SPACE() { return getTokens(pseudoCodeParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(pseudoCodeParser.SPACE, i);
		}
		public TerminalNode ADD() { return getToken(pseudoCodeParser.ADD, 0); }
		public Str_exprContext str_expr() {
			return getRuleContext(Str_exprContext.class,0);
		}
		public Str_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_str_expr; }
	}

	public final Str_exprContext str_expr() throws RecognitionException {
		Str_exprContext _localctx = new Str_exprContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_str_expr);
		try {
			setState(200);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(188);
				match(STRING);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(189);
				match(VAR);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(190);
				match(STRING);
				setState(191);
				match(SPACE);
				setState(192);
				match(ADD);
				setState(193);
				match(SPACE);
				setState(194);
				str_expr();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(195);
				match(VAR);
				setState(196);
				match(SPACE);
				setState(197);
				match(ADD);
				setState(198);
				match(SPACE);
				setState(199);
				str_expr();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 8:
			return bool_expr_sempred((Bool_exprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean bool_expr_sempred(Bool_exprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 3);
		case 1:
			return precpred(_ctx, 2);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3-\u00cd\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\3\2\3\2\3\2\3\2\3\2\5\2\34\n\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\5\3(\n\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\3\4\5\4>\n\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5"+
		"\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\5\5Q\n\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6"+
		"\3\6\3\6\3\6\5\6]\n\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7f\n\7\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\5\bp\n\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3"+
		"\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\t\5\t\u00a6\n\t\3\n\3\n\3\n\3\n\3\n\3\n\5\n"+
		"\u00ae\n\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\7\n\u00ba\n\n\f\n\16"+
		"\n\u00bd\13\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3"+
		"\13\5\13\u00cb\n\13\3\13\2\3\22\f\2\4\6\b\n\f\16\20\22\24\2\2\2\u00e0"+
		"\2\33\3\2\2\2\4\'\3\2\2\2\6=\3\2\2\2\bP\3\2\2\2\n\\\3\2\2\2\fe\3\2\2\2"+
		"\16o\3\2\2\2\20\u00a5\3\2\2\2\22\u00ad\3\2\2\2\24\u00ca\3\2\2\2\26\27"+
		"\5\4\3\2\27\30\7&\2\2\30\31\5\2\2\2\31\34\3\2\2\2\32\34\7\2\2\3\33\26"+
		"\3\2\2\2\33\32\3\2\2\2\34\3\3\2\2\2\35\36\7\3\2\2\36\37\7&\2\2\37(\5\6"+
		"\4\2 !\7\4\2\2!\"\7&\2\2\"(\5\6\4\2#$\7\25\2\2$%\7&\2\2%&\7,\2\2&(\7\6"+
		"\2\2\'\35\3\2\2\2\' \3\2\2\2\'#\3\2\2\2(\5\3\2\2\2)*\7,\2\2*>\7\6\2\2"+
		"+,\7,\2\2,-\7&\2\2-.\7\b\2\2./\7&\2\2/\60\7\26\2\2\60\61\7&\2\2\61>\5"+
		"\b\5\2\62\63\7,\2\2\63\64\7&\2\2\64\65\7\b\2\2\65\66\7&\2\2\66>\5\b\5"+
		"\2\678\7,\2\289\7&\2\29:\7\17\2\2:;\5\n\6\2;<\7\6\2\2<>\3\2\2\2=)\3\2"+
		"\2\2=+\3\2\2\2=\62\3\2\2\2=\67\3\2\2\2>\7\3\2\2\2?@\7\21\2\2@A\7&\2\2"+
		"AB\5\20\t\2BC\7\6\2\2CQ\3\2\2\2DE\7\23\2\2EF\7&\2\2FG\7$\2\2GH\5\22\n"+
		"\2HI\7%\2\2IJ\7\6\2\2JQ\3\2\2\2KL\7\22\2\2LM\7&\2\2MN\5\24\13\2NO\7\6"+
		"\2\2OQ\3\2\2\2P?\3\2\2\2PD\3\2\2\2PK\3\2\2\2Q\t\3\2\2\2RS\7\5\2\2ST\7"+
		"&\2\2T]\5\4\3\2UV\7&\2\2VW\7\20\2\2WX\7&\2\2XY\5\f\7\2YZ\7&\2\2Z[\5\4"+
		"\3\2[]\3\2\2\2\\R\3\2\2\2\\U\3\2\2\2]\13\3\2\2\2^_\7,\2\2_`\7&\2\2`a\5"+
		"\16\b\2ab\7\5\2\2bf\3\2\2\2cd\7,\2\2df\7\5\2\2e^\3\2\2\2ec\3\2\2\2f\r"+
		"\3\2\2\2gh\7\'\2\2hi\7,\2\2ij\7&\2\2jp\5\16\b\2kl\7\31\2\2lm\7&\2\2mp"+
		"\7,\2\2np\3\2\2\2og\3\2\2\2ok\3\2\2\2on\3\2\2\2p\17\3\2\2\2q\u00a6\7+"+
		"\2\2r\u00a6\7,\2\2st\7+\2\2tu\7&\2\2uv\7\37\2\2vw\7&\2\2w\u00a6\5\20\t"+
		"\2xy\7+\2\2yz\7&\2\2z{\7 \2\2{|\7&\2\2|\u00a6\5\20\t\2}~\7+\2\2~\177\7"+
		"&\2\2\177\u0080\7#\2\2\u0080\u0081\7&\2\2\u0081\u00a6\5\20\t\2\u0082\u0083"+
		"\7+\2\2\u0083\u0084\7&\2\2\u0084\u0085\7\"\2\2\u0085\u0086\7&\2\2\u0086"+
		"\u00a6\5\20\t\2\u0087\u0088\7+\2\2\u0088\u0089\7&\2\2\u0089\u008a\7!\2"+
		"\2\u008a\u008b\7&\2\2\u008b\u00a6\5\20\t\2\u008c\u008d\7,\2\2\u008d\u008e"+
		"\7&\2\2\u008e\u008f\7\37\2\2\u008f\u0090\7&\2\2\u0090\u00a6\5\20\t\2\u0091"+
		"\u0092\7,\2\2\u0092\u0093\7&\2\2\u0093\u0094\7 \2\2\u0094\u0095\7&\2\2"+
		"\u0095\u00a6\5\20\t\2\u0096\u0097\7,\2\2\u0097\u0098\7&\2\2\u0098\u0099"+
		"\7#\2\2\u0099\u009a\7&\2\2\u009a\u00a6\5\20\t\2\u009b\u009c\7,\2\2\u009c"+
		"\u009d\7&\2\2\u009d\u009e\7\"\2\2\u009e\u009f\7&\2\2\u009f\u00a6\5\20"+
		"\t\2\u00a0\u00a1\7,\2\2\u00a1\u00a2\7&\2\2\u00a2\u00a3\7!\2\2\u00a3\u00a4"+
		"\7&\2\2\u00a4\u00a6\5\20\t\2\u00a5q\3\2\2\2\u00a5r\3\2\2\2\u00a5s\3\2"+
		"\2\2\u00a5x\3\2\2\2\u00a5}\3\2\2\2\u00a5\u0082\3\2\2\2\u00a5\u0087\3\2"+
		"\2\2\u00a5\u008c\3\2\2\2\u00a5\u0091\3\2\2\2\u00a5\u0096\3\2\2\2\u00a5"+
		"\u009b\3\2\2\2\u00a5\u00a0\3\2\2\2\u00a6\21\3\2\2\2\u00a7\u00a8\b\n\1"+
		"\2\u00a8\u00ae\7(\2\2\u00a9\u00ae\7)\2\2\u00aa\u00ab\7\32\2\2\u00ab\u00ac"+
		"\7&\2\2\u00ac\u00ae\5\22\n\3\u00ad\u00a7\3\2\2\2\u00ad\u00a9\3\2\2\2\u00ad"+
		"\u00aa\3\2\2\2\u00ae\u00bb\3\2\2\2\u00af\u00b0\f\5\2\2\u00b0\u00b1\7&"+
		"\2\2\u00b1\u00b2\7\30\2\2\u00b2\u00b3\7&\2\2\u00b3\u00ba\5\22\n\6\u00b4"+
		"\u00b5\f\4\2\2\u00b5\u00b6\7&\2\2\u00b6\u00b7\7\31\2\2\u00b7\u00b8\7&"+
		"\2\2\u00b8\u00ba\5\22\n\5\u00b9\u00af\3\2\2\2\u00b9\u00b4\3\2\2\2\u00ba"+
		"\u00bd\3\2\2\2\u00bb\u00b9\3\2\2\2\u00bb\u00bc\3\2\2\2\u00bc\23\3\2\2"+
		"\2\u00bd\u00bb\3\2\2\2\u00be\u00cb\7-\2\2\u00bf\u00cb\7,\2\2\u00c0\u00c1"+
		"\7-\2\2\u00c1\u00c2\7&\2\2\u00c2\u00c3\7\37\2\2\u00c3\u00c4\7&\2\2\u00c4"+
		"\u00cb\5\24\13\2\u00c5\u00c6\7,\2\2\u00c6\u00c7\7&\2\2\u00c7\u00c8\7\37"+
		"\2\2\u00c8\u00c9\7&\2\2\u00c9\u00cb\5\24\13\2\u00ca\u00be\3\2\2\2\u00ca"+
		"\u00bf\3\2\2\2\u00ca\u00c0\3\2\2\2\u00ca\u00c5\3\2\2\2\u00cb\25\3\2\2"+
		"\2\16\33\'=P\\eo\u00a5\u00ad\u00b9\u00bb\u00ca";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}