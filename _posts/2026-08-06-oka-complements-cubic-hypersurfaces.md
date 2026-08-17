---
layout: paper
title: "Oka complements of cubic hypersurfaces"
title_ja: "三次超曲面の Oka 補集合"
authors: "Song-Yan Xie"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  We classify complements of cubic hypersurfaces in complex projective spaces of dimension at least
  two, including reducible and nonreduced cubics. The complement is Oka unless the cubic is the union
  of three distinct hyperplanes containing a common projective subspace of codimension two; this
  exceptional complement is not Oka. For a smooth cubic, we pass to an unramified cyclic triple cover
  of the complement and construct complement-preserving sprays along residual affine conics. On cubic
  surfaces the twenty-seven lines give a finite dominating family. In higher dimensions we rescale the
  sprays so that they descend from blowups along lines, and use the tangent-transfer geometry of
  Kaliman--Zaidenberg to make their tangent directions span at every point. For an irreducible
  singular cubic, projection from a singular point, Kusakabe's localization theorem, and Hanysz's
  theorem on meromorphic-graph complements yield an induction on dimension. Reducible cubics reduce to
  complements of affine hypersurfaces defined by polynomials of degree at most two; explicit complete
  vector fields and elementary normal forms isolate the exceptional configuration.
topic: algebraic-geometry
tags:
  - oka-theory
arxiv_id: "2608.02413v1"
arxiv_url: "https://arxiv.org/abs/2608.02413"
arxiv_submitted: "2026-08-03"
arxiv_updated: "2026-08-03"
summary: >-
  複素射影空間内の三次超曲面について、重複成分や可約な場合も含めて補集合が Oka となる条件を完全に分類する。唯一の例外は、同じ pencil に属する相異なる三超平面の和であり、特に長く未解決だった滑らかな平面三次曲線の補集合が Oka であることが従う。
abstract_en: ""
summary_en: >-
  This paper classifies the Oka property for complements of cubic divisors in complex projective spaces of dimension at least two. There is one exceptional reduced configuration: three distinct hyperplanes from a common pencil. The smooth case is handled through an unramified cyclic cover and sprays built from residual conics, while singular and reducible cubics require separate projection and affine-complement arguments. In particular, the work settles the previously open case of the complement of a smooth plane cubic.
abstract_ja: >-
  次元2以上の複素射影空間における三次超曲面の補集合を、可約・非被約の場合も含めて分類する。補集合は、被約台が同じ pencil に属する相異なる三超平面の和である場合を除いて Oka であり、この例外では Oka でない。滑らかな場合には非分岐三重巡回被覆上で residual affine conic に沿う spray を構成し、特異または可約な場合には射影、局所化、低次数 affine 超曲面の補集合の解析を用いる。
abstract_source_url: "https://arxiv.org/abs/2608.02413"
license_name: "arXiv non-exclusive distribution license 1.0"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.02413v1](https://arxiv.org/abs/2608.02413v1)
- **著者:** Song-Yan Xie
- **初回投稿日:** 2026年8月3日
- **最終更新日:** 2026年8月3日（v1）
- **主分類・副分類:** Algebraic Geometry (math.AG), Complex Variables (math.CV)
- **ライセンス:** [arXiv non-exclusive distribution license 1.0](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Oka 理論は、Stein 空間からの正則写像に対する柔軟性を扱い、Gromov の holomorphic spray と $h$-principle によって幾何学的な枠組みを得た。しかし定義から具体的な多様体が Oka かを見抜くことは一般に難しく、超曲面補集合は Oka 的柔軟性と Kobayashi 双曲性の境界を調べる試験例になっている。

## 背景と問題設定

三次曲線については、既知の結果が既約特異曲線やいくつかの配置を扱っていた一方、滑らかな平面三次曲線の補集合が Oka かどうかは長く未解決だった。$\mathbb C^2$ からの dominating map が存在することだけでは完全な Oka 性は従わず、分岐する有限写像を通じた降下も一般には使えないためである。

## 主結果

### 三次超曲面補集合の分類（Theorem 1.1）

主定理（Theorem 1.1）は、$n\geq2$ とし、重複成分を許す三次超曲面 $D\subset\mathbb P^n$ に対して、$\mathbb P^n\setminus D$ が Oka であるための必要十分条件を与える。唯一の非 Oka の場合は、$D$ の被約台が、同じ pencil に属する相異なる三超平面の和となる場合である。

### 滑らかな三次超曲面（Theorem 1.2）

したがって滑らかな三次超曲面 $C$ の補集合はすべて Oka となる（Theorem 1.2）。

滑らかな場合の着想は巡回三重被覆である。滑らかな平面三次曲線 $C=\{F=0\}$ から、$F(x_0,x_1,x_2)=w^3$ で定まる三次曲面を作ると、その境界を除いた部分は $\mathbb P^2\setminus C$ の非分岐被覆になる。三次曲面上の27本の直線から residual conic の族を取り、境界を除いた affine conic 上の完全ベクトル場を用いて spray を構成する。直線の incidence により、その接方向が各点で接空間を張ることが domination を与える。

高次元では固定された27本の直線配置がなく、直線に沿う blowup も恒等写像ではない。Introduction によれば、著者は flow を適切に rescale して例外ファイバー上から降下させ、Kaliman--Zaidenberg の tangent-transfer geometry により任意点で必要な接方向を得る。これにより有限個の dominating spray を抽出し、滑らかな分枝を完成させる。

特異な既約三次超曲面には、特異点からの射影と Kusakabe の Zariski 局所化定理を使って次元に関する帰納を行う。可約または非被約の場合は、次数2以下の affine 多項式の補集合へ問題を帰着し、完全ベクトル場と標準形によって例外的な三超平面配置だけを取り出す。これらは滑らかな場合とは異なる論法であり、合わせて全分類を与える。

Introduction は、この結果を低次数超曲面に対するより広い Oka 問題の一例として位置づける。三次の場合にはコンパクトな滑らか三次超曲面も既知の結果から Oka であり、本論文によりその補集合側も全ての $n\geq2$ で肯定された。一方、一般次数で次元を大きくしたときの最適な閾値は、今後の問いとして提示されている。

### 主結果の意味と射程

- 三次超曲面の補集合が Oka でない唯一の被約配置を、同一 pencil 内の相異なる三超平面として特徴づける。
- 滑らかな平面三次曲線の補集合が Oka かという既存の未解決問題を肯定的に解決する。
- 滑らかな場合は巡回三重被覆と residual conic に沿う complement-preserving spray によって扱う。
- 三次曲面では27本の直線が有限 dominating family を与え、高次元では rescaling と tangent transfer がその役割を担う。
- 既約特異の場合と可約・非被約の場合を、それぞれ射影・局所化と affine 二次以下の分類へ帰着する。
- 一般次数の滑らかな超曲面とその補集合が高次元で Oka になるかは、Introduction で将来の問題として残される。

## 証明の見取り図

Section 2で Oka 判定法と局所化を準備し、Section 3で blowup 上の共通の Hamiltonian spray を構成する。Sections 4--6が滑らかな場合を扱い、Sections 7--9が affine 二次補集合、特異点からの射影、全分類を順に扱う。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.02413v1](https://arxiv.org/abs/2608.02413v1)
- **Introduction:** Section 1, pp. 1--5
- **Introduction中で言及された主要定理番号:** Theorems 1.1--1.5
- **論文構成の説明:** p. 4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license 1.0
- **source_scope:** Abstract and Introduction
