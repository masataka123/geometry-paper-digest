---
layout: paper
title: "A complex analytic approach to orbifold Chern classes on singular varieties and its applications"
title_ja: "特異多様体上のorbifold Chern類への複素解析的アプローチと応用"
authors: "Henri Guenancia, Mihai Păun"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
  - math.DG
arxiv_abstract: >-
  In this article, we prove the orbifold version of the Bogomolov-Gieseker inequality for stable $\mathbb Q$-sheaves on Kähler varieties, generalizing our earlier work \cite{GP25} in dimension three. We also provide a characterization of the equality case, a new purely analytical proof of the numerical characterization of complex torus quotients as well as a novel, complex analytic interpretation of the second orbifold Chern class associated to a $\mathbb Q$-sheaf.
topic: algebraic-geometry
tags:
  - chern-classes
  - vector-bundles-sheaves
  - stability
  - singularities
  - uniformization
arxiv_id: "2601.08627v1"
arxiv_url: "https://arxiv.org/abs/2601.08627"
arxiv_submitted: "2026-01-13"
arxiv_updated: "2026-01-13"
summary: >-
  商特異点を余次元2まで許すcompact Kähler空間上のstable reflexive sheafについて、orbifold Bogomolov–Gieseker不等式と等号の場合のprojective flatnessを証明する。第二orbifold Chern類を特異集合から離れた微分形式の積分で表し、標準類が数値的自明なklt Kähler多様体に対する複素トーラス商の解析的特徴づけへ応用する。
abstract_en: >-

summary_en: >-
  The paper gives an analytic treatment of orbifold Chern numbers for sheaves on singular compact Kähler spaces. It proves a Bogomolov–Gieseker inequality for stable reflexive sheaves and identifies projective flatness as the equality case under a quotient-singularity condition away from codimension three. A differential-form representation of the second Chern number supplies the key bridge to geometric analysis. This framework also yields a purely analytic torus-quotient criterion for klt Kähler varieties with trivial first Chern class.
abstract_ja: >-
  特異Kähler多様体上のstable $\mathbb Q$-sheafに対するorbifold Bogomolov–Gieseker不等式を全次元で示し、等号の場合を特徴づける。第二orbifold Chern類を複素解析的に解釈する新しい方法を構成し、数値的条件による複素トーラス商の特徴づけに純解析的な証明を与える。
abstract_source_url: "https://arxiv.org/abs/2601.08627"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2601.08627](https://arxiv.org/abs/2601.08627)
- **著者:** Henri Guenancia, Mihai Păun
- **初回投稿日・最終更新日:** 2026年1月13日（v1）
- **主分類・副分類:** math.AG; math.CV; math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかなcompact Kähler多様体上では、stable bundleのHermite–Einstein計量から曲率の点ごとの非負性を積分し、Bogomolov–Gieseker不等式を得る。特異空間では計量がorbifold計量とは限らず、その曲率積分が定義されたorbifold Chern数を計算する保証もない。

本論文は、余次元3以上の集合を除いて商特異点をもち、そこでorbibundleとなるreflexive sheafに対し、この障害を解消する。stable性からorbifold Bogomolov–Gieseker不等式を導き、等号を正則部分上の局所自由性とprojective flatnessで特徴づける。

中心的な新機軸は、$\omega^{n-2}$を特異集合から離れて台をもつ滑らかな形式と$\partial$-exact項へ分解し、第二Chern数を安全な領域上のChern–Weil積分として表すことである。これにより、$c_1(X)=0$のklt Kähler多様体が複素トーラスのquasi-étale商となるための数値的特徴づけを純解析的に証明する。

## 背景と問題設定

射影の場合には一般超平面切断を用いる代数的手法があるが、一般Kähler空間では使えない。論文はDolbeault・de RhamコホモロジーとAndreotti–Grauert定理を使い、orbifold Chern数を幾何解析に適した形へ変換する。

## 主結果

### orbifold Bogomolov–Gieseker不等式（Theorem A）

$(X,\omega)$を次元$n$のcompact Kähler空間、$\mathcal F$を階数$r$の$[\omega]$-stable coherent reflexive sheafとする。余次元3以上の解析集合$Z$の外で$X$が高々商特異点をもち、$\mathcal F$がorbibundleなら、
$$\bigl(2r c_2(\mathcal F)-(r-1)c_1(\mathcal F)^2\bigr)\cdot[\omega]^{n-2}\ge0$$
が成り立つ。等号は$\mathcal F|_{X_{\mathrm{reg}}}$が局所自由かつprojectively flatであることと同値である。

### 複素トーラス商の特徴づけ（Corollary B）

$X$を$c_1(X)=0$のcompact Kähler klt多様体とする。あるKähler類$\alpha$について$c_2(X)\cdot\alpha^{n-2}=0$であることと、複素トーラス$T$から$X$へのquasi-étale coverが存在することは同値である。

### 第二Chern数の積分表示（Theorem C）

上記の特異性条件の下で、
$$\omega^{n-2}=\Omega+\partial\gamma$$
と書ける。ここで$\Omega$は$Z$から離れて台をもつ滑らかな$(n-2,n-2)$形式であり、任意のorbifold Hermitian計量$h$について
$$c_2(\mathcal F)\cdot\{\omega\}^{n-2}=\int_{X\setminus Z}c_2(\mathcal F,h)\wedge\Omega$$
となる。

## 証明の見取り図

特異集合の近くで滑らか、外側でorbifold型となるKähler計量を選び、特異Hermite–Einstein計量の曲率を扱う。Theorem CでChern数を特異集合から離れた積分に移し、境界項を消すStokes公式を確立して点ごとの曲率不等式を積分する。等号では曲率のtrace-free部分が消えることからprojective flatnessを得る。

## 原論文との対応
- **Abstractページ:** [arXiv:2601.08627](https://arxiv.org/abs/2601.08627)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中の主要結果:** Theorem A, Corollary B, Theorem C
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
