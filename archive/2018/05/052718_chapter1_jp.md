# 「深層学習」Goodfellow et al. (2016) 第一章

この間、「Deep Learning」っという本を買ってみました。そして、章一つづつ解釈しようと思っています。実は、[こちらへ](http://www.deeplearningbook.org/)無料で読めます。面白かった点や僕の意見を挙げながらいこうと思っています。できるだけ簡単に説明しようと思っていますので、初心者でも理解できるようにしたいです。

実は、人工知能は結構古い技術です。この本によると、最初の深層学習システムは４０年代に開発されました。初めて聞いた時、すごく驚きました。スタンフォードで[McClelland先生](https://en.wikipedia.org/wiki/James_McClelland_(psychologist))っていう博士の授業を受けましたので、McClelland先生が２０〜３０年前から深層学習を使って心理学の研究してきました。しかし、他の研究者達がニューラルネットワークの価値を認めてくれなかったです。パソコンが遅すぎて、データも足りなかったため深層学習が実行不可能でした。ニューラルネットワークはよく脳のモデルと思われていますが、この本もそこまでは言いません。

> Today, neuroscience is regarded as an important source of inspiration for deep learning researchers, but *it is no longer the predominant guide for the field*. The main reason for the diminished role of neuroscience in deep learning research today is that *we simply do not have enough information about the brain* to use it as a guide. (pg 14-15)

つまり、脳のことがまだ理解できていないから、近代のニューラルネットワークの開発は神経科学とほぼ関係ありません。

毎年、パソコンの処理速度がどんどん高くなり、深層学習がやっと成功しています。人工知能が流行っていることでワクワクしませんか？

このチャプターには深層学習のバズワードがいろいろ書いてありますが、おそらく後でもっと詳しく説明してくれるから、とりあえず深層学習は（この本によると）一体どういうことなのかを説明したいと思います。

人工知能は基本的に脳を使わずに認知課題を実行するシステムと考えても良いと思います。そのシステムが本当に考えているかどうかは面白い哲学の疑問ですが、今の段階ではその質問をおいときます。例えば、たくさんのルールを使い日本語を英語に訳すシステムは人工知能になります。

では、「深層学習」とは何でしょうか？この認知課題にどのぐらいパソコンに任せるのかがポイントです。先ほどのルールをパソコンが学ぶようにしたら、マシンラーニングです。そのシステムが複雑なルールを探せるようにニューラルネットワークを利用したら、ディープラーニングです。
