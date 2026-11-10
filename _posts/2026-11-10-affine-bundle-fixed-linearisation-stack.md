---
layout: paper
title: The moduli stack of affine bundles with fixed linearisation type
title_ja: 線形化を固定したアフィン束のモジュライスタック
authors: Naoufal Bouchareb, Andrei Teleman
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
arxiv_abstract: "The goal of this article is the classification of affine bundles with fixed linearisation type over a compact complex manifold $X$. More precisely, let $E$ be a fixed holomorphic vector bundle over $X$ and $\\mathcal{E}$ the associated locally free sheaf. We will assume that there exists an effective divisor $D$ on $X$ such that $H^1(X,\\mathcal{E}(D))=0$. This condition is always satisfied when $X$ is a projective complex manifold.\n  We define in a natural way the moduli stack of affine bundles on $X$ whose linearisation is isomorphic to $E$, and we prove that this moduli stack is isomorphic to the quotient stack $\\big[H^0(X,\\mathcal{E}(D)_D)/H^0(X,\\mathcal{E}(D))\\ltimes \\mathrm{Aut}(E)\\big]$ of the complex vector space $H^0(X,\\mathcal{E}(D)_D)$ by the semi-direct product of the automorphism group $\\mathrm{Aut}(E)$ (which is always an affine algebraic group) by the complex vector space $H^0(X,{\\cal E}(D))$. Our isomorphism is obtained by constructing explicitly\
  \ comparison functors $\\mathscr{A}$, $\\mathscr{T}$ between the two stacks and explicit natural isomorphisms $\\mathscr{A}\\circ\\mathscr{T}\\stackrel{\\simeq}{\\longrightarrow} \\mathrm{id}$, $\\mathrm{id} \\stackrel{\\simeq}{\\longrightarrow}\\mathscr{T}\\circ\\mathscr{A}$."
topic: algebraic-geometry
tags:
- vector-bundles-sheaves
- moduli
- complex-analytic-spaces
arxiv_id: 2611.10879v1
arxiv_url: https://arxiv.org/abs/2611.10879
arxiv_submitted: '2026-11-07'
arxiv_updated: '2026-11-07'
summary: コンパクト複素多様体上で線形化が固定された正則アフィン束を、明示的なベクトル空間と代数群の商スタックで分類する。適当な有効因子でH¹が消えることを仮定し、同型類の集合では捉えにくい自己同型と族を保持した記述を与える。
abstract_en: ''
summary_en: Bouchareb and Teleman address affine bundles whose associated vector bundle has a fixed type. Because their isomorphism classes need not form a natural complex space, they retain families and automorphisms in a holomorphic stack. A cohomology-vanishing divisor yields a concrete quotient presentation. The comparison is constructed at the level of groupoids over arbitrary complex parameter spaces.
abstract_ja: コンパクト複素多様体Xと正則ベクトル束Eを固定し、その切断層を𝓔とする。有効因子DでH¹(X,𝓔(D))=0となるとき、線形化がEに局所的に同型なアフィン束のスタックを、H⁰(X,𝓔(D)_D)のH⁰(X,𝓔(D))⋊Aut(E)による商として実現する。両方向の比較関手と自然同型を明示的に構成する。
abstract_source_url: https://arxiv.org/abs/2611.10879
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.10879v1](https://arxiv.org/abs/2611.10879)
- **著者:** Naoufal Bouchareb, Andrei Teleman
- **初回投稿日:** 2026-11-07
- **最終更新日:** 2026-11-07
- **主分類・副分類:** math.AG（主分類）; math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

アフィン束は局所的にはベクトル空間のように見えるが、原点を持たず、遷移写像には線形変換と平行移動の両方が現れる。線形部分から得られるベクトル束を固定しても、アフィン束の同型類は一般に自然な複素空間をなさない。

本論文はこの分類を正則スタックで定式化する。パラメータ空間上の族と自己同型を残すことで、単なる同型類の集合では失われる構造を保持する。そのスタックに、有限次元ベクトル空間と明示的な群作用による商表示を与える。

鍵となる仮定は、有効因子で捩った切断層の$H^1$が消えることである。射影的な$X$ではそのような因子を取れる一方、任意のコンパクト複素多様体で仮定が自動的に成立するとは主張しない。

## 背景と問題設定

$X$をコンパクト複素多様体、$E$を固定した正則ベクトル束、$\mathcal E$をその切断層とする。$S\times X$上のアフィン束$A$の線形化$L(A)$が、$S$の各点の近傍で$E$の引き戻しに同型である族を考える。

$S$が被約なら各ファイバーの線形化が$E$と同型という条件に還元できるが、非被約な底も扱うスタックでは上記の局所的な族の条件を用いる。アフィン束は、核が$\mathcal E$型の全射$\widetilde E\to\mathcal O$というaugmented bundleの形でも捉えられる。

## 主結果

### 主定理（Theorem 3.9）

有効因子$D$が

$$
H^1(X,\mathcal E(D))=0
$$

を満たすとする。次を定める。

$$
V\_D=H^0(X,\mathcal E(D)\_D),\qquad
W\_D=H^0(X,\mathcal E(D)),\qquad
G\_D=W\_D\rtimes\operatorname{Aut}(E).
$$

ここで$\mathcal E(D)\_D$は$D$上の制限である。$\operatorname{Aut}(E)$はアフィン代数群で、$V\_D,W\_D$に自然に作用する。$W\_D$は自然な線形写像$W\_D\to V\_D$を介して平行移動として作用する。

線形化を固定したアフィン束の正則スタック$\mathcal{Aff}\_E$について、

$$
\mathcal{Aff}\_E\simeq[V\_D/G\_D]
$$

が成り立つ。これは同型類の全単射より強く、任意の複素パラメータ空間$S$上のgroupoidを、$G\_D$-torsorと$V\_D$への同変写像のデータに対応させる結果である。

### 先行研究との差

Weilの曲線上のアフィン直線束の分類、Enokiのclass VII曲面への応用、Plechingerのframed/unframedアフィン直線束のスタックが背景にある。本論文は線形化を固定した一般階数のアフィン束を、上記のコホモロジー条件の下で明示的な商にする。商が常に通常のHausdorffなモジュライ空間になるという主張ではない。

## 証明の見取り図

商スタックからアフィン束のスタックへの関手$\mathcal A$と、逆向きの関手$\mathcal T$を構成する。各$S$上で、アフィン束・augmented bundle・torsorの幾何学的記述を対応させ、

$$
\mathcal A\circ\mathcal T\simeq\operatorname{id},\qquad
\mathcal T\circ\mathcal A\simeq\operatorname{id}
$$

という自然同型を明示する。Introductionはこの構成方針を述べており、関手の具体的な貼り合わせは後続節に委ねられる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.10879)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.10879v1) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorem 3.9（Introduction内の主定理）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.10879v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
