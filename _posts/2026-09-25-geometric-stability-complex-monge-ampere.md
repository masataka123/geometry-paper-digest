---
layout: paper
title: "Geometric stability for complex Monge-Ampere equations"
title_ja: "複素Monge–Ampère方程式の幾何的安定性"
authors: "Bin Guo, Jian Song, Jacob Sturm"
arxiv_primary_category: "math.DG"
arxiv_categories:
- math.DG
- math.AP
- math.CV
arxiv_abstract: >-
  Let $X$ be a compact Kahler manifold. The analytic stability theorem of Kolodziej for complex Monge-Ampere equation states that for any Kahler metrics $ω$ and $ω'$ in the same cohomology class, if their volume measures are bounded in $L^p(X)$ (for some $p>1$) and close in $L^1(X)$, then their Kahler potentials are close in $L^\infty(X)$. In this paper, we establish the geometric stability for complex Monge-Ampère equations that $L^1$-closeness of volume measures implies $L^\infty$-closeness for the induced distance functions by $ω$ and $ω'$. Consequently, we prove that any non-smooth Kahler current with volume measure bounded in $L^p$ (for some $p>1$) and Ricci current bounded below induces a unique metric space, which turns out to be a compact RCD space homeomorphic to $X$ itself.
topic: differential-geometry
tags:
- monge-ampere-equations
- pluripotential-theory
arxiv_id: "2609.28978v1"
arxiv_url: "https://arxiv.org/abs/2609.28978"
arxiv_submitted: "2026-09-24"
arxiv_updated: "2026-09-24"
summary: >-
  同じKähler類に属する計量について、体積測度の $L^1$ 近接性から誘導距離関数の一様近接性を導く。共通のRicci下界の下ではGromov–Hausdorff安定性が従い、非滑らかなKähler currentが一意なcompact RCD距離空間を定めることも示す。
abstract_en: ''
summary_en: >-
  The paper upgrades analytic stability for complex Monge–Ampère equations to stability of the induced distances. Under uniform Lp density control and suitable Ricci lower bounds, L1-nearby volume measures give uniformly nearby distance functions and hence nearby metric spaces. This also assigns a unique compact RCD metric structure to a class of nonsmooth Kähler currents.
abstract_ja: >-
  複素Monge–Ampère方程式の体積測度が $L^1$ で近いとき、誘導される距離関数も一様に近いことを示す。共通の $L^p$ 制御とRicci下界を課すと双方向の評価とGromov–Hausdorff近接性が得られ、対応する非滑らかなKähler currentは一意なcompact RCD空間を定める。
abstract_source_url: "https://arxiv.org/abs/2609.28978"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.28978v1](https://arxiv.org/abs/2609.28978)
- **著者:** Bin Guo, Jian Song, Jacob Sturm
- **初回投稿日:** 2026-09-24
- **最終更新日:** 2026-09-24
- **主分類・副分類:** math.DG, math.AP, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kołodziejの安定性定理は体積密度の $L^1$ 近接性からKählerポテンシャルの $L^\infty$ 近接性を導く。本論文はこれを距離関数そのものの安定性へ強化する。

一方の計量にRicci下界を置くと距離の片側評価が得られ、両方に一様なRicci下界を置けば距離関数は一様に近くなる。したがってGromov–Hausdorff距離も小さくなる。

さらに適切な $L^p$ 密度とRicci current下界をもつ非滑らかなKähler currentに、正則化の選び方によらない一意なcompact RCD距離空間を対応させる。

## 背景と問題設定

ポテンシャルの一様制御は計量係数の二階微分を直接制御しない。このため解析的安定性から距離の安定性へ進むには、測地線とplurisubharmonic関数を結ぶ新しい評価が必要となる。

## 主結果

### 距離の半安定性（Theorem 1.1）

$\omega,\omega'\in\mathcal K_\theta(p,K)$ で $\operatorname{Ric}(\omega)$ に下界があり、体積測度が十分 $L^1$-近接なら、全ての $x,y$ に対し
$$d_{\omega'}(x,y)<d_\omega(x,y)+\varepsilon$$
が成り立つ。

### 一様安定性（Corollary 1.1）

両計量に共通のRicci下界があれば
$$\sup_{x,y\in X}|d_\omega(x,y)-d_{\omega'}(x,y)|<\varepsilon$$
となり、Gromov–Hausdorff距離も $\varepsilon$ 未満となる。

## 証明の見取り図

segment inequalityを用いて測地線上の悪い集合を避ける曲線を構成し、ポテンシャルの解析的安定性を曲線長の制御へ変換する。正則化列に適用して非滑らかなcurrentの距離を一意に定める。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.28978](https://arxiv.org/abs/2609.28978)
- **Introduction:** Section 1
- **確認したarXivバージョン:** 2609.28978v1
- **確認したライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
