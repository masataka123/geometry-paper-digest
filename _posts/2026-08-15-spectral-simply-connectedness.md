---
layout: paper
title: "Simply connectedness of Kähler and Riemannian manifolds via spectral estimates (with an appendix by Shiyu Zhang)"
title_ja: "スペクトル評価によるKähler・Riemann多様体の単連結性"
authors: "Francesco Bei"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.CV
topic: differential-geometry
tags:
  - positivity
  - curvature
  - fundamental-groups
arxiv_id: "2602.11002v2"
arxiv_url: "https://arxiv.org/abs/2602.11002v2"
arxiv_submitted: "2026-02-11"
arxiv_updated: "2026-05-05"
summary: >-
  Ricci曲率の最小固有値をポテンシャルとするSchrödinger型作用素のスペクトル正値性から、Kähler多様体の有理連結性と単連結性を導く。
  Riemann多様体に対する実ホモロジー球面判定と、接束の最小斜率による有理次元の特徴づけも与える。
abstract_en: ""
summary_en: >-
  Spectral positivity of a Schrödinger operator built from the smallest Ricci eigenvalue is used to force rational connectedness of a Kähler manifold. This gives simple connectedness, projectivity, and vanishing of positive-degree holomorphic forms. Related nonnegative estimates constrain the fundamental group or the holomorphic Euler characteristic. The Riemannian part derives homology-sphere conclusions from Weitzenböck curvature operators.
abstract_ja: >-
  コンパクトKähler多様体について、Ricci曲率の最小固有値を含むSchrödinger型作用素の弱いスペクトル正値条件から有理連結性を証明し、単連結性・射影性・正次数正則形式の消滅を得る。一般のRiemann多様体ではWeitzenböck公式の曲率項を用いたスペクトル条件から、実ホモロジー球面性などの位相的帰結を導く。付録は接束の最小斜率と有理次元を関連づける。
abstract_source_url: "https://arxiv.org/abs/2602.11002v2"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2602.11002v2](https://arxiv.org/abs/2602.11002v2)
- **著者:** Francesco Bei（付録: Shiyu Zhang）
- **初回投稿日:** 2026年2月11日
- **最終更新日:** 2026年5月5日
- **主分類・副分類:** math.DG（主）、math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Bonnet–Myers型定理は点ごとのRicci正値性から基本群の有限性を導く。本論文は、点ごとの正値性をSchrödinger型作用素のスペクトル正値性へ弱めても、Kählerの場合にはさらに強い有理連結性と単連結性が得られるかを問う。

実次元$2m$のKähler多様体で、Ricci曲率の最小固有値$r_1$をポテンシャルとする$\gamma\Delta+r_1$が正スペクトルをもつと、有理連結性が従う。したがって多様体は単連結かつ射影的で、$p>0$について$h^{p,0}=0$となる。

非負スペクトルの場合にも、基本群の有限性または正則Euler標数の消滅という二者択一を得る。後半は一般のRiemann多様体へ移り、微分形式上のWeitzenböck曲率項の最小固有値を使って、実ホモロジー球面性を導く。

## 背景と問題設定

$r_1(x)$をRicci曲率の$x$での最小固有値とする。スペクトル正値性は、すべての非零試験関数に対して作用素の二次形式が正であることを意味し、$r_1$が一部で負でも許す点で、一様Ricci正値性より弱い。

## 主結果

### Kähler多様体の有理連結性（Theorem 0.1）

実次元$2m$の完備Kähler多様体$M$について、$m>1$かつ

$$
\gamma\Delta+r_1:L^2(M,h)\longrightarrow L^2(M,h)
$$

が$\gamma\in[0,4/(2m-1))$で正スペクトルをもてば、$M$はコンパクトかつ有理連結である。$M$をあらかじめコンパクトと仮定すれば、任意の$\gamma\geq0$で同じスペクトル正値性から有理連結性が従う。いずれも単連結性、射影性、$h^{p,0}(M)=0$（$p=1,\ldots,m$）を与える。

### 非負スペクトルの場合（Theorem 0.2）

コンパクトKähler多様体で、各$p=1,\ldots,m$に対する$\gamma\Delta+r_p$が、ある$\gamma\in[0,2)$について非負スペクトルをもつなら、$\pi_1(M)$が有限であるか、$\chi(M,\mathcal O_M)=0$である。

### Riemann多様体の実ホモロジー球面性（Theorem 0.3）

Weitzenböck曲率作用素の最小固有値を$w_{k,1}$とする。各$k=1,\ldots,m-1$について

$$
\frac{m}{m-1}\Delta+w_{k,1}
$$

が正スペクトルをもつとき、向きづけ可能な偶数次元の場合は単連結な実ホモロジー球面となる。Introductionでは、非向きづけ可能な偶数次元の場合と奇数次元の場合も別々に結論が述べられている。

## 証明の見取り図

Kähler部分では、スペクトル正値性を$r_1$の積分的正値性へ変換し、消滅定理を介して有理連結性へ到達する。非負の場合とRiemann部分では、$L^2$消滅定理とAtiyahの$L^2$指数定理が主要な道具となる。

## 原論文との対応
- **Abstractページ:** arXiv Abstract
- **Introduction:** unnumbered Introduction, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 0.1–0.4
- **論文構成の説明:** Introduction, p. 3
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
