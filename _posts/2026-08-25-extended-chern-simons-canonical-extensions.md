---
layout: paper
title: "Torsion of extended Chern-Simons classes for canonical extensions of flat bundles"
title_ja: "平坦束の標準延長に対する拡張Chern--Simons類のtorsion性"
authors: "Jaya NN Iyer, Carlos Simpson"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DG
arxiv_abstract: >-
  Let $X$ be a smooth complex projective variety and $D = D_1+\cdots+D_k\subset X$ a divisor with simple normal crossings. Consider Deligne's canonical extension $(F,\nabla)$ of a flat algebraic vector bundle on $X^*:=X\setminus D$ with unipotent monodromy around every component of $D$. We define and compare the various constructions of the extended Chern-Simons classes $$ \mathrm{CS}_p(\nabla^{\mathrm{Del}})\;\in\; H^{2p-1}(X,\mathbb{C}/\mathbb{Z}),\, p\geq 1, $$ attached to $(F,\nabla)$. Our main theorem states that $\mathrm{CS}_p(\nabla^{\mathrm{Del}})$ is torsion in $H^{2p-1}(X,\mathbb{C}/\mathbb{Z})$, for every $p\geq 2$, extending \cite{Reznikov}, \cite{Reznikov2}, \cite{IS-arXiv},\cite{IS-2div}). We treat the case of quasi-unipotent local monodromies via locally abelian parabolic bundles, and deduce the torsion of Chern-Simons classes. We also extend the Deligne-Sullivan theorem \cite{DeSu} on triviality of flat bundle on a finite covering of a smooth manifold, to that of a canonical extension, and provide torsion-bounds on the extended characteristic classes.
topic: algebraic-geometry
tags:
  - chern-classes
  - vector-bundles-sheaves
  - hodge-theory
arxiv_id: "2608.20877v1"
arxiv_url: "https://arxiv.org/abs/2608.20877"
arxiv_submitted: "2026-08-21"
arxiv_updated: "2026-08-21"
summary: >-
  単純正規交差境界の補集合上の平坦束について、Deligne標準延長に付随する拡張Chern--Simons類が次数 $p\ge2$ でtorsionとなることを証明する。多重交差では同時分裂できないmonodromy weight filtrationを、全nilpotent作用素の単一weight filtrationとmulti-Rees構成で置き換える。
abstract_en: ""
summary_en: >-
  The paper studies secondary characteristic classes attached to Deligne's extension of a flat bundle across a normal-crossings boundary. It proves that the extended Chern--Simons classes in degrees indexed by $p\geq2$ are torsion, including a parabolic treatment of quasi-unipotent monodromy. The construction replaces incompatible collections of boundary weight filtrations with filtration data organized along strata and a global multi-Rees bundle. Regulator comparisons and Hodge-theoretic vanishing then yield the torsion statement and its characteristic-class consequences.
abstract_ja: >-
  滑らかな複素射影多様体 $X$、単純正規交差因子 $D$、補集合上で各境界成分の周りのmonodromyがunipotentな平坦代数ベクトル束を考える。Deligne標準延長に付随する拡張Chern--Simons類を構成して比較し、$p\ge2$ のすべてについて $H^{2p-1}(X,\mathbb C/\mathbb Z)$ 内でtorsionであることを示す。quasi-unipotent monodromyも局所abelian parabolic束を介して扱い、標準延長に対するDeligne--Sullivan型結果と特性類のtorsion評価も導く。
abstract_source_url: "https://arxiv.org/abs/2608.20877"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.20877](https://arxiv.org/abs/2608.20877)
- **著者:** Jaya NN Iyer, Carlos Simpson
- **初回投稿日・最終更新日:** 2026年8月21日
- **主分類・副分類:** math.AG（主分類）, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

平坦束のChern--Simons類は一次Chern類のような通常の特性類を微分的に精密化するsecondary classである。境界のない射影多様体ではReznikovによるtorsion性が知られるが、準射影多様体上の平坦束をDeligne標準延長して得る $X$ 上の類には、補集合上の結果だけでは捉えられない情報が残る。

本論文は滑らかな射影多様体 $X$ と単純正規交差因子 $D$ に対し、$X^*=X\setminus D$ 上の平坦束のmonodromyが各成分の周りでunipotentである場合を扱う。Deligne標準延長に付随する拡張Chern--Simons類を比較可能な形で構成し、$p\ge2$ でtorsionとなることを示す。

二成分までの境界では二つのweight filtrationを同時に分裂できるが、三重交差以降では一般に不可能である。本論文は各stratumでnilpotent作用素の和が定める単一のmonodromy weight filtrationを採用し、鎖で添字付けたpatching dataとmulti-Rees束を構成することでこの障害を解消する。

主結果はDeligne--Beilinson Chern characterのtorsion性、表現空間上での局所定数性、$\ell$-adic類への帰結を持つ。quasi-unipotent monodromyについても局所abelian parabolic束を通じて同じtorsion結論を得る。

## 背景と問題設定

$D=D_1+\cdots+D_k$ を単純正規交差因子、$X^*=X\setminus D$ とする。平坦束のDeligne標準延長 $(F,\nabla)$ に対し、patched connection $\nabla^{\mathrm{Del}}$ から

$$
\operatorname{CS}_p(\nabla^{\mathrm{Del}})
\in H^{2p-1}(X,\mathbb C/\mathbb Z)
$$

を定める。制限写像 $H^{2p-1}(X,\mathbb C/\mathbb Z)\to H^{2p-1}(X^*,\mathbb C/\mathbb Z)$ は一般に核を持つため、開部分上のtorsion性からこの拡張類のtorsion性は形式的には従わない。

## 主結果

### 拡張Chern--Simons類のtorsion性（Theorem 1.4）

上の状況で、すべての $p\ge2$ に対して

$$
\operatorname{CS}_p(\nabla^{\mathrm{Del}})
\in H^{2p-1}(X,\mathbb C/\mathbb Z)
$$

はtorsionである。Introductionは、この結果が滑らかな一成分境界および横断的な二成分境界に対する先行結果を、任意の単純正規交差境界へ拡張すると説明する。

### 特性類への帰結（Corollaries 1.5--1.7）

$p\ge2$ でDeligne--Beilinson Chern character $\operatorname{ch}^D_p(F)$ もtorsionとなり、拡張Chern--Simons類はunipotent monodromyを持つ表現のパラメータ空間上で局所定数となる。またtorsion性を用いて、対応する $\ell$-adic類が $X$ 上に定義されtorsionとなる。

## 証明の見取り図

Mochizukiの定理が与える $N_I=\sum_{i\in I}N_i$ のweight filtrationを用いて、stratumの鎖に沿って整合するpatching dataを作る。multi-Rees構成から射影的cubical realization上の大域束を得て、そのDeligne--Beilinson類を一方では普遍regulator、他方ではChern--Simons類と比較する。polarized variation of Hodge structureへ変形した場合には不定Hermitian形式と $N$-isotropic filtrationのposetの可縮性からvolume regulatorが消える。最後にBorelの定理を用いて全regulatorを消し、torsion性を結論する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.20877](https://arxiv.org/abs/2608.20877)
- **Introduction:** Section 1, pp. 5--12
- **主要定理・系:** Theorem 1.4, Corollaries 1.5--1.7
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
