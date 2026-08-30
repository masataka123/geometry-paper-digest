---
layout: paper
title: >-
  Symplectic singularities arising from algebras of symmetric tensors
title_ja: >-
  対称テンソル代数から生じるsymplectic特異点
authors: >-
  Baohua Fu, Jie Liu
arxiv_primary_category: "math.AG"
arxiv_categories:
  - "math.AG"
arxiv_abstract: >-
  The algebra of symmetric tensors $S(X):= H^0(X, \sf{S}^{\bullet} T_X)$ of a projective manifold $X$ leads to a natural dominant affinization morphism $$ \varphi_X: T^*X \longrightarrow \mathcal{Z}_X:= \text{Spec} S(X). $$ It is shown that $\varphi_X$ is birational if and only if $T_X$ is big. We prove that if $\varphi_X$ is birational, then $\mathcal{Z}_X$ is a symplectic variety endowed with the Schouten--Nijenhuis bracket if and only if $\mathbb{P} T_X$ is of Fano type, which is the case for smooth projective toric varieties, smooth horospherical varieties with small boundary and the quintic del Pezzo threefold. These give examples of a distinguished class of conical symplectic varieties, which we call symplectic orbifold cones.
topic: algebraic-geometry
tags:
  - singularities
  - vector-bundles-sheaves
  - fano-varieties
  - symplectic-contact-geometry
  - toric-geometry
arxiv_id: "2409.07264v2"
arxiv_url: "https://arxiv.org/abs/2409.07264"
arxiv_submitted: "2024-09-11"
arxiv_updated: "2025-09-18"
summary: >-
  射影多様体 $X$ の対称テンソル代数と余接束のaffinizationを調べ、その写像が双有理となる条件を接束 $T_X$ のbig性で特徴づける。さらに得られるaffine schemeがsymplectic varietyとなる条件を $\mathbb{P}T_X$ のFano type性で特徴づけ、トーリック多様体などに具体例を与える。
abstract_en: ""
summary_en: >-
  The paper studies the affine scheme determined by global symmetric tensors on a projective manifold and the natural affinization of its cotangent bundle. It characterizes birationality of this map through bigness of the tangent bundle. It also gives a Fano-type criterion for the resulting Poisson scheme to be a symplectic variety and works out several geometric families of examples.
abstract_ja: >-
  射影多様体の対称テンソル代数から得られるaffinization $T^*X\to\operatorname{Spec}S(X)$ を研究する。この写像の双有理性は接束のbig性と同値であり、Schouten–Nijenhuis括弧によるsymplectic orbifold coneが得られることは $\mathbb{P}T_X$ がFano typeであることと同値である。滑らかな射影トーリック多様体、境界の小さいhorospherical多様体、quintic del Pezzo三次元多様体が例を与える。
abstract_source_url: "https://arxiv.org/abs/2409.07264"
license_name: "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International"
license_url: "https://creativecommons.org/licenses/by-nc-nd/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- arXiv: [2409.07264v2](https://arxiv.org/abs/2409.07264)
- 著者: Baohua Fu, Jie Liu
- 対象: Abstract と Introduction

## 要約

射影多様体 $X$ に対し、対称テンソル代数
$$
S(X)=\bigoplus_{p\geq0}H^0(X,S^pT_X)
$$
は余接束 $T^*X$ の正則関数環である。したがって自然なaffinization
$$
\varphi_X:T^*X\longrightarrow Z_X:=\operatorname{Spec}S(X)
$$
があり、余接束のsymplectic構造は $S(X)$ にSchouten–Nijenhuis括弧を誘導する。

論文は、$\varphi_X$ の双有理性と $Z_X$ のsymplectic特異点性を、接束とその射影化の正値性へ帰着する。「symplectic orbifold cone」は、$\varphi_X$ が双有理で $Z_X$ がBeauvilleの意味でsymplecticである場合を指す。

## 背景と問題設定

一般の $X$ では $S(X)$ の有限生成すら自明でなく、$(Z_X,\varphi_X)$ の構造は十分理解されていない。論文は双有理性、symplectic orbifold cone性、$\varphi_X$ がsymplectic resolutionとなる条件を分離し、最初の二問を解く。

## 主結果

### 主定理（Theorem 1.3）

射影多様体 $X$ に対して次が成り立つ。

1. $\varphi_X$ が双有理であることと $T_X$ がbigであることは同値である。
2. $Z_X$ がsymplectic orbifold coneであることと $\mathbb{P}T_X$ がFano typeであることは同値である。特にこの場合、$X$ 自身もFano typeである。

### トーリックの場合（Theorem 1.4）

次元2以上の滑らかな射影トーリック多様体では、fanから得られる行列 $A$ に付随するtoric hyperkähler variety $Y(A,0,0)$ と $Z_X$ が同型になる。

## 証明の見取り図

双有理性は $\mathcal O_{\mathbb PT_X}(1)$ のbig性とaffinizationの一般ファイバーの次元を結ぶ。symplectic性の特徴づけでは、symplectic formの解消への延長と $\mathbb PT_X$ 上のFano type条件を対応させる。具体例ではトーリック、horospherical、del Pezzoの各構造に応じて対称テンソル環を解析する。

## 原論文との対応

基本定義と三つの問いはDefinition 1.1とQuestion 1.2、同値条件はTheorem 1.3、トーリック同定はTheorem 1.4に対応する。symplectic resolutionの一般的特徴づけは未解決として残る。
