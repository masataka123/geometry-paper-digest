---
layout: paper
title: 'The nilpotent quotients of normal quasi-projective varieties with proper quasi-Albanese map'
title_ja: '固有な準Albanese写像を持つ正規準射影多様体の冪零商'
authors: "Rodolfo Aguilar Aguilar, Frédéric Campana"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We show that if $X$ is a normal complex quasi-projective variety, the quasi-Albanese map of which is proper, then the torsionfree nilpotent quotients of $π_1(X)$ are, up to a controlled finite index, the same ones as those of the normalisation of its quasi-Albanese image. When $X$ is quasi-Kähler smooth, we get the same conclusion, but only for the smooth models of the quasi-Albanese image. In this second case, the proof is elementary, as the one given in [Cam95] for $X$ compact. In the normal quasi-projective case, the étale Galois cover of $X$ associated to the nilpotent completion of $π_1(X)$ is thus holomorphically convex. This is proved in the smooth case by $3$ other methods in [GGK22], which motivated the present text. When $X$ is `special' in the sense of [Cam11], we deduce that the torsion free nilpotent quotients of $π_1(X)$ are abelian. Examples show that this property fails (as first observed in [CDY22]) when the quasi-Albanese map is not proper. This leads to replace our previous `Abelianity conjecture' in the compact case by an `Nilpotency conjecture' in the non-compact quasi-Kähler context.
topic: algebraic-geometry
tags:
  - fundamental-groups
arxiv_id: "2301.11232v4"
arxiv_url: "https://arxiv.org/abs/2301.11232"
arxiv_submitted: "2023-01-26"
arxiv_updated: "2023-04-19"
summary: >-
  準Albanese写像が固有な正規複素準射影多様体について、基本群の無捩れ冪零商が準Albanese像の正規化のものと制御された有限指数を除いて一致することを示す。その結果、冪零完備化に付随するétale Galois被覆の正則凸性を得て、specialな場合には無捩れ冪零商がabel群になることを導く。
abstract_en: >-
  We show that if $X$ is a normal complex quasi-projective variety, the quasi-Albanese map of which is proper, then the torsionfree nilpotent quotients of $π_1(X)$ are, up to a controlled finite index, the same ones as those of the normalisation of its quasi-Albanese image. When $X$ is quasi-Kähler smooth, we get the same conclusion, but only for the smooth models of the quasi-Albanese image. In this second case, the proof is elementary, as the one given in [Cam95] for $X$ compact. In the normal quasi-projective case, the étale Galois cover of $X$ associated to the nilpotent completion of $π_1(X)$ is thus holomorphically convex. This is proved in the smooth case by $3$ other methods in [GGK22], which motivated the present text. When $X$ is `special' in the sense of [Cam11], we deduce that the torsion free nilpotent quotients of $π_1(X)$ are abelian. Examples show that this property fails (as first observed in [CDY22]) when the quasi-Albanese map is not proper. This leads to replace our previous `Abelianity conjecture' in the compact case by an `Nilpotency conjecture' in the non-compact quasi-Kähler context.
summary_en: ""
abstract_ja: >-
  $X$ が固有な準Albanese写像を持つ正規複素準射影多様体ならば、$π_1(X)$ の無捩れ冪零商は、制御された有限指数を除いて準Albanese像の正規化の無捩れ冪零商と同じであることを示す。$X$ が滑らかな準Kähler多様体ならば、準Albanese像の滑らかなモデルに対して同じ結論を得る。正規準射影の場合、$π_1(X)$ の冪零完備化に付随するétale Galois被覆は正則凸である。さらにCampanaの意味でspecialならば無捩れ冪零商はabel群となるが、準Albanese写像の固有性を外すとこの性質が破れる例がある。
abstract_source_url: "https://arxiv.org/abs/2301.11232"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2301.11232](https://arxiv.org/abs/2301.11232)
- **著者:** Rodolfo Aguilar Aguilar, Frédéric Campana
- **初回投稿日:** 2023年1月26日
- **最終更新日:** 2023年4月19日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

準Kähler多様体 $X$ の準Albanese写像 $\alpha_X:X\to\operatorname{Alb}(X)$ を考え、その像の正規化や特異点解消と $X$ の基本群を比較する。中心的仮定は $\alpha_X$ の固有性であり、これにより像は閉じた準Kähler部分空間となる。

本論文は、基本群を下中心列の各段で割り、さらに捩れを除いた全ての冪零商をまとめる $\pi_1(X)_{\mathrm{nilp}}$ が、準Albanese像の対応する群と一致することを示す。有限写像を介する比較では、その像の指数が写像の次数以下に制御される。

正規準射影の場合には、冪零完備化に対応する被覆 $X^{\mathrm{nilp}}$ が正則凸となる。special準Kähler多様体では無捩れ冪零商のabel性が従う一方、固有性なしには反例があるため、非コンパクトの場合の予想はabel性ではなく冪零性を主張すべきだと論じる。

## 背景と問題設定

群 $G$ の下中心列第 $n+1$ 項による商から捩れを除いた群を $G'_n$ とし、その核を $K'_n(G)$ とする。本論文で用いる冪零化は

$$
G_{\mathrm{nilp}}=G\big/\bigcap_nK'_n(G)
$$

である。準Albanese写像のStein分解と像の正規化・特異点解消を並べ、それぞれの基本群の冪零化を比較する。

## 主結果

### 滑らかな準Kählerの場合（Theorem 1）

$X$ が準Kählerで $\alpha_X$ が固有ならば、準Albanese像の適切な滑らかなモデル $Z$ に対して

$$
\alpha_*:\pi_1(X)_{\mathrm{nilp}}
\xrightarrow{\sim}\pi_1(Z)_{\mathrm{nilp}}
$$

が成り立つ。別のモデル $Z_0$ への写像は単射で、その像の指数は有限写像の次数 $e$ 以下である。

### 正規準射影の場合（Theorems 3, 5 and Corollary 4）

$X$ が正規準射影で準Albanese写像が固有ならば、Stein分解の中間空間 $Z'$ について $\pi_1(X)_{\mathrm{nilp}}\cong\pi_1(Z')_{\mathrm{nilp}}$ となる。準Albanese像の正規化 $Z'_0$ への準同型は単射で、像の指数は高々 $e$ である。また $Z'^{\mathrm{nilp}}$ はSteinであり、$X^{\mathrm{nilp}}$ は正則凸となる。

### specialな場合の帰結（Corollary 2）

固有な準Albanese写像を持つspecial準Kähler多様体では

$$
\pi_1(X)_{\mathrm{nilp}}
=H_1(X,\mathbb Z)/\operatorname{Torsion}
$$

となり、すべての無捩れ冪零商がabel群になる。Introductionは、固有性を外すとこの結論が失敗する例があることを明記する。

## 証明の見取り図

滑らかな準Kählerの場合は、コンパクトな場合の基本群比較を開多様体へ拡張する群論的議論を用いる。正規準射影の場合は、準Albanese像に現れ得る特異点を扱うため、複素代数多様体のコホモロジーとホモトピー群上の混合Hodge構造を使う。正規の場合も準Albanese写像を定義すれば同じ枠組みが働き、Steinなabel被覆との有限写像から正則凸性を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2301.11232](https://arxiv.org/abs/2301.11232)
- **Introduction:** Section 1, pp. 2–5
- **Introduction中で言及された主要定理番号:** Theorems 1, 3, 5; Corollaries 2, 4
- **論文構成の説明:** Introduction末尾, p. 5
- **確認したarXivバージョン:** v4
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
