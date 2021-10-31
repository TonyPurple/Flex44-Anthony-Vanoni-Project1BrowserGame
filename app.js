//generate an array of hiragana characters
  const hiragana = 'あ,い,う,え,お,か,き,く,け,こ,さ,し,す,せ,そ,た,ち,つ,て,と,な,に,ぬ,ね,の,は,ひ,ふ,へ,ほ,ま,み,む,め,も,や,ゆ,よ,ら,り,る,れ,ろ,わ,を,ん,が,ぎ,ぐ,げ,ご,ざ,じ,ず,ぜ,ぞ,だ,ぢ,づ,で,ど,ば,び,ぶ,べ,ぼ,ぱ,ぴ,ぷ,ぺ,ぽ,きゃ,きゅ,きょ,しゃ,しゅ,しょ,ちゃ,ちゅ,ちょ,にゃ,にゅ,にょ,ひゃ,ひゅ,ひょ,みゃ,みゅ,みょ,りゃ,りゅ,りょ,ぎゃ,ぎゅ,ぎょ,じゃ,じゅ,じょ,びゃ,びゅ,びょ,ピャ,ピュ,ぴょ'.split(',');

//generate an array of romaji characters
  const romaji = 'a,i,u,e,o,ka,ki,ku,ke,ko,sa,shi,su,se,so,ta,chi,tsu,te,to,na,ni,nu,ne,no,ha,hi,fu,he,ho,ma,mi,mu,me,mo,ya,yu,yo,ra,ri,ru,re,ro,wa,wo,n,ga,gi,gu,ge,go,za,ji,zu,ze,zo,da,di,du,de,do,ba,bi,bu,be,bo,pa,pi,pu,pe,po,kya,kyu,kyo,sha,shu,she,sho,cha,chu,che,cho,nya,nyu,nyo,hya,hyu,hyo,mya,myu,myo,rya,ryu,ryo,gya,gyu,gyo,jya,jyu,jye,jyo,bya,byu,byo,pya,pyu,pyo'.split(',');

//generate an array of katakana characters
const katakana = 'ア,イ,ウ,エ,オ,カ,キ,ク,ケ,コ,サ,シ,ス,セ,ソ,タ,チ,ツ,テ,ト,ナ,ニ,ヌ,ネ,ノ,ハ,ヒ,フ,ヘ,ホ,マ,ミ,ム,メ,モ,ヤ,ユ,ヨ,ラ,リ,ル,レ,ロ,ワ,ヲ,ン,ガ,ギ,グ,ゲ,ゴ,ザ,ジ,ズ,ゼ,ゾ,ダ,ヂ,ヅ,デ,ド,バ,ビ,ブ,ベ,ボ,パ,ピ,プ,ペ,ポ,キャ,キュ,キョ,シャ,シュ,シェ,ショ,チャ,チュ,チェ,チョ,ニャ,ニュ,ニョ,ヒャ,ヒュ,ヒョ,ミャ,ミュ,ミョ,リャ,リュ,リョ,ギャ,ギュ,ギョ,ジャ,ジュ,ジェ,ジョ,ビャ,ビュ,ビョ,ピャ,ピュ,ピョ'.split(',')

//game variables, the user will have 10 chances to guess kana coreectly. All correct and incorrect answers will be recorded.
let correct = 0;
let incorrect = 0;
let chances = 10;
let guesses = [];

//game situation
let html = `<p>Your incorrect answers: </p>
    <p> ${guesses.join(", ")} </p>
    <p> correct: ${correct} </p>
    <p> incorrect: ${incorrect} </p>
    <p> chances left: ${chances} </p>`;
document.getElementById("currentSituation").innerHTML = html;

//access the text value upon enter click
$(document).on("keyup", ".romaji", function(e) {
    if (e.which == 13) {
      alert("Hi")
    }
  })