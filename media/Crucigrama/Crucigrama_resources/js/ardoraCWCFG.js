//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Crucigrama Completado"; messageTime=""; messageError="Crucigrama incompleto"; messageErrorG="Crucigrama incompleto"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q3J1Y2lncmFtYQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Uw","RQ","TA","RQ","Qw","Qw","SQ","Tw","Tg","","","",""],["","","","","","","","Ug","","","","",""],["","","","","","","","RA","","","","",""],["","","","","SQ","Tg","Qw","RQ","Ug","Qw","SQ","Tw","Tg"],["","","","","","","","Tg","","TA","","",""],["","Qg","VQ","Ug","Qg","VQ","Sg","QQ","","QQ","","",""],["","","","","","","","TQ","","Vg","","",""],["","","","","","","","SQ","","RQ","","",""],["","","","","","","","RQ","","","","",""],["","","","","","","","Tg","","","","",""],["","","Ug","RQ","Rw","SQ","Uw","VA","Ug","Tw","","",""],["","","","","","","","Tw","","","","",""]];
var x1=[8,1,5,2,3,10];
var y1=[1,1,4,6,11,4];
var x2=[8,9,13,8,10,10];
var y2=[12,1,4,6,11,8];
var imaCW=["","","","","",""];
var audioCW=["","","","","",""];
var defCW=["Ordenamiento","Seleccion","Incercion","Burbuja","Registro","Clave"];
var colNum=13;
var rowNum=12;
