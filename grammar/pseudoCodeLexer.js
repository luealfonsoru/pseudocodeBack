// Generated from pseudoCodeLexer.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002-\u02ae\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u009c",
    "\n\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0005\n\u00cb\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0005\u000b\u00de\n\u000b\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u0128\n\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u0137\n\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0005\u0011\u014e\n\u0011\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0005\u0013\u017d\n\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0005\u0015\u019c\n\u0015\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u01c8\n",
    "\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0005\u001b\u01e3\n\u001b\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0005\u001c\u020e\n\u001c\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u0239",
    "\n\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003 ",
    "\u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003!\u0003!\u0003!\u0003",
    "!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0005",
    "!\u0259\n!\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003",
    "\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0005\"\u026a",
    "\n\"\u0003#\u0003#\u0003$\u0003$\u0003%\u0003%\u0003&\u0003&\u0003\'",
    "\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003)\u0003)\u0007)\u0283\n)\f)\u000e)\u0286",
    "\u000b)\u0003)\u0003)\u0003*\u0003*\u0003+\u0005+\u028d\n+\u0003+\u0006",
    "+\u0290\n+\r+\u000e+\u0291\u0003+\u0003+\u0006+\u0296\n+\r+\u000e+\u0297",
    "\u0005+\u029a\n+\u0003,\u0006,\u029d\n,\r,\u000e,\u029e\u0003-\u0007",
    "-\u02a2\n-\f-\u000e-\u02a5\u000b-\u0003.\u0003.\u0003.\u0003.\u0003",
    "/\u0003/\u0003/\u0003/\u0003\u0284\u00020\u0003\u0003\u0005\u0004\u0007",
    "\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017",
    "\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014",
    "\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u001e",
    ";\u001f= ?!A\"C#E$G%I&K\'M(O)Q*S\u0002U+W\u0002Y\u0002[,]-\u0003\u0002",
    "\u0005\u0003\u00022;\u0004\u0002C\\c|\u0005\u0002\"\"C\\c|\u0002\u02c3",
    "\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002",
    "\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002",
    "\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002",
    "\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002",
    "\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002",
    "\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002",
    "\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002",
    "\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002",
    "\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002",
    "\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003",
    "\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002",
    "\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002",
    "\u0002\u00025\u0003\u0002\u0002\u0002\u00027\u0003\u0002\u0002\u0002",
    "\u00029\u0003\u0002\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002",
    "=\u0003\u0002\u0002\u0002\u0002?\u0003\u0002\u0002\u0002\u0002A\u0003",
    "\u0002\u0002\u0002\u0002C\u0003\u0002\u0002\u0002\u0002E\u0003\u0002",
    "\u0002\u0002\u0002G\u0003\u0002\u0002\u0002\u0002I\u0003\u0002\u0002",
    "\u0002\u0002K\u0003\u0002\u0002\u0002\u0002M\u0003\u0002\u0002\u0002",
    "\u0002O\u0003\u0002\u0002\u0002\u0002Q\u0003\u0002\u0002\u0002\u0002",
    "U\u0003\u0002\u0002\u0002\u0002[\u0003\u0002\u0002\u0002\u0002]\u0003",
    "\u0002\u0002\u0002\u0003_\u0003\u0002\u0002\u0002\u0005c\u0003\u0002",
    "\u0002\u0002\u0007l\u0003\u0002\u0002\u0002\tn\u0003\u0002\u0002\u0002",
    "\u000bp\u0003\u0002\u0002\u0002\r\u009b\u0003\u0002\u0002\u0002\u000f",
    "\u009d\u0003\u0002\u0002\u0002\u0011\u00a0\u0003\u0002\u0002\u0002\u0013",
    "\u00ca\u0003\u0002\u0002\u0002\u0015\u00dd\u0003\u0002\u0002\u0002\u0017",
    "\u00df\u0003\u0002\u0002\u0002\u0019\u00e8\u0003\u0002\u0002\u0002\u001b",
    "\u00f4\u0003\u0002\u0002\u0002\u001d\u0127\u0003\u0002\u0002\u0002\u001f",
    "\u0136\u0003\u0002\u0002\u0002!\u014d\u0003\u0002\u0002\u0002#\u014f",
    "\u0003\u0002\u0002\u0002%\u017c\u0003\u0002\u0002\u0002\'\u017e\u0003",
    "\u0002\u0002\u0002)\u019b\u0003\u0002\u0002\u0002+\u019d\u0003\u0002",
    "\u0002\u0002-\u01a7\u0003\u0002\u0002\u0002/\u01a9\u0003\u0002\u0002",
    "\u00021\u01ab\u0003\u0002\u0002\u00023\u01c7\u0003\u0002\u0002\u0002",
    "5\u01e2\u0003\u0002\u0002\u00027\u020d\u0003\u0002\u0002\u00029\u0238",
    "\u0003\u0002\u0002\u0002;\u023a\u0003\u0002\u0002\u0002=\u023e\u0003",
    "\u0002\u0002\u0002?\u0244\u0003\u0002\u0002\u0002A\u0258\u0003\u0002",
    "\u0002\u0002C\u0269\u0003\u0002\u0002\u0002E\u026b\u0003\u0002\u0002",
    "\u0002G\u026d\u0003\u0002\u0002\u0002I\u026f\u0003\u0002\u0002\u0002",
    "K\u0271\u0003\u0002\u0002\u0002M\u0273\u0003\u0002\u0002\u0002O\u027a",
    "\u0003\u0002\u0002\u0002Q\u0280\u0003\u0002\u0002\u0002S\u0289\u0003",
    "\u0002\u0002\u0002U\u028c\u0003\u0002\u0002\u0002W\u029c\u0003\u0002",
    "\u0002\u0002Y\u02a3\u0003\u0002\u0002\u0002[\u02a6\u0003\u0002\u0002",
    "\u0002]\u02aa\u0003\u0002\u0002\u0002_`\u0007U\u0002\u0002`a\u0007g",
    "\u0002\u0002ab\u0007c\u0002\u0002b\u0004\u0003\u0002\u0002\u0002cd\u0007",
    "J\u0002\u0002de\u0007c\u0002\u0002ef\u0007i\u0002\u0002fg\u0007c\u0002",
    "\u0002gh\u0007\"\u0002\u0002hi\u0007s\u0002\u0002ij\u0007w\u0002\u0002",
    "jk\u0007g\u0002\u0002k\u0006\u0003\u0002\u0002\u0002lm\u0007<\u0002",
    "\u0002m\b\u0003\u0002\u0002\u0002no\u00070\u0002\u0002o\n\u0003\u0002",
    "\u0002\u0002pq\u0007j\u0002\u0002qr\u0007c\u0002\u0002rs\u0007i\u0002",
    "\u0002st\u0007c\u0002\u0002t\f\u0003\u0002\u0002\u0002uv\u0007k\u0002",
    "\u0002vw\u0007i\u0002\u0002wx\u0007w\u0002\u0002xy\u0007c\u0002\u0002",
    "yz\u0007n\u0002\u0002z{\u0007\"\u0002\u0002{\u009c\u0007c\u0002\u0002",
    "|}\u0007k\u0002\u0002}~\u0007i\u0002\u0002~\u007f\u0007w\u0002\u0002",
    "\u007f\u0080\u0007c\u0002\u0002\u0080\u0081\u0007n\u0002\u0002\u0081",
    "\u0082\u0007\"\u0002\u0002\u0082\u0083\u0007c\u0002\u0002\u0083\u009c",
    "\u0007n\u0002\u0002\u0084\u0085\u0007u\u0002\u0002\u0085\u0086\u0007",
    "g\u0002\u0002\u0086\u0087\u0007c\u0002\u0002\u0087\u0088\u0007\"\u0002",
    "\u0002\u0088\u0089\u0007k\u0002\u0002\u0089\u008a\u0007i\u0002\u0002",
    "\u008a\u008b\u0007w\u0002\u0002\u008b\u008c\u0007c\u0002\u0002\u008c",
    "\u008d\u0007n\u0002\u0002\u008d\u008e\u0007\"\u0002\u0002\u008e\u009c",
    "\u0007c\u0002\u0002\u008f\u0090\u0007u\u0002\u0002\u0090\u0091\u0007",
    "g\u0002\u0002\u0091\u0092\u0007c\u0002\u0002\u0092\u0093\u0007\"\u0002",
    "\u0002\u0093\u0094\u0007k\u0002\u0002\u0094\u0095\u0007i\u0002\u0002",
    "\u0095\u0096\u0007w\u0002\u0002\u0096\u0097\u0007c\u0002\u0002\u0097",
    "\u0098\u0007n\u0002\u0002\u0098\u0099\u0007\"\u0002\u0002\u0099\u009a",
    "\u0007c\u0002\u0002\u009a\u009c\u0007n\u0002\u0002\u009bu\u0003\u0002",
    "\u0002\u0002\u009b|\u0003\u0002\u0002\u0002\u009b\u0084\u0003\u0002",
    "\u0002\u0002\u009b\u008f\u0003\u0002\u0002\u0002\u009c\u000e\u0003\u0002",
    "\u0002\u0002\u009d\u009e\u0007g\u0002\u0002\u009e\u009f\u0007u\u0002",
    "\u0002\u009f\u0010\u0003\u0002\u0002\u0002\u00a0\u00a1\u0007r\u0002",
    "\u0002\u00a1\u00a2\u0007q\u0002\u0002\u00a2\u00a3\u0007t\u0002\u0002",
    "\u00a3\u00a4\u0007\"\u0002\u0002\u00a4\u00a5\u0007g\u0002\u0002\u00a5",
    "\u00a6\u0007n\u0002\u0002\u00a6\u00a7\u0007\"\u0002\u0002\u00a7\u00a8",
    "\u0007e\u0002\u0002\u00a8\u00a9\u0007q\u0002\u0002\u00a9\u00aa\u0007",
    "p\u0002\u0002\u00aa\u00ab\u0007v\u0002\u0002\u00ab\u00ac\u0007t\u0002",
    "\u0002\u00ac\u00ad\u0007c\u0002\u0002\u00ad\u00ae\u0007t\u0002\u0002",
    "\u00ae\u00af\u0007k\u0002\u0002\u00af\u00b0\u0007q\u0002\u0002\u00b0",
    "\u0012\u0003\u0002\u0002\u0002\u00b1\u00b2\u0007g\u0002\u0002\u00b2",
    "\u00b3\u0007u\u0002\u0002\u00b3\u00b4\u0007\"\u0002\u0002\u00b4\u00b5",
    "\u0007k\u0002\u0002\u00b5\u00b6\u0007i\u0002\u0002\u00b6\u00b7\u0007",
    "w\u0002\u0002\u00b7\u00b8\u0007c\u0002\u0002\u00b8\u00b9\u0007n\u0002",
    "\u0002\u00b9\u00ba\u0007\"\u0002\u0002\u00ba\u00bb\u0007s\u0002\u0002",
    "\u00bb\u00bc\u0007w\u0002\u0002\u00bc\u00cb\u0007g\u0002\u0002\u00bd",
    "\u00be\u0007u\u0002\u0002\u00be\u00bf\u0007g\u0002\u0002\u00bf\u00c0",
    "\u0007c\u0002\u0002\u00c0\u00c1\u0007\"\u0002\u0002\u00c1\u00c2\u0007",
    "k\u0002\u0002\u00c2\u00c3\u0007i\u0002\u0002\u00c3\u00c4\u0007w\u0002",
    "\u0002\u00c4\u00c5\u0007c\u0002\u0002\u00c5\u00c6\u0007n\u0002\u0002",
    "\u00c6\u00c7\u0007\"\u0002\u0002\u00c7\u00c8\u0007s\u0002\u0002\u00c8",
    "\u00c9\u0007w\u0002\u0002\u00c9\u00cb\u0007g\u0002\u0002\u00ca\u00b1",
    "\u0003\u0002\u0002\u0002\u00ca\u00bd\u0003\u0002\u0002\u0002\u00cb\u0014",
    "\u0003\u0002\u0002\u0002\u00cc\u00cd\u0007u\u0002\u0002\u00cd\u00ce",
    "\u0007k\u0002\u0002\u00ce\u00cf\u0007\"\u0002\u0002\u00cf\u00d0\u0007",
    "g\u0002\u0002\u00d0\u00d1\u0007u\u0002\u0002\u00d1\u00d2\u0007\"\u0002",
    "\u0002\u00d2\u00d3\u0007c\u0002\u0002\u00d3\u00d4\u0007u\u0002\u0002",
    "\u00d4\u00de\u0007\u00ef\u0002\u0002\u00d5\u00d6\u0007g\u0002\u0002",
    "\u00d6\u00d7\u0007p\u0002\u0002\u00d7\u00d8\u0007v\u0002\u0002\u00d8",
    "\u00d9\u0007q\u0002\u0002\u00d9\u00da\u0007p\u0002\u0002\u00da\u00db",
    "\u0007e\u0002\u0002\u00db\u00dc\u0007g\u0002\u0002\u00dc\u00de\u0007",
    "u\u0002\u0002\u00dd\u00cc\u0003\u0002\u0002\u0002\u00dd\u00d5\u0003",
    "\u0002\u0002\u0002\u00de\u0016\u0003\u0002\u0002\u0002\u00df\u00e0\u0007",
    "o\u0002\u0002\u00e0\u00e1\u0007k\u0002\u0002\u00e1\u00e2\u0007g\u0002",
    "\u0002\u00e2\u00e3\u0007p\u0002\u0002\u00e3\u00e4\u0007v\u0002\u0002",
    "\u00e4\u00e5\u0007t\u0002\u0002\u00e5\u00e6\u0007c\u0002\u0002\u00e6",
    "\u00e7\u0007u\u0002\u0002\u00e7\u0018\u0003\u0002\u0002\u0002\u00e8",
    "\u00e9\u0007n\u0002\u0002\u00e9\u00ea\u0007c\u0002\u0002\u00ea\u00eb",
    "\u0007\"\u0002\u0002\u00eb\u00ec\u0007n\u0002\u0002\u00ec\u00ed\u0007",
    "k\u0002\u0002\u00ed\u00ee\u0007u\u0002\u0002\u00ee\u00ef\u0007v\u0002",
    "\u0002\u00ef\u00f0\u0007c\u0002\u0002\u00f0\u00f1\u0007\"\u0002\u0002",
    "\u00f1\u00f2\u0007f\u0002\u0002\u00f2\u00f3\u0007g\u0002\u0002\u00f3",
    "\u001a\u0003\u0002\u0002\u0002\u00f4\u00f5\u0007n\u0002\u0002\u00f5",
    "\u00f6\u0007c\u0002\u0002\u00f6\u00f7\u0007\"\u0002\u0002\u00f7\u00f8",
    "\u0007h\u0002\u0002\u00f8\u00f9\u0007w\u0002\u0002\u00f9\u00fa\u0007",
    "p\u0002\u0002\u00fa\u00fb\u0007e\u0002\u0002\u00fb\u00fc\u0007k\u0002",
    "\u0002\u00fc\u00fd\u0007\u00f5\u0002\u0002\u00fd\u00fe\u0007p\u0002",
    "\u0002\u00fe\u00ff\u0007\"\u0002\u0002\u00ff\u0100\u0007s\u0002\u0002",
    "\u0100\u0101\u0007w\u0002\u0002\u0101\u0102\u0007g\u0002\u0002\u0102",
    "\u001c\u0003\u0002\u0002\u0002\u0103\u0104\u0007v\u0002\u0002\u0104",
    "\u0105\u0007q\u0002\u0002\u0105\u0106\u0007o\u0002\u0002\u0106\u0107",
    "\u0007c\u0002\u0002\u0107\u0108\u0007\"\u0002\u0002\u0108\u0109\u0007",
    "n\u0002\u0002\u0109\u010a\u0007q\u0002\u0002\u010a\u010b\u0007u\u0002",
    "\u0002\u010b\u010c\u0007\"\u0002\u0002\u010c\u010d\u0007r\u0002\u0002",
    "\u010d\u010e\u0007c\u0002\u0002\u010e\u010f\u0007t\u0002\u0002\u010f",
    "\u0110\u0007\u00e3\u0002\u0002\u0110\u0111\u0007o\u0002\u0002\u0111",
    "\u0112\u0007g\u0002\u0002\u0112\u0113\u0007v\u0002\u0002\u0113\u0114",
    "\u0007t\u0002\u0002\u0114\u0115\u0007q\u0002\u0002\u0115\u0128\u0007",
    "u\u0002\u0002\u0116\u0117\u0007v\u0002\u0002\u0117\u0118\u0007q\u0002",
    "\u0002\u0118\u0119\u0007o\u0002\u0002\u0119\u011a\u0007c\u0002\u0002",
    "\u011a\u011b\u0007\"\u0002\u0002\u011b\u011c\u0007g\u0002\u0002\u011c",
    "\u011d\u0007n\u0002\u0002\u011d\u011e\u0007\"\u0002\u0002\u011e\u011f",
    "\u0007r\u0002\u0002\u011f\u0120\u0007c\u0002\u0002\u0120\u0121\u0007",
    "t\u0002\u0002\u0121\u0122\u0007\u00e3\u0002\u0002\u0122\u0123\u0007",
    "o\u0002\u0002\u0123\u0124\u0007g\u0002\u0002\u0124\u0125\u0007v\u0002",
    "\u0002\u0125\u0126\u0007t\u0002\u0002\u0126\u0128\u0007q\u0002\u0002",
    "\u0127\u0103\u0003\u0002\u0002\u0002\u0127\u0116\u0003\u0002\u0002\u0002",
    "\u0128\u001e\u0003\u0002\u0002\u0002\u0129\u012a\u0007p\u0002\u0002",
    "\u012a\u012b\u0007\u00fc\u0002\u0002\u012b\u012c\u0007o\u0002\u0002",
    "\u012c\u012d\u0007g\u0002\u0002\u012d\u012e\u0007t\u0002\u0002\u012e",
    "\u0137\u0007q\u0002\u0002\u012f\u0130\u0007p\u0002\u0002\u0130\u0131",
    "\u0007\u00fc\u0002\u0002\u0131\u0132\u0007o\u0002\u0002\u0132\u0133",
    "\u0007g\u0002\u0002\u0133\u0134\u0007t\u0002\u0002\u0134\u0135\u0007",
    "q\u0002\u0002\u0135\u0137\u0007u\u0002\u0002\u0136\u0129\u0003\u0002",
    "\u0002\u0002\u0136\u012f\u0003\u0002\u0002\u0002\u0137 \u0003\u0002",
    "\u0002\u0002\u0138\u0139\u0007r\u0002\u0002\u0139\u013a\u0007c\u0002",
    "\u0002\u013a\u013b\u0007n\u0002\u0002\u013b\u013c\u0007c\u0002\u0002",
    "\u013c\u013d\u0007d\u0002\u0002\u013d\u013e\u0007t\u0002\u0002\u013e",
    "\u014e\u0007c\u0002\u0002\u013f\u0140\u0007r\u0002\u0002\u0140\u0141",
    "\u0007c\u0002\u0002\u0141\u0142\u0007n\u0002\u0002\u0142\u0143\u0007",
    "c\u0002\u0002\u0143\u0144\u0007d\u0002\u0002\u0144\u0145\u0007t\u0002",
    "\u0002\u0145\u0146\u0007c\u0002\u0002\u0146\u014e\u0007u\u0002\u0002",
    "\u0147\u0148\u0007e\u0002\u0002\u0148\u0149\u0007c\u0002\u0002\u0149",
    "\u014a\u0007f\u0002\u0002\u014a\u014b\u0007g\u0002\u0002\u014b\u014c",
    "\u0007p\u0002\u0002\u014c\u014e\u0007c\u0002\u0002\u014d\u0138\u0003",
    "\u0002\u0002\u0002\u014d\u013f\u0003\u0002\u0002\u0002\u014d\u0147\u0003",
    "\u0002\u0002\u0002\u014e\"\u0003\u0002\u0002\u0002\u014f\u0150\u0007",
    "g\u0002\u0002\u0150\u0151\u0007z\u0002\u0002\u0151\u0152\u0007r\u0002",
    "\u0002\u0152\u0153\u0007t\u0002\u0002\u0153\u0154\u0007g\u0002\u0002",
    "\u0154\u0155\u0007u\u0002\u0002\u0155\u0156\u0007k\u0002\u0002\u0156",
    "\u0157\u0007\u00f5\u0002\u0002\u0157\u0158\u0007p\u0002\u0002\u0158",
    "\u0159\u0007\"\u0002\u0002\u0159\u015a\u0007n\u0002\u0002\u015a\u015b",
    "\u0007\u00f5\u0002\u0002\u015b\u015c\u0007i\u0002\u0002\u015c\u015d",
    "\u0007k\u0002\u0002\u015d\u015e\u0007e\u0002\u0002\u015e\u015f\u0007",
    "c\u0002\u0002\u015f$\u0003\u0002\u0002\u0002\u0160\u0161\u0007g\u0002",
    "\u0002\u0161\u017d\u0007p\u0002\u0002\u0162\u0163\u0007g\u0002\u0002",
    "\u0163\u0164\u0007p\u0002\u0002\u0164\u0165\u0007\"\u0002\u0002\u0165",
    "\u0166\u0007n\u0002\u0002\u0166\u0167\u0007c\u0002\u0002\u0167\u0168",
    "\u0007\"\u0002\u0002\u0168\u0169\u0007r\u0002\u0002\u0169\u016a\u0007",
    "q\u0002\u0002\u016a\u016b\u0007u\u0002\u0002\u016b\u016c\u0007k\u0002",
    "\u0002\u016c\u016d\u0007e\u0002\u0002\u016d\u016e\u0007k\u0002\u0002",
    "\u016e\u016f\u0007\u00f5\u0002\u0002\u016f\u017d\u0007p\u0002\u0002",
    "\u0170\u0171\u0007g\u0002\u0002\u0171\u0172\u0007p\u0002\u0002\u0172",
    "\u0173\u0007\"\u0002\u0002\u0173\u0174\u0007g\u0002\u0002\u0174\u0175",
    "\u0007n\u0002\u0002\u0175\u0176\u0007\"\u0002\u0002\u0176\u0177\u0007",
    "k\u0002\u0002\u0177\u0178\u0007p\u0002\u0002\u0178\u0179\u0007f\u0002",
    "\u0002\u0179\u017a\u0007k\u0002\u0002\u017a\u017b\u0007e\u0002\u0002",
    "\u017b\u017d\u0007g\u0002\u0002\u017c\u0160\u0003\u0002\u0002\u0002",
    "\u017c\u0162\u0003\u0002\u0002\u0002\u017c\u0170\u0003\u0002\u0002\u0002",
    "\u017d&\u0003\u0002\u0002\u0002\u017e\u017f\u0007k\u0002\u0002\u017f",
    "\u0180\u0007o\u0002\u0002\u0180\u0181\u0007r\u0002\u0002\u0181\u0182",
    "\u0007t\u0002\u0002\u0182\u0183\u0007k\u0002\u0002\u0183\u0184\u0007",
    "o\u0002\u0002\u0184\u0185\u0007k\u0002\u0002\u0185\u0186\u0007t\u0002",
    "\u0002\u0186(\u0003\u0002\u0002\u0002\u0187\u0188\u0007x\u0002\u0002",
    "\u0188\u0189\u0007c\u0002\u0002\u0189\u018a\u0007n\u0002\u0002\u018a",
    "\u018b\u0007q\u0002\u0002\u018b\u018c\u0007t\u0002\u0002\u018c\u018d",
    "\u0007\"\u0002\u0002\u018d\u018e\u0007f\u0002\u0002\u018e\u018f\u0007",
    "g\u0002\u0002\u018f\u019c\u0007n\u0002\u0002\u0190\u0191\u0007x\u0002",
    "\u0002\u0191\u0192\u0007c\u0002\u0002\u0192\u0193\u0007n\u0002\u0002",
    "\u0193\u0194\u0007q\u0002\u0002\u0194\u0195\u0007t\u0002\u0002\u0195",
    "\u0196\u0007\"\u0002\u0002\u0196\u0197\u0007f\u0002\u0002\u0197\u0198",
    "\u0007g\u0002\u0002\u0198\u0199\u0007\"\u0002\u0002\u0199\u019a\u0007",
    "n\u0002\u0002\u019a\u019c\u0007c\u0002\u0002\u019b\u0187\u0003\u0002",
    "\u0002\u0002\u019b\u0190\u0003\u0002\u0002\u0002\u019c*\u0003\u0002",
    "\u0002\u0002\u019d\u019e\u0007E\u0002\u0002\u019e\u019f\u0007q\u0002",
    "\u0002\u019f\u01a0\u0007p\u0002\u0002\u01a0\u01a1\u0007v\u0002\u0002",
    "\u01a1\u01a2\u0007k\u0002\u0002\u01a2\u01a3\u0007p\u0002\u0002\u01a3",
    "\u01a4\u0007w\u0002\u0002\u01a4\u01a5\u0007c\u0002\u0002\u01a5\u01a6",
    "\u0007t\u0002\u0002\u01a6,\u0003\u0002\u0002\u0002\u01a7\u01a8\u0007",
    "q\u0002\u0002\u01a8.\u0003\u0002\u0002\u0002\u01a9\u01aa\u0007{\u0002",
    "\u0002\u01aa0\u0003\u0002\u0002\u0002\u01ab\u01ac\u0007p\u0002\u0002",
    "\u01ac\u01ad\u0007q\u0002\u0002\u01ad2\u0003\u0002\u0002\u0002\u01ae",
    "\u01af\u0007u\u0002\u0002\u01af\u01b0\u0007g\u0002\u0002\u01b0\u01b1",
    "\u0007c\u0002\u0002\u01b1\u01b2\u0007\"\u0002\u0002\u01b2\u01b3\u0007",
    "o\u0002\u0002\u01b3\u01b4\u0007c\u0002\u0002\u01b4\u01b5\u0007{\u0002",
    "\u0002\u01b5\u01b6\u0007q\u0002\u0002\u01b6\u01b7\u0007t\u0002\u0002",
    "\u01b7\u01b8\u0007\"\u0002\u0002\u01b8\u01b9\u0007s\u0002\u0002\u01b9",
    "\u01ba\u0007w\u0002\u0002\u01ba\u01c8\u0007g\u0002\u0002\u01bb\u01bc",
    "\u0007g\u0002\u0002\u01bc\u01bd\u0007u\u0002\u0002\u01bd\u01be\u0007",
    "\"\u0002\u0002\u01be\u01bf\u0007o\u0002\u0002\u01bf\u01c0\u0007c\u0002",
    "\u0002\u01c0\u01c1\u0007{\u0002\u0002\u01c1\u01c2\u0007q\u0002\u0002",
    "\u01c2\u01c3\u0007t\u0002\u0002\u01c3\u01c4\u0007\"\u0002\u0002\u01c4",
    "\u01c5\u0007s\u0002\u0002\u01c5\u01c6\u0007w\u0002\u0002\u01c6\u01c8",
    "\u0007g\u0002\u0002\u01c7\u01ae\u0003\u0002\u0002\u0002\u01c7\u01bb",
    "\u0003\u0002\u0002\u0002\u01c84\u0003\u0002\u0002\u0002\u01c9\u01ca",
    "\u0007u\u0002\u0002\u01ca\u01cb\u0007g\u0002\u0002\u01cb\u01cc\u0007",
    "c\u0002\u0002\u01cc\u01cd\u0007\"\u0002\u0002\u01cd\u01ce\u0007o\u0002",
    "\u0002\u01ce\u01cf\u0007g\u0002\u0002\u01cf\u01d0\u0007p\u0002\u0002",
    "\u01d0\u01d1\u0007q\u0002\u0002\u01d1\u01d2\u0007t\u0002\u0002\u01d2",
    "\u01d3\u0007\"\u0002\u0002\u01d3\u01d4\u0007s\u0002\u0002\u01d4\u01d5",
    "\u0007w\u0002\u0002\u01d5\u01e3\u0007g\u0002\u0002\u01d6\u01d7\u0007",
    "g\u0002\u0002\u01d7\u01d8\u0007u\u0002\u0002\u01d8\u01d9\u0007\"\u0002",
    "\u0002\u01d9\u01da\u0007o\u0002\u0002\u01da\u01db\u0007g\u0002\u0002",
    "\u01db\u01dc\u0007p\u0002\u0002\u01dc\u01dd\u0007q\u0002\u0002\u01dd",
    "\u01de\u0007t\u0002\u0002\u01de\u01df\u0007\"\u0002\u0002\u01df\u01e0",
    "\u0007s\u0002\u0002\u01e0\u01e1\u0007w\u0002\u0002\u01e1\u01e3\u0007",
    "g\u0002\u0002\u01e2\u01c9\u0003\u0002\u0002\u0002\u01e2\u01d6\u0003",
    "\u0002\u0002\u0002\u01e36\u0003\u0002\u0002\u0002\u01e4\u01e5\u0007",
    "u\u0002\u0002\u01e5\u01e6\u0007g\u0002\u0002\u01e6\u01e7\u0007c\u0002",
    "\u0002\u01e7\u01e8\u0007\"\u0002\u0002\u01e8\u01e9\u0007o\u0002\u0002",
    "\u01e9\u01ea\u0007c\u0002\u0002\u01ea\u01eb\u0007{\u0002\u0002\u01eb",
    "\u01ec\u0007q\u0002\u0002\u01ec\u01ed\u0007t\u0002\u0002\u01ed\u01ee",
    "\u0007\"\u0002\u0002\u01ee\u01ef\u0007q\u0002\u0002\u01ef\u01f0\u0007",
    "\"\u0002\u0002\u01f0\u01f1\u0007k\u0002\u0002\u01f1\u01f2\u0007i\u0002",
    "\u0002\u01f2\u01f3\u0007w\u0002\u0002\u01f3\u01f4\u0007c\u0002\u0002",
    "\u01f4\u01f5\u0007n\u0002\u0002\u01f5\u01f6\u0007\"\u0002\u0002\u01f6",
    "\u01f7\u0007s\u0002\u0002\u01f7\u01f8\u0007w\u0002\u0002\u01f8\u020e",
    "\u0007g\u0002\u0002\u01f9\u01fa\u0007g\u0002\u0002\u01fa\u01fb\u0007",
    "u\u0002\u0002\u01fb\u01fc\u0007\"\u0002\u0002\u01fc\u01fd\u0007o\u0002",
    "\u0002\u01fd\u01fe\u0007c\u0002\u0002\u01fe\u01ff\u0007{\u0002\u0002",
    "\u01ff\u0200\u0007q\u0002\u0002\u0200\u0201\u0007t\u0002\u0002\u0201",
    "\u0202\u0007\"\u0002\u0002\u0202\u0203\u0007q\u0002\u0002\u0203\u0204",
    "\u0007\"\u0002\u0002\u0204\u0205\u0007k\u0002\u0002\u0205\u0206\u0007",
    "i\u0002\u0002\u0206\u0207\u0007w\u0002\u0002\u0207\u0208\u0007c\u0002",
    "\u0002\u0208\u0209\u0007n\u0002\u0002\u0209\u020a\u0007\"\u0002\u0002",
    "\u020a\u020b\u0007s\u0002\u0002\u020b\u020c\u0007w\u0002\u0002\u020c",
    "\u020e\u0007g\u0002\u0002\u020d\u01e4\u0003\u0002\u0002\u0002\u020d",
    "\u01f9\u0003\u0002\u0002\u0002\u020e8\u0003\u0002\u0002\u0002\u020f",
    "\u0210\u0007u\u0002\u0002\u0210\u0211\u0007g\u0002\u0002\u0211\u0212",
    "\u0007c\u0002\u0002\u0212\u0213\u0007\"\u0002\u0002\u0213\u0214\u0007",
    "o\u0002\u0002\u0214\u0215\u0007g\u0002\u0002\u0215\u0216\u0007p\u0002",
    "\u0002\u0216\u0217\u0007q\u0002\u0002\u0217\u0218\u0007t\u0002\u0002",
    "\u0218\u0219\u0007\"\u0002\u0002\u0219\u021a\u0007q\u0002\u0002\u021a",
    "\u021b\u0007\"\u0002\u0002\u021b\u021c\u0007k\u0002\u0002\u021c\u021d",
    "\u0007i\u0002\u0002\u021d\u021e\u0007w\u0002\u0002\u021e\u021f\u0007",
    "c\u0002\u0002\u021f\u0220\u0007n\u0002\u0002\u0220\u0221\u0007\"\u0002",
    "\u0002\u0221\u0222\u0007s\u0002\u0002\u0222\u0223\u0007w\u0002\u0002",
    "\u0223\u0239\u0007g\u0002\u0002\u0224\u0225\u0007g\u0002\u0002\u0225",
    "\u0226\u0007u\u0002\u0002\u0226\u0227\u0007\"\u0002\u0002\u0227\u0228",
    "\u0007o\u0002\u0002\u0228\u0229\u0007g\u0002\u0002\u0229\u022a\u0007",
    "p\u0002\u0002\u022a\u022b\u0007q\u0002\u0002\u022b\u022c\u0007t\u0002",
    "\u0002\u022c\u022d\u0007\"\u0002\u0002\u022d\u022e\u0007q\u0002\u0002",
    "\u022e\u022f\u0007\"\u0002\u0002\u022f\u0230\u0007k\u0002\u0002\u0230",
    "\u0231\u0007i\u0002\u0002\u0231\u0232\u0007w\u0002\u0002\u0232\u0233",
    "\u0007c\u0002\u0002\u0233\u0234\u0007n\u0002\u0002\u0234\u0235\u0007",
    "\"\u0002\u0002\u0235\u0236\u0007s\u0002\u0002\u0236\u0237\u0007w\u0002",
    "\u0002\u0237\u0239\u0007g\u0002\u0002\u0238\u020f\u0003\u0002\u0002",
    "\u0002\u0238\u0224\u0003\u0002\u0002\u0002\u0239:\u0003\u0002\u0002",
    "\u0002\u023a\u023b\u0007o\u0002\u0002\u023b\u023c\u0007\u00e3\u0002",
    "\u0002\u023c\u023d\u0007u\u0002\u0002\u023d<\u0003\u0002\u0002\u0002",
    "\u023e\u023f\u0007o\u0002\u0002\u023f\u0240\u0007g\u0002\u0002\u0240",
    "\u0241\u0007p\u0002\u0002\u0241\u0242\u0007q\u0002\u0002\u0242\u0243",
    "\u0007u\u0002\u0002\u0243>\u0003\u0002\u0002\u0002\u0244\u0245\u0007",
    "o\u0002\u0002\u0245\u0246\u0007\u00f5\u0002\u0002\u0246\u0247\u0007",
    "f\u0002\u0002\u0247\u0248\u0007w\u0002\u0002\u0248\u0249\u0007n\u0002",
    "\u0002\u0249\u024a\u0007q\u0002\u0002\u024a@\u0003\u0002\u0002\u0002",
    "\u024b\u024c\u0007f\u0002\u0002\u024c\u024d\u0007k\u0002\u0002\u024d",
    "\u024e\u0007x\u0002\u0002\u024e\u024f\u0007k\u0002\u0002\u024f\u0250",
    "\u0007f\u0002\u0002\u0250\u0251\u0007k\u0002\u0002\u0251\u0252\u0007",
    "f\u0002\u0002\u0252\u0259\u0007q\u0002\u0002\u0253\u0254\u0007u\u0002",
    "\u0002\u0254\u0255\u0007q\u0002\u0002\u0255\u0256\u0007d\u0002\u0002",
    "\u0256\u0257\u0007t\u0002\u0002\u0257\u0259\u0007g\u0002\u0002\u0258",
    "\u024b\u0003\u0002\u0002\u0002\u0258\u0253\u0003\u0002\u0002\u0002\u0259",
    "B\u0003\u0002\u0002\u0002\u025a\u025b\u0007r\u0002\u0002\u025b\u025c",
    "\u0007q\u0002\u0002\u025c\u026a\u0007t\u0002\u0002\u025d\u025e\u0007",
    "o\u0002\u0002\u025e\u025f\u0007w\u0002\u0002\u025f\u0260\u0007n\u0002",
    "\u0002\u0260\u0261\u0007v\u0002\u0002\u0261\u0262\u0007k\u0002\u0002",
    "\u0262\u0263\u0007r\u0002\u0002\u0263\u0264\u0007n\u0002\u0002\u0264",
    "\u0265\u0007k\u0002\u0002\u0265\u0266\u0007e\u0002\u0002\u0266\u0267",
    "\u0007c\u0002\u0002\u0267\u0268\u0007f\u0002\u0002\u0268\u026a\u0007",
    "q\u0002\u0002\u0269\u025a\u0003\u0002\u0002\u0002\u0269\u025d\u0003",
    "\u0002\u0002\u0002\u026aD\u0003\u0002\u0002\u0002\u026b\u026c\u0007",
    "\u00c1\u0002\u0002\u026cF\u0003\u0002\u0002\u0002\u026d\u026e\u0007",
    "A\u0002\u0002\u026eH\u0003\u0002\u0002\u0002\u026f\u0270\u0007\"\u0002",
    "\u0002\u0270J\u0003\u0002\u0002\u0002\u0271\u0272\u0007.\u0002\u0002",
    "\u0272L\u0003\u0002\u0002\u0002\u0273\u0274\u0007E\u0002\u0002\u0274",
    "\u0275\u0007k\u0002\u0002\u0275\u0276\u0007g\u0002\u0002\u0276\u0277",
    "\u0007t\u0002\u0002\u0277\u0278\u0007v\u0002\u0002\u0278\u0279\u0007",
    "q\u0002\u0002\u0279N\u0003\u0002\u0002\u0002\u027a\u027b\u0007H\u0002",
    "\u0002\u027b\u027c\u0007c\u0002\u0002\u027c\u027d\u0007n\u0002\u0002",
    "\u027d\u027e\u0007u\u0002\u0002\u027e\u027f\u0007q\u0002\u0002\u027f",
    "P\u0003\u0002\u0002\u0002\u0280\u0284\u0007/\u0002\u0002\u0281\u0283",
    "\u000b\u0002\u0002\u0002\u0282\u0281\u0003\u0002\u0002\u0002\u0283\u0286",
    "\u0003\u0002\u0002\u0002\u0284\u0285\u0003\u0002\u0002\u0002\u0284\u0282",
    "\u0003\u0002\u0002\u0002\u0285\u0287\u0003\u0002\u0002\u0002\u0286\u0284",
    "\u0003\u0002\u0002\u0002\u0287\u0288\u0007/\u0002\u0002\u0288R\u0003",
    "\u0002\u0002\u0002\u0289\u028a\t\u0002\u0002\u0002\u028aT\u0003\u0002",
    "\u0002\u0002\u028b\u028d\u0007/\u0002\u0002\u028c\u028b\u0003\u0002",
    "\u0002\u0002\u028c\u028d\u0003\u0002\u0002\u0002\u028d\u028f\u0003\u0002",
    "\u0002\u0002\u028e\u0290\u0005S*\u0002\u028f\u028e\u0003\u0002\u0002",
    "\u0002\u0290\u0291\u0003\u0002\u0002\u0002\u0291\u028f\u0003\u0002\u0002",
    "\u0002\u0291\u0292\u0003\u0002\u0002\u0002\u0292\u0299\u0003\u0002\u0002",
    "\u0002\u0293\u0295\u00070\u0002\u0002\u0294\u0296\u0005S*\u0002\u0295",
    "\u0294\u0003\u0002\u0002\u0002\u0296\u0297\u0003\u0002\u0002\u0002\u0297",
    "\u0295\u0003\u0002\u0002\u0002\u0297\u0298\u0003\u0002\u0002\u0002\u0298",
    "\u029a\u0003\u0002\u0002\u0002\u0299\u0293\u0003\u0002\u0002\u0002\u0299",
    "\u029a\u0003\u0002\u0002\u0002\u029aV\u0003\u0002\u0002\u0002\u029b",
    "\u029d\t\u0003\u0002\u0002\u029c\u029b\u0003\u0002\u0002\u0002\u029d",
    "\u029e\u0003\u0002\u0002\u0002\u029e\u029c\u0003\u0002\u0002\u0002\u029e",
    "\u029f\u0003\u0002\u0002\u0002\u029fX\u0003\u0002\u0002\u0002\u02a0",
    "\u02a2\t\u0004\u0002\u0002\u02a1\u02a0\u0003\u0002\u0002\u0002\u02a2",
    "\u02a5\u0003\u0002\u0002\u0002\u02a3\u02a1\u0003\u0002\u0002\u0002\u02a3",
    "\u02a4\u0003\u0002\u0002\u0002\u02a4Z\u0003\u0002\u0002\u0002\u02a5",
    "\u02a3\u0003\u0002\u0002\u0002\u02a6\u02a7\u0007)\u0002\u0002\u02a7",
    "\u02a8\u0005W,\u0002\u02a8\u02a9\u0007)\u0002\u0002\u02a9\\\u0003\u0002",
    "\u0002\u0002\u02aa\u02ab\u0007$\u0002\u0002\u02ab\u02ac\u0005Y-\u0002",
    "\u02ac\u02ad\u0007$\u0002\u0002\u02ad^\u0003\u0002\u0002\u0002\u001a",
    "\u0002\u009b\u00ca\u00dd\u0127\u0136\u014d\u017c\u019b\u01c7\u01e2\u020d",
    "\u0238\u0258\u0269\u0284\u028c\u0291\u0297\u0299\u029c\u029e\u02a1\u02a3",
    "\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function pseudoCodeLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

pseudoCodeLexer.prototype = Object.create(antlr4.Lexer.prototype);
pseudoCodeLexer.prototype.constructor = pseudoCodeLexer;

Object.defineProperty(pseudoCodeLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

pseudoCodeLexer.EOF = antlr4.Token.EOF;
pseudoCodeLexer.DEF = 1;
pseudoCodeLexer.REWRITE = 2;
pseudoCodeLexer.SENTENCE = 3;
pseudoCodeLexer.END = 4;
pseudoCodeLexer.DO = 5;
pseudoCodeLexer.ASSIG = 6;
pseudoCodeLexer.IS = 7;
pseudoCodeLexer.ELSE = 8;
pseudoCodeLexer.EQUAL = 9;
pseudoCodeLexer.THEN = 10;
pseudoCodeLexer.WHILE = 11;
pseudoCodeLexer.LIST = 12;
pseudoCodeLexer.FUNCT = 13;
pseudoCodeLexer.PARAM = 14;
pseudoCodeLexer.NUMBERDEF = 15;
pseudoCodeLexer.STRINGDEF = 16;
pseudoCodeLexer.BOOLDEF = 17;
pseudoCodeLexer.INDEX = 18;
pseudoCodeLexer.PRINT = 19;
pseudoCodeLexer.VALUE = 20;
pseudoCodeLexer.CONTINUE = 21;
pseudoCodeLexer.OR = 22;
pseudoCodeLexer.AND = 23;
pseudoCodeLexer.NOT = 24;
pseudoCodeLexer.GT = 25;
pseudoCodeLexer.LT = 26;
pseudoCodeLexer.GTE = 27;
pseudoCodeLexer.LTE = 28;
pseudoCodeLexer.ADD = 29;
pseudoCodeLexer.SUB = 30;
pseudoCodeLexer.MOD = 31;
pseudoCodeLexer.DIV = 32;
pseudoCodeLexer.MULT = 33;
pseudoCodeLexer.OPQUEST = 34;
pseudoCodeLexer.CLQUEST = 35;
pseudoCodeLexer.SPACE = 36;
pseudoCodeLexer.COMA = 37;
pseudoCodeLexer.TRUE = 38;
pseudoCodeLexer.FALSE = 39;
pseudoCodeLexer.COMMENT = 40;
pseudoCodeLexer.NUMBER = 41;
pseudoCodeLexer.VAR = 42;
pseudoCodeLexer.STRING = 43;

pseudoCodeLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

pseudoCodeLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

pseudoCodeLexer.prototype.literalNames = [ null, "'Sea'", "'Haga que'", 
                                           "':'", "'.'", "'haga'", null, 
                                           "'es'", "'por el contrario'", 
                                           null, null, "'mientras'", "'la lista de'", 
                                           "'la funci\u00F3n que'", null, 
                                           null, null, "'expresi\u00F3n l\u00F3gica'", 
                                           null, "'imprimir'", null, "'Continuar'", 
                                           "'o'", "'y'", "'no'", null, null, 
                                           null, null, "'m\u00E1s'", "'menos'", 
                                           "'m\u00F3dulo'", null, null, 
                                           "'\u00BF'", "'?'", "' '", "','", 
                                           "'Cierto'", "'Falso'" ];

pseudoCodeLexer.prototype.symbolicNames = [ null, "DEF", "REWRITE", "SENTENCE", 
                                            "END", "DO", "ASSIG", "IS", 
                                            "ELSE", "EQUAL", "THEN", "WHILE", 
                                            "LIST", "FUNCT", "PARAM", "NUMBERDEF", 
                                            "STRINGDEF", "BOOLDEF", "INDEX", 
                                            "PRINT", "VALUE", "CONTINUE", 
                                            "OR", "AND", "NOT", "GT", "LT", 
                                            "GTE", "LTE", "ADD", "SUB", 
                                            "MOD", "DIV", "MULT", "OPQUEST", 
                                            "CLQUEST", "SPACE", "COMA", 
                                            "TRUE", "FALSE", "COMMENT", 
                                            "NUMBER", "VAR", "STRING" ];

pseudoCodeLexer.prototype.ruleNames = [ "DEF", "REWRITE", "SENTENCE", "END", 
                                        "DO", "ASSIG", "IS", "ELSE", "EQUAL", 
                                        "THEN", "WHILE", "LIST", "FUNCT", 
                                        "PARAM", "NUMBERDEF", "STRINGDEF", 
                                        "BOOLDEF", "INDEX", "PRINT", "VALUE", 
                                        "CONTINUE", "OR", "AND", "NOT", 
                                        "GT", "LT", "GTE", "LTE", "ADD", 
                                        "SUB", "MOD", "DIV", "MULT", "OPQUEST", 
                                        "CLQUEST", "SPACE", "COMA", "TRUE", 
                                        "FALSE", "COMMENT", "DIGIT", "NUMBER", 
                                        "ID", "WORDS", "VAR", "STRING" ];

pseudoCodeLexer.prototype.grammarFileName = "pseudoCodeLexer.g4";



exports.pseudoCodeLexer = pseudoCodeLexer;

