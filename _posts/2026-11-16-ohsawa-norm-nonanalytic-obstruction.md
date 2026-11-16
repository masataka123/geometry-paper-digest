---
layout: paper
title: $L^2$ extension of holomorphic functions in the general non-analytic setting
title_ja: 非解析的特異点におけるOhsawaノルムとL²拡張の障害
authors: Dano Kim, Xu Wang
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.AG
arxiv_abstract: In an influential $L^2$ extension theorem due to Demailly, the subvariety to extend from is defined by the multiplier ideal of a quasi-plurisubharmonic defining function with analytic singularities. In his theorem, the finiteness of an $L^2$ norm called the Ohsawa norm plays the crucial role of determining whether a given holomorphic function or section can be extended. In 2016, Demailly asked if the Ohsawa norm behaves equally well when the defining function is further generalized to admit non-analytic singularities. We answer this question negatively by showing that for a wide class of log canonical defining functions with a unique log canonical place, only the zero holomorphic function on the subvariety has finite Ohsawa norm. It follows that for such a defining function, the $L^2$ extension theorem is vacuous. This reveals a fundamental obstruction in the theory of $L^2$ extension in the general non-analytic setting.
topic: several-complex-variables
tags:
- l2-methods
- multiplier-ideals-extension
- pluripotential-theory
- singularities
- toric-geometry
arxiv_id: 2505.00801v2
arxiv_url: https://arxiv.org/abs/2505.00801
arxiv_submitted: '2025-05-01'
arxiv_updated: '2026-11-12'
summary: 非解析的特異点を持つ準多重劣調和関数に対し、L²拡張の前提となるOhsawaノルムが部分多様体全体で特異になりうることを示す。log canonical placeが一意でもこの現象は起こり、拡張定理に適用できる非零切断がなくなる。トーリックな場合にはNewton凸体の境界が局所的に平面であることが、ノルムの非特異性を特徴づける。
abstract_en: ''
summary_en: An extension theorem may have no nonzero input even when its formal hypotheses permit a broad class of singularities. This paper studies that problem through the Ohsawa norm attached to a quasi-plurisubharmonic defining function. A unique log canonical place does not prevent the norm from being singular everywhere on the relevant centre. For a toric class of isolated singularities, the authors identify an exact convex-geometric criterion separating finite and divergent behaviour.
abstract_ja: Demailly型のL²拡張では、定義関数の特異性から作られるOhsawaノルムの有限性が重要になる。本論文は、非解析的特異点へ拡張した場合、このノルムがlog canonical中心の全体で特異となりうることを示す。一意なlog canonical placeを持つ場合でも、有限ノルムを持つ正則関数が零関数だけとなる例がある。孤立特異点を持つP-toric関数では、Newton凸体の境界の局所的平坦性とOhsawaノルムの非特異性が同値であり、悪い例と良い例の双方を構成できる。
abstract_source_url: https://arxiv.org/abs/2505.00801
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2505.00801v2](https://arxiv.org/abs/2505.00801)
- **著者:** Dano Kim, Xu Wang
- **初回投稿日:** 2025-05-01
- **最終更新日:** 2026-11-12
- **主分類・副分類:** math.CV（主分類）; math.AG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

$L^2$ 拡張定理は、部分多様体上の切断に適切な有限ノルムがあれば、それを周囲へ延長できるという形を取る。しかし、定義関数の特異点を一般化すると、その有限性を満たす非零切断がそもそも存在しない可能性がある。本論文は、Ohsawaノルムを用いるDemailly型の拡張定理について、この問題を取り上げる。

解析的特異点の場合、一意なlog canonical placeを持つ中心では、ノルムが全体で特異になることを避けられる。著者らは非解析的特異点ではこの期待が破れることを示す。拡張定理自体が偽になるのではなく、その有限ノルム条件が零切断以外には成り立たず、適用が空虚となるのである。

中心となる結果は、孤立特異点を持つトーリックな多重劣調和関数のOhsawaノルムをNewton凸体の境界形状で判定する定理である。境界が特定の点の近くで完全に平面になるという強い条件が必要となる。一方、非解析的な場合でも有限ノルムを持つ例はあり、非解析性だけで一律に排除されるわけではない。

## 背景と問題設定

準多重劣調和関数 $\Psi$ のlog canonical閾値を

$$
c\_x(\Psi)=\sup\lbrace c\geq0:e^{-c\Psi}\text{ が }x\text{ で局所可積分}\rbrace
$$

とする。全点で $c\_x(\Psi)\geq1$ のとき $(X,\Psi)$ をlog canonicalと呼ぶ。$e^{-\Psi}$ の非可積分集合を $Y\_0$ と書く。Ohsawaノルムが $x\in Y\_0$ で特異であるとは、その近くで定義された $f$ が $f(x)\neq0$ なら必ず $\Vert f\Vert \_\Psi=\infty$ となることをいう。特異集合 $Z(\Psi)$ が中心 $Y$ 全体を含む場合、その中心上でノルムはentirely singularとなる。

解析的特異点では特異点解消から測度を理解できるが、一般の非解析的特異点ではその方法が使えない。log canonical placeの一意性は正のスケーリングを除いて理解する。

## 主結果

### 主定理1（Theorem 1.4）：一意なplaceでも全面的特異性が起こる

非解析的特異点を持つlog canonicalな $(X,\Psi)$ と、非可積分集合の既約成分 $Y$ で、一意なlog canonical placeを持つにもかかわらず

$$
Z(\Psi)\cap Y=Y
$$

となる例が存在する。これはIntroductionのQuestion 1.3への否定的回答である。一意性だけを根拠に、非零正則切断が有限Ohsawaノルムを持つと結論することはできない。

### 主定理2（Theorem 1.5）：Newton凸体による判定

$P\subseteq\mathbb R\_{\geq0}^n$ をNewton凸体とし、単位多重円板上の $P$-toric多重劣調和関数 $\Psi$ が原点に孤立特異点を持ち、$c\_0(\Psi)=1$ を満たすとする。$P$-toricとは、特異性が有界項を除いてこのNewton凸体で決まるという論文の条件である。

このとき原点でOhsawaノルムが非特異であることは、$\mathbf1=(1,\ldots,1)$ の近くで $\partial P$ が超平面であることと同値である。具体的には、$\mathbf1$ を中心とする開球 $B$ と、$\alpha\_j\geq0$、$\sum\_j\alpha\_j=1$ が存在して

$$
P\cap B=\left\lbrace x\in B:\sum\_{j=1}^n\alpha\_j(x\_j-1)\geq0\right\rbrace
$$

となることが必要十分である。単に支持超平面が一意であるという滑らかさの条件より、局所的な平坦性を要求する点が本質的である。

### 有限ノルムを持つ非解析的な例（Corollary 1.6）

Question 1.3の設定で、Ohsawaノルムが中心全体では特異にならない例も存在する。したがって非解析的な特異点への拡張定理が常に空虚という結論ではない。トーリックでない一般の場合にも同様の全面的特異性が広く現れるという見通しは、Introductionでは期待として述べられ、一般定理として証明されたとはされていない。

## 証明の見取り図

Ohsawaノルムの定義に現れる積分を、トーリックな座標変換によってNewton凸体上の積分へ移し、凸解析で有限性を調べる。滑らかな境界を持ちながら $\mathbf1$ の近くで平面でない凸体を選べば、一意な支持超平面、したがって一意なlog canonical placeを保ったままノルムを発散させられる。この局所モデルで $Y\_0=Z=\lbrace 0\rbrace $ となることが否定例の核である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2505.00801)
- **Introduction:** [PDF](https://arxiv.org/pdf/2505.00801v2) — Section 1, pp. 1–6
- **Introduction中で言及された主要結果:** Theorems 1.4, 1.5；Corollary 1.6（Theorem 1.1は既存の拡張定理）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2505.00801v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
