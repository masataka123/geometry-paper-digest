---
layout: paper
title: Holomorphic interpolation and the Levi problem
title_ja: 正則ジェット補間と特異Stein空間上のLevi問題
authors: Yuta Kusakabe, Takeo Ohsawa
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: 'On a nonsingular locally Stein Riemann domain over a Stein space, we prove that holomorphic forms of top degree interpolate jets of any fixed order on every closed discrete set finite over the base. For unramified domains, this yields jet interpolation by holomorphic functions, answering a question of Colţoiu and Joiţa for nonsingular sources. More generally, we establish a twisted interpolation theorem over weakly pseudoconvex spaces admitting injective holomorphic immersions into projective space. We also give negative answers to the Levi problem over singular Stein spaces: the Coeuré-Loeb space yields a non-Stein locally Stein unramified Riemann domain over a normal Stein threefold, and a related construction gives a relatively compact, non-Stein locally Stein open subset of a normal Stein fourfold. Finally, the punctured anticanonical bundle of Fornaess'' ramified surface is a holomorphically separable increasing union of Stein manifolds that is not Stein, answering
  a question of Vigna Suria.'
topic: several-complex-variables
tags:
- stein-geometry
- complex-analytic-spaces
- l2-methods
- positivity
arxiv_id: 2611.10807v1
arxiv_url: https://arxiv.org/abs/2611.10807
arxiv_submitted: '2026-11-07'
arxiv_updated: '2026-11-07'
summary: 局所Steinな非特異Riemann領域で、底に対して有限な閉離散集合上のジェットを正則最高次形式で補間する。特異Stein空間を底とするLevi問題には、非分岐領域で次元3、開部分集合で次元4の反例を与え、補間の成立範囲とStein性の差を明確にする。
abstract_en: ''
summary_en: Kusakabe and Ohsawa separate a strong interpolation phenomenon from the global Stein property. Their estimates allow prescribed jets on discrete sets satisfying a finiteness condition over the base. Singular bases nevertheless support locally Stein objects that are not Stein. The examples locate the remaining dimensional boundary of the open-subset Levi problem and also address a union question.
abstract_ja: 弱擬凸空間への射影空間内の単射正則immersionを仮定し、局所Steinな非特異Riemann領域上で半正値線束を掛けた最高次形式のジェット補間を証明する。Steinな底では捩りを除くことができ、非分岐の場合には関数の補間を得る。一方、特異Stein空間上の局所Stein非分岐領域と局所Stein開集合について非Steinの例を構成し、正則分離可能なStein多様体の増大合併もSteinとは限らないことを示す。
abstract_source_url: https://arxiv.org/abs/2611.10807
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.10807v1](https://arxiv.org/abs/2611.10807)
- **著者:** Yuta Kusakabe, Takeo Ohsawa
- **初回投稿日:** 2026-11-07
- **最終更新日:** 2026-11-07
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

局所的にSteinであることから全体のStein性が従うか、というLevi問題は、底に特異点を許すと難しくなる。正則関数による補間はStein性の指標であるが、どの離散集合まで補間できるかを区別する必要がある。

本論文は、局所Steinな非特異Riemann領域で、底のコンパクト集合上に有限個しか点を持たない閉離散集合に対するジェット補間を証明する。最高次形式から始め、非分岐の場合などには正則関数の補間へ進む。無限枚の領域でも、ファイバー方向の排気関数を仮定せずに議論する。

同時に、特異Stein空間上の局所Stein非分岐領域や局所Stein開集合がSteinでない具体例を与える。補間定理と反例は矛盾せず、前者の「底に対して有限」という条件が全閉離散集合の補間とは異なることを示す。

## 背景と問題設定

$\pi:X\to Y$は同じ純次元を持つ複素空間間の離散ファイバーの正則写像で、$X$は連結な複素多様体とする。$Y$の各点の近傍$U$について$\pi^{-1}(U)$がSteinなら局所Steinという。

閉離散集合$S\subset X$が$Y$上有限とは、任意のコンパクト集合$B\subset Y$に対し$S\cap\pi^{-1}(B)$が有限であることをいう。また$Y$の2点がすべての滑らかな多重劣調和関数で同じ値を取るとき、それらを区別不能とする。Stein空間では区別不能類は1点である。

## 主結果

### 主定理1：捩ったジェット補間（Theorem 1.1）

$Y$を純次元$n\geq1$の弱擬凸空間で、単射正則immersion $\iota:Y\to\mathbb P^N$を持つものとする。$\mathcal O\_Y(1)=\iota^\ast \mathcal O\_{\mathbb P^N}(1)$とおく。$\pi$が局所Stein、$L$が$X$上の滑らかな半正値計量を持つ線束であると仮定する。

$k\geq0$、$p\geq1$、$m\geq p(n+k)+1$とし、$S$は$Y$上有限な閉離散集合で、$Y$の各区別不能類が$\pi(S)$の高々$p$点を含むとする。このとき任意の$k$-jet $a\_x$に対し

$$
s\in H^0(X,K\_X\otimes L\otimes\pi^\ast \mathcal O\_Y(m)),\qquad
j\_x^ks=a\_x\quad(x\in S)
$$

を選べ、さらに$z\in\pi^{-1}(\pi(S))\setminus S$で$j\_z^ks=0$にできる。$p=1$の場合の境界$m\geq n+k+1$は$X=Y=\mathbb P^n$で鋭い。

### Steinな底での帰結（Corollaries 1.2–1.3、Proposition 1.4）

$Y$がSteinなら射影空間からの捩りが不要となり、$K\_X\otimes L$の切断で同じ補間ができる。さらに$\pi$が非分岐、または$K\_X^{-1}$が滑らかな半正値計量を持つなら、正則関数でも固定した任意の次数のジェットを補間できる。

非分岐の局所Stein領域では、$X$がSteinであることと、その射が正則包絡域を持つことが同値になる。一方、ある線束の切断で\ast \ast すべての\ast \ast 閉離散集合上の任意の値を補間できることは、Steinな底を持つ非特異Riemann領域のStein性と同値である。「底上有限」への制限を除くと条件が強くなる。

### 主定理2：Stein増大合併の反例（Theorem 1.5）

Fornæssの分岐曲面$M\to\Delta\times\mathbb C$では、すべての正則関数が底を経由するため$M$は正則分離可能でない。その反標準束から零切断を除いた

$$
(K\_M^{-1})^{\times}
$$

は、正則分離可能でStein開集合の増大合併であるにもかかわらずSteinでない。これはVigna Suriaの問いへの反例となる。この空間がStein空間の開集合として実現できるかは、Introductionで未解決とされる。

### 主定理3：特異Stein空間上の反例（Theorems 1.6–1.7）

1つのcusp特異点を持つ正規Stein曲面$Y\_A$を選ぶと、非SteinなCœuré–Loeb空間$E$は$\mathbb C^\ast \times Y\_A$上の局所Stein非分岐Riemann領域になる。したがって次元3の底ですでにLevi問題の非分岐版は否定的となる。

また、特異点が1つの正規Stein三次元空間$Z$と

$$
W\Subset\mathbb C^\ast \times Z,\qquad
W\subset(\mathbb C^\ast \times Z)\_{\mathrm{reg}}
$$

が存在し、$W$は連結な局所Stein開集合だがSteinでない。積を取ることで開集合版の反例は次元4以上へ広がる。次元3の開集合版は未解決のままであり、その肯定的予想を否定したものではない。

## 証明の見取り図

補間では、超平面切断の補集合の滑らかな部分にある稠密Stein開集合上で、非分岐部分の$\bar\partial$方程式を解く。底から引き戻した重みを使い、線形形式で極を与え、多重劣調和排気関数のレベル集合で局所化する。これがファイバー方向の排気関数を要しない理由である。

反例ではFornæss曲面とCœuré–Loeb束を用いる。後者を特異Stein空間上の非分岐領域として実現し、束の射のグラフを厚くすることで、相対コンパクトな局所Stein開集合の反例へ進む。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.10807)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.10807v1) — Section 1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.5–1.7; Corollaries 1.2–1.3; Proposition 1.4
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.10807v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
