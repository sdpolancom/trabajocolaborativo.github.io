//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Has finalizado satisfactoriamente."; messageTime=""; messageError="Actividad Fallida"; messageErrorG="Actividad Fallida"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="T1ZJ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["Una de estos no es un metodo de ordenamiento.","El metodo burbuja se llama asi por que:","¿Cual de los tres metodos de ordenamiento requiere menos intercambios de elementos?","¿Cual de los metodos de ordenacion es inestable?","¿Que metodo de ordenamiento suele hacer menos comparaciones?"];
var answers1=["MUFsdGVyYWNpb24","MEluY2Vyc2lvbg","MEJ1cmJ1amE","MFNlbGVjY2lvbg"];
var answers2=["MUxvcyBlbGVtZW50b3MgbWFzIGxpZ2Vyb3Mgc3ViZW4gZW4gbGEgbGlzdGEu","MExvcyBlbGVtZW50b3Mgc2UgYWdydXBhbiB5IHNlIG11ZXZlbiBhYmFqbyBkZSBsYSBsaXN0YS4","MExvcyBlbGVtZW50b3MgZm9ybWFuIGJ1cmJ1amFzLg","MExvcyBlbGVtZW50b3MgbWFzIHBlc2Fkb3Mgc3ViZW4gZW4gbGEgbGlzdGEu"];
var answers3=["MVNlbGVjY2lvbg","MEluY2VyY2lvbg","MEJ1cmJ1amE"];
var answers4=["MVNlbGVjY2lvbg","MEJ1cmJ1amE","MEluY2VyY2lvbg"];
var answers5=["MUluY2VyY2lvbg","MFNlbGVjY2lvbg","MEJ1cmJ1amE"];
var ans=[answers1,answers2,answers3,answers4,answers5];
var err=["Respuesta incorrecta","Respuesta incorrecta.","Respuesta incorrecta","Respuesta incorrecta.","Respuesta incorrecta."];
var ima=["","","","",""];
var mp4=["","","","",""];
var ogv=["","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="OVI_resources/media/";
var tiRandOrder=true;
var iT=0;var r_order=[];
