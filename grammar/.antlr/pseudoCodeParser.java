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
			null, null, "'expresi\u00F3n l\u00F3gica'", null, "'imprimir'", null, 
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
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		ExprContext _localctx = new ExprContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_expr);
		try {
			setState(33);
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
			setState(55);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(35);
				match(VAR);
				setState(36);
				match(END);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(37);
				match(VAR);
				setState(38);
				match(SPACE);
				setState(39);
				match(ASSIG);
				setState(40);
				match(SPACE);
				setState(41);
				match(VALUE);
				setState(42);
				match(SPACE);
				setState(43);
				element();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(44);
				match(VAR);
				setState(45);
				match(SPACE);
				setState(46);
				match(ASSIG);
				setState(47);
				match(SPACE);
				setState(48);
				element();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(49);
				match(VAR);
				setState(50);
				match(SPACE);
				setState(51);
				match(FUNCT);
				setState(52);
				func_def();
				setState(53);
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
			setState(74);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUMBERDEF:
				enterOuterAlt(_localctx, 1);
				{
				setState(57);
				match(NUMBERDEF);
				setState(58);
				match(SPACE);
				setState(59);
				num_expr();
				setState(60);
				match(END);
				}
				break;
			case BOOLDEF:
				enterOuterAlt(_localctx, 2);
				{
				setState(62);
				match(BOOLDEF);
				setState(63);
				match(SPACE);
				setState(64);
				match(OPQUEST);
				setState(65);
				bool_expr(0);
				setState(66);
				match(CLQUEST);
				setState(67);
				match(END);
				}
				break;
			case STRINGDEF:
				enterOuterAlt(_localctx, 3);
				{
				setState(69);
				match(STRINGDEF);
				setState(70);
				match(SPACE);
				setState(71);
				str_expr();
				setState(72);
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
			setState(86);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SENTENCE:
				enterOuterAlt(_localctx, 1);
				{
				setState(76);
				match(SENTENCE);
				setState(77);
				match(SPACE);
				setState(78);
				expr();
				}
				break;
			case SPACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(79);
				match(SPACE);
				setState(80);
				match(PARAM);
				setState(81);
				match(SPACE);
				setState(82);
				param_def();
				setState(83);
				match(SPACE);
				setState(84);
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
			setState(95);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(88);
				match(VAR);
				setState(89);
				match(SPACE);
				setState(90);
				multi_param_def();
				setState(91);
				match(SENTENCE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(93);
				match(VAR);
				setState(94);
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
			setState(105);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case COMA:
				enterOuterAlt(_localctx, 1);
				{
				setState(97);
				match(COMA);
				setState(98);
				match(VAR);
				setState(99);
				match(SPACE);
				setState(100);
				multi_param_def();
				}
				break;
			case AND:
				enterOuterAlt(_localctx, 2);
				{
				setState(101);
				match(AND);
				setState(102);
				match(SPACE);
				setState(103);
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
			setState(159);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(107);
				match(NUMBER);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(108);
				match(VAR);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(109);
				match(NUMBER);
				setState(110);
				match(SPACE);
				setState(111);
				match(ADD);
				setState(112);
				match(SPACE);
				setState(113);
				num_expr();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(114);
				match(NUMBER);
				setState(115);
				match(SPACE);
				setState(116);
				match(SUB);
				setState(117);
				match(SPACE);
				setState(118);
				num_expr();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(119);
				match(NUMBER);
				setState(120);
				match(SPACE);
				setState(121);
				match(MULT);
				setState(122);
				match(SPACE);
				setState(123);
				num_expr();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(124);
				match(NUMBER);
				setState(125);
				match(SPACE);
				setState(126);
				match(DIV);
				setState(127);
				match(SPACE);
				setState(128);
				num_expr();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(129);
				match(NUMBER);
				setState(130);
				match(SPACE);
				setState(131);
				match(MOD);
				setState(132);
				match(SPACE);
				setState(133);
				num_expr();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(134);
				match(VAR);
				setState(135);
				match(SPACE);
				setState(136);
				match(ADD);
				setState(137);
				match(SPACE);
				setState(138);
				num_expr();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(139);
				match(VAR);
				setState(140);
				match(SPACE);
				setState(141);
				match(SUB);
				setState(142);
				match(SPACE);
				setState(143);
				num_expr();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(144);
				match(VAR);
				setState(145);
				match(SPACE);
				setState(146);
				match(MULT);
				setState(147);
				match(SPACE);
				setState(148);
				num_expr();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(149);
				match(VAR);
				setState(150);
				match(SPACE);
				setState(151);
				match(DIV);
				setState(152);
				match(SPACE);
				setState(153);
				num_expr();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(154);
				match(VAR);
				setState(155);
				match(SPACE);
				setState(156);
				match(MOD);
				setState(157);
				match(SPACE);
				setState(158);
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
			setState(167);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TRUE:
				{
				setState(162);
				match(TRUE);
				}
				break;
			case FALSE:
				{
				setState(163);
				match(FALSE);
				}
				break;
			case NOT:
				{
				setState(164);
				match(NOT);
				setState(165);
				match(SPACE);
				setState(166);
				bool_expr(1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(181);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(179);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
					case 1:
						{
						_localctx = new Bool_exprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_bool_expr);
						setState(169);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(170);
						match(SPACE);
						setState(171);
						match(OR);
						setState(172);
						match(SPACE);
						setState(173);
						bool_expr(4);
						}
						break;
					case 2:
						{
						_localctx = new Bool_exprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_bool_expr);
						setState(174);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(175);
						match(SPACE);
						setState(176);
						match(AND);
						setState(177);
						match(SPACE);
						setState(178);
						bool_expr(3);
						}
						break;
					}
					} 
				}
				setState(183);
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
		public TerminalNode SPACE() { return getToken(pseudoCodeParser.SPACE, 0); }
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
			setState(189);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(184);
				match(STRING);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(185);
				match(STRING);
				setState(186);
				match(SPACE);
				setState(187);
				match(ADD);
				setState(188);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3-\u00c2\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\3\2\3\2\3\2\3\2\3\2\5\2\34\n\2\3\3\3\3\3\3\3\3\3\3\3\3\5\3$\n\3\3"+
		"\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4"+
		"\3\4\3\4\5\4:\n\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5"+
		"\3\5\3\5\3\5\3\5\5\5M\n\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6"+
		"Y\n\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7b\n\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\5\bl\n\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3"+
		"\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\5\t\u00a2\n\t\3\n\3\n\3\n\3\n\3\n\3\n\5\n\u00aa\n\n\3\n\3"+
		"\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\7\n\u00b6\n\n\f\n\16\n\u00b9\13\n\3"+
		"\13\3\13\3\13\3\13\3\13\5\13\u00c0\n\13\3\13\2\3\22\f\2\4\6\b\n\f\16\20"+
		"\22\24\2\2\2\u00d2\2\33\3\2\2\2\4#\3\2\2\2\69\3\2\2\2\bL\3\2\2\2\nX\3"+
		"\2\2\2\fa\3\2\2\2\16k\3\2\2\2\20\u00a1\3\2\2\2\22\u00a9\3\2\2\2\24\u00bf"+
		"\3\2\2\2\26\27\5\4\3\2\27\30\7&\2\2\30\31\5\2\2\2\31\34\3\2\2\2\32\34"+
		"\7\2\2\3\33\26\3\2\2\2\33\32\3\2\2\2\34\3\3\2\2\2\35\36\7\3\2\2\36\37"+
		"\7&\2\2\37$\5\6\4\2 !\7\4\2\2!\"\7&\2\2\"$\5\6\4\2#\35\3\2\2\2# \3\2\2"+
		"\2$\5\3\2\2\2%&\7,\2\2&:\7\6\2\2\'(\7,\2\2()\7&\2\2)*\7\b\2\2*+\7&\2\2"+
		"+,\7\26\2\2,-\7&\2\2-:\5\b\5\2./\7,\2\2/\60\7&\2\2\60\61\7\b\2\2\61\62"+
		"\7&\2\2\62:\5\b\5\2\63\64\7,\2\2\64\65\7&\2\2\65\66\7\17\2\2\66\67\5\n"+
		"\6\2\678\7\6\2\28:\3\2\2\29%\3\2\2\29\'\3\2\2\29.\3\2\2\29\63\3\2\2\2"+
		":\7\3\2\2\2;<\7\21\2\2<=\7&\2\2=>\5\20\t\2>?\7\6\2\2?M\3\2\2\2@A\7\23"+
		"\2\2AB\7&\2\2BC\7$\2\2CD\5\22\n\2DE\7%\2\2EF\7\6\2\2FM\3\2\2\2GH\7\22"+
		"\2\2HI\7&\2\2IJ\5\24\13\2JK\7\6\2\2KM\3\2\2\2L;\3\2\2\2L@\3\2\2\2LG\3"+
		"\2\2\2M\t\3\2\2\2NO\7\5\2\2OP\7&\2\2PY\5\4\3\2QR\7&\2\2RS\7\20\2\2ST\7"+
		"&\2\2TU\5\f\7\2UV\7&\2\2VW\5\4\3\2WY\3\2\2\2XN\3\2\2\2XQ\3\2\2\2Y\13\3"+
		"\2\2\2Z[\7,\2\2[\\\7&\2\2\\]\5\16\b\2]^\7\5\2\2^b\3\2\2\2_`\7,\2\2`b\7"+
		"\5\2\2aZ\3\2\2\2a_\3\2\2\2b\r\3\2\2\2cd\7\'\2\2de\7,\2\2ef\7&\2\2fl\5"+
		"\16\b\2gh\7\31\2\2hi\7&\2\2il\7,\2\2jl\3\2\2\2kc\3\2\2\2kg\3\2\2\2kj\3"+
		"\2\2\2l\17\3\2\2\2m\u00a2\7+\2\2n\u00a2\7,\2\2op\7+\2\2pq\7&\2\2qr\7\37"+
		"\2\2rs\7&\2\2s\u00a2\5\20\t\2tu\7+\2\2uv\7&\2\2vw\7 \2\2wx\7&\2\2x\u00a2"+
		"\5\20\t\2yz\7+\2\2z{\7&\2\2{|\7#\2\2|}\7&\2\2}\u00a2\5\20\t\2~\177\7+"+
		"\2\2\177\u0080\7&\2\2\u0080\u0081\7\"\2\2\u0081\u0082\7&\2\2\u0082\u00a2"+
		"\5\20\t\2\u0083\u0084\7+\2\2\u0084\u0085\7&\2\2\u0085\u0086\7!\2\2\u0086"+
		"\u0087\7&\2\2\u0087\u00a2\5\20\t\2\u0088\u0089\7,\2\2\u0089\u008a\7&\2"+
		"\2\u008a\u008b\7\37\2\2\u008b\u008c\7&\2\2\u008c\u00a2\5\20\t\2\u008d"+
		"\u008e\7,\2\2\u008e\u008f\7&\2\2\u008f\u0090\7 \2\2\u0090\u0091\7&\2\2"+
		"\u0091\u00a2\5\20\t\2\u0092\u0093\7,\2\2\u0093\u0094\7&\2\2\u0094\u0095"+
		"\7#\2\2\u0095\u0096\7&\2\2\u0096\u00a2\5\20\t\2\u0097\u0098\7,\2\2\u0098"+
		"\u0099\7&\2\2\u0099\u009a\7\"\2\2\u009a\u009b\7&\2\2\u009b\u00a2\5\20"+
		"\t\2\u009c\u009d\7,\2\2\u009d\u009e\7&\2\2\u009e\u009f\7!\2\2\u009f\u00a0"+
		"\7&\2\2\u00a0\u00a2\5\20\t\2\u00a1m\3\2\2\2\u00a1n\3\2\2\2\u00a1o\3\2"+
		"\2\2\u00a1t\3\2\2\2\u00a1y\3\2\2\2\u00a1~\3\2\2\2\u00a1\u0083\3\2\2\2"+
		"\u00a1\u0088\3\2\2\2\u00a1\u008d\3\2\2\2\u00a1\u0092\3\2\2\2\u00a1\u0097"+
		"\3\2\2\2\u00a1\u009c\3\2\2\2\u00a2\21\3\2\2\2\u00a3\u00a4\b\n\1\2\u00a4"+
		"\u00aa\7(\2\2\u00a5\u00aa\7)\2\2\u00a6\u00a7\7\32\2\2\u00a7\u00a8\7&\2"+
		"\2\u00a8\u00aa\5\22\n\3\u00a9\u00a3\3\2\2\2\u00a9\u00a5\3\2\2\2\u00a9"+
		"\u00a6\3\2\2\2\u00aa\u00b7\3\2\2\2\u00ab\u00ac\f\5\2\2\u00ac\u00ad\7&"+
		"\2\2\u00ad\u00ae\7\30\2\2\u00ae\u00af\7&\2\2\u00af\u00b6\5\22\n\6\u00b0"+
		"\u00b1\f\4\2\2\u00b1\u00b2\7&\2\2\u00b2\u00b3\7\31\2\2\u00b3\u00b4\7&"+
		"\2\2\u00b4\u00b6\5\22\n\5\u00b5\u00ab\3\2\2\2\u00b5\u00b0\3\2\2\2\u00b6"+
		"\u00b9\3\2\2\2\u00b7\u00b5\3\2\2\2\u00b7\u00b8\3\2\2\2\u00b8\23\3\2\2"+
		"\2\u00b9\u00b7\3\2\2\2\u00ba\u00c0\7-\2\2\u00bb\u00bc\7-\2\2\u00bc\u00bd"+
		"\7&\2\2\u00bd\u00be\7\37\2\2\u00be\u00c0\5\24\13\2\u00bf\u00ba\3\2\2\2"+
		"\u00bf\u00bb\3\2\2\2\u00c0\25\3\2\2\2\16\33#9LXak\u00a1\u00a9\u00b5\u00b7"+
		"\u00bf";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}