---
layout: paper
title: "Log Calabi--Yau manifolds: holomorphic tensors, stability and universal cover"
title_ja: "log Calabi–Yau多様体：正則tensor、安定性、普遍被覆"
authors: "Tristan C. Collins, Henri Guenancia"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
  - math.DG
arxiv_abstract: >-
  We study various geometric properties of log Calabi-Yau manifolds, i.e. log smooth pairs $(X,D)$ such that $K_X+D=0$. More specifically, we focus on the two cases where $X$ is a Fano manifold and $D$ is either smooth or has two proportional components. Despite the existence of a complete Ricci flat Kähler metric on $X\setminus D$ in both cases, we will show that the geometric properties of the pair $(X,D)$ are vastly different, e.g. validity of Bochner principle, local triviality of the quasi-Albanese map, polystability of $T_X(-\log D)$ and compactifiability of the universal cover of $X\setminus D$. When $D$ has two components we show that the universal cover of $X\setminus D$ is a Calabi-Yau manifold of infinite topological type, and we describe the geometry at infinity from a Riemannian point of view.
topic: algebraic-geometry
tags:
  - calabi-yau-geometry
  - noncompact-kahler-geometry
  - stability
  - curvature
  - fundamental-groups
arxiv_id: "2509.07508v1"
arxiv_url: "https://arxiv.org/abs/2509.07508"
arxiv_submitted: "2025-09-09"
arxiv_updated: "2025-09-09"
summary: >-
  反標準因子を除いたFano多様体上の完備Ricci-flat Kähler計量がもたらす幾何を、因子が滑らかな場合と比例する2成分をもつ場合で比較する。前者ではBochner原理とlog接束の安定性を得る一方、後者ではそれらやquasi-Albanese写像の局所自明性が破れ、普遍被覆の無限位相型と無限遠幾何を示す。
abstract_en: ""
summary_en: >-
  The paper compares two log Calabi–Yau complements of anticanonical divisors in Fano manifolds, both carrying complete Ricci-flat Kähler metrics. For a smooth divisor, it establishes full special-unitary holonomy, a logarithmic Bochner principle, and stability of the logarithmic tangent bundle. For a divisor with two proportional components, it constructs families where analogous compact Calabi–Yau properties fail and where the universal cover has infinitely generated middle homology. It also determines the holonomy, asymptotic cone, and volume-growth order of the lifted metric.
abstract_ja: >-
  反標準因子 $D$ を除いたFano多様体 $X\setminus D$ の完備Ricci-flat Kähler幾何を、$D$ が滑らかな場合と比例する2成分の場合で比較する。滑らかな場合にはTian–Yau計量のholonomyが $SU(n)$ で、log tensorのBochner原理とlog接束の安定性が成り立つ。2成分の場合にはquasi-Albanese写像の局所自明性、log接束の多重安定性、普遍被覆のコンパクト化可能性が破れ、普遍被覆の中間homologyが無限rankとなる。さらにliftした計量の漸近錐と体積増大を記述する。
abstract_source_url: "https://arxiv.org/abs/2509.07508"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2509.07508](https://arxiv.org/abs/2509.07508)
- **著者:** Tristan C. Collins, Henri Guenancia
- **初回投稿日・最終更新日:** 2025年9月9日（v1）
- **主分類・副分類:** math.AG（主分類）、math.CV、math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

コンパクトCalabi–Yau幾何ではRicci-flat Kähler計量からBochner原理、接束の多重安定性、Albanese写像、普遍被覆の分解が得られる。本論文は反標準因子の補空間という非コンパクトlog Calabi–Yauで、これらがどこまで残るかを問う。

滑らかな反標準因子の場合、Tian–Yau計量のholonomyは $SU(n)$ で、log tensorにBochner原理が成立し、$T_X(-\\log D)$ は $-K_X$ に関して安定となる。

対照的に、反標準因子が比例する2成分をもつ場合、Collins–Li計量が存在してもquasi-Albanese写像の局所自明性やlog接束の多重安定性が失敗する例が得られる。普遍被覆は無限位相型をもち、コンパクト複素多様体の解析的Zariski開集合にはならない。

さらに普遍被覆上のlift計量についてholonomy、漸近錐、体積増大を計算し、元の空間とは異なる無限遠幾何を明らかにする。

## 主結果

### 滑らかな因子（Theorem A）

$n\\ge2$ 次元Fano多様体、滑らかな $D\\in|-K_X|$、Tian–Yau計量 $\\omega_{TY}$ に対し、holonomyは $SU(n)$ である。任意のlog tensor bundle

$$
E=T_X(-\\log D)^{\\otimes p}\\otimes\\Omega_X(\\log D)^{\\otimes q}
$$

の正則切断は補空間上で平行となり、$T_X(-\\log D)$ は $-K_X$ に関して安定である。

### 2成分の場合の破れ（Theorem B）

奇数 $n\\ge3$ と一般の次数 $(n+1)/2$ の超曲面 $D_1,D_2\\subset\\mathbb P^n$ に対し、$D=D_1+D_2$ とすると、quasi-Albanese写像は局所自明でなく、$T_X(-\\log D)$ は多重安定でなく、$X\\setminus D$ の普遍被覆はコンパクト複素多様体の解析的Zariski開集合に双正則でない。

### 普遍被覆の無限遠（Theorem C）

一般の比例する2成分の場合、Collins–Li計量のholonomyは $SU(n)$。普遍被覆の漸近錐は

$$
(\\mathbb R_{>0})^2\\times\\mathbb R,
\\qquad g_\\infty+h(x_1,x_2)dt^2
$$

の形で、半径 $R$ の球の体積増大は $R^{6n/(n+2)}$ のorderである。

## 証明の見取り図

滑らかな場合は計量の漸近形から平行形式を排除し、有限基本群とholonomy分類を組み合わせる。2成分の場合はquasi-Albanese fibrationの特異fiberを指数写像で無限被覆へ持ち上げ、vanishing cycleとdeck変換から独立な中間cycleを作る。漸近錐では無限巡回方向がほどけて実直線因子として残り、体積増大の指数を変える。

## 原論文との対応

- **Introduction:** Section 1, pp. 1–6
- **主要定理:** Theorems A, B, C
- **確認version:** v1
- **source_scope:** Abstract and Introduction
