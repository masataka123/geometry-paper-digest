---
layout: paper
title: "Theorems of Bertini and Chevalley"
title_ja: "BertiniとChevalleyの定理"
authors: "János Kollár"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
tags: []
arxiv_id: "2605.03115v1"
arxiv_url: "https://arxiv.org/abs/2605.03115"
arxiv_submitted: "2026-05-04"
arxiv_updated: "2026-05-04"
summary: >-
  Bertiniの幾何学的既約性定理と、連結滑らかな代数群をアフィン部分と固有部分に分解するChevalleyの定理に短い証明を与える。Weil因子、曲線のJacobian、代数群への有理写像という比較的古典的な道具だけで構成を見通せることが主眼である。
abstract_en: >-
  We give a short proof of Chevalley's theorem that every algebraic group is an extension of an Abelian variety by a linear algebraic group. Along the way we treat Bertini's irreducibility theorem.
summary_en: ""
abstract_ja: >-
  任意の代数群がAbel多様体を線形代数群で延長したものになるというChevalleyの定理に短い証明を与える。その過程でBertiniの既約性定理も扱う。
abstract_source_url: "https://arxiv.org/abs/2605.03115v1"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2605.03115v1](https://arxiv.org/abs/2605.03115v1)
- **著者:** János Kollár
- **初回投稿日:** 2026年5月4日
- **最終更新日:** 2026年5月4日（v1）
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

本稿は二つの古典定理を、Shafarevichの教科書にある基礎事項を中心に短く証明する。第一は一般超平面切断の幾何学的既約性を保証するBertini型定理、第二は連結滑らかな代数群の構造をアフィン部分と固有部分に分けるChevalley（Barsotti--Chevalley）定理である。

Chevalleyの定理では、完全化した群作用とWeil因子から曲線のJacobianへの写像を作り、その核が線形表現を持つことを示してアフィン部分を取り出す。商はJacobianの積に入る固有代数群となる。

Bertiniの既約性はこの議論の補助道具であると同時に独立した主結果として扱われる。一般の超平面切断の逆像が幾何学的に既約であることを使い、因子の族が張る線形系を群作用の下で制御する。

新しい一般化を主張する論文というより、既知の構造定理に現代的で短い証明経路を与えることが狙いである。特に、Cartier因子に限定せずWeil因子を使うことが、正規な射影的完備化上の有理群作用に適した枠組みだという方法論的メッセージが強調される。

## 背景と問題設定

Bertiniの滑らかさ定理に比べ、既約性定理は教科書で扱われる頻度が低い。本稿で用いる形では、幾何学的に既約な多様体 $X$ から射影空間への支配的射

$$
\pi:X\longrightarrow\mathbb P^n,\qquad n\geq2
$$

に対し、一般の超平面 $H\subset\mathbb P^n$ の逆像 $\pi^{-1}(H)$ が幾何学的に既約となる。

一方、Chevalleyの構造定理は、完全体 $k$ 上の連結滑らかな代数群 $G$ の非線形な固有部分と線形な部分を分離する。証明の問題は、$G$ の正規射影的完備化上では群作用が一般に有理的にしか定義されず、完備線形系の単純な移送ができない点にある。

## 主結果

### Bertiniの既約性定理（Theorem 1）

$X$ を幾何学的に既約な $k$-多様体、$\pi:X\to\mathbb P^n$ を支配的射、$n\geq2$ とする。このとき一般の超平面 $H$ に対して $\pi^{-1}(H)$ は幾何学的に既約である。論文はこの古典結果に、基本的な代数幾何の範囲で短い証明を与える。

### Chevalleyの構造定理（Theorem 2）

$k$ を完全体、$G$ を $k$ 上の連結滑らかな代数群とする。このとき完全列

$$
1\longrightarrow H\longrightarrow G\longrightarrow A\longrightarrow0
$$

があり、$H$ はアフィン代数群、$A$ は固有代数群である。Introductionが掲げる定式化では、固有代数群は構成上、滑らかな射影曲線のJacobianの積の部分群として現れる。したがってこれは、通常「線形代数群によるAbel多様体の延長」と呼ばれる分解を与える。

## 証明の見取り図

$G$ のアフィン開集合を射影空間内で閉じ、正規化して、有理的で忠実な $G$-作用を持つ正規射影多様体 $X$ を得る。$X$ 上のWeil因子 $D$ の移動を滑らかな射影曲線 $C_i\subset X_{\mathrm{sm}}$ に制限し、有限個のJacobianへの射

$$
\alpha_{X,D}:G\longrightarrow\prod_i\operatorname{Jac}(C_i)
$$

を作る。その核の単位成分 $H$ を適切な線形系に作用させる。一般の場合はBertiniの既約性により、幾何学的に既約な族で張られる線形部分系が有理群作用の下で保たれることを保証する。忠実な射影線形表現から $H$ のアフィン性が従い、像の閉包が固有な商 $A$ を与える。

## 原論文との対応

- **Abstractページ:** [arXiv:2605.03115v1](https://arxiv.org/abs/2605.03115v1)
- **Introduction相当部分:** 冒頭のTheorems 1--2、目的と歴史的コメント
- **Introduction中で言及された主要定理番号:** Theorems 1, 2
- **論文構成の説明:** 冒頭およびSection 2冒頭の5段階の証明概略
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
