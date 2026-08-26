---
layout: paper
title: "Orbifold Bogomolov-Gieseker inequalities on compact Kähler varieties"
title_ja: "コンパクトKähler多様体上のorbifold Bogomolov--Gieseker不等式"
authors: "Xin Fu, Wenhao Ou"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
arxiv_abstract: >-
  In a previous paper, the orbifold Bogomolov-Gieseker inequality is proved for a stable reflexive sheaf on a compact Kähler variety with klt singularities. In this paper, we give a characterization on the stable reflexive sheaf when the Bogomolov-Gieseker equality holds.
topic: differential-geometry
tags:
  - vector-bundles-sheaves
  - stability
  - hermite-einstein-metrics
  - chern-classes
arxiv_id: "2511.03530v1"
arxiv_url: "https://arxiv.org/abs/2511.03530"
arxiv_submitted: "2025-11-05"
arxiv_updated: "2025-11-05"
summary: >-
  klt特異点をもつコンパクトKähler多様体上の安定反射層について、orbifold Chern類のBogomolov--Gieseker等号成立を特徴づける。第1・第2 orbifold Chern数がともに消えることと、有限準étale被覆後の反射的引き戻しがunitary flat束になることが同値である。
abstract_en: >-
  In a previous paper, the orbifold Bogomolov-Gieseker inequality is proved for a stable reflexive sheaf on a compact Kähler variety with klt singularities. In this paper, we give a characterization on the stable reflexive sheaf when the Bogomolov-Gieseker equality holds.
summary_en: ""
abstract_ja: >-
  先行研究では、klt特異点をもつコンパクトKähler多様体上の安定反射層に対してorbifold Bogomolov--Gieseker不等式が証明された。本論文は、その安定反射層についてBogomolov--Gieseker等号が成立する条件を特徴づける。
abstract_source_url: "https://arxiv.org/abs/2511.03530"
license_name: "CC0 1.0 Universal"
license_url: "https://creativecommons.org/publicdomain/zero/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2511.03530](https://arxiv.org/abs/2511.03530)
- **著者:** Xin Fu, Wenhao Ou
- **初回投稿日・最終更新日:** 2025年11月5日（v1）
- **主分類・副分類:** Differential Geometry (math.DG), Algebraic Geometry (math.AG)
- **ライセンス:** [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)

## 要約

滑らかなコンパクトKähler多様体では、安定束に対するHermite--Einstein計量の存在と曲率計算がBogomolov--Gieseker不等式を与え、等号成立はflat性と結び付く。klt特異空間ではorbifold Chern類による不等式が既に得られていたが、等号の場合の特徴づけが残っていた。

本論文は、安定反射層の第1・第2 orbifold Chern数がKähler類に対して消えることと、有限準étale被覆上でunitary flat束になることが同値だと示す。特異空間上の数値的等号を、被覆後の微分幾何的構造へ翻訳する結果である。

解析的な核心は、特異空間のbimeromorphic orbifold model上で退化するKähler形式に関するHermite--Einstein計量を構成し、その一様評価と収束を確立する点にある。

## 背景と問題設定

滑らかな射影多様体 $Z$、階数 $r$ の安定束 $F$、ample因子 $H$ に対する古典的不等式は

$$
\left(c_2(F)-\frac{r-1}{2r}c_1(F)^2\right)\cdot H^{n-2}\ge 0
$$

である。論文はこれをklt特異点をもつコンパクトKähler多様体と安定反射層のorbifold Chern類へ移した状況で、等号が何を意味するかを問う。

## 主結果

### 等号成立の特徴づけ（Theorem 1.2）

$(Z,\omega)$ を次元 $n$ のkltコンパクトKähler多様体、$F$ を $\omega$-安定反射層とする。このとき次の二条件は同値である。

$$
\widehat c_2(F)\cdot[\omega]^{n-2}
=\widehat c_1(F)^2\cdot[\omega]^{n-2}=0,
$$

および、有限準étale被覆 $p:Z'\to Z$ が存在して反射的引き戻し $(p^*F)^{**}$ がunitary flat vector bundleになることである。結論は単なる判別式の消滅ではなく、第1 Chern数も消えるという仮定の下でのunitary flat性の特徴づけである。

## 証明の見取り図

先行研究のbimeromorphic map $\rho:X\to Z$ を用いて、$X$ 上の引き戻しをorbifold vector bundleとして扱う。$\rho^*\omega$ に収束するorbifold Kähler形式 $\omega_i$ と、それぞれに対応するHermite--Einstein計量 $h_i$ を取る。退化族 $(X,\omega_i)$ の一様幾何評価と、$L^1$ ノルムから $L^\infty$ ノルムを一様に制御する平均値型評価を合わせ、正規化した $h_i$ の収束を得る。極限計量に古典的曲率計算を適用し、準étale被覆後のunitary flat性へ到達する。

## 原論文との対応

- **Abstractページ:** [arXiv:2511.03530](https://arxiv.org/abs/2511.03530)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中の主要定理:** Theorems 1.1, 1.2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC0 1.0 Universal
- **source_scope:** Abstract and Introduction
