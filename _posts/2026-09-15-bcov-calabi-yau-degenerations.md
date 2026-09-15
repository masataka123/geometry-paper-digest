---
layout: paper
title: "Spectrum of singularities, analytic torsion and Calabi--Yau degenerations"
title_ja: "特異点のスペクトル・解析的torsion・Calabi--Yau退化"
authors: "Dennis Eriksson, Gerard Freixas i Montplet"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math-ph
  - math.DG
arxiv_abstract: >-
  We relate the spectrum of singularities to the geometry of degenerating Calabi--Yau manifolds through holomorphic analytic torsion. We express the leading asymptotic coefficients of the analytic torsion of holomorphic differential forms in terms of Hodge-theoretic invariants of vanishing cycles. For isolated hypersurface singularities, these formulas lead to the formulation of new higher Durfee--Saito conjectures bounding Hodge-filtration dimensions by the Milnor number and Eulerian numbers. We also prove that, for isolated quasi-homogeneous singularities, the spectral measure is dominated in convex order by the corresponding Irwin--Hall distribution. Applying the torsion formulas to the BCOV invariant yields a computable obstruction to birational smooth fillings. For isolated singularities, its local contribution is expressed in terms of Hertling's spectral variance and a Bernoulli sum determined by monodromy. As applications, we rule out birational smooth fillings for projective Calabi--Yau degenerations with smooth total space and singular central fiber having only ADE or terminal Brieskorn--Pham singularities, in relative dimension at least three, extending results of Voisin.
topic: algebraic-geometry
tags:
  - singularities
  - calabi-yau-geometry
  - hodge-theory
  - moduli
arxiv_id: "2609.12849v1"
arxiv_url: "https://arxiv.org/abs/2609.12849"
arxiv_submitted: "2026-09-11"
arxiv_updated: "2026-09-11"
summary: >-
  Calabi--Yau退化の正則解析的torsionの主要漸近係数を消滅cycleのHodge理論的不変量で表し、BCOV不変量から双有理的smooth fillingへの計算可能な障害を構成する。孤立特異点では局所寄与をスペクトル分散とmonodromy由来のBernoulli和で記述し、ADEまたはterminal Brieskorn--Pham特異点を持つ退化にsmooth fillingがないことを導く。
abstract_en: ""
summary_en: >-
  The paper connects vanishing-cycle Hodge data with the leading degeneration of holomorphic analytic torsion. Combining these formulas into the BCOV invariant produces a numerical obstruction to replacing a Calabi--Yau degeneration by a birationally equivalent smooth filling. For isolated singularities, the local term is computed from spectral variance and monodromy data. Positivity results then exclude such fillings for broad families of terminal singularities, while related spectral inequalities motivate higher Durfee--Saito conjectures.
abstract_ja: >-
  特異点のスペクトルとCalabi--Yau多様体の退化幾何を正則解析的torsionを介して結ぶ。正則微分形式の解析的torsionの主要漸近係数を、消滅cycleのHodge理論的不変量で表す。孤立超曲面特異点では、Hodge filtrationの次元をMilnor数とEulerian数で抑える高次Durfee--Saito予想を導き、準斉次特異点のスペクトル測度に対する凸順序も証明する。BCOV不変量への応用により双有理的smooth fillingの計算可能な障害を得て、相対次元3以上でADEまたはterminal Brieskorn--Pham特異点だけを持つ退化のsmooth fillingを排除する。
abstract_source_url: "https://arxiv.org/abs/2609.12849"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.12849](https://arxiv.org/abs/2609.12849)
- **著者:** Dennis Eriksson, Gerard Freixas i Montplet
- **初回投稿日:** 2026年9月11日
- **最終更新日:** 2026年9月11日
- **主分類・副分類:** math.AG（主分類）, math-ph, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Calabi--Yau多様体の射影退化が有限基底変換後に滑らかな族へ延長できるかというFriedmanの問題では、有限monodromyだけでは十分でない。本論文はBCOV不変量の漸近から、双有理モデルの変更を許しても消えない数値的障害を取り出す。

全空間が滑らかな退化$f:\mathcal X\to\mathbb D$について、$\log\tau_{\mathrm{BCOV}}(X_t)$の$\log|t|^2$係数$\kappa_f$を局所項と大域項に分解する。中心ファイバーがcanonical特異点を持てば大域項は消え、孤立特異点の局所項はVarchenko--Steenbrink spectrumから計算できる。

この局所公式の符号を解析し、ADE特異点やterminal Brieskorn--Pham特異点のみを持つ相対次元3以上の退化では$\kappa_f\neq0$となることを示す。BCOV不変量の双有理不変性により、そのような退化は双有理的smooth fillingを持たない。

さらに解析的torsionの公式は、特異点のHodge filtrationに関する高次Durfee--Saito予想と、スペクトル測度をIrwin--Hall分布と比較する凸順序の問題へつながる。ここでは予想と証明済み結果が明確に分けられている。

## 背景と問題設定

退化のBCOV不変量には

$$
\log\tau_{\mathrm{BCOV}}(X_t)=\kappa_f\log|t|^2+o(\log|t|)
$$

という漸近がある。smooth fillingが存在すれば左辺は原点まで連続に延びるため$\kappa_f=0$であり、双有理不変性から$\kappa_f\neq0$は双有理的smooth fillingも妨げる。

従来の$\kappa_f$の公式は特殊な幾何やnormal-crossings modelに限られていた。本論文は消滅cycleの混合Hodge構造を使って局所特異点不変量による内在的な式を与え、その非消滅を判定可能にする。

## 主結果

### BCOV係数の局所・大域分解（Theorem 1）

相対次元$n\geq3$のCalabi--Yau射影退化$f:\mathcal X\to\mathbb D$で全空間$\mathcal X$が滑らかなら、

$$
\kappa_f=\kappa_f^{\mathrm{loc}}+\kappa_f^{\mathrm{gl}}
$$

という明示的分解がある。局所項は中心ファイバーの特異点の消滅コホモロジーのHodge理論で記述され、中心ファイバーがcanonical特異点を持てば$\kappa_f^{\mathrm{gl}}=0$である。

### 孤立特異点の局所公式（Theorem 2）

$f:(\mathbb C^{n+1},0)\to(\mathbb C,0)$をMilnor数$\mu$の孤立超曲面特異点とする。$V_f$をHertlingのスペクトル分散、$\beta_f$をmonodromy固有値から定まるperiodized Bernoulli和とすると、

$$
(-1)^{n+1}\frac{\kappa_f^{\mathrm{loc}}}{\mu}
=\frac{n-1}{24}-\frac12V_f+\frac12\beta_f
$$

が成り立つ。

### 正値性とsmooth filling障害（Theorem 3, Corollary 4）

$n\geq3$とする。最小スペクトル数が$3/2$より大きくHertling分散予想を満たす孤立特異点、またはterminal Brieskorn--Pham特異点について

$$
(-1)^{n+1}\kappa_f^{\mathrm{loc}}>0
$$

となる。したがって滑らかな全空間を持ち、中心ファイバーの特異点がこの型だけであるCalabi--Yau退化は双有理的smooth fillingを持たない。ADE特異点の場合も含まれる。

### スペクトル測度の凸順序（Theorem 6）

準斉次孤立超曲面特異点のスペクトル測度$\nu_f$は、同じ次元に対応するIrwin--Hall測度$\nu_n^{\mathrm{IH}}$に凸順序で支配される：

$$
\nu_f\preceq_{\mathrm{cx}}\nu_n^{\mathrm{IH}}.
$$

一般の孤立超曲面特異点でも同じ関係が成り立つという主張はConjecture Cであり、本論文で証明された定理ではない。

## 証明の見取り図

正則$p$-形式の解析的torsionの漸近をmixed Hodge moduleと既存のtorsion公式から消滅コホモロジーの不変量で表す。$p$について重み付き和を取るとBCOV局所項となり、スペクトル数を用いて整理することでTheorem 2の分散・Bernoulli公式へ到達する。

terminal特異点に対する符号はHertling分散評価と$\beta_f$の算術的評価から得る。準斉次の場合にはスペクトル測度を確率測度として捉え、凸関数の積分比較に翻訳することでIrwin--Hall分布による支配を証明する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.12849](https://arxiv.org/abs/2609.12849)
- **Introduction:** Section 1, pp. 2--9
- **Introduction中で言及された主要定理番号:** Theorems 1--3, 5--6, Corollary 4; Conjectures A--C
- **論文構成の説明:** Introduction各小節および目次, pp. 1--9
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
