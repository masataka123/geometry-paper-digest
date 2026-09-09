---
layout: paper
title: "Hitchin sections on $3$-dimensional Sasakian manifolds"
title_ja: "3次元Sasakian多様体上のHitchin切断"
authors: "Hisashi Kasuya"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  By using non-abelian Hodge correspondence on compact Sasakian manifolds, we investigate analogous constructions of Hitchin sections of rank $2$ on $3$-dimensional compact Sasakian manifolds. We obtain canonical deformations of $\widetilde{SL_{2}(\R)}$-Sasakian structures giving a diffeomorphism from the vector space of basic quadratic differentials onto a connected component of the space of equivalent classes of sasakian structures of negative basic first Chern classes and topologically trivial CR structures equipped with an appropriate manifold structure.
topic: differential-geometry
tags:
  - higgs-nonabelian-hodge
  - moduli
  - cr-geometry
arxiv_id: "2609.06919v1"
arxiv_url: "https://arxiv.org/abs/2609.06919"
arxiv_submitted: "2026-09-07"
arxiv_updated: "2026-09-07"
summary: >-
  3次元コンパクトSasakian多様体に非可換Hodge対応とrank 2のHitchin切断を移し、basic二次微分の空間を表現空間の連結成分と微分同相に同定する。切断を$\widetilde{SL_2(\mathbb R)}$へ持ち上げることで、同じパラメータ空間がSasakian構造の標準的変形を与える。
abstract_en: ""
summary_en: >-
  This work builds a rank-two analogue of the Hitchin section for compact three-dimensional Sasakian manifolds. Under negativity of the basic first Chern class and topological triviality of the transverse holomorphic line bundle, basic quadratic differentials parametrize a connected component of an $SU(1,1)$ character space. A lift to the universal covering group gives a geometric interpretation as canonical deformations of Sasakian structures.
abstract_ja: >-
  コンパクトSasakian多様体における非可換Hodge対応を用いて、3次元の場合のrank 2 Hitchin切断を構成する。負のbasic第一Chern類と位相的に自明なCR構造のもとで、basic二次微分のベクトル空間から$SU(1,1)$表現空間の一つの連結成分への微分同相が得られる。さらにこの対応を$\widetilde{SL_2(\mathbb R)}$へ持ち上げ、Sasakian構造の標準的な変形族として解釈する。
abstract_source_url: "https://arxiv.org/abs/2609.06919"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.06919](https://arxiv.org/abs/2609.06919)
- **著者:** Hisashi Kasuya
- **初回投稿日:** 2026年9月7日
- **最終更新日:** 2026年9月7日
- **主分類・副分類:** math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

閉曲面では非可換Hodge対応が表現のBettiモジュライとHiggs束のDolbeaultモジュライを結び、Hitchin切断は二次微分の空間を$SL_2(\mathbb R)$表現の連結成分に同定する。本論文はこの構図を、Kähler多様体の奇数次元対応物である3次元コンパクトSasakian多様体へ移す。

basic第一Chern類が負で横断正則接束が滑らかに自明という仮定のもとで、basic二次微分から$SU(1,1)$指標空間への切断を構成する。その像は一つの連結成分全体であり、パラメータ空間との微分同相になる。

さらに表現を$\widetilde{SL_2(\mathbb R)}$へ持ち上げる。この連結成分は負のbasic第一Chern類をもつSasakian構造の同値類と同定されるため、Hitchin切断は抽象的な表現の族にとどまらず、横断正則構造を動かす標準的なSasakian変形族となる。

## 背景と問題設定

3次元Sasakian多様体は1次元葉層をもち、その横断方向にKähler構造がある。定理の仮定のもとではSeifertファイバー空間として複素1次元orbifold $X$上に載り、basic二次微分は$X$上の二次微分に対応する。その実次元は$6g(X)-6+2n(X)$であり、閉曲面のHitchin成分のorbifold版と見ることができる。

## 主結果

### Hitchin切断（Theorem 1.1）

コンパクト3次元Sasakian多様体$(M,T_M^{1,0},\eta)$について

$$
c_{1,B}(T_M^{1,0})=-C[d\eta]\quad(C>0),\qquad c_1(T_M^{1,0})=0
$$

を仮定する。このとき滑らかな写像

$$
\sigma:H_B^{1,0}(M,T_M^{1,0*})\longrightarrow
\operatorname{Hom}^s(\pi_1M,SU(1,1))/SU(1,1)
$$

が存在し、左辺のベクトル空間を右辺の一つの連結成分へ微分同相に写す。

### 持ち上げと幾何学的解釈（Theorems 1.2, 1.3）

$\widetilde{SL_2(\mathbb R)}\to SL_2(\mathbb R)\simeq SU(1,1)$を用いると、$\sigma$は忠実かつ余コンパクト離散像をもつ表現の同値類へ持ち上がる。この持ち上げも一つの連結成分への微分同相であり、basic二次微分でパラメータ付けられた互いに非同値な$\widetilde{SL_2(\mathbb R)}$-Sasakian構造の標準的滑らかな族を与える。

## 証明の見取り図

Introductionでは、compact Sasakian多様体上の非可換Hodge対応をcyclic Higgs bundleへ適用することがTheorem 1.1の核とされる。得られた$SU(1,1)$表現を普遍被覆群へ持ち上げ、負の横断第一Chern類をもつSasakian構造と忠実離散表現の対応を介して幾何学的変形へ戻す。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.06919](https://arxiv.org/abs/2609.06919)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Theorem 1.2, Theorem 1.3
- **論文構成の説明:** Introductionには節構成の列挙なし
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
