---
layout: paper
title: "On quasi-Albanese morphisms for log canonical Calabi-Yau pairs"
title_ja: "log canonical Calabi–Yau対の準Albanese射"
authors: "Yiming Zhu"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  In this note, we study quasi-Albanese morphisms for log canonical Calabi-Yau pairs and obtain several structural results. As an application, we prove a characterization of toric pairs.
topic: algebraic-geometry
tags:
  - calabi-yau-geometry
  - singularities
  - birational-geometry
  - toric-geometry
arxiv_id: "2511.14580v2"
arxiv_url: "https://arxiv.org/abs/2511.14580v2"
arxiv_submitted: "2025-11-18"
arxiv_updated: "2026-01-16"
summary: >-
  log canonical Calabi–Yau対からnon-klt locusを除いた開部分の準Albanese射を調べ、その優越性、既約一般ファイバー、局所安定性を証明する。crepant双有理モデル上で準Albanese多様体の標準コンパクト化への射を構成し、複雑度零の場合には元の対がtoricであることを導く。
abstract_en: >-
  In this note, we study quasi-Albanese morphisms for log canonical Calabi-Yau pairs and obtain several structural results. As an application, we prove a characterization of toric pairs.
summary_en: >-
  
abstract_ja: >-
  log canonical Calabi–Yau対の準Albanese射について複数の構造定理を与える。Kodaira次元零では準Albanese射が優越的で既約一般ファイバーをもち、$K_X+D_X\sim_{\mathbb Q}0$ の場合には余次元一で全射かつ局所安定となる。応用としてShokurov型複雑度が零となる対をtoric対として特徴づける。
abstract_source_url: "https://arxiv.org/abs/2511.14580v2"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2511.14580v2](https://arxiv.org/abs/2511.14580v2)
- **著者:** Yiming Zhu
- **初回投稿日:** 2025年11月18日
- **最終更新日:** 2026年1月16日
- **主分類:** math.AG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

滑らかなCalabi–Yau多様体のAlbanese射にはBeauville–Bogomolov分解に由来する強い構造があるが、log canonical対ではisotrivialityが壊れうる。そこで本論文はlog微分形式に自然な準Albanese射を用い、log canonical版分解定理への足場を作る。

$\kappa(K_X+D_X)=0$ なら、$X\setminus\operatorname{nklt}(X,D_X)$ の準Albanese射は優越的で一般ファイバーは既約となる。さらに $K_X+D_X\sim_{\mathbb Q}0$ なら余次元一で全射、flatで、全ファイバーがreducedかつsemi-log canonicalとなる。

準Albanese多様体 $G$ の標準コンパクト化 $(P_A,H)$ への有理写像は一般には正則でないが、crepant双有理モデル $(W,D_W)$ を選ぶことで連結ファイバーをもつ射へ直せる。複雑度零の等号ケースでは、開部分が $(\mathbb C^*)^n$ と余次元一で一致し、対がtoricであることまで従う。

## 背景と問題設定

準アーベル多様体は $0\to(\mathbb C^*)^d\to G\to A\to0$ を満たす可換代数群である。準Albanese射は準アーベル多様体への全ての射を普遍的に因子化する。境界を伴う場合、通常のAlbanese射よりlog構造を反映する。

## 主結果

### Theorem 1.2

射影log canonical対で $\kappa(K_X+D_X)=0$ なら
$$\alpha:X\setminus\operatorname{nklt}(X,D_X)\longrightarrow G$$
は優越的で、一般ファイバーは既約である。これはKawamataのlog smoothの場合を特異対へ拡張する。

### Theorem 1.3

$K_X+D_X\sim_{\mathbb Q}0$ なら $\alpha$ は余次元一で全射であり、対の射としてlocally stableである。特にflatで、全ファイバーはreducedかつsemi-log canonical特異点をもつ。

### Theorem 1.4

$(X,D_X)$ とcrepant双有理な $\mathbb Q$-factorial dlt対 $(W,D_W)$ があり、$G$ の標準コンパクト化への射 $g:W\to P_A$ は全射かつ連結ファイバーをもつ。さらに
$$K_W+D_W\sim_{\mathbb Q}g^*(K_{P_A}+H)$$
であり、$g^*H$ の台はnon-klt locusに含まれる。

### Toric特徴づけ（Theorem 1.6）

$\kappa(K_X+D_X)=0$ のlog canonical対では任意のreduced $0\leq\Delta_X\leq\lfloor D_X\rfloor$ に対して複雑度は非負である。等号かつ $K_X+D_X\sim_{\mathbb Q}0$ なら $(X,D_X)$ はtoric対であり、$(\mathbb P^1)^n$ の標準境界とcrepant双有理である。

## 証明の見取り図

Introductionは、準Albanese射とcanonical bundle formulaをMMPで整合させる方針を示す。dlt化と双有理収縮によって標準コンパクト化への有理写像を正則化し、境界の垂直・水平成分を制御する。最後に境界成分が生成する因子群のrankと準Albaneseのtorus部分の次元を比較し、複雑度の等号からtoric特徴づけへ進む。

## 原論文との対応

- **Abstractページ:** [arXiv:2511.14580v2](https://arxiv.org/abs/2511.14580v2)
- **Introduction:** Section 1, pp. 1–4
- **主要結果:** Theorems 1.2, 1.3, 1.4, 1.6
- **確認したarXivバージョン:** v2
- **source_scope:** Abstract and Introduction
