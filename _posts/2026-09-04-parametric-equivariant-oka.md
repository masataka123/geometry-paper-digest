---
layout: paper
title: "Parametric equivariant Oka principle"
title_ja: "パラメータ付き同変Oka原理"
authors: "Frank Kutzschebauch, Finnur Larusson, Gerald W. Schwarz"

arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.AG
  - math.AT
  - math.RT
arxiv_abstract: >-
  Let $G$ be a reductive complex Lie group and $K$ be a maximal compact subgroup of $G$. Let $X$ be a reduced Stein $G$-space and $Y$ be a $G$-elliptic manifold. We prove the following parametric equivariant Oka principle. The inclusion of the space of holomorphic $G$-maps $X\to Y$ into the space of continuous $K$-maps $X\to Y$ is a weak homotopy equivalence with respect to the compact-open topology. The proof is divided into a homotopy-theoretic part, which is handled by an abstract theorem of Studer, and an analytic part, for which we prove equivariant versions of the homotopy approximation theorem and the nonlinear splitting lemma that are key tools in Oka theory. The principle can be strengthened so as to allow interpolation on a $G$-invariant subvariety of $X$ and approximation on a $K$-invariant holomorphically convex compact subset of $X$.
topic: several-complex-variables
tags:
  - oka-theory
  - stein-geometry
arxiv_id: "2511.01189v2"
arxiv_url: "https://arxiv.org/abs/2511.01189"
arxiv_submitted: "2025-11-03"
arxiv_updated: "2026-09-03"
summary: >-
  簡約複素Lie群 $G$ が作用するStein空間から $G$-楕円多様体への写像について、正則 $G$-写像の空間から連続 $K$-写像の空間への包含が弱ホモトピー同値であることを示す。補間と近似を含むパラメータ付き同変Oka原理であり、従来の等質空間の場合を大きく拡張する。
abstract_en: ""
summary_en: >-
  The paper establishes a parametric equivariant Oka principle for maps from a reduced Stein space with a reductive complex group action to an equivariantly elliptic manifold. Holomorphic equivariant maps and continuous maps equivariant for a maximal compact subgroup have the same weak homotopy type. The theorem also incorporates interpolation along invariant subvarieties and uniform approximation on invariant holomorphically convex compact sets. Its proof combines Studer's abstract homotopy framework with new equivariant analytic approximation and splitting results.
abstract_ja: >-
  $G$ を簡約複素Lie群、$K$ をその極大コンパクト部分群とし、$X$ を被約Stein $G$-空間、$Y$ を $G$-楕円多様体とする。コンパクト開位相のもとで、正則 $G$-写像 $X\to Y$ の空間から連続 $K$-写像の空間への包含が弱ホモトピー同値であることを示す。証明はStuderの抽象定理によるホモトピー論的部分と、Oka理論の主要道具であるホモトピー近似定理および非線形分解補題の同変版を構築する解析的部分からなる。さらに、$G$-不変部分多様体上の補間と、$K$-不変正則凸コンパクト集合上の近似を同時に許す形へ強化される。
abstract_source_url: "https://arxiv.org/abs/2511.01189"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2511.01189](https://arxiv.org/abs/2511.01189)
- **著者:** Frank Kutzschebauch, Finnur Larusson, Gerald W. Schwarz
- **初回投稿日:** 2025年11月3日
- **最終更新日:** 2026年9月3日
- **主分類・副分類:** math.CV（主分類）, math.AG, math.AT, math.RT
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Oka原理は、Stein空間上の解析的問題に対する障害が本質的にホモトピー論的であることを述べる。本論文は、簡約複素Lie群 $G$ の作用を保つ写像へこの原理を拡張し、従来の等質な標的に限られたパラメータ付き結果と、より一般の標的に対する非パラメータ的結果を統合する。

$K\subset G$ を極大コンパクト部分群、$X$ を被約Stein $G$-空間、$Y$ を $G$-楕円多様体とする。主定理は、正則 $G$-写像の空間と連続 $K$-写像の空間が弱ホモトピー型を共有することを示す。したがって有限個のパラメータを持つ連続な同変写像族を、ホモトピーを通じて正則な族へ移す問題を包含する。

さらに、不変部分多様体上で値を固定する補間、正則凸コンパクト集合上での一様近似、連続 $K$-写像としての延長から正則 $G$-写像としての延長を導く主張も得られる。標的の $G$-楕円性は、等質空間だけでなく、多くの非等質なDanielewski型多様体なども含む。

## 背景と問題設定

$G$-楕円多様体とは、$G$-同変な支配的sprayを持つ複素多様体である。これはGromovの楕円性を同変化した条件であり、解析的変形を作る柔軟性を供給する。先行研究では標的が $G$-等質な場合のパラメータ付き原理、または一般の $G$-楕円標的に対する基本Oka原理が知られていたが、両者を同時に含む結果が求められていた。

写像空間にはコンパクト開位相を入れる。「弱ホモトピー同値」は、各基点においてすべてのホモトピー群に同型を誘導することを意味し、単なる個々の写像の存在より強く、パラメータ族全体の正則化を表す。

## 主結果

### パラメータ付き同変Oka原理（Theorem 1.1）

$G$ を簡約複素Lie群、$K$ をその極大コンパクト部分群、$X$ を被約Stein $G$-空間、$Y$ を $G$-楕円多様体とする。このとき包含

$$
\mathscr O_G(X,Y)\hookrightarrow \mathscr C_K(X,Y)
$$

はコンパクト開位相について弱ホモトピー同値である。

$G$-不変部分多様体 $X'\subset X$ と正則 $G$-写像 $h:X'\to Y$ を固定しても、$X'$ 上で $h$ に一致する二つの写像空間の包含は弱ホモトピー同値となる。特に $h$ は、連続 $K$-写像として $X$ へ延長できれば正則 $G$-写像としても延長できる。

また、$K$-不変正則凸コンパクト集合 $L\subset X$ の近傍と $X'$ 上で正則な連続 $K$-写像は、$X'$ 上の値を保ちながら、$L$ 上で正則 $G$-写像により一様近似できる。

## 証明の見取り図

商 $Q=X/\!/G$ 上で、正則 $G$-写像の層 $\Phi$ と連続 $K$-写像の層 $\Psi$ を作る。Studerの抽象定理により、大域写像空間の弱ホモトピー同値は、局所弱ホモトピー同値と二つの層の弱柔軟性へ還元される。位相的側は楕円性を使わず処理し、解析的側では同変パラメータ付きホモトピー近似定理と同変非線形分解補題を新たに証明して柔軟性を得る。最後に同じ枠組みに補間条件を組み込み、近似付きの主張を導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2511.01189](https://arxiv.org/abs/2511.01189)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorem 1.1
- **論文構成の説明:** Introduction, p. 4
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
