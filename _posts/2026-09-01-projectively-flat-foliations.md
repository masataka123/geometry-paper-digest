---
layout: paper
title: "Projectively flat foliations"
title_ja: "射影的平坦な葉層"
authors: "Stéphane Druel"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We describe the structure of regular codimension $1$ foliations with numerically projectively flat tangent bundle on complex projective manifolds of dimension at least $4$. Along the way, we prove that either the normal bundle of a regular codimension $1$ foliation is pseudo-effective, or its conormal bundle is nef.
topic: algebraic-geometry
tags:
  - foliations
  - vector-bundles-sheaves
  - positivity
arxiv_id: "2401.03311v1"
arxiv_url: "https://arxiv.org/abs/2401.03311"
arxiv_submitted: "2024-01-06"
arxiv_updated: "2024-01-06"
summary: >-
  4次元以上の複素射影多様体上で、接束が数値的射影平坦な正則余次元1葉層を分類する。有限エタール被覆の後に現れる射影直線束、アーベル多様体上の線形葉層、曲線上のアーベルスキームなどの構造と、標準因子が豊富な残余の場合を切り分ける。
abstract_en: >-
  We describe the structure of regular codimension $1$ foliations with numerically projectively flat tangent bundle on complex projective manifolds of dimension at least $4$. Along the way, we prove that either the normal bundle of a regular codimension $1$ foliation is pseudo-effective, or its conormal bundle is nef.
summary_en: ""
abstract_ja: >-
  4次元以上の複素射影多様体上で、接束が数値的射影平坦である正則余次元1葉層の構造を記述する。その過程で、任意の正則余次元1葉層について、法束が擬有効であるか、余法束がnefであるかのいずれかが成り立つことも示す。
abstract_source_url: "https://arxiv.org/abs/2401.03311"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2401.03311](https://arxiv.org/abs/2401.03311)
- **著者:** Stéphane Druel
- **初回投稿日:** 2024年1月6日
- **最終更新日:** 2024年1月6日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

## 要約

接束が数値的平坦な射影多様体は、有限エタール被覆を除けばアーベル多様体となる。Jahnke–Radloffはこの現象を正規化接束の数値的平坦性へ広げ、本論文はさらに余次元1の正則葉層へ拡張する。

葉層の接束 $F$ が数値的射影平坦であるという仮定の下で、4次元以上の母多様体と葉層の構造を四つの場合に分類する。有限エタール被覆を取ると、三つの場合は明示的な幾何構造で記述され、残る場合では $K_X$ の豊富性と余法束・余接束のnef性が得られる。

分類の途中で、一般の正則余次元1葉層の法束 $N$ に対する擬有効性と余法束 $N^*$ のnef性の二者択一も証明される。

## 背景と問題設定

階数 $r$ のベクトル束 $E$ の数値的射影平坦性は、正規化束 $S^rE\otimes\det(E^*)$ の数値的平坦性で定義される。これは適当な偏極に関する半安定性とBogomolov–Gieseker等号

$$
c_2(E)\cdot H^{n-2}=\frac{r-1}{2r}c_1(E)^2\cdot H^{n-2}
$$

に対応する。本論文では $E=F$ を正則余次元1葉層の接束として、その等号的状況が葉層をどこまで剛直化するかを問う。

## 主結果

### 構造定理（Theorem 1.1）

$\dim X=n\geq4$ の複素射影多様体上の正則余次元1葉層 $F\subset T_X$ について、$S^{n-1}F\otimes\det(F^*)$ が数値的平坦ならば、次のいずれかが成り立つ。

1. $X$ はアーベル多様体の有限エタール商 $Y$ 上の $\mathbb P^1$ 束で、$F$ は平坦Ehresmann接続を定める。
2. あるアーベル多様体 $A$ からの有限エタール被覆 $\gamma:A\to X$ があり、$\gamma^{-1}F$ は線形葉層である。
3. 種数2以上の滑らかな完備曲線 $C$ 上のアーベルスキーム $f:B\to C$ からの有限エタール被覆 $\gamma:B\to X$ があり、$\gamma^{-1}F$ は $f$ により誘導される。
4. $K_X$ はampleで $\kappa(K_F)=\dim X$、さらに $N^*$ と $\Omega_X^1$ はnefである。

Introductionは第4の場合の例が知られていないこと、および次元仮定を弱めると結論が偽になり得ることも指摘する。

### 法束の二者択一（Theorem 1.2）

任意の次元の複素射影多様体上の正則余次元1葉層について、法束 $N$ が擬有効であるか、余法束 $N^*$ がnefであるかのいずれかが成り立つ。これは構造定理の証明に用いられると同時に、独立にも意味をもつ正値性の制約である。

## 証明の見取り図

Introductionによれば、まず法束の二者択一を確立する。非極小の場合の葉層を記述した後、Shafarevich写像を使って $F\cong L^{\oplus n}$ 型の特別な場合へ還元し、$K_X$ のabundanceを示す。極小の場合は余法束がnefの場合と法束が擬有効の場合に分け、$K_F$ のnef reduction mapが有限エタール被覆後にアーベルスキームとなることを用いて最終分類を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2401.03311](https://arxiv.org/abs/2401.03311)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2
- **論文構成の説明:** Introduction, p. 2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** Creative Commons Attribution 4.0 International
- **source_scope:** Abstract and Introduction
