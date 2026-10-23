---
layout: paper
title: Existence of Ulrich bundles on polarized surfaces and weakly Ulrich bundles on polarized varieties in positive characteristic
title_ja: 正標数におけるUlrich束と弱Ulrich束の存在
authors: Jagadish Pine
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: In their seminal paper \cite{eisenbud2003resultants}, Eisenbud and Schreyer asked whether every smooth projective variety admits an Ulrich bundle with respect to each very ample polarization. This question has stimulated extensive research for more than two decades. Recently, Anghel \cite{anghel2026smooth} constructed counterexamples over $\mathbb C$ in dimension two, and Lopez \cite{lopez2026existence} extended this nonexistence result to higher dimensions. In this article, we study the existence problem for sufficiently large multiples of a fixed polarization and derive applications in positive characteristic. Over an algebraically closed field of positive characteristic, we prove that every polarized smooth surface admits an Ulrich bundle and every polarized smooth variety admits a weakly Ulrich bundle. Consequently, the Chow forms of surfaces (resp. varieties) admit linear determinantal (resp. determinantal) representations. Moreover, for every such polarized surface,
  the cone of cohomology tables of coherent sheaves coincides with that on $(\mathbb{P}^2, \mathcal{O}_{\mathbb{P}^2}(1))$.
topic: algebraic-geometry
tags:
- vector-bundles-sheaves
- positive-characteristic
- stability
arxiv_id: 2610.28456v2
arxiv_url: https://arxiv.org/abs/2610.28456
arxiv_submitted: '2026-10-20'
arxiv_updated: '2026-10-22'
summary: 正標数の代数閉体上で、任意の滑らかな射影曲面の指定された非常に豊富な偏極に対するUlrich束を構成する。高次元では弱Ulrich束の存在を示し、Frobenius順像によって大きな偏極倍数に関する結果を元の偏極へ戻す。Chow形式の行列式表示と曲面のコホモロジー表の錐にも応用する。
abstract_en: ''
summary_en: The construction uses the Frobenius morphism to transfer cohomological vanishing from a large multiple of a polarization back to the original one. For surfaces it yields Ulrich bundles, whereas the arbitrary-dimensional statement concerns the weaker Ulrich condition. The ranks grow explicitly with the Frobenius exponent. The results also have consequences for positive powers of Chow forms and for cones of cohomology tables.
abstract_ja: 正標数の代数閉体上の滑らかな偏極射影曲面にはUlrich束が、任意次元の滑らかな偏極射影多様体には弱Ulrich束が存在することを示す。固定した偏極の十分大きな倍数に対する漸近的存在とFrobenius順像が構成の中心となる。Chow形式の正の冪の行列式表示を導き、曲面の場合には線形行列式表示と射影平面と同じコホモロジー表の錐を得る。
abstract_source_url: https://arxiv.org/abs/2610.28456
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.28456v2](https://arxiv.org/abs/2610.28456)
- **著者:** Jagadish Pine
- **初回投稿日:** 2026-10-20
- **最終更新日:** 2026-10-22
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Ulrich束は、指定された偏極に関して特定のコホモロジーが一斉に消えるベクトル束である。その存在は行列式による幾何学的な式の表示や、コホモロジー表の形に結びつく。本論文は、正標数での存在問題を扱う。

曲面については、任意の非常に豊富な偏極に対してUlrich束を構成する。高次元では条件を弱めた弱Ulrich束の存在を示す。まず偏極を十分大きくして低い固定階数の束を作り、正標数のFrobenius順像によって元の偏極に関する束へ移すため、得られる階数は増大する。

Introductionは、複素数体上での非存在結果に使われるBogomolov–Gieseker不等式が正標数では半安定性だけからは従わないことを説明する。標数0と正標数の違いを利用した構成であり、高次元でもすべてUlrich束になると主張するものではない。

## 背景と問題設定

$n$次元滑らかな射影多様体$X$、非常に豊富な因子$H$について、束$E$がUlrichであるとは

$$
H^\bullet(X,E(-tH))=0\qquad(1\leq t\leq n)
$$

となることである。弱Ulrich条件はこれより弱い消滅条件であり、その厳密な定義は本文Definition 3.1に置かれている。Introductionが記載していない消滅範囲をここでは補わない。

Ulrich束は傾き半安定だが、正標数で強半安定とは限らない。標数0の曲面上では階数$r$に対する

$$
\Delta(E)=2r c\_2(E)-(r-1)c\_1(E)^2\geq0
$$

が非存在議論に重要である一方、正標数では半安定束にこの不等式が一般には成立しない、という点が背景にある。

## 主結果

### 曲面上のUlrich束（Theorem 1.1）

標数$p>0$の代数閉体上の滑らかな射影曲面$S$と、非常に豊富な因子$H$に対し、ある$e\_0\geq1$が存在する。任意の整数$e\geq e\_0$について、元の偏極$(S,H)$上に階数

$$
2p^{2e}
$$

のUlrich束が存在する。結論は偏極を大きな倍数へ変えたままではなく、指定した$H$について得られる。

### 任意次元の弱Ulrich束（Theorem 1.2）

同じ体上の$n$次元滑らかな射影多様体$X$と非常に豊富な$H$に対し、十分大きいすべての$e$について$(X,H)$上に階数

$$
n!p^{en}
$$

の弱Ulrich束$E\_e$が存在する。ここで弱UlrichとUlrichは区別され、構成した束が高次元でUlrichであるとは限らない。

### 任意標数での漸近的存在（Theorem 1.3）

代数閉体の標数を問わず、十分大きいすべての整数$q$について$(X,qH)$に階数$n!$の弱Ulrich束$B\_q$が存在する。これは高次元の構成の出発点であり、偏極を大きくすることと束の階数を上げることを別の段階で行う。

### Chow形式とコホモロジー表（Corollary 1.1）

正標数の滑らかな射影部分多様体$X\subset\mathbb P^N$では、Chow形式の正の冪が行列式表示を持つ。曲面の場合には、正の冪が線形形式を成分とする正方行列の行列式になる。「Chow形式そのもの」と「その正の冪」を区別する必要がある。

さらに曲面では、$(X,\mathcal O\_X(1))$上の連接層のコホモロジー表が生成する錐が、$(\mathbb P^2,\mathcal O\_{\mathbb P^2}(1))$のものと一致する。

## 証明の見取り図

曲面では、十分大きい$qH$に対する階数2のUlrich束の漸近的存在をまず示し、そのFrobenius順像を用いる。高次元では有限線形射影$\pi:X\to\mathbb P^n$と有限平坦射$\rho:(\mathbb P^1)^n\to\mathbb P^n$を選び、適当な線束$\mathcal L\_q$から

$$
B\_q=\pi^*(\rho\_*\mathcal L\_q)
$$

を構成する。必要な消滅を大きい$q$で確保し、正標数では$q=p^e$と置いて

$$
E\_e=F\_*^eB\_{p^e}
$$

とする。Introductionは、関連するlim Ulrich列の構成だけから弱Ulrich性が従うわけではないことも強調する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.28456)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.28456v2) — Section 1、PDF pp. 1–2、v2。
- **Introduction中で言及された主要結果:** Theorems 1.1–1.3、Corollary 1.1。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.28456v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
