---
layout: paper
title: "Orbifold modifications of complex analytic varieties"
title_ja: "複素解析多様体のオービフォールド修正"
authors: "Wenhao Ou"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  We prove that if $X$ is a compact complex analytic variety, which has quotient singularities in codimension 2, then there is a projective bimeromorphic morphism $f\colon Y\to X$, such that $Y$ has quotient singularities, and that the indeterminacy locus of $f^{-1}$ has codimension at least 3 in $X$. As an application, we deduce the Bogomolov-Gieseker inequality on orbifold Chern classes for stable reflexive coherent sheaves on compact Kähler varieties which have quotient singularities in codimension 2.
topic: algebraic-geometry
tags:
  - singularities
  - complex-analytic-spaces
  - vector-bundles-sheaves
  - stability
  - chern-classes
arxiv_id: "2401.07273v6"
arxiv_url: "https://arxiv.org/abs/2401.07273"
arxiv_submitted: "2024-01-14"
arxiv_updated: "2025-12-24"
summary: >-
  余次元2で商特異点をもつコンパクト複素解析多様体に対し、商特異点のみをもつ空間からの射影的双有理射を構成する。逆写像の不定値集合を余次元3以上に抑えることで、コンパクトKähler多様体上の安定反射的連接層に対するオービフォールドChern類のBogomolov–Gieseker不等式へ応用する。
abstract_en: >-
  We prove that if $X$ is a compact complex analytic variety, which has quotient singularities in codimension 2, then there is a projective bimeromorphic morphism $f\colon Y\to X$, such that $Y$ has quotient singularities, and that the indeterminacy locus of $f^{-1}$ has codimension at least 3 in $X$. As an application, we deduce the Bogomolov-Gieseker inequality on orbifold Chern classes for stable reflexive coherent sheaves on compact Kähler varieties which have quotient singularities in codimension 2.
summary_en: ""
abstract_ja: >-
  $X$ が余次元2で商特異点をもつコンパクト複素解析多様体ならば、商特異点をもつ $Y$ から $X$ への射影的双有理射 $f:Y\to X$ が存在し、$f^{-1}$ の不定値集合は $X$ 内で余次元3以上となる。この構成から、同じ特異点条件をもつコンパクトKähler多様体上の安定反射的連接層について、オービフォールドChern類のBogomolov–Gieseker不等式が従う。
abstract_source_url: "https://arxiv.org/abs/2401.07273"
license_name: "CC0 1.0 Universal"
license_url: "https://creativecommons.org/publicdomain/zero/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2401.07273](https://arxiv.org/abs/2401.07273)
- **著者:** Wenhao Ou
- **初回投稿日:** 2024年1月14日
- **最終更新日:** 2025年12月24日
- **主分類・副分類:** math.AG（主分類）, math.CV
- **ライセンス:** [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)

## 要約

安定ベクトル束のChern類を制約するBogomolov–Gieseker不等式は、射影多様体では超平面切断によって高次元へ運べる。しかし一般のコンパクトKähler空間には十分な超平面がなく、同じ代数的手法は使えない。

本論文は、余次元2で商特異点をもつコンパクト複素解析多様体を、余次元2の情報を保ったまま商特異点だけをもつ空間で置き換える。このオービフォールド修正が、解析的設定でのChern類不等式を得るための橋となる。

構成は正次元代数群の作用やGITに依存しない。局所index-one cover、複素解析orbispaces、Du Val特異点の族、MMPとdlt修正を組み合わせ、非射影的な解析空間にも適用できる形を作る。

## 背景と問題設定

射影多様体 $X$、階数 $r$ の $H$-安定ベクトル束 $F$ に対する古典的な不等式は

$$
\left(c_2(F)-\frac{r-1}{2r}c_1(F)^2\right)\cdot H^{n-2}\geq0
$$

である。Kähler多様体上ではHermite–Einstein計量により、滑らかな場合に対応する積分不等式が得られる。問題は、余次元2に商特異点を許す反射的層へこれを拡張する際、一般のKähler空間では超平面切断が使えないことである。

## 主結果

### 既知のBogomolov–Gieseker不等式（Theorem 1.1）

IntroductionのTheorem 1.1は主結果の背景として、射影多様体上の安定ベクトル束について上記のChern類不等式を記録する。本論文の新しい修正定理は、この不等式のオービフォールド版を解析的環境へ移すために設計されている。

### オービフォールド修正定理（Theorem 1.2）

コンパクト複素解析多様体 $X$ が余次元2で商特異点をもつ、すなわち余次元3以上の閉解析集合 $V$ があり $X\setminus V$ が商特異点をもつとする。このとき射影的双有理射

$$
f:Y\longrightarrow X
$$

で、$Y$ が商特異点をもち、$f^{-1}$ の不定値集合が $X$ 内で余次元3以上となるものが存在する。したがって余次元2で定義されるオービフォールドChern類の情報を修正上で扱える。

## 証明の見取り図

Introductionは構成を五段階で説明する。まず特異集合の余次元2成分を互いに交わらないようにし、MMPでklt特異点へ還元する。局所index-one coverにより標準特異点を得て、orbispacesの言葉で局所構成を貼り合わせる。次に特異点を超曲面型へ修正し、定義方程式をDu Val特異点の族に似た形へ整える。その準エタール被覆を構成した後、退化因子をdlt被約因子に包み込む修正を施して有限被覆を制御し、定理へ到達する。

## 原論文との対応

- **Abstractページ:** [arXiv:2401.07273](https://arxiv.org/abs/2401.07273)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2
- **論文構成の説明:** Introduction, pp. 2–3
- **確認したarXivバージョン:** v6
- **確認したライセンス:** CC0 1.0 Universal
- **source_scope:** Abstract and Introduction
