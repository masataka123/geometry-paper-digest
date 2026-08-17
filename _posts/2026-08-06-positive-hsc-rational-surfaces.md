---
layout: paper
title: "Positive holomorphic sectional curvature on rational surfaces"
title_ja: "有理曲面上の正の正則断面曲率"
authors: "Shiyu Zhang"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
  - math.CV
arxiv_abstract: >-
  In 1975, Hitchin proved that any compact complex surface admitting a Kähler metric with positive
  holomorphic sectional curvature $HSC>0$ is rational. Conversely, he constructed such metrics on all
  Hirzebruch surfaces $\mathbb{F}_k$, as a first step towards characterizing rational surfaces by the
  existence of a Kähler metric with suitable curvature positivity. In this paper, we prove that every
  projective manifold $X$ obtained from a projective toric manifold by a finite sequence of blow-ups
  at points admits a Kähler metric with $HSC>0$. This statement applies to all rational surfaces and
  therefore completes Hitchin's result, resolving the complex surface case of a problem of Yau listed
  in "Open Problems in Geometry". The proof has two main ingredients. First, we prove that the toric
  Kähler metric on a projective toric manifold arising from Delzant's construction has $HSC>0$.
  Second, via a one-parameter degeneration, we construct, for any such $X$, a smooth projective family
  $π:\mathcal X\to\mathbb C$ such that $\mathcal X_t\simeq X$ for $t\ne0$, while $\mathcal X_0$ is a
  projective toric manifold.
topic: differential-geometry
tags:
  - positivity
  - curvature
  - toric-geometry
arxiv_id: "2606.23333v1"
arxiv_url: "https://arxiv.org/abs/2606.23333v1"
arxiv_submitted: "2026-06-22"
arxiv_updated: "2026-06-22"
summary: >-
  射影toric多様体から有限回の点blow-upで得られる任意の射影多様体が、正の正則断面曲率をもつKähler計量を許すことを示す。特に全ての有理曲面を覆い、コンパクト複素曲面が有理であることをそのような計量の存在で特徴づける。
abstract_en: ""
summary_en: >-
  The paper constructs Kähler metrics of positive holomorphic sectional curvature on projective manifolds obtained by iterated point blow-ups of projective toric manifolds. The construction first proves positivity for the canonical metric arising from Delzant reduction. It then degenerates an arbitrary ordered cluster of blow-up centers to a torus-fixed cluster and transfers positivity to nearby fibers. Consequently, a compact complex surface is rational exactly when it admits such a positively curved Kähler metric.
abstract_ja: >-
  射影toric多様体の点を有限回blow-upして得られる多様体に、正の正則断面曲率をもつKähler計量を構成する。Delzant構成のtoric Kähler計量の曲率正値性と、任意の点clusterをtoric clusterへ退化させる一径数familyが主要な道具である。全ての有理曲面がこの構成に含まれ、Hitchinによる逆向きと合わせて曲率による有理曲面の特徴づけを完成する。
abstract_source_url: "https://arxiv.org/abs/2606.23333v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2606.23333v1](https://arxiv.org/abs/2606.23333v1)
- **著者:** Shiyu Zhang
- **初回投稿日:** 2026年6月22日
- **最終更新日:** 2026年6月22日（v1）
- **主分類・副分類:** Differential Geometry (math.DG); Algebraic Geometry (math.AG); Complex Variables (math.CV)
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler多様体の非零接ベクトル $V$ が張る $J$-不変実2平面の正則断面曲率は

$$
\operatorname{HSC}(V)=\frac{R(V,JV,JV,V)}{\lVert V\rVert^4}
$$

で与えられる。Hitchinは正のHSCをもつコンパクトKähler曲面が有理であることを示し、全Hirzebruch曲面にそのような計量を構成したが、一般の有理曲面における存在は未解決だった。

本論文は射影toric多様体を任意の点で有限回blow-upして得られる多様体すべてにHSC $>0$ のKähler計量を構成する。曲面では全ての滑らかな有理曲面がこの形なので、Hitchinの必要条件の逆が完成する。

構成は、まずDelzantのKähler reductionから生じる標準toric計量がHSC $>0$ であることを示し、次に任意のblow-up中心のordered clusterをtorus不動なclusterへ一径数退化させる。中心fiberの正値計量をKodaira--Spencerの局所安定性で近傍fiberへ移す。

## 背景と問題設定

HSCより強い正則二断面曲率の正値性は射影空間を特徴づける。一方HSC $>0$ は高次元では有理連結性を導くが、有理性との正確な関係は不明である。曲面の場合、問題は「点blow-up後にもHSC $>0$ の計量が存在するか」に帰着する。

## 主結果

### 点blow-upに対する存在定理（Theorem 1.3）

射影toric多様体から有限回の点blow-upで得られる射影多様体 $X$ は、HSC $>0$ のKähler計量をもつ。blow-up中心はtorus不動点である必要がない。

### 有理曲面の曲率による特徴づけ（Theorem 1.4）

コンパクト複素曲面 $X$ について、次が同値である。

1. $X$ は有理曲面である。
2. $X$ はHSC $>0$ のKähler計量をもつ。

存在方向がTheorem 1.3、逆方向がHitchinの結果である。

### 非負曲率の場合（Corollary 1.5）

コンパクトKähler曲面がHSC $\geq0$ のKähler計量をもつことは、それが有理曲面、2次元複素torusの有限étale商、または楕円曲線上のprojectively unitary flat $\mathbb P^1$-bundleのいずれかであることと同値である。

## 証明の見取り図

第一段階ではflat複素空間のKähler reductionとしてtoric多様体を実現し、Gauss方程式とO'Neill公式の直接計算からDelzant計量のHSC正値性を得る。

第二段階では長さ $k$ のordered cluster blow-upをKleimanのuniversal familyでパラメータ化する。genericな一径数部分群の作用で任意のclusterをtorus不動clusterへ退化させると、中心fiberはtoricになる。中心fiberの正曲率計量とKähler構造の局所安定性から、一般fiber、従って元のblow-upにも正値計量を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2606.23333v1](https://arxiv.org/abs/2606.23333v1)
- **Introduction:** Section 1, pp. 2–5
- **Introduction中で言及された主要定理番号:** Theorems 1.3 and 1.4; Corollary 1.5
- **論文構成の説明:** Sections 1.2–1.3, pp. 3–5
- **確認したarXivバージョン:** v1（requested_version空欄のため取得時の最新）
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
