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
// const hiragana = 'あ,い,う,え,お,か,き,く,け,こ,さ,し,す,せ,そ,た,ち,つ,て,と,な,に,ぬ,ね,の,は,ひ,ふ,へ,ほ,ま,み,む,め,も,や,ゆ,よ,ら,り,る,れ,ろ,わ,を,ん,が,ぎ,ぐ,げ,ご,ざ,じ,ず,ぜ,ぞ,だ,ぢ,づ,で,ど,ば,び,ぶ,べ,ぼ,ぱ,ぴ,ぷ,ぺ,ぽ,きゃ,きゅ,きょ,しゃ,しゅ,しょ,ちゃ,ちゅ,ちょ,にゃ,にゅ,にょ,ひゃ,ひゅ,ひょ,みゃ,みゅ,みょ,りゃ,りゅ,りょ,ぎゃ,ぎゅ,ぎょ,じゃ,じゅ,じょ,びゃ,びゅ,びょ,ピャ,ピュ,ぴょ'.split(',');
// //generate an array of katakana characters
// const katakana = 'ア,イ,ウ,エ,オ,カ,キ,ク,ケ,コ,サ,シ,ス,セ,ソ,タ,チ,ツ,テ,ト,ナ,ニ,ヌ,ネ,ノ,ハ,ヒ,フ,ヘ,ホ,マ,ミ,ム,メ,モ,ヤ,ユ,ヨ,ラ,リ,ル,レ,ロ,ワ,ヲ,ン,ガ,ギ,グ,ゲ,ゴ,ザ,ジ,ズ,ゼ,ゾ,ダ,ヂ,ヅ,デ,ド,バ,ビ,ブ,ベ,ボ,パ,ピ,プ,ペ,ポ,キャ,キュ,キョ,シャ,シュ,シェ,ショ,チャ,チュ,チェ,チョ,ニャ,ニュ,ニョ,ヒャ,ヒュ,ヒョ,ミャ,ミュ,ミョ,リャ,リュ,リョ,ギャ,ギュ,ギョ,ジャ,ジュ,ジェ,ジョ,ビャ,ビュ,ビョ,ピャ,ピュ,ピョ'.split(',')

// //generate an array of romaji characters for katakana comparison
// const katakanaAnswers = 'a,i,u,e,o,ka,ki,ku,ke,ko,sa,shi,su,se,so,ta,chi,tsu,te,to,na,ni,nu,ne,no,ha,hi,fu,he,ho,ma,mi,mu,me,mo,ya,yu,yo,ra,ri,ru,re,ro,wa,wo,n,ga,gi,gu,ge,go,za,ji,zu,ze,zo,da,di,du,de,do,ba,bi,bu,be,bo,pa,pi,pu,pe,po,kya,kyu,kyo,sha,shu,she,sho,cha,chu,che,cho,nya,nyu,nyo,hya,hyu,hyo,mya,myu,myo,rya,ryu,ryo,gya,gyu,gyo,jya,jyu,jye,jyo,bya,byu,byo,pya,pyu,pyo'.split(',');

// //generate an array of romaji characters for hiragana comparison
// const hiraganaAnswers = 'a,i,u,e,o,ka,ki,ku,ke,ko,sa,shi,su,se,so,ta,chi,tsu,te,to,na,ni,nu,ne,no,ha,hi,fu,he,ho,ma,mi,mu,me,mo,ya,yu,yo,ra,ri,ru,re,ro,wa,wo,n,ga,gi,gu,ge,go,za,ji,zu,ze,zo,da,di,du,de,do,ba,bi,bu,be,bo,pa,pi,pu,pe,po,kya,kyu,kyo,sha,shu,sho,cha,chu,cho,nya,nyu,nyo,hya,hyu,hyo,mya,myu,myo,rya,ryu,ryo,gya,gyu,gyo,jya,jyu,jyo,bya,byu,byo,pya,pyu,pyo'.split(',');

const hiragana = [
    {kana:'あ', ans:'a'},
    {kana:'い', ans:'i'},
    {kana:'う', ans:'u'},
    {kana:'え', ans:'e'},
    {kana:'お', ans:'o'},
    {kana:'か', ans:'ka'},
    {kana:'き', ans:'ki'},
    {kana:'く', ans:'ku'},
    {kana:'け', ans:'ke'},
    {kana:'こ', ans:'ko'},
    {kana:'さ', ans:'sa'},
    {kana:'し', ans:'shi'},
    {kana:'す', ans:'su'},
    {kana:'せ', ans:'se'},
    {kana:'そ', ans:'so'},
    {kana:'た', ans:'ta'},
    {kana:'ち', ans:'chi'},
    {kana:'つ', ans:'tsu'},
    {kana:'て', ans:'te'},
    {kana:'と', ans:'to'},
    {kana:'な', ans:'na'},
    {kana:'に', ans:'ni'},
    {kana:'ぬ', ans:'nu'},
    {kana:'ね', ans:'ne'},
    {kana:'の', ans:'no'},
    {kana:'は', ans:'ha'},
    {kana:'ひ', ans:'hi'},
    {kana:'ふ', ans:'fu'},
    {kana:'へ', ans:'he'},
    {kana:'ほ', ans:'ho'},
    {kana:'ま', ans:'ma'},
    {kana:'み', ans:'mi'},
    {kana:'む', ans:'mu'},
    {kana:'め', ans:'me'},
    {kana:'も', ans:'mo'},
    {kana:'や', ans:'ya'},
    {kana:'ゆ', ans:'yu'},
    {kana:'よ', ans:'yo'},
    {kana:'ら', ans:'ra'},
    {kana:'り', ans:'ri'},
    {kana:'る', ans:'ru'},
    {kana:'れ', ans:'re'},
    {kana:'ろ', ans:'ro'},
    {kana:'わ', ans:'wa'},
    {kana:'ん', ans:'n'},
    {kana:'を', ans:'wo'},
    {kana:'が', ans:'ga'},
    {kana:'ぎ', ans:'gi'},
    {kana:'ぐ', ans:'gu'},
    {kana:'げ', ans:'ge'},
    {kana:'ご', ans:'go'},
    {kana:'ざ', ans:'za'},
    {kana:'じ', ans:'ji'},
    {kana:'ず', ans:'zu'},
    {kana:'ぜ', ans:'ze'},
    {kana:'ぞ', ans:'zo'},
    {kana:'だ', ans:'da'},
    {kana:'ぢ', ans:'di'},
    {kana:'づ', ans:'du'},
    {kana:'で', ans:'de'},
    {kana:'ど', ans:'do'},
    {kana:'ば', ans:'ba'},
    {kana:'び', ans:'bi'},
    {kana:'ぶ', ans:'bu'},
    {kana:'べ', ans:'be'},
    {kana:'ぼ', ans:'bo'},
    {kana:'ぱ', ans:'pa'},
    {kana:'ぴ', ans:'pi'},
    {kana:'ぷ', ans:'pu'},
    {kana:'ぺ', ans:'pe'},
    {kana:'ぽ', ans:'po'},
    {kana:'きゃ', ans:'kya'},
    {kana:'きゅ', ans:'kyu'},
    {kana:'きょ', ans:'kyo'},
    {kana:'しゃ', ans:'sha'},
    {kana:'しゅ', ans:'shu'},
    {kana:'しょ', ans:'sho'},
    {kana:'ちゃ', ans:'cha'},
    {kana:'ちゅ', ans:'chu'},
    {kana:'ちょ', ans:'cho'},
    {kana:'にゃ', ans:'nya'},
    {kana:'にゅ', ans:'nyu'},
    {kana:'にょ', ans:'nyo'},
    {kana:'ひゃ', ans:'hya'},
    {kana:'ひゅ', ans:'hyu'},
    {kana:'ひょ', ans:'hyo'},
    {kana:'みゃ', ans:'mya'},
    {kana:'みゅ', ans:'myu'},
    {kana:'みょ', ans:'myo'},
    {kana:'りゃ', ans:'rya'},
    {kana:'りゅ', ans:'ryu'},
    {kana:'りょ', ans:'ryo'},
    {kana:'ぎゃ', ans:'gya'},
    {kana:'ぎゅ', ans:'gyu'},
    {kana:'ぎょ', ans:'gyo'},
    {kana:'じゃ', ans:'jya'},
    {kana:'じゅ', ans:'jyu'},
    {kana:'じょ', ans:'jyo'},
    {kana:'ぢゃ', ans:'dya'},
    {kana:'ぢゅ', ans:'dyu'},
    {kana:'ぢょ', ans:'dyo'},
    {kana:'びゃ', ans:'bya'},
    {kana:'びゅ', ans:'byu'},
    {kana:'びょ', ans:'byo'},
    {kana:'ぴゃ', ans:'pya'},
    {kana:'ぴゅ', ans:'pyu'},
    {kana:'ぴょ', ans:'pyo'},
]

const katakana = [
    {kana:'ア', ans:'a'},
    {kana:'イ', ans:'i'},
    {kana:'ウ', ans:'u'},
    {kana:'エ', ans:'e'},
    {kana:'オ', ans:'o'},
    {kana:'カ', ans:'ka'},
    {kana:'キ', ans:'ki'},
    {kana:'ク', ans:'ku'},
    {kana:'ケ', ans:'ke'},
    {kana:'コ', ans:'ko'},
    {kana:'サ', ans:'sa'},
    {kana:'シ', ans:'shi'},
    {kana:'ス', ans:'su'},
    {kana:'セ', ans:'se'},
    {kana:'ソ', ans:'so'},
    {kana:'タ', ans:'ta'},
    {kana:'チ', ans:'chi'},
    {kana:'ツ', ans:'tsu'},
    {kana:'テ', ans:'te'},
    {kana:'ト', ans:'to'},
    {kana:'ナ', ans:'na'},
    {kana:'ニ', ans:'ni'},
    {kana:'ヌ', ans:'nu'},
    {kana:'ネ', ans:'ne'},
    {kana:'ノ', ans:'no'},
    {kana:'ハ', ans:'ha'},
    {kana:'ヒ', ans:'hi'},
    {kana:'フ', ans:'fu'},
    {kana:'ヘ', ans:'he'},
    {kana:'ホ', ans:'ho'},
    {kana:'マ', ans:'ma'},
    {kana:'ミ', ans:'mi'},
    {kana:'ム', ans:'mu'},
    {kana:'メ', ans:'me'},
    {kana:'モ', ans:'mo'},
    {kana:'ヤ', ans:'ya'},
    {kana:'ユ', ans:'yu'},
    {kana:'ヨ', ans:'yo'},
    {kana:'ラ', ans:'ra'},
    {kana:'リ', ans:'ri'},
    {kana:'ル', ans:'ru'},
    {kana:'レ', ans:'re'},
    {kana:'ロ', ans:'ro'},
    {kana:'ワ', ans:'wa'},
    {kana:'ン', ans:'n'},
    {kana:'ヲ', ans:'wo'},
    {kana:'ガ', ans:'ga'},
    {kana:'ギ', ans:'gi'},
    {kana:'グ', ans:'gu'},
    {kana:'ゲ', ans:'ge'},
    {kana:'ゴ', ans:'go'},
    {kana:'ザ', ans:'za'},
    {kana:'ジ', ans:'ji'},
    {kana:'ズ', ans:'zu'},
    {kana:'ゼ', ans:'ze'},
    {kana:'ゾ', ans:'zo'},
    {kana:'ダ', ans:'da'},
    {kana:'ヂ', ans:'di'},
    {kana:'ヅ', ans:'du'},
    {kana:'デ', ans:'de'},
    {kana:'ド', ans:'do'},
    {kana:'バ', ans:'ba'},
    {kana:'ビ', ans:'bi'},
    {kana:'ブ', ans:'bu'},
    {kana:'ベ', ans:'be'},
    {kana:'ボ', ans:'bo'},
    {kana:'パ', ans:'pa'},
    {kana:'ピ', ans:'pi'},
    {kana:'プ', ans:'pu'},
    {kana:'ペ', ans:'pe'},
    {kana:'ポ', ans:'po'},
    {kana:'キャ', ans:'kya'},
    {kana:'キュ', ans:'kyu'},
    {kana:'キョ', ans:'kyo'},
    {kana:'シャ', ans:'sha'},
    {kana:'シュ', ans:'shu'},
    {kana:'シェ', ans:'she'},
    {kana:'ショ', ans:'sho'},
    {kana:'チャ', ans:'cha'},
    {kana:'チュ', ans:'chu'},
    {kana:'チェ', ans:'che'},
    {kana:'チョ', ans:'cho'},
    {kana:'ニャ', ans:'nya'},
    {kana:'ニュ', ans:'nyu'},
    {kana:'ニョ', ans:'nyo'},
    {kana:'ヒャ', ans:'hya'},
    {kana:'ヒュ', ans:'hyu'},
    {kana:'ヒョ', ans:'hyo'},
    {kana:'ミャ', ans:'mya'},
    {kana:'ミュ', ans:'myu'},
    {kana:'ミョ', ans:'myo'},
    {kana:'リャ', ans:'rya'},
    {kana:'リュ', ans:'ryu'},
    {kana:'リョ', ans:'ryo'},
    {kana:'ギャ', ans:'gya'},
    {kana:'ギュ', ans:'gyu'},
    {kana:'ギョ', ans:'gyo'},
    {kana:'ジャ', ans:'jya'},
    {kana:'ジュ', ans:'jyu'},
    {kana:'ジェ', ans:'jye'},
    {kana:'ジョ', ans:'jyo'},
    {kana:'ヂャ', ans:'dya'},
    {kana:'ヂュ', ans:'dyu'},
    {kana:'ヂョ', ans:'dyo'},
    {kana:'ビャ', ans:'bya'},
    {kana:'ビュ', ans:'byu'},
    {kana:'ビョ', ans:'byo'},
    {kana:'ピャ', ans:'pya'},
    {kana:'ピュ', ans:'pyu'},
    {kana:'ピョ', ans:'pyo'},
]

const buttons = document.querySelectorAll('button');
let playHiragana
let playKatakana

//scoreboard variables
let correct = 0;
let incorrect = 0;
let chancesLeft = 15;

//game situation updater
const correctElement = () => (document.getElementById('correct').innerHTML = `${correct}`);
const incorrectElement = () => (document.getElementById('incorrect').innerHTML = `${incorrect}`);
const chancesLeftElement = () => (document.getElementById('chancesLeft').innerHTML = `${chancesLeft}`);

let hiraganaCards = ''
let katakanaCards = ''


//card area
const gameDisplayElement = (string) => (document.getElementById('gameDisplay').innerHTML = string);

document.getElementById("hiraganaButton").addEventListener("click", (e) => {
    const generateHiraganaCards = () => {
        // let hiraganaCards = '';
        hiragana.forEach(function (hiragana, idx) {
            hiraganaCards += `<div class="card bg-info text-white text-center p-3 border border-warning">
            <label>
        <h5 class="card-title" value=${hiragana.kana}>${hiragana.kana}</h5>
        <input id=${idx} type="text" class="romaji" value="" size=8 autocomplete="off"></label>
    </div>`;
        });
        return hiraganaCards;
    };

    gameDisplayElement(generateHiraganaCards());
    playHiragana = true;
});

document.getElementById("katakanaButton").addEventListener("click", (e) => {
    const generateKatakanaCards = () => {
        // let katakanaCards = '';
        katakana.forEach(function (katakana, idx) {
            katakanaCards += `<div class="card bg-info text-white text-center p-3 border border-warning">
            <label>
        <h5 class="card-title" value=${katakana.kana}>${katakana.kana}</h5>
        <input id=${idx} type="text" class="romaji" value="" size=8 autocomplete="off"></label>
    </div>`;
        });
        return katakanaCards;
    };

    gameDisplayElement(generateKatakanaCards());
    playKatakana = true;
});

let userAnswer;
let userIndex;
var kana

let input = document.querySelector('#cards');
input.addEventListener('keyup', function (e) {
    if (e.key === "Enter") {
        userAnswer = e.target.value.toLowerCase()
        userIndex = e.target.id
        checkAnswer(userAnswer, userIndex)
    }
})

function checkAnswer(userAnswer, idx) {
    if(playHiragana === true) {
kana = hiragana[idx]}
    else if(playKatakana === true) {
kana = katakana[idx]}
    let isCorrect = userAnswer === kana.ans
    if(isCorrect) {
        showCorrect()
    }else {
        showIncorrect()
    }
}

function showCorrect() {
    alert('correct')
}

function showIncorrect() {
    alert('incorrect')
}

correctElement()
incorrectElement()
chancesLeftElement()

// function showCorrect() {
//     correct += 1;
// }

// function showIncorrect() {
//     incorrect += 1;
// }

// correctElement()
// incorrectElement()
// chancesLeftElement()



