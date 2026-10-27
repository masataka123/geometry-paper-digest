---
layout: paper
title: Deformations of the logarithmic tangent bundle of smooth projective surfaces
title_ja: 滑らかな射影曲面の対数接束の変形と剛性
authors: Sukmoon Huh, Min-Gyo Jeong
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We study fixed-determinant deformations of the logarithmic tangent bundle associated with a smooth irreducible divisor on a smooth complex projective surface. We derive numerical criteria for the existence of positive-dimensional deformation families. Using the Enriques--Kodaira classification and Miyaoka-type inequalities, we classify the minimal surface pairs whose logarithmic tangent bundle is infinitesimally rigid. We also prove monotonicity under compatible blow-ups and compute local comparison formulas for resolutions of low-multiplicity ordinary singularities of the boundary.
topic: algebraic-geometry
tags:
- vector-bundles-sheaves
- moduli
- birational-geometry
- chern-classes
arxiv_id: 2610.35127v1
arxiv_url: https://arxiv.org/abs/2610.35127
arxiv_submitted: '2026-10-26'
arxiv_updated: '2026-10-26'
summary: 滑らかな曲線を境界に持つ極小射影曲面について、対数接束が行列式固定の無限小変形を持たない場合を分類する。剛性が残るのは射影平面の直線・二次曲線とHirzebruch曲面の特定の負切断であり、点のブローアップに伴う変形空間の変化も調べる。
abstract_en: We study fixed-determinant deformations of the logarithmic tangent bundle associated with a smooth irreducible divisor on a smooth complex projective surface. We derive numerical criteria for the existence of positive-dimensional deformation families. Using the Enriques--Kodaira classification and Miyaoka-type inequalities, we classify the minimal surface pairs whose logarithmic tangent bundle is infinitesimally rigid. We also prove monotonicity under compatible blow-ups and compute local comparison formulas for resolutions of low-multiplicity ordinary singularities of the boundary.
summary_en: ''
abstract_ja: 滑らかな射影曲面と滑らかな境界曲線の対について、対数接束の行列式固定変形を研究する。極小曲面上では無限小剛性を持つ対を完全に分類し、それ以外では正次元の変形族が存在することを示す。ブローアップでは変形空間の次元が減らないことを示し、境界が節点、通常三重点、通常四重点を持つ縮約について局所的な補正を記述する。
abstract_source_url: https://arxiv.org/abs/2610.35127
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.35127v1](https://arxiv.org/abs/2610.35127)
- **著者:** Sukmoon Huh, Min-Gyo Jeong
- **初回投稿日:** 2026-10-26
- **最終更新日:** 2026-10-26
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

曲面 $X$ と境界曲線 $D$ を固定しても、対数接束 $T\_X(-\log D)$ 自体には変形の余地がありうる。本論文はその行列式を固定した変形を調べ、極小曲面上で無限小剛性が成立する例を分類する。

剛性が残るのは、射影平面と直線、射影平面と滑らかな二次曲線、そして特定のHirzebruch曲面と負切断の三種類だけである。それ以外の滑らかな非空既約境界を持つ極小曲面の対では、正次元の変形族が存在する。したがって単なる一次変形の非消滅にとどまらない結論を得る。

さらに、曲面を点でブローアップしたときの比較を与える。境界の狭義変換を取る操作では変形空間の次元は減らず、障害群が消える場合には厳密に増える。一方、境界に特異点を生む縮約では、その特異点の種類に依存する補正が現れる。全ての非極小対を分類したという主張ではない。

## 背景と問題設定

$D$ を滑らかな曲面 $X$ 上の滑らかな非空既約曲線とする。対数接束は

$$
E=T\_X(-\log D)=\Omega\_X^1(\log D)^\vee
$$

であり、行列式を固定する一次変形は $H^1(X,\operatorname{End}\_0E)$ で測られる。添字 $0$ は跡が零の自己準同型を意味する。ここでの変形は束の変形であり、対 $(X,D)$ の変形そのものとは区別する。

Introductionの数値的出発点はRiemann–Roch公式

$$
\chi(\operatorname{End}\_0 T\_X(-\log D))
=3\chi(\mathcal O\_X)+(K\_X+D)^2
-4\bigl(c\_2(X)+K\_X\cdot D+D^2\bigr)
$$

である。この式を曲面の分類およびChern数不等式と組み合わせる。ただしEuler標数だけで剛性が完全に判定できるわけではなく、等号近傍の例には別の幾何的議論が必要になる。

## 主結果

### 極小曲面上の剛性の分類（Theorem 1.1）

$X$ を滑らかな複素極小射影曲面とする。$T\_X(-\log D)$ が行列式固定で無限小剛性を持つのは、対 $(X,D)$ が次のいずれかの場合に限る。

- 射影平面と直線。
- 射影平面と滑らかな二次曲線。
- $e\ge2$ に対するHirzebruch曲面 $\mathbb F\_e$ と、その自己交点数 $-e$ の負切断 $C\_0$。

それ以外では行列式を固定した正次元の変形が存在する。境界を非空・滑らか・既約とすること、曲面が極小であることは分類の仮定に含まれる。

### ブローアップでの単調性（Theorem 1.2(1)）

非空の点ブローアップ列 $Y\to X$ を考え、各段階で境界の被約狭義変換が滑らかであるとする。最終的な狭義変換を $D\_Y$ とすると

$$
h^1\bigl(Y,\operatorname{End}\_0T\_Y(-\log D\_Y)\bigr)
\ge h^1\bigl(X,\operatorname{End}\_0T\_X(-\log D)\bigr).
$$

さらに $H^2(X,\operatorname{End}\_0T\_X(-\log D))=0$ なら不等号は厳密である。この場合、非自明なブローアップ後の束は無限小剛性を持たない。元の曲面の剛性が自動的にブローアップ先へ保存されるわけではない。

### 特異境界を生む縮約（Theorem 1.2(2)）

$Y$ 上の $(-1)$ 曲線を縮約し、これと横断的に交わる滑らかな境界 $D$ の像を $\Delta\subset X$ とする。像の特異点が通常三重点なら

$$
H^1\bigl(Y,\operatorname{End}\_0\Omega\_Y^1(\log D)\bigr)
\simeq H^1\bigl(X,\operatorname{End}\_0\Omega\_X^1(\log\Delta)\bigr).
$$

節点または通常四重点では、論文で定める評価写像の階数 $\rho\_p\in\lbrace 0,1\rbrace $ を用いて

$$
h^1\_Y=h^1\_X+1-\rho\_p
$$

となる。ここで両辺は上記の対応する跡零自己準同型層の一次コホモロジー次元である。接する一分枝の場合や、より高い非通常特異点まで同じ公式を適用できるとは述べていない。

## 証明の見取り図

極小曲面についてはEnriques–Kodaira分類に沿って場合分けし、Riemann–RochとMiyaoka型・Bogomolov–Miyaoka–Yau型不等式を用いる。数値評価が決定的でない場合には、例えば楕円曲面の多重切断の幾何を調べる。双有理操作については対数微分層と自己準同型層の比較を行い、縮約点の局所的な差をコホモロジーへ反映させる。Introductionが残す範囲を超えた非極小対の完全分類は行っていない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.35127)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.35127v1) — Section 1, pp. 1–4（Section 2の直前まで）
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.35127v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
