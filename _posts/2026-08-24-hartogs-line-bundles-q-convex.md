---
layout: paper
title: "A generalization of Hartog's extension of line bundles"
title_ja: "直線束のHartogs拡張定理の一般化"
authors: "Youssef Alaoui"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
arxiv_abstract: >-
  In this article, we prove that if $X$ is a complex manifold of dimension $n\geq 4$ such that there exists a $q$-convex with corners function $f\in F_{q}(X)$, then every holomorphic line bundle over $\{f>c\}$ extends uniquely to $X$ if $1\leq q\leq n-3$. This generalizes a well-known result obtained in \cite{ref5} for $q$-complete with corners complex manifolds with a corresponding exhaustion function $f \in F_{q}(X)$, when $n \geq 3q$.
topic: several-complex-variables
tags:
  - complex-analytic-spaces
arxiv_id: "2601.09645v1"
arxiv_url: "https://arxiv.org/abs/2601.09645"
arxiv_submitted: "2026-01-14"
arxiv_updated: "2026-01-14"
summary: >-
  $q$-convex with corners函数をもつ次元$n\ge4$の複素多様体で、その上位集合から全空間への正則直線束の一意拡張を示す。函数のexhaustivenessを仮定せず、$1\le q\le n-3$の範囲で制限写像 $H^p(X,\mathcal O^*)\to H^p(Y,\mathcal O^*)$ の低次数での同型を証明する。
abstract_en: >-

summary_en: >-
  This paper proves a Hartogs-type continuation statement for holomorphic line bundles on a complex manifold carrying a function that is q-convex with corners. Unlike an earlier result for q-complete spaces, the function need not be exhaustive. Under a dimension and convexity range, restriction from the manifold to a suitable superlevel set is an isomorphism in the cohomological degrees that include line-bundle classes. The argument uses local cohomology vanishing and standard spectral-sequence tools.
abstract_ja: >-
  次元$n\ge4$の複素多様体$X$に$q$-convex with corners函数$f$が存在するとき、$1\le q\le n-3$なら上位集合$\{f>c\}$上の任意の正則直線束が$X$へ一意に拡張することを示す。従来の$q$-complete with cornersの場合の定理からexhaustivenessの仮定を除き、適用可能な次元条件を拡張する。
abstract_source_url: "https://arxiv.org/abs/2601.09645"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2601.09645](https://arxiv.org/abs/2601.09645)
- **著者:** Youssef Alaoui
- **初回投稿日・最終更新日:** 2026年1月14日（v1）
- **主分類:** math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Hartogs型拡張問題では、コンパクト集合の外側で定義された正則対象が全空間へ延長できるかを問う。直線束については、$q$-complete with corners空間とexhaustion函数の下で一意拡張が知られていたが、一般のコンパクト集合では反例も存在する。

本論文はexhaustionを要求せず、複素多様体上に$q$-convex with corners函数が一つ存在すればよいことを示す。対象領域は一点$\xi_0$の函数値より大きい上位集合であり、$n\ge4$、$1\le q\le n-3$という明示的な範囲を置く。

結論は直線束の拡張だけでなく、$\mathcal O^*$係数コホモロジーの低次数における制限写像の同型として述べられる。この定式化が存在と一意性を同時に含む。

## 背景と問題設定

$q$-convex with corners函数とは、局所的に有限個の滑らかな$q$-convex函数の最大値として書ける連続函数である。$q$-complete性と違い、ここでは函数がexhaustiveである必要はない。

## 主結果

### 制限写像の同型定理（主定理）

$X$を次元$n\ge4$の複素多様体、$\xi_0\in X$とし、$1\le q\le n-3$を満たす$q$-convex with corners函数$f$が存在すると仮定する。$Y=\{z\in X:f(z)>f(\xi_0)\}$とおけば、
$$H^p(X,\mathcal O^*)\longrightarrow H^p(Y,\mathcal O^*)$$
は$p=0,1,2$で全単射、$p=3$で単射である。特に$H^1(-,\mathcal O^*)$が正則直線束の同型類を分類するため、$Y$上の直線束は$X$へ存在も同型を除く一意性も保って拡張する。

## 証明の見取り図

IntroductionはAndreotti–Grauert理論による局所コホモロジー消滅、Grothendieck spectral sequence、コホモロジーにおけるMittag–Leffler定理を主要道具として挙げる。局所的に$f$を有限個の$q$-convex函数の最大値として表し、上位集合の合併に対する消滅を組み立て、指数完全列を通じて$\mathcal O^*$係数の主張へ移す。

## 原論文との対応
- **Abstractページ:** [arXiv:2601.09645](https://arxiv.org/abs/2601.09645)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中の主要結果:** unnumbered Theorem
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
