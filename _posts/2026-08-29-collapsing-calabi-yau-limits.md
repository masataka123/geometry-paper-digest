---
layout: paper
title: "Gromov-Hausdorff limits of collapsing Calabi-Yau fibrations"
title_ja: "退化するCalabi–YauファイブレーションのGromov–Hausdorff極限"
authors: "Gábor Székelyhidi"
arxiv_primary_category: "math.DG"
arxiv_categories: [math.DG]
arxiv_abstract: >-
  We study Calabi-Yau metrics on a projective manifold in Kähler classes converging to a semiample class given by a fibration. We show that the Gromov-Hausdorff limit of the metrics is homeomorphic to the base of the fibration and in addition the discriminant locus has Hausdorff codimension at least 2. This resolves conjectures of Tosatti.
topic: differential-geometry
tags: [calabi-yau-geometry, metric-limits, curvature]
arxiv_id: "2505.14939v1"
arxiv_url: "https://arxiv.org/abs/2505.14939"
arxiv_submitted: "2025-05-20"
arxiv_updated: "2025-05-20"
summary: >-
  半豊富な類へ退化するKähler類内のRicci平坦計量を調べ、そのGromov–Hausdorff極限がファイブレーションの底空間と同相であることを示す。さらに判別集合のHausdorff余次元が少なくとも2であることを証明し、Tosattiの予想を解決する。
abstract_en: ""
summary_en: >-
  The paper analyzes collapsing Ricci-flat metrics associated with a fibration on a projective Calabi–Yau manifold. It identifies their compact Gromov–Hausdorff limit topologically with the fibration base. It also bounds the Hausdorff dimensions of the singular and discriminant subsets, resolving a conjecture of Tosatti. A more general theorem treats metric completions of singular Kähler spaces under analytic and RCD hypotheses.
abstract_ja: >-
  射影多様体上で、ファイブレーションが定める半豊富な類へ近づくKähler類のCalabi–Yau計量を考える。そのGromov–Hausdorff極限はファイブレーションの底空間と同相であり、判別集合はHausdorff余次元2以上を持つ。これによりTosattiの予想が解決される。
abstract_source_url: "https://arxiv.org/abs/2505.14939"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2505.14939v1](https://arxiv.org/abs/2505.14939v1)
- **著者:** Gábor Székelyhidi
- **初回投稿日・最終更新日:** 2025年5月20日
- **主分類:** math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

自明な第一Chern類を持つコンパクトKähler多様体では、各Kähler類に一意なRicci平坦計量が存在する。本論文は、半豊富な線束$L$が定める写像$f:M\to X$と ample 線束$A$に対し、

$$
[\omega_t]=c_1(L)+t c_1(A),\qquad t\to0
$$

という退化を扱う。

滑らかなファイバー上では計量が底空間の標準計量へ局所滑らかに収束すること、全体としてコンパクトな距離空間へ収束することは既知であった。未解決だったのは、その距離完備化が代数的な底空間$X$と同じ位相を持つか、判別集合が距離幾何的に十分小さいかという点である。

論文は極限空間$Z$が$X$と同相であることを示し、複素次元$n=\dim_{\mathbb C}X$に対して特異集合と判別集合のHausdorff次元をそれぞれ$2n-4$、$2n-2$以下に抑える。これは従来の特殊な底空間やファイブレーションに課されていた制約を外す結果である。

## 背景と問題設定

$X^\circ$を$f$が正則な沈め込みとなる開集合、$\omega_{\mathrm{can}}$をそこに構成される標準Kähler計量とする。既知の結果により極限$Z$は$(X^\circ,\omega_{\mathrm{can}})$の距離完備化である。Tosattiの予想は、この完備化が$X$と同相で、$X\setminus X^\circ$が実余次元2以上を持つというものであった。

## 主結果

### 主定理（Theorem 2）

Gromov–Hausdorff極限$(Z,d_Z)$は$X$と同相であり、

$$
\dim_H(X\setminus X_{\mathrm{reg}})\le 2n-4,
\qquad
\dim_H(X\setminus X^\circ)\le 2n-2
$$

が成り立つ。前者は解析的特異集合、後者は判別集合全体に対する評価である。

### 一般化された完備化定理（Theorem 3）

コンパクト正規Kähler空間上の特異Kähler計量$\omega=\omega_X+\sqrt{-1}\partial\bar\partial u$が、Introductionに列挙された滑らかさ、Monge–Ampère密度、Ricci下界の条件を満たし、その完備化が$mathrm{RCD}(K,2n)$空間なら、同じ同相性と次元評価が得られる。

## 証明の見取り図

まず崩壊極限の正規化極限測度を$\omega_{\mathrm{can}}^n$と同定し、極限を実次元$2n$のRCD空間として扱う。一般定理では、特異Kähler計量の厳密正値性から滑らかなGromov–Hausdorff近似を作り、局所正則座標を構成する。さらに局所的に判別集合が正則関数の零点集合であることを用い、通常のRCD特異集合評価だけでは捉えられない距離正則点上の判別集合にも余次元2評価を与える。

## 原論文との対応

- **Abstractページ:** [arXiv:2505.14939v1](https://arxiv.org/abs/2505.14939v1)
- **Introduction:** Section 1, pp. 1–4
- **主要定理:** Theorems 2, 3; Conjectures 1, 4
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
