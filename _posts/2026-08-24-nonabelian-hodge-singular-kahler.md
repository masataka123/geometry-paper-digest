---
layout: paper
title: "Non-abelian Hodge correspondence over singular Kähler spaces"
title_ja: "特異Kähler空間上の非可換Hodge対応"
authors: "Chuanjing Zhang, Shiyu Zhang, Xi Zhang"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
  - math.CV
arxiv_abstract: >-
  In this paper, we establish the non-abelian Hodge correspondence over compact Kähler spaces with Kawamata log terminal (klt) singularities as well as over their regular loci, thereby extending the result of Greb-Kebekus-Peternell-Taji for projective klt varieties to the context of compact Kähler klt spaces. The proof relies on two key ingredients: first, we establish an equivalence over the regular loci-via harmonic bundles-between polystable Higgs bundles with vanishing orbifold Chern numbers and semi-simple flat bundles; second, we prove a descent theorem for semistable Higgs bundles with vanishing Chern classes along resolutions of singularities. As an application of our framework, we obtain a quasi-uniformization theorem for projective klt varieties with big canonical divisor that satisfy the orbifold Miyaoka-Yau equality.
topic: differential-geometry
tags:
  - higgs-nonabelian-hodge
  - singularities
  - vector-bundles-sheaves
  - uniformization
  - chern-classes
arxiv_id: "2601.13071v2"
arxiv_url: "https://arxiv.org/abs/2601.13071"
arxiv_submitted: "2026-01-19"
arxiv_updated: "2026-03-06"
summary: >-
  compact Kähler klt空間およびその正則部分上で、Chern類が消えるpolystable Higgs層とsemisimple局所系の非可換Hodge対応を確立する。応用としてorbifold Bogomolov–Gieseker不等式の等号場合を特徴づけ、big標準因子をもつ射影klt多様体のcanonical modelに球商によるquasi-uniformizationを与える。
abstract_en: >-

summary_en: >-
  The authors extend non-abelian Hodge theory from projective klt varieties to compact Kähler spaces with klt singularities, treating both the whole space and its smooth locus. Their construction relates suitable Higgs sheaves to local systems and is compatible with resolutions and maximally quasi-étale covers. The framework yields equality criteria for orbifold Chern inequalities and a ball-quotient description of canonical models in a big-canonical-class setting. Key analytic ingredients include harmonic metrics, orbifold modifications, and descent for Higgs bundles.
abstract_ja: >-
  compact Kähler klt空間とその正則部分に対して非可換Hodge対応を構成し、射影klt多様体に対する既知の結果をKählerの場合へ拡張する。核心は、orbifold Chern数が消えるpolystable Higgs束とsemisimple flat束をharmonic bundleを介して対応させること、および特異点解消に沿うsemistable Higgs束の降下定理である。応用として、big標準因子とorbifold Miyaoka–Yau等号をもつ射影klt多様体のquasi-uniformizationを得る。
abstract_source_url: "https://arxiv.org/abs/2601.13071"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2601.13071](https://arxiv.org/abs/2601.13071)
- **著者:** Chuanjing Zhang, Shiyu Zhang, Xi Zhang
- **初回投稿日:** 2026年1月19日
- **最終更新日:** 2026年3月6日（v2）
- **主分類・副分類:** math.DG; math.AG; math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

非可換Hodge対応は、適切なHiggs束と局所系を結び、複素幾何と表現論を往復させる。射影klt多様体では対応が知られていたが、compact Kähler klt空間ではprojectiveな相対MMPやquasi-projective多様体上のtame harmonic bundle理論をそのまま使えない。

本論文は空間全体と正則部分を分け、それぞれで対応を構成する。全体ではChern類が消えるsemistableな局所自由Higgs層と局所系、正則部分ではorbifold Chern類が消えるreflexive Higgs層と局所系を対応させる。

応用として、数値的に自明な標準類と第二orbifold Chern類の等号から複素トーラスの有限商を特徴づける。またorbifold Bogomolov–Gieseker等号を表現の存在で特徴づけ、big標準因子の場合のMiyaoka–Yau等号からcanonical modelの球商型quasi-uniformizationを導く。

## 背景と問題設定

正則部分の基本群から空間全体の基本群への写像は一般に単射でないため、二つの対応を別に構成する必要がある。正則部分では通常のChern類の代わりにorbifold Chern類を使い、maximally quasi-étale coverとの両立性を要求する。

## 主結果

### 空間全体の対応（Theorem 1.3）

compact Kähler klt空間$X$について自然な一対一対応
$$\mu_X:\operatorname{Higgs}_X\longrightarrow\operatorname{LSys}_X$$
が存在する。これは任意の特異点解消への引き戻しと可換であり、polystable対象に制限するとsemisimple局所系との対応になる。

### 正則部分の対応（Theorem 1.7）

$X_{\mathrm{reg}}$上にも
$$\mu_{X_{\mathrm{reg}}}:\operatorname{Higgs}_{X_{\mathrm{reg}}}\longrightarrow\operatorname{LSys}_{X_{\mathrm{reg}}}$$
が存在し、maximally quasi-étale cover上への拡張と両立する。対象となるHiggs層はsemistableで、第一・第二orbifold Chern指標の所定の交点数が消えるものに限る。

### Miyaoka–Yau等号の応用（Theorem 1.11）

$X$を次元$n$、$K_X$がbigな射影klt多様体とすると、
$$\left(2\widehat c_2(X)-\frac{n}{n+1}\widehat c_1(X)^2\right)\cdot\langle K_X^{n-2}\rangle\ge0$$
が成り立つ。等号ならcanonical model $X_{\mathrm{can}}$ は、単位球$\mathbb B^n$で被覆される射影多様体のsingular quotientである。

## 証明の見取り図

正則部分上のreflexive Higgs層にはorbifold modification上でHermitian–Yang–Mills flowを走らせ、極限のHermite–Einstein計量がpluriharmonicであることを示す。maximally quasi-étale coverを介して局所系を拡張し、period mapを用いる降下で局所自由Higgs層を回収する。解消に沿う降下にはJordan–Hölder filtrationと対応する表現を使い、projective相対MMPへの依存を避ける。

## 原論文との対応
- **Abstractページ:** [arXiv:2601.13071](https://arxiv.org/abs/2601.13071)
- **Introduction:** Section 1, pp. 2–6
- **Introduction中の主要結果:** Theorems 1.3, 1.7, 1.11–1.15; Corollaries 1.9–1.10
- **確認したarXivバージョン:** v2
- **source_scope:** Abstract and Introduction
