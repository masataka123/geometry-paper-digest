---
layout: paper
title: The Space of $k$-Positive Potentials
title_ja: k正ポテンシャル空間の弱測地線と距離
authors: XiShen Jin
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AP
arxiv_abstract: In this paper, we study weak geodesics in the space of $k$-positive potentials on a compact Kähler manifold. We prove that any two smooth strictly $k$-positive potentials can be joined by a weak geodesic of class $C^{1,1}$. As an application, we prove that the pair $(\mathcal H_k,d_2)$ is a metric space.
topic: differential-geometry
tags:
- pluripotential-theory
- monge-ampere-equations
arxiv_id: 2611.28679v1
arxiv_url: https://arxiv.org/abs/2611.28679
arxiv_submitted: '2026-11-21'
arxiv_updated: '2026-11-21'
summary: コンパクトKähler多様体上で、二つの滑らかな狭義k正ポテンシャルを結ぶ弱測地線の時空間での正則性を示す。この測地線のエネルギーが経路長から定めた距離の二乗を与える。
abstract_en: ''
summary_en: The Hessian measure of a potential supplies the weight for a length functional. Approximate geodesics provide bounds on all real second derivatives, including the mixed space-time derivatives. The limiting energy identifies the path distance and separates distinct endpoints.
abstract_ja: k-Hessian測度を重みとする形式的Riemann計量から、ポテンシャルの空間に経路長を定める。著者は退化方程式の近似解に二階微分評価を与え、弱測地線の一意性と、異なる端点間の距離が正になることを示す。
abstract_source_url: https://arxiv.org/abs/2611.28679
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.28679v1](https://arxiv.org/abs/2611.28679)
- **著者:** XiShen Jin
- **初回投稿日:** 2026-11-21
- **最終更新日:** 2026-11-21
- **主分類・副分類:** math.DG（主分類）; math.AP
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

KählerポテンシャルのMabuchi計量では、経路の速さを移動する体積形式で測る。ここでは体積形式をk-Hessian測度に置き換え、狭義k正ポテンシャルの空間を考える。

滑らかな端点を結ぶ測地線も途中で狭義の正値性や滑らかさを失い得る。そこで退化方程式の弱解として構成し、空間と時間を合わせた二階微分を制御する。

さらに弱測地線のエネルギーを距離と結び付け、経路長の下限が異なる端点を区別することを証明する。

## 背景と問題設定

$\omega\_\varphi=\omega+i\partial\bar\partial\varphi$ の固有値が許容錐 $\Gamma\_k$ に入る滑らかな関数の空間を $\mathcal H\_k$ とする。接ベクトルの内積は積を $\omega\_\varphi^k\wedge\omega^{n-k}$ で積分したものである。

## 主結果

### 時空間の正則性（Theorem 1.1）

境界のないコンパクトKähler多様体 $X$ と二つの端点 $\varphi\_0,\varphi\_1\in\mathcal H\_k$ について、弱測地線 $U$ は $X\times[0,1]$ 上で $C^{1,1}$ 級であり、
$$
\Vert U\Vert \_{C^1}+\Vert \nabla\_{X,t}^2U\Vert \_{L^\infty}\le C
$$
が成り立つ。定数は背景と端点に依存する。各時刻の切片は弱くk正であり、同じ境界値を持つ連続粘性解は一意である。

### 距離とエネルギー（Theorem 1.2）

区分的に滑らかな経路の長さの下限 $d\_2$ は距離となり、どの時刻 $t$ でも
$$
d\_2(\varphi\_0,\varphi\_1)^2
=\int\_X|\partial\_t U|^2\thinspace \omega\_{U(\cdot,t)}^k\wedge\omega^{n-k}.
$$

## 証明の見取り図

正則化したDirichlet問題に対して時間変数の部分Legendre変換を行い、空間方向のHessianと境界での混合微分を評価する。逆変換で元の近似解の全実二階微分を一様に抑え、極限方程式の比較原理と合わせる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.28679)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.28679v1) — §1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems 1.1–1.2, equations (1.1)–(1.4)
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.28679v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
