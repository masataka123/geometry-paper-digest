---
layout: paper
title: "Convergence of Scalar Curvature of Long Time Kähler-Ricci Flow on Kähler Manifold"
title_ja: "長時間 Kähler–Ricci 流のスカラー曲率収束"
authors: "Lei Zhang, Zhenlei Zhang"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
topic: differential-geometry
tags:
  - positivity
  - kahler-ricci-flow-solitons
  - curvature
arxiv_id: "2606.17402v1"
arxiv_url: "https://arxiv.org/abs/2606.17402v1"
arxiv_submitted: "2026-06-16"
arxiv_updated: "2026-06-16"
summary: >-
  半豊富な標準束をもつコンパクト Kähler 多様体上の正規化 Kähler–Ricci 流を研究する。スカラー曲率が一様に $-\kappa$ へ収束することを、流に沿う一様エントロピー評価と Sobolev 不等式を通じて示す。
abstract_en: ""
summary_en: >-
  The paper examines normalized Kähler–Ricci flow on a compact Kähler manifold whose canonical bundle is semiample. It establishes uniform entropy and Sobolev estimates along the collapsing flow. These analytic controls yield uniform convergence of the scalar curvature to the negative of the Kodaira dimension. The result strengthens earlier convergence known only on compact subsets of the regular locus.
abstract_ja: >-
  半豊富な標準束をもつコンパクト Kähler 多様体上の正規化 Kähler–Ricci 流を扱う。流に沿って一様な $\mu$-エントロピー評価、したがって一様 Sobolev 不等式を証明する。その帰結として、時刻 $t$ のスカラー曲率 $R(t)$ が Kodaira 次元 $\kappa$ の負値へ多様体全体で一様収束することを示す。
abstract_source_url: "https://arxiv.org/abs/2606.17402v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2606.17402v1](https://arxiv.org/abs/2606.17402v1)
- **著者:** Lei Zhang, Zhenlei Zhang
- **初回投稿日・最終更新日:** 2026年6月16日
- **主分類:** math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

標準束が半豊富な場合、正規化 Kähler–Ricci 流は標準模型上の一般化 Kähler–Einstein 計量へ向かい、正則部分のコンパクト集合上ではスカラー曲率が $-\kappa$ に収束することが知られていた。本論文はこの局所的記述を多様体全体での一様収束へ強める。

主結論は $\|R(t)+\kappa\|_{L^\infty}\to0$ である。ここで半豊富性により流は長時間存在し、中間 Kodaira 次元では Calabi–Yau ファイバーを潰すため、非崩壊の場合とは異なる一様解析が必要になる。

その基盤として、体積項を明示した一様 $\mu$-エントロピー下界と一様 Sobolev 不等式を確立する。Introduction は ultracontractivity と併せてこれらをスカラー曲率の上下評価へ用いると説明している。

## 背景と問題設定

正規化流は
$$
\frac{\partial\omega}{\partial t}=-\operatorname{Ric}(\omega)-\omega,\qquad \omega(0)=\omega_0
$$
である。十分大きい $m$ による多重標準系が標準写像 $f:X\to X_{\rm can}$ を定め、$0\le\kappa<n$ では正則ファイバー方向が崩壊する。従来は正則部分上での $R(t)\to-\kappa$ が得られていたが、特異ファイバー近傍も含む一様収束が問いとして残っていた。

## 主結果

### スカラー曲率収束（Theorem 1.1）

$K_X$ が半豊富で $\kappa\in\{0,1,\ldots,n-1\}$ とする。正規化 Kähler–Ricci 流の長時間解に対し
$$
\lim_{t\to\infty}\|R(t)+\kappa\|_{L^\infty}=0
$$
が成り立つ。特に収束は正則部分のコンパクト集合に限定されない。

### 一様解析評価（Theorem 1.2）

同じ半豊富性の下で、$0<\tau\le1$ に対する一様エントロピー評価
$$
\mu(g(t),\tau)\ge \log\operatorname{vol}_{g(t)}(X)-C
$$
と、任意の実滑らかな $f$ に対する
$$
\left(\int_X|f|^{\frac{2n}{n-1}}\omega(t)^n\right)^{\frac{n-1}{n}}
\le C_S\int_X\bigl(|\nabla f|^2+f^2\bigr)\omega(t)^n
$$
を得る。

## 証明の見取り図

Introduction によれば、Bamler の Nash entropy に関する評価から対数 Sobolev 不等式、さらに一様 Sobolev 不等式と ultracontractivity を導く。これをスカラー曲率の進化方程式に適用し、下側と上側の評価を別々に制御して Theorem 1.1 に到達する。

## 原論文との対応
- **Abstractページ:** [arXiv:2606.17402v1](https://arxiv.org/abs/2606.17402v1)
- **Introduction:** Section 1, pp. 1–4
- **主要定理:** Theorems 1.1, 1.2
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
