---
layout: paper
title: "On the symplectic forms of Groechenig's Higgs moduli over an elliptic curve"
title_ja: "楕円曲線上の Groechenig の Higgs モジュライとシンプレクティック形式"
authors: "Zelin Jia"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.SG
arxiv_abstract: >-
  Gorsky, Nekrasov, and Rubtsov introduced the moduli space of marked Higgs bundles over an elliptic
  curve $E$ and identified it with the Hilbert scheme of points on the cotangent bundle. Later,
  Groechenig constructed four analogous isomorphisms on marked rational curves, of affine Dynkin types
  $\wt D_4$, $\wt E_6$, $\wt E_7$, and $\wt E_8$, for the $Γ$-Hilbert schemes of $T^*E$ for cyclic
  groups $Γ$ with $|Γ|\in\{2,3,4,6\}$. We prove that the isomorphisms in all five cases are
  holomorphic symplectomorphisms.
topic: algebraic-geometry
tags:
  - moduli
  - higgs-nonabelian-hodge
  - symplectic-contact-geometry
arxiv_id: "2608.12093v1"
arxiv_url: "https://arxiv.org/abs/2608.12093"
arxiv_submitted: "2026-08-12"
arxiv_updated: "2026-08-12"
summary: >-
  楕円曲線の余接束から作る Hilbert scheme と、放物 Higgs 束のモジュライ空間との既知の同型が、複素多様体としてだけでなく正則シンプレクティック多様体としても同型であることを示す。有限巡回群の位数が 1, 2, 3, 4, 6 の五つの場合を統一し、Hilbert scheme 上に Hitchin 系を与える。
abstract_en: >-
  Gorsky, Nekrasov, and Rubtsov introduced the moduli space of marked Higgs bundles over an elliptic curve $E$ and identified it with the Hilbert scheme of points on the cotangent bundle. Later, Groechenig constructed four analogous isomorphisms on marked rational curves, of affine Dynkin types $\wt D_4$, $\wt E_6$, $\wt E_7$, and $\wt E_8$, for the $Γ$-Hilbert schemes of $T^*E$ for cyclic groups $Γ$ with $|Γ|\in\{2,3,4,6\}$. We prove that the isomorphisms in all five cases are holomorphic symplectomorphisms.
summary_en: ""
abstract_ja: >-
  Gorsky–Nekrasov–Rubtsov は、楕円曲線 $E$ 上の標点付き Higgs 束のモジュライ空間を導入し、余接束の点の Hilbert scheme と同一視した。Groechenig は後に、位数 $2,3,4,6$ の巡回群 $\Gamma$ に対する $T^*E$ の $\Gamma$-Hilbert scheme について、アフィン Dynkin 型 $\widetilde D_4,\widetilde E_6,\widetilde E_7,\widetilde E_8$ に対応する四つの同型を構成した。本論文は、これらを含む五つすべての同型が正則シンプレクティック同型であることを証明する。
abstract_source_url: "https://arxiv.org/abs/2608.12093"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.12093](https://arxiv.org/abs/2608.12093)
- **著者:** Zelin Jia
- **初回投稿日:** 2026年8月12日
- **最終更新日:** 2026年8月12日
- **主分類・副分類:** math.AG（主分類）, math.SG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

出発点は、複素楕円曲線 $E$ と原点を保つ有限巡回群 $\Gamma\subset\operatorname{Aut}(E,o)$ である。可能な位数は $1,2,3,4,6$ で、$\Gamma$ は余接束 $T^*E$ に自然に作用する。商 $T^*E/\Gamma$ のクレパント解消 $S_\Gamma=\Gamma\text{-Hilb}(T^*E)$ と、その $m$ 点 Hilbert scheme $S_\Gamma^{[m]}$ が幾何側の対象となる。

一方、Gorsky–Nekrasov–Rubtsov と Groechenig の先行研究は、$S_\Gamma^{[m]}$ を標点付き楕円曲線または標点付き有理曲線上の安定放物 Higgs 束のモジュライ空間 $M_{\Gamma,m}$ と同一視していた。ただし、その同型が両辺の自然な正則シンプレクティック形式まで保つかは別に確認すべき問題だった。

本論文の主結果は、この五系列の同型がすべて正則シンプレクティック同型であるというものだ。Higgs モジュライ側では変形理論から得られる形式を、Hilbert scheme 側では $S_\Gamma$ の正則シンプレクティック形式から誘導される形式を用い、両者が引き戻しで一致することを示す。

この適合性により、Hitchin 写像を $S_\Gamma^{[m]}$ 側へ移し、Hilbert scheme 上の代数的完全可積分系として解釈できる。したがって結果は既知のモジュライ同型を強化するだけでなく、二つの構成に含まれるシンプレクティック幾何と可積分系を結び付ける。

## 背景と問題設定

$|\Gamma|>1$ のとき $E/\Gamma\simeq\mathbb P^1$ であり、商曲面 $X_\Gamma=T^*E/\Gamma$ は有理二重点をもつ。$S_\Gamma$ はその一意的なクレパント解消で、$\widetilde D_4,\widetilde E_6,\widetilde E_7,\widetilde E_8$ の四系列に対応する。$|\Gamma|=1$ の場合は $S_\Gamma=T^*E$ である。

余接束上の標準形式は局所座標 $(z,\xi)$ で $\omega_E=d\xi\wedge dz$ と書け、$\Gamma$ 作用 $(z,\xi)\mapsto(\zeta z,\zeta^{-1}\xi)$ の下で不変である。この形式は商の滑らかな部分へ降下し、クレパント解消上の非退化正則二形式 $\omega_{S_\Gamma}$ へ延長する。その一方、放物 Higgs モジュライ上には変形複体と Serre 双対性に由来する形式 $\Omega_{M_{\Gamma,m}}$ がある。問題は、相対 Fourier–Mukai 変換から構成された既知の同型が、この二形式を一致させるかである。

## 主結果

### 主定理（Theorem 1.1）

結論は、Groechenig の同型が五系列すべてで正則シンプレクティック同型になることである。具体的に、$|\Gamma|\in\{1,2,3,4,6\}$、$m\geq1$ とし、既知の同型を

$$
\Phi_{\Gamma,m}:S_\Gamma^{[m]}\xrightarrow{\sim}M_{\Gamma,m}
$$

とすると、

$$
\Phi_{\Gamma,m}^*\Omega_{M_{\Gamma,m}}=\omega_{S_\Gamma^{[m]}}
$$

が成り立つ。ここで右辺は $S_\Gamma$ の形式から Hilbert scheme に誘導される正則シンプレクティック形式である。従来の同型がモジュライ点の対応だけでなく、各空間に本来的な二形式も厳密に保つことが新しい内容である。

### Hitchin 系への帰結

主定理の帰結として、論文は Hitchin 写像を Hilbert scheme 上の写像

$$
h_{\Gamma,m}:S_\Gamma^{[m]}\longrightarrow\mathbb A^m
$$

として構成する。これにより $S_\Gamma^{[m]}$ は Hitchin 系として代数的完全可積分系をもつ。

## 証明の見取り図

Introduction が示す中心的方針は、まず被約スペクトル曲線に対応する開部分で両側のシンプレクティック形式を明示的に計算し、一致を確認することにある。Higgs 側の形式は変形理論から、曲面・Hilbert scheme 側の形式は余接束の標準形式から追跡される。

その後、この開部分での一致を全モジュライ空間へ延長する。論文は自明群の場合と四つの非自明な商の場合を分けて扱い、最後に Hitchin 写像との適合性を確認する。この記事では Introduction に提示されたこの論理経路までを扱い、後続節の計算自体は再構成していない。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.12093](https://arxiv.org/abs/2608.12093)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 1.1
- **論文構成の説明:** p. 1（Contents）
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
