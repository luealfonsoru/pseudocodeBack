const antlr4 = require('antlr4/index');
const PseudoCodeLexer = require('../grammar/pseudoCodeLexer');
const PseudoCodeParser = require('../grammar/pseudoCodeParser');
const PseudoCodeFunctionListener = require('./psudoCodeListener');

function getTokens(input) {
    let error = null
    let chars = new antlr4.InputStream(input)
    let lexer = new PseudoCodeLexer.pseudoCodeLexer(chars)
    let tokens = new antlr4.CommonTokenStream(lexer);
    let parser = new PseudoCodeParser.pseudoCodeParser(tokens)
    parser.buildParseTrees = true;
    parser.removeErrorListeners();
    parser.addErrorListener({
        syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
            error = {
                error: 1,
                info: {
                    message: `${msg}`,
                    line: `${line}`,
                    column: `${column}`
                }
            }
        }
    });
    let ast = parser.root();
    let transpiler = new PseudocodeFunctionListener()
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(transpiler, ast);
    console.log(transpiler.Res, "here");
    if (error)
        return error
    console.log(transpiler.Root)
    return transpiler.Res
}

module.exports = getTokens;

