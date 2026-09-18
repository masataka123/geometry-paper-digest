---
layout: paper
title: "On the ACC for Minimal Log Discrepancies for Bounded Generalized Sub-Pairs"
title_ja: "有界な一般化sub-pairのminimal log discrepancyに対するACC"
authors: "Weichung Chen, Keng-Hung Steven Lin"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We show that the ACC conjecture for minimal log discrepancies holds for both bounded generalized sub-pairs in arbitrary dimension and bounded threefolds with arbitrary boundaries.
topic: algebraic-geometry
tags:
  - singularities
  - birational-geometry
  - minimal-model-program
arxiv_id: "2609.20515v1"
arxiv_url: "https://arxiv.org/abs/2609.20515"
arxiv_submitted: "2026-09-17"
arxiv_updated: "2026-09-17"
summary: >-
  minimal log discrepancyの昇鎖条件を、有界な一般化sub-pairについて任意次元で証明する。さらに有界なlc三次元pairでは境界係数を任意の固定DCC集合から取れる形のACCを得て、flip停止問題に関わる既知の適用範囲を広げる。
abstract_en: ""
summary_en: >-
  The paper proves ascending-chain statements for minimal log discrepancies in two bounded settings. One theorem treats generalized sub-pairs in arbitrary dimension under explicit degree, coefficient, and divisor bounds. A second theorem handles bounded log-canonical threefold pairs whose boundary coefficients lie in a prescribed DCC set. These results enlarge the classes for which a central finiteness prediction of the minimal model program is known.
abstract_ja: >-
  有界な一般化sub-pairについて、次元を固定した任意次元でminimal log discrepancyのACCを証明する。また、次数が有界なlc三次元pairと任意のDCC境界係数集合に対してもACC集合を構成する。
abstract_source_url: "https://arxiv.org/abs/2609.20515"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.20515](https://arxiv.org/abs/2609.20515)
- **著者:** Weichung Chen, Keng-Hung Steven Lin
- **初回投稿日・最終更新日:** 2026年9月17日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

minimal log discrepancy（mld）の昇鎖条件は、極小モデル・プログラムにおけるflip停止予想と結び付く基本問題である。IntroductionはShokurovの結果として、固定次元・DCC係数集合に対するmldのACCと、mld関数の下半連続性からflip停止が従うことを説明する。

従来は曲面、toric pair、Gorenstein index固定の場合、滑らかな三次元多様体、固定された三次元多様体などでACCが知られていた。本論文は対象を「有界」という幾何的条件で統制し、一般化sub-pairでは任意次元、通常のpairでは三次元で新しいACCを示す。

一般化sub-pairの定理では、非常に豊富な因子 $H$ の次数、境界の正負部分、nef partの係数を明示的に制御する。三次元定理ではlcを仮定する一方、境界係数は固定した任意のDCC集合に属してよい。

## 背景と問題設定

集合がACCを満たすとは、真に増加する無限列を含まないことをいう。mldが取り得る値の増加方向を離散化するこの性質は、双有理変換が無限に続かないことを示す枠組みの一部となる。

## 主結果

### 有界な一般化sub-pair（Theorem 1.2）

自然数 $d,n$ とDCC集合 $I\subseteq\mathbb R_{\geq0}$ を固定する。$d$ 次元 $\mathbb Q$-factorial一般化sub-pair $(X,B+\mathbf M)$ で、$B=E-F$（$E,F$ は有効、$F$ は整係数）、非常に豊富な $H$ が

$$
H^d\leq n,\qquad H-(E+F+\mathbf M)\geq0
$$

を満たし、$E$ と $\mathbf M$ の係数が $I$ に属するものを考える。この族の $\operatorname{mld}(X,B+M)$ の集合はACCを満たす。

### 有界な三次元pair（Theorem 1.3）

DCC集合 $I\subseteq\mathbb R_{>0}$ と $N>0$ を固定するとACC集合 $J(I,N)$ が存在する。三次元lc pair $(X,B)$ が $\operatorname{coeff}(B)\in I$ を満たし、$H^3\leq N$ となる非常に豊富な因子 $H$ をもてば、

$$
\operatorname{mld}(X,B)\in J(I,N)
$$

となる。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.20515](https://arxiv.org/abs/2609.20515)
- **Introduction:** Section 1
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2, 1.3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
