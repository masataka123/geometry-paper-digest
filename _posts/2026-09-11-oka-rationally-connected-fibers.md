---
layout: paper
title: "Analytic and Algebraic Oka-1 Approximation for Smooth Projective Morphisms with Rationally Connected Fibers"
title_ja: "有理連結ファイバーを持つ滑らかな射の解析的・代数的Oka-1近似"
authors: "Yun-Heng Du, Bin Guo, Song-Yan Xie"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.AG
arxiv_abstract: >-
  Let $π:Z\rightarrow Y$ be a smooth projective morphism of complex manifolds with connected rationally connected fibers. We prove holomorphic approximation on arbitrary compact sets and finite-jet interpolation on arbitrary closed discrete sets for continuous liftings defined on open Riemann surfaces and holomorphic near those sets. For smooth projective morphisms of smooth complex algebraic varieties and algebraic base maps from smooth affine curves, the approximating liftings can be chosen algebraic, with interpolation on any finite set. In both cases the resulting lifting is homotopic to the initial one through continuous liftings of the fixed base map. For connected smooth projective complex manifolds, this gives the equivalence between the algebraic Oka-1 property and rational connectedness. Every rationally connected smooth projective complex manifold is also Oka-1.
topic: several-complex-variables
tags:
  - oka-theory
arxiv_id: "2609.11883v1"
arxiv_url: "https://arxiv.org/abs/2609.11883"
arxiv_submitted: "2026-09-10"
arxiv_updated: "2026-09-10"
summary: >-
  有理連結ファイバーを持つ滑らかな射について、開Riemann面上の連続持ち上げを正則持ち上げで近似し、離散集合上の有限jetを補間できることを示す。代数的設定では近似する持ち上げも代数的に選べ、滑らかな射影多様体について代数的Oka-1性と有理連結性が同値になる。
abstract_en: ""
summary_en: >-
  The authors establish relative approximation and jet interpolation for liftings through smooth projective morphisms whose fibers are rationally connected. Over open Riemann surfaces the endpoint can be chosen holomorphic, while over smooth affine curves with algebraic data it can be chosen algebraic. The endpoint remains homotopic to the original lifting over the fixed base map. Specializing the base to a point identifies rational connectedness with the algebraic Oka-1 property and also implies the analytic Oka-1 property.
abstract_ja: >-
  連結な有理連結ファイバーを持つ複素多様体間の滑らかな射影射を考える。開Riemann面からの連続持ち上げが指定集合の近傍で正則なら、任意のコンパクト集合上で近似し、任意の閉離散集合上で有限jetを補間する正則持ち上げが存在する。滑らかなアフィン曲線を始域とする代数的状況では、有限集合上の補間を保った代数的持ち上げを選べる。いずれも元の持ち上げと固定した底写像の上でホモトピックである。特に連結滑らかな射影複素多様体では、代数的Oka-1性と有理連結性が同値であり、有理連結性からOka-1性も従う。
abstract_source_url: "https://arxiv.org/abs/2609.11883"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.11883](https://arxiv.org/abs/2609.11883)
- **著者:** Yun-Heng Du, Bin Guo, Song-Yan Xie
- **初回投稿日:** 2026年9月10日
- **最終更新日:** 2026年9月10日
- **主分類・副分類:** math.CV（主分類）, math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Oka-1性はRiemann面からの写像に対する近似・補間原理である。Alarcón--Forstneričは有理連結な滑らかな射影多様体がOka-1であると予想し、Forstnerič--Lárussonは代数的Oka-1性には有理連結性が必要であることを示していた。

本論文は点を底とする問題を相対化し、有理連結ファイバーを持つ滑らかな射影射を扱う。開Riemann面上で、コンパクト集合における近似と閉離散集合における点ごとの有限jet補間を同時に満たす正則持ち上げを構成する。

代数的な滑らかな射影射と滑らかなアフィン曲線上の代数的底写像に対しては、終点を代数的持ち上げに選べる。どちらの場合も、終点は固定した底写像の持ち上げのまま元の連続写像とホモトピックである。

底を一点にすると、滑らかな射影多様体の代数的Oka-1性と有理連結性の同値が得られ、有理連結多様体がOka-1であるという予想も解決される。

## 背景と問題設定

相対的問題では、正則写像 $g:R\to Y$ とその連続持ち上げ $f:R\to Z$ を出発点とする。近似集合と補間集合の近傍で $f$ が正則であるとき、射影 $\pi:Z\to Y$ に関する等式 $\pi\circ F=g$ を保ちながら、終点 $F$ を正則または代数的にできるかが問題となる。

解析的構成の幾何学的入力は、垂直接ベクトルを初期微分として実現するファイバー内の正則球面族である。有理連結性はこの球面族とファイバーの単連結性を供給する。

## 主結果

### 解析的持ち上げ定理（Theorems 1.4 and 1.5）

結論は、有理連結な連結ファイバーを持つ滑らかな射影射 $\pi:Z\to Y$ がOka-1写像になることである。開Riemann面 $R$、コンパクト集合 $K$、閉離散集合 $A$、次数関数 $q:A\to\mathbb N$ に対し、元の持ち上げ $f$ とホモトピックな正則持ち上げ $F$ で

$$
\sup_K d_Z(F,f)<\epsilon,\qquad j_a^{q(a)}F=j_a^{q(a)}f\quad(a\in A)
$$

を満たすものが存在する。$K$ はRungeである必要がなく、$A$ と $K$ の間にも包含関係を仮定しない。

### 代数的持ち上げ定理（Theorem 1.7）

滑らかな複素代数多様体間の滑らかな射影射、滑らかなアフィン曲線 $R$、代数的底写像 $g:R\to Y$ に対し、有限集合上のjet補間とコンパクト集合上の近似を満たす代数的持ち上げ $F:R\to Z$ が存在する。解析化した $F$ は元の連続持ち上げと、$g$ の持ち上げを通じてホモトピックである。

### Oka-1性の特徴づけ（Corollary 1.8）

連結滑らかな射影複素多様体 $X$ は、代数的Oka-1であることと有理連結であることが同値である。さらに有理連結な $X$ は解析的にもOka-1である。

## 証明の見取り図

解析的構成では、有理連結性から得る球面族を細い環状領域で既存の切断へ接合する。主部を固定したDolbeault作用素へ移し、残差と線形化の誤差が小さいことを用いて半線形方程式を解く。消尽法で始域を広げつつ指定jetを保持し、ファイバーの連結性と単連結性から持ち上げの延長とホモトピーを得る。

代数的構成では始域を射影完備化し、捩った第一コホモロジーが消える束を用意する。同じ切断方程式を解いた後、大域的再構成とChowの定理によって終点の代数性を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.11883](https://arxiv.org/abs/2609.11883)
- **Introduction:** Section 1, pp. 1--5
- **Introduction中で言及された主要定理番号:** Theorems 1.4, 1.5, 1.7; Corollary 1.8
- **論文構成の説明:** Section 1.4, pp. 4--5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
