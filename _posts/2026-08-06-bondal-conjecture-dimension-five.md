---
layout: paper
title: "Bondal's conjecture in dimension five"
title_ja: "5次元におけるBondal予想"
authors: "Stéphane Druel, Jorge Vitório Pereira, Brent Pym, Frédéric Touzet"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.SG
topic: algebraic-geometry
tags:
  - vector-bundles-sheaves
  - fano-varieties
  - foliations
arxiv_id: "2606.03424v1"
arxiv_url: "https://arxiv.org/abs/2606.03424v1"
arxiv_submitted: "2026-06-02"
arxiv_updated: "2026-06-02"
summary: >-
  Poisson Fano多様体でPoisson構造の階数が落ちる退化軌跡について、Bondal予想を5次元で証明する。より一般に奇数次元の劣最大退化軌跡へ下界を与え、葉層の代数的可積分性、modular residue、Pfaff場のコホモロジー制約を組み合わせる。
abstract_en: >-
  Bondal's conjecture in Poisson geometry gives lower bounds on the degeneracy loci of Poisson Fano manifolds, where the rank of the Poisson structure drops. By work of several authors, it was previously known to hold for Fano manifolds of dimension at most four. We give the first proof of this conjecture for Fano manifolds of dimension five, and partial results for Fano manifolds of all odd dimensions. The proof uses: (i) an algebraic integrability criterion for codimension-one foliations on weak Fano manifolds, extending a previous result of the first author; (ii) the "modular residues" of Poisson structures introduced by Gualtieri and the third author; and (iii) a cohomological constraint on invariant subvarieties for Pfaff fields, extending earlier results of Esteves--Kleiman to the case in which the Pfaff distribution on the subvariety admits a closed strongly directed positive current.
summary_en: ""
abstract_ja: >-
  Poisson Fano多様体におけるPoisson構造の階数低下軌跡に対するBondal予想を、5次元で初めて証明する。また、任意の奇数次元では劣最大退化軌跡について部分的な結果を得る。証明には、弱Fano多様体上の余次元1葉層の代数的可積分性判定、Poisson構造のmodular residue、Pfaff場に不変な部分多様体へのコホモロジー的制約を用いる。
abstract_source_url: "https://arxiv.org/abs/2606.03424v1"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2606.03424v1](https://arxiv.org/abs/2606.03424v1)
- **著者:** Stéphane Druel, Jorge Vitório Pereira, Brent Pym, Frédéric Touzet
- **初回投稿日・最終更新日:** 2026年6月2日
- **主分類・副分類:** math.AG（主分類）, math.SG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

複素多様体 $X$ 上の正則Poisson構造 $\sigma$ に対し、$D_{2k}(\sigma)$ は $\operatorname{rank}\sigma\leq 2k$ となる退化軌跡であり、Pfaffian $\sigma^{k+1}$ の零点として定まる。Bondal予想は、$X$ がFanoなら $0\leq 2k<\dim X$ の各 $k$ について、$D_{2k}(\sigma)$ が次元 $2k+1$ 以上の既約成分を持つと主張する。

従来、4次元以下では予想が知られていた。論文は奇数次元 $2n+1$ の「劣最大」軌跡 $D_{2n-4}(\sigma)$ に必要な次元下界を証明し、とくに5次元では残るすべての場合を埋める。

議論はPoisson構造の像から得る余次元1葉層の特異集合で場合分けする。特異集合の余次元が3以上なら一般の葉の閉包をFano多様体として扱い、余次元2ならmodular residueとPfaff場のコホモロジー制約によって小さすぎる退化軌跡を排除する。

## 背景と問題設定

$D_{2k}(\sigma)$ は高々$2k$次元のsymplectic leafの合併である。一般の歪対称行列の退化軌跡から予想されるよりも、Fano性という正曲率条件のもとではこの集合が大きくなる、というのがBondal予想の核心である。奇数次元の最大退化軌跡や偶数次元の最大・劣最大の場合には先行結果があったが、奇数次元の劣最大の場合が残っていた。

## 主結果

### 主定理（Theorem 1.2 / Theorem 4.3）

$X$ を次元 $2n+1$（$n>1$）のFano多様体、$\sigma$ をそのPoisson構造とする。このとき

$$D_{2n-4}(\sigma)$$

は次元少なくとも $2n-3$ の既約成分を持つ。$\dim X=5$ ではこの定理と既知の最大退化軌跡の結果により、Bondal予想全体が従う（Corollary 1.3）。

### 葉層の可積分性（Theorem 1.4 / Theorem 2.5）

$X$ が弱Fanoで、余次元1の正則葉層 $\mathcal F$ の特異集合が余次元3以上なら、$\mathcal F$ は既約ファイバーを持つ射 $X\to\mathbf P^1$ のファイバーが定める葉層である。これは主定理のうち、Poisson葉層の特異集合が小さい場合を代数的ファイブレーションへ帰着させる。

### Poisson葉の閉包への制約（Proposition 1.5）

コンパクトKähler多様体 $X$ の閉部分多様体 $S\subset Y\subset X$ で、$Y\setminus S$ がsymplectic leafかつ $\operatorname{codim}(S,Y)\geq2$ なら

$$h^{0,\dim Y}(X)>0$$

である。Fano多様体ではこの種の正則形式が消えるため、退化軌跡が過度に小さいという配置を排除できる。

## 証明の見取り図

まず一般階数を $2n$ として、$\sigma$ の縮約写像の像を飽和して余次元1葉層 $\mathcal F$ を作る。$\operatorname{sing}(\mathcal F)$ の余次元が3以上ならTheorem 1.4により一般葉の閉包をFanoとして、偶数次元の既知の退化結果を適用する。余次元2の場合は、その各成分の次元に応じて、modular vector fieldが与えるresidueと、Pfaff場に沿う正カレントから導くコホモロジー制約を使い分ける。

## 原論文との対応

- **Abstractページ:** [arXiv:2606.03424v1](https://arxiv.org/abs/2606.03424v1)
- **Introduction:** Section 1, pp. 2–3
- **主要結果:** Conjecture 1.1, Theorem 1.2, Corollary 1.3, Theorem 1.4, Proposition 1.5
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
