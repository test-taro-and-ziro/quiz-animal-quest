// ==========================================
// 🎒 小クイズデータ追加
// ==========================================
// 💡 親から配列を関数として受け取る
export function loadQuestions_idiom(targetArray) {

// 慣用句
targetArray.push(...[
    // 3年生
    { grade: 3, genre: "japanese", type: "select", text: "友だちが 重い荷物を 運べなくて 困（こま）っていたので、<u><b>手を貸（か）す</b></u> ことにした。下線部は どんなことをするのかな？", choices: ["手伝うこと", "見ないふりをすること", "じゃますること", "にげること"], answer: "手伝うこと", explanation: "「手を貸（か）す」とは、こまっている人を<b>手伝うこと</b>だよ！" },
    { grade: 3, genre: "japanese", type: "select", text: "空を飛（と）んでいる鳥から、少しだけ <u><b>目を離（はな）す</b></u> ことにした。下線部は どんなことかな？", choices: ["見るのをやめる", "しっかりと見る", "集中して見る", "もともと見ていない"], answer: "見ることをやめる", explanation: "「目を離（はな）す」とは、集中して見ていたものから<b>注意をそらすこと</b>だよ！" },
    { grade: 3, genre: "japanese", type: "select", text: "遠くに住む おじいちゃんの家に 会いに行くため、<u><b>足を運（はこ）ぶ</b></u> ことにした。下線部は どんなことかな？", choices: ["家に行くこと", "走りまわること", "足をけがすること", "家にこもること"], answer: "家に行くこと", explanation: "「足を運（はこ）ぶ」とは、<b>その場所に行くこと</b>だよ！" },
    { grade: 3, genre: "japanese", type: "select", text: "そうじを 早く 終わらせたくて、<u><b>手を抜（ぬ）く</b></u> ことにした。下線部は どんなことかな？", choices: ["きれいになる", "もっとよくなる", "ほめられる", "よごれがのこる"], answer: "よごれがのこる", explanation: "「手を抜（ぬ）く」とは、全力を出さずに<b>いいかげんにすること</b>だよ！" },
    { grade: 3, genre: "japanese", type: "select", text: "楽しみにしていた プレゼントが 今日 届（とど）くので、<u><b>首を長くする</b></u>。下線部は どんな気持（きも）ちかな？", choices: ["心待ちにする", "こわがる", "わすれる", "にげる"], answer: "心待ちにする", explanation: "「首を長く」とは、<b>プレゼントがうれしくて、心待ちにしていること</b>だよ！" },
    { grade: 3, genre: "japanese", type: "select", text: "友達と ケンカをしたけれど 仲直（なかなお）りするために、<u><b>水に流（なが）す</b></u> ことにした。下線部は どんなことかな？", choices: ["なかったことにして仲直りする", "もっと怒る", "ずっと覚えておく", "もう一度ケンカする"], answer: "なかったことにして仲直りする", explanation: "「水に流す」とは、いろいろあったを<b>なかったことにすること</b>だよ！" },
    { grade: 3, genre: "japanese", type: "select", text: "大きな 恐竜（きょうりゅう）の 化石（かせき）を 見て、みんなが <u><b>目を丸くする</b></u>。下線部は どんな様子（ようす）かな？", choices: ["目を大きくする", "目をとじる", "泣く", "目がいたくなる"], answer: "目を大きくする", explanation: "「目を丸くする」とは、予想（よそう）していなかったことを 見たり 聞いたりしたときに、目を 大きく開いて おどろく様子（ようす）を 表しているんだ。 },
    // 4年生
    { grade: 4, genre: "japanese", type: "which", text: "むずかしい宿題に「手を焼（や）く」というのは、やさしいという意味である。まるかばつか？", choices: [true, false], answer: false, explanation: "「手を焼（や）く」とは、<b>むずかしくてこまること</b>だよ！" },
    { grade: 4, genre: "japanese", type: "select", text: "「手を焼（や）く」ようなしゅくだいとは、どんなもの？", choices: ["むずかしくてこまる", "やさしい", "すぐ終わる", "楽しい"], answer: "むずかしくてこまる", explanation: "「手を焼（や）く」とは、<b>むずかしくてこまること</b>だよ！" },
    { grade: 4, genre: "japanese", type: "which", text: "びっくりする話を聞いて「耳を疑（うたが）う」とは、信じられない気持ちである。まるかばつか？", choices: [true, false], answer: true, explanation: "「耳を疑（うたが）う」とは、聞いた話が<b>信じられないようなこと</b>だったときに使う言葉だよ！" },
    { grade: 4, genre: "japanese", type: "which", text: "「耳を疑（うたが）う」ような話とは、信じられない話である。まるかばつか？", choices: [true, false], answer: true, explanation: "「耳を疑（うたが）う」とは、聞いた話が<b>信じられないようなこと</b>だったときに使う言葉だよ！" },
    { grade: 4, genre: "japanese", type: "which", text: "「口が滑（すべ）る」とは、言ってはいけないことをうっかり言うことである。まるかばつか？", choices: [true, false], answer: true, explanation: "「口が滑（すべ）る」とは、秘密にしなくてはいけないことを<b>うっかり言ってしまうこと</b>だよ！" },
    { grade: 4, genre: "japanese", type: "select", text: "「口が滑（すべ）る」と、どんなことがおこる？", choices: ["言ってはいけないことを言う", "声が出なくなる", "歌がうまくなる", "話さなくなる"], answer: "言ってはいけないことを言う", explanation: "「口が滑（すべ）る」とは、秘密にしなくてはいけないことを<b>うっかり言ってしまうこと</b>だよ！" },
    { grade: 4, genre: "japanese", type: "which", text: "「頭を抱（かか）える」ような問題は、どうしてよいかわからない問題である。まるかばつか？", choices: [true, false], answer: true, explanation: "「頭を抱（かか）える」とは、むずかしい問題が起きて<b>こまっていること</b>だよ！" },
    { grade: 4, genre: "japanese", type: "select", text: "むずかしい問題に「頭を抱（かか）える」とは、どんな気持ち？", choices: ["どうしてよいかこまる", "うれしい", "すぐ答えがわかる", "やる気がない"], answer: "どうしてよいかこまる", explanation: "「頭を抱（かか）える」とは、むずかしい問題が起きて<b>こまっていること</b>だよ！" },
    { grade: 4, genre: "japanese", type: "select", text: "先生の話に「耳をかたむける」とは、どんなこと？", choices: ["熱心に聞くこと", "耳をふさぐこと", "聞かないこと", "さわぐこと"], answer: "熱心に聞くこと", explanation: "「耳をかたむける」とは、お話している人の声を<b>熱心に聞くこと</b>だよ！" },
    { grade: 4, genre: "japanese", type: "select", text: "先生の話に「耳をかたむける」と、どんなよいことがある？", choices: ["よく理解できる", "聞こえなくなる", "ねむくなる", "話がきらいになる"], answer: "よく理解できる", explanation: "「耳をかたむける」とは、お話している人の声を<b>熱心に聞くこと</b>だよ！" },
    { grade: 4, genre: "japanese", type: "select", text: "おどろきすぎて「色を失（うしな）う」とは、どんなようす？", choices: ["顔色がなくなる", "顔が赤くなる", "顔が黒くなる", "顔が青くなる"], answer: "顔色がなくなる", explanation: "「色を失（うしな）う」とは、<b>顔色がなくなること</b>だよ！" },
    { grade: 4, genre: "japanese", type: "select", text: "とても悲しくて「号泣（ごうきゅう）する」とは、どんな泣き方？", choices: ["大声で泣く", "少し泣く", "泣かない", "笑いながら泣く"], answer: "大声で泣く", explanation: "「号泣（ごうきゅう）する」とは、<b>大声で泣くこと</b>だよ！" },
    { grade: 4, genre: "japanese", type: "select", text: "「足音を忍（しのば）せる」の 意味は どれかな？", choices: ["足音を 立てないように歩く", "足音を 大きく ひびかせる", "急いで 走る", "足を けがする"], answer: "足音を 立てないように歩く", explanation: "「足音を忍（しのば）せる」とは、だれにも 気づかれないように 足音を 立てずに 静（しず）かに 歩くことだよ。" },
    { grade: 4, genre: "japanese", type: "select", text: "「飛（と）び上がる）」の 意味に いちばん 近いものは どれかな？", choices: ["とても おどろく", "ねむくなる", "あきらめる", "ゆっくり 歩く"], answer: "とても おどろく", explanation: "「飛（と）び上がる）」は、本当に ジャンプする 意味のほかに、<b>とても おどろく</b> ことを 表すこともあるよ。" },
    // 5年生
    { grade: 4, genre: "japanese", type: "which", text: "長い時間歩いて「足が棒（ぼう）になる」とは、足が本当に木になることである。まるかばつか？", choices: [true, false], answer: false, explanation: "「足がぼうになる」とは、<b>歩きつかれて足がこわばること</b>だよ！" },
    { grade: 4, genre: "japanese", type: "select", text: "「足が棒（ぼう）になる」ほど歩いたとき、どんなようす？", choices: ["足がこわばる", "足が太くなる", "足がなくなる", "足が速くなる"], answer: "足がこわばる", explanation: "「足がぼうになる」とは、<b>歩きつかれて足がこわばること</b>だよ！" },
    { grade: 4, genre: "japanese", type: "which", text: "「匙（さじ）を投げる」とは、どうすることもできず あきらめる気持ちである。まるかばつか？", choices: [true, false], answer: true, explanation: "「さじをなげる」とは、どうやっても解決できない問題を<b>あきらめること</b>だよ！" },
]);

// 接続詞
targetArray.push(...[
    { grade: 4, genre: "japanese", type: "select", text: "「雨は やんで 空が「◯◯◯」 はれた。」<br>◯◯◯ に 入（はい）る 言葉は どれかな？", choices: ["からっと", "じめじめと", "ひっそりと", "がっかりと"], answer: "からっと", explanation: "「からっと」は、空気が かわいて、気持ちよく 晴れている 様子を 表す言葉だよ。" },
    { grade: 4, genre: "japanese", type: "select", text: "「とても 暑（あつ）くて、あせが「◯◯◯」 出た。」<br>◯◯◯ に 入る 言葉は どれかな？", choices: ["どっと", "そっと", "きっと", "ずっと"], answer: "どっと", explanation: "「どっと」は、たくさんの ものが いちどに 出たり おこったりする 様子を 表す 言葉だよ。" },
    { grade: 4, genre: "japanese", type: "select", text: "「急に かたを たたかれて、「◯◯◯」 する。」<br>◯◯◯ に 入る 言葉は どれかな？", choices: ["びくっと", "にっこり", "のんびり", "うっかり"], answer: "びくっと", explanation: "「びくっとする」は、急な 出来事（できごと）に おどろいて、思わず 体が 動く 様子を 表す 言葉だよ。" },
    { grade: 4, genre: "japanese", type: "select", text: "「部屋の かたづけが 終わって、「◯◯◯」 する。」<br>◯◯◯ に 入る 言葉は どれかな？", choices: ["ほっと", "どっと", "がっかり", "ひやひや"], answer: "ほっと", explanation: "「ほっとする」は、心配ごとが なくなり、安心することだよ。" },
]);

}
