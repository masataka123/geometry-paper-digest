---
layout: paper
title: "On Fujita's conjecture for a general hyperkähler manifold in the standard series of examples"
title_ja: "標準系列の一般hyperkähler多様体に対するFujita予想"
authors: "Alessandro Pilastro"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  For the moduli spaces $\Sigma_{d,t}^n$ and $\Upsilon_{d,t}^n$ of polarized hyperk\"ahler manifolds of Hilb$^n$(K3)-type and Kum$^n$-type respectively, with polarization with square $2d$ and divisibility $t$, we study general base point freeness and very ampleness of the polarization. We provide cases where these moduli space are connected and a formula characterizing when these spaces are non-empty.
topic: algebraic-geometry
tags:
  - hyperkahler-geometry
  - moduli
  - positivity
arxiv_id: "2602.12439v1"
arxiv_url: "https://arxiv.org/abs/2602.12439"
arxiv_submitted: "2026-02-12"
arxiv_updated: "2026-02-12"
summary: >-
  Hilb$^n$(K3)型および一般化Kummer型の偏極hyperkähler多様体について、一般点の偏極がいつ基点自由または非常に豊富になるかを調べる。偏極の平方・divisibilityに明示的な下界を与え、モジュライ空間の連結性と非空性も扱う。
abstract_en: >-
  For the moduli spaces $\Sigma_{d,t}^n$ and $\Upsilon_{d,t}^n$ of polarized hyperk\"ahler manifolds of Hilb$^n$(K3)-type and Kum$^n$-type respectively, with polarization with square $2d$ and divisibility $t$, we study general base point freeness and very ampleness of the polarization. We provide cases where these moduli space are connected and a formula characterizing when these spaces are non-empty.
summary_en: ""
abstract_ja: >-
  平方が $2d$、divisibilityが $t$ の偏極をもつHilb$^n$(K3)型およびKum$^n$型hyperkähler多様体のモジュライ空間 $\Sigma_{d,t}^n$ と $\Upsilon_{d,t}^n$ を考える。一般の偏極の基点自由性と非常に豊富であるための条件を研究し、モジュライ空間が連結となる場合と非空性を特徴づける公式を与える。
abstract_source_url: "https://arxiv.org/abs/2602.12439"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2602.12439](https://arxiv.org/abs/2602.12439)
- **著者:** Alessandro Pilastro
- **初回投稿日:** 2026年2月12日
- **最終更新日:** 2026年2月12日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

Fujita予想は、$n$ 次元コンパクト複素多様体上のample線束 $L$ に対し、$K_X\otimes L^{\otimes m}$ が $m\ge n+1$ で基点自由、$m\ge n+2$ で非常に豊富になると予想する。本論文は、標準的な二系列のhyperkähler多様体について、より具体的な偏極自体の正値性を調べる。

対象は偏極のBeauville–Bogomolov平方が $2d$、divisibilityが $t$ のHilb$^n$(K3)型とKum$^n$型のモジュライである。$d,n,t$ の明示的な不等式の下で、ある連結成分の一般点における基点自由性・非常に豊富性を確立する。

方法は、K3曲面またはAbel曲面のHilbert scheme上にtautological vector bundleから所望の偏極を構成し、基点自由性と非常に豊富性が族で開条件であることを使って同じ連結成分の一般点へ移すものである。モジュライの連結性が既知の場合には、結果が一般点全体へ及ぶ。

## 背景と問題設定

$\Sigma_{d,t}^n$ と $\Upsilon_{d,t}^n$ を、それぞれHilb$^n$(K3)型とKum$^n$型の偏極hyperkähler多様体のモジュライ空間とする。偏極 $H$ は平方 $2d$、divisibility $t$ をもつ。従来は低い次元や $t=1,2$ などで結果が得られていたが、本論文は両系列の全divisibilityを統一的に扱う。

## 主結果

### 基点自由性と非常に豊富性（Theorem 0.1）

$n,t,d$ を正整数、$n\ge2$ とする。$t>1$ の場合に $\tau=t^2/(2(t-1))$ と置くと、Introductionの記法に従って特に次の十分条件が与えられる。

- $d\ge(\tau-1)n+\tau+1$ なら、$\Sigma_{d,t}^n$ のある連結成分の一般の偏極 $H$ は基点自由で、$H^{n+2}$ は非常に豊富である。
- $d\ge(\tau-1)n+2\tau+1$ なら、$\Sigma_{d,t}^n$ のある連結成分の一般の偏極は非常に豊富である。
- $d\ge(\tau-1)n+2\tau-1$ なら、$\Upsilon_{d,t}^n$ のある連結成分で $H$ は一般に基点自由、$H^{n+2}$ は非常に豊富である。
- $d\ge(\tau-1)n+3\tau-1$ なら、$\Upsilon_{d,t}^n$ のある連結成分の一般の偏極は非常に豊富である。

これらは該当するモジュライ空間が非空である場合の主張である。論文はさらに非空性を特徴づける公式をProposition 5.10で与え、個別の場合に上の評価を改善できるようにする。

## 証明の見取り図

曲面 $S$ 上の線束 $L$ からHilbert scheme $S^{[n]}$ 上のtautological bundle $L^{[n]}$ を作り、そのGrassmannianへの写像と行列式線束を調べる。これにより所望の基点自由または非常に豊富な偏極をもつモジュライ点を一つ構成する。次にこれらの性質が族で開であることを使い、その連結成分の一般点へ結論を広げる。

## 原論文との対応

- **Abstractページ:** [arXiv:2602.12439](https://arxiv.org/abs/2602.12439)
- **Introduction:** unnumbered Introduction, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorem 0.1, Proposition 5.10
- **論文構成の説明:** Introduction, p. 2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
