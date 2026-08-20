---
layout: paper
title: "Donaldson-Sun Theory in the Conic Case"
title_ja: "錐型の場合のDonaldson–Sun理論"
authors: "Arka Karmakar"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
  - math.CV
arxiv_abstract: >-
  We extend the Donaldson-Sun theory of metric tangent cones to non-collapsing Gromov-Hausdorff limits of conical Kahler-Einstein pairs whose boundary coefficients lie in a fixed finite subset of Q, and prove uniqueness of the log metric tangent cone. Furthermore, under a mild lc compatibility condition, we relate this with the Li-Xu and Li-Liu-Xu stable degeneration machinery. We also construct polarized smooth Kaehler metrics on CP^2 with a uniform lower Ricci bound and volume non-collapsing, whose limit has nonunique tangent cones, showing that the Kahler-Einstein assumption is crucial for rigidity.
topic: differential-geometry
tags:
  - kahler-einstein-metrics
  - metric-limits
  - singularities
  - k-stability
arxiv_id: "2608.18432v1"
arxiv_url: "https://arxiv.org/abs/2608.18432"
arxiv_submitted: "2026-08-19"
arxiv_updated: "2026-08-19"
summary: >-
  錐型Kähler–Einstein対の非崩壊Gromov–Hausdorff極限にDonaldson–Sun理論を拡張し、境界付き接錐の代数構造と一意性を示します。単なるRicci下限では接錐が一意にならない反例も構成し、Kähler–Einstein条件の剛性を明確にします。
abstract_en: >-
  We extend the Donaldson-Sun theory of metric tangent cones to non-collapsing Gromov-Hausdorff limits of conical Kahler-Einstein pairs whose boundary coefficients lie in a fixed finite subset of Q, and prove uniqueness of the log metric tangent cone. Furthermore, under a mild lc compatibility condition, we relate this with the Li-Xu and Li-Liu-Xu stable degeneration machinery. We also construct polarized smooth Kaehler metrics on CP^2 with a uniform lower Ricci bound and volume non-collapsing, whose limit has nonunique tangent cones, showing that the Kahler-Einstein assumption is crucial for rigidity.
summary_en: ""
abstract_ja: >-
  境界係数が有理数の固定有限集合に属する錐型Kähler–Einstein対の非崩壊Gromov–Hausdorff極限に対し、metric tangent coneのDonaldson–Sun理論を拡張する。log metric tangent coneが一意であることを示し、追加のlc整合条件の下で安定退化理論と関連づける。また、一様Ricci下限と非崩壊だけでは接錐の一意性が従わないことを$\mathbf{CP}^2$上の例で示す。
abstract_source_url: "https://arxiv.org/abs/2608.18432"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.18432v1](https://arxiv.org/abs/2608.18432)
- **著者:** Arka Karmakar
- **初回投稿日・最終更新日:** 2026年8月19日
- **主分類・副分類:** math.DG（主分類）、math.AG、math.CV
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

Donaldson–Sun理論は、Kähler–Einstein多様体の非崩壊極限に現れるmetric tangent coneが正規affine varietyであり、局所環のmetric filtrationから二段階の代数的退化で得られることを示す。境界因子をもつ錐型計量では、極限と拡大の過程で境界を復元し追跡することが新しい問題になる。

本論文は境界係数を固定有限有理集合に制限し、直径上界と体積下界をもつ錐型Kähler–Einstein対を扱う。極限計量から有効有理Weil因子を復元し、各接錐にも標準的な境界を付ける。

局所germからmetric filtrationのassociated graded coneを経て接錐へ至る二段階退化がlog pairとして成立し、最終的なlog affine cone、従ってmetric tangent coneが部分列によらず一意となる。

対照的に、固定偏極、一様Ricci下限、体積非崩壊を備えた滑らかなKähler曲面列でも、極限の接錐は一意でない例がある。従って結論は一般のRicci limitの形式的帰結ではなく、Kähler–Einstein方程式の剛性を使っている。

## 背景と問題設定

極限点$p$でmetric orderを$\nu$とすると、中間錐は

$$
W=\operatorname{Spec}\operatorname{gr}_{\nu}\mathcal O_{X_\infty,p}
$$

で与えられる。log版では$X_\infty$だけでなく境界$\Delta_\infty$をmetric dataから同定し、$W$と接錐の双方へ移す必要がある。成分が退化で合流し得るため、ambient varietyのHilbert収束だけでは境界の重複度を決められない。

## 主結果

### 対数的Donaldson–Sun定理（Theorem 1.1）

一様条件を満たす錐型Kähler–Einstein対$(X_i,\Delta_i,\omega_i)$の非崩壊極限に対し、計量は$X_\infty$上の$\mathbf Q$-境界$\Delta_\infty$を決定し、$K_{X_\infty}+\Delta_\infty$は$\mathbf Q$-Cartierとなる。任意の接錐$C(Y)$は標準境界$\Delta_C$をもつlog $\mathbf Q$-Gorenstein正規affine varietyで、弱い錐型Ricci-flat Kähler計量を担う。

metric filtrationは有限生成で、境界を含む二段階退化

$$
(X_\infty,\Delta_\infty,p)\rightsquigarrow
(W,\Delta_W,\xi)\rightsquigarrow
(C(Y),\Delta_C,\xi)
$$

が得られる。最終的なlog affine coneは接錐を定めた部分列によらず、metric tangent coneは一意である。

### Ricci下限だけでは一意でないこと（Theorem 1.2）

固定されたintegral Kähler classで偏極された滑らかなKähler曲面の列で、一様Ricci下限と一様非崩壊を満たすが、Gromov–Hausdorff極限の一点が複数の接錐をもつ例が存在する。

## 証明の見取り図

有限個のcone angleからvolume densityのgapを得て、余次元2の特異層で境界成分をmetricに検出する。境界をweighted analytic cycleとして拡大極限まで追跡し、Donaldson–Sunの$\bar\partial$／grafting議論からholomorphic spectrumの剛性と有限生成filtrationを得る。境界の重複度はlog-pluricanonical dataとPoincaré–Lelong型の議論で同定する。最後にpairを含むHilbert–Chow incidence space上でLuna sliceを用い、錐とRicci-flat計量の一意性を示す。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.18432](https://arxiv.org/abs/2608.18432)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
