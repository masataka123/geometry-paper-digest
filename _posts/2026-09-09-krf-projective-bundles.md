---
layout: paper
title: 'Finite-Time Singularities of the Kähler--Ricci Flow on a $\mathbb{CP}^m$-Bundle over a Product of Kähler--Einstein Manifolds'
title_ja: "Kähler–Einstein多様体の積上の射影空間束におけるKähler–Ricci流の有限時間特異点"
authors: "Yifan Xiao"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  In this paper, we study the Kähler--Ricci flow on $\mathbb{CP}^m$-bundles over a product of Kähler--Einstein manifolds, starting from an initial metric with Calabi symmetry. We prove that every finite-time singularity arising along the flow must be of Type~I.
topic: differential-geometry
tags:
  - kahler-ricci-flow-solitons
  - kahler-einstein-metrics
  - curvature
arxiv_id: "2609.07124v1"
arxiv_url: "https://arxiv.org/abs/2609.07124"
arxiv_submitted: "2026-09-07"
arxiv_updated: "2026-09-07"
summary: >-
  Kähler–Einstein多様体の積を底とする$\mathbb{CP}^m$束上で、Calabi対称な初期計量から出るKähler–Ricci流を調べる。有限時間に特異化するなら曲率爆発は必ずType Iであることを示し、ファイバー崩壊と部分多様体収縮の双方を扱う。
abstract_en: ""
summary_en: >-
  This paper analyzes Kähler–Ricci flow on a projective-space bundle over a product of compact Kähler–Einstein manifolds. For Calabi-symmetric initial data, every finite-time singularity is shown to satisfy a Type I curvature bound. The argument combines estimates near a Ricci vertex with componentwise curvature formulas and a blow-up contradiction in regions far from the zero section.
abstract_ja: >-
  Kähler–Einstein多様体の積上の$\mathbb{CP}^m$束にCalabi対称なKähler計量を入れ、そこから始まるKähler–Ricci流を研究する。この流に有限時間特異点が生じるなら、すべてType Iであることを証明する。
abstract_source_url: "https://arxiv.org/abs/2609.07124"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.07124](https://arxiv.org/abs/2609.07124)
- **著者:** Yifan Xiao
- **初回投稿日:** 2026年9月7日
- **最終更新日:** 2026年9月7日
- **主分類・副分類:** math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler–Ricci流の有限特異時刻を$T$とすると、$|\operatorname{Rm}|\le C(T-t)^{-1}$ならType I、そうでなければType IIと呼ぶ。Type Iのblow-upはshrinking Ricci solitonと密接に関係するが、高い対称性だけではType IIを排除できない。

本論文は複数のコンパクトKähler–Einstein多様体の積$N=N_1\times\cdots\times N_r$上の$\mathbb{CP}^m$束を扱う。Calabi対称性のもとでも、各底成分の係数が独立に動き、$m\ge2$では$\mathbb{CP}^{m-1}$方向が加わるため、従来の$\mathbb{CP}^1$束の議論をそのまま使えない。

Ricci vertex近傍のスカラー曲率評価を、明示的な曲率恒等式によって全曲率成分の評価へ強める。ファイバー崩壊の場合と零切断の収縮の場合を分け、いずれにもType I評価を確立する。

## 背景と問題設定

対象は$\operatorname{Ric}(\omega_k)=\lambda_k\omega_k$を満たす$(N_k^{n_k},\omega_k)$の積を底とする

$$
X=\mathbb P(\mathcal O_N\oplus L^{\oplus m})\longrightarrow N
$$

である。初期計量はCalabi $U(m)$対称性をもち、流の方程式は動径関数と底方向の係数の発展へ還元される。

## 主結果

### 主定理（Theorem 1.1）

上の各$N_k$がコンパクトKähler–Einstein多様体で、Section 3の構成による$\mathbb{CP}^m$束$X$にCalabi対称初期計量$\omega_0$を入れる。このとき$\omega_0$から始まるKähler–Ricci流が有限時間で特異化するなら、その特異点はType I、すなわち

$$
|\operatorname{Rm}(\omega(t))|\le \frac{C}{T-t}
$$

を満たす。

## 証明の見取り図

動径座標$x$と$y=x/(T-t)$を用いる。$y$が有界な領域ではRicci vertexを零切断からrescaled距離で有界に保ち、既知のスカラー曲率評価と曲率の成分表示から全曲率を制御する。ファイバー崩壊時にはrescaledファイバー直径の有界性で評価を全点へ広げる。収縮時の$y\to\infty$領域では、仮想的なType II blow-upの底方向が平坦に分裂することを示し、残る2次元非平坦因子がcigar solitonとなることとPerelmanのnoncollapsingとの矛盾を導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.07124](https://arxiv.org/abs/2609.07124)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorem 1.1
- **論文構成の説明:** p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
