---
layout: paper
title: "Quantized volume comparison for Fano manifolds"
title_ja: "Fano多様体の量子化体積比較"
authors: "Kewei Zhang"
arxiv_primary_category: "math.AG"
arxiv_categories: [math.AG]
arxiv_abstract: >-
  A result of Kento Fujita says that the volume of a Kähler-Einstein Fano manifold is bounded from above by the volume of the projective space. In this short note we establish quantized versions of Fujita's result.
topic: algebraic-geometry
tags: [fano-varieties, k-stability]
arxiv_id: "2503.16766v3"
arxiv_url: "https://arxiv.org/abs/2503.16766"
arxiv_submitted: "2025-03-21"
arxiv_updated: "2025-04-14"
summary: >-
  K半安定Fano多様体の反標準体積に対するFujitaの比較を、大きな整数$m$での切断数$h^0(X,-mK_X)$の比較へ量子化する。さらに量子化$\delta_m$不変量が1以上なら、固定した$m$でも射影空間が切断数を最大化し、等号が射影空間を特徴づける。
abstract_en: ""
summary_en: >-
  This note replaces the anticanonical volume comparison for K-semistable Fano manifolds by finite-level comparisons of spaces of sections. It proves that, in each dimension, projective space maximizes the section count for all sufficiently large quantization levels. A second theorem gives the same comparison at a fixed level under a lower bound on the quantized delta invariant. Equality in either setting characterizes projective space.
abstract_ja: >-
  Kähler–Einstein Fano多様体の体積が射影空間の体積以下になるというFujitaの結果に対し、反標準束の有限段階の大域切断数を用いる量子化版を確立する。
abstract_source_url: "https://arxiv.org/abs/2503.16766"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2503.16766v3](https://arxiv.org/abs/2503.16766v3)
- **著者:** Kewei Zhang
- **初回投稿日:** 2025年3月21日
- **最終更新日:** 2025年4月14日
- **主分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Fujitaの体積比較は、$n$次元K半安定Fano多様体$X$について$\operatorname{vol}(-K_X)\leq(n+1)^n$を与え、等号が$\mathbb P^n$を特徴づける。体積は$h^0(X,-mK_X)$の$m\to\infty$での主要項であるため、本論文は有限の$m$で切断数そのものを比較する。

第一の結果は、次元だけに依存する$m_0$以降で射影空間が切断数を最大化することを示す。第二の結果は、有限段階の安定性指標$\delta_m(-K_X)$を仮定し、特定の$m$で同じ比較と等号特徴づけを与える。

## 背景と問題設定

反標準体積は

$$
\operatorname{vol}(-K_X)=\lim_{m\to\infty}
\frac{\dim H^0(X,-mK_X)}{m^n/n!}
$$

である。$\delta(-K_X)\geq1$はK半安定性と同値であり、$\delta_m$は基底型因子を用いるその量子化版である。

## 主結果

### 大きな量子化次数での比較（Theorem 1.1）

$X$が$n$次元K半安定Fano多様体なら、$n$だけに依存する$m_0>0$が存在し、全ての$m\geq m_0$について

$$
\dim H^0(X,-mK_X)\leq\dim H^0(\mathbb P^n,-mK_{\mathbb P^n})
$$

が成り立つ。いずれかの$m\geq m_0$で等号なら$X\cong\mathbb P^n$である。

### $\delta_m$による固定次数の比較（Theorem 1.3）

$\delta_m(-K_X)\geq1$を満たすFano多様体では同じ不等式がその$m$で成り立ち、等号は$X\cong\mathbb P^n$の場合に限る。全ての$m\geq1$でK半安定性だけから同じ結論が出るというConjecture 1.2も提示されるが、これは証明済みの主張ではない。

## 証明の見取り図

Theorem 1.1ではHirzebruch–Riemann–Rochにより切断数を$m$の多項式として表し、Fano多様体の有界性で係数を一様に制御する。Fujitaの体積比較が最高次係数を抑えるため、十分大きな$m$で結論が従う。Theorem 1.3では$\delta_{m,p}$の局所版を使い、切断数が射影空間を超えると消滅次数の大きい基底型因子が生じてlog canonical thresholdが1未満になることを線形代数で導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2503.16766v3](https://arxiv.org/abs/2503.16766v3)
- **Introduction相当:** Section 1 “Main results”, pp. 1–2
- **主要結果:** Theorems 1.1, 1.3; Conjecture 1.2
- **確認したarXivバージョン:** v3
- **source_scope:** Abstract and Introduction
