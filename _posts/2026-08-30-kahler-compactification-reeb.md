---
layout: paper
title: >-
  Kähler compactification of $\mathbb{C}^n$ and Reeb dynamics
title_ja: >-
  ケーラーコンパクト化とReeb力学
authors: >-
  Chi Li, Zhengyi Zhou
arxiv_primary_category: "math.DG"
arxiv_categories:
  - "math.DG"
  - "math.AG"
  - "math.SG"
arxiv_abstract: >-
  Let $X$ be a smooth complex manifold. Assume that $Y\subset X$ is a Kähler submanifold such that $X\setminus Y$ is biholomorphic to $\mathbb{C}^n$. We prove that $(X, Y)$ is biholomorphic to the standard example $(\mathbb{P}^n, \mathbb{P}^{n-1})$. We then study certain Kähler orbifold compactifications of $\mathbb{C}^n$ and, as an application, prove that on $\mathbb{C}^3$ the flat metric is the only asymptotically conical Ricci-flat Kähler metric whose metric cone at infinity has a smooth link. As a key technical ingredient, we derive a new characterization of minimal discrepancy of isolated Fano cone singularities by using $S^1$-equivariant positive symplectic homology.
topic: differential-geometry
tags:
  - singularities
  - fano-varieties
  - symplectic-contact-geometry
  - noncompact-kahler-geometry
arxiv_id: "2409.10275v3"
arxiv_url: "https://arxiv.org/abs/2409.10275"
arxiv_submitted: "2024-09-16"
arxiv_updated: "2025-10-01"
summary: >-
  複素ユークリッド空間 $\mathbb{C}^n$ の滑らかなKähler境界をもつコンパクト化を分類し、標準対 $(\mathbb{P}^n,\mathbb{P}^{n-1})$ しかないことを示す。さらにReeb軌道と正の $S^1$ 同変symplectic homologyからFano錐特異点のminimal discrepancyを読み取り、3次元の漸近錐型Ricci-flat Kähler計量の剛性を導く。
abstract_en: >-
  Let $X$ be a smooth complex manifold. Assume that $Y\subset X$ is a Kähler submanifold such that $X\setminus Y$ is biholomorphic to $\mathbb{C}^n$. We prove that $(X, Y)$ is biholomorphic to the standard example $(\mathbb{P}^n, \mathbb{P}^{n-1})$. We then study certain Kähler orbifold compactifications of $\mathbb{C}^n$ and, as an application, prove that on $\mathbb{C}^3$ the flat metric is the only asymptotically conical Ricci-flat Kähler metric whose metric cone at infinity has a smooth link. As a key technical ingredient, we derive a new characterization of minimal discrepancy of isolated Fano cone singularities by using $S^1$-equivariant positive symplectic homology.
summary_en: ""
abstract_ja: >-
  滑らかな複素多様体 $X$ とKähler部分多様体 $Y$ が $X\setminus Y\simeq\mathbb{C}^n$ を満たすなら、対 $(X,Y)$ は標準的な射影空間の対に双正則である。orbifold Kählerコンパクト化も調べ、付随するFano錐のminimal discrepancyをReeb力学で特徴づける。これにより $\mathbb{C}^3$ 上で、無限遠の錐のlinkが滑らかな漸近錐型Ricci-flat Kähler計量は平坦計量だけであることを示す。
abstract_source_url: "https://arxiv.org/abs/2409.10275"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- arXiv: [2409.10275v3](https://arxiv.org/abs/2409.10275)
- 著者: Chi Li, Zhengyi Zhou
- 対象: Abstract と Introduction

## 要約

本論文の第一の問題は、$X\setminus Y\simeq\mathbb{C}^n$ となるコンパクト複素多様体と滑らかな境界 $Y$ の分類である。既知の非標準例では境界が特異であり、滑らかな境界なら標準例だけだという予想が残されていた。

第二の問題は、$\mathbb{C}^n$ 上の漸近錐型Ricci-flat Kähler計量の剛性である。コンパクト化の境界から生じるFano錐特異点を、Reeb軌道とsymplectic homologyで制御することが両問題を結ぶ。

### 主定理1（Theorem 1.1）

$Y\subset X$ がKähler部分多様体で $X\setminus Y\simeq\mathbb{C}^n$ なら、
$$
(X,Y)\simeq(\mathbb{P}^n,\mathbb{P}^{n-1}).
$$
証明では $Y$ のFano指数が $n$ であることを示し、Kobayashi–Ochiaiの特徴づけを適用する。

### AC計量への帰結（Theorem 1.3）

AC Kähler計量から得られるorbifold compactificationのFano錐 $C(Y,L)$ はGorenstein kltで、minimal discrepancyが $n-1$ である。Shokurov予想を仮定すればAC Ricci-flat Kähler計量の平坦性予想が従い、特に $n\leq3$ では無条件に成立する。

### minimal discrepancyの公式（Theorem 1.4）

$n$ 次元孤立Fano錐特異点 $o\in C$ とquasi-regular conic contact form $\eta$ に対し、
$$
2\,\mathrm{md}(o,C)=\inf_\gamma l^{\mathrm{SFT}}_\eta(\gamma)>-2.
$$
さらに $c_1^{\mathbb Q}(W)=0$ のLiouville filling $W$ があれば、
$$
2\,\mathrm{md}(o,C)=\inf\{d\mid SH_d^{+,S^1}(W;\mathbb Q)\neq0\}+n-3.
$$

## 証明の見取り図

標準性には、$\mathbb{C}^n$ のsymplectic topologyからの関手的計算と、境界の法束の単位円束上のBoothby–Wang接触構造に対するMorse–Bottスペクトル系列という二つの計算を突き合わせる。AC問題ではorbifold版へ拡張し、Reeb軌道の指数をminimal discrepancyへ翻訳する。

## 原論文との対応

コンパクト化はTheorem 1.1、AC計量はConjecture 1.2とTheorem 1.3、Reeb力学による公式はTheorem 1.4に対応する。
