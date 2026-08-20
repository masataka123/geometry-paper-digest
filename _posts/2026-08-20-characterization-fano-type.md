---
layout: paper
title: "A characterization of Fano type varieties"
title_ja: "Fano型多様体の特徴づけ"
authors: "Yiming Zhu"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We prove a characterization of Fano type varieties.
topic: algebraic-geometry
tags:
  - fano-varieties
  - singularities
  - birational-geometry
arxiv_id: "2603.07519v2"
arxiv_url: "https://arxiv.org/abs/2603.07519"
arxiv_submitted: "2026-03-08"
arxiv_updated: "2026-03-16"
summary: >-
  射影正規多様体がFano typeであることを、反標準因子のbigness、反標準環の有限生成、そのProjのklt性という3条件で特徴づける。多様体自身に $\mathbb Q$-Gorenstein性を仮定せず、Weil因子のsection ringと反標準modelによってFano型を検出する。
abstract_en: >-
  We prove a characterization of Fano type varieties.
summary_en: ""
abstract_ja: >-
  Fano型多様体の特徴づけを証明する。
abstract_source_url: "https://arxiv.org/abs/2603.07519"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2603.07519](https://arxiv.org/abs/2603.07519)
- **著者:** Yiming Zhu
- **初回投稿日:** 2026年3月8日
- **最終更新日:** 2026年3月16日（v2）
- **主分類:** math.AG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

射影正規多様体 $X$ がFano typeであるとは、あるeffectiveな $\mathbb Q$-divisor $\Delta$ が存在して $(X,\Delta)$ がkltかつ $-(K_X+\Delta)$ がampleとなることである。この定義は良い境界の存在を要求するため、$X$ 自身から直接検査できる判定条件が望まれる。

本論文は反標準環の有限生成とそのProjの特異点によりFano typeを特徴づける。重要なのは $X$ が $\mathbb Q$-Gorensteinとは限らない点であり、既存の判定を非 $\mathbb Q$-GorensteinなFano type多様体まで拡張する。

## 背景と問題設定

反標準Weil因子のsection ringを

$$
R(X,-K_X)=\bigoplus_{m\ge0}H^0(X,-mK_X)
$$

と置く。有限生成なら $Y=\operatorname{Proj}_{\mathbb C}R(X,-K_X)$ が反標準modelを与える。局所版では反標準sheaf algebraの有限生成とrelative Projのklt性がklt typeを特徴づけることが知られており、本論文はその大域版を確立する。

## 主結果

### Fano typeの反標準環による特徴づけ（Theorem 1.2）

射影正規多様体 $X$ がFano typeであるための必要十分条件は、次の3条件である。

1. $-K_X$ がbigである。
2. $R(X,-K_X)$ が有限生成である。
3. $Y=\operatorname{Proj}_{\mathbb C}R(X,-K_X)$ がkltである。

この同値は $X$ の $\mathbb Q$-Gorenstein性を仮定しない。したがって反標準類がCartierでない場合にも、section ringとそのmodelだけでFano typeを判定できる。

## 証明の見取り図

必要性では、反標準sheaf algebraのrelative Projを取って $X$ のsmallな $\mathbb Q$-Gorenstein model $X'$ を構成し、$R(X,-K_X)\simeq R(X',-K_{X'})$ と既存の $\mathbb Q$-Gorenstein判定を用いる。

十分性では、Weil因子の有限生成section ringに対する移動部分・固定部分の記述を整備する。解消 $X'\to X$ 上で反標準写像を $Y$ へのmorphismにし、固定部分と例外因子が $Y$ 上very exceptionalであることを使う。得られたklt pairのnefかつbigな反標準類からFano typeを導き、birational imageへ降ろす。v2ではChen Jiangによる、terminalizationとnegativity lemmaを使う短い別証明も収録される。

## 原論文との対応

- **Abstractページ:** [arXiv:2603.07519](https://arxiv.org/abs/2603.07519)
- **Introduction:** Section 1, pp. 1–2
- **主要結果:** Theorem 1.2
- **確認したarXivバージョン:** v2
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
