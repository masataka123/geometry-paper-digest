---
layout: paper
title: "Hodge-Riemann Relations for Schur Classes in the Linear and Kähler Cases"
title_ja: "線形・Kählerの場合のSchur類に対するHodge–Riemann関係"
authors: "Julius Ross, Matei Toma"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  We prove a version of the Hodge-Riemann bilinear relations for Schur polynomials of Kähler forms and for Schur polynomials of positive forms on a complex vector space.
topic: algebraic-geometry
tags: 
  - hodge-theory
  - chern-classes
  - positivity
arxiv_id: "2202.13816v2"
arxiv_url: "https://arxiv.org/abs/2202.13816"
arxiv_submitted: "2022-02-28"
arxiv_updated: "2022-07-02"
summary: >-
  正値 $(1,1)$ 形式のSchur多項式が、線形空間とコンパクトKähler多様体の双方でHodge–Riemann型の符号数 $(1,h^{1,1}-1)$ を与えることを示す。ampleベクトル束についての先行結果を、任意のKähler形式のSchur多項式へ拡張する。
abstract_en: ""
summary_en: >-
  The work establishes Hodge–Riemann bilinear relations for Schur polynomials evaluated on positive forms. Both a pointwise linear statement and a global compact Kähler statement are proved. The argument passes through maximal-Picard-rank tori and upgrades weak limiting relations by a deformation-based linear algebra mechanism.
abstract_ja: >-
  正値 $(1,1)$ 形式のSchur多項式に対するHodge–Riemann双線形関係を証明する。複素ベクトル空間上の線形版と、コンパクトKähler多様体のコホモロジー上の大域版を同時に扱う。得られる二次形式はいずれも符号数 $(1,h^{1,1}-1)$ をもち、特定のSchur類の非負線形結合にも結果を拡張する。
abstract_source_url: "https://arxiv.org/abs/2202.13816"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2202.13816](https://arxiv.org/abs/2202.13816)
- **著者:** Julius Ross, Matei Toma
- **初回投稿日:** 2022-02-28
- **最終更新日:** 2022-07-02
- **主分類・副分類:** math.AG（主分類）, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

古典的Hodge–Riemann関係はKähler類の積が $H^{1,1}_{\mathbb R}$ 上に符号数 $(1,h^{1,1}-1)$ の二次形式を定めることをいう。Gromovの混合版は異なるKähler形式の積を許す。本論文はその積を一般のSchur多項式へ置き換える。

$d-2$ の分割 $\lambda$ と $e$ 個の正値 $(1,1)$ 形式に対し、Schur多項式 $s_\lambda$ が定める二次形式のHodge–Riemann性を証明する。点ごとの線形代数とコンパクトKähler多様体上の積分の双方で成立する。

さらに、Grassmann多様体上で既約サイクルにより表現できるSchur類の凸結合とその閉包にも結果を拡張する。閉包への移行はHodge–Riemann性が閉条件でないため自明ではなく、論文の線形代数機構がその退化を制御する。

## 背景と問題設定

コンパクトKähler多様体 $(X,\omega)$ では

$$
Q_{\{\omega\}^{d-2}}(\{\alpha\})=\int_X\alpha^2\wedge\omega^{d-2}
$$

が符号数 $(1,h^{1,1}-1)$ をもつ。分割 $\lambda$ のSchur類はChern類の行列式で定義され、直和線束の場合には第一Chern類の対称斉次多項式になる。

## 主結果

### 定理1.1（Schur多項式のHodge–Riemann性）

$d\ge2$, $e\ge1$ とし、$\lambda$ を $d-2$ の分割で各部分が $e$ 以下とする。$d$ 次元複素ベクトル空間上の正値形式 $\omega_1,\ldots,\omega_e$ に対し

$$
Q_{s_\lambda(\omega_1,\ldots,\omega_e)}(\alpha)
=\frac{\alpha^2\wedge s_\lambda(\omega_1,\ldots,\omega_e)}{\mathrm{vol}}
$$

は符号数 $(1,h^{1,1}-1)$ をもつ。同様に、$d$ 次元コンパクトKähler多様体上では

$$
Q(\{\alpha\})=\int_X\alpha^2\wedge s_\lambda(\omega_1,\ldots,\omega_e)
$$

が同じ符号数をもつ。

### 定理1.2（Schur類の組合せ）

既約サイクルとして表現可能な係数ベクトルの集合を $B$ とすると、その閉包 $\overline B$ の各点が定めるSchur多項式の組合せは、普遍的・線形・Kählerの各設定でHodge–Riemann性をもつ。

## 証明の見取り図

まずPicard数が最大の複素トーラスでKähler類を有理類に近似し、先行研究から弱Hodge–Riemann性を得る。各形式を $\omega_i+th$ と変形して双線形形式の族を作り、Section 3の線形代数により弱い極限性を非退化なHodge–Riemann性へ昇格させる。線形版をトーラスの接空間から取り出し、最後に点ごとの主張を積分して一般Kähler版を導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2202.13816](https://arxiv.org/abs/2202.13816)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
