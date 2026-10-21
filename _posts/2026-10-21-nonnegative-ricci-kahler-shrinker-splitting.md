---
layout: paper
title: Kähler-Ricci Shrinkers with Nonnegative Ricci Curvature
title_ja: Ricci曲率非負のKähler–Ricci縮小ソリトンの直積分解
authors: Tongxin Xu, Zhenlei Zhang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We prove that every complete K\"ahler--Ricci shrinker with nonnegative Ricci curvature is holomorphically isometric to $\mathbb{C}^k\times N^{n-k}$ for some $0\le k\le n$, where $\mathbb{C}^k$ is the Gaussian shrinker and $N$ is a compact K\"ahler--Ricci shrinker with nonnegative Ricci curvature. As a corollary, every complete K\"ahler--Ricci shrinker with quasi-positive Ricci curvature is compact.
topic: differential-geometry
tags:
- kahler-ricci-flow-solitons
- curvature
- noncompact-kahler-geometry
- fano-varieties
- positivity
arxiv_id: 2610.28238v1
arxiv_url: https://arxiv.org/abs/2610.28238
arxiv_submitted: '2026-10-20'
arxiv_updated: '2026-10-20'
summary: 完備Kähler–Ricci縮小ソリトンが非負Ricci曲率を持つとき、Gaussian因子とコンパクトなKähler–Ricci縮小ソリトンの積へ正則等長分解することを示す。特に一点でRicci曲率が正なら全体がコンパクトとなり、二分曲率などの追加条件を不要にする。
abstract_en: ''
summary_en: The paper studies which noncompact directions can survive on a shrinking Kähler Ricci soliton under nonnegative Ricci curvature. Its structure theorem isolates all such directions in a flat Gaussian factor. The remaining factor is compact, so positivity at even one point forces compactness of the entire manifold. The argument links an algebraic fibration description to positivity of direct images and a metric splitting mechanism.
abstract_ja: 非負Ricci曲率を持つ完備Kähler–Ricci縮小ソリトンは、複素Euclid空間上のGaussianソリトンと、非負Ricci曲率を持つコンパクトな縮小ソリトンとの正則等長な積に分解する。したがってRicci曲率が全体で半正定値かつ一点で正定値ならコンパクトである。Introductionでは定スカラー曲率の場合の剛性も系として述べられる。
abstract_source_url: https://arxiv.org/abs/2610.28238
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.28238v1](https://arxiv.org/abs/2610.28238)
- **著者:** Tongxin Xu, Zhenlei Zhang
- **初回投稿日:** 2026-10-20
- **最終更新日:** 2026-10-20
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Ricci縮小ソリトンは、微分同相と拡大縮小だけでRicci流に沿って変化する自己相似解である。正のRicci曲率を持つ完備な縮小ソリトンは必ずコンパクトか、という問いがある。本論文はそのKähler版に対し、正値性だけでなく非負の場合まで含めた構造定理を与える。

主張される分解は、単なる位相的な積ではなく正則等長な積である。非コンパクト部分はGaussian縮小ソリトンである複素Euclid空間へ集約され、残りはコンパクトなKähler–Ricci縮小ソリトンになる。従来の結果に現れた非負断面曲率や二分曲率条件、対称性を追加しないことが特徴である。

この分解から、Ricci曲率が非負で、どこか一点で正定値ならコンパクト性が従う。定スカラー曲率の縮小ソリトンに関する剛性も導かれる。ただし、積のコンパクト因子自体が必ず正のRicci曲率を持つかは未解決として残されている。

## 背景と問題設定

縮小ソリトン方程式は、完備計量$g$と滑らかな関数$f$に対し

$$
\operatorname{Ric}\_g+\nabla^2f=\lambda g,\qquad\lambda>0
$$

である。Kähler構造$J$と正則な勾配ベクトル場を備える場合、Kähler形式$\omega$について

$$
\operatorname{Ric}(\omega)+\sqrt{-1}\thinspace \partial\bar\partial f=\lambda\omega
$$

と書ける。

Introductionは、非負断面曲率と正Ricci曲率、弱いPIC1条件、Kählerの場合の二分曲率条件などの下での既知のコンパクト性を整理する。複素二次元の分類も知られるが、本論文は任意次元でRicci曲率の仮定だけから結論を得ることを目指す。

## 主結果

### Gaussian因子とコンパクト因子への分解（Theorem 1.2）

完備Kähler–Ricci縮小ソリトン$(X^n,g,J,f)$が$\operatorname{Ric}\_g\ge0$を満たすなら、ある$0\le k\le n$に対して

$$
X\simeq\mathbb C^k\times N^{n-k}
$$

が正則等長同型として成立する。$\mathbb C^k$はGaussian縮小ソリトン、$N$は非負Ricci曲率を持つコンパクトKähler–Ricci縮小ソリトンである。普遍被覆上だけの分解ではなく、定理は$X$そのものの分解を述べている。

### 一点での正値性からのコンパクト性（Corollary 1.3）

全体で$\operatorname{Ric}\_g\ge0$、ある一点$p$で$\operatorname{Ric}\_g(p)>0$なら、$X$はコンパクトである。Gaussian因子はRicci曲率零の方向を持つため、この正値性によって非自明な平坦因子が除かれる。

### 定スカラー曲率の場合の剛性（Corollary 1.4）

定スカラー曲率の完備Kähler–Ricci縮小ソリトンはrigidである。ここでrigidとは、Einstein多様体とGaussian空間の積の有限商に等長であることをいう。Introductionはこの系を別の最近の研究でも得られた結果として位置づけ、一般のRiemannian縮小ソリトンに関するCaoの予想全体を解決したとは述べていない。

## 証明の見取り図

Sun–ZhangのFanoファイブレーション構造が、コンパクトなファイバーを持つaffine多様体への固有正則写像を与える。正則な底の部分ではBerndtssonの直像正値性を用い、Kähler体積形式を押し出した密度の曲率から、ソリトン流に沿う規格化体積密度の単調性を得る。

再スケールした流の極限から底へ降りる半正定値形式を構成し、ファイバー体積の収束と単調性を組み合わせて厳密な体積等式を導く。この等式とBochner型の議論が接束の平行分解を生み、de Rham分解を通じて正則等長な積に至る、という道筋がIntroductionで説明されている。

## 原論文との対応

- **Abstractページ:** [Kähler-Ricci Shrinkers with Nonnegative Ricci Curvature](https://arxiv.org/abs/2610.28238)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.28238v1) — Section 1, pp. 1–3（Section 2直前まで）。
- **Introduction中で言及された主要結果:** Theorem 1.2、Corollaries 1.3, 1.4。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.28238v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
