const antlr4 = require('antlr4/index');
const PseudocodeLexer = require('../grammar/pseudoCodeLexer');
const PseudocodeParser = require('../grammar/pseudoCodeParser');
var PseudocodeListener = require('../grammar/pseudoCodeParserListener').pseudoCodeParserListener;
PseudocodeFunctionListener = function () {
    this.Res = { vars: {}, error: null };
    this.currentCodeSnippet = ''
    this.isDef = false
    PseudocodeListener.call(this); // inherit default listener
    return this;
};

// inherit default listener
PseudocodeFunctionListener.prototype = Object.create(PseudocodeListener.prototype);
PseudocodeFunctionListener.prototype.constructor = PseudocodeFunctionListener;
PseudocodeFunctionListener.prototype.enterExpr = function(ctx){
    if(ctx.DEF()){
        this.isDef = true
    }else{
        this.isDef = false
    }
}
PseudocodeFunctionListener.prototype.enterVar_declaration = function (ctx) {
    console.log(ctx.getText())
    let value = undefined
    
    let currentElement = null
    this.currentCodeSnippet = ""

    if (this.Res.vars[ctx.VAR().getText()] && this.isDef) {
        this.Res.error = { message: `Reinicializando variable: la variable ${ctx.VAR().getText()} ya fue declarada`, }
    }
    if (ctx.element()) {
        if (ctx.element().num_expr()) {
            currentElement = ctx.element().num_expr()
            this.visit(currentElement)
            try{
                value = eval(this.currentCodeSnippet)
            }catch{
                this.Res.error = "Error al evaluar expresión"
            }
        }
    }
    this.Res.vars[ctx.VAR().getText()] = { value };
}
PseudocodeFunctionListener.prototype.visit = function (ctx){
    if(ctx.NUMBER()){
        this.currentCodeSnippet += ` ${ctx.NUMBER().getText()} `
    }
    if(ctx.VAR()){
        if(this.Res.vars[ctx.VAR().getText()]){
            this.currentCodeSnippet += ` ${this.Res.vars[ctx.VAR().getText()].value} `
        }else{
            this.Res.error = `La variable ${ctx.VAR().getText()} en la expresión "${ctx.getText()}" no fue declarada anteriormente`
        }
    }
    if(ctx.ADD()){
        this.currentCodeSnippet += ' + '
    }
    if(ctx.SUB()){
        this.currentCodeSnippet += ' - '
    }
    if(ctx.MULT()){
        this.currentCodeSnippet += ' * '
    }
    if(ctx.DIV()){
        this.currentCodeSnippet += ' / '
    }
    if(ctx.MOD()){
        this.currentCodeSnippet += ' % '
    }
    if(ctx.getChildCount() > 0){
        for(let i = 0; i<ctx.getChildCount(); i++){
            if(ctx.getChild(i).getChildCount() > 0){
                this.visit(ctx.getChild(i))
            }
        }
    }

}

exports.PseudocodeFunctionListener = PseudocodeFunctionListener;