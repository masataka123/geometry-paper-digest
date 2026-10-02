---
layout: paper
title: "Finite automorphism groups of hypersurfaces via Bott vanishing"
title_ja: "Bott消滅による超曲面の有限自己同型群"
authors: "Dominic Bunnett, Caroline Namanya"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We give a cohomological criterion for the automorphism group scheme of a hypersurface in a smooth Deligne-Mumford stack to be discrete in tame characteristics. The criterion converts Bott-type vanishing on the ambient stack into vanishing of infinitesimal automorphisms of every quasismooth hypersurface in a linear system. We apply it to toric orbifolds, obtain uniform finiteness results for quasismooth weighted-projective hypersurfaces in tame characteristic and hypersurfaces in products of projective spaces, and identify the precise exceptional windows in which the method fails.
topic: algebraic-geometry
tags:
  - fano-varieties
  - toric-geometry
arxiv_id: "2609.38572v1"
arxiv_url: "https://arxiv.org/abs/2609.38572"
arxiv_submitted: "2026-09-29"
arxiv_updated: "2026-09-29"
summary: >-
  滑らかなDeligne–Mumford stack内の超曲面について、周囲のBott型消滅から自己同型群schemeの離散性を導くコホモロジー判定を与える。tame標数の重み付き射影超曲面や射影空間の積の超曲面へ適用し、Fanoの場合には有限性を得る。
abstract_en: ""
summary_en: >-
  This work derives a cohomological test for vanishing infinitesimal automorphisms of hypersurfaces in smooth Deligne–Mumford stacks. Bott-type vanishing verifies the test for toric orbifolds and products of projective spaces. In Fano cases, discreteness upgrades to finiteness of the automorphism group scheme.
abstract_ja: >-
  滑らかなDeligne–Mumford stack内の超曲面について、周囲のBott型消滅から自己同型群schemeの離散性を導くコホモロジー判定を与える。tame標数の重み付き射影超曲面や射影空間の積の超曲面へ適用し、Fanoの場合には有限性を得る。
abstract_source_url: "https://arxiv.org/abs/2609.38572"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.38572](https://arxiv.org/abs/2609.38572)
- **著者:** Dominic Bunnett, Caroline Namanya
- **初回投稿日・最終更新日:** 2026年09月29日
- **主分類・副分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

超曲面の無限小自己同型$H^0(X,T_X)$の消滅を、周囲のstack上のtwisted differential formのコホモロジー消滅から導く。Kodaira–Spencerの方法をsmooth Deligne–Mumford stackへ拡張し、Bott型消滅で一様に検証できる判定を得る。

重み付き射影空間や射影空間の積の超曲面に適用すると、tame標数で広い次数範囲の自己同型群schemeが離散となる。Fano超曲面では有限型性と合わせて有限性が従う。

## 背景と問題設定

K-stable Fano多様体の自己同型群は有限であるため、有限性はK安定性の必要条件でもある。正標数ではgroup schemeが非reducedとなり得るため、単なる点集合ではなく無限小自己同型の消滅が重要となる。

## 主結果

### 離散性判定（Theorem 1.1）

$Y$を次元$n\\ge2$のsmooth separated Deligne–Mumford stack、$X\\hookrightarrow Y$をsmooth effective Cartier divisorとする。$L_q=\\omega_Y^{-1}\\otimes\\mathcal O_Y(-(q+1)X)$とおき、所定のcoarse-space条件と

$$
H^q(Y,\\Omega_Y^{n-q-1}\\otimes L_q)=
H^q(Y,\\Omega_Y^{n-q-2}\\otimes L_q)=0
$$

が全$q\\ge0$で成り立てば、$H^0(X,T_X)=0$である。

### 重み付き射影超曲面（Theorem 1.2）

well-formed $\\mathbb P(a_0,\\ldots,a_n)$内のquasismooth well-formed次数$d$超曲面で、各$a_i$が標数で可逆、かつ$d\\ge2\\max a_i$とする。等号時は最大weightが一度だけ現れると仮定する。このとき$\\operatorname{Aut}_{X/k}$はétaleで、$X$がFanoなら有限である。

### 射影空間の積（Theorem 1.3）

Introductionに列挙されたmultidegree条件を満たす滑らかな超曲面では$H^0(X,T_X)=0$であり、Fanoなら自己同型群schemeは有限である。

## 証明の見取り図

restriction sequenceとPoincaré residue sequenceにより$H^0(X,T_X)$を周囲のtwisted differential formのコホモロジーへ移す。toric canonical stackではcoarse space上のample Weil divisorに対するBott型消滅を使い、積の場合はBott formulaとKünneth formulaで確認する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.38572](https://arxiv.org/abs/2609.38572)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorems 1.1–1.3
- **論文構成の説明:** Introduction末尾
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
