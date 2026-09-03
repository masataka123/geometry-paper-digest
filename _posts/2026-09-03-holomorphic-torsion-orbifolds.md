---
layout: paper
title: "Asymptotics of holomorphic torsion on orbifolds and an equivariant arithmetic Hilbert-Samuel theorem"
title_ja: "orbifold上の正則torsionの漸近展開と同変算術的Hilbert--Samuel定理"
authors: "Kai Köhler"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
arxiv_abstract: >-
  We compute the $\log p$-part of the asymptotic expansion of the holomorphic torsion of the $p$-th power of a positive line bundle in terms of characteristic classes. This is done for orbifold and equivariant torsions. In the equivariant case the exponents in the expansion are less than or equal to the dimension of the fixed point set. We deduce a corresponding equivariant arithmetic Hilbert-Samuel theorem in Arakelov geometry.
topic: differential-geometry
tags:
  - positivity
  - vector-bundles-sheaves
  - chern-classes
arxiv_id: "2609.02192v1"
arxiv_url: "https://arxiv.org/abs/2609.02192"
arxiv_submitted: "2026-09-02"
arxiv_updated: "2026-09-02"
summary: >-
  正のHermite線束の高いtensor冪に対する正則torsionの漸近展開について、orbifold版と同変版の $\log p$ 項を特性類で明示する。同変版では冪指数を固定点集合の次元で制御し、その公式からArakelov幾何における同変算術的Hilbert--Samuel定理を導く。
abstract_en: ""
summary_en: >-
  The paper determines the logarithmic portion of the large-tensor-power asymptotics of holomorphic torsion. It treats effective Hermitian orbifolds as well as finite-order equivariant actions, expressing the relevant coefficients through characteristic classes on inertia strata or fixed loci. In the equivariant case, the fixed-point dimension controls the largest power that occurs. These analytic formulas yield anomaly statements and an equivariant arithmetic Hilbert-Samuel theorem for arithmetic varieties.
abstract_ja: >-
  正の線束の $p$ 乗に対する正則torsionの漸近展開のうち $\log p$ を含む部分を、特性類によって計算する。orbifold torsionと同変torsionの双方を扱い、同変の場合には現れる指数が固定点集合の次元以下になる。これを応用し、Arakelov幾何における同変算術的Hilbert--Samuel定理を得る。
abstract_source_url: "https://arxiv.org/abs/2609.02192"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.02192](https://arxiv.org/abs/2609.02192)
- **著者:** Kai Köhler
- **初回投稿日:** 2026年9月2日
- **最終更新日:** 2026年9月2日
- **主分類・副分類:** math.DG（主分類）, math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

正則torsionはKodaira--Laplace作用素の正則化行列式として定義される。正のHermite線束 $L$ の高いtensor冪 $L^p$ に対する漸近展開は、行列式線束の $L^2$ 計量や算術的Hilbert--Samuel定理に解析的寄与を与える。

orbifoldの場合、先行研究は展開に $p^\ell$ と $p^\ell\log p$ の二種類の項が現れ、後者の係数が計量によらないことを示していた。本論文は $\log p$ 部分をorbifoldのstratum上の特性類積分として具体的に計算する。

有限位数の正則等長変換に対する同変版も得られる。そこでは最高の $p$ の指数が多様体全体ではなく固定点成分の最大次元で決まり、この精密化が同変算術的Hilbert--Samuel公式へ反映される。

## 背景と問題設定

$M$ をコンパクトHermite orbifold、$E$ をHermiteベクトル束、$L$ を正のHermite線束とする。問題は $p\to\infty$ における $T(M,E\otimes L^p)$ の展開、とりわけ位相的情報を担う $\log p$ 項を明示することである。

## 主結果

### orbifold正則torsion（Theorem 1.1）

$M$ の本体と特異stratumの連結成分を $M_j$、そのmultiplicityを $m_j$ とする。Introductionでは主公式の $\log p$ 部分が

$$
\log p\sum_j\frac1{m_j}\int_{M_j}
\bigl(n\,\operatorname{Td}^{\Sigma}(TM)-\operatorname{Td}^{\prime\Sigma}(TM)\bigr)
\operatorname{ch}^{\Sigma}(E\otimes L^p)
$$

として与えられている。残余項は通常部分と特異stratum由来の周期的部分に分かれ、特異部分の最高次数は特異stratumの最大次元で制御される。

### 同変torsion（Theorem 1.2）

有限位数の正則等長変換 $g$ が $M,E,L$ に作用するとき、$g$-同変torsionの $\log p$ 部分は固定点集合 $M^g$ 上の積分

$$
\log p\int_{M^g}
\bigl(n\,\operatorname{Td}_g(TM)-\operatorname{Td}'_g(TM)\bigr)
\operatorname{ch}_g(E\otimes L^p)
$$

で与えられる。展開中の最大指数は $M^g$ の成分の最大次元以下である。

### 同変算術的Hilbert--Samuel定理（Theorem 1.3）

$\mu_m$ 作用を持つ正則・整・射影的・平坦な算術多様体と正の同変Hermite線束について、section格子のcovolumeの重み付き対数を、固定点schemeの重み付きheight、上の特性類積分、および固定点次元で制御される漸近級数の和として表す。

## 証明の見取り図

Introductionは、正則torsionの既知のorbifold漸近展開から計量不変な $p^\ell\log p$ 係数を特性類として同定し、有限位数作用に対して固定点局所化した同変公式を導く流れを示す。これを行列式コホモロジーのQuillen計量と $L^2$ 計量の関係へ代入し、算術的次数の公式に組み込むことで同変Hilbert--Samuel定理を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.02192](https://arxiv.org/abs/2609.02192)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2, 1.3
- **論文構成の説明:** Introduction, pp. 1–3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
