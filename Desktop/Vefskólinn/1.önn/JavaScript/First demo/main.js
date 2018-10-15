var hello = "halló heimur";
/*
þetta er rosalega langt comment
*/
var tala = "5";

var bool = "true";

// || eða (or)
// && og (and)
// ! ekki (not)

var JavaScriptErSpennandi = true;
var thettaErOmurlegurDagur = false;

var test3 = JavaScriptErSpennandi && thettaErOmurlegurDagur; //false
var test4 = JavaScriptErSpennandi || thettaErOmurlegurDagur; //true
var test5 = !thettaErOmurlegurDagur; //true


/* VERKEFNI 1 */

/* sp 1 */
var sp1 = "Spurning" + " 1";

/* sp2 */
var sp2 = 150 + 105 - 10 / 4 * 2;

/* sp3 */
var sp3 = false && !true || true;

/* sp4 */
var sp4 = 66 < 77 == 77 === 77 > 66;

/* sp5 */
var sp5 = 7 <= 7 >= 5 !== 8;

/* sp6 */
var aboutKalli = "kalli er góður strákur";
var isItTrueWhatTheySayAboutKalli = aboutKalli === "kalli er góður strákur";
var sp6 = "það er true vegna þess að þú gefur 'isItTrue....' það gildi sem kemur út úr 'aboutKalli === kalli er góður strákur' <- þessu sem er einmitt true";

/* sp7 */
var aboutPalli = "palli er vondur strákur";
var isItTrueWhatTheySayAboutPalli = aboutPalli==="palli er vondur strákur" && !"palli er góður strákur";
var sp7 = "það er false vegna þess að ef það er 1 false í &&-statementi þá kemur út false";

/* sp8 */
var a = !!0;
var b = !!-2;
var c = !!"";
var d = !!"kalli";
var sp8 = "a og c eru báðar false vegna þess að 0 og ekkert getur hvorki verið positive né negative, á meðan !!(double negative=positive) gerir b og d sannar því þær haldast óbreyttar. !! breytir string yfir í boolean.";

/* sp9 */
var myNumber = 5;
var isMyNumberBetween2and9 = 5 < 9 > 2;
var sp9 = "5 er vissulega á milli 2 og 9 "