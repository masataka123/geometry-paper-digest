---
layout: paper
title: "On the optimal volume upper bound for Kähler manifolds with positive Ricci curvature (with an appendix by Yuchen Liu)"
title_ja: "正Ricci曲率Kähler多様体の最適体積上界"
authors: "Kewei Zhang"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
arxiv_abstract: >-
  Using $δ$-invariants and Newton--Okounkov bodies, we derive the optimal volume upper bound for Kähler manifolds with positive Ricci curvature, from which we get a new characterization of the complex projective space.
topic: differential-geometry
tags:
  - curvature
  - fano-varieties
  - k-stability
arxiv_id: "2001.04169v3"
arxiv_url: "https://arxiv.org/abs/2001.04169"
arxiv_submitted: "2020-01-13"
arxiv_updated: "2020-09-29"
summary: >-
  Ricci曲率が $\operatorname{Ric}(\omega)\geq(n+1)\omega$ を満たすKähler多様体の体積はFubini--Study計量を備えた射影空間の体積以下であり、等号は射影空間を特徴付ける。証明は $\delta$ 不変量とNewton--Okounkov体を用いて微分幾何の問題を代数幾何へ移す。
abstract_en: ""
summary_en: >-
  The paper identifies the largest possible volume of a positively Ricci-curved Kähler manifold under a fixed normalization. Complex projective space with its Fubini–Study metric is the unique equality case. The argument translates curvature into algebraic stability data and uses Newton–Okounkov convex bodies to control irrational Kähler classes.
abstract_ja: >-
  正Ricci曲率を一定に正規化したKähler多様体について、射影空間が最適な体積上界を与え、等号の場合を一意に特徴付ける。$\delta$不変量とNewton--Okounkov体を用いる代数的証明を与える。
abstract_source_url: "https://arxiv.org/abs/2001.04169"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2001.04169](https://arxiv.org/abs/2001.04169)
- **著者:** Kewei Zhang
- **初回投稿日:** 2020-01-13
- **最終更新日:** 2020-09-29
- **主分類・副分類:** math.DG, math.AG（主分類: math.DG）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Bishop--Gromov比較のKähler版として、正Ricci曲率の下で最適な体積上界を問う。一般のRiemann多様体では球面がモデルだが、Kählerの場合にはFubini--Study計量を備えた複素射影空間が極値になるという予想を解決する。

曲率条件により対象がFano多様体になることを用い、最大Ricci下界を $\delta$ 不変量と結び付ける。体積評価そのものに加え、等号時の射影空間の剛性を示す。

付録では体積が最大値に十分近ければ基礎多様体が $\mathbb P^n$ と双正則になる量的剛性も与える。

## 背景と問題設定

Kähler--Einsteinの場合のFujitaの結果を、任意のKähler類へ拡張することが課題である。非有理Kähler類では通常の直線束だけでは扱えないため、凸幾何が必要になる。

## 主結果

### 最適体積上界（Theorem 1.1）

$n$ 次元Kähler多様体 $(X,\omega)$ が $\operatorname{Ric}(\omega)\geq(n+1)\omega$ を満たすなら

$$
\operatorname{Vol}(X,\omega)\leq\operatorname{Vol}(\mathbb P^n,\omega_{FS}),\qquad \int_{\mathbb P^n}\omega_{FS}^n=(2\pi)^n.
$$

等号は $(X,\omega)$ が $(\mathbb P^n,\omega_{FS})$ と双正則等長である場合に限る。

### 体積gap（Theorem 1.3）

次元だけに依存する $\varepsilon(n)>0$ が存在し、同じRicci下界の下で体積が最大値から $\varepsilon(n)$ 以内なら $X\cong\mathbb P^n$ となる。

## 証明の見取り図

最大Ricci下界を安定性閾値 $\delta(X,L)$ と結び、Fujitaの代数的体積評価を実Kähler類へ拡張する。等号条件では反標準Seshadri定数を計算し、Newton--Okounkov体の正値性判定で非有理性を処理する。

## 原論文との対応

- **Abstractページ:** [arXiv:2001.04169](https://arxiv.org/abs/2001.04169)
- **Introduction:** Section 1
- **確認したarXivバージョン:** v3
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
