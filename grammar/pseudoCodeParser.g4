parser grammar pseudoCodeParser;

options {
	tokenVocab = pseudoCodeLexer;
}

root: expr SPACE root | EOF;

expr: DEF SPACE var_declaration | REWRITE SPACE var_declaration ;

var_declaration:
	VAR END
	| VAR SPACE ASSIG SPACE VALUE SPACE element
	| VAR SPACE ASSIG SPACE element
	| VAR SPACE FUNCT func_def END;

element:
	NUMBERDEF SPACE num_expr END
	| BOOLDEF SPACE OPQUEST bool_expr CLQUEST END
	| STRINGDEF SPACE str_expr END;

func_def:
	SENTENCE SPACE expr
	| SPACE PARAM SPACE param_def SPACE expr;

param_def: VAR SPACE multi_param_def SENTENCE | VAR SENTENCE;

multi_param_def:
	COMA VAR SPACE multi_param_def
	| AND SPACE VAR
	|;
num_expr:
	NUMBER
	| VAR
	| NUMBER SPACE ADD SPACE num_expr
	| NUMBER SPACE SUB SPACE num_expr
	| NUMBER SPACE MULT SPACE num_expr
	| NUMBER SPACE DIV SPACE num_expr
	| NUMBER SPACE MOD SPACE num_expr
	| VAR SPACE ADD SPACE num_expr
	| VAR SPACE SUB SPACE num_expr
	| VAR SPACE MULT SPACE num_expr
	| VAR SPACE DIV SPACE num_expr
	| VAR SPACE MOD SPACE num_expr;

bool_expr:
	TRUE
	| FALSE
	| bool_expr SPACE OR SPACE bool_expr
	| bool_expr SPACE AND SPACE bool_expr
	| NOT SPACE bool_expr;

str_expr: STRING | STRING SPACE ADD str_expr;