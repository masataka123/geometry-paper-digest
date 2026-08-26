---
layout: paper
title: "Periods of Oka K3 surfaces are dense"
title_ja: "Oka K3曲面の周期は稠密である"
authors: "Song-Yan Xie, Shengyuan Zhao"

arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.AG
arxiv_abstract: >-
  We give the first known examples of Oka K3 surfaces: every smooth hypersurface of multidegree \((2,2,2)\) in \((\mathbb{P}^1)^3\) is Oka. Building on this example, we prove that in every local Kuranishi family of K3 surfaces the points with Oka fibers form a dense $G_\delta$ subset of the base, and the sublocus of Oka fibers with vanishing Néron--Severi group is likewise a dense $G_\delta$ subset. We also obtain projective and nonprojective Oka Kummer surfaces and prove an analogous density statement in the Kummer period domain.
topic: several-complex-variables
tags:
  - oka-theory
  - calabi-yau-geometry
  - hodge-theory
  - moduli
arxiv_id: "2608.24392v1"
arxiv_url: "https://arxiv.org/abs/2608.24392"
arxiv_submitted: "2026-08-25"
arxiv_updated: "2026-08-25"
summary: >-
  滑らかな多重次数 $(2,2,2)$ の $(\mathbb P^1)^3$ 内超曲面がOkaであることを示し、初のOka K3曲面の例を与える。さらに任意のK3曲面の局所Kuranishi族でOka fiberが稠密 $G_\delta$ 集合をなし、Kummer周期領域にも同様の稠密性が成り立つ。
abstract_en: >-
  
summary_en: >-
  The paper produces explicit K3 surfaces with the Oka property by using hypersurfaces in a triple product of projective lines. It then studies how this flexibility property spreads under deformation. Oka fibers form a Baire-generic subset in every local K3 deformation space, including many nonprojective fibers without curves. Related density results are obtained for marked periods and for the Kummer locus.
abstract_ja: >-
  $(\mathbb P^1)^3$ 内の滑らかな多重次数 $(2,2,2)$ 超曲面はすべてOkaであり、これが初めて知られたOka K3曲面の例となる。この例から、任意のK3曲面の局所Kuranishi族でOka fiberの集合が稠密 $G_\delta$ となり、Néron–Severi群が消えるOka fiberも同様に稠密であることを示す。射影的・非射影的なOka Kummer曲面を構成し、Kummer周期領域でも対応する稠密性を得る。
abstract_source_url: "https://arxiv.org/abs/2608.24392"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.24392](https://arxiv.org/abs/2608.24392)
- **著者:** Song-Yan Xie, Shengyuan Zhao
- **初回投稿日:** 2026年8月25日
- **最終更新日:** 2026年8月25日
- **主分類・副分類:** math.CV（主）, math.AG（副）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Oka多様体は凸コンパクト集合近傍からの正則写像を全写像で近似できる複素多様体であり、正則写像の柔軟性を表す。一般判定は難しく、K3曲面についてはstrong dominabilityやOka-1が知られていたものの、Okaである具体例はなかった。

本論文は $(\mathbb P^1)^3$ 内の滑らかな多重次数 $(2,2,2)$ 超曲面がすべてOkaであることを証明し、最初のOka K3曲面を与える。3つの楕円fibrationと正則symplectic形式からdominating spraysを構成することが幾何学的入力である。

さらに任意のK3曲面の局所Kuranishi族で、Oka fiberはBaire categoryの意味でgeneric、すなわち稠密 $G_\delta$ 集合をなす。Néron–Severi群が0の非射影的かつ曲線を含まないOka K3曲面も同じ意味で稠密に現れる。

周期領域でもOka周期とOka Kummer周期の稠密性を示す。ただしこれは偏極K3曲面のmoduliでの稠密性を意味せず、その問題は未解決である。論文は「すべてのK3曲面はOka」という予想を提出するが、これは証明済みの主張ではない。

## 背景と問題設定

複素多様体 $Y$ がOkaであるとは、任意の $n\ge1$、凸コンパクト集合 $C\subset\mathbb C^n$ とその近傍上の正則写像 $C\to Y$ が、$C$ 上一様に全写像 $\mathbb C^n\to Y$ で近似できることをいう。K3曲面に対し、Oka性を保証する具体的なspray構造を見つけ、その性質が変形空間でどれほど広がるかを調べる。

## 主結果

### 局所変形族での稠密性（Theorem A）

K3曲面の局所Kuranishi族 $\pi:\mathcal X\to B$ に対して

$$
B_{\mathrm{Oka}}=\{b\in B\mid X_b\text{ is Oka}\}
$$

と、その中で $\operatorname{NS}(X_b)=0$ を満たす部分集合はともに $B$ の稠密 $G_\delta$ 集合である。ここでgenericはZariski位相ではなくBaire categoryの意味である。

### 明示的Oka K3曲面（Theorem B / Corollary 3.3）

$(\mathbb P^1)^3$ 内の滑らかな多重次数 $(2,2,2)$ 超曲面はすべてOkaである。これは具体的な射影的Oka K3曲面の族を与える。

### 周期領域での稠密性（Theorem C）

K3周期領域 $\mathcal D$ 内のOka周期は稠密 $G_\delta$ であり、Néron–Severi格子が0となるものも稠密である。Kummer周期領域 $\mathcal D_K$ でも同様で、射影的および非射影的なOka Kummer曲面が存在する。

## 証明の見取り図

正則symplectic多様体から曲線へのproper写像は、symplectic形式を介してfiber方向の完全な正則vector fieldを生み、line bundle全体で定義されたsprayを与える。$(2,2,2)$ K3曲面の3つの射影から得るspraysは接空間を生成するためsubellipticであり、従ってOkaとなる。Fermat 4次曲面をこの型かつKummer曲面として実現し、性質を保つ正次元変形族を作る。その全無理周期に対するmodular group軌道の稠密性をVerbitskyによるRatner理論の応用と組み合わせ、局所変形空間および周期領域で稠密性を導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.24392](https://arxiv.org/abs/2608.24392)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem A, Theorem B, Theorem C
- **論文構成の説明:** Section 2, pp. 3–4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
