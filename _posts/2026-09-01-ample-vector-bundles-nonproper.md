---
layout: paper
title: "Ample vector bundles on non-proper schemes"
title_ja: "非固有スキーム上の豊富ベクトル束"
authors: "Adrian Langer"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We solve two open problems on ample vector bundles posed by Hartshorne in 1966. We prove that tensor products of ample vector bundles on schemes of finite type over an algebraically closed field are ample in arbitrary characteristic, extending Hartshorne's characteristic-zero result and Barton's projective positive-characteristic theorem. More generally, let f: X -> S be a morphism of schemes. Then we prove that tensor products of f-ample vector bundles are f-ample. Moreover, if E is an f-ample vector bundle of rank r>0 and W is a finite locally free polynomial GL(r,S)-module of positive rank with W_0 = 0, then E(W) is f-ample. In particular, Gamma^n E is f-ample for every n>0. Finally, adapting a construction of Ejiri-Fujino-Iwai, we show that in every characteristic a smooth quasi-projective surface carries a non-ample extension of an ample line bundle by itself.
topic: algebraic-geometry
tags:
  - positivity
  - vector-bundles-sheaves
  - positive-characteristic
arxiv_id: "2608.29320v1"
arxiv_url: "https://arxiv.org/abs/2608.29320"
arxiv_submitted: "2026-08-29"
arxiv_updated: "2026-08-29"
summary: >-
  Hartshorneが1966年に提起した豊富ベクトル束の二問題を解く。任意標数・非固有の場合にもテンソル積の豊富性を証明する一方、豊富線束の自己拡大は非固有曲面上で豊富とは限らないことを示す。
abstract_en: ""
summary_en: >-
  The paper resolves two longstanding questions about ample vector bundles beyond the proper setting. Tensor products preserve relative ampleness over an arbitrary base, and a broad class of polynomial constructions, including divided powers, does so as well. In contrast, an extension of an ample line bundle by itself can fail to be ample on a smooth quasi-projective surface.
abstract_ja: >-
  代数閉体上の有限型スキームで豊富ベクトル束のテンソル積が任意標数で豊富であることを示し、さらに相対的な形へ一般化する。多項式表現から作る束や分割冪の豊富性も導く一方、非固有な滑らかな準射影曲面では豊富線束の自己拡大が豊富でない例を構成する。
abstract_source_url: "https://arxiv.org/abs/2608.29320"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2608.29320](https://arxiv.org/abs/2608.29320)
- **著者:** Adrian Langer
- **初回投稿日:** 2026-08-29
- **最終更新日:** 2026-08-29
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

線束とは異なり、ベクトル束の豊富性はテンソル操作の下で扱いが難しい。Hartshorneは標数零でテンソル積の豊富性を示したが、正標数の非固有スキームの場合は未解決であった。

本論文は任意標数でこの問題を解き、さらに任意の射 $f:X\to S$ に対する相対豊富性へ拡張する。分割冪を含む多項式表現から得る随伴束も豊富となる。

これに対して、固有スキームで成り立つ「豊富ベクトル束の拡大は豊富」という性質は非固有の場合に破れる。滑らかな準射影曲面上で豊富線束 $L$ の自己拡大が非豊富となる例を与える。

## 背景と問題設定

ベクトル束 $E$ の豊富性は射影化 $\mathbb P_X(E)$ の普遍商線束 $\mathcal O(1)$ の豊富性で定義される。問題は、部分束へ豊富性が一般に遺伝しないため、正標数で分割冪とテンソル冪を結ぶ自然写像だけでは結論できない点にある。

## 主結果

### テンソル積（Theorems 0.1, 0.2）

代数閉体上の有限型スキームで豊富な $E_1,E_2$ に対し $E_1\otimes E_2$ は豊富である。より一般に任意の $f:X\to S$ と $f$-豊富束 $E_1,E_2$ に対し、テンソル積も $f$-豊富となる。

### 多項式表現（Theorem 0.3）

階数 $r>0$ の $f$-豊富束 $E$ と、次数零成分 $W_0=0$ の正階数有限局所自由多項式 $\mathrm{GL}_{r,S}$ 加群 $W$ に対し $E(W)$ は $f$-豊富である。特に全ての $n>0$ について $\Gamma^nE$ は $f$-豊富となる。

### 非固有の場合の反例（Theorem 0.4）

任意標数の代数閉体上に、滑らかな準射影曲面 $S$、豊富線束 $L$、完全列

$$
0\longrightarrow L\longrightarrow E\longrightarrow L\longrightarrow0
$$

が存在し、$E$ は豊富でない。

## 証明の見取り図

外積二次 $\bigwedge^2E$ の豊富性を新たに証明し、直和へ適用してテンソル積の場合を得る。相対GITとvan der Kallenのpower reductivityを用いて任意の基礎と多項式表現へ拡張する。反例はEjiri–Fujino–Iwaiの構成を開部分スキームへ制限して作る。

## 原論文との対応
- **Abstractページ:** [arXiv:2608.29320](https://arxiv.org/abs/2608.29320)
- **Introduction:** Introduction, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 0.1–0.4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
