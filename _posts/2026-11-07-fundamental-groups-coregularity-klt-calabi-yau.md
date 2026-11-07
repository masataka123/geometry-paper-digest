---
layout: paper
title: Fundamental groups, coregularity, and low dimensional klt Calabi-Yau pairs
title_ja: 絶対coregularityによるklt対の基本群の制御
authors: Lukas Braun, Fernando Figueroa
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: In this article, we study how the absolute coregularity of a projective log pair reflects on its fundamental group. More precisely, we conjecture that for a projective klt log pair $(X,D)$ of absolute coregularity $c$ (and arbitrary dimension) the fundamental group $\pi_1^{\rm reg}(X,D)$ admits a normal abelian subgroup of finite index and rank at most $2c$. We prove this conjecture in the cases $0 \leq c \leq 3$, building on the almost abelianity of the fundamental groups of klt Calabi-Yau pairs of dimension $\leq 3$. In the cases $c \in \{0,1,2\}$ and fixed dimension, we can furthermore bound the index of a solvable normal subgroup. In dimension three, we are able to prove almost abelianity of the fundamental group of the regular locus for projective klt Calabi-Yau pairs.
topic: algebraic-geometry
tags:
- fundamental-groups
- singularities
- calabi-yau-geometry
- minimal-model-program
arxiv_id: 2401.01315v3
arxiv_url: https://arxiv.org/abs/2401.01315
arxiv_submitted: '2024-01-02'
arxiv_updated: '2026-11-03'
summary: 射影klt対の正則部分のorbifold基本群を、絶対coregularityから制御する。coregularityが3以下の場合に仮想アーベル性と階数上界を示し、その基礎として3次元klt Calabi–Yau対の基本群を扱う。
abstract_en: ''
summary_en: The topology of a singular pair is measured here on its regular locus, with the boundary retained as orbifold data. The authors propose that absolute coregularity bounds the rank of a finite-index abelian subgroup. A reduction to the dimension given by that invariant proves the claim through coregularity three. The argument also supplies a torus-cover decomposition for pairs and separates rank bounds from the more delicate problem of bounding subgroup indices.
abstract_ja: 射影klt対の絶対coregularityが小さい場合、その正則部分のorbifold基本群は有限指数のアーベル部分群をもつ。coregularityが零なら有限、1から3ならアーベル部分群の階数はその値の2倍以下となる。論文は一般の次元からcoregularityと同じ次元への帰着、対に対するtorus cover、および3次元klt Calabi–Yau対の仮想アーベル性を示し、coregularityが2以下の場合には可解部分群の指数も制御する。
abstract_source_url: https://arxiv.org/abs/2401.01315
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2401.01315v3](https://arxiv.org/abs/2401.01315)
- **著者:** Lukas Braun, Fernando Figueroa
- **初回投稿日:** 2024-01-02
- **最終更新日:** 2026-11-03
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかなCalabi–Yau型の空間では、基本群の無限部分がアーベル多様体に由来するという構造がよく知られている。しかしklt特異点を許し、特異点を除いた正則部分の基本群を見ると、空間全体の基本群より複雑になり、同じ構造を示すことは容易ではない。

本論文は、対の絶対coregularityという不変量が、その基本群のアーベル部分の大きさを制御するという予想を考える。主要な帰着定理は、任意の次元の問題を、coregularityと等しい次元のklt Calabi–Yau対の問題へ移す。

この帰着と低次元の解析により、coregularityが零なら基本群は有限、1から3なら有限指数のアーベル部分群をもち、その階数はcoregularityの2倍以下となる。また、階数の制御と指数の一様な制御は別問題であることを明確にし、後者ではアーベル群より広い可解群を用いる。

## 背景と問題設定

$\pi\_1^{\mathrm{reg}}(X,D)$ は、$X$ 全体の位相的基本群ではなく、正則部分 $X\_{\mathrm{reg}}$ とその上の境界からなるorbifold対の基本群である。有限指数のアーベル部分群をもつことを仮想アーベル性という。

coregularityはlog Calabi–Yau構造の双対複体の次元と $X$ の次元との差を測る不変量であり、toricな状況では零となる。Conjecture 1は、絶対coregularityが $c$ の射影klt対について、$\pi\_1^{\mathrm{reg}}(X,D)$ が仮想アーベルで階数が高々 $2c$ であると予想する。この仮定にはCalabi–Yau型であることが含まれる。

## 主結果

### coregularityと同じ次元への帰着（Theorem 1）

絶対coregularity $c$ かつ次元 $c$ のklt Calabi–Yau対でConjecture 1が成り立つなら、任意の次元の絶対coregularity $c$ の対で成り立つ。低次元の基本群定理から、高次元であってもcoregularityが小さい対へ結論を伝える役割を果たす。

### coregularity零での有限性（Theorem 2）

射影klt対 $(X,D)$ の絶対coregularityが零なら

$$
\bigl|\pi\_1^{\mathrm{reg}}(X,D)\bigr|<\infty
$$

となる。次元自体を制限しない有限性である。

### coregularityが1から3の場合（Theorem 3）

$1\leq c\leq3$ では、ある正規アーベル部分群 $A\triangleleft\pi\_1^{\mathrm{reg}}(X,D)$ が存在し、

$$
[\pi\_1^{\mathrm{reg}}(X,D):A]<\infty,\qquad \operatorname{rank}A\leq2c
$$

となる。従ってConjecture 1はこの範囲で証明される。一般の $c$ に対する予想の解決ではない。

### 可解部分群の指数の有効な制御（Theorem 4）

次元を $d$ とし $0\leq c\leq2$ とすると、次元とcoregularityのみに依存する定数 $i(c,d)$ によって、長さが高々 $2d-1$、指数が高々 $i(c,d)$ の可解部分群が得られる。アーベル部分群の階数は制御できても、その指数を同様に一様制御できるとは限らないため、可解群へ対象を広げている。

### 対に対するtorus cover（Theorem 5）

射影klt対で $K\_X+D\sim\_{\mathbb Q}0$ なら、有限quasi-étale被覆 $Y\to X$ が存在し、

$$
Y\simeq A\times Z,\qquad \dim A=\widetilde q(X),\qquad \widetilde q(Z)=0
$$

となる。ここで $A$ はアーベル多様体、$\widetilde q$ は有限quasi-étale被覆を通じたirregularityの最大値である。$Z$ にはklt境界 $D\_Z$ があり、$K\_Z+D\_Z\sim\_{\mathbb Q}0$ を満たす。

Conjecture 1を仮定すると、この分解から $\widetilde q(X)\leq\widehat{\operatorname{coreg}}(X,D)$ が従う（Corollary 1）。全てのcoregularityに対するこの系は、予想を仮定した主張である。

### 3次元klt Calabi–Yau対（Theorem 6）

3次元のklt log Calabi–Yau対について、正則部分のorbifold基本群は仮想アーベルであり、その階数は

$$
\operatorname{rank}\leq\max\bigl(4,2\widetilde q(X)\bigr)
$$

で抑えられる。境界が非自明な場合も含む。これが次元帰着と組み合わさり、coregularityが3以下という任意次元の結論を支える。

## 証明の見取り図

Introductionでは、まずcoregularityに応じた低次元のCalabi–Yau対へ基本群問題を帰着することが、全体の中心に置かれる。そこで低次元の仮想アーベル性を用い、次元に依存しない階数上界を元の対へ戻す。

torus coverは、増大不正則数に対応するアーベル因子を分離し、残りを $\widetilde q=0$ の問題として切り出す。3次元では既知の手法を組み合わせて正則部分の基本群を制御する。Introductionは後半の証明の詳細までは展開していないため、ここではこの帰着関係と役割にとどめる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2401.01315)
- **Introduction:** [PDF](https://arxiv.org/pdf/2401.01315v3) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Conjecture 1; Theorems 1–6; Corollary 1
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2401.01315v3
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
