---
layout: paper
title: "Parabolic Bogomolov--Gieseker Inequality and Pluriharmonic Metrics on Regular Parabolic Higgs Sheaves over Compact Kähler Manifolds"
title_ja: "コンパクトKähler多様体上の正則放物型Higgs層に対する放物型Bogomolov–Gieseker不等式と多重調和計量"
authors: "Tianshu Jiang, Jiayu Li"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  We prove a parabolic Bogomolov--Gieseker inequality for stable regular parabolic Higgs sheaves on a compact Kähler manifold \((X,\omega)\) equipped with a simple normal crossing divisor \(D\). We also prove that a polystable regular parabolic Higgs sheaf admits a pluriharmonic metric on \(X\setminus D\), provided that each stable summand has parabolic degree zero and vanishing integrated second parabolic Chern character.
topic: differential-geometry
tags:
  - vector-bundles-sheaves
  - stability
  - higgs-nonabelian-hodge
  - chern-classes
  - hermite-einstein-metrics
arxiv_id: "2608.23787v1"
arxiv_url: "https://arxiv.org/abs/2608.23787"
arxiv_submitted: "2026-08-24"
arxiv_updated: "2026-08-24"
summary: >-
  SNC因子をもつコンパクトKähler多様体上で、安定な正則放物型Higgs層に放物型Bogomolov–Gieseker不等式を証明する。さらに各安定直和因子の放物次数と積分第2放物Chern指標が消えるとき、因子の補集合上に元のfiltrationを正確に回復する多重調和計量が存在する。
abstract_en: >-
  
summary_en: >-
  This work extends parabolic Kobayashi–Hitchin theory from projective settings to compact Kähler pairs. It establishes a Chern-class inequality for stable regular parabolic Higgs sheaves. Under summandwise degree and second-character vanishing assumptions, it constructs a pluriharmonic metric on the divisor complement. The metric also recovers the original real-indexed parabolic filtration through its growth.
abstract_ja: >-
  単純正規交差因子 $D$ を備えたコンパクトKähler多様体上の安定な正則放物型Higgs層に対し、放物型Bogomolov–Gieseker不等式を証明する。またpolystableな対象の各安定直和因子について放物次数が0で、積分された第2放物Chern指標が消えるなら、$X\setminus D$ 上に多重調和計量が存在する。この計量は元の実数添字filtrationに正確に適合する。
abstract_source_url: "https://arxiv.org/abs/2608.23787"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.23787](https://arxiv.org/abs/2608.23787)
- **著者:** Tianshu Jiang, Jiayu Li
- **初回投稿日:** 2026年8月24日
- **最終更新日:** 2026年8月24日
- **主分類・副分類:** math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kobayashi–Hitchin対応は束の代数的安定性と特別なHermitian計量を結び、非可換Hodge理論の基礎となる。因子の補集合では計量が特異になり、その成長を放物filtrationが代数的に符号化する。

Mochizukiは滑らかな射影多様体とSNC因子に対して、tame harmonic bundleと放物型Higgs束の対応および放物型Bogomolov–Gieseker不等式を確立した。本論文は射影性とample偏極を、一般のコンパクトKähler多様体とKähler形式へ置き換える。

安定な正則放物型Higgs層について、放物判別式の積分が非負であることを示す。またpolystableな対象で、各安定因子の放物次数と積分第2放物Chern指標が消える場合、因子補集合上に多重調和計量を構成する。

高次元では放物構造の摂動途中に局所自由性が失われうるため、reflexiveな基礎層と飽和filtrationをもつ正則放物型Higgs層を扱う必要がある。さらに重みとKähler形式が同時に退化する中でHermitian–Einstein計量のcompactnessとエネルギー集中の排除を確立することが解析的な核心である。

## 背景と問題設定

$(X,\omega)$ を複素次元 $n\ge2$ の連結コンパクトKähler多様体、$D\subset X$ をSNC因子とする。階数 $r$ の正則放物型Higgs層 $(E_*,\theta)$ の放物判別式を

$$
\Delta_{\mathrm{par}}(E_*)=\operatorname{par}c_1(E_*)^2-2r\operatorname{par}\operatorname{ch}_2(E_*)
$$

と定める。射影的な制限定理に頼れないKählerの場合に、Chern–Weil理論と計量構成を直接高次元で成立させることが課題である。

## 主結果

### 放物型Bogomolov–Gieseker不等式（Theorem A）

$\omega$-安定な階数 $r$ の正則放物型Higgs層に対して

$$
\int_X\Delta_{\mathrm{par}}(E_*)\wedge\frac{\omega^{n-2}}{(n-2)!}\ge0
$$

が成り立つ。これは射影多様体に対する既知理論のコンパクトKähler版である。

### 多重調和計量の存在（Theorem B）

$(E_*,\theta)=\bigoplus_\alpha(E_{\alpha,*},\theta_\alpha)$ がpolystableで、各安定因子について

$$
\operatorname{par-deg}_\omega(E_{\alpha,*})=0,
\qquad
\int_X\operatorname{par}\operatorname{ch}_2(E_{\alpha,*})\wedge\frac{\omega^{n-2}}{(n-2)!}=0
$$

なら、$E|_{X\setminus D}$ 上に

$$
F_H+[\theta,\theta^{\dagger_H}]=0,\qquad \partial_H\theta=0
$$

を満たすHermitian計量 $H$ が存在する。さらに $H$ はacceptableで元のfiltrationへ正確に適合し、対象が局所abelianな放物対数Higgs束であることも従う。

## 証明の見取り図

残差のnilpotent部分を消すようfiltrationを細分し、近接する有理重みでgraded-semisimpleな対象へ摂動する。修正上で一つの固定対数Higgs束とflag系へ置き換え、重みとKähler形式だけを変化させる。各段階でexactly adaptedなHermitian–Einstein計量を解き、放物Chern–Weil恒等式から不等式を得る。多重調和計量については、消滅条件によりHitchin–Simpsonエネルギーを0へ収束させ、moving background下のcompactnessとgrowth controlから極限計量および全filtrationを回復する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.23787](https://arxiv.org/abs/2608.23787)
- **Introduction:** Section 1, pp. 1–10
- **Introduction中で言及された主要定理番号:** Theorem A, Theorem B
- **論文構成の説明:** Subsection 1.4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
