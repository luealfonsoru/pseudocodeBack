lexer grammar pseudoCodeLexer;

DEF     : 'Sea';
REWRITE : 'Haga que';
SENTENCE: ':';
END     : '.';
DO      : 'haga';
ASSIG   : 'igual a' | 'igual al' | 'sea igual a' | 'sea igual al';
IS      : 'es';
ELSE    : 'por el contrario';
EQUAL   : 'es igual que' | 'sea igual que';
THEN    : 'si es así' | 'entonces';
WHILE   : 'mientras';
LIST    : 'la lista de';
FUNCT   : 'la función que';
PARAM   : 'toma los parámetros' | 'toma el parámetro';
NUMBERDEF  : 'número' | 'números';
STRINGDEF  : 'palabra' | 'palabras' | 'cadena';
BOOLDEF    : 'expresión lógica';
INDEX   : 'en' | 'en la posición' | 'en el indice';
PRINT   : 'imprimir';
VALUE   : 'valor del' | 'valor de la';
CONTINUE    : 'Continuar';

OR      : 'o';
AND     : 'y';
NOT     : 'no';
GT      : 'sea mayor que' | 'es mayor que';
LT      : 'sea menor que' | 'es menor que';
GTE     : 'sea mayor o igual que' | 'es mayor o igual que';
LTE     : 'sea menor o igual que' | 'es menor o igual que';
ADD     : 'más';
SUB     : 'menos';
MOD     : 'módulo';
DIV     : 'dividido' | 'sobre';
MULT    : 'por' | 'multiplicado';
OPQUEST : '¿';
CLQUEST : '?';
SPACE   : ' ';
COMA    : ',';
TRUE    : 'Cierto';
FALSE   : 'Falso';



COMMENT
    : '-'.*?'-'
;

fragment DIGIT
    :[0-9]
;

NUMBER
    : DIGIT+ ('.' DIGIT+)?
;

fragment ID
    : ([a-z] | [A-Z])+
;

fragment WORDS
    : ([a-z] | ' ' | [A-Z])*
;
VAR
    : '\'' ID '\''
;

STRING
    : '"' WORDS '"'
;




