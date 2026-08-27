---
layout: paper
title: "Some Examples and Counterexamples in Oka Theory"
title_ja: "Oka理論における例と反例"
authors: "Yun-Heng Du"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
arxiv_abstract: >-
  This paper gives examples and counterexamples in Oka theory: two about deleting closed sets from complex Euclidean space, one about blowing up along a connected Oka center, and one about deforming continuous maps to regular maps. Two positive results show that $\mathbb{C}^3\setminus S$ is Oka for every closed set $S\subset\mathbb{R}^3$, and that the complement of the closed Hartogs triangle in $\mathbb{C}^2$ is Oka. In contrast, for every $n\ge3$ there is a proper holomorphic embedding $\mathbb{C}\hookrightarrow\mathbb{C}^n$ whose image $A$ is a closed connected smooth curve biholomorphic to $\mathbb{C}$, but whose blow-up $Bl_A\mathbb{C}^n$ is Brody volume hyperbolic and hence not Oka. Finally, for every $n\geq 2$, there exist a smooth connected affine algebraic variety $X$ and a continuous map $X\to\mathbb{C}^n\setminus\{0\}$ that is not homotopic to any regular map $X\to\mathbb{C}^n\setminus\{0\}$; equivalently, $\mathbb{C}^n\setminus\{0\}$ fails the algebraic basic Oka property (aBOP).
topic: several-complex-variables
tags:
  - oka-theory
  - hyperbolicity
  - stein-geometry
arxiv_id: "2608.24653v1"
arxiv_url: "https://arxiv.org/abs/2608.24653"
arxiv_submitted: "2026-08-25"
arxiv_updated: "2026-08-25"
summary: >-
  Oka性の保存と破綻を具体例で調べ、$\mathbb C^3$ から任意の閉集合 $S\subset\mathbb R^3$ を除いた補集合と、閉Hartogs三角形の補集合がOkaであることを示す。一方、連結で滑らかなOka中心に沿うblow-upがBrody体積双曲的となる反例、および代数的basic Oka propertyの反例を構成する。
abstract_en: ""
summary_en: >-
  The paper resolves several example-driven questions about Oka manifolds. It proves Oka properties for complements of arbitrary relatively closed subsets of real three-space in complex three-space and for the complement of the closed Hartogs triangle. It also constructs properly embedded complex lines whose blow-ups make affine space Brody volume hyperbolic, showing that a connected smooth Oka center does not ensure preservation of the Oka property. A further construction produces smooth affine sources witnessing failure of the algebraic basic Oka property for punctured affine spaces.
abstract_ja: >-
  Oka理論における四つの問題を、正例と反例の双方から扱う。任意の相対閉集合 $S\subset\mathbb R^3$ に対する $\mathbb C^3\setminus S$ と、$\mathbb C^2$ 内の閉Hartogs三角形の補集合がOkaであることを示す。これに対し、$\mathbb C$ と双正則な閉連結滑らかな中心に沿う $\mathbb C^n$ のblow-upがBrody体積双曲的となる例を構成する。さらに $\mathbb C^n\setminus\{0\}$ が代数的basic Oka propertyを満たさないことも示す。
abstract_source_url: "https://arxiv.org/abs/2608.24653"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.24653](https://arxiv.org/abs/2608.24653)
- **著者:** Yun-Heng Du
- **初回投稿日・最終更新日:** 2026年8月25日
- **主分類:** math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Oka多様体は凸コンパクト集合上の正則写像を整写像で近似できる柔軟性によって特徴づけられる。本論文は、補集合、blow-up、連続写像の代数化という三つの操作を通じて、その柔軟性がどこで保たれ、どこで壊れるかを具体化する。

正の結果として、任意の相対閉集合 $S\subset\mathbb R^3$ に対して $\mathbb C^3\setminus S$ がOkaであることを示し、既知の補集合定理に残っていた次元対 $(3,3)$ を埋める。また閉Hartogs三角形の補集合もOkaであることを示す。

負の結果は、blow-upの中心が連結・滑らか・Okaであっても全空間のOka性を保証しないことを示す。さらにpunctured affine spaceについて、連続写像を同じhomotopy類の正則写像へ置き換えられない滑らかな連結affine sourceを作る。

## 背景と問題設定

Oka性は局所的な正則近似から大域的な柔軟性を引き出す性質である。しかし閉集合の補集合やblow-upに対する保存則には鋭い制約がある。本論文は既知のKusakabeの補集合定理とlocalization theorem、さらに非退化整写像が必ず交わる離散集合の構成を組み合わせる。

## 主結果

### 実部分空間の閉集合の補集合（Theorem 1.3）

任意の相対閉集合 $S\subset\mathbb R^3$ に対し、$\mathbb C^3\setminus S$ はOka多様体である。二次多項式自己同型で実座標の二乗長を一つの複素座標の虚部へ記録し、補集合定理の成長条件へ帰着する。

### 閉Hartogs三角形（Theorem 1.4）

$$
H=\{(z_1,z_2)\in\mathbb C^2:|z_1|\le |z_2|\le1\}
$$

の補集合 $\mathbb C^2\setminus H$ はOkaである。二つのZariski開集合を既知のOka補集合モデルに同定し、localization theoremを適用する。

### Oka中心に沿うblow-upの反例（Theorem 1.6）

各 $n\ge3$ に対しproper embedding $\gamma:\mathbb C\hookrightarrow\mathbb C^n$ が存在し、$A=\gamma(\mathbb C)$ は閉連結滑らかでOkaだが、$\operatorname{Bl}_A\mathbb C^n$ はBrody体積双曲的でありOkaでない。

### 代数的Oka性の反例（Theorem 1.8）

各 $n\ge2$ に対し、滑らかな連結affine代数多様体 $X$ と、どの正則写像にもhomotopicでない連続写像 $X\to\mathbb C^n\setminus\{0\}$ が存在する。

## 証明の見取り図

補集合の二結果では多項式自己同型とZariski開被覆を使い、既存のOka補集合・局所化定理へ帰着する。blow-up反例では、任意の非退化整写像が臨界点以外で交わる閉離散集合を構成し、それをproperly embeddedな複素直線上に配置する。blow-downの微分が例外因子上でrankを失うことがBrody体積双曲性を導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.24653](https://arxiv.org/abs/2608.24653)
- **Introduction:** Section 1, pp. 1–5
- **主要定理:** Theorems 1.3, 1.4, 1.6, 1.8
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
