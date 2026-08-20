---
layout: paper
title: "The Miyaoka-Yau inequality and the delta invariant for Fano varieties"
title_ja: "Fano多様体に対するMiyaoka–Yau不等式とデルタ不変量"
authors: "Tomoyuki Hisamoto, Masataka Iwai"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
  - math.DG
arxiv_abstract: >-
  We establish the following Miyaoka-Yau inequality for any $n$-dimensional klt Fano variety $X$, possibly K-unstable, in terms of its delta invariant: $$ \left(2(n+1)\widehat{c}_2(X)-n c_1(X)^2\right)\cdot c_1(X)^{n-2} \ge -n \left(1-\min\{1,δ(X)\}\right)^2 \cdot c_1(X)^n. $$ Furthermore, inspired by recent work of Inoue and Hallam-Lahdili, we formulate and prove an equivariant version of this inequality in the soliton setting, in which the Chern classes and the delta invariant are replaced by the equivariant Chern classes and the weighted delta invariant, respectively. As a consequence, we obtain the equivariant Miyaoka-Yau inequality for every smooth Fano manifold admitting a Kähler-Ricci soliton.
topic: algebraic-geometry
tags:
  - chern-classes
  - fano-varieties
  - k-stability
  - kahler-ricci-flow-solitons
  - singularities
arxiv_id: "2607.25181v2"
arxiv_url: "https://arxiv.org/abs/2607.25181"
arxiv_submitted: "2026-07-28"
arxiv_updated: "2026-08-19"
summary: >-
  klt Fano多様体がK半安定でない場合にも、Miyaoka–Yau型Chern数不等式の不足分をデルタ不変量で定量化する論文です。滑らかな等号成立の場合は射影空間を特徴づけ、さらにKähler–Ricciソリトンに適合する同変版を示します。
abstract_en: ""
summary_en: >-
  This paper gives a sharp Chern-number bound for projective klt Fano varieties without assuming K-semistability. The deficit from the classical Miyaoka–Yau inequality is controlled by the truncated delta invariant, equivalently the greatest Ricci lower bound. It also develops a weighted equivariant counterpart for smooth Fano manifolds with torus actions and obtains a nonnegative equivariant inequality for Kähler–Ricci solitons. In the smooth equality case of the nonequivariant inequality, the variety is projective space.
abstract_ja: >-
  任意の$n$次元projective klt Fano多様体について、K不安定な場合も含め、デルタ不変量で補正したMiyaoka–Yau不等式を確立する。補正量は$\min\{1,\delta(X)\}$、すなわち最大Ricci下限によって測られる。さらに同変Chern類と重み付きデルタ不変量を用いるソリトン版を証明し、Kähler–Ricciソリトンをもつ滑らかなFano多様体に対する同変Miyaoka–Yau不等式を導く。
abstract_source_url: "https://arxiv.org/abs/2607.25181"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2607.25181v2](https://arxiv.org/abs/2607.25181)
- **著者:** Tomoyuki Hisamoto, Masataka Iwai
- **初回投稿日:** 2026年7月28日
- **最終更新日:** 2026年8月19日
- **主分類・副分類:** math.AG（主分類）、math.CV、math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

標準的なMiyaoka–Yau不等式は、標準束が正の多様体やK半安定Fano多様体では成立する一方、任意のFano多様体には成立しない。本論文は、Fano側での不等式の破れをK安定性のデルタ不変量で正確に補正する。

第一の結果は任意のprojective klt Fano多様体に適用でき、K半安定性を仮定しない。デルタ不変量を1で切った量が最大Ricci下限に一致することを使い、代数的安定性と微分幾何的なRicci下限をChern数不等式で結ぶ。

第二の結果は、通常のChern類では捉えられないKähler–Ricciソリトンの状況に向けた同変版である。トーラス作用、指数型の重み、同変Chern類、重み付きデルタ不変量を組み合わせることで、すべてのトーリックFanoを含むソリトンの枠組みに不等式を拡張する。

滑らかな$X$について第一の不等式で等号なら$X\cong\mathbf P^n$となる。ただし特異な場合は重み付き射影空間が等号例を与えるため、滑らかさを落とした同じ特徴づけは成立しない。

## 背景と問題設定

Fano多様体がK半安定であることは$\delta(X)\geq1$で特徴づけられる。Introductionでは

$$
\delta'(X):=\min\{1,\delta(X)\}
$$

が最大Ricci下限でもあることを出発点とし、K不安定性が古典的不等式からのずれをどれほど許すかを問う。同変側では、通常のChern類による不等式が一般のKähler–Ricciソリトンには不適切であるため、トーラス同変交叉理論へ移る必要がある。

## 主結果

### 主定理1（Theorem 1.1 = Theorem 7.2）

$n$次元projective klt Fano多様体$X$に対して

$$
\left(2(n+1)\widehat c_2(X)-n c_1(X)^2\right)\cdot c_1(X)^{n-2}
\geq -n\left(1-\delta'(X)\right)^2c_1(X)^n
$$

が成立する。ここで$\widehat c_2(X)$はorbifold Chern類である。$\delta(X)\geq1$なら右辺は0となり、既知のK半安定Fanoに対するMiyaoka–Yau不等式を回収する。$X$が滑らかで等号が成立すれば$X\cong\mathbf P^n$であり、不等式自体はK不安定な$\mathbf P(1,1,2)$でも鋭い。

### 同変主定理（Theorem 1.2）

トーラス$T$が作用する滑らかなFano $G$-多様体$X$と、正規化された重み$v(\mu)=e^{\langle\mu,\xi\rangle}$に対し、同変Chern類と重み付き最大Ricci下限$\delta'_v(X)$を用いる不等式

$$
\left(\left(2(n+1)c_2^T(X)-n(c_1^T(X))^2\right)e^{c_1^T(X)}\right)_T(\xi)
\geq -n^2(1-\delta'_v(X))^2\left(c_1^T(X)e^{c_1^T(X)}\right)_T(\xi)
$$

が成立する。特にKähler–Ricciソリトンをもつ場合は$\delta'_v(X)=1$となり、左辺が非負になる（Corollary 1.3）。

## 証明の見取り図

Introductionが示す共通の発想は、Miyaoka–Yau不等式を標準拡張層に対するBogomolov–Gieseker不等式として読むTianの方法である。これをLangerの不等式へ置き換えると、デルタ不変量による補正項が現れる。kltの場合には既存の標準拡張層の勾配評価と特異版Langer不等式を組み合わせる。

同変版では、重み付き半安定torsion-free sheafに対するBogomolov–Gieseker不等式が必要になる。特異な層には滑らかな計量論を直接使えないため、Edidin–Grahamの代数的同変交叉理論で第二同変Chern類と重み付き勾配を扱い、Harder–Narasimhan理論を整備して不等式へ到達する。

## 原論文との対応

- **Abstractページ:** [arXiv:2607.25181](https://arxiv.org/abs/2607.25181)
- **Introduction:** Section 1, pp. 2–6
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2; Corollary 1.3
- **論文構成の説明:** Introduction末尾、pp. 5–6
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
