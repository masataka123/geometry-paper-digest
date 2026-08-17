---
layout: paper
title: "Varieties with Ulrich exterior powers of the tangent bundle"
title_ja: "接束の外冪がUlrichとなる多様体"
authors: "Yuta Takahashi, Kiwamu Watanabe"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.AC
arxiv_abstract: >-
  We study smooth polarized projective varieties $(X,H)$ whose exterior powers of the tangent bundle
  are Ulrich. We prove that if $\bigwedge^rT_X$ is $H$-Ulrich for some $0<r<\dim X$, then $X$ is Fano
  and the intersection number $(-K_X)\cdot H^{n-1}$ is determined explicitly. We then classify the
  Picard number one case: the only example is the Veronese surface $(\mathbb P^2,\mathcal O_{\mathbb
  P^2}(2))$.
topic: algebraic-geometry
tags:
  - vector-bundles-sheaves
  - fano-varieties
arxiv_id: "2606.27851v1"
arxiv_url: "https://arxiv.org/abs/2606.27851v1"
arxiv_submitted: "2026-06-26"
arxiv_updated: "2026-06-26"
summary: >-
  滑らかな偏極射影多様体 $(X,H)$ で接束の中間外冪 $\bigwedge^rT_X$ が $H$-Ulrich となる場合を調べる。論文は $X$ がFanoであることと反標準因子の交点数を決定し、Picard数1なら唯一の例がVeronese曲面 $(\mathbb P^2,\mathcal O_{\mathbb P^2}(2))$ であると分類する。
abstract_en: ""
summary_en: >-
  This paper studies smooth polarized projective varieties for which an intermediate exterior power of the tangent bundle is Ulrich. The Ulrich condition forces the variety to be Fano and fixes an anticanonical intersection number. When the Picard number is one, a combination of index bounds and Hodge-theoretic nonvanishing leaves only the Veronese surface with its quadratic polarization. The argument highlights rigidity that is stronger than the nefness of the same exterior power.
abstract_ja: >-
  滑らかな偏極射影多様体において、接束の中間外冪がUlrich束となる条件の剛性を研究する。この条件から多様体がFanoであること、反標準因子と偏極の交点数が明示的に決まることを示す。さらにPicard数1の場合を完全分類し、二次偏極を備えた射影平面だけが現れることを証明する。
abstract_source_url: "https://arxiv.org/abs/2606.27851v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2606.27851v1](https://arxiv.org/abs/2606.27851v1)
- **著者:** Yuta Takahashi, Kiwamu Watanabe
- **初回投稿日:** 2026年6月26日
- **最終更新日:** 2026年6月26日（v1）
- **主分類・副分類:** Algebraic Geometry (math.AG); Commutative Algebra (math.AC)
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

$H$ を滑らかな $n$ 次元射影多様体 $X$ のvery ample因子とする。ベクトル束 $E$ が $H$-Ulrichであるとは、$1\leq i\leq n$ と全ての $q$ に対して $H^q(X,E(-iH))=0$ となることである。Ulrich束は大域生成され、slope半安定でもある。

既知の分類では接束 $T_X$ 自身がUlrichとなる例は極めて限られる。本論文はこれを中間外冪 $\bigwedge^rT_X$ へ拡張する。外冪のnef性だけでは接束のnef性は従わないため、接束の場合の斉次空間論をそのまま使えない点が本質的である。

第一の主結果は、$0<r<n$ で $\bigwedge^rT_X$ が $H$-Ulrichなら $X$ がFanoとなり、反標準因子の交点数も一意に決まるという構造定理である。さらに $\rho(X)=1$ ならVeronese曲面以外をすべて排除する。

## 背景と問題設定

nefな $\bigwedge^rT_X$ をもつ多様体には、有限étale被覆の後でAbel多様体上のFano fiber spaceになるという構造定理がある。Ulrich条件から得られるslope半安定性は、この構造に残る正次元のAbel底を排除するために使われる。

## 主結果

### Fano性と交点公式（Theorem 1.1 = Theorem 3.2）

$n\geq2$、$H$ はvery ample、$0<r<n$ とする。$\bigwedge^rT_X$ が $H$-Ulrichなら $X$ はFanoであり、

$$
(-K_X)\cdot H^{n-1}=\frac{n(n+1)}{n+2r}H^n
$$

が成り立つ。単に左辺が正というだけでなく、$-K_X$ のample性まで導く点が重要である。

### Picard数1の分類（Theorem 1.2 = Theorem 5.4）

上の仮定に加えて $\rho(X)=1$ なら、

$$
(X,H)\simeq (\mathbb P^2,\mathcal O_{\mathbb P^2}(2)).
$$

逆に $T_{\mathbb P^2}$ は $\mathcal O_{\mathbb P^2}(2)$-Ulrichである。したがって高い外冪を許してもPicard数1の新しい例は生じない。

## 証明の見取り図

Theorem 1.1では、Ulrich束のnef性から既存の構造定理を適用し、相対接束列が外冪に与えるfiltrationとslope半安定性を組み合わせてAbel底を消去する。交点公式はUlrich束の第一Chern類公式と $c_1(\bigwedge^rT_X)=\binom{n-1}{r-1}c_1(T_X)$ から得る。

Picard数1では $\operatorname{Pic}(X)=\mathbb Z[L]$、$-K_X=i_XL$、$H=aL$ と書き、第一の定理とKobayashi--Ochiaiのindex boundから $a=1,2$ に絞る。$H^p(X,\Omega_X^p)\ne0$ と $\bigwedge^rT_X\simeq\Omega_X^{n-r}\otimes\mathcal O_X(-K_X)$ による障害が $a=1$ を排除し、残る場合をparity、index、Hilbert多項式、Kodaira消滅などでVeronese曲面へ縮約する。

## 原論文との対応

- **Abstractページ:** [arXiv:2606.27851v1](https://arxiv.org/abs/2606.27851v1)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.1 and 1.2
- **論文構成の説明:** Introduction, p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
