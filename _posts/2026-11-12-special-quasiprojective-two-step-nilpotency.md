---
layout: paper
title: Virtual Two-Step Nilpotency of the Fundamental Groups of Special Quasi-Projective Varieties
title_ja: 特殊準射影多様体の基本群の仮想二段冪零性
authors: Tianshu Jiang, Jiayu Li
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We prove that the fundamental group of every smooth connected complex quasi-projective variety that is special in the sense of Campana is virtually nilpotent of class at most two. This establishes the two-step nilpotency conjecture of Cao--Deng--Hacon--Păun, a quasi-projective analogue of Campana's almost abelian conjecture for special compact Kähler manifolds. Examples of Cadorel--Deng--Yamanoi show that the step bound is sharp. On a suitable finite etale cover, we construct a canonical second Albanese map to a torus torsor over an abelian variety. The proof reduces to showing that the kernel of the induced map on fundamental groups is finite. Using good minimal models and meridian groups of projective pairs, we show that an infinite kernel would yield a saturated rank-one subsheaf of logarithmic differentials whose Iitaka dimension contradicts specialness.
topic: algebraic-geometry
tags:
- fundamental-groups
- minimal-model-program
arxiv_id: 2611.14283v1
arxiv_url: https://arxiv.org/abs/2611.14283
arxiv_submitted: '2026-11-10'
arxiv_updated: '2026-11-10'
summary: Campanaの意味で特殊な滑らかな複素準射影多様体の基本群が、有限指数部分群を取れば二段以下の冪零群になることを示す。第二Albanese写像の基本群上の核を、対数微分形式と極小モデル理論を用いて有限に抑える。
abstract_en: ''
summary_en: Campana specialness rules out sufficiently positive rank-one subsheaves of logarithmic differentials. The authors turn that restriction into a statement about the entire fundamental group, beyond previously controlled linear images. A second Albanese construction separates a two-step nilpotent quotient from a kernel that must be proved finite. The contradiction for an infinite kernel uses projective pairs and their minimal models.
abstract_ja: 準射影多様体の特殊性から基本群全体の構造を制約する論文である。適切な有限エタール被覆上で、アーベル多様体上のトーラス・トーサーへの第二Albanese写像を構成し、その基本群写像の核が有限であることを示す。核が無限なら対数微分形式の中に特殊性と両立しない階数一の部分層が生じる、という背理法が中心となる。得られる冪零度二という上限は既知の例により最良である。
abstract_source_url: https://arxiv.org/abs/2611.14283
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.14283v1](https://arxiv.org/abs/2611.14283)
- **著者:** Tianshu Jiang, Jiayu Li
- **初回投稿日:** 2026-11-10
- **最終更新日:** 2026-11-10
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

特殊多様体は、一般型の対象へ向かう正値的な微分形式が乏しい空間として捉えられる。その幾何学的な乏しさが、基本群の非可換性をどこまで制限するかが本論文の問題である。

著者らは、滑らかで連結な複素準射影多様体がCampanaの意味で特殊なら、その基本群は有限指数部分群を取ることで二段以下の冪零群になると示す。これはCao–Deng–Hacon–Păunの二段冪零性予想を解決するという主張であり、線形表現の像だけでなく基本群そのものを扱う。

準射影の場合には、コンパクトな場合と異なり仮想可換性までは期待できない。Introductionが挙げるCadorel–Deng–Yamanoiの例は、二段という上限を一段へ改善できないことを示している。境界の周囲の局所群を正確に残すことが、証明の重要な部分となる。

## 背景と問題設定

滑らかな射影コンパクト化 $\bar X$ を取り、境界 $D=\bar X\setminus X$ を単純正規交叉因子とする。特殊性は、各 $1\le p\le\dim X$ と飽和階数一部分層 $L\subset\Omega^p\_{\bar X}(\log D)$ について

$$
\kappa(\bar X,L)<p
$$

が成り立つという条件である。十分に大きな飯高次元をもつ対数微分の存在を排除している。

既存の線形表現に関する結果は、基本群の線形像の仮想二段冪零性を与える。しかし線形像の制御だけでは、写像の核に隠れた非可換な部分を排除できない。本論文はこの核を直接扱う。

## 主結果

### 基本群の仮想二段冪零性（Theorem 1.1）

滑らかで連結な複素準射影多様体 $X$ が特殊なら、$\pi\_1(X)$ は有限指数部分群 $\Gamma\_0$ をもち、

$$
[\Gamma\_0,[\Gamma\_0,\Gamma\_0]]=\lbrace 1\rbrace
$$

となる。したがって交換子部分群は中心に含まれる。ここで有限指数部分群への移行は結論の一部であり、元の基本群がそのまま二段冪零であるとは述べていない。

新規性は、準射影の境界を許した特殊多様体について、基本群全体の構造を確定する点にある。二段以下という結論は、可換な場合と真に二段の非可換な場合の双方を含む。

## 証明の見取り図

まず第一Betti数が最大となる有限エタール被覆 $Y\_0$ を選び、アーベル多様体上のトーラス・トーサー $Q\_0$ への標準的な第二Albanese写像を構成する。基本群には

$$
1\longrightarrow P\_0\longrightarrow G\_0\longrightarrow E\_0\longrightarrow1
$$

が現れ、$E\_0=\pi\_1(Q\_0)$ は捩れのない二段冪零群となる。核 $P\_0$ は有限生成で、有限指数部分群も有限アーベル化をもつというFAb性質を満たす。目標は $P\_0$ の有限性である。

核が無限と仮定し、一般ファイバーに由来する群を商に取る操作とShafarevich型の収縮を組み合わせ、無限FAb商を保つ最小の状況へ還元する。このとき、境界成分の周囲のmeridianの実際の位数を係数に反映した射影対を用いる。単なる境界の集合だけでは群の情報が失われる。

良い極小モデルとMori型の議論により、残った重み付きファイバーの対数標準類が大きくなる。そこから得られる対数切断を引き戻すと、ある $b>0$ に対し $\Omega^b(\log D)$ の飽和階数一部分層で飯高次元が少なくとも $b$ のものが構成される。これは特殊性に矛盾する。

核が有限と分かれば、それを避ける適切な有限指数部分群を取って二段冪零商に埋め込める。Introductionの説明において、極小モデル理論は単に多様体を簡単化する道具ではなく、無限の群論的核から正値的な対数微分を作る橋渡しを担う。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.14283)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.14283v1) — Section 1, pp. 2–7
- **Introduction中で言及された主要結果:** Theorem 1.1
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.14283v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
