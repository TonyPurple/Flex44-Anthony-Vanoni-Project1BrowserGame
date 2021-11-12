/**
 * Plan
 * user comes to screen with game title and objective
 * there is a div to choose the character set (hiragana or katakana)
 * when they click the button, the game rules button will appear, as well as generating the randomized question cards for the appropriate character set and initializing the scoreboard
 * 
 * Game idea
 * the user types the answer in Romaji (english keys below) in the card's text field for all the Japanese characters they know in the selected kana set
 * they submit answers by pressing enter, repeating for as many cards as they can
 * they are allowed up to 15 incorrect entries before the game will finish
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
    { kana: 'あ', ans: 'a', audio: 'audio/a.mp3' },
    { kana: 'い', ans: 'i', audio: 'audio/i.mp3' },
    { kana: 'う', ans: 'u', audio: 'audio/u.mp3' },
    { kana: 'え', ans: 'e', audio: 'audio/e.mp3' },
    { kana: 'お', ans: 'o', audio: 'audio/o.mp3' },
    { kana: 'か', ans: 'ka', audio: 'audio/ka.mp3' },
    { kana: 'き', ans: 'ki', audio: 'audio/ki.mp3' },
    { kana: 'く', ans: 'ku', audio: 'audio/ku.mp3' },
    { kana: 'け', ans: 'ke', audio: 'audio/ke.mp3' },
    { kana: 'こ', ans: 'ko', audio: 'audio/ko.mp3' },
    { kana: 'さ', ans: 'sa', audio: 'audio/sa.mp3' },
    { kana: 'し', ans: 'shi', audio: 'audio/shi.mp3' },
    { kana: 'す', ans: 'su', audio: 'audio/su.mp3' },
    { kana: 'せ', ans: 'se', audio: 'audio/se.mp3' },
    { kana: 'そ', ans: 'so', audio: 'audio/so.mp3' },
    { kana: 'た', ans: 'ta', audio: 'audio/ta.mp3' },
    { kana: 'ち', ans: 'chi', audio: 'audio/chi.mp3' },
    { kana: 'つ', ans: 'tsu', audio: 'audio/tsu.mp3' },
    { kana: 'て', ans: 'te', audio: 'audio/te.mp3' },
    { kana: 'と', ans: 'to', audio: 'audio/to.mp3' },
    { kana: 'な', ans: 'na', audio: 'audio/na.mp3' },
    { kana: 'に', ans: 'ni', audio: 'audio/ni.mp3' },
    { kana: 'ぬ', ans: 'nu', audio: 'audio/nu.mp3' },
    { kana: 'ね', ans: 'ne', audio: 'audio/ne.mp3' },
    { kana: 'の', ans: 'no', audio: 'audio/no.mp3' },
    { kana: 'は', ans: 'ha', audio: 'audio/ha.mp3' },
    { kana: 'ひ', ans: 'hi', audio: 'audio/hi.mp3' },
    { kana: 'ふ', ans: 'fu', audio: 'audio/fu.mp3' },
    { kana: 'へ', ans: 'he', audio: 'audio/he.mp3' },
    { kana: 'ほ', ans: 'ho', audio: 'audio/ho.mp3' },
    { kana: 'ま', ans: 'ma', audio: 'audio/ma.mp3' },
    { kana: 'み', ans: 'mi', audio: 'audio/mi.mp3' },
    { kana: 'む', ans: 'mu', audio: 'audio/mu.mp3' },
    { kana: 'め', ans: 'me', audio: 'audio/me.mp3' },
    { kana: 'も', ans: 'mo', audio: 'audio/mo.mp3' },
    { kana: 'や', ans: 'ya', audio: 'audio/ya.mp3' },
    { kana: 'ゆ', ans: 'yu', audio: 'audio/yu.mp3' },
    { kana: 'よ', ans: 'yo', audio: 'audio/yo.mp3' },
    { kana: 'ら', ans: 'ra', audio: 'audio/ra.mp3' },
    { kana: 'り', ans: 'ri', audio: 'audio/ri.mp3' },
    { kana: 'る', ans: 'ru', audio: 'audio/ru.mp3' },
    { kana: 'れ', ans: 're', audio: 'audio/re.mp3' },
    { kana: 'ろ', ans: 'ro', audio: 'audio/ro.mp3' },
    { kana: 'わ', ans: 'wa', audio: 'audio/wa.mp3' },
    { kana: 'ん', ans: 'n', audio: 'audio/n.mp3' },
    { kana: 'を', ans: 'wo', audio: 'audio/o_(1).mp3' },
    { kana: 'が', ans: 'ga', audio: 'audio/kanasound-ga.mp3' },
    { kana: 'ぎ', ans: 'gi', audio: 'audio/kanasound-gi.mp3' },
    { kana: 'ぐ', ans: 'gu', audio: 'audio/kanasound-gu.mp3' },
    { kana: 'げ', ans: 'ge', audio: 'audio/kanasound-ge.mp3' },
    { kana: 'ご', ans: 'go', audio: 'audio/kanasound-go.mp3' },
    { kana: 'ざ', ans: 'za', audio: 'audio/kanasound-za.mp3' },
    { kana: 'じ', ans: 'ji', audio: 'audio/kanasound-ji.mp3' },
    { kana: 'ず', ans: 'zu', audio: 'audio/kanasound-zu.mp3' },
    { kana: 'ぜ', ans: 'ze', audio: 'audio/kanasound-ze.mp3' },
    { kana: 'ぞ', ans: 'zo', audio: 'audio/kanasound-zo.mp3' },
    { kana: 'だ', ans: 'da', audio: 'audio/kanasound-da.mp3' },
    { kana: 'ぢ', ans: 'di', audio: 'audio/kanasound-ji_(1).mp3' },
    { kana: 'づ', ans: 'du', audio: 'audio/kanasound-zu_(1).mp3' },
    { kana: 'で', ans: 'de', audio: 'audio/kanasound-de.mp3' },
    { kana: 'ど', ans: 'do', audio: 'audio/kanasound-do.mp3' },
    { kana: 'ば', ans: 'ba', audio: 'audio/kanasound-ba.mp3' },
    { kana: 'び', ans: 'bi', audio: 'audio/kanasound-bi.mp3' },
    { kana: 'ぶ', ans: 'bu', audio: 'audio/kanasound-bu.mp3' },
    { kana: 'べ', ans: 'be', audio: 'audio/kanasound-be.mp3' },
    { kana: 'ぼ', ans: 'bo', audio: 'audio/kanasound-bo.mp3' },
    { kana: 'ぱ', ans: 'pa', audio: 'audio/kanasound-pa.mp3' },
    { kana: 'ぴ', ans: 'pi', audio: 'audio/kanasound-pi.mp3' },
    { kana: 'ぷ', ans: 'pu', audio: 'audio/kanasound-pu.mp3' },
    { kana: 'ぺ', ans: 'pe', audio: 'audio/kanasound-pe.mp3' },
    { kana: 'ぽ', ans: 'po', audio: 'audio/kanasound-po.mp3' },
    { kana: 'きゃ', ans: 'kya', audio: 'audio/kanasound-kya.mp3' },
    { kana: 'きゅ', ans: 'kyu', audio: 'audio/kanasound-kyu.mp3' },
    { kana: 'きょ', ans: 'kyo', audio: 'audio/kanasound-kyo.mp3' },
    { kana: 'しゃ', ans: 'sha', audio: 'audio/kanasound-sha.mp3' },
    { kana: 'しゅ', ans: 'shu', audio: 'audio/kanasound-shu.mp3' },
    { kana: 'しょ', ans: 'sho', audio: 'audio/kanasound-sho.mp3' },
    { kana: 'ちゃ', ans: 'cha', audio: 'audio/kanasound-cha.mp3' },
    { kana: 'ちゅ', ans: 'chu', audio: 'audio/kanasound-chu.mp3' },
    { kana: 'ちょ', ans: 'cho', audio: 'audio/kanasound-cho.mp3' },
    { kana: 'にゃ', ans: 'nya', audio: 'audio/kanasound-nya.mp3' },
    { kana: 'にゅ', ans: 'nyu', audio: 'audio/kanasound-nyu.mp3' },
    { kana: 'にょ', ans: 'nyo', audio: 'audio/kanasound-nyo.mp3' },
    { kana: 'ひゃ', ans: 'hya', audio: 'audio/kanasound-hya.mp3' },
    { kana: 'ひゅ', ans: 'hyu', audio: 'audio/kanasound-hyu.mp3' },
    { kana: 'ひょ', ans: 'hyo', audio: 'audio/kanasound-hyo.mp3' },
    { kana: 'みゃ', ans: 'mya', audio: 'audio/kanasound-mya.mp3' },
    { kana: 'みゅ', ans: 'myu', audio: 'audio/kanasound-myu.mp3' },
    { kana: 'みょ', ans: 'myo', audio: 'audio/kanasound-myo.mp3' },
    { kana: 'りゃ', ans: 'rya', audio: 'audio/kanasound-rya.mp3' },
    { kana: 'りゅ', ans: 'ryu', audio: 'audio/kanasound-ryu.mp3' },
    { kana: 'りょ', ans: 'ryo', audio: 'audio/kanasound-ryo.mp3' },
    { kana: 'ぎゃ', ans: 'gya', audio: 'audio/kanasound-gya.mp3' },
    { kana: 'ぎゅ', ans: 'gyu', audio: 'audio/kanasound-gyu.mp3' },
    { kana: 'ぎょ', ans: 'gyo', audio: 'audio/kanasound-gyo.mp3' },
    { kana: 'じゃ', ans: 'jya', audio: 'audio/kanasound-ja.mp3' },
    { kana: 'じゅ', ans: 'jyu', audio: 'audio/kanasound-ju.mp3' },
    { kana: 'じょ', ans: 'jyo', audio: 'audio/kanasound-jo.mp3' },
    { kana: 'ぢゃ', ans: 'dya', audio: 'audio/kanasound-jya.mp3' },
    { kana: 'ぢゅ', ans: 'dyu', audio: 'audio/kanasound-jyu.mp3' },
    { kana: 'ぢょ', ans: 'dyo', audio: 'audio/kanasound-jyo.mp3' },
    { kana: 'びゃ', ans: 'bya', audio: 'audio/kanasound-bya.mp3' },
    { kana: 'びゅ', ans: 'byu', audio: 'audio/kanasound-byu.mp3' },
    { kana: 'びょ', ans: 'byo', audio: 'audio/kanasound-byo.mp3' },
    { kana: 'ぴゃ', ans: 'pya', audio: 'audio/kanasound-pya.mp3' },
    { kana: 'ぴゅ', ans: 'pyu', audio: 'audio/kanasound-pyu.mp3' },
    { kana: 'ぴょ', ans: 'pyo', audio: 'audio/kanasound-pyo.mp3' },
]

const katakana = [
    { kana: 'ア', ans: 'a', audio: 'audio/a.mp3' },
    { kana: 'イ', ans: 'i', audio: 'audio/i.mp3' },
    { kana: 'ウ', ans: 'u', audio: 'audio/u.mp3' },
    { kana: 'エ', ans: 'e', audio: 'audio/e.mp3' },
    { kana: 'オ', ans: 'o', audio: 'audio/o.mp3' },
    { kana: 'カ', ans: 'ka', audio: 'audio/ka.mp3' },
    { kana: 'キ', ans: 'ki', audio: 'audio/ki.mp3' },
    { kana: 'ク', ans: 'ku', audio: 'audio/ku.mp3' },
    { kana: 'ケ', ans: 'ke', audio: 'audio/ke.mp3' },
    { kana: 'コ', ans: 'ko', audio: 'audio/ko.mp3' },
    { kana: 'サ', ans: 'sa', audio: 'audio/sa.mp3' },
    { kana: 'シ', ans: 'shi', audio: 'audio/shi.mp3' },
    { kana: 'ス', ans: 'su', audio: 'audio/su.mp3' },
    { kana: 'セ', ans: 'se', audio: 'audio/se.mp3' },
    { kana: 'ソ', ans: 'so', audio: 'audio/so.mp3' },
    { kana: 'タ', ans: 'ta', audio: 'audio/ta.mp3' },
    { kana: 'チ', ans: 'chi', audio: 'audio/chi.mp3' },
    { kana: 'ツ', ans: 'tsu', audio: 'audio/tsu.mp3' },
    { kana: 'テ', ans: 'te', audio: 'audio/te.mp3' },
    { kana: 'ト', ans: 'to', audio: 'audio/to.mp3' },
    { kana: 'ナ', ans: 'na', audio: 'audio/na.mp3' },
    { kana: 'ニ', ans: 'ni', audio: 'audio/ni.mp3' },
    { kana: 'ヌ', ans: 'nu', audio: 'audio/nu.mp3' },
    { kana: 'ネ', ans: 'ne', audio: 'audio/ne.mp3' },
    { kana: 'ノ', ans: 'no', audio: 'audio/no.mp3' },
    { kana: 'ハ', ans: 'ha', audio: 'audio/ha.mp3' },
    { kana: 'ヒ', ans: 'hi', audio: 'audio/hi.mp3' },
    { kana: 'フ', ans: 'fu', audio: 'audio/fu.mp3' },
    { kana: 'ヘ', ans: 'he', audio: 'audio/he.mp3' },
    { kana: 'ホ', ans: 'ho', audio: 'audio/ho.mp3' },
    { kana: 'マ', ans: 'ma', audio: 'audio/ma.mp3' },
    { kana: 'ミ', ans: 'mi', audio: 'audio/mi.mp3' },
    { kana: 'ム', ans: 'mu', audio: 'audio/mu.mp3' },
    { kana: 'メ', ans: 'me', audio: 'audio/me.mp3' },
    { kana: 'モ', ans: 'mo', audio: 'audio/mo.mp3' },
    { kana: 'ヤ', ans: 'ya', audio: 'audio/ya.mp3' },
    { kana: 'ユ', ans: 'yu', audio: 'audio/yu.mp3' },
    { kana: 'ヨ', ans: 'yo', audio: 'audio/yo.mp3' },
    { kana: 'ラ', ans: 'ra', audio: 'audio/ra.mp3' },
    { kana: 'リ', ans: 'ri', audio: 'audio/ri.mp3' },
    { kana: 'ル', ans: 'ru', audio: 'audio/ru.mp3' },
    { kana: 'レ', ans: 're', audio: 'audio/re.mp3' },
    { kana: 'ロ', ans: 'ro', audio: 'audio/ro.mp3' },
    { kana: 'ワ', ans: 'wa', audio: 'audio/wa.mp3' },
    { kana: 'ン', ans: 'n', audio: 'audio/n.mp3' },
    { kana: 'ヲ', ans: 'wo', audio: 'audio/o_(1).mp3' },
    { kana: 'ガ', ans: 'ga', audio: 'audio/kanasound-ga.mp3' },
    { kana: 'ギ', ans: 'gi', audio: 'audio/kanasound-gi.mp3' },
    { kana: 'グ', ans: 'gu', audio: 'audio/kanasound-gu.mp3' },
    { kana: 'ゲ', ans: 'ge', audio: 'audio/kanasound-ge.mp3' },
    { kana: 'ゴ', ans: 'go', audio: 'audio/kanasound-go.mp3' },
    { kana: 'ザ', ans: 'za', audio: 'audio/kanasound-za.mp3' },
    { kana: 'ジ', ans: 'ji', audio: 'audio/kanasound-ji.mp3' },
    { kana: 'ズ', ans: 'zu', audio: 'audio/kanasound-zu.mp3' },
    { kana: 'ゼ', ans: 'ze', audio: 'audio/kanasound-ze.mp3' },
    { kana: 'ゾ', ans: 'zo', audio: 'audio/kanasound-zo.mp3' },
    { kana: 'ダ', ans: 'da', audio: 'audio/kanasound-da.mp3' },
    { kana: 'ヂ', ans: 'di', audio: 'audio/kanasound-ji_(1).mp3' },
    { kana: 'ヅ', ans: 'du', audio: 'audio/kanasound-zu_(1).mp3' },
    { kana: 'デ', ans: 'de', audio: 'audio/kanasound-de.mp3' },
    { kana: 'ド', ans: 'do', audio: 'audio/kanasound-do.mp3' },
    { kana: 'バ', ans: 'ba', audio: 'audio/kanasound-ba.mp3' },
    { kana: 'ビ', ans: 'bi', audio: 'audio/kanasound-bi.mp3' },
    { kana: 'ブ', ans: 'bu', audio: 'audio/kanasound-bu.mp3' },
    { kana: 'ベ', ans: 'be', audio: 'audio/kanasound-be.mp3' },
    { kana: 'ボ', ans: 'bo', audio: 'audio/kanasound-bo.mp3' },
    { kana: 'パ', ans: 'pa', audio: 'audio/kanasound-pa.mp3' },
    { kana: 'ピ', ans: 'pi', audio: 'audio/kanasound-pi.mp3' },
    { kana: 'プ', ans: 'pu', audio: 'audio/kanasound-pu.mp3' },
    { kana: 'ペ', ans: 'pe', audio: 'audio/kanasound-pe.mp3' },
    { kana: 'ポ', ans: 'po', audio: 'audio/kanasound-po.mp3' },
    { kana: 'キャ', ans: 'kya', audio: 'audio/kanasound-kya.mp3' },
    { kana: 'キュ', ans: 'kyu', audio: 'audio/kanasound-kyu.mp3' },
    { kana: 'キョ', ans: 'kyo', audio: 'audio/kanasound-kyo.mp3' },
    { kana: 'シャ', ans: 'sha', audio: 'audio/kanasound-sha.mp3' },
    { kana: 'シュ', ans: 'shu', audio: 'audio/kanasound-shu.mp3' },
    { kana: 'シェ', ans: 'she', audio: 'audio/VoiceText_she.mp3' },
    { kana: 'ショ', ans: 'sho', audio: 'audio/kanasound-sho.mp3' },
    { kana: 'チャ', ans: 'cha', audio: 'audio/kanasound-cha.mp3' },
    { kana: 'チュ', ans: 'chu', audio: 'audio/kanasound-chu.mp3' },
    { kana: 'チェ', ans: 'che', audio: 'audio/VoiceText_che.mp3' },
    { kana: 'チョ', ans: 'cho', audio: 'audio/kanasound-cho.mp3' },
    { kana: 'ニャ', ans: 'nya', audio: 'audio/kanasound-nya.mp3' },
    { kana: 'ニュ', ans: 'nyu', audio: 'audio/kanasound-nyu.mp3' },
    { kana: 'ニョ', ans: 'nyo', audio: 'audio/kanasound-nyo.mp3' },
    { kana: 'ヒャ', ans: 'hya', audio: 'audio/kanasound-hya.mp3' },
    { kana: 'ヒュ', ans: 'hyu', audio: 'audio/kanasound-hyu.mp3' },
    { kana: 'ヒョ', ans: 'hyo', audio: 'audio/kanasound-hyo.mp3' },
    { kana: 'ミャ', ans: 'mya', audio: 'audio/kanasound-mya.mp3' },
    { kana: 'ミュ', ans: 'myu', audio: 'audio/kanasound-myu.mp3' },
    { kana: 'ミョ', ans: 'myo', audio: 'audio/kanasound-myo.mp3' },
    { kana: 'リャ', ans: 'rya', audio: 'audio/kanasound-rya.mp3' },
    { kana: 'リュ', ans: 'ryu', audio: 'audio/kanasound-ryu.mp3' },
    { kana: 'リョ', ans: 'ryo', audio: 'audio/kanasound-ryo.mp3' },
    { kana: 'ギャ', ans: 'gya', audio: 'audio/kanasound-gya.mp3' },
    { kana: 'ギュ', ans: 'gyu', audio: 'audio/kanasound-gyu.mp3' },
    { kana: 'ギョ', ans: 'gyo', audio: 'audio/kanasound-gyo.mp3' },
    { kana: 'ジャ', ans: 'jya', audio: 'audio/kanasound-ja.mp3' },
    { kana: 'ジュ', ans: 'jyu', audio: 'audio/kanasound-ju.mp3' },
    { kana: 'ジェ', ans: 'jye', audio: 'audio/VoiceText_jye.mp3' },
    { kana: 'ジョ', ans: 'jyo', audio: 'audio/kanasound-jo.mp3' },
    { kana: 'ヂャ', ans: 'dya', audio: 'audio/kanasound-jya.mp3' },
    { kana: 'ヂュ', ans: 'dyu', audio: 'audio/kanasound-jyu.mp3' },
    { kana: 'ヂョ', ans: 'dyo', audio: 'audio/kanasound-jyo.mp3' },
    { kana: 'ビャ', ans: 'bya', audio: 'audio/kanasound-bya.mp3' },
    { kana: 'ビュ', ans: 'byu', audio: 'audio/kanasound-byu.mp3' },
    { kana: 'ビョ', ans: 'byo', audio: 'audio/kanasound-byo.mp3' },
    { kana: 'ピャ', ans: 'pya', audio: 'audio/kanasound-pya.mp3' },
    { kana: 'ピュ', ans: 'pyu', audio: 'audio/kanasound-pyu.mp3' },
    { kana: 'ピョ', ans: 'pyo', audio: 'audio/kanasound-pyo.mp3' },
]

let playHiragana
let playKatakana


const rulesElement = () => (document.getElementById('collapseRules').innerHTML = `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#rulesModal">
Launch rules panel
</button>

<!-- Modal -->
<div class="modal fade bd-rules-modal-lg" id="rulesModal" tabindex="-1" role="dialog" aria-labelledby="rulesModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="rulesModalLabel">Hana Kana Rules</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true"></span>
      </button>
    </div>
    <div class="modal-body">
    <br>
    <ul class="list-group list-group-flush list-unstyled">
        <li class="list-group-item-primary">Type your answer in Romaji in the card's text field</li>
        <li class="list-group-item-info">Press ENTER to submit</li>
        <li class="list-group-item-success">Repeat for as many cards as you can</li>
        <li class="list-group-item-danger">You are allowed up to 15 incorrect entries before the game will
            finish</li>
        <li class="list-group-item-warning">If you complete all Kana, press the "Finish" button at the bottom
        </li>
    </ul>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    </div>
  </div>
</div>
</div>`);

//scoreboard variables
let correct = 0;
let incorrect = 0;
let chancesLeft = 15;
let displayMsg = ''
let wrongKana = []
let seconds = 0;
let minutes = 0;


// //game situation updater
const correctElement = () => (document.getElementById('correct').innerHTML = `${correct}`);
const incorrectElement = () => (document.getElementById('incorrect').innerHTML = `${incorrect}`);
const chancesLeftElement = () => (document.getElementById('chancesLeft').innerHTML = `${chancesLeft}`);
const displayMsgElement = () => (document.getElementById('displayMsg').innerHTML = `${displayMsg}`);


let hiraganaCards = ''
let katakanaCards = ''

//borriwng the Fisher-Yates Shuffle, via stack overflow
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array
}


//card area
const gameDisplayElement = (string) => (document.getElementById('gameDisplay').innerHTML = string);

document.getElementById("hiraganaButton").addEventListener("click", (e) => {
    const generateHiraganaCards = () => {
        hiragana.forEach(function (hiragana, idx) {
            hiraganaCards += `<div id ="hiragana" class="card bg-info text-white text-center p-3 border border-warning hiraganaCards">
            <label>
        <h5 class="card-title" value=${hiragana.kana}>${hiragana.kana}</h5>
        <input id=${idx} type="text" class="romaji" value="" size=8 autocomplete="off"></label>
    </div>`;
        });
        return hiraganaCards;
    };

    shuffle(hiragana)
    gameDisplayElement(generateHiraganaCards());
    playHiragana = true;
    rulesElement()
    correctElement()
    incorrectElement()
    chancesLeftElement()
    displayMsgElement()
    startGame()
});

document.getElementById("katakanaButton").addEventListener("click", (e) => {
    const generateKatakanaCards = () => {
        katakana.forEach(function (katakana, idx) {
            katakanaCards += `<div id="katakana" class="card bg-info text-white text-center p-3 border border-warning katakanaCards">
            <label>
        <h5 class="card-title" value=${katakana.kana}>${katakana.kana}</h5>
        <input id=${idx} type="text" class="romaji" value="" size=8 autocomplete="off"></label>
    </div>`;
        });
        return katakanaCards;
    };

    shuffle(katakana)
    gameDisplayElement(generateKatakanaCards());
    playKatakana = true;
    rulesElement()
    correctElement()
    incorrectElement()
    chancesLeftElement()
    displayMsgElement()
    startGame()
});

var myMusic;
let timer
let displaySeconds = 0
let totalTime



function startGame() {
    document.getElementById("hiraganaButton").disabled = true;
    document.getElementById("katakanaButton").disabled = true;
    myMusic = new sound("audio/Hana Kimura-Samurai (ROH Theme).mp3");
    myMusic.play()
    timer = setInterval(function () {
        document.getElementById('totalTime').innerHTML = `Total time: ${minutes}:${displaySeconds} has elapsed`;
        seconds++;
        if (seconds / 60 === 1) {
            seconds = 0
            minutes += 1
        } if (seconds < 10) {
            displaySeconds = "0" + seconds.toString()
        } else {
            displaySeconds = seconds;
        } totalTime = `${minutes}:${displaySeconds}`
    }, 1000);
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
        this.sound.volume = 0.01;
        this.sound.loop = true;
    }
    this.stop = function () {
        this.sound.pause();
    }
}

let userAnswer;
let userIndex;
var kana;

let input = document.querySelector('#cards');
input.addEventListener('keyup', function (e) {
    if (e.key === "Enter") {
        userAnswer = e.target.value.toLowerCase()
        userIndex = e.target.id
        checkAnswer(userAnswer, userIndex)
    }
})

function checkAnswer(userAnswer, idx) {
    if (playHiragana === true) {
        kana = hiragana[idx]
    }
    else if (playKatakana === true) {
        kana = katakana[idx]
    }
    let isCorrect = userAnswer === kana.ans
    if (isCorrect) {
        correct++
        displayMsg = ` Yes sir!`;
        displayMsgElement()
        correctElement()
        incorrectElement()
        chancesLeftElement()
        showCorrect()
    } else {
        incorrect++
        chancesLeft--
        displayMsg = ` Whoops! The correct romaji is ${kana.ans} `;
        wrongKana.push(`${kana.kana} `)
        displayMsgElement()
        showIncorrect()
        correctElement()
        incorrectElement()
        chancesLeftElement()
        checkStatus()
    }
}

function showCorrect() {
    if (playHiragana === true) {
        const hiraganaClasses = document.querySelectorAll('.hiraganaCards');
        let i;
        for (i = 0; i < hiraganaClasses.length; i++) {
            hiraganaClasses[userIndex].classList.remove('bg-info')
            hiraganaClasses[userIndex].classList.add('bg-success')
        }
    } else if (playKatakana === true) {
        const katakanaClasses = document.querySelectorAll('.katakanaCards');
        let i;
        for (i = 0; i < katakanaClasses.length; i++) {
            katakanaClasses[userIndex].classList.remove('bg-info')
            katakanaClasses[userIndex].classList.add('bg-success')
        }
    }
}

function showIncorrect() {
    if (playHiragana === true) {
        const hiraganaClasses = document.querySelectorAll('.hiraganaCards');
        let i;
        for (i = 0; i < hiraganaClasses.length; i++) {
            hiraganaClasses[userIndex].classList.remove('bg-info')
            hiraganaClasses[userIndex].classList.add('bg-danger')
        }
    } else if (playKatakana === true) {
        const katakanaClasses = document.querySelectorAll('.katakanaCards');
        let i;
        for (i = 0; i < katakanaClasses.length; i++) {
            katakanaClasses[userIndex].classList.remove('bg-info')
            katakanaClasses[userIndex].classList.add('bg-danger')
        }
    }
}

function checkStatus() {
    if (chancesLeft === 0) {
        displayMsg = ` 2 Stars for trying. Come back when you're stronger. Hana recommends working on ${wrongKana} <a href="https://imgur.com/1bG0Tmu"><img src="https://i.imgur.com/1bG0Tmu.gif" title="source: imgur.com" /></a>`
        displayMsgElement();
        clearInterval(timer)
        setTimeout(() => {
            gameOver();
        }, 10000);
    }
};

document.getElementById("finish").addEventListener("click", (e) => {
    if (playHiragana === true && (correct + chancesLeft <= 15)) {
        displayMsg = ` You're leaving too soon. Here's 1 Star for showing up'. <a href="https://imgur.com/3K7SbzA"><img src="https://i.imgur.com/3K7SbzA.gif" title="source: imgur.com" /></a>`
    } else if (playHiragana === true && correct <= 95) {
        displayMsg = ` That was close. 3 Stars! You answered ${percentage(correct, 107)}% of hiragana correctly in ${totalTime}. <a href="https://imgur.com/UcG7K7R"><img src="https://i.imgur.com/UcG7K7R.gif" title="source: imgur.com" /></a>`
    }
    else if (playHiragana === true && correct === 107) {
        displayMsg = ` That's a 5 Star performace! You answered ${percentage(correct, 107)}% of hiragana correctly in ${totalTime}. <a href="https://imgur.com/Zr6CWzu"><img src="https://i.imgur.com/Zr6CWzu.gif" title="source: imgur.com" /></a>`
    }
    else if (playHiragana === true && correct >= 96) {
        displayMsg = ` You're on your way. 4 Stars! You answered ${percentage(correct, 107)}% of hiragana correctly in ${totalTime}. <a href="https://imgur.com/MJHaYGq"><img src="https://i.imgur.com/MJHaYGq.gif" title="source: imgur.com" /></a>`
    } else if (playKatakana === true && (correct + chancesLeft <= 15)) {
        displayMsg = ` You're leaving too soon. Here's 1 Star for showing up'. <a href="https://imgur.com/ZEdG1VN"><img src="https://i.imgur.com/ZEdG1VN.gif" title="source: imgur.com" /></a>`
    } else if (playKatakana === true && correct <= 98) {
        displayMsg = ` That was close. 3 Stars! You answered ${percentage(correct, 107)}% of katakana correctly in ${totalTime}. <a href="https://imgur.com/TFqW2iD"><img src="https://i.imgur.com/TFqW2iD.gif" title="source: imgur.com" /></a>`
    }
    else if (playKatakana === true && correct === 110) {
        displayMsg = ` That's a 5 Star performace! You answered ${percentage(correct, 107)}% of katakana correctly in ${totalTime}. <a href="https://imgur.com/WLqlUWA"><img src="https://i.imgur.com/WLqlUWA.gif" title="source: imgur.com" /></a>`
    }
    else if (playKatakana === true && correct >= 99) {
        displayMsg = ` You're on your way. 4 Stars! You answered ${percentage(correct, 107)}% of katakana correctly in ${totalTime}. <a href="https://imgur.com/D3lnh6J"><img src="https://i.imgur.com/D3lnh6J.gif" title="source: imgur.com" /></a>`
    }
    displayMsgElement();
    clearInterval(timer)
    setTimeout(() => {
        gameOver();
    }, 10000);
});

function percentage(correct, number) {
    let floatNumber = parseFloat(correct, number)
    floatNumber = parseFloat(100 * correct) / number
    return floatNumber.toLocaleString('en')
}

function gameOver() {
    document.location.reload();
}



