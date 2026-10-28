---
layout: paper
title: Leafrians, Frobenius splittings, and moduli spaces over Poisson surfaces
title_ja: Poisson曲面上のモジュライとFrobenius分裂
authors: Jun Peng
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.AC
- math.SG
arxiv_abstract: Let $X$ be a smooth projective Poisson surface over an algebraically closed field of characteristic $p>2$, and let $s\in H^0(X,\omega_X^{-1})$ be nonzero. We construct an anticanonical section associated to $s$, called the leafrian, on moduli spaces $M$ of stable objects on $X$, including the moduli of stable sheaves, of principal $G$-bundles, and of instantons. The leafrian splits $M$ if and only if $s^{p-1}$ Frobenius splits the base. It is invariant under the Hamiltonian flows of Bottacin's Poisson structure on $M$, so every compatibly split subvariety of $M$ is a Poisson subvariety. Furthermore, the leafrian extends to an anticanonical section on the Gieseker compactification $\bar M$, and splits $\bar M$ under the same criterion. As a consequence, for $X$ a rational surface, a ruled surface over an elliptic curve, a $K3$ surface, or an abelian surface, and $\rho>0$, the Gieseker compactification $\bar M$ satisfies Kodaira-type cohomology vanishing, including singular
  $\bar M$, and the same holds in characteristic zero.
topic: algebraic-geometry
tags:
- moduli
- vector-bundles-sheaves
- positive-characteristic
- symplectic-contact-geometry
- stability
arxiv_id: 2610.31619v2
arxiv_url: https://arxiv.org/abs/2610.31619
arxiv_submitted: '2026-10-22'
arxiv_updated: '2026-10-26'
summary: Poisson曲面上の安定層・主束・instantonのモジュライに、leafrianと呼ぶ反標準切断を構成する。正標数ではその分裂性を底曲面のFrobenius分裂性で判定し、Giesekerコンパクト化への延長と標数零でのKodaira型消滅へ応用する。
abstract_en: ''
summary_en: The paper transfers anticanonical data from a Poisson surface to moduli of stable objects through a construction called the leafrian. Local deformation blocks determine when this section induces Frobenius splitting. The same section is extended across the compactification boundary, including singular semistable loci. A characteristic-zero application gives cohomological vanishing on specified Gieseker compactifications, subject to a positive leaf parameter.
abstract_ja: 正標数p>2の滑らかな射影Poisson曲面から、安定層などのモジュライ上の反標準切断leafrianを作る。葉の単位数ρが正である範囲で、モジュライのFrobenius分裂は底の分裂と同値になる。切断はGiesekerコンパクト化にも延長され、標数零では指定された種類の曲面上のモジュライについて、特異なコンパクト化も含めたKodaira型消滅が得られる。
abstract_source_url: https://arxiv.org/abs/2610.31619
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.31619v2](https://arxiv.org/abs/2610.31619)
- **著者:** Jun Peng
- **初回投稿日:** 2026-10-22
- **最終更新日:** 2026-10-26
- **主分類・副分類:** math.AG（主分類）; math.AC, math.SG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Frobenius分裂は正標数の代数幾何でコホモロジーの消滅や部分多様体の構造を制御する道具である。本論文は、曲面の分裂をその上の安定対象のモジュライへ移す明示的な切断を構成する。

構成されるleafrianは、Poisson構造の葉方向と横断方向を合わせた反標準切断である。そのFrobenius traceを局所的な変形ブロックの積へ分解し、分裂の判定を底曲面上の反標準切断へ戻す。

さらに、準射影モジュライ上の構成をGiesekerコンパクト化へ延長する。特異な半安定境界を持つ場合も対象とし、標数零の消滅定理へつなぐ。ただし構成には$\rho>0$という条件があり、$\rho=0$で消滅が偽になるとは述べない。

## 背景と問題設定

基礎体はまず代数閉体で標数$p>2$とする。滑らかな$Y$がFrobenius splitであるとは、$\mathcal O\_Y\to F\_\ast\mathcal O\_Y$が$\mathcal O\_Y$-線形のretractionを持つことをいう。反標準切断の$(p-1)$乗のtraceが非零定数なら、定数倍で分裂を与えられる。

本論文のmemberは重み付きtrace pairingを実現するfat pointであり、その長さの和を$\rho$とする。曲面上では葉方向と横断方向の次元が$2\rho+c=d$を満たす。BottacinのPoissonテンソル$\theta\_s$と横断Euler frame $\Omega$を用い、leafrianは$\operatorname{lf}\_s=\theta\_s^{[\rho]}\wedge\Omega$として構成される。

主束の場合は$G$が滑らかなreductive群で、Lie代数$\mathfrak g$に不変な非退化双線形形式があり、$\mathfrak z(\mathfrak g)\otimes H^1(\mathcal O\_X)=0$というstanding hypothesisを課す。

## 主結果

### Leafrianと分裂判定（Theorem A）

滑らかな射影Poisson曲面$X$の非零切断$s\in H^0(X,\omega\_X^{-1})$と、論文の安定層・主束・instantonのモジュライ$M$を考える。instantonの場合は$s\in H^0(X,\omega\_X^{-1}(-2L))$を用いる。

leafrianが存在するための条件は$\rho>0$である。この範囲で

$$
\operatorname{lf}\_s\text{ が }M\text{ を分裂する}
\quad\Longleftrightarrow\quad
s^{p-1}\text{ が }X\text{ をFrobenius分裂する}
$$

となり、instantonの場合は右辺の$X$を$X\setminus L$へ置き換える。底を分裂する切断の射影類からleafrianの射影類への対応$[s]\mapsto[\operatorname{lf}\_s]$は単射である。

またleafrianはHamiltonian流で不変であり、これが分裂を与える場合、compatibleに分裂された部分多様体はPoisson部分多様体になる。

### 境界への延長（Theorem B）

$\rho>0$ならleafrianはGiesekerコンパクト化$\overline M$上の$\omega\_{\overline M}^{[-1]}$の切断へ延長し、同じ底の分裂条件が$\overline M$の分裂と同値になる。Gorensteinなら通常の$\omega\_{\overline M}^{-1}$の切断である。層・主束のモジュライでは、特異なstrictly semistable locusを越える点に内容がある。

### 標数零での消滅（Theorem C）

標数零で、$X$が有理曲面、楕円曲線上の線織曲面、K3曲面、またはアーベル曲面であり、$\rho>0$とする。対象となるGiesekerコンパクト化は、ample線束$A$に対し

$$
H^i(\overline M,\omega\_{\overline M}\otimes A)=0\qquad(i>0)
$$

を満たす。本文のinstantonの境界因子$L$と混同しないため、ここではample線束を$A$と書いた。

### 構成の範囲

一般対象の非局所自由点がmemberを与える場合には

$$
\rho=\operatorname{length}(E^{\vee\vee}/E)
=\operatorname{ch}\_2(E^{\vee\vee})-\operatorname{ch}\_2(E)
$$

と読める。この式を任意のモジュライに無条件で適用するものではない。階数一・第一Chern類零の場合は点のHilbert schemeを含み、既知の分裂結果を構成と逆向きの判定付きで回収する。

## 証明の見取り図

局所完全交差の変形加群と重み付きtrace pairingから、分裂を支配する最高係数を計算する。elementary modificationとpoint modificationの列がmemberと横断frameを供給し、局所ブロックを大域的な反標準切断に組み立てる。

Poisson曲面上では転送されたテンソルをBottacinのものと同定する。続いてコンパクト化境界への延長を確立し、正標数の分裂による消滅を標数零の帰結へつなぐ。後続節の証明や標数変更の詳細を独立に検証したものではない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.31619)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.31619v2) — Section 1, pp. 1–4（Section 2の前まで）
- **Introduction中で言及された主要結果:** Theorems A–C；Remark 1.1
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.31619v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
