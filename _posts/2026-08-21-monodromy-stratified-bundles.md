---
layout: paper
title: Monodromy of stratified vector bundles
title_ja: stratified vector bundleのmonodromy
authors: Indranil Biswas, Manish Kumar, A. J. Parameswaran
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We explore the interconnections between the monodromy group of stratified bundles on a smooth projective variety $X$ and the monodromy of the strongly semistable vector bundles $V$ on $X$ such that $c_1(V)$ and $c_2(V)$ are numerically trivial.
topic: algebraic-geometry
tags:
- vector-bundles-sheaves
- stability
- fundamental-groups
- positive-characteristic
arxiv_id: 2608.16314v1
arxiv_url: https://arxiv.org/abs/2608.16314
arxiv_submitted: '2026-08-17'
arxiv_updated: '2026-08-17'
summary: 正標数のsmooth projective variety上で、stratified vector bundleのmonodromy groupを、その各段に現れるstrongly semistable bundleのmonodromyから近似する。Tannakian subgroupの増大列のclosureが元のstratified monodromyを回収することを示す。
abstract_en: ''
summary_en: The paper compares monodromy group schemes attached to stratified bundles with those arising from strongly semistable vector bundles having numerically trivial Chern classes. Evaluation at successive Frobenius levels produces an increasing family of subgroup schemes. Its closure recovers the full stratified monodromy.
abstract_ja: smooth projective variety上のstratified bundleのmonodromyと、数値的に自明なChern類をもつstrongly semistable bundleのmonodromyとの関係を調べる。各Frobenius段のmonodromy像の増大列からstratified monodromyを回収する。
abstract_source_url: https://arxiv.org/abs/2608.16314
license_name: arXiv non-exclusive distribution license
license_url: https://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.16314v1](https://arxiv.org/abs/2608.16314)
- **著者:** Indranil Biswas, Manish Kumar, A. J. Parameswaran
- **初回投稿日:** 2026-08-17
- **最終更新日:** 2026-08-17
- **主分類・副分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

正標数ではstratified vector bundleはFrobenius pullbackで結ばれたbundle列として表される。本論文は、そのTannakian monodromyを各段のstrongly semistable bundleのmonodromyから構成する。

各段へのevaluation functorがmonodromy group schemeのinjective morphismを与え、像は段数とともに増大する。そのdirect limitのZariski closureが元のstratified monodromy全体となる。

## 背景と問題設定

stratified bundle $E^\bullet=\{E_i\}_{i\geq0}$ では各 $E_i$ のChern classは数値的に零である。$E_0$ がstrongly semistableなら全段も同じ性質をもち、S-fundamental group schemeの枠組みと比較できる。

## 主結果

### monodromyの近似（Theorem 1.1）

$E_0$ がstrongly semistableなstratified bundleに対し、evaluation $F_n:(E^\bullet)^{str}\to(E_n)^{ss}$ はtensor functorであり、injective morphism

$$
f_n:G^{ss}_{E_n}\hookrightarrow G^{str}_{E^\bullet}
$$

を誘導する。像は増大列をなし、$\varinjlim_n\operatorname{Im}f_n$ のclosureは $G^{str}_{E^\bullet}$ に等しい。

### trivial tangent bundleの場合

Introductionでは概略として次のように述べられている。$T_X$ がtrivialなら中間的に構成されるgroup scheme $\Pi^{strss}(X,x)$ は $\Pi^{str}(X,x)$ と一致する（Theorem 3.1）。

## 証明の見取り図

Frobeniusによるshift functorと各段のevaluationをTannakian category間のtensor functorとして整理する。対応するgroup schemeの像の包含を示し、すべてのstratified subquotientが有限段で検出されることからclosureの等式を導く。

## 原論文との対応

- **Introduction:** Section 1, pp. 1–3
- **主要結果:** Theorems 1.1, 3.1
- **Abstractページ:** [arXiv:2608.16314](https://arxiv.org/abs/2608.16314)
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
