// Generated from /home/lucholuis123/pseudoCode/grammar/pseudoCodeLexer.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class pseudoCodeLexer extends Lexer {
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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"DEF", "REWRITE", "SENTENCE", "END", "DO", "ASSIG", "IS", "ELSE", "EQUAL", 
			"THEN", "WHILE", "LIST", "FUNCT", "PARAM", "NUMBERDEF", "STRINGDEF", 
			"BOOLDEF", "INDEX", "PRINT", "VALUE", "CONTINUE", "OR", "AND", "NOT", 
			"GT", "LT", "GTE", "LTE", "ADD", "SUB", "MOD", "DIV", "MULT", "OPQUEST", 
			"CLQUEST", "SPACE", "COMA", "TRUE", "FALSE", "COMMENT", "DIGIT", "NUMBER", 
			"ID", "WORDS", "VAR", "STRING"
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


	public pseudoCodeLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "pseudoCodeLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2-\u02ab\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3"+
		"\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7"+
		"\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7\u009c\n\7\3\b"+
		"\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3"+
		"\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n"+
		"\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\5\n\u00cb\n\n\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\5\13"+
		"\u00de\n\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3"+
		"\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\5\17\u0128\n\17\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20"+
		"\3\20\3\20\5\20\u0137\n\20\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\5\21\u014e"+
		"\n\21\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22"+
		"\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\3\23\5\23\u017d\n\23\3\24\3\24\3\24\3\24\3\24\3\24\3\24"+
		"\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25"+
		"\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\5\25\u019c\n\25\3\26\3\26\3\26"+
		"\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3\30\3\30\3\31\3\31\3\31"+
		"\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32"+
		"\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\5\32\u01c8\n\32"+
		"\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33"+
		"\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\5\33\u01e3\n\33"+
		"\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34"+
		"\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34"+
		"\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\5\34"+
		"\u020e\n\34\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35"+
		"\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35"+
		"\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35"+
		"\3\35\5\35\u0239\n\35\3\36\3\36\3\36\3\36\3\37\3\37\3\37\3\37\3\37\3\37"+
		"\3 \3 \3 \3 \3 \3 \3 \3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\5!\u0259"+
		"\n!\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\5\"\u026a"+
		"\n\"\3#\3#\3$\3$\3%\3%\3&\3&\3\'\3\'\3\'\3\'\3\'\3\'\3\'\3(\3(\3(\3(\3"+
		"(\3(\3)\3)\7)\u0283\n)\f)\16)\u0286\13)\3)\3)\3*\3*\3+\6+\u028d\n+\r+"+
		"\16+\u028e\3+\3+\6+\u0293\n+\r+\16+\u0294\5+\u0297\n+\3,\6,\u029a\n,\r"+
		",\16,\u029b\3-\7-\u029f\n-\f-\16-\u02a2\13-\3.\3.\3.\3.\3/\3/\3/\3/\3"+
		"\u0284\2\60\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33"+
		"\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67"+
		"\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S\2U+W\2Y\2[,]-\3\2\5\3\2\62;\4\2C"+
		"\\c|\5\2\"\"C\\c|\2\u02bf\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2"+
		"\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2"+
		"\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3"+
		"\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2"+
		"\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67"+
		"\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2"+
		"\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2"+
		"\2Q\3\2\2\2\2U\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\3_\3\2\2\2\5c\3\2\2\2\7l"+
		"\3\2\2\2\tn\3\2\2\2\13p\3\2\2\2\r\u009b\3\2\2\2\17\u009d\3\2\2\2\21\u00a0"+
		"\3\2\2\2\23\u00ca\3\2\2\2\25\u00dd\3\2\2\2\27\u00df\3\2\2\2\31\u00e8\3"+
		"\2\2\2\33\u00f4\3\2\2\2\35\u0127\3\2\2\2\37\u0136\3\2\2\2!\u014d\3\2\2"+
		"\2#\u014f\3\2\2\2%\u017c\3\2\2\2\'\u017e\3\2\2\2)\u019b\3\2\2\2+\u019d"+
		"\3\2\2\2-\u01a7\3\2\2\2/\u01a9\3\2\2\2\61\u01ab\3\2\2\2\63\u01c7\3\2\2"+
		"\2\65\u01e2\3\2\2\2\67\u020d\3\2\2\29\u0238\3\2\2\2;\u023a\3\2\2\2=\u023e"+
		"\3\2\2\2?\u0244\3\2\2\2A\u0258\3\2\2\2C\u0269\3\2\2\2E\u026b\3\2\2\2G"+
		"\u026d\3\2\2\2I\u026f\3\2\2\2K\u0271\3\2\2\2M\u0273\3\2\2\2O\u027a\3\2"+
		"\2\2Q\u0280\3\2\2\2S\u0289\3\2\2\2U\u028c\3\2\2\2W\u0299\3\2\2\2Y\u02a0"+
		"\3\2\2\2[\u02a3\3\2\2\2]\u02a7\3\2\2\2_`\7U\2\2`a\7g\2\2ab\7c\2\2b\4\3"+
		"\2\2\2cd\7J\2\2de\7c\2\2ef\7i\2\2fg\7c\2\2gh\7\"\2\2hi\7s\2\2ij\7w\2\2"+
		"jk\7g\2\2k\6\3\2\2\2lm\7<\2\2m\b\3\2\2\2no\7\60\2\2o\n\3\2\2\2pq\7j\2"+
		"\2qr\7c\2\2rs\7i\2\2st\7c\2\2t\f\3\2\2\2uv\7k\2\2vw\7i\2\2wx\7w\2\2xy"+
		"\7c\2\2yz\7n\2\2z{\7\"\2\2{\u009c\7c\2\2|}\7k\2\2}~\7i\2\2~\177\7w\2\2"+
		"\177\u0080\7c\2\2\u0080\u0081\7n\2\2\u0081\u0082\7\"\2\2\u0082\u0083\7"+
		"c\2\2\u0083\u009c\7n\2\2\u0084\u0085\7u\2\2\u0085\u0086\7g\2\2\u0086\u0087"+
		"\7c\2\2\u0087\u0088\7\"\2\2\u0088\u0089\7k\2\2\u0089\u008a\7i\2\2\u008a"+
		"\u008b\7w\2\2\u008b\u008c\7c\2\2\u008c\u008d\7n\2\2\u008d\u008e\7\"\2"+
		"\2\u008e\u009c\7c\2\2\u008f\u0090\7u\2\2\u0090\u0091\7g\2\2\u0091\u0092"+
		"\7c\2\2\u0092\u0093\7\"\2\2\u0093\u0094\7k\2\2\u0094\u0095\7i\2\2\u0095"+
		"\u0096\7w\2\2\u0096\u0097\7c\2\2\u0097\u0098\7n\2\2\u0098\u0099\7\"\2"+
		"\2\u0099\u009a\7c\2\2\u009a\u009c\7n\2\2\u009bu\3\2\2\2\u009b|\3\2\2\2"+
		"\u009b\u0084\3\2\2\2\u009b\u008f\3\2\2\2\u009c\16\3\2\2\2\u009d\u009e"+
		"\7g\2\2\u009e\u009f\7u\2\2\u009f\20\3\2\2\2\u00a0\u00a1\7r\2\2\u00a1\u00a2"+
		"\7q\2\2\u00a2\u00a3\7t\2\2\u00a3\u00a4\7\"\2\2\u00a4\u00a5\7g\2\2\u00a5"+
		"\u00a6\7n\2\2\u00a6\u00a7\7\"\2\2\u00a7\u00a8\7e\2\2\u00a8\u00a9\7q\2"+
		"\2\u00a9\u00aa\7p\2\2\u00aa\u00ab\7v\2\2\u00ab\u00ac\7t\2\2\u00ac\u00ad"+
		"\7c\2\2\u00ad\u00ae\7t\2\2\u00ae\u00af\7k\2\2\u00af\u00b0\7q\2\2\u00b0"+
		"\22\3\2\2\2\u00b1\u00b2\7g\2\2\u00b2\u00b3\7u\2\2\u00b3\u00b4\7\"\2\2"+
		"\u00b4\u00b5\7k\2\2\u00b5\u00b6\7i\2\2\u00b6\u00b7\7w\2\2\u00b7\u00b8"+
		"\7c\2\2\u00b8\u00b9\7n\2\2\u00b9\u00ba\7\"\2\2\u00ba\u00bb\7s\2\2\u00bb"+
		"\u00bc\7w\2\2\u00bc\u00cb\7g\2\2\u00bd\u00be\7u\2\2\u00be\u00bf\7g\2\2"+
		"\u00bf\u00c0\7c\2\2\u00c0\u00c1\7\"\2\2\u00c1\u00c2\7k\2\2\u00c2\u00c3"+
		"\7i\2\2\u00c3\u00c4\7w\2\2\u00c4\u00c5\7c\2\2\u00c5\u00c6\7n\2\2\u00c6"+
		"\u00c7\7\"\2\2\u00c7\u00c8\7s\2\2\u00c8\u00c9\7w\2\2\u00c9\u00cb\7g\2"+
		"\2\u00ca\u00b1\3\2\2\2\u00ca\u00bd\3\2\2\2\u00cb\24\3\2\2\2\u00cc\u00cd"+
		"\7u\2\2\u00cd\u00ce\7k\2\2\u00ce\u00cf\7\"\2\2\u00cf\u00d0\7g\2\2\u00d0"+
		"\u00d1\7u\2\2\u00d1\u00d2\7\"\2\2\u00d2\u00d3\7c\2\2\u00d3\u00d4\7u\2"+
		"\2\u00d4\u00de\7\u00ef\2\2\u00d5\u00d6\7g\2\2\u00d6\u00d7\7p\2\2\u00d7"+
		"\u00d8\7v\2\2\u00d8\u00d9\7q\2\2\u00d9\u00da\7p\2\2\u00da\u00db\7e\2\2"+
		"\u00db\u00dc\7g\2\2\u00dc\u00de\7u\2\2\u00dd\u00cc\3\2\2\2\u00dd\u00d5"+
		"\3\2\2\2\u00de\26\3\2\2\2\u00df\u00e0\7o\2\2\u00e0\u00e1\7k\2\2\u00e1"+
		"\u00e2\7g\2\2\u00e2\u00e3\7p\2\2\u00e3\u00e4\7v\2\2\u00e4\u00e5\7t\2\2"+
		"\u00e5\u00e6\7c\2\2\u00e6\u00e7\7u\2\2\u00e7\30\3\2\2\2\u00e8\u00e9\7"+
		"n\2\2\u00e9\u00ea\7c\2\2\u00ea\u00eb\7\"\2\2\u00eb\u00ec\7n\2\2\u00ec"+
		"\u00ed\7k\2\2\u00ed\u00ee\7u\2\2\u00ee\u00ef\7v\2\2\u00ef\u00f0\7c\2\2"+
		"\u00f0\u00f1\7\"\2\2\u00f1\u00f2\7f\2\2\u00f2\u00f3\7g\2\2\u00f3\32\3"+
		"\2\2\2\u00f4\u00f5\7n\2\2\u00f5\u00f6\7c\2\2\u00f6\u00f7\7\"\2\2\u00f7"+
		"\u00f8\7h\2\2\u00f8\u00f9\7w\2\2\u00f9\u00fa\7p\2\2\u00fa\u00fb\7e\2\2"+
		"\u00fb\u00fc\7k\2\2\u00fc\u00fd\7\u00f5\2\2\u00fd\u00fe\7p\2\2\u00fe\u00ff"+
		"\7\"\2\2\u00ff\u0100\7s\2\2\u0100\u0101\7w\2\2\u0101\u0102\7g\2\2\u0102"+
		"\34\3\2\2\2\u0103\u0104\7v\2\2\u0104\u0105\7q\2\2\u0105\u0106\7o\2\2\u0106"+
		"\u0107\7c\2\2\u0107\u0108\7\"\2\2\u0108\u0109\7n\2\2\u0109\u010a\7q\2"+
		"\2\u010a\u010b\7u\2\2\u010b\u010c\7\"\2\2\u010c\u010d\7r\2\2\u010d\u010e"+
		"\7c\2\2\u010e\u010f\7t\2\2\u010f\u0110\7\u00e3\2\2\u0110\u0111\7o\2\2"+
		"\u0111\u0112\7g\2\2\u0112\u0113\7v\2\2\u0113\u0114\7t\2\2\u0114\u0115"+
		"\7q\2\2\u0115\u0128\7u\2\2\u0116\u0117\7v\2\2\u0117\u0118\7q\2\2\u0118"+
		"\u0119\7o\2\2\u0119\u011a\7c\2\2\u011a\u011b\7\"\2\2\u011b\u011c\7g\2"+
		"\2\u011c\u011d\7n\2\2\u011d\u011e\7\"\2\2\u011e\u011f\7r\2\2\u011f\u0120"+
		"\7c\2\2\u0120\u0121\7t\2\2\u0121\u0122\7\u00e3\2\2\u0122\u0123\7o\2\2"+
		"\u0123\u0124\7g\2\2\u0124\u0125\7v\2\2\u0125\u0126\7t\2\2\u0126\u0128"+
		"\7q\2\2\u0127\u0103\3\2\2\2\u0127\u0116\3\2\2\2\u0128\36\3\2\2\2\u0129"+
		"\u012a\7p\2\2\u012a\u012b\7\u00fc\2\2\u012b\u012c\7o\2\2\u012c\u012d\7"+
		"g\2\2\u012d\u012e\7t\2\2\u012e\u0137\7q\2\2\u012f\u0130\7p\2\2\u0130\u0131"+
		"\7\u00fc\2\2\u0131\u0132\7o\2\2\u0132\u0133\7g\2\2\u0133\u0134\7t\2\2"+
		"\u0134\u0135\7q\2\2\u0135\u0137\7u\2\2\u0136\u0129\3\2\2\2\u0136\u012f"+
		"\3\2\2\2\u0137 \3\2\2\2\u0138\u0139\7r\2\2\u0139\u013a\7c\2\2\u013a\u013b"+
		"\7n\2\2\u013b\u013c\7c\2\2\u013c\u013d\7d\2\2\u013d\u013e\7t\2\2\u013e"+
		"\u014e\7c\2\2\u013f\u0140\7r\2\2\u0140\u0141\7c\2\2\u0141\u0142\7n\2\2"+
		"\u0142\u0143\7c\2\2\u0143\u0144\7d\2\2\u0144\u0145\7t\2\2\u0145\u0146"+
		"\7c\2\2\u0146\u014e\7u\2\2\u0147\u0148\7e\2\2\u0148\u0149\7c\2\2\u0149"+
		"\u014a\7f\2\2\u014a\u014b\7g\2\2\u014b\u014c\7p\2\2\u014c\u014e\7c\2\2"+
		"\u014d\u0138\3\2\2\2\u014d\u013f\3\2\2\2\u014d\u0147\3\2\2\2\u014e\"\3"+
		"\2\2\2\u014f\u0150\7g\2\2\u0150\u0151\7z\2\2\u0151\u0152\7r\2\2\u0152"+
		"\u0153\7t\2\2\u0153\u0154\7g\2\2\u0154\u0155\7u\2\2\u0155\u0156\7k\2\2"+
		"\u0156\u0157\7\u00f5\2\2\u0157\u0158\7p\2\2\u0158\u0159\7\"\2\2\u0159"+
		"\u015a\7n\2\2\u015a\u015b\7\u00f5\2\2\u015b\u015c\7i\2\2\u015c\u015d\7"+
		"k\2\2\u015d\u015e\7e\2\2\u015e\u015f\7c\2\2\u015f$\3\2\2\2\u0160\u0161"+
		"\7g\2\2\u0161\u017d\7p\2\2\u0162\u0163\7g\2\2\u0163\u0164\7p\2\2\u0164"+
		"\u0165\7\"\2\2\u0165\u0166\7n\2\2\u0166\u0167\7c\2\2\u0167\u0168\7\"\2"+
		"\2\u0168\u0169\7r\2\2\u0169\u016a\7q\2\2\u016a\u016b\7u\2\2\u016b\u016c"+
		"\7k\2\2\u016c\u016d\7e\2\2\u016d\u016e\7k\2\2\u016e\u016f\7\u00f5\2\2"+
		"\u016f\u017d\7p\2\2\u0170\u0171\7g\2\2\u0171\u0172\7p\2\2\u0172\u0173"+
		"\7\"\2\2\u0173\u0174\7g\2\2\u0174\u0175\7n\2\2\u0175\u0176\7\"\2\2\u0176"+
		"\u0177\7k\2\2\u0177\u0178\7p\2\2\u0178\u0179\7f\2\2\u0179\u017a\7k\2\2"+
		"\u017a\u017b\7e\2\2\u017b\u017d\7g\2\2\u017c\u0160\3\2\2\2\u017c\u0162"+
		"\3\2\2\2\u017c\u0170\3\2\2\2\u017d&\3\2\2\2\u017e\u017f\7k\2\2\u017f\u0180"+
		"\7o\2\2\u0180\u0181\7r\2\2\u0181\u0182\7t\2\2\u0182\u0183\7k\2\2\u0183"+
		"\u0184\7o\2\2\u0184\u0185\7k\2\2\u0185\u0186\7t\2\2\u0186(\3\2\2\2\u0187"+
		"\u0188\7x\2\2\u0188\u0189\7c\2\2\u0189\u018a\7n\2\2\u018a\u018b\7q\2\2"+
		"\u018b\u018c\7t\2\2\u018c\u018d\7\"\2\2\u018d\u018e\7f\2\2\u018e\u018f"+
		"\7g\2\2\u018f\u019c\7n\2\2\u0190\u0191\7x\2\2\u0191\u0192\7c\2\2\u0192"+
		"\u0193\7n\2\2\u0193\u0194\7q\2\2\u0194\u0195\7t\2\2\u0195\u0196\7\"\2"+
		"\2\u0196\u0197\7f\2\2\u0197\u0198\7g\2\2\u0198\u0199\7\"\2\2\u0199\u019a"+
		"\7n\2\2\u019a\u019c\7c\2\2\u019b\u0187\3\2\2\2\u019b\u0190\3\2\2\2\u019c"+
		"*\3\2\2\2\u019d\u019e\7E\2\2\u019e\u019f\7q\2\2\u019f\u01a0\7p\2\2\u01a0"+
		"\u01a1\7v\2\2\u01a1\u01a2\7k\2\2\u01a2\u01a3\7p\2\2\u01a3\u01a4\7w\2\2"+
		"\u01a4\u01a5\7c\2\2\u01a5\u01a6\7t\2\2\u01a6,\3\2\2\2\u01a7\u01a8\7q\2"+
		"\2\u01a8.\3\2\2\2\u01a9\u01aa\7{\2\2\u01aa\60\3\2\2\2\u01ab\u01ac\7p\2"+
		"\2\u01ac\u01ad\7q\2\2\u01ad\62\3\2\2\2\u01ae\u01af\7u\2\2\u01af\u01b0"+
		"\7g\2\2\u01b0\u01b1\7c\2\2\u01b1\u01b2\7\"\2\2\u01b2\u01b3\7o\2\2\u01b3"+
		"\u01b4\7c\2\2\u01b4\u01b5\7{\2\2\u01b5\u01b6\7q\2\2\u01b6\u01b7\7t\2\2"+
		"\u01b7\u01b8\7\"\2\2\u01b8\u01b9\7s\2\2\u01b9\u01ba\7w\2\2\u01ba\u01c8"+
		"\7g\2\2\u01bb\u01bc\7g\2\2\u01bc\u01bd\7u\2\2\u01bd\u01be\7\"\2\2\u01be"+
		"\u01bf\7o\2\2\u01bf\u01c0\7c\2\2\u01c0\u01c1\7{\2\2\u01c1\u01c2\7q\2\2"+
		"\u01c2\u01c3\7t\2\2\u01c3\u01c4\7\"\2\2\u01c4\u01c5\7s\2\2\u01c5\u01c6"+
		"\7w\2\2\u01c6\u01c8\7g\2\2\u01c7\u01ae\3\2\2\2\u01c7\u01bb\3\2\2\2\u01c8"+
		"\64\3\2\2\2\u01c9\u01ca\7u\2\2\u01ca\u01cb\7g\2\2\u01cb\u01cc\7c\2\2\u01cc"+
		"\u01cd\7\"\2\2\u01cd\u01ce\7o\2\2\u01ce\u01cf\7g\2\2\u01cf\u01d0\7p\2"+
		"\2\u01d0\u01d1\7q\2\2\u01d1\u01d2\7t\2\2\u01d2\u01d3\7\"\2\2\u01d3\u01d4"+
		"\7s\2\2\u01d4\u01d5\7w\2\2\u01d5\u01e3\7g\2\2\u01d6\u01d7\7g\2\2\u01d7"+
		"\u01d8\7u\2\2\u01d8\u01d9\7\"\2\2\u01d9\u01da\7o\2\2\u01da\u01db\7g\2"+
		"\2\u01db\u01dc\7p\2\2\u01dc\u01dd\7q\2\2\u01dd\u01de\7t\2\2\u01de\u01df"+
		"\7\"\2\2\u01df\u01e0\7s\2\2\u01e0\u01e1\7w\2\2\u01e1\u01e3\7g\2\2\u01e2"+
		"\u01c9\3\2\2\2\u01e2\u01d6\3\2\2\2\u01e3\66\3\2\2\2\u01e4\u01e5\7u\2\2"+
		"\u01e5\u01e6\7g\2\2\u01e6\u01e7\7c\2\2\u01e7\u01e8\7\"\2\2\u01e8\u01e9"+
		"\7o\2\2\u01e9\u01ea\7c\2\2\u01ea\u01eb\7{\2\2\u01eb\u01ec\7q\2\2\u01ec"+
		"\u01ed\7t\2\2\u01ed\u01ee\7\"\2\2\u01ee\u01ef\7q\2\2\u01ef\u01f0\7\"\2"+
		"\2\u01f0\u01f1\7k\2\2\u01f1\u01f2\7i\2\2\u01f2\u01f3\7w\2\2\u01f3\u01f4"+
		"\7c\2\2\u01f4\u01f5\7n\2\2\u01f5\u01f6\7\"\2\2\u01f6\u01f7\7s\2\2\u01f7"+
		"\u01f8\7w\2\2\u01f8\u020e\7g\2\2\u01f9\u01fa\7g\2\2\u01fa\u01fb\7u\2\2"+
		"\u01fb\u01fc\7\"\2\2\u01fc\u01fd\7o\2\2\u01fd\u01fe\7c\2\2\u01fe\u01ff"+
		"\7{\2\2\u01ff\u0200\7q\2\2\u0200\u0201\7t\2\2\u0201\u0202\7\"\2\2\u0202"+
		"\u0203\7q\2\2\u0203\u0204\7\"\2\2\u0204\u0205\7k\2\2\u0205\u0206\7i\2"+
		"\2\u0206\u0207\7w\2\2\u0207\u0208\7c\2\2\u0208\u0209\7n\2\2\u0209\u020a"+
		"\7\"\2\2\u020a\u020b\7s\2\2\u020b\u020c\7w\2\2\u020c\u020e\7g\2\2\u020d"+
		"\u01e4\3\2\2\2\u020d\u01f9\3\2\2\2\u020e8\3\2\2\2\u020f\u0210\7u\2\2\u0210"+
		"\u0211\7g\2\2\u0211\u0212\7c\2\2\u0212\u0213\7\"\2\2\u0213\u0214\7o\2"+
		"\2\u0214\u0215\7g\2\2\u0215\u0216\7p\2\2\u0216\u0217\7q\2\2\u0217\u0218"+
		"\7t\2\2\u0218\u0219\7\"\2\2\u0219\u021a\7q\2\2\u021a\u021b\7\"\2\2\u021b"+
		"\u021c\7k\2\2\u021c\u021d\7i\2\2\u021d\u021e\7w\2\2\u021e\u021f\7c\2\2"+
		"\u021f\u0220\7n\2\2\u0220\u0221\7\"\2\2\u0221\u0222\7s\2\2\u0222\u0223"+
		"\7w\2\2\u0223\u0239\7g\2\2\u0224\u0225\7g\2\2\u0225\u0226\7u\2\2\u0226"+
		"\u0227\7\"\2\2\u0227\u0228\7o\2\2\u0228\u0229\7g\2\2\u0229\u022a\7p\2"+
		"\2\u022a\u022b\7q\2\2\u022b\u022c\7t\2\2\u022c\u022d\7\"\2\2\u022d\u022e"+
		"\7q\2\2\u022e\u022f\7\"\2\2\u022f\u0230\7k\2\2\u0230\u0231\7i\2\2\u0231"+
		"\u0232\7w\2\2\u0232\u0233\7c\2\2\u0233\u0234\7n\2\2\u0234\u0235\7\"\2"+
		"\2\u0235\u0236\7s\2\2\u0236\u0237\7w\2\2\u0237\u0239\7g\2\2\u0238\u020f"+
		"\3\2\2\2\u0238\u0224\3\2\2\2\u0239:\3\2\2\2\u023a\u023b\7o\2\2\u023b\u023c"+
		"\7\u00e3\2\2\u023c\u023d\7u\2\2\u023d<\3\2\2\2\u023e\u023f\7o\2\2\u023f"+
		"\u0240\7g\2\2\u0240\u0241\7p\2\2\u0241\u0242\7q\2\2\u0242\u0243\7u\2\2"+
		"\u0243>\3\2\2\2\u0244\u0245\7o\2\2\u0245\u0246\7\u00f5\2\2\u0246\u0247"+
		"\7f\2\2\u0247\u0248\7w\2\2\u0248\u0249\7n\2\2\u0249\u024a\7q\2\2\u024a"+
		"@\3\2\2\2\u024b\u024c\7f\2\2\u024c\u024d\7k\2\2\u024d\u024e\7x\2\2\u024e"+
		"\u024f\7k\2\2\u024f\u0250\7f\2\2\u0250\u0251\7k\2\2\u0251\u0252\7f\2\2"+
		"\u0252\u0259\7q\2\2\u0253\u0254\7u\2\2\u0254\u0255\7q\2\2\u0255\u0256"+
		"\7d\2\2\u0256\u0257\7t\2\2\u0257\u0259\7g\2\2\u0258\u024b\3\2\2\2\u0258"+
		"\u0253\3\2\2\2\u0259B\3\2\2\2\u025a\u025b\7r\2\2\u025b\u025c\7q\2\2\u025c"+
		"\u026a\7t\2\2\u025d\u025e\7o\2\2\u025e\u025f\7w\2\2\u025f\u0260\7n\2\2"+
		"\u0260\u0261\7v\2\2\u0261\u0262\7k\2\2\u0262\u0263\7r\2\2\u0263\u0264"+
		"\7n\2\2\u0264\u0265\7k\2\2\u0265\u0266\7e\2\2\u0266\u0267\7c\2\2\u0267"+
		"\u0268\7f\2\2\u0268\u026a\7q\2\2\u0269\u025a\3\2\2\2\u0269\u025d\3\2\2"+
		"\2\u026aD\3\2\2\2\u026b\u026c\7\u00c1\2\2\u026cF\3\2\2\2\u026d\u026e\7"+
		"A\2\2\u026eH\3\2\2\2\u026f\u0270\7\"\2\2\u0270J\3\2\2\2\u0271\u0272\7"+
		".\2\2\u0272L\3\2\2\2\u0273\u0274\7E\2\2\u0274\u0275\7k\2\2\u0275\u0276"+
		"\7g\2\2\u0276\u0277\7t\2\2\u0277\u0278\7v\2\2\u0278\u0279\7q\2\2\u0279"+
		"N\3\2\2\2\u027a\u027b\7H\2\2\u027b\u027c\7c\2\2\u027c\u027d\7n\2\2\u027d"+
		"\u027e\7u\2\2\u027e\u027f\7q\2\2\u027fP\3\2\2\2\u0280\u0284\7/\2\2\u0281"+
		"\u0283\13\2\2\2\u0282\u0281\3\2\2\2\u0283\u0286\3\2\2\2\u0284\u0285\3"+
		"\2\2\2\u0284\u0282\3\2\2\2\u0285\u0287\3\2\2\2\u0286\u0284\3\2\2\2\u0287"+
		"\u0288\7/\2\2\u0288R\3\2\2\2\u0289\u028a\t\2\2\2\u028aT\3\2\2\2\u028b"+
		"\u028d\5S*\2\u028c\u028b\3\2\2\2\u028d\u028e\3\2\2\2\u028e\u028c\3\2\2"+
		"\2\u028e\u028f\3\2\2\2\u028f\u0296\3\2\2\2\u0290\u0292\7\60\2\2\u0291"+
		"\u0293\5S*\2\u0292\u0291\3\2\2\2\u0293\u0294\3\2\2\2\u0294\u0292\3\2\2"+
		"\2\u0294\u0295\3\2\2\2\u0295\u0297\3\2\2\2\u0296\u0290\3\2\2\2\u0296\u0297"+
		"\3\2\2\2\u0297V\3\2\2\2\u0298\u029a\t\3\2\2\u0299\u0298\3\2\2\2\u029a"+
		"\u029b\3\2\2\2\u029b\u0299\3\2\2\2\u029b\u029c\3\2\2\2\u029cX\3\2\2\2"+
		"\u029d\u029f\t\4\2\2\u029e\u029d\3\2\2\2\u029f\u02a2\3\2\2\2\u02a0\u029e"+
		"\3\2\2\2\u02a0\u02a1\3\2\2\2\u02a1Z\3\2\2\2\u02a2\u02a0\3\2\2\2\u02a3"+
		"\u02a4\7)\2\2\u02a4\u02a5\5W,\2\u02a5\u02a6\7)\2\2\u02a6\\\3\2\2\2\u02a7"+
		"\u02a8\7$\2\2\u02a8\u02a9\5Y-\2\u02a9\u02aa\7$\2\2\u02aa^\3\2\2\2\31\2"+
		"\u009b\u00ca\u00dd\u0127\u0136\u014d\u017c\u019b\u01c7\u01e2\u020d\u0238"+
		"\u0258\u0269\u0284\u028e\u0294\u0296\u0299\u029b\u029e\u02a0\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}