---
layout: paper
title: "A Sharp inequality between local volumes and minimal log discrepancies"
title_ja: "局所体積と最小対数的食い違い係数の間の鋭い不等式"
authors: "Jingjun Han"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We answer a question of Li--Liu--Xu: every $n$-dimensional klt germ $x\in(X,Δ)$, where $n\ge2$, satisfies the sharp inequality
  $\widehat{\operatorname{vol}}(x,X,Δ)\le n^{n-1}\operatorname{mld}_x(X,Δ)$, with equality if and only if $Δ=0$ near $x$, and analytically,
  $(x\in X)\cong\frac{1}{r}(1,\ldots,1)$ for some $r\ge1$. We also prove that, in fixed dimension and with coefficients in a fixed finite set,
  $\widehat{\operatorname{vol}}/\operatorname{mld}$ is discrete away from zero. As applications of the sharp inequality, we obtain lower bounds for minimal log discrepancies of log Fano pairs.
topic: algebraic-geometry
tags:
  - singularities
  - birational-geometry
  - minimal-model-program
  - k-stability
  - fano-varieties
arxiv_id: "2608.16726v1"
arxiv_url: "https://arxiv.org/abs/2608.16726"
arxiv_submitted: "2026-08-17"
arxiv_updated: "2026-08-17"
summary: >-
  $n$ 次元klt特異点の局所体積を最小対数的食い違い係数で抑える鋭い不等式を証明し、等号を巡回商特異点で特徴づける。
  さらに比の離散性とlog Fano対のmldの明示的下界を導き、局所K安定性の不変量をMMPの古典的不変量へ結びつける。
abstract_en: ""
summary_en: >-
  This paper establishes an optimal comparison between normalized local volume and minimal log discrepancy for every complex klt germ of dimension at least two. It also characterizes equality by a specific cyclic quotient singularity without boundary. A finiteness theorem controls the possible volume-to-discrepancy ratios away from zero when the dimension and boundary coefficients are fixed. The local inequality then yields explicit discrepancy bounds for log Fano pairs, including K-semistable ones.
abstract_ja: >-
  複素数体上の $n\ge2$ 次元klt germについて、局所体積と最小対数的食い違い係数の最適な比較不等式を示す。等号成立は境界が消え、解析的に対角的な巡回商特異点となる場合に限る。固定次元・固定有限係数集合のもとでは両不変量の比が0から離れて離散的であり、応用としてlog Fano対のmldに下界を与える。
abstract_source_url: "https://arxiv.org/abs/2608.16726"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.16726](https://arxiv.org/abs/2608.16726)
- **著者:** Jingjun Han
- **初回投稿日:** 2026年8月17日
- **最終更新日:** 2026年8月17日（v1）
- **主分類・副分類:** math.AG（主分類。副分類なし）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

klt特異点の正規化体積の最小値である局所体積は、局所K安定性の中心的不変量である。一方、最小対数的食い違い係数（mld）はMMPにおける特異点の基本的不変量で、flipの停止問題とも深く関係する。本論文はこの二つを最適定数で比較する。

Li--Liu--Xuの従来評価にあった係数 $n^n$ を $n^{n-1}$ へ改善し、境界を許す任意次元のklt germで成立することを示す。しかも等号の場合を完全に特徴づけるため、単なる評価の改善にとどまらない。

さらに局所体積とmldの比について、次元と境界係数を固定すると0から離れた部分に有限個の値しか現れないことを証明する。局所・大域比較と組み合わせると、log Fano対の各閉点におけるmldの定量的下界が得られる。

## 背景と問題設定

局所体積 $\widehat{\operatorname{vol}}(x,X,\Delta)$ はlog discrepancyとvaluationの体積から定まり、その最小化valuationはK半安定log Fano coneへの退化を誘導する。既知の不等式

$$
\widehat{\operatorname{vol}}(x,X,\Delta)<n^n\operatorname{mld}_x(X,\Delta)
$$

はK半安定Fano多様体の有界性にも使われてきた。Introductionが掲げる問題は、定数を $n^{n-1}$ に鋭くできるか、また境界付きの場合にも同じ形が成り立つかである。

## 主結果

### 鋭い局所不等式（Theorem 1.1）

$n\ge2$ とし、$x\in(X,\Delta)$ を $n$ 次元klt germとする。このとき

$$
\widehat{\operatorname{vol}}(x,X,\Delta)
\le n^{n-1}\operatorname{mld}_x(X,\Delta).
$$

等号が成立するのは、$x$ の近傍で $\Delta=0$ であり、かつ解析的に

$$
(x\in X)\cong \frac1r(1,\ldots,1)
$$

となる整数 $r\ge1$ が存在する場合に限る。これによりLi--Liu--Xuの問題と、三次元境界付きの場合についてのLiuの問題が同時に解かれる。

### 比の離散性（Theorem 1.3）

次元 $n\ge2$ と有限集合 $\Gamma\subset[0,1]$ を固定する。境界係数が $\Gamma$ に属するklt germについて、任意の $\varepsilon>0$ に対し

$$
\left\{
\frac{\widehat{\operatorname{vol}}(x,X,\Delta)}{\operatorname{mld}_x(X,\Delta)}
\right\}\cap[\varepsilon,\infty)
$$

は有限集合である。したがってこの比は0から離れて離散的で、ACCを満たす。

### log Fano対への応用（Corollary 1.4）

$n$ 次元log Fano対 $(X,\Delta)$ の任意の閉点 $x$ について

$$
\operatorname{mld}_x(X,\Delta)\ge
\frac{n}{(n+1)^n}\,\delta(X,\Delta)^n
\bigl(-(K_X+\Delta)\bigr)^n.
$$

特にK半安定なら $\delta(X,\Delta)\ge1$ を代入できる。この係数は射影空間で等号となるため最適である。

## 証明の見取り図

Introductionによれば、正規化体積の最小化valuationをKollár componentで近似し、component上のlog Fano対の $\delta$ 不変量を制御する。局所体積の有限被覆に対する次数公式と、log Fano対の局所・大域比較を組み合わせることで、$n^{n-1}$ という係数を引き出す。等号の場合には各比較段階の等号条件を追跡し、境界の消滅と巡回商特異点の解析型を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.16726](https://arxiv.org/abs/2608.16726)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Theorem 1.3, Corollary 1.4
- **論文構成の説明:** Introduction, p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
