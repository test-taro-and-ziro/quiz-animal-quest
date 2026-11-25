// ==========================================
// 🎒 小クイズデータ追加
// ==========================================
// 💡 親から配列を関数として受け取る
export function loadQuestions_add(targetArray) {

targetArray.push(...[
	//{ grade: 0, genre: "math", type: "select", text: "右図のような三角形があります。図の <u>（あ）</u> の角度は なんでしょう？【triangle_sum】", choices: ["70°", "80°", "60°", "100°"], answer: "70", explanation: "三角形の<b>内角の和（180°）</b>に関する問題です。<br>60°と50° と（あ）の角度を足すと 180° になります。そのため 180° ー（60° ＋ 50°）で計算すると 70° であることがわかります。" },
]);

targetArray.push(...[
// 図を使った問題
{ grade: 4, genre: "math", type: "select", text: "図の対角線にある <u>（あ）</u> 角の大きさは 何度かな？【diagonal_angle】", choices: ["70°", "90°", "110°", "180°"], answer: "110°", explanation: "一直線の上に できる 2つの角の大きさを あわせると <b>180°</b> に なるよ。<br>だから 「あ」の角は <b>180° - 70° = 110°</b> だね。" },
{ grade: 4, genre: "math", type: "select", text: "図の三角形の <u>（あ）</u> 角の大きさは 何度かな？【triangle_angle】", choices: ["30°", "60°", "90°", "120°"], answer: "60°", explanation: "三角形の 3つの角を あわせると <b>180°</b> に なるよ。<br>この三角形には 90° と 30° が わかっているので、<br><b>180° − 90° − 30° = 60°</b><br>だから 「あ」は <b>60°</b> だね。" },
// 星
{ grade: 4, genre: "science", type: "select", text: "星の <b>ちがい</b> として 正しくないものは どれ？", choices: ["色", "明るさ", "大きさ", "音"], answer: "音", explanation: "星には <b>色</b> や <b>明るさ</b>、<b>大きさ</b> の ちがいが あるよ。<br>また、星の温度によって、赤っぽい星や 青白い星 のように見えるよ。<br>夜空を 観察（かんさつ）すると、星によって 明るく見えるものや 暗く見えるものが あることも わかるよ！" },
// ひらがなを漢字に
{ grade: 4, genre: "kanji", type: "select", text: "「<u><b>けんこう</b></u> のために運動をする。」<br>下線のひらがなを 漢字で書くと どれかな？", choices: ["健康", "健交", "建康", "建交"], answer: "健康", explanation: "「健康（けんこう）」は、体や 心が 元気で よい 状態（じょうたい）のことだよ。<br>運動をしたり、しっかり ねむったりすることで <b>健康</b> を たもつことが できるんだ。" },
{ grade: 4, genre: "kanji", type: "select", text: "「<u><b>きせつ</b></u> の花を育てる。」<br>下線のひらがなを 漢字で書くと どれかな？", choices: ["季節", "季説", "季折", "季設"], answer: "季節", explanation: "「季節（きせつ）」は、春・夏・秋・冬のような 一年の時期のことだよ。<br>季節ごとに さく花や 見られる生き物が ちがうので、自然の様子も変わるんだ。" },
// 漢字の読み仮名
{ grade: 4, genre: "kanji", type: "select", text: "「教科書の文章を<u><b>要約</b></u> する。」<br>下線の漢字の読み方は どれかな？", choices: ["ようやく", "ようそく", "ようりゃく", "ようけつ"], answer: "ようやく", explanation: "「要約（ようやく）」は、長い文章や話の大事なところだけを まとめることだよ。<br>教科書の内容（ないよう）を 短くわかりやすく まとめたものを 『要約』 と いうんだ。" },
// 正しい送り仮名
{ grade: 4, genre: "kanji", type: "select", text: "「電気を <u><b>おびる</b></u>。」<br>下線の正しい書き方は どれかな？", choices: ["帯びる", "帯る", "帯", "帯び"], answer: "帯びる", explanation: "「帯びる（おびる）」は、何かを 身につけたり、あるせいしつを もったりすることを 表す言葉だよ。<br>ものを こすったときに 『電気を 帯びる』 といって、電気の 力を もつことが あるんだ。<br>送り仮名は <b>「帯びる」</b> と 書くよ！" },
// 同じ読み方の漢字
{ grade: 4, genre: "kanji", type: "select", text: "「運動会のかけっこで <u><b>きょうそう</b></u> した。」<br>下線に入る漢字は どれかな？", choices: ["競走", "競争", "共走", "協走"], answer: "競走", explanation: "「競走（きょうそう）」は、走って速さを競（きそ）うことだよ。<br>かけっこやマラソンなど、走る勝負のときに 使う言葉なんだ。" },
// 漢字の画数
{ grade: 4, genre: "kanji", type: "select", text: "漢字「芽（め）」の 画数は 何画？", choices: ["6画", "7画", "8画", "9画"], answer: "8画", explanation: "部首は「くさかんむり（艹）」だね。" },
{ grade: 4, genre: "kanji", type: "select", text: "漢字「案（あん）」の 画数は 何画？", choices: ["8画", "9画", "10画", "11画"], answer: "10画", explanation: "「安」と「木」を 組み合わせた 漢字だね。" },
{ grade: 4, genre: "kanji", type: "select", text: "漢字「希（き）」の 画数は 何画？", choices: ["6画", "7画", "8画", "9画"], answer: "7画", explanation: "「希」は 『希望（きぼう）』 などの 言葉で 使われる 漢字だね。" },
// 類似の言葉
{ grade: 4, genre: "kanji", type: "select", text: "「車が<u><b>いっせいに</b></u> 走り出す。」<br>下線の言葉と意味のにている言葉は どれかな？", choices: ["同時に", "とつぜんに", "急に", "ばらばらに"], answer: "同時に", explanation: "車が いっせいに 走り出すとは、たくさんの車が <b>同じタイミング</b>で 走り始めるという 意味なんだ。<br>他にも「いっぺんに」や「そろって」などの 言葉と意味がにているね。" },	
{ grade: 4, genre: "kanji", type: "select", text: "「下書きの線が <u><b>かすかに</b></u> のこっている。」<br>下線の言葉と意味のにている言葉は どれかな？", choices: ["うっすらと", "はっきりと", "しっかりと", "ゆっくりと"], answer: "うっすらと", explanation: "「うっすらと」は、<b>はっきり見えないくらい</b> わずか である様子を表す言葉だよ。" },
]);

targetArray.push(...[
// なんじ なんじはん（時計）：短い針と長い針を使った時刻の読み取り
{ grade: 1, genre: "math", type: "select", text: "とけいは なんじかな？【clock_3】", choices: ["2じ", "3じ", "4じ", "5じ"], answer: "3じ", explanation: "ながい はりが 12、みじかい はりが 3 を さしているよ。だから <b>3じ</b> だね！" },
{ grade: 1, genre: "math", type: "select", text: "とけいは なんじかな？【clock_7_han】", choices: ["6じ はん", "7じ", "7じ はん", "8じ はん"], answer: "7じ はん", explanation: "ながい はりが 6 を さすと <b>はん</b> だよ。みじかい はりが 7 と 8 の あいだに あるので <b>7じ はん</b> だね！" },
{ grade: 1, genre: "math", type: "select", text: "とけいは なんじかな？【clock_10】", choices: ["8じ", "9じ", "10じ", "11じ"], answer: "10じ", explanation: "ながい はりが 12、みじかい はりが 10 を さしているので <b>10じ</b> だよ！" },
// なんばんめ：順序数の意味
{ grade: 1, genre: "math", type: "select", text: "りんごが ならんでいます。<br>🍎 🍎 🍎 🍎 🍎<br>ひだりから 3ばんめの りんごは どれかな？", choices: ["1ばんめ", "2ばんめ", "3ばんめ", "4ばんめ"], answer: "3ばんめ", explanation: "ひだりから かぞえると、3ばんめの りんごは <b>3ばんめ</b> だよ！" },
{ grade: 1, genre: "math", type: "select", text: "おかしが ならんでいます。<br>🍪 🍩 🍫 🍬 🍭<br>みぎから 2ばんめの おかしは どれかな？", choices: ["🍩", "🍫", "🍬", "🍭"], answer: "🍬", explanation: "みぎから かぞえると、1ばんめは 🍭、2ばんめは <b>🍬</b> だよ！" },
{ grade: 1, genre: "math", type: "select", text: "木が ならんでいます。<br>🌳 🌳 🌳 🌳 🌳 🌳<br>ひだりから 5ばんめの 木は なんばんめかな？", choices: ["3ばんめ", "4ばんめ", "5ばんめ", "6ばんめ"], answer: "5ばんめ", explanation: "ひだりから かぞえると <b>5ばんめ</b> の 木だよ！" },
{ grade: 1, genre: "math", type: "which", text: "パンが ならんでいます。<br>🥐 🍞 🥖 🥯<br>みぎから 1ばんめは 🥯 である。まるか ばつか？", choices: [true, false], answer: true, explanation: "みぎはしに あるのは <b>🥯</b> だよ。だから まる！" },
{ grade: 1, genre: "math", type: "select", text: "花が ならんでいます。<br>🌷 🌹 🌻 🌼 🌺<br>ひだりから 2ばんめの 花は どれかな？", choices: ["🌷", "🌹", "🌻", "🌺"], answer: "🌹", explanation: "ひだりから かぞえると、1ばんめは 🌷、2ばんめは <b>🌹</b> だよ！" },
]);

targetArray.push(...[
// 都道府県（漢字）
{ grade: 3, genre: "kanji", type: "select", text: "「ほっかいどう」を 漢字（かんじ）で 書くと どれかな？", choices: ["北海道", "北海島", "北会道", "北海道県"], answer: "北海道", explanation: "北海道の 県庁所在地（けんちょうしょざいち）は <b>札幌市（さっぽろし）</b> だよ。" },
{ grade: 3, genre: "kanji", type: "select", text: "東北地方（とうほくちほう）に ある「岩」が つく 都道府県（とどうふけん）は どれかな？", choices: ["岩手県", "山形県", "秋田県", "福島県"], answer: "岩手県", explanation: "岩手県（いわてけん）には <b>中尊寺（ちゅうそんじ）</b> という 有名（ゆうめい）な お寺が あるよ。" },
{ grade: 3, genre: "kanji", type: "select", text: "東北地方（とうほくちほう）に ある「あきたけん」を 漢字（かんじ）で 書くと どれかな？", choices: ["秋田県", "秋畑県", "秋田見", "秋多県"], answer: "秋田県", explanation: "秋田県（あきたけん）は <b>秋田犬（あきたいぬ）</b> で 有名だよ。" },
{ grade: 3, genre: "kanji", type: "select", text: "東北地方（とうほくちほう）に ある「山」が つく 都道府県（とどうふけん）は どれかな？", choices: ["山形県", "福島県", "宮城県", "秋田県"], answer: "山形県", explanation: "山形県（やまがたけん）は <b>さくらんぼ</b> の 生産が さかんだよ。" },
{ grade: 4, genre: "kanji", type: "select", text: "関東地方（かんとうちほう）に ある「ぐんまけん」を 漢字で 書くと どれかな？", choices: ["群馬県", "郡馬県", "群馬見", "軍馬県"], answer: "群馬県", explanation: "群馬県（ぐんまけん）には <b>草津温泉（くさつおんせん）</b> が あるよ。" },
{ grade: 4, genre: "kanji", type: "select", text: "関東地方（かんとうちほう）に ある「さいたまけん」を 漢字で 書くと どれかな？", choices: ["埼玉県", "崎玉県", "埼玉見", "崎玉見"], answer: "埼玉県", explanation: "埼玉県（さいたまけん）の 県庁所在地は <b>さいたま市</b> だよ。" },
{ grade: 3, genre: "kanji", type: "select", text: "関東地方（かんとうちほう）に ある「とうきょうと」を 漢字（かんじ）で 書くと どれかな？", choices: ["東京都", "東京都県", "京東都", "東京府"], answer: "東京都", explanation: "東京都（とうきょうと）は 日本の <b>首都（しゅと）</b> だよ。" },
// 都道府県（地方）
{ grade: 3, genre: "social", type: "select", text: "東北地方（とうほくちほう）に ある 県は どれかな？", choices: ["青森県", "東京都", "千葉県", "大阪府"], answer: "青森県", explanation: "青森県（あおもりけん）は <b>りんご</b> の 生産（せいさん）が さかんな 県だよ。" },
{ grade: 3, genre: "social", type: "select", text: "東北地方（とうほくちほう）に ある 県は どれかな？", choices: ["宮城県", "神奈川県", "京都府", "福岡県"], answer: "宮城県", explanation: "宮城県（みやぎけん）の 県庁所在地は <b>仙台市（せんだいし）</b> だよ。" },
{ grade: 3, genre: "social", type: "select", text: "東北地方（とうほくちほう）に ある 県は どれかな？", choices: ["福島県", "愛知県", "広島県", "奈良県"], answer: "福島県", explanation: "福島県（ふくしまけん）は <b>桃（もも）</b> の 生産が さかんな 県だよ。" },
{ grade: 3, genre: "social", type: "select", text: "関東地方（かんとうちほう）に ある 県は どれかな？", choices: ["千葉県", "静岡県", "岡山県", "愛媛県"], answer: "千葉県", explanation: "千葉県（ちばけん）には <b>東京ディズニーリゾート</b> が あるよ。" },
{ grade: 3, genre: "social", type: "select", text: "関東地方（かんとうちほう）に ある 県は どれかな？", choices: ["神奈川県", "北海道", "大阪府", "福岡県"], answer: "神奈川県", explanation: "神奈川県（かながわけん）には <b>横浜中華街（よこはまちゅうかがい）</b> が あるよ。" },
]);

}
