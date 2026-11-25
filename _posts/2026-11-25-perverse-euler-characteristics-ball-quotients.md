---
layout: paper
title: Euler Characteristics of Perverse Sheaves on Complex Ball Quotients
title_ja: 複素球商上の偏屈層のEuler標数とシストール
authors: Mert Akdenizli, Soheil Memariansorkhabi
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: "Let $X=Γ\\backslash\\mathbb{B}^n$ be a finite-volume complex ball quotient with neat lattice. We prove that every nonzero algebraically constructible perverse sheaf on $X$ has positive Euler characteristic. More generally, we establish a criterion for strict positivity on smooth quasi-projective varieties whose logarithmic cotangent bundle is nef and admits an ample negative rational twist of the boundary divisor.\n  For perverse sheaves with positive-dimensional support, we give a lower bound in terms of the intrinsic geometry of $X$ for both proper and nonproper quotients. The bound depends on the systole of $X$ and tends to infinity with it. In particular, the minimum Euler characteristic among perverse sheaves with positive-dimensional support tends to infinity as one passes to higher levels of any cofinal normal tower of finite covers. We also deduce lower bounds for the middle intersection Betti numbers of projective subvarieties and boundedness of supports with bounded\
  \ middle intersection cohomology."
topic: algebraic-geometry
tags:
- positivity
- vector-bundles-sheaves
- hyperbolicity
arxiv_id: 2611.31124v1
arxiv_url: https://arxiv.org/abs/2611.31124
arxiv_submitted: '2026-11-23'
arxiv_updated: '2026-11-23'
summary: 有限体積の複素球商上で、非零の偏屈層のEuler標数が正になることを示す。台が正次元なら、最短閉測地線の長さからEuler標数の明示的な下界が得られる。
abstract_en: ''
summary_en: The cusps of a ball quotient prevent an immediate application of compact positivity results. The authors instead measure cotangent positivity after twisting along the boundary. Their estimates detect how the topology of a support must grow in covers with long shortest geodesics.
abstract_ja: 境界を加えたコンパクト化上で対数的余接束の正値性を調べることにより、台が非固有であっても厳密な正値性を得る。交叉複体に適用すると、球商内の射影部分多様体の中間交叉コホモロジーに下界が生じる。
abstract_source_url: https://arxiv.org/abs/2611.31124
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.31124v1](https://arxiv.org/abs/2611.31124)
- **著者:** Mert Akdenizli, Soheil Memariansorkhabi
- **初回投稿日:** 2026-11-23
- **最終更新日:** 2026-11-23
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

コンパクトな複素球商では余接束の豊富性により、非零の偏屈層のEuler標数が正になる。有限体積でも非コンパクトな商では、コンパクト化の境界上に自明な商が現れ、この説明をそのまま移せない。

著者らは対数的余接束を境界で少し負にひねる条件に着目する。これによって、球商全体を台としない偏屈層にも同じ正値性を得る。

さらに、台の正次元成分があるときは最短閉測地線の長さを下界に反映できる。したがって、この長さが発散する被覆の塔では、正次元の台をもつ偏屈層のEuler標数の最小値も発散する。

## 背景と問題設定

$X=\Gamma\backslash\mathbb B^n$ で $\Gamma$ をneatな格子とする。対象は代数的に構成可能な複素係数偏屈層 $P$ で、そのEuler標数は $\chi(X,P)=\sum\_k(-1)^k\dim\_{\mathbb C}H^k(X,P)$ である。交叉複体を偏屈となるように正規化すれば、これは台の符号付き交叉コホモロジーEuler標数となる。

## 主結果

### 非コンパクトな球商（Theorem A）

非コンパクトな有限体積複素球商上で、任意の非零の $P$ に対して $\chi(X,P)>0$ が成り立つ。台の滑らかさや固有性は仮定しない。

### 境界付きコンパクト化上の判定（Theorem B）

滑らかな射影コンパクト化 $\bar Y$ の境界 $D=\sum\_iD\_i$ が単純正規交差であるとする。$E=\Omega^1\_{\bar Y}(\log D)$ がnefで、ある $a\_i\in\mathbb Q\_{>0}$ に対し有理捻り $E\langle-\sum\_i a\_iD\_i\rangle$ が豊富なら、$Y=\bar Y\setminus D$ 上の非零の偏屈層は正のEuler標数をもつ。

### シストールによる下界（Theorem C）

正則断面曲率を $-1$ に正規化した計量のシストールを $s$ とする。台に次元 $m>0$ の既約成分があれば、固有な球商では $\chi(X,P)\ge\sinh^{2m}(s/4)$ である。非固有な場合も $s\ge4\log(5n+(4\pi)^4)$ なら
$$
\chi(X,P)>\left(\frac{e^{s/16}}{4\pi}\right)^m .
$$
射影部分多様体の交叉複体に適用し、強Lefschetz定理と合わせると、中間交叉Betti数への下界が得られる。

## 証明の見取り図

対数的指数定理でEuler標数を対数的余法サイクルの交点数に分解する。境界で有理捻りを施した後の交点数と比較し、nef性で境界項を非負にし、豊富性で正の項を確保する。定量的下界では境界に接する台と射影的な台を分け、前者では境界次数、後者では体積の下界を用いる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.31124)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.31124v1) — Introduction, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems A–C、Corollaries D–F。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.31124v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
