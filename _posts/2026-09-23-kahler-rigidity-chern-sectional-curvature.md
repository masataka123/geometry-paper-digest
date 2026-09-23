---
layout: paper
title: "Kähler Rigidity for Constant Chern Holomorphic Sectional Curvature"
title_ja: "定Chern正則断面曲率に対するKähler剛性"
authors: "Xiangsen Qin, Yuanhong Tian"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.CV
arxiv_abstract: "We prove two rigidity theorems for compact Hermitian manifolds with constant Chern holomorphic sectional curvature. On a manifold in Fujiki's class $\\mathcal C$, every Hermitian metric of constant nonpositive Chern holomorphic sectional curvature is Kähler, without a balanced or pluriclosed assumption. In the negative case, the manifold is projective with ample canonical bundle, and the given metric is the normalized negative Kähler--Einstein metric, with complex hyperbolic universal cover. In the zero case, the metric is flat and the manifold admits a finite étale cover by a complex torus. We also prove that a compact balanced threefold of constant positive Chern holomorphic sectional curvature is holomorphically isometric to complex projective three-space with a scaled Fubini--Study metric. The nonpositive argument uses an integrated Chern--Lu identity on a Kähler background. For negative curvature, a lower bound for twisted Kähler--Einstein volumes yields canonical ampleness, and weighted Stokes identities and volume-ratio moment inequalities identify the given metric. At zero curvature, a tensor Bochner argument gives parallelness on a Ricci-flat background. For balanced threefolds, differential compatibility and the torsion energy identities yield a coercive estimate, proved by a rational matrix decomposition valid at every torsion rank."
topic: differential-geometry
tags:
  - curvature
  - kahler-einstein-metrics
  - uniformization
arxiv_id: "2609.25762v1"
arxiv_url: "https://arxiv.org/abs/2609.25762"
arxiv_submitted: "2026-09-22"
arxiv_updated: "2026-09-22"
summary: "Fujiki classのコンパクト複素多様体上で、非正の定Chern正則断面曲率を持つHermitian計量そのものがKählerであることを示す。負の場合は複素双曲一意化、零の場合は平坦性と有限étaleトーラス被覆を得て、正の場合にもbalanced三次元で射影空間への剛性を証明する。"
abstract_en: "We prove two rigidity theorems for compact Hermitian manifolds with constant Chern holomorphic sectional curvature. On a manifold in Fujiki's class $\\mathcal C$, every Hermitian metric of constant nonpositive Chern holomorphic sectional curvature is Kähler, without a balanced or pluriclosed assumption. In the negative case, the manifold is projective with ample canonical bundle, and the given metric is the normalized negative Kähler--Einstein metric, with complex hyperbolic universal cover. In the zero case, the metric is flat and the manifold admits a finite étale cover by a complex torus. We also prove that a compact balanced threefold of constant positive Chern holomorphic sectional curvature is holomorphically isometric to complex projective three-space with a scaled Fubini--Study metric. The nonpositive argument uses an integrated Chern--Lu identity on a Kähler background. For negative curvature, a lower bound for twisted Kähler--Einstein volumes yields canonical ampleness, and weighted Stokes identities and volume-ratio moment inequalities identify the given metric. At zero curvature, a tensor Bochner argument gives parallelness on a Ricci-flat background. For balanced threefolds, differential compatibility and the torsion energy identities yield a coercive estimate, proved by a rational matrix decomposition valid at every torsion rank."
summary_en: ""
abstract_ja: "定Chern正則断面曲率を持つコンパクトHermitian多様体の剛性を扱う。Fujiki classでは非正曲率の計量が追加のbalanced条件やpluriclosed条件なしにKählerとなる。負曲率なら標準化された負Kähler–Einstein計量と複素双曲普遍被覆が得られ、零曲率なら計量は平坦で有限étaleトーラス被覆を持つ。正曲率についてはbalanced複素三次元多様体がFubini–Study計量を持つ $\\mathbb P^3$ に限られる。"
abstract_source_url: "https://arxiv.org/abs/2609.25762"
license_name: "CC BY-SA 4.0"
license_url: "https://creativecommons.org/licenses/by-sa/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.25762](https://arxiv.org/abs/2609.25762)
- **著者:** Xiangsen Qin, Yuanhong Tian
- **初回投稿日:** 2026-09-22
- **最終更新日:** 2026-09-22
- **主分類・副分類:** math.DG, math.CV
- **ライセンス:** [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

## 要約

Fujiki classのコンパクト複素多様体上で、非正の定Chern正則断面曲率を持つHermitian計量そのものがKählerであることを示す。負の場合は複素双曲一意化、零の場合は平坦性と有限étaleトーラス被覆を得て、正の場合にもbalanced三次元で射影空間への剛性を証明する。

定Chern正則断面曲率を持つコンパクトHermitian多様体の剛性を扱う。Fujiki classでは非正曲率の計量が追加のbalanced条件やpluriclosed条件なしにKählerとなる。負曲率なら標準化された負Kähler–Einstein計量と複素双曲普遍被覆が得られ、零曲率なら計量は平坦で有限étaleトーラス被覆を持つ。正曲率についてはbalanced複素三次元多様体がFubini–Study計量を持つ $\mathbb P^3$ に限られる。

以下はAbstractとIntroductionに明記された主張と証明方針の範囲を整理したものであり、後続節の証明を独立に検証したものではない。

## 背景と問題設定

定Chern正則断面曲率を持つコンパクトHermitian多様体の剛性を扱う。Introductionは従来結果の到達点と、本論文が解く未解決部分を区別して位置付ける。

## 主結果

### 非正曲率の場合（Theorem A）

$X$ を次元 $n\ge2$ のFujiki classのコンパクト複素多様体、$h$ を $H_h\equiv c\le0$ を満たすHermitian計量とすると、$h$ はKählerである。$c<0$ なら $K_X$ はampleで、$a=(n+1)c/2$ として

$$\operatorname{Ric}^{(1)}_h=a\omega_h,\qquad [\omega_h]=\frac{2\pi}{-a}c_1(K_X)$$

を満たし、普遍被覆は曲率 $c$ の複素双曲空間である。$c=0$ なら平坦Kählerで、有限étaleトーラス被覆を持つ。

### 正曲率のbalanced三次元（Theorem B）

コンパクトbalanced三次元多様体で $H_h\equiv c>0$ なら、$(X,h)$ は適切にscaleしたFubini–Study計量を備えた $\mathbb P^3$ と正則等長である。

## 証明の見取り図

非正の場合はKähler背景上の積分Chern–Lu恒等式、twisted Kähler–Einstein体積の下界、重み付きStokes恒等式を組み合わせる。零曲率ではRicci-flat背景上のtensor Bochner法を使い、正のbalanced三次元ではtorsion energyをcoerciveに評価してtorsionを消す。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.25762](https://arxiv.org/abs/2609.25762)
- **Introduction:** Section 1, pp. 2–5
- **Introduction中で言及された主要定理番号:** Theorems A and B
- **確認したarXivバージョン:** 2609.25762v1
- **確認したライセンス:** [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- **source_scope:** Abstract and Introduction
