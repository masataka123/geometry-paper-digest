---
layout: paper
title: "On the geography of 3-folds via asymptotic behavior of invariants"
title_ja: "不変量の漸近挙動による三次元多様体の地理"
authors: "Yerko Torres-Nova"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CO
arxiv_abstract: >-
  We study the geography problem for 3-folds of general type through the asymptotic behavior of invariants of $n$-th root covers. We first prove, in arbitrary dimension and for non-singular branch loci, that the Chern numbers are asymptotic to $n$ times the corresponding logarithmic Chern numbers of the base pair. In dimension three, for simple normal crossing branch divisors, we construct cyclic partial resolutions using toric methods and prove that, for asymptotic arrangements, the invariants $c_1^3, c_1c_2$, and $c_3$ have the same asymptotic behavior. We also obtain explicit families of 3-folds with ample canonical divisors that exhibit controlled Chern slopes.
topic: algebraic-geometry
tags:
  - chern-classes
  - singularities
  - toric-geometry
arxiv_id: "2307.10516v3"
arxiv_url: "https://arxiv.org/abs/2307.10516"
arxiv_submitted: "2023-07-20"
arxiv_updated: "2026-09-12"
summary: >-
  $n$ 乗根被覆によって一般型三次元多様体のChern数の比を制御する。滑らかな分岐では任意次元の漸近公式を示し、単純正規交叉分岐をもつ三次元の場合にはトーリックな部分解消を構成して $c_1^3,c_1c_2,c_3$ の漸近性を確立する。
abstract_en: >-
  We study the geography problem for 3-folds of general type through the asymptotic behavior of invariants of $n$-th root covers. We first prove, in arbitrary dimension and for non-singular branch loci, that the Chern numbers are asymptotic to $n$ times the corresponding logarithmic Chern numbers of the base pair. In dimension three, for simple normal crossing branch divisors, we construct cyclic partial resolutions using toric methods and prove that, for asymptotic arrangements, the invariants $c_1^3, c_1c_2$, and $c_3$ have the same asymptotic behavior. We also obtain explicit families of 3-folds with ample canonical divisors that exhibit controlled Chern slopes.
summary_en: ""
abstract_ja: >-
  一般型三次元多様体のChern数地理を $n$ 乗根被覆の漸近挙動から調べる。分岐成分が滑らかで互いに交わらない場合には任意次元でChern数が基底対の対数的Chern数の $n$ 倍へ漸近する。三次元の単純正規交叉分岐ではトーリック手法による巡回部分解消を構成し、適切な配置について三つのChern不変量の同様の漸近性を示す。
abstract_source_url: "https://arxiv.org/abs/2307.10516"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2307.10516](https://arxiv.org/abs/2307.10516)
- **著者:** Yerko Torres-Nova
- **初回投稿日:** 2023年7月20日
- **最終更新日:** 2026年9月12日
- **主分類・副分類:** math.AG（主分類）, math.CO
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

一般型三次元多様体の地理問題では、最小モデルのChern数

$$
[c_1^3:c_1c_2:c_3]\in\mathbb P^2_{\mathbb Q}
$$

がどの領域を満たすかを問う。本論文は、次数 $n$ の根被覆では被覆次数が比の中で相殺されることを利用し、基底の対数的Chern数から極限点を設計する。

分岐因子が互いに交わらない滑らかな成分からなる場合、任意次元で通常のChern数が対数的Chern数の $n$ 倍に漸近する。三次元で分岐が単純正規交叉をもつ場合には、三重点上の大きな特異性を制御する部分解消が必要になる。

## 背景と問題設定

曲面では根被覆によるChern slopeの稠密性が知られるが、三次元では三重点上の被覆特異点が一般に巡回的でなく、無造作な解消は $n^2$ 規模の例外データを生む。したがって、$O(n)$ の主要項を保つ解消の構成が中心課題となる。

## 主結果

### 滑らかな分岐での任意次元漸近性

Introductionでは、滑らかで互いに素な分岐成分をもつ次数 $n$ の対数的射について、各Chern数が

$$
c_I(X_n)\sim n\,\bar c_I(Z,D_{\rm red})
$$

となることが述べられる。完全交叉のペンシルから、三次元Chern slopeの二変数族を構成し、その極限族は

$$
c_1^3+c_3=2c_1c_2,\qquad c_1^3+3c_3=3c_1c_2
$$

上にあり、ともに $[3:2:1]$ へ収束する。

### SNC分岐の三次元漸近性

$c_1c_2=24\chi$ は解消の選択に依存せず漸近的である。残る $c_1^3,c_3$ について、局所トーリック構成を大域化した巡回部分解消 $X_n\to Y_n$ を作り、漸近配置なら三つの不変量が基底対の対数的Chern数の $n$ 倍と同じ主要項をもつことを示す。

## 証明の見取り図

三重点のトーリック錐を細分し、多重度を $n$ 未満に落として巡回商特異点だけを残す。これらはFujiki–Oka連分数で制御できるため、例外因子の寄与が主要な $O(n)$ 項を壊さない。Introductionは、この巡回モデルを極小モデルへ結び付ける問題を将来課題として区別している。

## 原論文との対応

- **Abstractページ:** [arXiv:2307.10516](https://arxiv.org/abs/2307.10516)
- **Introduction:** Section 1, pp. 1–3
- **結果の概説:** Section 1.1
- **確認したarXivバージョン:** v3
- **source_scope:** Abstract and Introduction
