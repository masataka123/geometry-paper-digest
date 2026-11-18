---
layout: paper
title: Gorenstein toric Fano $d$-varieties have Picard ranks at most $2d$
title_ja: Gorenstein toric Fano多様体のPicard数の鋭い上界
authors: Zhuang He, Benjamin Nill
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CO
arxiv_abstract: We show that the Picard rank of $d$-dimensional Gorenstein toric Fano varieties is at most $2d$. This generalizes Batyrev's conjecture of Picard ranks for smooth toric Fano varieties, which was proved by Casagrande for all $\mathbb{Q}$-factorial Gorenstein toric Fano varieties. The convex-geometric proof is a generalization of Casagrande's proof and Eikelberg's theory of non-$\mathbb{Q}$-factorial toric Picard groups, with key ideas from work of Debarre, Øbro, Fujita and the first author. The proof was found using ChatGPT 6.1.
topic: algebraic-geometry
tags:
- fano-varieties
- toric-geometry
arxiv_id: 2611.21074v1
arxiv_url: https://arxiv.org/abs/2611.21074
arxiv_submitted: '2026-11-16'
arxiv_updated: '2026-11-16'
summary: Gorenstein toric Fano多様体のPicard数は、次元の2倍以下であることを示す。Q-factorial性を仮定せず、等号が成り立つ場合を次数6のdel Pezzo曲面の積として特徴づける。
abstract_en: ''
summary_en: The Picard number can behave very differently from the number of rays in a singular toric fan. This paper obtains a sharp dimension-dependent bound for Gorenstein toric Fano varieties without assuming Q-factoriality. The extremal case is identified geometrically. A numerical basis for Cartier divisor data replaces direct vertex counting in the argument.
abstract_ja: 反射多面体から定まるトーリックFano多様体について、非Q-factorialの場合も含めPicard数の線形上界を与える。頂点の総数ではなくCartier因子を測る数値的基底を評価することにより、従来の単体的な場合の議論を拡張し、最大値を達成する多様体も決定する。
abstract_source_url: https://arxiv.org/abs/2611.21074
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.21074v1](https://arxiv.org/abs/2611.21074)
- **著者:** Zhuang He, Benjamin Nill
- **初回投稿日:** 2026-11-16
- **最終更新日:** 2026-11-16
- **主分類・副分類:** math.AG（主分類）; math.CO
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Fano多様体のPicard数は、独立な因子類がどれほど存在するかを測る基本的な不変量である。トーリックの場合には凸多面体による記述が使えるが、非Q-factorialな特異点を許すと、単純な頂点数の評価はPicard数の適切な制御にならない。

本論文は、任意の $d$ 次元Gorenstein toric Fano多様体についてPicard数が $2d$ 以下であることを証明する。従来のQ-factorialな場合の上界を一般化するだけでなく、等号の場合を次数6のdel Pezzo曲面の積に限定する。

中心となる工夫は、反射多面体の全頂点を数える代わりに、Cartier因子の自由度を捉える「数値的基底」を選ぶことである。Introductionは、証明の発見にChatGPTを用い、著者らが検証・再構成したと明記する。この記述は著者による研究過程の説明であり、ここで証明全体を独立に検証したという意味ではない。

## 背景と問題設定

Gorenstein toric Fano多様体は反射格子多面体に対応する。Batyrevが滑らかな場合に予想した上界は、CasagrandeによってQ-factorialなGorenstein toric Fano多様体に対して証明されていた。

非Q-factorialの場合には、類群の階数 $|V(P)|-d$ はPicard数より真に大きくなり得る。頂点数自体は次元に対して急速に増大し得るため、そこから線形上界を得る方針には限界がある。また一般化Mukai予想の $\rho\_X(\iota\_X-1)\le d$ は、擬指数 $\iota\_X=1$ の場合にはPicard数を制限しない。

## 主結果

### Picard数と等号成立条件（Theorem 1.1）

$X$ を $d$ 次元Gorenstein toric Fano多様体とすると

$$
\rho\_X\le 2d.
$$

等号は、$d$ が偶数で

$$
X\simeq(S\_3)^{d/2}
$$

である場合に限り成り立つ。ここで $S\_3$ は射影平面を非共線な3点でblow-upした次数6のdel Pezzo曲面である。したがって奇数次元では

$$
\rho\_X\le 2d-1
$$

となる。Gorenstein性とFano性が主要仮定であり、一般のトーリックFano多様体すべてに同じ上界を主張しているわけではない。

## 証明の見取り図

EikelbergのPicard群の記述により、頂点上の自由ベクトル空間を各面に由来するアフィン関係で割った空間を考える。その基底となる頂点集合 $B$ を取れば、$\rho\_X=|B|-d$ となる。

特別な面 $F$ と、その法線に関するレベルの和を最小にする数値的基底を選ぶ。基底を負・零・正のレベルに分け、Introductionに示された評価

$$
|B\_-|=d,\qquad |B\_0|\le2d-m,\qquad |B\_+|\le m
$$

を組み合わせる。ここで $m$ は原論文Proposition 3.1で導入される量であり、和を取ると消える。結果として $|B|\le3d$、したがって $\rho\_X\le2d$ を得る。単体でない面の頂点数を直接抑える必要がなくなる点が、従来法からの変更である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.21074)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.21074v1) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorem 1.1
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.21074v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
