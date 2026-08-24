---
layout: paper
title: "Orbifold Chern classes and Bogomolov-Gieseker inequalities"
title_ja: "オービフォールドChern類とBogomolov–Gieseker不等式"
authors: "Wenhao Ou"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  Assume that $X$ is a compact complex analytic variety which has quotient singularities in codimension 2, and that $\mathcal{F}$ is a reflexive sheaf on $X$. Using orbifold modifications, we can define first and second homological Chern classes for $\mathcal{F}$. If in addition $X$ has a Kähler form $\omega$ and $\mathcal{F}$ is $\omega$-stable, then we deduce Bogomolov-Gieseker inequality on the orbifold Chern classes of $\mathcal{F}$.
topic: algebraic-geometry
tags:
  - chern-classes
  - singularities
  - stability
  - vector-bundles-sheaves
arxiv_id: "2512.22273v1"
arxiv_url: "https://arxiv.org/abs/2512.22273"
arxiv_submitted: "2025-12-25"
arxiv_updated: "2025-12-25"
summary: >-
  余次元2で商特異点をもつコンパクトKähler多様体上の反射的層に、オービフォールド修正を介して1次・2次のホモロジー的Chern類を定義する。層がKähler類に関して安定ならば、これらのChern類に対するBogomolov–Gieseker不等式が成り立つ。
abstract_en: >-
  Assume that $X$ is a compact complex analytic variety which has quotient singularities in codimension 2, and that $\mathcal{F}$ is a reflexive sheaf on $X$. Using orbifold modifications, we can define first and second homological Chern classes for $\mathcal{F}$. If in addition $X$ has a Kähler form $\omega$ and $\mathcal{F}$ is $\omega$-stable, then we deduce Bogomolov-Gieseker inequality on the orbifold Chern classes of $\mathcal{F}$.
summary_en: ""
abstract_ja: >-
  $X$を余次元2で商特異点をもつコンパクト複素解析多様体、$\mathcal F$を$X$上の反射的層とする。オービフォールド修正を使い、$\mathcal F$の1次・2次ホモロジー的Chern類を定義する。さらに$X$がKähler形式$\omega$をもち、$\mathcal F$が$\omega$-安定ならば、$\mathcal F$のオービフォールドChern類に対するBogomolov–Gieseker不等式を導く。
abstract_source_url: "https://arxiv.org/abs/2512.22273"
license_name: "Creative Commons CC0 1.0 Universal"
license_url: "https://creativecommons.org/publicdomain/zero/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2512.22273](https://arxiv.org/abs/2512.22273)
- **著者:** Wenhao Ou
- **初回投稿日:** 2025年12月25日
- **最終更新日:** 2025年12月25日
- **主分類・副分類:** math.AG
- **ライセンス:** [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)

## 要約

滑らかな射影多様体上の安定ベクトル束には、Chern類を結ぶBogomolov–Gieseker不等式がある。コンパクトKähler空間が特異である場合、超平面切断による代数的議論をそのまま使えず、反射的層のChern類自体にも適切な定義が必要となる。

本論文は、余次元2で商特異点をもつコンパクト複素解析多様体にオービフォールド修正を適用し、反射的層のホモロジー的オービフォールドChern類を定義する。修正の選択に依存しない交点数として定式化する点が基礎となる。

Kähler形式 $\omega$ に関して反射的層が安定ならば、得られた1次・2次Chern類にBogomolov–Gieseker不等式が成立する。特に射影性を仮定しない特異Kähler空間へ不等式を運ぶ。

## 背景と問題設定

滑らかな射影 $n$ 次元多様体、階数 $r$ の $H$-安定ベクトル束 $\mathcal F$ に対する古典的不等式は

$$
\left(c_2(\mathcal F)-\frac{r-1}{2r}c_1(\mathcal F)^2\right)\cdot H^{n-2}\geq 0
$$

である。Kähler多様体ではHermite–Einstein計量とLübke不等式が対応するが、一般の特異空間ではorbifold locusの外側を制御する必要がある。

## 主結果

### オービフォールドChern類の構成

オービフォールド修正上で反射的層を引き戻し、局所自由化したオービフォールド束のChern類を元の空間のコホモロジー類と交差させる。この方法で $\widehat c_1(\mathcal F)$、$\widehat c_2(\mathcal F)$、$\widehat c_1(\mathcal F)^2$ を線形形式として定め、余次元3以上の差が交点数に影響しないことから選択独立性を得る。

### 主定理（Theorem 1.2）

$X$を余次元2で商特異点をもつ $n\geq2$ 次元コンパクトKähler多様体、$\mathcal F$を階数 $r\geq2$ の $\omega$-安定反射的連接層とすると

$$
\left(2r\widehat c_2(\mathcal F)-(r-1)\widehat c_1(\mathcal F)^2\right)\cdot[\omega]^{n-2}\geq0
$$

が成り立つ。Introductionは、この不等式が特異点解消上だけで得られる不等式より強く、コンパクトKähler三次元多様体のabundance問題にも重要だと説明する。

## 証明の見取り図

まずオービフォールド修正により、余次元2の商特異点を保ちながらオービフォールド上の束としてChern類を扱う。安定性からオービフォールド版Donaldson–Uhlenbeck–Yau理論を適用できる状況へ移し、Hermite–Einstein計量に対するLübke型不等式を得る。最後に交点数の修正独立性を用いて元の $X$ 上の主張へ戻す。

## 原論文との対応

- **Abstractページ:** [arXiv:2512.22273](https://arxiv.org/abs/2512.22273)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorems 1.1 and 1.2
- **論文構成の説明:** Contents, p. 1
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC0 1.0
- **source_scope:** Abstract and Introduction
