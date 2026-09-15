---
layout: paper
title: "Hermitian manifolds with constant holomorphic sectional curvature or real bisectional curvature"
title_ja: "定正則断面曲率または定実双断面曲率をもつHermitian多様体"
authors: "Kai Tang"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  An old conjecture in Hermitian geometry states that a compact Hermitian manifold with constant holomorphic sectional curvature is Kähler when the constant is nonzero and Chern flat when the constant is zero. Yang--Zheng introduced the real bisectional curvature as a generalization of the holomorphic sectional curvature and conjectured that, a compact Hermitian manifold with constant real bisectional curvature has zero constant and is Chern flat. They proved that the constant cannot be positive. In this paper, we first prove their conjecture. For a negative constant, we show that the metric is pluriclosed and use comparison with a negative Kähler--Einstein metric to obtain a contradiction. For the zero constant, we combine a torsion identity of Lin--Ren with the Bochner formula of Zhou--Zheng to prove Chern flatness. We also prove that a pluriclosed metric with constant negative holomorphic sectional curvature on a compact Kähler manifold is Kähler.
topic: differential-geometry
tags:
  - curvature
  - kahler-einstein-metrics
arxiv_id: "2609.14392v1"
arxiv_url: "https://arxiv.org/abs/2609.14392"
arxiv_submitted: "2026-09-13"
arxiv_updated: "2026-09-13"
summary: >-
  定実双断面曲率をもつコンパクトHermitian多様体について、定数はゼロで計量はChern flatであるというYang--Zheng予想を解決する。さらにKähler計量を許容するコンパクト複素多様体上では、負の定正則断面曲率をもつpluriclosed Hermitian計量がKählerであり、複素双曲空間形を与えることを示す。
abstract_en: ""
summary_en: >-
  The paper resolves the Yang-Zheng conjecture for compact Hermitian manifolds with constant real bisectional curvature: the constant must vanish and the Chern curvature is zero. It also proves that a pluriclosed Hermitian metric of constant negative holomorphic sectional curvature is Kähler whenever the underlying compact complex manifold admits a Kähler metric. In that case the metric coincides with a normalized negative Kähler-Einstein metric and defines a compact complex hyperbolic space form.
abstract_ja: >-
  定実双断面曲率をもつコンパクトHermitian多様体では、曲率定数がゼロで計量がChern flatになるというYang--Zheng予想を証明する。また、Kähler計量をもつコンパクト複素多様体上の負の定正則断面曲率をもつpluriclosed計量はKählerであることを示す。
abstract_source_url: "https://arxiv.org/abs/2609.14392"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.14392](https://arxiv.org/abs/2609.14392)
- **著者:** Kai Tang
- **初回投稿日:** 2026年9月13日
- **最終更新日:** 2026年9月13日
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler計量では定正則断面曲率が複素空間形を特徴づけるが、非KählerなHermitian計量ではChern曲率がKähler対称性を失い、正則断面曲率だけでは全曲率を決めない。実双断面曲率はこの欠点を補う強い曲率量としてYangとZhengが導入した。

本論文は、定実双断面曲率 $B_h\equiv c$ をもつコンパクトHermitian多様体では $c=0$ であり、Chern曲率が消えることを証明する。これは任意の複素次元 $n\geq2$ でYang--Zheng予想を解決する結果である。

さらに、Kähler計量を許容するコンパクト複素多様体上で、Hermitian計量 $h$ がpluriclosedかつ負の定正則断面曲率をもつなら、$h$ 自身がKählerであることを示す。その結果、$h$ は負のKähler--Einstein計量と一致し、複素双曲空間形を与える。

## 背景と問題設定

単位的frame $e=(e_1,\ldots,e_n)$ と非負ベクトル $a=(a_1,\ldots,a_n)$ に対し、実双断面曲率は

$$
B_h(e,a)=\frac{\sum_{i,j}R_{i\bar{i}j\bar{j}}a_i a_j}{\sum_i a_i^2}
$$

で定義される。Kähler計量ではその符号条件は正則断面曲率の符号条件と同値だが、一般のHermitian計量ではより強い。

## 主結果

### Yang--Zheng予想の解決（Theorem 1.4）

複素次元 $n\geq2$ のコンパクトHermitian多様体 $(M^n,h)$ が $B_h\equiv c$ を満たすなら、

$$
c=0,\qquad R\equiv0,\qquad \nabla T\equiv0
$$

である。特に $h$ はChern flatである。

### 負の定正則断面曲率の場合（Theorem 1.5）

Kähler計量を許容するコンパクト複素多様体 $X$ 上で、pluriclosed Hermitian計量 $h$ が $H_h\equiv c<0$ を満たすなら $h$ はKählerである。さらに $a=(n+1)c/2$ とし、$\operatorname{Ric}^{(1)}_g=a\omega_g$ で正規化したKähler--Einstein計量 $g$ を取ると

$$
h=g
$$

であり、$(X,h)$ はコンパクト複素双曲空間形となる。

## 証明の見取り図

$c<0$ の実双断面曲率の場合は曲率恒等式の縮約からpluriclosed性を導き、負のKähler--Einstein計量との恒等写像にBochner公式と最大値原理を適用して矛盾を得る。$c=0$ の場合はbalanced性、torsion形式の恒等式、Stokesの定理、Zhou--ZhengのBochner公式を組み合わせ、まず $\nabla T=0$、次にBianchi恒等式から $R=0$ を得る。Theorem 1.5では二つのtrace量と体積比への最大値原理が $h=g$ を強制する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.14392](https://arxiv.org/abs/2609.14392)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.4, 1.5; Corollary 1.6
- **論文構成の説明:** Introduction, p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
