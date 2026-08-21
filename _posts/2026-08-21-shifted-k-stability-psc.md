---
layout: paper
title: Positive scalar curvature Kähler metrics and shifted $K$-stability
title_ja: 正scalar曲率Kähler計量とshifted K-stability
authors: Zehao Sha
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AG
arxiv_abstract: In this paper, we show that the quantitative data underlying $K$-stability, originally developed in the study of canonical metrics, also detect the existence of positive scalar curvature Kähler metrics in a fixed class.
topic: differential-geometry
tags:
- k-stability
- curvature
arxiv_id: 2608.20030v1
arxiv_url: https://arxiv.org/abs/2608.20030
arxiv_submitted: '2026-08-20'
arxiv_updated: '2026-08-20'
summary: 正scalar曲率Kähler計量の存在をshifted $K$-stabilityで特徴づけ、最適な安定性定数をPSC thresholdとして定式化する。polarizedの場合にはtranscendental thresholdとnon-Archimedean thresholdが一致し、cscK存在との境界も明確になる。
abstract_en: ''
summary_en: Quantitative invariants from K-stability are adapted to detect positive scalar curvature in a fixed Kähler class. The resulting shifted stability condition is equivalent to metric existence. In the polarized case, transcendental and non-Archimedean thresholds coincide and distinguish positive scalar curvature from the stronger cscK regime.
abstract_ja: $K$-stabilityの定量的不変量が固定Kähler類における正scalar曲率計量の存在を検出することを示す。shifted stabilityとPSC thresholdを導入し、polarized settingではそのtranscendental版とnon-Archimedean版が一致する。
abstract_source_url: https://arxiv.org/abs/2608.20030
license_name: arXiv non-exclusive distribution license
license_url: https://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.20030v1](https://arxiv.org/abs/2608.20030)
- **著者:** Zehao Sha
- **初回投稿日:** 2026-08-20
- **最終更新日:** 2026-08-20
- **主分類・副分類:** math.DG, math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

canonical metricの存在を検出してきた$K$-stabilityの数値を、正scalar曲率という開いた曲率条件へ適用する。Mabuchi型functionalに平均scalar曲率によるshiftを加え、test configurationに沿う一様正値性を定める。

正の平均scalar曲率をもつKähler類では、正scalar曲率計量の存在とshifted $K_\beta$-stability、PSC thresholdの正値性が同値である。

## 背景と問題設定

Kähler test configuration $\mathcal T$ に対しshifted functional $F_\beta$ を用い、$F_\beta(\mathcal T)\geq\delta J(\mathcal T)$ をshifted stabilityとする。最適値を

$$
\sigma(X,\alpha):=\sup_{\beta>0}\inf_{J(\mathcal T)>0}\frac{F_\beta(\mathcal T)}{J(\mathcal T)}
$$

と定める。

## 主結果

### metric存在と安定性（Theorem 1.1）

$X$ をcompact Kähler、$\alpha$ を平均scalar曲率が正のreal Kähler classとする。$\alpha$ が正scalar曲率Kähler計量を含むこと、ある $\beta>0$ に対するshifted $K_\beta$-stability、$\sigma(X,\alpha)>0$ は同値である。

### thresholdの一致（Theorem 1.2）

polarized manifold $(X,L)$ では

$$
\sigma(X,2\pi c_1(L))=\widehat\sigma(X,L)
$$

が成り立つ。Corollary 1.3では $\sigma>0$ が正scalar曲率計量、$\sigma>\bar s$ が一意なcscK計量の存在を特徴づける。

## 証明の見取り図

有限energy geodesic rayとKähler test configurationをfunctionalのslopeで結び、entropy regularizationによって一般のnon-Archimedean potentialをample test configurationで近似する。これによりtranscendentalなcoercivity定数とnon-Archimedean infimumを同定する。

## 原論文との対応

- **Introduction:** Section 1, pp. 1–5
- **主要結果:** Theorems 1.1, 1.2; Corollary 1.3
- **Abstractページ:** [arXiv:2608.20030](https://arxiv.org/abs/2608.20030)
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
