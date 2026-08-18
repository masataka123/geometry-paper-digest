---
layout: paper
title: "On slope unstable Fano varieties"
title_ja: "勾配不安定なFano多様体について"
authors: "Yen-An Chen, Ching-Jui Lai"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  For Fano varieties, significant progress has been made recently in the study of $K$-stability, while the understanding of the weaker but more algebraic concept of $(-K)$-slope stability remains intricate. For instance, a conjecture attributed to Iskovskikh states that the tangent bundle of a Picard rank one Fano manifold is slope stable. Peternell-Wiśniewski and Hwang proved this conjecture up to dimension five in 1998, but Kanemitsu later disproved it in 2021. To address this gap in understanding, we present a method that aims to characterize the geometry associated with the maximal destabilizing sheaf of the tangent sheaf of a Fano variety. This approach utilizes modern advancements in the foliated minimal model program. In dimension two, our approach leads to a complete classification of $(-K)$-slope unstable weak del Pezzo surfaces with canonical singularities. As by-products, we provide the first conceptual proof that $\mathbb{P}^1 \times \mathbb{P}^1$ and $\mathbb{F}_1$ are the only $(-K)$-slope unstable nonsingular del Pezzo surfaces, recovering a classical result of Fahlaoui in 1989. We also uncover a phenomenon that does not occur for Fano manifolds: there exists a del Pezzo surface with type A singularities admitting a weak Kähler-Einstein metric, yet whose tangent sheaf is slope unstable.
topic: algebraic-geometry
tags:
  - fano-varieties
  - stability
  - foliations
  - minimal-model-program
  - singularities
arxiv_id: "2601.18526v1"
arxiv_url: "https://arxiv.org/abs/2601.18526"
arxiv_submitted: "2026-01-26"
arxiv_updated: "2026-01-26"
summary: >-
  Fano多様体の接層の反標準偏極に関する勾配不安定性を、最大不安定化層が定める葉層と葉層MMPから調べる。標準特異点をもつ弱del Pezzo曲面を完全分類し、弱Kähler–Einstein計量をもつのに接層が不安定な特異曲面も得る。
abstract_en: >-
  For Fano varieties, significant progress has been made recently in the study of $K$-stability, while the understanding of the weaker but more algebraic concept of $(-K)$-slope stability remains intricate. For instance, a conjecture attributed to Iskovskikh states that the tangent bundle of a Picard rank one Fano manifold is slope stable. Peternell-Wiśniewski and Hwang proved this conjecture up to dimension five in 1998, but Kanemitsu later disproved it in 2021. To address this gap in understanding, we present a method that aims to characterize the geometry associated with the maximal destabilizing sheaf of the tangent sheaf of a Fano variety. This approach utilizes modern advancements in the foliated minimal model program. In dimension two, our approach leads to a complete classification of $(-K)$-slope unstable weak del Pezzo surfaces with canonical singularities. As by-products, we provide the first conceptual proof that $\mathbb{P}^1 \times \mathbb{P}^1$ and $\mathbb{F}_1$ are the only $(-K)$-slope unstable nonsingular del Pezzo surfaces, recovering a classical result of Fahlaoui in 1989. We also uncover a phenomenon that does not occur for Fano manifolds: there exists a del Pezzo surface with type A singularities admitting a weak Kähler-Einstein metric, yet whose tangent sheaf is slope unstable.
summary_en: ""
abstract_ja: >-
  Fano多様体の接層について、最大不安定化層に付随する幾何を葉層MMPで解析する。次元2では標準特異点をもつ弱del Pezzo曲面を分類し、滑らかな不安定del Pezzo曲面が $\mathbb P^1\times\mathbb P^1$ と $\mathbb F_1$ だけであるという古典結果にも概念的証明を与える。さらに、弱Kähler–Einstein計量を許す一方で接層が勾配不安定となる特異del Pezzo曲面を示す。
abstract_source_url: "https://arxiv.org/abs/2601.18526"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2601.18526](https://arxiv.org/abs/2601.18526)
- **著者:** Yen-An Chen, Ching-Jui Lai
- **初回投稿日・最終更新日:** 2026年1月26日（v1）
- **主分類・副分類:** math.AG（主分類。副分類なし）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

Fano多様体 $X$ の接層 $T_X$ が反標準偏極で不安定なとき、Harder–Narasimhan filtration の最大不安定化層 $\\mathcal F$ は代数的可積分な葉層になる。本論文は、この葉層が極端収縮の相対接層から双有理的に生じるかという問題を、葉層付き極小モデル・プログラムを用いて追究する。

次元2では、滑らかな弱del Pezzo曲面の不安定例をHirzebruch曲面と明示的な反復2回爆発で得られる族に分類する。標準特異点を許す場合も極小解消へ還元され、最大不安定化層まで記述される。

さらに、標準特異点をもつ弱del Pezzo曲面の接層は常に半安定である一方、del Pezzoの場合には不安定例の特異点型が限定される。これにより、特異Fanoでは弱Kähler–Einstein計量の存在が接層の多重安定性を保証しない現象が現れる。

## 背景と問題設定

$\\dim X=n$ とし、部分層 $E\\subseteq T_X$ の勾配を

$$
\\mu(E)=\\frac{c_1(E)\\cdot(-K_X)^{n-1}}{\\operatorname{rank}(E)}
$$

とする。Introductionの中心問題は、$T_X$ が不安定なら最大不安定化層が $K_X$-負の極端収縮の相対接層から誘導されるか、というものである。

## 主結果

### 分類定理（Theorem 1.7）

滑らかな弱del Pezzo曲面 $X$ の $T_X$ が $(-K_X)$-勾配不安定なら、$X$ は $n\\in\\{0,1,2\\}$ に対するHirzebruch曲面 $\\mathbb F_n$、またはIntroductionのExamples 1.4–1.6で構成される $X_{n,1},X_{n,2},X_{n,3}$ のいずれかである。いずれも最大不安定化葉層は標準的な射 $X\\to\\mathbb P^1$ から誘導される。

### 特異曲面への拡張（Theorem 1.8 と Corollaries 1.9–1.11）

標準特異点をもつ弱del Pezzo曲面では、不安定化層は極小解消上のTheorem 1.7の例から誘導される。接層は常に半安定であり、del Pezzo不安定例の特異点型は $2A_1,4A_1,6A_1,A_1+A_2,2A_1+A_3,3A_1+D_4$ に限られる。特に $4A_1$ または $6A_1$ 型で、弱Kähler–Einstein計量をもちながら接層が不安定な例が存在する。

## 証明の見取り図

$K_{\\mathcal F}$-MMPを走らせてMori fiber spaceへ到達する。底が曲線なら極小解消から分類し、底が点の場合はProperty $(*)$ modificationと葉層特異点論を用いてPicard数1のモデルをトーリック葉層に絞り、トーリックdel Pezzo曲面の個別解析で排除する。

## 原論文との対応

- **Introduction:** Section 1, pp. 1–6
- **主要定理:** Theorems 1.7, 1.8; Corollaries 1.9–1.11
- **確認version:** v1
- **source_scope:** Abstract and Introduction
