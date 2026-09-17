---
layout: paper
title: "Toric vector bundles with trivial Chern class and flag decorations"
title_ja: "自明なChern類をもつtoric vector bundleとflag decoration"
authors: "Sergio Cristancho"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We study toric vector bundles on complete toric varieties whose total equivariant Chern classes are trivial. Our approach is tropical, using the notion of tropical toric vector bundles as piecewise linear maps introduced by Kaveh and Manon. We prove that any toric vector bundle of rank $r$ with trivial Chern class and affinely independent equivariant Chern roots is equivariantly isomorphic to a toric vector bundle pulled back from one of a finite set of varieties with dimension at most $r-1$ after twisting by a character. This extends a theorem of Payne about toric vector bundles of rank $r\leq 3$ with trivial Chern class. As an application, we construct examples of complete toric varieties of dimension $n$ that admit no nontrivial toric vector bundles of rank $r\leq n+1$ with the aforementioned properties. We also introduce combinatorial gadgets we call flag decorations of permutohedra, whose convexity properties are key for our results.
topic: algebraic-geometry
tags:
  - vector-bundles-sheaves
  - chern-classes
  - toric-geometry
arxiv_id: "2609.17898v1"
arxiv_url: "https://arxiv.org/abs/2609.17898"
arxiv_submitted: "2026-09-15"
arxiv_updated: "2026-09-15"
summary: >-
  自明な全equivariant Chern類とaffine独立なChern rootをもつrank $r$ のtoric vector bundleが、character twist後に次元高々 $r-1$ の有限個のtoric多様体のいずれかからのpullbackになることを示す。tropical toric bundleをBergman fanへのpiecewise linear mapとして扱い、permutohedronのflag decorationが作るfan coarseningを分類の核に用いる。
abstract_en: >-
  We study toric vector bundles on complete toric varieties whose total equivariant Chern classes are trivial. Our approach is tropical, using the notion of tropical toric vector bundles as piecewise linear maps introduced by Kaveh and Manon. We prove that any toric vector bundle of rank $r$ with trivial Chern class and affinely independent equivariant Chern roots is equivariantly isomorphic to a toric vector bundle pulled back from one of a finite set of varieties with dimension at most $r-1$ after twisting by a character. This extends a theorem of Payne about toric vector bundles of rank $r\leq 3$ with trivial Chern class. As an application, we construct examples of complete toric varieties of dimension $n$ that admit no nontrivial toric vector bundles of rank $r\leq n+1$ with the aforementioned properties. We also introduce combinatorial gadgets we call flag decorations of permutohedra, whose convexity properties are key for our results.
summary_en: ""
abstract_ja: >-
  完備toric多様体上で全equivariant Chern類が自明なtoric vector bundleを研究する。Chern rootがaffine独立なら、characterによるtwistの後、次元高々rank minus oneの有限個のtoric多様体のいずれかからpullbackされることを示す。さらに所定の性質をもつ低rank非自明toric vector bundleが存在しない完備toric多様体の例を全次元で構成する。
abstract_source_url: "https://arxiv.org/abs/2609.17898"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.17898](https://arxiv.org/abs/2609.17898)
- **著者:** Sergio Cristancho
- **初回投稿日・最終更新日:** 2026年9月15日
- **主分類:** math.AG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

完備toric多様体が非自明なtoric vector bundleをもつかという問題は、line bundleの場合と異なり高rankでは難しい。Payneはrank 3以下で全equivariant Chern類が自明な場合を解析した。本論文はtropical toric bundleを使い、その構造定理を一般rankへ拡張する。

rank $r$ のbundleのequivariant Chern root $u_1,\ldots,u_r$ がaffine独立なら、それらが定める線形写像を通じ、bundleは $(r-1)$ 次元permutohedral fanのcoarsening上のbundleからpullbackされる。character twistを除けば、元の高次元の幾何は次元高々 $r-1$ の有限な候補へ還元される。

鍵となる組合せ論的対象がpermutohedronのflag decorationである。各頂点へmatroidの完全flagをcompatibleに割り当て、その凸性からpermutohedral fanのcoarseningを得る。これはKlyachko dataをtropicalなpiecewise linear mapへ翻訳する仕組みである。

応用として、低rankの非自明bundleの存在を妨げる完備toric多様体を構成する。特に任意の $n\ge3$ に対し、rank $r\le n+1$ で仮定を満たす非自明bundleをもたない $n$ 次元例が得られる。

## 背景と問題設定

complete fan $\Delta\subset N_\mathbb R$ 上のtropical toric bundleを

$$
\Phi:|\Delta|\longrightarrow\operatorname{Berg}(M)
$$

というmatroid $M$ のBergman fanへのpiecewise linear mapで表す。全equivariant Chern類が自明であるとは、局所Chern rootが大域的なmultiset $\{u_1,\ldots,u_r\}$ をなすことに対応する。

## 主結果

### tropical bundleの構造（Theorem 1.1）

Chern rootがaffine独立なら、写像

$$
U(x)=(\langle u_1,x\rangle,\ldots,\langle u_r,x\rangle)
\quad\bmod\mathbb R\mathbf1
$$

は $\Delta$ からpermutohedral fan $\Sigma_r$ のあるcomplete coarsening $\Xi$ へのsurjective fan morphismとなる。character $u$ と $\Xi$ 上のrank $r$ bundle $\mathcal F$ が存在して、$\mathcal E\otimes\mathcal O(u)\simeq U^*\mathcal F$ となる。

### toric vector bundle版（Theorem 1.3）

対応するtoric varietyの射 $\pi_U:X_\Delta\to X_\Xi$ に対し、

$$
\mathcal E\otimes\mathcal O(\operatorname{div}\chi^u)\simeq\pi_U^*\mathcal F
$$

が成り立つ。affine独立性を外した素朴な一般化は反例をもつこともIntroductionで明記される。

### 非存在例（Theorems 1.4, 1.5）

射影空間への非定数写像をもたないcomplete toric varietyには、rank $r\le4$ で上記性質をもつ非自明bundleが存在しない。また各 $n\ge3$ に対して、rank $r\le n+1$ のそのようなbundleをもたないcomplete toric $n$-foldが存在する。

## 証明の見取り図

bundleのKlyachko dataからpermutohedron上のflag decorationを作り、そのconvex rank testがfan coarseningを定めることを示す。Chern rootの線形写像で元のfanをこのcoarseningへ写し、piecewise linear mapを降下させる。非存在結果では低次元permutohedral fanのcoarsening分類と具体的なcomplete toric variety族を用いる。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.17898](https://arxiv.org/abs/2609.17898)
- **Introduction:** Section 1, pp. 1–4
- **主要結果:** Theorems 1.1, 1.3–1.5; Corollary 1.2
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
