---
layout: paper
title: "On the nilpotent orbit theorem of complex variations of Hodge structure"
title_ja: "複素Hodge構造の変動に対する冪零軌道定理"
authors: "Ya Deng"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  We prove some results on the nilpotent orbit theorem for complex variation of Hodge structures.
topic: algebraic-geometry
tags: 
  - hodge-theory
  - vector-bundles-sheaves
arxiv_id: "2203.04266v3"
arxiv_url: "https://arxiv.org/abs/2203.04266"
arxiv_submitted: "2022-03-08"
arxiv_updated: "2023-10-31"
summary: >-
  複素偏極Hodge構造の変動が正規交差境界で退化するとき、Hodge filtrationとDeligne拡張の交わりが局所自由になることを示す。この延長定理を基礎に、周期写像の正則延長・水平性と一変数での指数的距離評価を含む冪零軌道定理の主要部分を複素の場合へ拡張する。
abstract_en: >-
  We prove some results on the nilpotent orbit theorem for complex variation of Hodge structures.
summary_en: ""
abstract_ja: >-
  複素偏極Hodge構造の変動について、冪零軌道定理の主要部分を確立する。Hodge filtrationと指定した留数区間をもつDeligne拡張との交わり、およびその次数商が局所自由であることを示す。これを用いて周期写像の正則延長と水平性を得て、一変数では冪零軌道による指数的近似も証明する。
abstract_source_url: "https://arxiv.org/abs/2203.04266"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2203.04266](https://arxiv.org/abs/2203.04266)
- **著者:** Ya Deng
- **初回投稿日:** 2022-03-08
- **最終更新日:** 2023-10-31
- **主分類・副分類:** math.AG（主分類）, math.CV
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

Schmidの冪零軌道定理は整数Hodge構造の変動の退化を記述する基本定理だが、複素Hodge構造の変動への完全な一般化には不足があった。本論文は、正規交差境界を越えるHodge filtrationの延長をまず制御する。

中心となるのは、Hodge filtrationと留数固有値を指定したDeligne拡張との交わりが局所自由であり、その次数付き対象がHodge計量の増大度で定めた延長と一致するという結果である。

これを用い、多変数周期写像からモノドロミーの指数因子を除いた写像が境界まで正則に延びることと、対応する冪零軌道の水平性を得る。一変数では冪零軌道が周期領域内に入り、元の周期写像を指数的精度で近似する。

## 背景と問題設定

$D=\sum_{i=1}^{\ell}D_i$ を複素多様体 $X$ 上の単純正規交差因子とし、$X\setminus D$ 上に複素偏極Hodge構造の変動 $(V,\nabla,F^\bullet,Q)$ を考える。境界でモノドロミーが生じるため、平坦束とHodge filtrationを同時に延長する必要がある。

整数の場合にSchmidが与えた冪零・$SL_2$ 軌道定理のうち、複素変動では特に延長層の局所自由性が問題になる。

## 主結果

### 定理A（延長層の局所自由性）

任意の $\boldsymbol a=(a_1,\ldots,a_\ell)\in\mathbb R^\ell$ に対し、留数固有値を $[-a_i,-a_i+1)$ に取るDeligne拡張を $V^{\mathrm{Del}}_{\boldsymbol a}$ とすると、

$$
F^p_{\boldsymbol a}:=j_*F^p\cap V^{\mathrm{Del}}_{\boldsymbol a}
$$

と商 $F^p_{\boldsymbol a}/F^{p+1}_{\boldsymbol a}$ は局所自由である。さらに次数付き層は、Hodge計量のノルム増大度から定めるHodge束のprolongationと自然に同一視される。

### 定理B（複素冪零軌道）

$(\Delta^*)^\ell\times\Delta^m$ 上の変動の周期写像を $\Phi$、モノドロミー対数を $2\pi iN_i$ とする。$\exp(\sum z_iN_i)\Phi$ が誘導する写像は $\Delta^{\ell+m}$ へ正則に延長し、その境界値から作る

$$
\theta(z,w)=\exp\!\left(-\sum_{i=1}^{\ell}z_iN_i\right)\Psi(0,w)
$$

は水平である。一変数では十分左半平面で $\theta(z)$ が周期領域に入り、定数 $C,C',\beta>0$ により

$$
d_D(\theta(z),\Phi(z))\le C'|\operatorname{Re}z|^\beta e^{C\operatorname{Re}z}
$$

という指数的距離評価を満たす。

## 証明の見取り図

定理AはMochizukiによるacceptable bundleのprolongationと $L^2$ 評価を組み合わせる。定理Bの水平性と一変数評価は、この延長結果を土台としてSchmidの方法を複素変動へ移す。

## 原論文との対応

- **Abstractページ:** [arXiv:2203.04266](https://arxiv.org/abs/2203.04266)
- **Introduction:** Section 0, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorems A, B
- **確認したarXivバージョン:** v3
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
