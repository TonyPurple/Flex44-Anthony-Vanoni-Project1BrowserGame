/**
 * Plan
 * user comes to screen with game title and objective
 * there is a div to choose the character set (hiragana or katakana)
 * when they click the button, the collapsible game rules will show, as well as generating the question cards for the appropriate character set and initializing the scoreboard
 * 
 * Game idea
 * the user types the answer in Romaji (english keys below) in the card's text field for all the Japanese characters they know in the selected kana set
 * they submit answers by pressing enter, repeating for as many cards as they can
 * they are allowed up to 10 incorrect entries before the game will finish
 * if they complete all kana, a finish button or alert should be present to provide their results
 * 
 * Game logic
 * event listener required for enter, check the romaji key entered against the kana value for the character set
 * if correct, turn card green - wrong, turn car red and deduct from chances left
 * update scoreboard accordingly with number of correct and incorrect answers, and chances remaining
 * when chances run out, alert the user and reset the game
 * 
 * Nice to haves 
 * a kana chart that is present prior to beginning the game
 * sound examples of the kana pronunciation, though this is a fairly obvious giveaway for the romaji required in most cases
 * an about this project section, sighting my inspiration for the project and better resources for anyone learning Japanese
 */

//object containing all romaji keys and kana values - access ex kana.a.katakana kana.a.hiragana 
// const kana = {
//     a: { katakana: "ア", hiragana: "あ" },
//     i: { katakana: "イ", hiragana: "い" },
//     u: { katakana: "ウ", hiragana: "う" },
//     e: { katakana: "エ", hiragana: "え" },
//     o: { katakana: "オ", hiragana: "お" },
//     ka: { katakana: "カ", hiragana: "か" },
//     ki: { katakana: "キ", hiragana: "き" },
//     ku: { katakana: "ク", hiragana: "く" },
//     ke: { katakana: "ケ", hiragana: "け" },
//     ko: { katakana: "コ", hiragana: "こ" },
//     sa: { katakana: "サ", hiragana: "さ" },
//     shi: { katakana: "シ", hiragana: "し" },
//     su: { katakana: "ス", hiragana: "す" },
//     se: { katakana: "セ", hiragana: "せ" },
//     so: { katakana: "ソ", hiragana: "そ" },
//     ta: { katakana: "タ", hiragana: "た" },
//     chi: { katakana: "チ", hiragana: "ち" },
//     tsu: { katakana: "ツ", hiragana: "つ" },
//     te: { katakana: "テ", hiragana: "て" },
//     to: { katakana: "ト", hiragana: "と" },
//     na: { katakana: "ナ", hiragana: "な" },
//     ni: { katakana: "ニ", hiragana: "に" },
//     nu: { katakana: "ヌ", hiragana: "ぬ" },
//     ne: { katakana: "ネ", hiragana: "ね" },
//     no: { katakana: "ノ", hiragana: "の" },
//     ha: { katakana: "ハ", hiragana: "は" },
//     hi: { katakana: "ヒ", hiragana: "ひ" },
//     fu: { katakana: "フ", hiragana: "ふ" },
//     he: { katakana: "ヘ", hiragana: "へ" },
//     ho: { katakana: "ホ", hiragana: "ほ" },
//     ma: { katakana: "マ", hiragana: "ま" },
//     mi: { katakana: "ミ", hiragana: "み" },
//     mu: { katakana: "ム", hiragana: "む" },
//     me: { katakana: "メ", hiragana: "め" },
//     mo: { katakana: "モ", hiragana: "も" },
//     ya: { katakana: "ヤ", hiragana: "や" },
//     yu: { katakana: "ユ", hiragana: "ゆ" },
//     yo: { katakana: "ヨ", hiragana: "よ" },
//     ra: { katakana: "ラ", hiragana: "ら" },
//     ri: { katakana: "リ", hiragana: "り" },
//     ru: { katakana: "ル", hiragana: "る" },
//     re: { katakana: "レ", hiragana: "れ" },
//     ro: { katakana: "ロ", hiragana: "ろ" },
//     wa: { katakana: "ワ", hiragana: "わ" },
//     wo: { katakana: "ヲ", hiragana: "を" },
//     n: { katakana: "ン", hiragana: "ん" },
//     ga: { katakana: "ガ", hiragana: "が" },
//     gi: { katakana: "ギ", hiragana: "ぎ" },
//     gu: { katakana: "グ", hiragana: "ぐ" },
//     ge: { katakana: "ゲ", hiragana: "げ" },
//     go: { katakana: "ゴ", hiragana: "ご" },
//     za: { katakana: "ザ", hiragana: "ざ" },
//     ji: { katakana: "ジ", hiragana: "じ" },
//     zu: { katakana: "ズ", hiragana: "ず" },
//     ze: { katakana: "ゼ", hiragana: "ぜ" },
//     zo: { katakana: "ゾ", hiragana: "ぞ" },
//     da: { katakana: "ダ", hiragana: "だ" },
//     di: { katakana: "ヂ", hiragana: "ぢ" },
//     du: { katakana: "ヅ", hiragana: "づ" },
//     de: { katakana: "デ", hiragana: "で" },
//     do: { katakana: "ド", hiragana: "ど" },
//     ba: { katakana: "バ", hiragana: "ば" },
//     bi: { katakana: "ビ", hiragana: "び" },
//     bu: { katakana: "ブ", hiragana: "ぶ" },
//     be: { katakana: "ベ", hiragana: "べ" },
//     bo: { katakana: "ボ", hiragana: "ぼ" },
//     pa: { katakana: "パ", hiragana: "ぱ" },
//     pi: { katakana: "ピ", hiragana: "ぴ" },
//     pu: { katakana: "プ", hiragana: "ぷ" },
//     pe: { katakana: "ペ", hiragana: "ぺ" },
//     po: { katakana: "ポ", hiragana: "ぽ" },
//     kya: { katakana: "キャ", hiragana: "きゃ" },
//     kyu: { katakana: "キュ", hiragana: "きゅ" },
//     kyo: { katakana: "キョ", hiragana: "きょ" },
//     sha: { katakana: "シャ", hiragana: "しゃ" },
//     shu: { katakana: "シュ", hiragana: "しゅ" },
//     she: { katakana: "シェ", hiragana: null },
//     sho: { katakana: "ショ", hiragana: "しょ" },
//     cha: { katakana: "チャ", hiragana: "ちゃ" },
//     chu: { katakana: "チュ", hiragana: "ちゅ" },
//     che: { katakana: "チェ", hiragana: null },
//     cho: { katakana: "チョ", hiragana: "ちょ" },
//     nya: { katakana: "ニャ", hiragana: "にゃ" },
//     nyu: { katakana: "ニュ", hiragana: "にゅ" },
//     nyo: { katakana: "ニョ", hiragana: "にょ" },
//     hya: { katakana: "ヒャ", hiragana: "ひゃ" },
//     hyu: { katakana: "ヒュ", hiragana: "ひゅ" },
//     hyo: { katakana: "ヒョ", hiragana: "ひょ" },
//     mya: { katakana: "ミャ", hiragana: "みゃ" },
//     myu: { katakana: "ミュ", hiragana: "みゅ" },
//     myo: { katakana: "ミョ", hiragana: "みょ" },
//     rya: { katakana: "リャ", hiragana: "りゃ" },
//     ryu: { katakana: "リュ", hiragana: "りゅ" },
//     ryo: { katakana: "リョ", hiragana: "りょ" },
//     gya: { katakana: "ギャ", hiragana: "ぎゃ" },
//     gyu: { katakana: "ギュ", hiragana: "ぎゅ" },
//     gyo: { katakana: "ギョ", hiragana: "ぎょ" },
//     jya: { katakana: "ジャ", hiragana: "じゃ" },
//     jyu: { katakana: "ジュ", hiragana: "じゅ" },
//     jye: { katakana: "ジェ", hiragana: null },
//     jyo: { katakana: "ジョ", hiragana: "じょ" },
//     bya: { katakana: "ビャ", hiragana: "びゃ" },
//     byu: { katakana: "ビュ", hiragana: "びゅ" },
//     byo: { katakana: "ビョ", hiragana: "びょ" },
//     pya: { katakana: "ピャ", hiragana: "ぴゃ" },
//     pyu: { katakana: "ピュ", hiragana: "ぴゅ" },
//     pyo: { katakana: "ピョ", hiragana: "ぴょ" },
// };

//generate an array of hiragana characters
const hiragana = 'あ,い,う,え,お,か,き,く,け,こ,さ,し,す,せ,そ,た,ち,つ,て,と,な,に,ぬ,ね,の,は,ひ,ふ,へ,ほ,ま,み,む,め,も,や,ゆ,よ,ら,り,る,れ,ろ,わ,を,ん,が,ぎ,ぐ,げ,ご,ざ,じ,ず,ぜ,ぞ,だ,ぢ,づ,で,ど,ば,び,ぶ,べ,ぼ,ぱ,ぴ,ぷ,ぺ,ぽ,きゃ,きゅ,きょ,しゃ,しゅ,しょ,ちゃ,ちゅ,ちょ,にゃ,にゅ,にょ,ひゃ,ひゅ,ひょ,みゃ,みゅ,みょ,りゃ,りゅ,りょ,ぎゃ,ぎゅ,ぎょ,じゃ,じゅ,じょ,びゃ,びゅ,びょ,ピャ,ピュ,ぴょ'.split(',');
//generate an array of katakana characters
const katakana = 'ア,イ,ウ,エ,オ,カ,キ,ク,ケ,コ,サ,シ,ス,セ,ソ,タ,チ,ツ,テ,ト,ナ,ニ,ヌ,ネ,ノ,ハ,ヒ,フ,ヘ,ホ,マ,ミ,ム,メ,モ,ヤ,ユ,ヨ,ラ,リ,ル,レ,ロ,ワ,ヲ,ン,ガ,ギ,グ,ゲ,ゴ,ザ,ジ,ズ,ゼ,ゾ,ダ,ヂ,ヅ,デ,ド,バ,ビ,ブ,ベ,ボ,パ,ピ,プ,ペ,ポ,キャ,キュ,キョ,シャ,シュ,シェ,ショ,チャ,チュ,チェ,チョ,ニャ,ニュ,ニョ,ヒャ,ヒュ,ヒョ,ミャ,ミュ,ミョ,リャ,リュ,リョ,ギャ,ギュ,ギョ,ジャ,ジュ,ジェ,ジョ,ビャ,ビュ,ビョ,ピャ,ピュ,ピョ'.split(',')

//generate an array of romaji characters for katakana comparison
const katakanaAnswers = 'a,i,u,e,o,ka,ki,ku,ke,ko,sa,shi,su,se,so,ta,chi,tsu,te,to,na,ni,nu,ne,no,ha,hi,fu,he,ho,ma,mi,mu,me,mo,ya,yu,yo,ra,ri,ru,re,ro,wa,wo,n,ga,gi,gu,ge,go,za,ji,zu,ze,zo,da,di,du,de,do,ba,bi,bu,be,bo,pa,pi,pu,pe,po,kya,kyu,kyo,sha,shu,she,sho,cha,chu,che,cho,nya,nyu,nyo,hya,hyu,hyo,mya,myu,myo,rya,ryu,ryo,gya,gyu,gyo,jya,jyu,jye,jyo,bya,byu,byo,pya,pyu,pyo'.split(',');

//generate an array of romaji characters for hiragana comparison
const hiraganaAnswers = 'a,i,u,e,o,ka,ki,ku,ke,ko,sa,shi,su,se,so,ta,chi,tsu,te,to,na,ni,nu,ne,no,ha,hi,fu,he,ho,ma,mi,mu,me,mo,ya,yu,yo,ra,ri,ru,re,ro,wa,wo,n,ga,gi,gu,ge,go,za,ji,zu,ze,zo,da,di,du,de,do,ba,bi,bu,be,bo,pa,pi,pu,pe,po,kya,kyu,kyo,sha,shu,sho,cha,chu,cho,nya,nyu,nyo,hya,hyu,hyo,mya,myu,myo,rya,ryu,ryo,gya,gyu,gyo,jya,jyu,jyo,bya,byu,byo,pya,pyu,pyo'.split(','); 
//scoreboard variables
let correct = 0;
let incorrect = 0;
let chances = 10;

//game situation updater
let correctElement = () => (document.getElementById('correct').innerHTML = correct);
let incorrectElement = () => (document.getElementById('incorrect').innerHTML = incorrect);
let chancesLeftElement = () => (document.getElementById('chancesLeft').innerHTML = chancesLeft);

//card area
const gameDisplayElement = (string) => (document.getElementById('gameDisplay').innerHTML = string);



let input = document.querySelector('#cards');
input.addEventListener('keyup', function(e) {
    if (e.key === "Enter") {
        console.log(e.target.value)
    }
})

// function getUserAnswer() {
//     console.log(userAnswer);
// };

document.getElementById("hiraganaButton").addEventListener("click", (e) => {
    const generateHiraganaCards = () => {
        let hiraganaCards = '';
        hiragana.forEach(function (hiragana) {
            hiraganaCards += `<div class="card bg-info text-white text-center p-3 border border-warning">
        <h5 class="card-title" value=${hiragana}>${hiragana}</h5>
        <input type="text" class="romaji" value="" size=8 autocomplete="off">
    </div>`;
        });
        return hiraganaCards;
    };

    gameDisplayElement(generateHiraganaCards());
});

document.getElementById("katakanaButton").addEventListener("click", (e) => {
    const generateKatakanaCards = () => {
        let katakanaCards = '';
        katakana.forEach(function (katakana) {
            katakanaCards += `<div class="card bg-info text-white text-center p-3 border border-warning">
        <h5 class="card-title" value=${katakana}>${katakana}</h5>
        <input type="text" class="romaji" value="" size=8 autocomplete="off">
    </div>`;
        });
        return katakanaCards;
    };

    gameDisplayElement(generateKatakanaCards());
});



// function checkAnswer(){
//     let userAnswer = input.romaji.val 
//     if (input.romaji.value === ${katakana}.innerHTML || input.romaji.value === ${hiragana}.innerHTML)
//     return (('hiraganaCards').valueOf${hiragana}) && userAnswer === hiraganaAnswers[idx]
//     || ('katakanaCards').valueOf${katakana}) && userAnswer === katakanaAnswers[idx]
//     )};

//I think I need an object of game settings - this is just a placeholder of what I think I need
// const gameSettings = {
//     'kana': kana,
//     'hiraganaQuestions': true,
//     'katakanaQuestions': true,
//     'hiraganaAnswers': true,
//     'katakanaAnswers': true,
//     'romajiAnswers': true,
//     'showCorrect': true,
//     'showIncorrect': true,
//     'showChances': true,
// };

//current game object, the user will have 10 chances to guess kana coreectly. All correct and incorrect answers will be recorded.
// let currentGame = {
//     'display': '',
//     'chances': 10,
//     'correct': 0,
//     'incorrect': 0,
//     'answers': {
//         'romaji': '',
//         'hiragana': '',
//         'katakana': '',
//     }
// };

//global variables
// const cardTitle = document.getElementsByClassName(".card-title");
// const kanaAnswer = document.getElementsByClassName(".romaji");

// //container variables
// const characterSet = document.querySelector(".characterSet");
// const gameDisplay = document.querySelector(".gameDisplay");
// const buttons = document.querySelectorAll('button');