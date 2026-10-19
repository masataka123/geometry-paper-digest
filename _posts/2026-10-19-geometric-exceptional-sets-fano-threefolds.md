---
layout: paper
title: The geometric exceptional set for Fano threefolds
title_ja: Fano三次元多様体の幾何学的例外集合とdel Pezzo束
authors: Runxuan Gao
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We study the geometric exceptional set in Manin's conjecture for smooth Fano threefolds. We prove that every adjoint rigid surface with $a$-invariant one on a non-product smooth Fano threefold is normal. This yields a description of the geometric exceptional set in terms of the higher-$a$ locus, anticanonical conics, and del Pezzo fibrations. Zariski density arise only from the latter two contributions. For del Pezzo fibrations, we construct a finite collection of parameter covers which controlling the associated breaking maps. We classify their low-genus components for general smooth Fano threefolds yielding examples with potentially Zariski dense geometric exceptional sets in $22$ of the $105$ deformation families. Extending Batyrev-Tschinkel's example, we construct Fano fourfolds with quartic del Pezzo fibrations and an explicit Fano threefold with two degree-six del Pezzo fibrations, all with Zariski dense geometric exceptional sets. For this threefold, the original form
  of Manin's conjecture fails on every non-empty open subset for every anticanonical height.
topic: algebraic-geometry
tags:
- fano-varieties
- birational-geometry
- singularities
arxiv_id: 2610.23024v1
arxiv_url: https://arxiv.org/abs/2610.23024
arxiv_submitted: '2026-10-16'
arxiv_updated: '2026-10-16'
summary: Manin予想の幾何学的例外集合を、滑らかなFano三次元多様体上の曲面・反標準次数2の曲線・del Pezzo束から解析する。随伴剛性を持つ曲面の正規性と束構造を示し、例外集合が潜在的にZariski稠密となる族と、非稠密性が従う場合を記述する。
abstract_en: ''
summary_en: Exceptional rational points can dominate the height asymptotics predicted by Manin’s conjecture. This paper relates that phenomenon on Fano threefolds to the geometry of adjoint-rigid surfaces, conics, and del Pezzo fibrations. Finite parameter covers organize the relevant changes of Picard rank and lead to density constructions as well as non-density results. A concrete threefold forces a larger point count than the original open-subset formulation of the conjecture predicts.
abstract_ja: 著者は、非直積の滑らかなFano三次元多様体で、a不変量が1の随伴剛曲面がDu Val特異点を持つ正規del Pezzo曲面となり、束の被約ファイバーとして現れることを示す。del Pezzo束に付随する有限個のパラメータ被覆でbreaking mapを制御し、低種数被覆を持つ22変形族を特定する。さらに、例外集合がZariski稠密となる明示的なFano多様体を構成する。
abstract_source_url: https://arxiv.org/abs/2610.23024
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.23024v1](https://arxiv.org/abs/2610.23024)
- **著者:** Runxuan Gao
- **初回投稿日:** 2026-10-16
- **最終更新日:** 2026-10-16
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Fano多様体の有理点を高さで数えるManin予想では、特殊な部分多様体に有理点が集中すると、予想された漸近式を妨げる。取り除くべき例外集合を真の閉集合の有理点だけで足りると考えた当初の形に対し、Zariski稠密なthin setを除く必要がある例が知られている。

本論文は滑らかなFano三次元多様体について、幾何学的例外集合を生む構造を分類する。最初の鍵は、a不変量が1で随伴剛性を持つ曲面が、実は正規del Pezzo曲面であり、del Pezzo束のファイバーになるという定理である。

束のファイバー上の収縮をパラメータ化する被覆を作ると、有理点の集中を生む写像を有限個の型へ集約できる。この方法から潜在的稠密性を持つ変形族、明示的な反例、逆に非稠密性を保証する条件が得られる。全てのFano三次元多様体で例外集合が稠密になるという結論ではない。

## 背景と問題設定

Introductionで用いられる$a$、$b$はManin予想の漸近式を支配する双有理不変量である。幾何学的例外集合$Z(X)$はLehmann–Sengupta–Tanimotoの枠組みに基づく集合であり、その厳密な定義は本文Section 1へ委ねられる。ここではIntroductionに現れる定理の条件として、随伴剛性、a-cover、breaking mapを原論文の意味で用いる。

反標準次数2の曲線の族と、del Pezzo束のファイバー・基底変換が稠密性の主な供給源となる。「潜在的にZariski稠密」とは、基礎数体を有限拡大した後にZariski稠密となることを指す。

## 主結果

### 曲面の構造（Theorem A = Theorem 4.1）

問題となる曲面は孤立した非正規曲面ではなく、del Pezzo束の被約ファイバーになる。標数0の代数閉体上の滑らかなFano三次元多様体$X$が直積でなく、整曲面$S\subset X$が

$$
a(S,-K\_X)=1
$$

と$(S,-K\_X|\_S)$の随伴剛性を満たすなら、$S$は高々Du Val特異点を持つ正規del Pezzo曲面である。さらに$|S|$は基点自由なペンシルで、$X\to\mathbb P^1$を定め、$S$はその被約ファイバーとなる。滑らかさ・三次元・非直積という条件が重要であり、terminal三次元や滑らかな四次元には孤立した例がある。

### breaking mapの制御（Theorem B）

数体$F$上のdel Pezzo束$\pi:X\to B$に対し、ファイバーの収縮を記録する被覆$N\to B$から有限個のthin map $\tau\_N:Y\_N\to X$を構成する。その族を$\mathcal P\_\pi$とすると、

$$
a(Y\_N,\tau\_N^*(-K\_X))=1,\qquad
b(F,Y\_N,\tau\_N^*(-K\_X))=\rho\_{F(N)}(X\_{F(N)}).
$$

したがって$\tau\_N$がbreakingであることは

$$
\rho\_{F(N)}(X\_{F(N)})\geq\rho\_F(X)
$$

と同値である。一般の幾何学的随伴Iitakaファイバーが$\pi$の一般ファイバーを覆うdominant a-coverについて、breakingなら$\mathcal P\_\pi$の元を経由して有理的に分解する。$\rho\_F(X)=2$では逆も成り立つ。

### 低種数被覆と稠密性（Theorem C）

滑らかなFano三次元多様体の変形族のうち、一般の元が種数0または1の連結パラメータ被覆を持つdel Pezzo束を備えるものは、ちょうど22族である。それぞれの幾何学的変形空間では、例外集合が潜在的に稠密となる数体上のモデルがZariski稠密に存在する。

これは各族の全ての元に対する一律の稠密性ではない。ここに現れるdel Pezzo束の次数は4から8である。

### 明示的構成（Theorem D）

数体上で、次数4のdel Pezzo曲面をファイバーとするFano四次元多様体$X\to\mathbb P^2$で$Z(X)$が稠密となる族を構成する。一般の直線に制限すると、型No. 2-7のFano三次元多様体の特別な部分族で潜在的稠密性が得られる。

三次元の明示例は

$$
\lbrace x\_0x\_1+y\_0y\_1-z^2=0\rbrace\subset\mathbb P^4
$$

を$x\_0=x\_1=0$および$y\_0=y\_1=0$に沿ってblow-upした型No. 3-10である。この$X$では、任意の空でない開集合$U$と任意の反標準高さ$H$について

$$
N(U(F),H,B)\gg\_{U,H}B(\log B)^3
$$

が成り立つ。従って開集合を選ぶだけでは、元の形のManin予想を回復できない。

### 非稠密性の範囲（Corollaries E–F）

非直積で$\rho\_F(X)=\rho(X\_{\overline F})$の場合、例外集合は次の場合を除いて非稠密である。del Pezzo束の次数$d\leq8$に対して$\rho\_F(X)\leq10-d$となる場合、幾何学的Picard数1・指数1で種数$g\in\lbrace2,3,4,5,6,10,12\rbrace$の場合、または幾何学的Picard数1・指数2で次数$d\in\lbrace1,2,4,5\rbrace$の場合である。一般の変形では後二つの候補はそれぞれ$g\in\lbrace2,10,12\rbrace$、$d\in\lbrace4,5\rbrace$に縮む。

一方、$\rho\_F(X)=1<\rho\_{\mathrm{geom}}(X)$なら、可能な例外は型No. 2-6またはNo. 2-21だけで、一般の変形ではNo. 2-21だけが残る。残る候補を全て稠密と断定する定理ではない。

## 証明の見取り図

曲面の構造定理を使い、例外集合をhigher-a部分、反標準二次曲線、del Pezzo束に整理する。breakingな基底変換で一般ファイバーの算術的Picard数が増えると、新たな収縮が関数体拡大上で定義される。この収縮をパラメータ被覆が記録することで、有限個の写像へ集約できる。

明示的な次数4の構成では二次形式のrulingを判別式二重被覆で検出し、次数6の例では分裂ファイバーをパラメータ化する有理二重被覆を使う。非稠密性には曲線のパラメータ空間の幾何とMordell–Lang定理を組み合わせる。これらはIntroductionが説明する役割分担であり、後続節の分類計算を検証したものではない。

## 原論文との対応

- **Abstractページ:** [The geometric exceptional set for Fano threefolds](https://arxiv.org/abs/2610.23024)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.23024v1) — Introduction, pp. 2–5
- **Introduction中で言及された主要結果:** Theorems A–D, Corollaries E–F
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.23024v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
