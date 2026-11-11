---
layout: paper
title: Sasaki-Einstein metrics and K-stability
title_ja: Fano錐のK安定性によるSasaki–Einstein計量の存在判定
authors: Tristan C. Collins, Gábor Székelyhidi
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We show that a polarized affine variety admits a Ricci flat K\"ahler cone metric, if and only if it is K-stable. This generalizes Chen-Donaldson-Sun's solution of the Yau-Tian-Donaldson conjecture to K\"ahler cones, or equivalently, Sasakian manifolds. As an application we show that the five-sphere admits infinitely many families of Sasaki-Einstein metrics.
topic: differential-geometry
tags:
- k-stability
- kahler-einstein-metrics
- singularities
- toric-geometry
arxiv_id: 1512.07213v2
arxiv_url: https://arxiv.org/abs/1512.07213v2
arxiv_submitted: '2015-12-22'
arxiv_updated: '2017-09-24'
summary: 正規化されたFano錐特異点に対し、Reeb場を固定したRicci平坦Kähler錐計量の存在をK安定性で特徴付ける。トーラス同変な退化を用いた判定を具体的な超曲面へ適用し、Brieskorn–Pham型の錐の存在条件と5次元球面上の無限個のSasaki–Einstein計量族を得る。
abstract_en: ''
summary_en: Fixing a Reeb field turns the search for a Sasaki–Einstein metric into an existence problem on an affine cone. This paper makes K-stability a necessary and sufficient criterion for normalized Fano cones. Torus symmetry can reduce the degeneration tests enough to settle explicit hypersurface families. The analysis adapts the continuity method to a setting where positivity is available transversely rather than in every cone direction.
abstract_ja: Fano多様体上のKähler–Einstein存在問題を、指定したReeb場を持つアフィン錐へ拡張する。正規化Fano錐のK安定性がRicci平坦錐計量の存在と同値になるため、そのリンク上のSasaki–Einstein計量も代数的退化から判定できる。対称性の高い具体例では有限個の退化の検査に帰着し、従来の障害条件の十分性を示す。
abstract_source_url: https://arxiv.org/abs/1512.07213v2
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:1512.07213v2](https://arxiv.org/abs/1512.07213v2)
- **著者:** Tristan C. Collins, Gábor Székelyhidi
- **初回投稿日:** 2015-12-22
- **最終更新日:** 2017-09-24
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Sasaki–Einstein計量は、その多様体をリンクとするRicci平坦Kähler錐計量と対応する。したがって、錐の複素代数構造を与えたときにこの計量が存在するかは、特異アフィン多様体上の存在問題として捉えられる。本論文は、錐の拡大を指定するReebベクトル場も固定してこの問題を扱う。

主定理は、正規化されたFano錐特異点にRicci平坦Kähler錐計量が存在することと、論文の意味でK安定であることの同値である。Fano多様体についてのChen–Donaldson–Sunの結果を錐の設定へ拡張し、計量の存在を代数的な退化の性質に置き換える。

一般には無限に多くの退化を調べる必要があり、同値定理だけで有効な判定法が得られるとは限らない。しかしトーラス対称性が大きい場合、正規な中心ファイバーを持つ同変退化の候補を有限個に抑えられる。本論文はこの考えを具体的な超曲面族へ適用する。

代表例では、指数$p,q$に対する二つの厳密不等式が存在の必要十分条件となる。既知のLichnerowicz障害から得られていた必要条件の十分性を確立し、5次元球面上に無限個のSasaki–Einstein計量族を与える。

## 背景と問題設定

原点に孤立特異点を持つアフィン多様体$X\subset\mathbb C^N$とトーラス作用を考える。Reeb場$\xi$は座標関数に正の重みで作用し、対応する正則ベクトル場について$\mathcal L\_\xi z\_i=\sqrt{-1}a\_i z\_i$、$a\_i>0$となる。求める計量は

$$
\operatorname{Ric}(\omega)=0,
\qquad\mathcal L\_{-J\xi}\omega=2\omega
$$

を満たす。$\xi$を固定することは、同じアフィン多様体上の任意の錐構造を一度に扱うこととは異なる。

Introductionは、こうした計量の存在に必要な代数的枠組みを「正規化Fano錐特異点」と呼び、厳密な定義をSection 2へ委ねている。以下の定理もこの仮定を持つ対象に限定され、任意のアフィン特異点に無条件で適用されるものではない。

## 主結果

### 主定理1：存在とK安定性（Theorem 1.1）

正規化Fano錐特異点$(X,\xi)$について

$$
(X,\xi)\text{ admits a Ricci-flat Kähler cone metric}
\quad\Longleftrightarrow\quad (X,\xi)\text{ is K-stable}
$$

が成り立つ。K安定性は本論文で採用する、トーラス作用と可換な退化およびFutaki不変量による意味である。

Introductionでは非存在の場合を具体的に説明している。適切な同変埋め込みと一径数部分群$\lambda$があり、正規な極限$Y=\lim\_{t\to0}\lambda(t)\cdot X$に対して

$$
\operatorname{Fut}(Y,\xi,w)\le0,
\qquad\operatorname{Fut}(Y,\xi,w)=0\ \Longrightarrow\ Y\not\simeq X
$$

となる。ここで$w$は一径数部分群の生成ベクトル場である。このように等号の場合の非自明性も存在判定に含まれる。

### 主定理2：具体的な超曲面族（Theorem 1.2）

整数$p,q>1$に対し

$$
Z\_{\mathrm{BP}}(p,q)=\lbrace x^2+y^2+z^p+w^q=0\rbrace \subset\mathbb C^4
$$

を考える。適切な$\xi$を選んだ$(Z\_{\mathrm{BP}}(p,q),\xi)$にRicci平坦Kähler錐計量が存在するための必要十分条件は

$$
2p>q,\qquad 2q>p
$$

である。等号を許す条件ではない。必要性は既知のLichnerowicz障害によるものであり、本論文は十分性を示す。Introductionによれば、以前の存在結果はこの族の$(p,q)=(2,2),(2,3)$に限られていた。この定理の帰結として$S^5$に無限個のSasaki–Einstein計量族が存在する。

## 証明の見取り図

存在方向の大枠は、Chen–Donaldson–Sunの方法を滑らかな連続法へ適応した流れを錐へ移すことである。連続経路に沿う弱解を扱い、Ding汎関数の凸性などを用いて特異極限の解析を行う。その上で部分C⁰評価により、解析的な極限を代数的退化へ結び付ける。

新しい困難は、従来の議論で重要だったRicci曲率の厳密な正値性が錐全体では得られないことである。代わりに、Reeb方向に横断的なKähler構造の正のRicci曲率を利用する。計量の存在からK安定性への方向は、Bermanの方法に沿って証明される。

応用では、複雑度1のトーラス作用についてIlten–Süßの手法を使い、有限個の同変退化を検査する。トーリックの場合には最大トーラスに関する退化が特に制約され、Futaki不変量の消滅条件を通じてFutaki–Ono–Wangの結果も回収される。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/1512.07213v2)
- **Introduction:** [PDF](https://arxiv.org/pdf/1512.07213v2) — Section 1, pp. 1–4（Section 2より前）
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 1512.07213v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
