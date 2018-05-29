# 「深層学習」Goodfellow et al. (2016) 第一章

この間、「Deep Learning」っという本を買ってみました。そして、毎日少しづつ読んで解釈しようと思っています。実は、[こちらへ](http://www.deeplearningbook.org/)無料で読めます。面白かった点や僕の意見を挙げながらいこうと思っています。できるだけ簡単に説明しようと思っていますので、初心者でも理解できるようにしたいです。

実は、人工知能は結構古い技術です。この本によると、最初の深層学習システムは４０年代に開発されました。初めて聞いた時、すごく驚きました。スタンフォードで[McClelland先生](https://en.wikipedia.org/wiki/James_McClelland_(psychologist))っていう博士の授業を受けましたので、McClelland先生が２０〜３０年前から深層学習を使って心理学の研究してきました。しかし、他の研究者達がニューラルネットワークの価値を認めてくれなかったです。パソコンが遅すぎて、データも足りなかったため深層学習が実行不可能でした。ニューラルネットワークはよく脳のモデルと思われていますが、この本もそこまでは言いません。

> Today, neuroscience is regarded as an important source of inspiration for deep learning researchers, but *it is no longer the predominant guide for the field*. The main reason for the diminished role of neuroscience in deep learning research today is that *we simply do not have enough information about the brain* to use it as a guide. (pg 14-15)

つまり、脳のことがまだ理解できていないから、近代のニューラルネットワークの開発は神経科学とほぼ関係ありません。

「AIの波」が三つありました。1940年代に最初のラーニングアルゴリズムが開発されました。ラーニングアルゴリズムは基本的に微分を計算することです。次はMcClelland先生が1980年代にはじめた並列分散処理のアプローチでした。そして、2000年代に深層学習の時代が始まりました。しかし、今の「波」は最も面白い時代だと思います。

> Deep learning was often regarded as being more of an art than a technology and something that only an expert could us, until recently. It is true that some skill is required to get good performance from a deep learning algorithm. Fortunately, *the amount of skill required reduces as the amount of training data increases.* (pg 18)

昔は、深層学習のシステムを作れる人はエキスパートぐらいでしたが、今は、データさえあれば、何とかかんとかいいシステムを作れるはずです。そういう訳で、今の時代では、コーディング初心者でも深層学習システムを作れると思います。TensorFlowやPyTorchのチュートリアルが分かりやすいし、いろんなデータもどこでもアップされています。僕はAndrew Ng先生のマシンラーニングの授業を受け、課題と中間試験のために機械学習の理論や数学を勉強しましたが、ファイナルプロジェクトで理論も数学を全く使いませんでした。笑

このチャプターには深層学習のバズワードがいろいろ書いてありますが、おそらく後でもっと詳しく説明してくれるから、とりあえず深層学習は一体どういうことなのかを説明したいと思います。

## 僕の意見

<img class="article-img" src="/assets/chapter1/venn.png"/>

簡単に説明すると、人工知能は自動で認知課題を実行できるシステムと考えてもいいです。人工知能のシステムは「モデル」と言われます。このモデルが本当に考えることができるかは哲学的な疑問ですが、僕は100％人間にプログラムされたラーニングができないモデルも人工知能と一緒にします。あるいは、プログラマーがモデルを完全にコントロールしています。

### 機械学習

機械学習と表現学習と深層学習の違いはプログラマーがどのぐらいコントロールをモデルに譲のかのことです。クラシカル機械学習では、入力を **特徴抽出処理** が最も大切です。特徴抽出とは、入力から有意義なものを抽出することなので、人間が特徴抽出処理をコントロールしますが、モデルがそのデータの特徴から学びます。

### 表現学習と深層学習の違い

表現学習では、またモデルにコントロールを譲ります。表現学習のモデルは特徴抽出を自動でして、自動で学びます。違いは、クラシカル機械学習では、人間がデータを処理する関数をプログラムしますが、表現学習では、モデルが生のデータから処理する方法も学びます。特徴は、**層** です。簡単に説明すると、「層」は関数ですので、座標変換や活性化関数やいろんな種類があります。モデルが何層あれば、ディープモデルと言われます。第5章にもっと詳しく説明しますので、重要な点は、深層学習は表現学習の1種です。

## まとめ

では、第一章はこんな感じでした。面白い引用を紹介しましたが、このチャプターでは、深層学習の履歴と近代の状況が書かれていました。次は線形代数の基本です。
